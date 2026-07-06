import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "./code-block";
import { Reveal } from "./reveal";

const CONFIG_YAML = `# warden.config.yaml — point warden at your MCP servers
servers:
  - name: filesystem
    command: npx
    args: ["-y", "@modelcontextprotocol/server-filesystem", "."]
  - name: github
    command: npx
    args: ["-y", "@modelcontextprotocol/server-github"]`;

export function Install() {
  return (
    <section id="install" className="scroll-mt-20 bg-canvas-edge/40 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-plum sm:text-4xl">
            Running in 60 seconds.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Works with Claude, Cursor, and any MCP client — over stdio or Streamable HTTP.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <Tabs defaultValue="npm">
            <TabsList className="mx-auto grid w-full max-w-sm grid-cols-3 rounded-full bg-secondary p-1">
              <TabsTrigger value="npm" className="rounded-full font-semibold">
                npm
              </TabsTrigger>
              <TabsTrigger value="npx" className="rounded-full font-semibold">
                npx
              </TabsTrigger>
              <TabsTrigger value="docker" className="rounded-full font-semibold">
                Docker
              </TabsTrigger>
            </TabsList>

            <TabsContent value="npm" className="mt-4">
              <CodeBlock
                label="npm"
                copyText={"npm install -g warden-gateway\nwarden-gateway --http"}
                code={
                  <>
                    <span className="text-[#B7A9CC]"># install from npm — no clone needed</span>
                    {"\n"}
                    <span className="text-gold">npm</span> install -g warden-gateway
                    {"\n\n"}
                    <span className="text-[#B7A9CC]">
                      # point warden.config.yaml at your MCP servers, then run:
                    </span>
                    {"\n"}
                    <span className="text-gold">warden-gateway</span> --http{"  "}
                    <span className="text-[#B7A9CC]">
                      # serves http://127.0.0.1:3000/mcp
                    </span>
                  </>
                }
              />
            </TabsContent>

            <TabsContent value="npx" className="mt-4">
              <CodeBlock
                label="npx"
                copyText="npx warden-gateway --http"
                code={
                  <>
                    <span className="text-[#B7A9CC]"># run without installing</span>
                    {"\n"}
                    <span className="text-gold">npx</span> warden-gateway --http{"  "}
                    <span className="text-[#B7A9CC]">
                      # serves http://127.0.0.1:3000/mcp
                    </span>
                  </>
                }
              />
            </TabsContent>

            <TabsContent value="docker" className="mt-4">
              <CodeBlock
                label="docker"
                copyText="docker pull ghcr.io/parveshsaini/warden:0.1.0"
                code={
                  <>
                    <span className="text-gold">docker</span> pull
                    ghcr.io/parveshsaini/warden:0.1.0
                  </>
                }
              />
            </TabsContent>
          </Tabs>
        </Reveal>

        <Reveal className="mt-8">
          <CodeBlock label="warden.config.yaml" copyText={CONFIG_YAML} code={CONFIG_YAML} />
          <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
            HTTP mode supports Bearer API-key auth via{" "}
            <code className="font-mono text-plum">http.auth.apiKeys</code> or the{" "}
            <code className="font-mono text-plum">WARDEN_API_KEYS</code> env var.{" "}
            <code className="font-mono text-plum">/healthz</code> stays open for probes;{" "}
            <code className="font-mono text-plum">/mcp</code> and{" "}
            <code className="font-mono text-plum">/metrics</code> require the key.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
