import Image from "next/image";
import { GithubIcon } from "./github-icon";
import { Button } from "@/components/ui/button";
import { CopyPill } from "./copy-pill";
import { Motes } from "./motes";
import { Reveal } from "./reveal";

const TRUST_CHIPS = [
  { label: "90.5% F1 detection", dot: "bg-wardgreen" },
  { label: "~0.6ms overhead", dot: "bg-energy" },
  { label: "MIT · v0.1.0", dot: "bg-primary" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Motes />
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
        <Reveal>
          <p className="mb-4 font-mono text-xs font-semibold tracking-[0.25em] text-gold-deep">
            OPEN-SOURCE MCP GATEWAY
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="text-game-title max-w-4xl text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            A control plane for AI tool access.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-5 font-display text-2xl font-bold text-plum sm:text-3xl">
            Nothing passes unseen.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg">
            Warden sits between your MCP clients and your MCP servers — federating many
            servers behind one endpoint, screening every tool for poisoning and injection,
            and tracing every call. Not vibes: a published detection benchmark and measured
            sub-millisecond overhead.
          </p>
        </Reveal>

        <Reveal delay={0.32} className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <CopyPill />
          <Button
            asChild
            variant="outline"
            size="lg"
            className="press-squash rounded-full border-primary/50 bg-card font-semibold text-plum hover:border-primary hover:bg-accent hover:text-plum"
          >
            <a href="https://github.com/parveshsaini/warden" target="_blank" rel="noreferrer">
              <GithubIcon data-icon="inline-start" aria-hidden />
              View on GitHub
            </a>
          </Button>
        </Reveal>

        <Reveal delay={0.4} className="mt-8">
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {TRUST_CHIPS.map((c) => (
              <li
                key={c.label}
                className="gold-rim inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 font-mono text-xs font-medium text-foreground sm:text-sm"
              >
                <span aria-hidden className={`size-2 rounded-full ${c.dot}`} />
                {c.label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="mt-14 w-full max-w-4xl">
          <div className="idle-float-slow relative mx-auto overflow-hidden rounded-3xl gold-rim ring-2 ring-gold/60">
            <Image
              src="/hero-gate.jpeg"
              alt="The Warden gate scanning travelers: a green-lit traveler passes while a red-flaring intruder is unmasked"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
