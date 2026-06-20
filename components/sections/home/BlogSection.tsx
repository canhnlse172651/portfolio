import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInUp } from "@/components/animations/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles } from "@/lib/data/articles";

export function BlogSection() {
  return (
    <section id="blog" className="section-padding">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <FadeInUp>
            <SectionHeading
              title="Check out my latest articles and tutorials"
              action={
                <Link
                  href="#"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent"
                >
                  Browse all articles
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              }
            />
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="divide-y divide-border">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href="#"
                  className="group flex items-center justify-between gap-6 py-6 transition-colors"
                >
                  <div>
                    <p className="text-sm text-muted">
                      {article.date} | {article.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white transition-colors group-hover:text-accent">
                      {article.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
