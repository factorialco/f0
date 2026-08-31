import { type ReactNode } from "react"

import {
  TooltipInternal,
  type TooltipCopyProps,
  type TooltipListItem,
} from "@/experimental/Overlays/Tooltip"

/**
 * Structured tooltip copy: a semibold title, a body paragraph and an optional
 * bulleted list. A plain string is the title alone, which is what every caller
 * passed before the structured form existed.
 */
export type TooltipContentValue = {
  title?: string
  description?: string
  items?: TooltipListItem[]
}

export type TooltipValue = string | TooltipContentValue

export type { TooltipListItem }

const itemToText = (item: TooltipListItem): string =>
  typeof item === "string"
    ? item
    : [item.title, item.description].filter(Boolean).join(" ")

/** Reads the parts as sentences without doubling punctuation the copy already has. */
const joinSentences = (parts: string[]): string =>
  parts
    .map((part) => part.trim())
    .map((part) => (/[.!?:;]$/.test(part) ? part : `${part}.`))
    .join(" ")

/**
 * Flattens tooltip copy into a single string for hosts that expose it to
 * screen readers, which get no hover and so never see the tooltip itself.
 */
export const tooltipAccessibleText = (
  tooltip?: TooltipValue
): string | undefined => {
  if (!tooltip) return undefined
  if (typeof tooltip === "string") return tooltip

  const parts = [
    tooltip.title,
    tooltip.description,
    ...(tooltip.items ?? []).map(itemToText),
  ].filter((part): part is string => Boolean(part && part.trim()))

  return parts.length > 0 ? joinSentences(parts) : undefined
}

/** Returns undefined when the tooltip has nothing to say. */
const toTooltipCopy = (
  tooltip?: TooltipValue
): TooltipCopyProps | undefined => {
  if (!tooltip) return undefined
  if (typeof tooltip === "string") return { label: tooltip }

  const { title, description, items } = tooltip
  if (title) return { label: title, description, items }
  if (description) return { description, items }
  if (items?.length) return { items }
  return undefined
}

interface TooltipWrapperProps {
  tooltip?: TooltipValue
  children: ReactNode
}

export const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
  tooltip,
  children,
}) => {
  const copy = toTooltipCopy(tooltip)

  if (!copy) return <>{children}</>

  return (
    <TooltipInternal instant {...copy}>
      {children}
    </TooltipInternal>
  )
}
