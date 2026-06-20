"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type ScrollDownButtonProps = {
  targetId?: string;
  className?: string;
};

export function ScrollDownButton({ targetId, className }: ScrollDownButtonProps) {
  const handleClick = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll down"
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white transition-transform hover:scale-105",
        className
      )}
    >
      <ChevronDown className="h-6 w-6" />
    </button>
  );
}
