import { notFound } from "next/navigation";
import { ProjectVideoBanner } from "@/components/sections/project-detail/ProjectVideoBanner";
import { ProjectContent } from "@/components/sections/project-detail/ProjectContent";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/lib/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.detailTitle} | John Carter`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectVideoBanner project={project} />
      <ProjectContent project={project} />
    </>
  );
}
