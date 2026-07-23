import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CountUp } from "./count-up";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const LATENCY_ROWS = [
  { name: "direct", p50: "0.513ms" },
  { name: "warden passthrough", p50: "1.115ms" },
  { name: "warden full-security", p50: "1.208ms" },
];

const TIER_ROWS = [
  { metric: "Precision", heuristic: "87.8%", llm: "93.9%" },
  { metric: "Recall", heuristic: "43.0%", llm: "93.0%" },
  { metric: "F1", heuristic: "57.7%", llm: "93.5%" },
  { metric: "Detection rate", heuristic: "51.0%", llm: "98.0%" },
  { metric: "Cost / 1k tools", heuristic: "$0", llm: "~$0.072" },
];

const CATEGORY_ROWS = [
  { name: "tool-poisoning", n: 26, heuristic: 61.5, llm: 92.3 },
  { name: "data-exfiltration", n: 21, heuristic: 61.9, llm: 95.2 },
  { name: "prompt-injection", n: 18, heuristic: 38.9, llm: 94.4 },
  { name: "obfuscation", n: 12, heuristic: 33.3, llm: 91.7 },
  { name: "credential-theft", n: 10, heuristic: 30.0, llm: 90.0 },
  { name: "destructive", n: 5, heuristic: 0, llm: 100.0 },
  { name: "rug-pull", n: 4, heuristic: 0, llm: 100.0 },
  { name: "schema-injection", n: 4, heuristic: 0, llm: 75.0 },
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
            Warden ships its own security benchmark and performance harness, both against a
            committed corpus. Run them yourself.
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
                  <CountUp value={93.5} decimals={1} suffix="%" />
                </p>
                <p className="font-display text-lg font-bold text-plum">
                  F1 score — default <span className="font-mono">llm</span> tier
                </p>
                <p className="text-sm leading-relaxed text-foreground/80">
                  93.9% precision · 93.0% recall · 98.0% detection rate on a labeled corpus of
                  193 tool definitions (100 malicious, 93 benign). Offline heuristic rules screen
                  first; a <span className="font-mono">gemini-3.1-flash-lite</span>{" "}
                  judge reviews what the rules don&apos;t conclude on — about 7 cents per 1,000 tools, cached
                  per tool, and it degrades to the heuristic verdict if the API fails.
                </p>
                <p className="mt-auto font-mono text-sm text-muted-foreground">
                  Reproduce with{" "}
                  <span className="text-plum font-semibold">pnpm eval --tier llm</span>
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
                  The full security layer adds only ~0.1ms on top of passthrough. Judge latency
                  (~674ms per tool) is paid once on <span className="font-mono">tools/list</span>
                  , not on the hot path of every call.
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

        <Reveal className="mt-6">
          <Card className="rounded-3xl border-gold/40 bg-card/95 shadow-[0_14px_40px_-14px_rgb(91_42_134/0.3)]">
            <CardHeader>
              <CardTitle className="font-mono text-xs font-semibold tracking-[0.2em] text-gold-deep uppercase">
                Why the judge earns its keep
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-foreground/80">
                  The corpus doubled and{" "}
                  <strong className="font-semibold text-plum">
                    no detector rule was changed
                  </strong>
                  . The 100 new entries cover attack families the rules were never written for —
                  rug pulls, schema injection, destructive persistence. Keyword matching blocks{" "}
                  <strong className="font-semibold text-alarm">zero of the 51</strong>; the judge
                  carries 86.3% recall onto them. Rules encode last year&apos;s attacks. The
                  judge generalizes.
                </p>
                <div className="overflow-x-auto rounded-xl bg-ink p-4 font-mono text-sm text-[#F6E7C8]">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-[#B7A9CC]">
                        <th className="pb-2 pr-4 font-normal">metric</th>
                        <th className="pb-2 pr-4 font-normal">heuristic</th>
                        <th className="pb-2 font-normal">llm</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TIER_ROWS.map((r) => (
                        <tr key={r.metric}>
                          <td className="py-0.5 pr-4">{r.metric}</td>
                          <td className="py-0.5 pr-4 text-[#B7A9CC]">{r.heuristic}</td>
                          <td className="py-0.5 text-gold">{r.llm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <span aria-hidden className="size-2 rounded-full bg-plum/40" />
                    heuristic
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span aria-hidden className="size-2 rounded-full bg-wardgreen" />
                    llm
                  </span>
                  <span className="ml-auto">recall by attack category</span>
                </div>
                {CATEGORY_ROWS.map((c) => (
                  <div key={c.name}>
                    <div className="flex items-baseline justify-between font-mono text-xs">
                      <span className="text-foreground/80">
                        {c.name} <span className="text-muted-foreground">({c.n})</span>
                      </span>
                      <span className="text-muted-foreground">
                        {c.heuristic.toFixed(1)}% →{" "}
                        <span className="font-semibold text-plum">{c.llm.toFixed(1)}%</span>
                      </span>
                    </div>
                    <div className="mt-1 flex flex-col gap-0.5">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-plum/40"
                          style={{ width: `${c.heuristic}%` }}
                        />
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-wardgreen"
                          style={{ width: `${c.llm}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
