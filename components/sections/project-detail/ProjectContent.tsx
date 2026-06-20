import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { ProjectDemoVideo } from "@/components/sections/project-detail/ProjectDemoVideo";
import { type Project, projects } from "@/lib/data/projects";

type ProjectContentProps = {
  project: Project;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-relaxed text-muted md:text-base"
        >
          <span
            className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ContentBlock({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="project-content-block border-b border-border pb-12 md:pb-14">
      <div className="flex items-baseline gap-4">
        <span className="project-content-index">{index}</span>
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
      </div>
      <div className="project-content-body mt-6">{children}</div>
    </article>
  );
}

export function ProjectContent({ project }: ProjectContentProps) {
  const projectIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <section id="project-content" className="section-padding pt-12 md:pt-16">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16 xl:grid-cols-[320px_1fr]">
          {/* Project info card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Project info
              </p>

              <h2 className="mt-4 text-lg font-bold leading-snug text-white">
                {project.title}
              </h2>
              <p className="mt-1 text-sm text-muted">{project.subtitle}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <dl className="mt-6 space-y-5 border-t border-border pt-6">
                {[
                  { label: "Client", value: project.metadata.client },
                  { label: "Services", value: project.metadata.services },
                  { label: "Year", value: project.metadata.date },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs uppercase tracking-widest text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <Link
                href={project.metadata.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:text-accent"
              >
                Live preview
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </aside>

          {/* Main content */}
          <div>
            <ContentBlock index="01" title="Overview">
              <BulletList items={project.overview} />
            </ContentBlock>

            <ContentBlock index="02" title="Business">
              <BulletList items={project.business} />
            </ContentBlock>

            <ContentBlock index="03" title="Technologies">
              <BulletList items={project.techStack} />
            </ContentBlock>

            <article className="project-content-block pt-12 md:pt-14">
              <div className="flex items-baseline gap-4">
                <span className="project-content-index">04</span>
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Video demo
                </h2>
              </div>
              <div className="project-content-body mt-6">
                <ProjectDemoVideo project={project} />
              </div>
            </article>
          </div>
        </div>

        {/* Prev / Next navigation */}
        <nav
          className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8"
          aria-label="Project navigation"
        >
          {prevProject ? (
            <Link
              href={`/portfolio/${prevProject.slug}`}
              className="group inline-flex max-w-[45%] items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent/30 hover:text-accent"
            >
              <ArrowLeft className="h-3.5 w-3.5 flex-shrink-0 transition-transform group-hover:-translate-x-0.5" />
              <span className="truncate text-muted transition-colors group-hover:text-accent">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group inline-flex max-w-[45%] items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent/30 hover:text-accent sm:ml-auto"
            >
              <span className="truncate text-muted transition-colors group-hover:text-accent">
                {nextProject.title}
              </span>
              <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : null}
        </nav>
      </div>
    </section>
  );
}
