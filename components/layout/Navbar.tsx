"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/cn";
import { registerGsap } from "@/lib/gsap/register";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Projects" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    if (mobileOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="container-main flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-accent" />
          <span className="text-lg font-semibold text-white">Developer X</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-white",
                isActive(link.href) ? "text-white" : "text-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/#contact" className="hidden md:block">
            <Button size="sm">Let&apos;s Talk</Button>
          </Link>
          <button
            className="text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="overflow-hidden border-t border-border/50 bg-background lg:hidden"
        >
          <div className="container-main flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-base transition-colors hover:text-white",
                  isActive(link.href) ? "text-white" : "text-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full">Let&apos;s Talk</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
