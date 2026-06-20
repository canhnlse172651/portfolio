import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { workTimeline } from "@/lib/data/experience";
import { cn } from "@/lib/cn";

export function WorkTimelineSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading
          label="CAREER"
          title="Companies I've worked with"
          description="A timeline of my professional journey — from early web development to leading engineering teams."
        />

        <div className="relative">
          <div
            className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-accent/60 via-border to-border md:left-8"
            aria-hidden
          />

          <div className="space-y-8 md:space-y-10">
            {workTimeline.map((item) => (
              <article key={item.company} className="relative pl-12 md:pl-20">
                  <div
                    className={cn(
                      "absolute top-8 left-3 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 md:left-8",
                      item.isCurrent
                        ? "border-accent bg-accent shadow-[0_0_12px_rgba(0,85,255,0.5)]"
                        : "border-border bg-background"
                    )}
                    aria-hidden
                  />

                  <div
                    className={cn(
                      "rounded-3xl border bg-card p-6 transition-colors hover:border-accent/30 md:p-8",
                      item.isCurrent ? "border-accent/40" : "border-border"
                    )}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-lg font-bold text-accent">
                          {item.logo}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-xl font-semibold text-white">
                              {item.company}
                            </h3>
                            {item.isCurrent && (
                              <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm font-medium text-white/90">
                            {item.role}
                          </p>
                        </div>
                      </div>
                      <time className="text-sm font-medium text-muted sm:pt-1 sm:text-right">
                        {item.period}
                      </time>
                    </div>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                        Core technologies
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Tag key={tech}>{tech}</Tag>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                        Key contributions
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {item.contributions.map((contribution) => (
                          <li
                            key={contribution}
                            className="flex gap-3 text-sm leading-relaxed text-muted"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                              aria-hidden
                            />
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
