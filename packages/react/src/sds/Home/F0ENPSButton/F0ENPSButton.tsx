import { useEffect, useMemo, useState } from "react"

import { type ButtonToggleColor } from "@/components/F0ButtonToggle"
import {
  type ButtonToggleGroupSize,
  F0ButtonToggleGroup,
  type F0ButtonToggleGroupItem,
} from "@/components/F0ButtonToggleGroup"
import { pulseIcon, pulses, type Pulse } from "@/lib/mood"
import { cn } from "@/lib/utils"

import type { F0ENPSButtonProps } from "./types"

/**
 * Each face answers in the colour of the mood it stands for, so the scale reads
 * as a scale: the answer is recognisable from across the page, before any of the
 * copy is. `F0ButtonToggle` owns what a colour looks like — the fill, the border
 * and the glyph, and the muted glyph on the faces not chosen. The one place this
 * row overrules it is the unanswered state (see `unansweredFaceColor`).
 */
const moodColor: Record<Pulse, ButtonToggleColor> = {
  superNegative: "mood-super-negative",
  negative: "mood-negative",
  neutral: "mood-neutral",
  positive: "mood-positive",
  superPositive: "mood-super-positive",
}

/**
 * The face IS the control here — there is no label beside it to carry the
 * meaning — so it takes as much of the button as the geometry allows: one step
 * up from the icon size `F0ButtonToggle` derives from the button height, leaving
 * 4px of room around it (6px at `lg`). `sm` is already at that limit and stays.
 *
 * Set on the svg rather than through `F0Icon`'s `size`, whose scale stops at
 * `lg`/24px — the same way `F0AvatarModule` sizes its own glyph past the scale.
 */
const faceSize: Record<ButtonToggleGroupSize, string> = {
  sm: "[&_svg]:w-4",
  md: "[&_svg]:w-6",
  lg: "[&_svg]:w-7",
}

/**
 * THE UNANSWERED SCALE IS ALREADY IN COLOUR — the glyph only. Read cold, five
 * grey faces are five buttons; in colour they are a scale, and the answer you
 * are looking for is findable by its colour before its shape resolves.
 *
 * `F0ButtonToggle` mutes an unselected coloured toggle by design (one coloured
 * toggle among plain ones would shout), so this is the eNPS row overriding it
 * for its own case rather than a change to that rule. It overrides the GLYPH
 * only: no fill, no border. Those are how a *chosen* answer is drawn, and five
 * tinted boxes would leave nothing for the answer to stand out against.
 *
 * Once an answer exists the row hands the colour back to `F0ButtonToggle`: the
 * answered face keeps its fill, border and glyph, and the four not chosen mute,
 * which is what makes the answer visible at a glance.
 *
 * Written out per face because Tailwind only generates the utilities it can see
 * as literal strings.
 */
const unansweredFaceColor: Record<Pulse, string> = {
  superNegative: "text-f1-icon-mood-super-negative",
  negative: "text-f1-icon-mood-negative",
  neutral: "text-f1-icon-mood-neutral",
  positive: "text-f1-icon-mood-positive",
  superPositive: "text-f1-icon-mood-super-positive",
}

const isPulse = (value: string): value is Pulse =>
  (pulses as readonly string[]).includes(value)

export const F0ENPSButton = ({
  value,
  onChange,
  labels,
  icons,
  size = "lg",
  fullWidth = true,
  disabled = false,
  required = false,
}: F0ENPSButtonProps) => {
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
      pulses.map(
        (pulse): F0ButtonToggleGroupItem => ({
          value: pulse,
          icon: icons?.[pulse] ?? pulseIcon[pulse],
          label: labels[pulse],
          color: moodColor[pulse],
          // `instant`: the face is the whole control and this tooltip is the
          // only place its name is written, so a 700ms wait withholds the scale
          // from someone reading along it — the same call the Home rail makes.
          tooltip: { description: labels[pulse], instant: true },
          // The colour last: it has to land after `F0ButtonToggle`'s own
          // unselected `text-f1-icon` for tailwind-merge to keep it.
          className: cn(
            faceSize[size],
            answer === undefined && unansweredFaceColor[pulse]
          ),
        })
      ),
    [labels, icons, size, answer]
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
