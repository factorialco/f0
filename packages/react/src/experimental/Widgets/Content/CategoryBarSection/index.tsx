import { CategoryBarChart, CategoryBarProps } from "../../../../components/Charts/CategoryBarChart"
import { cn } from "../../../../lib/utils"

interface CategoryBarSectionProps {
  title: string
  subtitle: string
  data: CategoryBarProps["data"]
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
        <CategoryBarChart data={data} legend={legend} hideTooltip={hideTooltip} />
      </div>
      {!!helpText && (
        <div className={legend ? "mt-1" : "mt-2"}>
          <span className={cn("text-f1-foreground", legend ? "text-sm" : "text-base")}>
            {helpText}
          </span>
        </div>
      )}
    </div>
  )
}
