import Image from "next/image";
import { PackageIcon } from "lucide-react";
import { GithubIcon } from "./github-icon";
import { Button } from "@/components/ui/button";
import { CopyPill } from "./copy-pill";
import { Motes } from "./motes";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src="/bg-runes-honey.jpeg"
        alt=""
        fill
        aria-hidden
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <Motes />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-game-title text-5xl sm:text-6xl">Guard the threshold.</h2>
        </Reveal>
        <Reveal delay={0.12} className="mt-8">
          <CopyPill className="torch-glow" />
        </Reveal>
        <Reveal delay={0.2} className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            variant="outline"
            className="press-squash rounded-full border-primary/50 bg-card font-semibold text-plum hover:border-primary hover:bg-accent hover:text-plum"
          >
            <a href="https://github.com/parveshsaini/warden" target="_blank" rel="noreferrer">
              <GithubIcon data-icon="inline-start" aria-hidden />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="press-squash rounded-full border-primary/50 bg-card font-semibold text-plum hover:border-primary hover:bg-accent hover:text-plum"
          >
            <a
              href="https://www.npmjs.com/package/warden-gateway"
              target="_blank"
              rel="noreferrer"
            >
              <PackageIcon data-icon="inline-start" aria-hidden />
              npm
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
