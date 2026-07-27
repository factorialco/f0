import { F0Box, F0Button, F0Text } from "@factorialco/f0-react"
import { Cross } from "@factorialco/f0-react/icons/app"

import OneIcon from "../OneIcon"

/**
 * In-context One nudge on a To-Do expense — scoped to *this* expense
 * (the grouping wedge), not a generic new-submission kickoff. Clicking
 * it asks One to add more receipts and keep them grouped with the one
 * you're looking at, so engaging it relates to the current expense
 * instead of spawning unrelated parallel work.
 *
 * Deliberately FAINT: an extra-light gray strip (lighter than F0Box's
 * `secondary` token — hence the inline colour) with a hairline border,
 * so it sits above the policy-agent alert without competing with it.
 * The only brand colour is the small One mark on the button. The outer
 * frame is a raw <div> for that custom light gray (F0Box backgrounds
 * are tokens only); the content atoms are F0 components.
 */

// Whisper-light cool gray, lighter than `f1-background-secondary`, with
// a hairline border so the faint fill still reads as a contained strip.
const STRIP_BG = "rgba(5, 38, 87, 0.035)"
const STRIP_BORDER = "1px solid rgba(5, 38, 87, 0.07)"

export function OneNudgeBanner(props: {
  onAddWithOne: () => void
  onDismiss: () => void
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 8px 8px 12px",
        borderRadius: 10,
        background: STRIP_BG,
        border: STRIP_BORDER,
      }}
    >
      <F0Box display="flex" alignItems="center" gap="sm" grow>
        <F0Text
          variant="label"
          content="Got related receipts to upload together?"
        />
        <F0Text variant="description" content="One adds and groups them." />
      </F0Box>
      <F0Button
        variant="outline"
        size="sm"
        icon={OneIcon}
        label="Add with One"
        onClick={props.onAddWithOne}
      />
      <F0Button
        variant="outline"
        size="sm"
        icon={Cross}
        hideLabel
        label="Dismiss"
        tooltip="Dismiss"
        onClick={props.onDismiss}
      />
    </div>
  )
}
