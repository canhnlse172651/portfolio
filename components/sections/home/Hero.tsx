"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Share2,
  Camera,
  Link2,
  Play,
  GitBranch,
} from "lucide-react";
import gsap from "gsap";
import { registerGsap, prefersReducedMotion } from "@/lib/gsap/register";
import { HeroAvatar } from "@/components/ui/HeroAvatar";
import { ScrollDownButton } from "@/components/ui/ScrollDownButton";

const socialLinks = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: Share2, href: "#", label: "Twitter" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Play, href: "#", label: "YouTube" },
  { icon: GitBranch, href: "#", label: "GitHub" },
];

const infoSections = [
  {
    label: "ABOUT ME",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    link: { href: "/about", label: "LEARN MORE" },
  },
  {
    label: "MY WORK",
    text: "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    link: { href: "/portfolio", label: "BROWSE PORTFOLIO" },
  },
];

function HeroInfoSections() {
  return (
    <div className="hero-info mt-10 max-w-md lg:mt-14">
      {infoSections.map((section, index) => (
        <div key={section.label}>
          {index > 0 && (
            <div className="hero-divider my-7 h-px w-full bg-border" />
          )}
          <div className="hero-info-item">
            <h2 className="text-xs font-bold tracking-[0.2em] text-white">
              {section.label}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {section.text}
            </p>
            <Link
              href={section.link.href}
              className="group mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-white transition-colors hover:text-accent"
            >
              {section.link.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      ))}

      <div className="hero-divider my-7 h-px w-full bg-border" />

      <div className="hero-info-item">
        <h2 className="text-xs font-bold tracking-[0.2em] text-white">
          FOLLOW ME
        </h2>
        <div className="mt-4 flex flex-wrap gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="hero-social text-white/80 transition-colors hover:text-accent"
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    if (!sectionRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-accent-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(".hero-heading", {
        opacity: 0,
        x: -80,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
      });
      gsap.from(".hero-text", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });
      gsap.from(".hero-cta", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.45,
        ease: "power3.out",
      });
      gsap.from(".hero-info-item", {
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.5,
        ease: "power3.out",
      });
      gsap.from(".hero-divider", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.6,
        stagger: 0.1,
        delay: 0.55,
        ease: "power2.out",
      });
      gsap.from(".hero-social", {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.9,
        ease: "power2.out",
      });
      gsap.from(".hero-avatar-inline", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.35,
        ease: "power3.out",
      });
      gsap.from(".hero-avatar-desktop", {
        opacity: 0,
        x: 80,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-20 md:pt-24 lg:min-h-screen"
    >
      <div className="container-main flex flex-col py-6 lg:grid lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2 lg:items-start lg:gap-16 lg:py-0 lg:pt-10">
        {/* Left column — intro + mobile avatar + info */}
        <div className="hero-left z-20 flex flex-col">
          {/* Main hero text */}
          <div className="hero-intro">
            <div className="hero-accent-line accent-line mb-6 lg:mb-8" />
            <h1 className="hero-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.35rem] lg:whitespace-nowrap">
              I&apos;m John, a{" "}
              <span className="text-accent lg:text-[2.85rem]">Web Developer</span>.
            </h1>
            <p className="hero-text mt-5 max-w-lg text-base font-medium leading-relaxed text-muted md:mt-6 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <div className="hero-cta mt-6 md:mt-8">
              <ScrollDownButton targetId="about" />
            </div>
          </div>

          {/* Mobile — avatar directly below intro text */}
          <HeroAvatar className="hero-avatar-inline z-30 mt-8 w-full lg:hidden" />

          {/* Info blocks — below avatar on mobile, beside avatar on desktop */}
          <HeroInfoSections />
        </div>

        {/* Desktop — avatar right column */}
        <HeroAvatar className="hero-avatar-desktop z-30 hidden items-end justify-end lg:-translate-y-8 lg:flex xl:-translate-y-12" />
      </div>
    </section>
  );
}
