import { Fragment } from "react"

import { cn } from "@/lib/utils"

import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import type { CurrencyDef } from "../amount"
import { WithPlaceholder } from "../types"

/**
 * Compound value-display renderer.
 *
 * Renders a sequence of heterogeneous segments (text, number, percentage,
 * amount) as a single inline cell, optionally separated by a configurable
 * separator. Each segment can define an optional `tone` from
 * {@link compoundTones}, which controls its visual emphasis within the cell.
 *
 * Segment values use {@link WithPlaceholder} so that missing or undefined
 * values are rendered consistently with other value-display types.
 */
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

export const compoundSizes = ["md", "sm"] as const

/**
 * Type scale of a single segment. Defaults to `"md"` (the cell's base size);
 * `"sm"` renders one step down, for subordinating a segment to the ones beside
 * it — e.g. a name in `"md"` followed by its context in `"sm"`.
 */
export type CompoundSize = (typeof compoundSizes)[number]

type UnitsPosition = "left" | "right"

export interface CompoundTextSegment extends WithPlaceholder {
  type: "text"
  value: string | number | undefined
  tone?: CompoundTone
  size?: CompoundSize
}

export interface CompoundNumberSegment extends WithPlaceholder {
  type: "number"
  value: number | undefined
  units?: string
  unitsPosition?: UnitsPosition
  decimalPlaces?: number
  tone?: CompoundTone
  size?: CompoundSize
}

export interface CompoundPercentageSegment extends WithPlaceholder {
  type: "percentage"
  value: number | undefined
  decimalPlaces?: number
  tone?: CompoundTone
  size?: CompoundSize
}

export interface CompoundAmountSegment extends WithPlaceholder {
  type: "amount"
  value: number | undefined
  currency?: CurrencyDef
  tone?: CompoundTone
  size?: CompoundSize
}

export type CompoundSegment =
  | CompoundTextSegment
  | CompoundNumberSegment
  | CompoundPercentageSegment
  | CompoundAmountSegment

export interface CompoundCellValue {
  segments: CompoundSegment[]
  separator?: string
}

const defaultSeparator = " / "
const defaultMissingValue = "–"

const toneClassByValue: Record<CompoundTone, string> = {
  neutral: "text-f1-foreground",
  secondary: "text-f1-foreground-secondary",
  positive: "text-f1-foreground-positive",
  critical: "text-f1-foreground-critical",
  warning: "text-f1-foreground-warning",
  info: "text-f1-foreground-info",
  selected: "text-f1-foreground-selected",
}

// "md" is the cell's base size, so it needs no class.
const sizeClassByValue: Record<CompoundSize, string> = {
  md: "",
  sm: "text-sm",
}

const resolveCompoundTextValue = (
  value: string | undefined,
  placeholder?: string
): ResolvedTextSegment => {
  if (value !== undefined) {
    return { kind: "text", text: value, isMissing: false }
  }

  if (placeholder !== undefined) {
    return { kind: "text", text: placeholder, isMissing: true }
  }

  return { kind: "text", text: defaultMissingValue, isMissing: true }
}

interface FormattedNumberParts {
  value: string
  units: string
  unitsPosition: UnitsPosition
}

interface ResolvedTextSegment {
  kind: "text"
  text: string
  isMissing: boolean
}

interface ResolvedFormattedSegment {
  kind: "formatted"
  parts: FormattedNumberParts
  isMissing: false
}

type ResolvedSegment = ResolvedTextSegment | ResolvedFormattedSegment

const resolveCollapsedMissingText = (
  resolvedSegments: ResolvedSegment[]
): string | null => {
  if (
    resolvedSegments.length === 0 ||
    !resolvedSegments.every((segment) => segment.isMissing)
  ) {
    return null
  }

  const [firstSegment] = resolvedSegments
  return firstSegment.kind === "text" ? firstSegment.text : defaultMissingValue
}

const formatNumberParts = ({
  number,
  units,
  unitsPosition,
  decimalPlaces,
}: {
  number: number | undefined
  units?: string
  unitsPosition?: UnitsPosition
  decimalPlaces?: number
}): FormattedNumberParts => {
  const resolvedUnitsPosition = unitsPosition ?? "right"
  const resolvedUnits = units ?? ""
  const value =
    decimalPlaces !== undefined
      ? (number?.toFixed(decimalPlaces) ?? "")
      : (number?.toString() ?? "")

  return {
    value,
    units: resolvedUnits,
    unitsPosition: resolvedUnitsPosition,
  }
}

const FormattedNumberContent = ({ parts }: { parts: FormattedNumberParts }) => {
  return (
    <>
      {parts.unitsPosition === "left" && parts.units && (
        <span>{parts.units.toString()}</span>
      )}
      {parts.value}
      {parts.unitsPosition === "right" && parts.units && (
        <span>{parts.units.toString()}</span>
      )}
    </>
  )
}

const resolveSegmentText = (segment: CompoundSegment): ResolvedSegment => {
  switch (segment.type) {
    case "text":
      return resolveCompoundTextValue(
        segment.value !== undefined ? segment.value.toString() : undefined,
        segment.placeholder
      )
    case "number":
      if (segment.value === undefined) {
        return resolveCompoundTextValue(undefined, segment.placeholder)
      }

      return {
        kind: "formatted",
        parts: formatNumberParts({
          number: segment.value,
          decimalPlaces: segment.decimalPlaces,
          units: segment.units,
          unitsPosition: segment.unitsPosition,
        }),
        isMissing: false,
      }
    case "percentage":
      if (segment.value === undefined) {
        return resolveCompoundTextValue(undefined, segment.placeholder)
      }

      return resolveCompoundTextValue(
        `${
          formatNumberParts({
            number: segment.value,
            decimalPlaces: segment.decimalPlaces,
          }).value
        }%`
      )
    case "amount":
      if (segment.value === undefined) {
        return resolveCompoundTextValue(undefined, segment.placeholder)
      }

      return {
        kind: "formatted",
        parts: formatNumberParts({
          number: segment.value,
          decimalPlaces: segment.currency?.decimalPlaces,
          units: segment.currency?.symbol,
          unitsPosition: segment.currency?.symbolPosition,
        }),
        isMissing: false,
      }
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
  const wrapperClassName = cn(
    "flex flex-1 items-center text-f1-foreground",
    meta.visualization === "table" && [
      meta.tableAlign === "right" && "justify-end",
      tableDisplayClassNames.text,
    ]
  )

  if (args.segments.length === 0) {
    return (
      <div className={wrapperClassName} data-cell-type="compound">
        <span className={toneClassByValue.secondary}>
          {defaultMissingValue}
        </span>
      </div>
    )
  }

  const separator = args.separator ?? defaultSeparator
  const resolvedSegments = args.segments.map((segment) =>
    resolveSegmentText(segment)
  )
  const collapsedMissingText = resolveCollapsedMissingText(resolvedSegments)

  if (collapsedMissingText !== null) {
    return (
      <div className={wrapperClassName} data-cell-type="compound">
        <span className={toneClassByValue.secondary}>
          {collapsedMissingText}
        </span>
      </div>
    )
  }

  return (
    <div className={wrapperClassName} data-cell-type="compound">
      {args.segments.map((segment, index) => {
        const resolvedSegment = resolvedSegments[index]
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
            <span
              className={cn(
                toneClassByValue[tone],
                sizeClassByValue[segment.size ?? "md"],
                resolvedSegment.kind === "formatted" &&
                  "inline-flex items-center gap-1"
              )}
            >
              {resolvedSegment.kind === "formatted" ? (
                <FormattedNumberContent parts={resolvedSegment.parts} />
              ) : (
                resolvedSegment.text
              )}
            </span>
          </Fragment>
        )
      })}
    </div>
  )
}
