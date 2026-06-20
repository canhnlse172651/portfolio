import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Share2,
  Camera,
  Link2,
  Circle,
  GitBranch,
} from "lucide-react";

const socialLinks = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: Share2, href: "#", label: "Twitter" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Circle, href: "#", label: "Dribbble" },
  { icon: GitBranch, href: "#", label: "GitHub" },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="container-main section-padding">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="John Carter"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">John Carter</h3>
                <p className="text-sm text-muted">
                  Head of Engineering at Google
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-muted transition-colors hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <Link
              href="mailto:contact@john.com"
              className="group flex items-center gap-4"
            >
              <h2 className="text-4xl font-bold text-white transition-colors group-hover:text-accent md:text-5xl">
                Get in touch
              </h2>
              <ArrowRight className="h-8 w-8 text-accent transition-transform group-hover:translate-x-2" />
            </Link>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:contact@john.com"
                className="group flex items-center justify-between border-b border-border py-3 text-sm"
              >
                <span>
                  <span className="text-muted">MAIL ME: </span>
                  <span className="text-white">contact@john.com</span>
                </span>
                <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
              </a>
              <a
                href="tel:+14142770480"
                className="group flex items-center justify-between border-b border-border py-3 text-sm"
              >
                <span>
                  <span className="text-muted">CALL ME: </span>
                  <span className="text-white">(414) 277 - 048</span>
                </span>
                <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} John Carter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
