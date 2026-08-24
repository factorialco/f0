import { useEffect, useMemo, useState } from "react"

import {
  F0ButtonToggleGroup,
  type F0ButtonToggleGroupItem,
} from "@/components/F0ButtonToggleGroup"
import { pulseIcon, pulses, type Pulse } from "@/lib/mood"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import type { F0ENPSButtonProps } from "./types"

/**
 * The answered face takes the colour of the mood it stands for, so the scale
 * reads as a scale: the answer is recognisable from across the page, before any
 * of the copy is. Every other face stays neutral — five coloured faces at once
 * would be decoration, not an answer.
 *
 * The classes are written out per mood rather than composed from the token name
 * because Tailwind only generates the utilities it can see as literal strings.
 * The fill follows `f1-background-selected` (0.1, and 0.2 under the pointer) so a
 * mood answer sits at the same weight as any other selected control in F0. The
 * border goes heavier than `f1-border-selected`, at 0.6: five bordered faces sit
 * side by side here, and at 0.4 the answered one didn't win the row.
 */
const selectedAccent: Record<Pulse, string> = {
  superNegative: cn(
    "bg-[hsl(var(--mood-super-negative)/0.1)] hover:bg-[hsl(var(--mood-super-negative)/0.2)]",
    "border-[hsl(var(--mood-super-negative)/0.6)]",
    "text-f1-icon-mood-super-negative hover:text-f1-icon-mood-super-negative"
  ),
  negative: cn(
    "bg-[hsl(var(--mood-negative)/0.1)] hover:bg-[hsl(var(--mood-negative)/0.2)]",
    "border-[hsl(var(--mood-negative)/0.6)]",
    "text-f1-icon-mood-negative hover:text-f1-icon-mood-negative"
  ),
  neutral: cn(
    "bg-[hsl(var(--mood-neutral)/0.1)] hover:bg-[hsl(var(--mood-neutral)/0.2)]",
    "border-[hsl(var(--mood-neutral)/0.6)]",
    "text-f1-icon-mood-neutral hover:text-f1-icon-mood-neutral"
  ),
  positive: cn(
    "bg-[hsl(var(--mood-positive)/0.1)] hover:bg-[hsl(var(--mood-positive)/0.2)]",
    "border-[hsl(var(--mood-positive)/0.6)]",
    "text-f1-icon-mood-positive hover:text-f1-icon-mood-positive"
  ),
  superPositive: cn(
    "bg-[hsl(var(--mood-super-positive)/0.1)] hover:bg-[hsl(var(--mood-super-positive)/0.2)]",
    "border-[hsl(var(--mood-super-positive)/0.6)]",
    "text-f1-icon-mood-super-positive hover:text-f1-icon-mood-super-positive"
  ),
}

/** An unanswered face is a muted glyph, not a heading. */
const unansweredFace = "text-f1-icon"

const isPulse = (value: string): value is Pulse =>
  (pulses as readonly string[]).includes(value)

export const F0ENPSButton = ({
  value,
  onChange,
  labels,
  size = "lg",
  fullWidth = true,
  disabled = false,
  required = false,
}: F0ENPSButtonProps) => {
  const i18n = useI18n()

  /**
   * Mirrors `value` so the accent follows the press even when the consumer
   * doesn't feed the answer back — the group keeps its own selection either way,
   * and a selected face without its colour would read as a rendering bug.
   */
  const [answer, setAnswer] = useState(value)

  useEffect(() => {
    setAnswer(value)
  }, [value])

  const items = useMemo(
    () =>
      pulses.map((pulse): F0ButtonToggleGroupItem => {
        const label = labels?.[pulse] ?? i18n.enps.scale[pulse]

        return {
          value: pulse,
          icon: pulseIcon[pulse],
          label,
          tooltip: label,
          className: cn(
            unansweredFace,
            answer === pulse && selectedAccent[pulse]
          ),
        }
      }),
    [answer, labels, i18n]
  )

  const handleChange = (next: string) => {
    const nextAnswer = isPulse(next) ? next : undefined

    // The group replays its current selection once on mount; only a real change
    // is an answer.
    if (nextAnswer === answer) {
      return
    }

    setAnswer(nextAnswer)
    onChange?.(nextAnswer)
  }

  return (
    <F0ButtonToggleGroup
      items={items}
      value={answer ?? ""}
      onChange={handleChange}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      required={required}
    />
  )
}

F0ENPSButton.displayName = "F0ENPSButton"
