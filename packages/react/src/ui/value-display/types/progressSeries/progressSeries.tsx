import { CSSProperties } from "react"

import {
  F0ProgressSeries,
  F0ProgressSeriesProps,
} from "@/experimental/F0ProgressSeries"
import { cn } from "@/lib/utils"

import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"

export type {
  F0ProgressSeriesBar as ProgressSeriesBar,
  F0ProgressSeriesColor as ProgressSeriesColor,
  F0ProgressSeriesSize as ProgressSeriesSize,
} from "@/experimental/F0ProgressSeries"

/** Same surface as `F0ProgressSeries`, minus the testing-only props. */
export type ProgressSeriesCellValue = Omit<F0ProgressSeriesProps, "dataTestId">

const CELL_MIN_HEIGHT_PX = 40
const CELL_MIN_WIDTH_PX = 80

function cellStyle(meta: ValueDisplayRendererContext): CSSProperties {
  return meta.visualization === "table"
    ? { minWidth: CELL_MIN_WIDTH_PX }
    : { minHeight: CELL_MIN_HEIGHT_PX, minWidth: CELL_MIN_WIDTH_PX }
}

export const ProgressSeriesCell = (
  args: ProgressSeriesCellValue,
  meta: ValueDisplayRendererContext
) => {
  const bars = args?.bars

  if (!args?.loading && (!Array.isArray(bars) || bars.length === 0)) {
    return (
      <div
        className={cn(
          "text-f1-foreground-secondary",
          meta.visualization === "table" && tableDisplayClassNames.text
        )}
        data-cell-type="progressSeries"
      >
        –
      </div>
    )
  }

  return (
    <div
      className="flex w-full items-center"
      style={cellStyle(meta)}
      data-cell-type="progressSeries"
      aria-busy={args.loading || undefined}
    >
      <F0ProgressSeries {...args} bars={bars ?? []} />
    </div>
  )
}
