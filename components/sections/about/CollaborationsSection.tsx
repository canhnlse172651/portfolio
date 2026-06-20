import { FadeInUp } from "@/components/animations/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { collaborations } from "@/lib/data/experience";

export function CollaborationsSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <FadeInUp>
          <div className="rounded-3xl bg-card p-8 md:p-12">
            <SectionHeading
              label="COLLABORATIONS"
              title="Brands & companies I have collaborated with"
            />
            <StaggerChildren className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6">
              {collaborations.map((brand) => (
                <div
                  key={brand}
                  className="flex h-16 items-center justify-center text-lg font-semibold text-muted/40 transition-colors hover:text-muted"
                >
                  {brand}
                </div>
              ))}
            </StaggerChildren>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
