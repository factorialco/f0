import { F0DataChart } from "@/kits/F0DataChart"
import { legacyChartColorToToken } from "@/lib/chart-colors"
import { cn } from "@/lib/utils"

interface CategoryBarSectionProps {
  title: string
  subtitle: string
  data: {
    name: string
    value: number
    color?: string
  }[]
  helpText?: string
  legend?: boolean
  hideTooltip?: boolean
}

export function CategoryBarSection({
  title,
  subtitle,
  data,
  helpText,
  legend = false,
  hideTooltip = false,
}: CategoryBarSectionProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-3xl font-semibold">{title}</span>
        <span className="text-xl text-f1-foreground-secondary">{subtitle}</span>
      </div>
      <div className="mt-2">
        <F0DataChart
          type="categoryBar"
          data={data.map((segment) => ({
            name: segment.name,
            value: segment.value,
            // Legacy colors were free-form strings; non-categorical values
            // (raw CSS) have no token equivalent and fall back to "smoke"
            // as a muted remainder tone.
            color: segment.color
              ? (legacyChartColorToToken(segment.color) ?? "smoke")
              : undefined,
          }))}
          showLegend={legend}
          showTooltip={!hideTooltip}
        />
      </div>
      {!!helpText && (
        <div className={legend ? "mt-1" : "mt-2"}>
          <span
            className={cn(
              "text-f1-foreground",
              legend ? "text-sm" : "text-base"
            )}
          >
            {helpText}
          </span>
        </div>
      )}
    </div>
  )
}
