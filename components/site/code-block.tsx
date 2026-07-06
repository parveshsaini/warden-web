"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

/* In-palette code card: deep-plum surface, cream/gold text (dark-on-cream would be wrong here). */
export function CodeBlock({
  code,
  copyText,
  className,
  label,
}: {
  code: React.ReactNode;
  copyText?: string;
  className?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!copyText) return;
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      toast.success("Copied!", { duration: 1600 });
      setTimeout(() => setCopied(false), 1600);
    } catch {
      toast.error("Couldn't copy — select the text manually.");
    }
  }

  return (
    <div
      className={cn(
        "relative rounded-2xl bg-ink text-[#F6E7C8] shadow-[0_14px_40px_-14px_rgb(46_33_64/0.5)]",
        "ring-1 ring-gold-deep/30",
        className
      )}
    >
      {label ? (
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-2.5">
          <span aria-hidden className="size-2.5 rounded-full bg-alarm/80" />
          <span aria-hidden className="size-2.5 rounded-full bg-energy/80" />
          <span aria-hidden className="size-2.5 rounded-full bg-wardgreen/80" />
          <span className="ml-2 font-mono text-xs text-[#B7A9CC]">{label}</span>
        </div>
      ) : null}
      {copyText ? (
        <button
          type="button"
          onClick={copy}
          aria-label="Copy code"
          className="press-squash absolute right-3 top-2.5 rounded-lg p-2 text-gold/80 hover:text-energy hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-energy cursor-pointer"
        >
          {copied ? <CheckIcon className="size-4 text-wardgreen" /> : <CopyIcon className="size-4" />}
        </button>
      ) : null}
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed sm:text-sm">
        {code}
      </pre>
    </div>
  );
}
