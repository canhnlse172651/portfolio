import { cn } from "@/lib/cn";

type HeroAvatarProps = {
  className?: string;
  alt?: string;
};

export function HeroAvatar({
  className,
  alt = "John Carter - Web Developer",
}: HeroAvatarProps) {
  return (
    <div className={cn("hero-avatar relative flex justify-center", className)}>
      <div className="hero-avatar-frame relative overflow-hidden">
        <div className="hero-avatar-glow" aria-hidden />
        <div className="hero-avatar-mask">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-avatar.png"
            alt={alt}
            className="hero-avatar-img"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}
