"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap, prefersReducedMotion } from "@/lib/gsap/register";
import { cn } from "@/lib/cn";

type FadeInUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
};

export function FadeInUp({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 60,
}: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    if (!ref.current || prefersReducedMotion()) return;

    const el = ref.current;

    const tween = gsap.fromTo(
      el,
      { autoAlpha: 0, y },
      {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );

    requestAnimationFrame(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, duration, y]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
