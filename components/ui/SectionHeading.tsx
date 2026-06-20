import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-accent">
          {label}
        </span>
      )}
      <div
        className={cn(
          "flex items-end justify-between gap-6",
          align === "center" && "flex-col items-center"
        )}
      >
        <div className={align === "center" ? "max-w-2xl" : ""}>
          {align === "center" && (
            <div className="accent-line mx-auto mb-6" />
          )}
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted leading-relaxed">{description}</p>
          )}
        </div>
        {action}
      </div>
    </div>
  );
}
