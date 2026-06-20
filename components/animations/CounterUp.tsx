"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { registerGsap, prefersReducedMotion } from "@/lib/gsap/register";

type CounterUpProps = {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CounterUp({
  end,
  suffix = "",
  duration = 2,
  className,
}: CounterUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    if (!ref.current || prefersReducedMotion()) {
      if (ref.current) ref.current.textContent = `${end}${suffix}`;
      return;
    }

    const obj = { value: 0 };
    const tween = gsap.to(obj, {
      value: end,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(obj.value)}${suffix}`;
        }
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [end, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
