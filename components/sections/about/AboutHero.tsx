"use client";

import { useLayoutEffect, useRef } from "react";
import { Download } from "lucide-react";
import gsap from "gsap";
import { CounterUp } from "@/components/animations/CounterUp";
import { Button } from "@/components/ui/Button";
import { registerGsap, prefersReducedMotion } from "@/lib/gsap/register";

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    if (!sectionRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".about-hero-content > *", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.from(".about-hero-image", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding pt-28 md:pt-32">
      <div className="container-main grid items-center gap-12 lg:grid-cols-2">
        <div className="about-hero-content">
          <div className="accent-line mb-6" />
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Nice to meet you, I&apos;m John Carter
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            A passionate web developer with over 12 years of experience
            building digital products. I specialize in creating beautiful,
            performant websites that deliver results.
          </p>
          <div className="mt-8 flex flex-wrap gap-10">
            <div>
              <p className="text-4xl font-bold text-white">
                <CounterUp end={12} suffix="+" />
              </p>
              <p className="mt-1 text-sm text-muted">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">
                <CounterUp end={150} suffix="+" />
              </p>
              <p className="mt-1 text-sm text-muted">Projects done</p>
            </div>
          </div>
          <Button className="mt-8" size="lg">
            <Download className="h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="about-hero-image flex justify-center lg:justify-end">
          <div className="about-hero-avatar-circle relative flex h-72 w-72 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-border md:h-80 md:w-80 lg:h-96 lg:w-96">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-avatar.png"
              alt="John Carter"
              className="about-hero-avatar-img"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
