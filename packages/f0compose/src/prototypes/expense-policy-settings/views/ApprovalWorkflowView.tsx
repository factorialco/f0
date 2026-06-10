import { F0Box, F0Button, F0Text } from "@factorialco/f0-react"
import { Ai } from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"

import { useCopilotChat } from "@copilotkit/react-core"

import { useAiChat } from "@/copilot"

import type { PolicyData } from "../data/usePolicyData"
import { ApprovalCards } from "./ApprovalCards"
import { ApprovalDiagramNested } from "./ApprovalDiagramNested"

/**
 * Approval flows — the generated approval **workflow document** rendered two
 * ways, switchable via a toggle:
 *
 *   - **Tree** (default): the nested, non-linear diagram (`ApprovalDiagramNested`)
 *     — condition-branched, shared leading approvers hoisted, conditions and
 *     reviews interleaved at arbitrary depth. Best for SEEING the structure.
 *   - **Cards** (`ApprovalCards`): a linear, stacked, Rippling-style rule list —
 *     one expandable IF→THEN card per first-match-wins leaf. Best for scanning
 *     "who signs off on an expense like this".
 *
 * Both render the SAME document (Cards reuses the Tree's `flattenDoc`), so
 * cocreation + generation are identical regardless of which view is active.
 * Editing is prompt-based via One — a global "Edit with One" plus a per-rule
 * "Edit this rule" on each card (both open a scoped chat; One regenerates).
 */
export function ApprovalWorkflowView(props: { policyData: PolicyData }) {
  const { approvalWorkflow } = props.policyData
  const { sendMessage, setOpen } = useAiChat()
  const { isLoading } = useCopilotChat()

  // The "One is updating your flow…" overlay should ONLY show while One is
  // actually generating a new flow — not while it's answering an edit
  // invitation (global or per-rule), which changes nothing on the canvas.
  // Clicking an Edit affordance sets this flag; we suppress the overlay until
  // that exchange ends, then any subsequent real prompt shows it again.
  const editInviteRef = useRef(false)
  const [busy, setBusy] = useState(false)
  const [mode, setMode] = useState<"tree" | "cards">("tree")
  useEffect(() => {
    if (isLoading) {
      if (!editInviteRef.current) setBusy(true)
    } else {
      editInviteRef.current = false
      setBusy(false)
    }
  }, [isLoading])

  const editWithOne = () => {
    editInviteRef.current = true
    setOpen(true)
    sendMessage("I want to edit the approval flow")
  }

  // Per-rule edit (Cards view) — opens One scoped to that one rule. Still goes
  // through generation, so it stays as reliable as the global edit.
  const editRule = (ruleTitle: string) => {
    editInviteRef.current = true
    setOpen(true)
    sendMessage(
      `I want to change the approval rule for "${ruleTitle}". What should it be?`
    )
  }

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <F0Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="between"
        gap="md"
      >
        <F0Text
          variant="description"
          content="Your expense approval flow, read top to bottom — the first branch that matches decides what happens. To change anything, just describe it to One."
        />
        <F0Box display="flex" flexDirection="row" gap="sm" alignItems="center">
          <F0Button
            variant={mode === "tree" ? "default" : "outline"}
            size="md"
            label="Tree"
            onClick={() => setMode("tree")}
          />
          <F0Button
            variant={mode === "cards" ? "default" : "outline"}
            size="md"
            label="Cards"
            onClick={() => setMode("cards")}
          />
          <F0Button
            variant="default"
            size="md"
            icon={Ai}
            label="Edit with One"
            onClick={editWithOne}
          />
        </F0Box>
      </F0Box>

      {mode === "tree" ? (
        <ApprovalDiagramNested doc={approvalWorkflow} busy={busy} />
      ) : (
        <ApprovalCards
          doc={approvalWorkflow}
          busy={busy}
          onEditRule={editRule}
        />
      )}
    </F0Box>
  )
}
