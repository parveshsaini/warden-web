import Image from "next/image";
import { Reveal } from "./reveal";

export function Mascot() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal className="order-2 md:order-1">
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-gold-deep">
            MEET THE WARDEN
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-plum sm:text-4xl">
            The keeper of the threshold.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
            The Warden stands at the threshold. Every tool that seeks passage is read,
            judged, and either warded through — or turned away. Every passage is inscribed
            in the ledger.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="order-1 md:order-2">
          <div className="idle-float mx-auto max-w-sm overflow-hidden rounded-3xl gold-rim ring-2 ring-gold/60">
            <Image
              src="/mascot-warden.jpeg"
              alt="The Warden — a hooded purple-and-gold wizard holding a flaming staff"
              width={768}
              height={960}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
