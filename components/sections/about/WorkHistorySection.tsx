import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workHistory } from "@/lib/data/experience";

export function WorkHistorySection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          label="EXPERIENCE"
          title="I've worked with some amazing companies"
          action={
            <Link
              href="#"
              className="group flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent"
            >
              View all
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />

        <div className="divide-y divide-border">
          {workHistory.map((job, index) => (
            <FadeInUp key={job.company} delay={index * 0.1}>
              <div className="group flex items-center gap-6 py-6 transition-colors hover:bg-white/[0.02]">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-card text-lg font-bold text-accent">
                  {job.logo}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">
                    {job.title}{" "}
                    <span className="font-normal text-muted">
                      at {job.company}
                    </span>
                  </h3>
                  <p className="mt-1 text-sm text-muted">{job.description}</p>
                </div>
                <div className="hidden items-center gap-4 sm:flex">
                  <span className="text-sm text-muted">{job.period}</span>
                  <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
