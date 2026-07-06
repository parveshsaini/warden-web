import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Security", href: "#security" },
      { label: "Performance", href: "#performance" },
      { label: "Install", href: "#install" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "GitHub", href: "https://github.com/parveshsaini/warden" },
      { label: "npm", href: "https://www.npmjs.com/package/warden-gateway" },
      { label: "Docker (GHCR)", href: "https://ghcr.io/parveshsaini/warden" },
      { label: "MCP spec", href: "https://modelcontextprotocol.io" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-card/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Image src="/logo-warden-sigil.png" alt="" width={36} height={36} className="size-9" />
              <span className="font-display text-xl font-extrabold text-plum">Warden</span>
            </div>
            <p className="mt-3 font-display text-sm font-bold text-gold-deep">
              Nothing passes unseen.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              An open-source MCP gateway. MIT license · v0.1.0.
            </p>
          </div>

          <div className="flex gap-16">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="font-display text-sm font-bold text-plum">{col.title}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="text-sm text-foreground/75 transition-colors hover:text-plum"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-gold/25" />

        <p className="text-center text-sm text-muted-foreground">
          Built by{" "}
          <a
            href="https://github.com/parveshsaini"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-plum hover:underline"
          >
            Parvesh
          </a>
          {" "}· MIT © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
