"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";
import { registerGsap, prefersReducedMotion } from "@/lib/gsap/register";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const navigate = (direction: "prev" | "next") => {
    const next =
      direction === "next"
        ? (current + 1) % testimonials.length
        : (current - 1 + testimonials.length) % testimonials.length;

    if (prefersReducedMotion() || !contentRef.current) {
      setCurrent(next);
      return;
    }

    registerGsap();
    gsap.to(contentRef.current, {
      opacity: 0,
      x: direction === "next" ? -20 : 20,
      duration: 0.25,
      onComplete: () => {
        setCurrent(next);
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: direction === "next" ? 20 : -20 },
          { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" }
        );
      },
    });
  };

  const testimonial = testimonials[current];

  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          title="What the clients say about my work"
          action={
            <Link
              href="#"
              className="group flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent"
            >
              See more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />

        <FadeInUp>
          <div className="overflow-hidden rounded-3xl bg-card p-8 md:p-12">
            <div
              ref={contentRef}
              className="grid gap-8 md:grid-cols-[200px_1fr] md:items-center"
            >
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl md:mx-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <blockquote className="text-xl leading-relaxed text-white md:text-2xl lg:text-3xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.title}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-2">
              <button
                onClick={() => navigate("prev")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-white transition-colors hover:bg-white/5"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => navigate("next")}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent/90"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
