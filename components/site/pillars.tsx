import Image from "next/image";
import { GitForkIcon, ScrollTextIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const PILLARS = [
  {
    id: "security",
    kicker: "The Ward",
    title: "Security",
    body: "Tool-poisoning & prompt-injection detection, per-client/per-tool policy, rate limiting, and approval gates for dangerous tools. Malicious tools are quarantined out of the catalog.",
    emblem: (
      <Image
        src="/badge-warding-seal.jpeg"
        alt="The Warding Seal — a gold coin bearing the gate glyph"
        width={96}
        height={96}
        className="size-24 rounded-full gold-rim ring-2 ring-gold/70"
      />
    ),
  },
  {
    id: "ledger",
    kicker: "The Ledger",
    title: "Observability",
    body: "OpenTelemetry trace for every tool call, structured JSONL audit logs, and a /metrics endpoint. Zero overhead when off.",
    emblem: (
      <div className="inline-flex size-24 items-center justify-center rounded-full bg-accent gold-rim ring-2 ring-gold/70">
        <ScrollTextIcon aria-hidden className="size-10 text-plum" />
      </div>
    ),
  },
  {
    id: "gate",
    kicker: "The Gate",
    title: "Federation",
    body: "Many MCP servers behind one endpoint, with a unified, per-server-namespaced tool catalog. tools/call routes to the owning upstream.",
    emblem: (
      <div className="inline-flex size-24 items-center justify-center rounded-full bg-accent gold-rim ring-2 ring-gold/70">
        <GitForkIcon aria-hidden className="size-10 text-plum" />
      </div>
    ),
  },
];

export function Pillars() {
  return (
    <section id="features" className="scroll-mt-20 bg-canvas-edge/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-gold-deep">
            ONE GATE. EVERY WARD.
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-plum sm:text-4xl">
            Three pillars, one threshold.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <StaggerItem key={p.id} className="h-full">
              <Card
                id={p.id === "security" ? "security" : undefined}
                className="h-full scroll-mt-24 rounded-3xl border-gold/30 bg-card text-center shadow-[0_10px_30px_-12px_rgb(91_42_134/0.2)] transition-shadow hover:shadow-[0_0_0_2px_var(--gold),0_14px_36px_-12px_rgb(91_42_134/0.3)]"
              >
                <CardHeader className="items-center">
                  <div className="mx-auto mb-3">{p.emblem}</div>
                  <CardDescription className="font-mono text-xs font-semibold tracking-[0.2em] text-gold-deep uppercase">
                    {p.kicker}
                  </CardDescription>
                  <CardTitle className="font-display text-2xl text-plum">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-foreground/80">
                  {p.body}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
