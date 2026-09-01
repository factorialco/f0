import { ChevronDown } from "lucide-react"

import { F0Icon } from "@/components/F0Icon/F0Icon"
import { ChevronUp } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

type ArrowsProps = {
  step?: number
  disabled?: boolean
  onClickArrow: (type: "increase" | "decrease") => () => void
}

/**
 * Mouse affordance for the stepper. Deliberately kept out of the tab order:
 * the keyboard route to the same behaviour is ArrowUp/ArrowDown on the input
 * itself (see the `onKeyDown` in ../internal.tsx), which is what a native
 * number input does and what a keyboard user reaches for first.
 *
 * Do not add `tabIndex` here without resizing the targets. These are 16x12 CSS
 * px stacked ~12px apart, so making them focusable brings them into the scope
 * of axe's `target-size` rule (WCAG 2.5.8), which they fail on both the size
 * and the offset sub-check.
 */
export const Arrows = ({ onClickArrow, step, disabled }: ArrowsProps) => {
  const i18n = useI18n()

  if (!step || disabled) return null

  return (
    <div
      className="-mt-1 hidden h-full flex-col group-focus-within:flex group-hover:flex"
      onClick={(e) => e.preventDefault()}
    >
      <div
        onClick={onClickArrow("increase")}
        className="h-3 cursor-pointer"
        role="button"
        aria-label={i18n.t("numberInput.increase")}
      >
        <F0Icon size="sm" icon={ChevronUp} />
      </div>
      <div
        onClick={onClickArrow("decrease")}
        className="h-3 cursor-pointer"
        role="button"
        aria-label={i18n.t("numberInput.decrease")}
      >
        <F0Icon size="sm" icon={ChevronDown} />
      </div>
    </div>
  )
}
