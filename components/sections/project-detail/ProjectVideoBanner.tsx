"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { type Project } from "@/lib/data/projects";
import { portfolioBanner } from "@/lib/data/portfolio";
import { prefersReducedMotion } from "@/lib/gsap/register";

type ProjectVideoBannerProps = {
  project: Project;
};

export function ProjectVideoBanner({ project }: ProjectVideoBannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = project.bannerVideo ?? portfolioBanner.videoSrc;
  const reduceMotion = prefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion()) return;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="project-video-banner relative min-h-[35vh] overflow-hidden lg:min-h-[40vh]">
      {!reduceMotion && (
        <div className="portfolio-video-banner-media absolute inset-0">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="project-video-banner-overlay absolute inset-0" aria-hidden />
          <div className="portfolio-video-banner-noise absolute inset-0" aria-hidden />
        </div>
      )}

      <div className="container-main relative z-10 flex min-h-[35vh] flex-col justify-between gap-6 pb-16 pt-[94px] lg:min-h-[40vh] lg:gap-8 lg:pb-20 lg:pt-[110px]">
        <Link
          href="/portfolio"
          className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>

        <div>
          <span className="project-video-banner-label">{project.client}</span>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl lg:text-nowrap">
            {project.detailTitle}
          </h1>
        </div>

        <Link
          href="#project-content"
          className="group inline-flex w-fit items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          View project details
          <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        </Link>
      </div>

      <div className="portfolio-video-banner-edge absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
