"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/lib/data/projects";
import { registerGsap, prefersReducedMotion } from "@/lib/gsap/register";
import { cn } from "@/lib/cn";

export function ProjectsSection() {
  const featured = projects.slice(0, 3);

  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="Take a look at the latest projects I've done"
          action={
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent"
            >
              Browse all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:grid-rows-2">
          {featured.map((project, index) => (
            <div
              key={project.slug}
              className={cn(
                "min-h-0",
                index === 0 &&
                  "h-full lg:col-start-1 lg:row-start-1 lg:row-span-2",
                index === 1 && "lg:col-start-2 lg:row-start-1",
                index === 2 && "lg:col-start-2 lg:row-start-2"
              )}
            >
              <ProjectPreviewCard
                project={project}
                featured={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreviewCard({
  project,
  featured,
}: {
  project: (typeof projects)[0];
  featured: boolean;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (prefersReducedMotion() || !cardRef.current) return;
    registerGsap();
    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <Link
      ref={cardRef}
      href={`/portfolio/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card transition-shadow hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="flex items-start justify-between p-6">
        <div>
          <p className="text-xs text-muted">{project.client}</p>
          <h3 className="mt-1 text-xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="text-sm text-muted">{project.subtitle}</p>
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "relative mt-auto overflow-hidden gradient-mockup",
          featured ? "min-h-80 flex-1" : "h-48"
        )}
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
  );
}
