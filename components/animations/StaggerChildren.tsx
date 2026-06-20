"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { registerGsap, prefersReducedMotion } from "@/lib/gsap/register";
import { cn } from "@/lib/cn";

type StaggerChildrenProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  childSelector?: string;
};

export function StaggerChildren({
  children,
  className,
  stagger = 0.15,
  childSelector = ":scope > *",
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    if (!ref.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(childSelector, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [stagger, childSelector]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
