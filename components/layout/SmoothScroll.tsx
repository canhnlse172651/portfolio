"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap, prefersReducedMotion } from "@/lib/gsap/register";

const SCROLL_EASING = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

function refreshScroll(lenis: Lenis) {
  lenis.resize();
  ScrollTrigger.refresh();
}

function resetScrollPosition(lenis: Lenis | null) {
  window.scrollTo(0, 0);

  if (prefersReducedMotion()) {
    ScrollTrigger.refresh();
    return;
  }

  if (lenis) {
    lenis.scrollTo(0, { immediate: true, force: true });
    refreshScroll(lenis);
  } else {
    ScrollTrigger.refresh();
  }
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    registerGsap();

    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: SCROLL_EASING,
      smoothWheel: true,
      allowNestedScroll: true,
    });

    lenisRef.current = lenis;

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const handleLoad = () => refreshScroll(lenis);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => refreshScroll(lenis));
    });
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;

      if (lenisRef.current) refreshScroll(lenisRef.current);
      else ScrollTrigger.refresh();

      return;
    }

    const applyReset = () => resetScrollPosition(lenisRef.current);

    applyReset();

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(applyReset);
    });
    const timeout = window.setTimeout(applyReset, 50);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return <>{children}</>;
}
