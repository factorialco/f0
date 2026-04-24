import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface GlowingFieldWrapperProps {
  children: ReactNode
  isGlowing: boolean
  /** True during the fade-out transition (glow is visible but transitioning to opacity-0). */
  isFading?: boolean
  /** Border-radius matching the input's own radius. Defaults to rounded-[12px] (InputField md). */
  overlayClassName?: string
}

/**
 * Wraps a form field with a rotating conic-gradient border to signal that the
 * field was recently filled by the AI co-creation flow (fillForm action).
 *
 * The gradient overlay sits on top of the input at zIndex 1 (within the isolate
 * context), so the native input border is always present underneath and revealed
 * naturally as the gradient fades out.
 */
export function GlowingFieldWrapper({
  children,
  isGlowing,
  isFading = false,
  overlayClassName,
}: GlowingFieldWrapperProps) {
  const radiusClass = overlayClassName ?? "rounded-[12px]"
  const showGlow = isGlowing || isFading
  return (
    <div className="relative isolate">
      {children}
      {showGlow && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0",
            "animate-rotate-gradient bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.8),hsla(348,80%,50%,0.8),hsla(348,80%,50%,0.8),hsla(18,80%,50%,0.8),hsla(229,57%,76%,0.8),hsla(229,57%,76%,0.8))] [--gradient-angle:0deg]",
            "transition-opacity duration-500",
            isFading ? "opacity-0" : "opacity-100",
            radiusClass
          )}
          style={{
            zIndex: 1,
            // Punch out the interior so the conic gradient is only visible as a 1px ring.
            padding: "1px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          }}
        />
      )}
      {isGlowing && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute -inset-px blur-sm",
            "animate-flash-glow",
            "bg-[conic-gradient(from_0deg,hsla(229,57%,76%,0.8),hsla(348,80%,50%,0.8),hsla(348,80%,50%,0.8),hsla(18,80%,50%,0.8),hsla(229,57%,76%,0.8),hsla(229,57%,76%,0.8))]",
            radiusClass
          )}
          style={{ zIndex: -1 }}
        />
      )}
    </div>
  )
}
