/**
 * Summary cell type for displaying aggregated values (e.g. sum) in data collections.
 * Renders a summary type label followed by the computed value.
 */

import { ValueDisplayRendererContext } from "../.."

interface SummaryValue {
  label: string
}
export type SummaryCellValue = SummaryValue

export const SummaryCell = (
  args: SummaryCellValue,
  meta: ValueDisplayRendererContext
) => {
  return (
    <div className="flex gap-1">
      <span className="text-f1-foreground-secondary">
        {meta.i18n.collections.summaries.types.sum}
      </span>
      {`${args.label}`}
    </div>
  )
}
