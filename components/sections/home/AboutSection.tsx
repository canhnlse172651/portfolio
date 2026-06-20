import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CounterUp } from "@/components/animations/CounterUp";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding border-y border-border"
    >
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              I&apos;ve been developing websites since 2010
            </h2>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent"
            >
              More about me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-12 lg:justify-end">
            <div>
              <p className="text-5xl font-bold text-white md:text-6xl">
                <CounterUp end={12} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-muted">Years of experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white md:text-6xl">
                <CounterUp end={150} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-muted">Projects completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
