import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CountUp } from "./count-up";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const LATENCY_ROWS = [
  { name: "direct", p50: "0.513ms" },
  { name: "warden passthrough", p50: "1.115ms" },
  { name: "warden full-security", p50: "1.208ms" },
];

export function Benchmarks() {
  return (
    <section id="performance" className="relative scroll-mt-20 overflow-hidden py-20">
      <Image
        src="/bg-runes-honey.jpeg"
        alt=""
        fill
        aria-hidden
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-plum sm:text-4xl">
            Not a claim — a number.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Warden ships its own security benchmark and performance harness. Run them
            yourself.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-2">
          <StaggerItem className="h-full">
            <Card className="h-full rounded-3xl border-gold/40 bg-card/95 shadow-[0_14px_40px_-14px_rgb(91_42_134/0.3)]">
              <CardHeader>
                <CardTitle className="font-mono text-xs font-semibold tracking-[0.2em] text-gold-deep uppercase">
                  Detection
                </CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-4">
                <p className="text-game-title text-6xl sm:text-7xl">
                  <CountUp value={90.5} decimals={1} suffix="%" />
                </p>
                <p className="font-display text-lg font-bold text-plum">F1 score</p>
                <p className="text-sm leading-relaxed text-foreground/80">
                  93.5% precision · 87.8% recall on a labeled corpus of 93 tool
                  definitions — offline heuristic tier, no API key required. An optional
                  LLM tier escalates ambiguous cases and degrades gracefully.
                </p>
                <p className="mt-auto font-mono text-sm text-muted-foreground">
                  Reproduce with <span className="text-plum font-semibold">pnpm eval</span>
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem className="h-full">
            <Card className="h-full rounded-3xl border-gold/40 bg-card/95 shadow-[0_14px_40px_-14px_rgb(91_42_134/0.3)]">
              <CardHeader>
                <CardTitle className="font-mono text-xs font-semibold tracking-[0.2em] text-gold-deep uppercase">
                  Overhead
                </CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-4">
                <p className="text-game-title text-6xl sm:text-7xl">
                  ~<CountUp value={0.6} decimals={1} suffix="ms" />
                </p>
                <p className="font-display text-lg font-bold text-plum">
                  median added latency
                </p>
                <p className="text-sm leading-relaxed text-foreground/80">
                  The full security layer adds only ~0.1ms on top of passthrough.
                </p>
                <div className="overflow-x-auto rounded-xl bg-ink p-4 font-mono text-sm text-[#F6E7C8]">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-[#B7A9CC]">
                        <th className="pb-2 pr-4 font-normal">scenario</th>
                        <th className="pb-2 font-normal">p50</th>
                      </tr>
                    </thead>
                    <tbody>
                      {LATENCY_ROWS.map((r) => (
                        <tr key={r.name}>
                          <td className="pr-4 py-0.5">{r.name}</td>
                          <td className="py-0.5 text-gold">{r.p50}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-auto font-mono text-sm text-muted-foreground">
                  Reproduce with <span className="text-plum font-semibold">pnpm bench</span>
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
