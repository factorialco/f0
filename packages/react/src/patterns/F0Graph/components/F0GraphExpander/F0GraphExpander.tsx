import { forwardRef } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { useI18n } from "@/lib/providers/i18n"

import type { F0GraphExpanderProps } from "./types"

// Rendered with the shared neutral F0 button. `aria-expanded` / `tabIndex` are
// forwarded to the underlying button so the expander keeps its tree a11y and
// plays along with the roving tabindex managed by `F0GraphExpanderWrapper`.
export const F0GraphExpander = forwardRef<HTMLDivElement, F0GraphExpanderProps>(
  ({ count, expanded, onClick, tabIndex, ariaLabel, loading }, ref) => {
    const i18n = useI18n()
    const displayCount = count > 99 ? "+99" : String(count)
    const label = i18n.t(expanded ? "actions.collapse" : "actions.expand")

    return (
      <div ref={ref} className="inline-flex">
        <ButtonInternal
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
  }
)

F0GraphExpander.displayName = "F0GraphExpander"
