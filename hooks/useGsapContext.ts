"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { registerGsap } from "@/lib/gsap/register";

export function useGsapContext<T extends HTMLElement>(
  setup: (ctx: gsap.Context) => void,
  deps: unknown[] = []
) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    registerGsap();
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      setup(ctx);
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
