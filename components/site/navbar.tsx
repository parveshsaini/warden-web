import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#performance", label: "Performance" },
  { href: "#install", label: "Install" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/25 bg-card/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#" className="flex items-center gap-2.5" aria-label="Warden — home">
          <Image
            src="/logo-warden-sigil.png"
            alt=""
            width={40}
            height={40}
            className="size-10 drop-shadow-[0_2px_6px_rgb(91_42_134/0.35)]"
            priority
          />
          <span className="font-display text-2xl font-extrabold tracking-wide text-plum">
            Warden
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-plum"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/parveshsaini/warden"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-card px-3 py-1.5 text-sm font-medium text-plum transition-colors hover:border-gold hover:bg-secondary"
          >
            <StarIcon aria-hidden className="size-4 text-gold-deep" />
            GitHub
          </a>
        </div>

        <Button
          asChild
          className="press-squash shimmer-hover rounded-full bg-primary px-5 font-semibold text-primary-foreground shadow-[0_4px_14px_-4px_rgb(139_79_209/0.6)] hover:bg-primary/90 hover:shadow-[0_0_22px_2px_rgb(255_184_77/0.45)]"
        >
          <a href="#install">Get started</a>
        </Button>
      </nav>
    </header>
  );
}
