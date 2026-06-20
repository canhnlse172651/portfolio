"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ScrollDownButton } from "@/components/ui/ScrollDownButton";
import gsap from "gsap";
import { type Project } from "@/lib/data/projects";
import { registerGsap, prefersReducedMotion } from "@/lib/gsap/register";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    if (!sectionRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".project-title", {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power3.out",
      });
      gsap.from(".project-desc", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: 0.2,
        ease: "power3.out",
      });
      gsap.from(".project-mockup-left", {
        opacity: 0,
        x: -80,
        rotate: -8,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
      gsap.from(".project-mockup-right", {
        opacity: 0,
        x: 80,
        rotate: 8,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding pt-28 md:pt-32">
      <div className="container-main">
        <div className="flex items-start justify-between gap-8">
          <div className="max-w-3xl">
            <div className="accent-line mb-6" />
            <h1 className="project-title text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {project.detailTitle}
            </h1>
            <p className="project-desc mt-6 text-lg leading-relaxed text-muted">
              {project.description}
            </p>
          </div>
          <ScrollDownButton targetId="project-content" className="hidden md:flex" />
        </div>

        <div className="relative mt-16 flex items-center justify-center">
          <div className="project-mockup-left relative z-10 h-64 w-80 overflow-hidden rounded-2xl shadow-2xl md:h-80 md:w-96"
            style={{ transform: "rotate(-6deg)" }}
          >
            <Image
              src={project.mockupImages[0]}
              alt={`${project.title} mockup 1`}
              fill
              className="object-cover"
            />
          </div>
          <div
            className="project-mockup-right relative -ml-16 h-64 w-80 overflow-hidden rounded-2xl shadow-2xl md:-ml-24 md:h-80 md:w-96"
            style={{ transform: "rotate(6deg)" }}
          >
            <Image
              src={project.mockupImages[1] || project.mockupImages[0]}
              alt={`${project.title} mockup 2`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
