import { forwardRef } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { useI18n } from "@/lib/providers/i18n"

import type { F0GraphExpanderProps } from "./types"

// Rendered with the shared neutral F0 button. The ref lands on the button
// itself, not a wrapper: the button is the only interactive element here, so it
// owns the roving tabindex, `aria-expanded`, and the imperative `.focus()` that
// `F0GraphExpanderWrapper` registers. Wrapping it in a second `role="button"`
// element nested two controls inside each other (axe `nested-interactive`).
export const F0GraphExpander = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  F0GraphExpanderProps
>(({ count, expanded, onClick, tabIndex, ariaLabel, loading }, ref) => {
  const i18n = useI18n()
  const displayCount = count > 99 ? "+99" : String(count)
  const label = i18n.t(expanded ? "actions.collapse" : "actions.expand")

  return (
    <div className="inline-flex">
      <ButtonInternal
        ref={ref}
        variant="neutral"
        label={displayCount}
        aria-label={ariaLabel ?? label}
        aria-expanded={expanded}
        tabIndex={tabIndex}
        loading={loading}
        onClick={onClick}
        tooltip={label}
      />
    </div>
  )
})

F0GraphExpander.displayName = "F0GraphExpander"
