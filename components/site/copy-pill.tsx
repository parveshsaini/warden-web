"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function CopyPill({
  command = "npm install -g warden-gateway",
  className,
}: {
  command?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      toast.success("Copied!", { duration: 1600 });
      setTimeout(() => setCopied(false), 1600);
    } catch {
      toast.error("Couldn't copy — select the text manually.");
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy install command: ${command}`}
      className={cn(
        "press-squash shimmer-hover group inline-flex items-center gap-3 rounded-full",
        "bg-ink text-[#F6E7C8] font-mono text-sm sm:text-base",
        "px-6 py-3.5 gold-rim cursor-pointer select-none",
        "ring-1 ring-gold-deep/40 transition-shadow hover:shadow-[0_0_28px_4px_rgb(255_184_77/0.5)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        copied && "torch-glow",
        className
      )}
    >
      <span aria-hidden className="text-gold">
        $
      </span>
      <span>{command}</span>
      {copied ? (
        <CheckIcon aria-hidden className="size-4 text-wardgreen" />
      ) : (
        <CopyIcon aria-hidden className="size-4 text-gold group-hover:text-energy transition-colors" />
      )}
    </button>
  );
}
