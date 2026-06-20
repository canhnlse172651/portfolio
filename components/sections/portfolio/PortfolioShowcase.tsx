"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "@/components/sections/portfolio/ProjectCard";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/cn";

const PAGE_SIZE = 2;

export function PortfolioShowcase() {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const paginatedProjects = projects.slice(start, start + PAGE_SIZE);

  const goToPage = (next: number) => {
    const clamped = Math.max(1, Math.min(next, totalPages));
    setPage(clamped);
    document.getElementById("portfolio-work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="portfolio-work" className="section-padding pt-16 md:pt-20">
      <div className="container-main">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Portfolio
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              All projects
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Browse the full collection — {projects.length} projects showcasing web
            development across DeFi, agency, trading, and fintech.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {paginatedProjects.map((project, index) => (
            <li key={project.slug} className="flex">
              <ProjectCard
                project={project}
                index={start + index}
                className="w-full"
              />
            </li>
          ))}
        </ul>

        {totalPages > 1 && (
          <nav
            className="mt-12 flex flex-wrap items-center justify-center gap-2"
            aria-label="Portfolio pagination"
          >
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border border-border text-white transition-colors hover:border-accent/40 hover:text-accent",
                currentPage === 1 && "pointer-events-none opacity-30"
              )}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => goToPage(pageNum)}
                className={cn(
                  "flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-medium transition-colors",
                  pageNum === currentPage
                    ? "bg-accent text-white"
                    : "border border-border text-muted hover:border-accent/40 hover:text-white"
                )}
                aria-label={`Page ${pageNum}`}
                aria-current={pageNum === currentPage ? "page" : undefined}
              >
                {pageNum}
              </button>
            ))}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border border-border text-white transition-colors hover:border-accent/40 hover:text-accent",
                currentPage === totalPages && "pointer-events-none opacity-30"
              )}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        )}

        <p className="mt-6 text-center text-xs text-muted">
          Showing {start + 1}–{Math.min(start + PAGE_SIZE, projects.length)} of{" "}
          {projects.length} projects
        </p>
      </div>
    </section>
  );
}
