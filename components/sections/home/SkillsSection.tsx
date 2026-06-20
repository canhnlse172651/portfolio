import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStacks } from "@/lib/data/skills";

export function SkillsSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading title="My extensive list of skills" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStacks.map((stack) => (
            <div
              key={stack.label}
              className="group rounded-3xl bg-card p-8 transition-colors hover:bg-card-alt"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {stack.label}
              </h3>
              <ul className="mt-6 space-y-3">
                {stack.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 h-0.5 w-12 bg-accent transition-all group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
