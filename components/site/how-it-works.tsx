import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "./code-block";
import { Reveal } from "./reveal";

const CHECKS = ["policy", "detector", "rate limit", "audit", "traces"];
const FLAGS = ["concealment", "hidden-tag", "sensitive-file", "tool-shadowing"];

function ArchDiagram() {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="w-full max-w-md rounded-2xl border-2 border-primary/40 bg-card px-6 py-4 shadow-[0_8px_24px_-10px_rgb(91_42_134/0.25)]">
        <p className="font-display text-lg font-bold text-plum">MCP client</p>
        <p className="text-sm text-muted-foreground">Claude, Cursor, any MCP client</p>
      </div>
      <p aria-hidden className="font-mono text-xs text-muted-foreground">
        │ stdio / Streamable HTTP ▼
      </p>
      <div className="w-full max-w-md rounded-2xl border-2 border-gold bg-ink px-6 py-5 shadow-[0_0_28px_-4px_rgb(232_182_90/0.55)]">
        <p className="font-display text-xl font-extrabold text-gold">Warden</p>
        <div className="mt-2 flex flex-wrap justify-center gap-1.5">
          {CHECKS.map((c) => (
            <Badge
              key={c}
              variant="outline"
              className="border-gold/50 bg-transparent font-mono text-[11px] text-[#F6E7C8]"
            >
              {c}
            </Badge>
          ))}
        </div>
      </div>
      <p aria-hidden className="font-mono text-xs text-muted-foreground">
        │ stdio / Streamable HTTP ▼
      </p>
      <div className="w-full max-w-md rounded-2xl border-2 border-wardgreen/50 bg-card px-6 py-4 shadow-[0_8px_24px_-10px_rgb(91_42_134/0.25)]">
        <p className="font-display text-lg font-bold text-plum">MCP servers</p>
        <p className="text-sm text-muted-foreground">filesystem, github, internal tools, …</p>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs font-semibold tracking-[0.25em] text-gold-deep">
          WHERE TOOLS ARE JUDGED
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-plum sm:text-4xl">
          Every traveler is read at the gate.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
          Travelers are tool calls. The scan plane is Warden&apos;s checks.{" "}
          <span className="font-semibold text-wardgreen">Green passes, warded.</span>{" "}
          <span className="font-semibold text-alarm">Red is quarantined.</span>
        </p>
      </Reveal>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl gold-rim ring-2 ring-gold/60">
            <Image
              src="/hero-gate.jpeg"
              alt="The gate scans two travelers: one glows green and passes, one flares red and is turned away"
              width={1536}
              height={1024}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <span className="absolute left-4 top-4 rounded-full bg-wardgreen px-3 py-1 font-mono text-xs font-bold text-white shadow-md">
              passed · warded
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-alarm px-3 py-1 font-mono text-xs font-bold text-white shadow-md">
              quarantined
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ArchDiagram />
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-14 max-w-3xl">
        <h3 className="mb-4 text-center font-display text-xl font-bold text-plum">
          Live proof: a poisoned tool, turned away
        </h3>
        <CodeBlock
          label="terminal"
          code={
            <>
              <span className="text-[#B7A9CC]">$ </span>
              <span>inspector --cli warden-gateway --method tools/call \</span>
              {"\n"}
              <span>{"    "}--tool-name px__get_weather --tool-arg city=Berlin</span>
              {"\n"}
              <span className="text-alarm">
                MCP error -32600: [warden] tool &quot;px__get_weather&quot; is quarantined
              </span>
            </>
          }
        />
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">flagged:</span>
          {FLAGS.map((f) => (
            <Badge key={f} className="bg-alarm/15 font-mono text-xs text-alarm border border-alarm/30">
              {f}
            </Badge>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
