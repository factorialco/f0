import { forwardRef, PropsWithChildren } from "react"
import { useTextFormatEnforcer } from "../../../lib/text"

type Props = PropsWithChildren & {
  title?: string
}

export const WidgetSection = forwardRef<HTMLDivElement, Props>(({ title, children }, ref) => {
  useTextFormatEnforcer(title, { disallowEmpty: true })

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <p className="text-base font-medium text-f1-foreground-secondary">{title}</p>
      {children}
    </div>
  )
})

WidgetSection.displayName = "WidgetSection"
