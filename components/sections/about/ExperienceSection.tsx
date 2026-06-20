import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { skillCategories } from "@/lib/data/skills";

export function ExperienceSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          label="EXPERIENCE"
          title="Over 10 years of experience and 100+ projects"
          action={
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent"
            >
              View all
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />

        <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
                {category.label}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
