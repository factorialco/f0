import { forwardRef, PropsWithChildren } from "react"

import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import { useTextFormatEnforcer } from "../../../lib/text"

type Props = PropsWithChildren & {
  title?: string
}

const _WidgetSection = forwardRef<HTMLDivElement, Props>(
  ({ title, children }, ref) => {
    useTextFormatEnforcer(
      title,
      { disallowEmpty: true },
      { componentName: "WidgetSection" }
    )

    return (
      <div ref={ref} className="flex flex-col gap-2">
        <p className="text-base font-medium text-f1-foreground-secondary">
          {title}
        </p>
        {children}
      </div>
    )
  }
)

_WidgetSection.displayName = "WidgetSection"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const WidgetSection = withDataTestId(
  experimentalComponent("WidgetSection", _WidgetSection)
)
