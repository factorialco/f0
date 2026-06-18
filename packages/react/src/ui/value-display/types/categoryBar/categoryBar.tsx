import { CategoryBarChart } from "@/kits/Charts/CategoryBarChart"

import { ValueDisplayRendererContext } from "../../renderers"

export interface CategoryBarItem {
  label: string
  value: number
  color?: string
}

export interface CategoryBarValue {
  items: CategoryBarItem[]
  legend?: boolean
  hideTooltip?: boolean
}

export const CategoryBarCell = (
  args: CategoryBarValue,
  _meta: ValueDisplayRendererContext
) => {
  const items = args?.items ?? []
  const total = items.reduce((sum, item) => sum + item.value, 0)

  if (items.length === 0 || total <= 0) {
    return (
      <span
        className="text-f1-foreground-secondary"
        data-cell-type="categoryBar"
      >
        –
      </span>
    )
  }

  return (
    <div className="w-full" data-cell-type="categoryBar">
      <CategoryBarChart
        data={items.map((item) => ({
          name: item.label,
          value: item.value,
          color: item.color,
        }))}
        legend={args.legend ?? false}
        hideTooltip={args.hideTooltip ?? false}
      />
    </div>
  )
}
