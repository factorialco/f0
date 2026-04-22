/**
 * Count cell type for displaying aggregated count values in data collections.
 * Renders a summary type label followed by the computed value.
 */
import { ValueDisplayRendererContext } from "../.."

interface CountValue {
  label: string
}
export type CountCellValue = CountValue

export const CountCell = (
  args: CountCellValue,
  meta: ValueDisplayRendererContext
) => {
  return (
    <div className="flex gap-1">
      <span className="text-f1-foreground-secondary">
        {meta.i18n.collections.summaries.types.count}
      </span>
      {`${args.label}`}
    </div>
  )
}
