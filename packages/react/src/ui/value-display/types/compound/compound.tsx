import { Fragment } from "react"

import { cn } from "@/lib/utils"

import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import type { CurrencyDef } from "../amount"
import { formatNumberText } from "../number/format"
import type { UnitsPosition } from "../number/format"
import { WithPlaceholder } from "../types"

export const compoundTones = [
  "neutral",
  "secondary",
  "positive",
  "critical",
  "warning",
  "info",
  "selected",
] as const

export type CompoundTone = (typeof compoundTones)[number]

export interface CompoundTextSegment extends WithPlaceholder {
  type: "text"
  value: string | number | undefined
  tone?: CompoundTone
}

export interface CompoundNumberSegment extends WithPlaceholder {
  type: "number"
  value: number | undefined
  units?: string
  unitsPosition?: UnitsPosition
  decimalPlaces?: number
  tone?: CompoundTone
}

export interface CompoundAmountSegment extends WithPlaceholder {
  type: "amount"
  value: number | undefined
  currency?: CurrencyDef
  tone?: CompoundTone
}

export type CompoundSegment =
  | CompoundTextSegment
  | CompoundNumberSegment
  | CompoundAmountSegment

export interface CompoundCellValue {
  segments: CompoundSegment[]
  separator?: string
}

const defaultSeparator = " / "
const defaultMissingValue = "-"

const toneClassByValue: Record<CompoundTone, string> = {
  neutral: "text-f1-foreground",
  secondary: "text-f1-foreground-secondary",
  positive: "text-f1-foreground-positive",
  critical: "text-f1-foreground-critical",
  warning: "text-f1-foreground-warning",
  info: "text-f1-foreground-info",
  selected: "text-f1-foreground-selected",
}

const resolveValue = (
  value: string | undefined,
  placeholder?: string
): { text: string; isMissing: boolean } => {
  if (value !== undefined) {
    return { text: value, isMissing: false }
  }

  if (placeholder !== undefined) {
    return { text: placeholder, isMissing: true }
  }

  return { text: defaultMissingValue, isMissing: true }
}

const resolveSegmentText = (
  segment: CompoundSegment
): { text: string; isMissing: boolean } => {
  switch (segment.type) {
    case "text":
      return resolveValue(
        segment.value !== undefined ? segment.value.toString() : undefined,
        segment.placeholder
      )
    case "number":
      return resolveValue(
        segment.value !== undefined
          ? formatNumberText({
              number: segment.value,
              decimalPlaces: segment.decimalPlaces,
              units: segment.units,
              unitsPosition: segment.unitsPosition,
            })
          : undefined,
        segment.placeholder
      )
    case "amount":
      return resolveValue(
        segment.value !== undefined
          ? formatNumberText({
              number: segment.value,
              decimalPlaces: segment.currency?.decimalPlaces,
              units: segment.currency?.symbol,
              unitsPosition: segment.currency?.symbolPosition,
            })
          : undefined,
        segment.placeholder
      )
  }
}

const resolveTone = (
  tone: CompoundTone | undefined,
  isMissing: boolean
): CompoundTone => {
  if (tone) {
    return tone
  }

  return isMissing ? "secondary" : "neutral"
}

export const CompoundCell = (
  args: CompoundCellValue,
  meta: ValueDisplayRendererContext
) => {
  if (args.segments.length === 0) {
    return (
      <span
        className={cn(
          "text-f1-foreground-secondary",
          meta.visualization === "table" && tableDisplayClassNames.text
        )}
        data-cell-type="compound"
      >
        {defaultMissingValue}
      </span>
    )
  }

  const separator = args.separator ?? defaultSeparator

  return (
    <div
      className={cn(
        "flex flex-1 items-center text-f1-foreground",
        meta.visualization === "table" && [
          "justify-end",
          tableDisplayClassNames.text,
        ]
      )}
      data-cell-type="compound"
    >
      {args.segments.map((segment, index) => {
        const resolvedSegment = resolveSegmentText(segment)
        const tone = resolveTone(segment.tone, resolvedSegment.isMissing)

        return (
          <Fragment key={`${segment.type}-${index}`}>
            {index > 0 && (
              <span
                className={cn(toneClassByValue.secondary, "whitespace-pre")}
              >
                {separator}
              </span>
            )}
            <span className={toneClassByValue[tone]}>
              {resolvedSegment.text}
            </span>
          </Fragment>
        )
      })}
    </div>
  )
}
