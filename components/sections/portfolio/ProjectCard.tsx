"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { Tag } from "@/components/ui/Tag";
import { type Project } from "@/lib/data/projects";
import { registerGsap, prefersReducedMotion } from "@/lib/gsap/register";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  index?: number;
  className?: string;
};

export function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const indexLabel = String(index + 1).padStart(2, "0");

  const handleMouseEnter = () => {
    if (prefersReducedMotion() || !cardRef.current) return;
    registerGsap();
    gsap.to(cardRef.current, {
      y: -6,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  return (
    <Link
      ref={cardRef}
      href={`/portfolio/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "portfolio-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-accent/30",
        className
      )}
    >
      <span className="portfolio-card-index" aria-hidden>
        {indexLabel}
      </span>

      <div className="relative h-52 flex-shrink-0 overflow-hidden gradient-mockup md:h-56">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            {project.client}
          </span>
          {project.tags.slice(0, 2).map((tag) => (
            <Tag key={tag} className="!bg-white/5 !text-white/80">
              {tag}
            </Tag>
          ))}
        </div>
        <h3 className="mt-3 text-xl font-bold text-white transition-colors group-hover:text-accent md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">
          {project.subtitle}
        </p>
      </div>
    </Link>
  );
}
