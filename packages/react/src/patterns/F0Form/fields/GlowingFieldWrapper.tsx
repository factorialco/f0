import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface GlowingFieldWrapperProps {
  children: ReactNode
  isGlowing: boolean
}

/**
 * Wraps a form field with a rotating conic-gradient border to signal that the
 * field was recently filled by the AI co-creation flow (fillForm action).
 *
 * Uses the same visual pattern as AIButton — the outer wrapper carries the
 * conic-gradient background and `animate-rotate-gradient`, while the input's
 * own white background creates the 1px border illusion.
 */
export function GlowingFieldWrapper({
  children,
  isGlowing,
}: GlowingFieldWrapperProps) {
  return (
    <div
      className={cn(
        "relative",
        isGlowing && "[&_[class*='border-f1-border']]:border-transparent"
      )}
    >
      {children}
      {isGlowing && (
        <div
          className="pointer-events-none absolute animate-rotate-gradient rounded-lg bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.8),hsla(348,80%,50%,0.8),hsla(348,80%,50%,0.8),hsla(18,80%,50%,0.8),hsla(229,57%,76%,0.8),hsla(229,57%,76%,0.8))] [--gradient-angle:0deg]"
          style={{ inset: "-1px", zIndex: -1 }}
          aria-hidden
        />
      )}
    </div>
  )
}
