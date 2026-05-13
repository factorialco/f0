import { useEffect, useState } from "react"
import { F0Dialog, F0Alert, F0Select, F0Text } from "@factorialco/f0-react"
import { Input, NumberInput, Textarea } from "@factorialco/f0-react/dist/experimental"

export type BudgetAction =
  | { kind: "edit"; name: string }
  | { kind: "archive"; name: string }
  | { kind: "delete"; name: string }
  | { kind: "allocate"; name: string }
  | { kind: "approve-expense"; trainingName: string; amount: number }
  | { kind: "reject-expense"; trainingName: string; amount: number }
  | null

const TITLES: Record<string, string> = {
  edit: "Edit budget",
  archive: "Archive budget",
  delete: "Delete budget",
  allocate: "Allocate to training",
  "approve-expense": "Approve expense",
  "reject-expense": "Reject expense",
}

const CONFIRM_LABELS: Record<string, string> = {
  edit: "Save",
  archive: "Archive",
  delete: "Delete",
  allocate: "Allocate",
  "approve-expense": "Approve",
  "reject-expense": "Reject",
}

const fmtEur = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n)

const OWNER_OPTIONS = [
  { value: "hellen", label: "Hellen Smith" },
  { value: "maria", label: "Maria Garcia" },
  { value: "john", label: "John Doe" },
]

type Props = {
  action: BudgetAction
  onClose: () => void
}

export function BudgetModals({ action, onClose }: Props) {
  const [name, setName] = useState("")
  const [total, setTotal] = useState<number | null>(null)
  const [owner, setOwner] = useState<string>("hellen")
  const [allocAmount, setAllocAmount] = useState<number | null>(0)
  const [trainingName, setTrainingName] = useState("")
  const [reason, setReason] = useState("")

  useEffect(() => {
    if (!action) return
    setName(action.kind === "edit" ? action.name : "")
    setTotal(null)
    setOwner("hellen")
    setAllocAmount(0)
    setTrainingName("")
    setReason("")
  }, [action])

  if (!action) return null

  const isCritical = action.kind === "delete" || action.kind === "reject-expense"
  const title = TITLES[action.kind]
  const confirmLabel = CONFIRM_LABELS[action.kind]

  return (
    <F0Dialog
      isOpen={action !== null}
      onClose={onClose}
      position="center"
      width="md"
      title={title}
      primaryAction={{
        label: confirmLabel,
        onClick: onClose,
        variant: isCritical ? "critical" : "default",
      }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <div className="flex flex-col gap-4">
        {action.kind === "edit" && (
          <>
            <Input
              label="Budget name"
              value={name}
              onChange={(v) => setName(v ?? "")}
            />
            <NumberInput
              label="Total amount (€)"
              value={total}
              onChange={(v) => setTotal(v)}
              placeholder="e.g. 25000"
              locale="en-US"
            />
            <F0Select<string>
              label="Owner"
              value={owner}
              onChange={(v: string) => setOwner(v)}
              options={OWNER_OPTIONS}
            />
          </>
        )}

        {action.kind === "archive" && (
          <F0Text
            variant="body"
            content={`Archive ${action.name}? It will be hidden from the list but historical spend remains accessible from Insights.`}
          />
        )}

        {action.kind === "delete" && (
          <F0Alert
            variant="critical"
            title={`Delete ${action.name}?`}
            description="This is permanent. Allocations linked to this budget will be unlinked. Use Archive if you want to preserve the history."
          />
        )}

        {action.kind === "allocate" && (
          <>
            <F0Text
              variant="body"
              content={`Allocate budget from ${action.name} to a specific training.`}
            />
            <Input
              label="Training"
              value={trainingName}
              onChange={(v) => setTrainingName(v ?? "")}
              placeholder="Search training…"
            />
            <NumberInput
              label="Amount (€)"
              value={allocAmount}
              onChange={(v) => setAllocAmount(v)}
              locale="en-US"
            />
          </>
        )}

        {action.kind === "approve-expense" && (
          <>
            <F0Text
              variant="body"
              content={`Approve ${fmtEur(action.amount)} for ${action.trainingName}?`}
            />
            <Textarea
              label="Note (optional)"
              value={reason}
              onChange={(v) => setReason(v ?? "")}
              rows={3}
            />
          </>
        )}

        {action.kind === "reject-expense" && (
          <>
            <F0Text
              variant="body"
              content={`Reject ${fmtEur(action.amount)} for ${action.trainingName}?`}
            />
            <Textarea
              label="Reason (required)"
              value={reason}
              onChange={(v) => setReason(v ?? "")}
              rows={3}
            />
          </>
        )}
      </div>
    </F0Dialog>
  )
}
