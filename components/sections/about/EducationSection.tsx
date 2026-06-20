import Link from "next/link";
import { GraduationCap, Award, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { educationItems, type EducationItem } from "@/lib/data/experience";

const education = educationItems.filter((item) => item.type === "education");
const certificates = educationItems.filter((item) => item.type === "certificate");

export function EducationSection() {
  const [primary, ...secondaryEducation] = education;

  return (
    <section className="education-section section-padding relative overflow-hidden">
      <div className="education-ambient" aria-hidden />

      <div className="container-main relative">
        <SectionHeading
          label="EDUCATION"
          title="Past education & credentials"
        />

        <div className="grid gap-10 lg:grid-cols-[7fr_3fr] lg:items-stretch lg:gap-12 xl:gap-16">
          {/* Education */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="education-label">Formal education</span>
              <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
            </div>

            {primary && (
              <article className="education-spotlight group">
                <span className="education-year-watermark" aria-hidden>
                  {primary.year}
                </span>
                <div className="education-spotlight-grid" aria-hidden />

                <div className="relative z-10 p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="education-icon-ring">
                      <GraduationCap className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                        {primary.institution}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold leading-tight text-white md:text-3xl">
                        {primary.title}
                      </h3>
                    </div>
                  </div>

                  <p className="relative mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                    {primary.description}
                  </p>

                  <div className="education-spotlight-footer mt-5">
                    <span className="text-xs uppercase tracking-widest text-white/40">
                      Foundation
                    </span>
                    <div className="education-accent-bar" />
                  </div>
                </div>
              </article>
            )}

            {secondaryEducation.map((item) => (
              <SecondaryEducationCard key={item.title} item={item} />
            ))}
          </div>

          {/* Certifications — simple lines, balanced column */}
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-3">
              <span className="education-label text-muted">Certifications</span>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <ul className="education-cert-list mt-5 divide-y divide-border">
              {certificates.map((item) => (
                <CertificateLine key={item.title} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecondaryEducationCard({ item }: { item: EducationItem }) {
  return (
    <article className="education-secondary group">
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-6 md:p-7">
        <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-2">
          <span className="education-secondary-year">{item.year}</span>
          <div className="hidden h-8 w-px bg-border sm:block" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent/80">
            {item.institution}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-accent">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </div>
        <GraduationCap
          className="hidden h-5 w-5 flex-shrink-0 text-white/10 transition-colors group-hover:text-accent/40 sm:block"
          strokeWidth={1.5}
        />
      </div>
    </article>
  );
}

function CertificateLine({ item }: { item: EducationItem }) {
  return (
    <li className="education-cert-line group">
      <Award
        className="h-4 w-4 flex-shrink-0 text-muted transition-colors group-hover:text-accent"
        strokeWidth={1.5}
      />
      <span className="min-w-0 flex-1 truncate text-sm font-medium text-white/90 transition-colors group-hover:text-white">
        {item.title}
      </span>
      <span className="flex-shrink-0 text-sm tabular-nums text-muted">
        {item.year}
      </span>
      {item.link && (
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="education-cert-link"
          aria-label={`View ${item.title} credential`}
        >
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
        </Link>
      )}
    </li>
  );
}
