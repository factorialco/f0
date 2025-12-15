import { Indicator } from "@/ui/indicator"
import { ComponentProps, forwardRef } from "react"

export interface IndicatorsListProps {
  items: ComponentProps<typeof Indicator>[]
}

export const IndicatorsList = forwardRef<HTMLDivElement, IndicatorsListProps>(
  function IndicatorsList({ items }, ref) {
    return (
      <div ref={ref} className="grid auto-cols-fr grid-flow-col items-end gap-x-3">
        {items.map(({ label, content, color, ...item }) => (
          <Indicator
            key={`${label}-${content}`}
            label={label}
            content={content}
            color={color}
            {...item}
          />
        ))}
      </div>
    )
  }
)
