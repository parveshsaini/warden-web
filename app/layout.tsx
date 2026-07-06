import type { Metadata } from "next";
import { Baloo_2, Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warden — A control plane for AI tool access",
  description:
    "Warden is an open-source MCP gateway that sits between your MCP clients and your MCP servers — security, observability, and federation. Nothing passes unseen.",
  icons: {
    icon: "/logo-warden-sigil.png",
    apple: "/logo-warden-sigil.png",
  },
  openGraph: {
    title: "Warden — A control plane for AI tool access",
    description:
      "Open-source MCP gateway: tool-poisoning detection, OpenTelemetry traces, and federation behind one endpoint. Not vibes — a published benchmark.",
    images: ["/hero-gate.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
