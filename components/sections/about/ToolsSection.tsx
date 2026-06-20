"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { tools } from "@/lib/data/tools";
import { cn } from "@/lib/cn";

export function ToolsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, tools.length - visibleCount);

  const scroll = (direction: "left" | "right") => {
    const next =
      direction === "left"
        ? Math.max(0, index - 1)
        : Math.min(maxIndex, index + 1);
    setIndex(next);
    if (scrollRef.current) {
      const cardWidth = 320;
      scrollRef.current.scrollTo({
        left: next * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          label="MY TOOLS"
          title="Discover what tools I use for work"
          action={
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={index === 0}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-opacity",
                  index === 0 && "opacity-30"
                )}
                aria-label="Previous tools"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={index >= maxIndex}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-opacity",
                  index >= maxIndex && "opacity-30"
                )}
                aria-label="Next tools"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          }
        />

        <FadeInUp>
          <div
            ref={scrollRef}
            data-lenis-prevent
            className="flex gap-6 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="min-w-[300px] flex-shrink-0 rounded-3xl bg-card p-8 transition-colors hover:bg-card-alt"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <tool.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {tool.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {tool.description}
                </p>
                <Link
                  href={tool.link}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
