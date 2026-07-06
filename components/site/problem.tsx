import { ShieldAlertIcon, SyringeIcon, UnplugIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const PAINS = [
  {
    icon: SyringeIcon,
    title: "Tool poisoning",
    body: "A poisoned tool description can hijack your model before a single call is made.",
  },
  {
    icon: ShieldAlertIcon,
    title: "Prompt injection",
    body: "A prompt-injected tool result can exfiltrate secrets right past your agent.",
  },
  {
    icon: UnplugIcon,
    title: "No unified control",
    body: "Ten servers means ten endpoints, ten auth stories, and no shared audit trail.",
  },
];

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-extrabold text-plum sm:text-4xl">
          Individual MCP servers can&apos;t protect you.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
          MCP lets your agent call tools — but a single server has no cross-cutting view.
          Warden is the one gate they all pass through.
        </p>
      </Reveal>

      <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-3">
        {PAINS.map((p) => (
          <StaggerItem key={p.title}>
            <Card className="h-full rounded-3xl border-gold/30 bg-card shadow-[0_10px_30px_-12px_rgb(91_42_134/0.2)] transition-shadow hover:shadow-[0_0_0_2px_var(--gold),0_14px_36px_-12px_rgb(91_42_134/0.3)]">
              <CardHeader>
                <div className="mb-2 inline-flex size-11 items-center justify-center rounded-2xl bg-accent text-plum">
                  <p.icon aria-hidden className="size-5" />
                </div>
                <CardTitle className="font-display text-xl text-plum">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-foreground/80">
                {p.body}
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
