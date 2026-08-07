import { useState } from "react"

import { F0Alert, F0Box, F0Button, F0Dialog, F0Heading, F0Text } from "@factorialco/f0-react"

import type { PrototypeMeta } from "../types"

/**
 * Delete training group modal — proposal for the automatic-enrollment case.
 *
 * Two states of the same F0Dialog:
 *   - plain group: the consequence becomes the body (no muted grey box).
 *   - group targeted by an automatic-enrollment rule: adds an F0Alert
 *     (warning) explaining what happens to the rule + an Edit enrollment link.
 */
export const meta: PrototypeMeta = {
  slug: "delete-group-modal",
  title: "Delete group modal",
  description:
    "Delete training group confirmation in two states: a plain group, and a group targeted by an automatic-enrollment rule.",
  category: "Talent",
  module: "my-training",
  audience: ["admin"],
  tags: ["trainings", "automatic enrollment", "delete", "modal"],
  createdAt: "2026-07-07",
}

type OpenCase = "plain" | "rule" | null

export default function DeleteGroupModal() {
  const [open, setOpen] = useState<OpenCase>(null)
  const close = () => setOpen(null)
  const groupName = "Barcelona 2026"

  return (
    <F0Box display="flex" flexDirection="column" gap="lg" padding="xl">
      <F0Heading content="Delete training group — modal states" />
      <F0Text
        variant="description"
        content="Same F0Dialog in two states. Open each to compare."
      />
      <F0Box display="flex" flexDirection="row" gap="md">
        <F0Button
          label="Group without a rule"
          variant="outline"
          onClick={() => setOpen("plain")}
        />
        <F0Button
          label="Group with an automatic-enrollment rule"
          variant="outline"
          onClick={() => setOpen("rule")}
        />
      </F0Box>

      <F0Dialog
        isOpen={open !== null}
        title={`Delete "${groupName}"?`}
        onClose={close}
        primaryAction={{
          label: "Delete",
          onClick: close,
          variant: "negative",
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: close,
        }}
      >
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Text content="This can't be undone. Participants lose access to ongoing or completed sessions in this group." />
          {open === "rule" && (
            <F0Alert
              variant="warning"
              title="Automatic enrollment"
              description="This group receives people from automatic enrollment. If you delete it, new matches stay pending group assignment until you route them to another group. People already enrolled stay enrolled."
              link={{ label: "Edit enrollment", href: "#" }}
            />
          )}
        </F0Box>
      </F0Dialog>
    </F0Box>
  )
}
