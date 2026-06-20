import { cn } from "@/lib/cn";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-[#2a3a5c] px-3 py-1 text-xs font-medium text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
