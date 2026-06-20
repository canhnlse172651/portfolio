"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolioBanner } from "@/lib/data/portfolio";
import { projects } from "@/lib/data/projects";
import { prefersReducedMotion } from "@/lib/gsap/register";

export function PortfolioVideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = prefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    video.play().catch(() => {});
  }, [reduceMotion]);

  return (
    <section className="portfolio-video-banner relative min-h-[72vh] overflow-hidden lg:min-h-[80vh]">
      <div className="portfolio-video-banner-media absolute inset-0">
        <div
          className={
            reduceMotion
              ? "portfolio-video-banner-media-inner h-full w-full"
              : "portfolio-video-banner-media-inner portfolio-video-banner-media-inner--animate h-full w-full"
          }
        >
          {reduceMotion ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={portfolioBanner.poster}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={portfolioBanner.poster}
              aria-hidden
            >
              <source src={portfolioBanner.videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="portfolio-video-banner-overlay absolute inset-0" aria-hidden />
        <div className="portfolio-video-banner-noise absolute inset-0" aria-hidden />
      </div>

      <div className="container-main relative z-10 flex min-h-[72vh] flex-col justify-end pb-12 pt-28 lg:min-h-[80vh] lg:pb-16 lg:pt-32">
        <div className="max-w-3xl">
          <span className="portfolio-video-banner-label">{portfolioBanner.label}</span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-white md:text-5xl lg:text-6xl">
            {portfolioBanner.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {portfolioBanner.description}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-8">
          <div className="flex gap-10 md:gap-14">
            <div>
              <p className="text-3xl font-bold tabular-nums text-white md:text-4xl">
                {String(projects.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/50">
                Projects
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold tabular-nums text-white md:text-4xl">
                12+
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/50">
                Years crafting
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#portfolio-work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent"
            >
              Explore work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="portfolio-video-banner-edge absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
