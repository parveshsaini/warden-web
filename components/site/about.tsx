import Image from "next/image";
import { PackageIcon } from "lucide-react";
import { GithubIcon } from "./github-icon";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section className="bg-canvas-edge/40 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <Reveal>
          <div className="idle-float-slow mx-auto max-w-xs overflow-hidden rounded-3xl gold-rim ring-2 ring-gold/60">
            <Image
              src="/about-parvesh-avatar.jpeg"
              alt="Parvesh, the artificer — holding the blueprint of the gate"
              width={768}
              height={960}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-gold-deep">
            ABOUT THE CREATOR
          </p>
          <h2 className="text-game-title mt-3 text-4xl sm:text-5xl">Parvesh</h2>
          <p className="mt-1 font-display text-lg font-bold text-plum">Creator of Warden</p>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">
            Warden is designed and built by Parvesh.
            {/* BIO PLACEHOLDER — replace with 2–3 sentences from Parvesh. */}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/parveshsaini"
              target="_blank"
              rel="noreferrer"
              className="press-squash inline-flex items-center gap-2 rounded-full border border-primary/50 bg-card px-4 py-2 text-sm font-semibold text-plum transition-colors hover:border-primary hover:bg-accent"
            >
              <GithubIcon aria-hidden className="size-4" />
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/warden-gateway"
              target="_blank"
              rel="noreferrer"
              className="press-squash inline-flex items-center gap-2 rounded-full border border-primary/50 bg-card px-4 py-2 text-sm font-semibold text-plum transition-colors hover:border-primary hover:bg-accent"
            >
              <PackageIcon aria-hidden className="size-4" />
              npm
            </a>
            {/* SOCIAL PLACEHOLDER — add X/Twitter & LinkedIn once handles are provided. */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
