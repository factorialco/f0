import { F0Box, F0Card, F0Icon, F0Text } from "@factorialco/f0-react"
import { Chip } from "@factorialco/f0-react"
import { Input } from "@factorialco/f0-react/dist/experimental"
import { Add, CrossedCircle } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { F0Button } from "@factorialco/f0-react"

/**
 * "Not reimbursable" card.
 *
 * Open list of items the company will not reimburse for meals
 * and hospitality. Chips are the F0 `Chip` primitive (with
 * `onClose` removing the item); adding a new item swaps the
 * "+ Add" trigger for an inline F0 `Input` \u2014 same inline-
 * replacement pattern as `InlineValue` so the entire policy-
 * rules surface uses ONE editor language.
 *
 * Visual rhythm: same `F0Card title=` chrome as the other cards.
 * The list lives directly in the card body with a small intro
 * line above (matching the other cards' subtitle line).
 */

export function NotReimbursableCard(props: {
  values: string[]
  onAdd: (label: string) => void
  onRemove: (label: string) => void
}) {
  const [adding, setAdding] = useState(false)
  const [draft, setDraft] = useState("")

  const commit = () => {
    const trimmed = draft.trim()
    if (trimmed !== "") props.onAdd(trimmed)
    setDraft("")
    setAdding(false)
  }

  return (
    <F0Card title="Not reimbursable">
      <F0Box display="flex" flexDirection="column" gap="md">
        <F0Box display="flex" alignItems="center" gap="sm">
          <F0Icon icon={CrossedCircle} color="default" size="md" />
          <F0Text
            content="Items that will never be approved on meal or hospitality expenses."
            variant="body"
          />
        </F0Box>

        {/* Chip flow. Wraps freely; the add affordance trails
            the last chip. */}
        <F0Box display="flex" flexDirection="row" flexWrap="wrap" gap="sm">
          {props.values.map((label) => (
            <Chip
              key={label}
              label={label}
              onClose={() => props.onRemove(label)}
            />
          ))}

          {adding ? (
            // Inline input. We DO NOT wrap in F0Box with style;
            // the input is sized by its own `size="sm"` and the
            // surrounding flex flow gives it a sensible width.
            // The form submit + blur both commit, matching the
            // commit semantics in `InlineValue`.
            <form
              onSubmit={(e) => {
                e.preventDefault()
                commit()
              }}
              style={{ display: "inline-flex", minWidth: "14rem" }}
            >
              <Input
                label="Add item, press Enter"
                hideLabel
                autoFocus
                size="sm"
                value={draft}
                onChange={(v) => setDraft(v)}
                onBlur={() => commit()}
                onPressEnter={() => commit()}
              />
            </form>
          ) : (
            <F0Button
              variant="ghost"
              size="sm"
              icon={Add}
              label="Add"
              onClick={() => setAdding(true)}
            />
          )}
        </F0Box>
      </F0Box>
    </F0Card>
  )
}
