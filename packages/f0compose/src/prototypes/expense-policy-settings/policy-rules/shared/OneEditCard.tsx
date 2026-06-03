import { F0Button } from "@factorialco/f0-react"

import { useAiChat } from "@/copilot"

/**
 * Wraps a policy-rule card with an "Edit" button pinned to its top-right
 * corner — the same affordance the approval-workflow rule cards have.
 *
 * Quick, low-stakes values inside these cards are edited inline on the
 * page (the dotted-underline `InlineValue` / `InlineProse` controls).
 * This button is the OTHER tier: for changes that benefit from a
 * conversation ("rework the whole alcohol rule", "add a per-diem tier"),
 * clicking Edit hands off to One in the chat, scoped to this card.
 *
 * `sendMessage` (not appendMessages) so it RELIABLY wakes One — see the
 * approval-flow view note. The `label` becomes the thing One is told to
 * edit, so keep it specific (e.g. "Alcohol rule in Meals & hospitality").
 *
 * `fill` makes the wrapper take the full height of its parent — used in
 * the side-by-side card grids (MealCapsGrid / PerDiemsGrid) so the inner
 * `F0Card` (with `fullHeight`) stretches to match its taller sibling even
 * when it has fewer rows.
 */
export function OneEditCard(props: {
  label: string
  children: React.ReactNode
  fill?: boolean
}): React.ReactElement {
  const { sendMessage } = useAiChat()
  return (
    <div style={{ position: "relative", height: props.fill ? "100%" : undefined }}>
      <div style={{ position: "absolute", top: 12, right: 12, zIndex: 1 }}>
        <F0Button
          variant="ghost"
          size="sm"
          label="Edit"
          onClick={() => sendMessage(`I want to change the ${props.label}.`)}
        />
      </div>
      {props.children}
    </div>
  )
}
