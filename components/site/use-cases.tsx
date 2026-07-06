import { BugIcon, LayersIcon, RocketIcon, ShieldQuestionIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const CASES = [
  {
    icon: LayersIcon,
    title: "Wiring an agent to many tools",
    body: "Federate them behind one namespaced endpoint.",
  },
  {
    icon: ShieldQuestionIcon,
    title: "Running untrusted MCP servers",
    body: "Screen every third-party tool definition and output.",
  },
  {
    icon: RocketIcon,
    title: "Shipping AI features to production",
    body: "Auth, timeouts, retries, metrics, health probes, Cloud Run deploy.",
  },
  {
    icon: BugIcon,
    title: "Debugging & compliance",
    body: "An OTel trace and audit line for every single tool call.",
  },
];

export function UseCases() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-extrabold text-plum sm:text-4xl">
          Who stands to gain the gate?
        </h2>
      </Reveal>

      <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CASES.map((c) => (
          <StaggerItem key={c.title} className="h-full">
            <Card className="h-full rounded-3xl border-gold/30 bg-card shadow-[0_10px_30px_-12px_rgb(91_42_134/0.2)] transition-shadow hover:shadow-[0_0_0_2px_var(--gold),0_14px_36px_-12px_rgb(91_42_134/0.3)]">
              <CardHeader>
                <div className="mb-1 inline-flex size-10 items-center justify-center rounded-xl bg-accent text-plum">
                  <c.icon aria-hidden className="size-5" />
                </div>
                <CardTitle className="font-display text-lg leading-snug text-plum">
                  {c.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-foreground/80">
                {c.body}
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
