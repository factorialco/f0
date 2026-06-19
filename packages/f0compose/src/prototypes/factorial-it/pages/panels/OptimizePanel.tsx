import { useState } from "react"
import { F0Checkbox, F0Dialog, F0Text } from "@factorialco/f0-react"
import { F0AvatarPerson } from "@factorialco/f0-react"

type SaasApp = {
  id: string
  name: string
  seats: number
  active: number
  monthlyEur: number
}

type InactiveUser = {
  id: string
  name: string
  role: string
  lastSeenDays: number
  checked: boolean
}

function generateInactiveUsers(app: SaasApp): InactiveUser[] {
  const unused = app.seats - app.active
  const pool: InactiveUser[] = [
    { id: "u1", name: "Ana García",       role: "Account Executive",   lastSeenDays: 45, checked: true },
    { id: "u2", name: "Marc Puig",        role: "Sales Manager",       lastSeenDays: 62, checked: true },
    { id: "u3", name: "Laura Fernández",  role: "Marketing Analyst",   lastSeenDays: 28, checked: true },
    { id: "u4", name: "David Torres",     role: "Product Manager",     lastSeenDays: 91, checked: true },
    { id: "u5", name: "Carla Vidal",      role: "Designer",            lastSeenDays: 34, checked: true },
    { id: "u6", name: "Pau Martínez",     role: "Engineer",            lastSeenDays: 77, checked: true },
    { id: "u7", name: "Júlia Soler",      role: "Customer Success",    lastSeenDays: 19, checked: true },
    { id: "u8", name: "Oriol Llopis",     role: "Finance Analyst",     lastSeenDays: 108, checked: true },
    { id: "u9", name: "Marta Roca",       role: "Operations Lead",     lastSeenDays: 55, checked: true },
    { id: "u10", name: "Xavier Mas",      role: "Data Analyst",        lastSeenDays: 82, checked: true },
    { id: "u11", name: "Cristina Pons",   role: "HR Manager",          lastSeenDays: 41, checked: true },
    { id: "u12", name: "Joan Ferrer",     role: "Support Engineer",    lastSeenDays: 67, checked: true },
  ]
  return pool.slice(0, Math.min(unused, pool.length))
}

type Props = {
  app: SaasApp | null
  onClose: () => void
  onConfirm: (app: SaasApp, revokedCount: number) => void
}

type Status = "idle" | "revoking" | "done"

export function OptimizePanel({ app, onClose, onConfirm }: Props) {
  const [users, setUsers] = useState<InactiveUser[]>([])
  const [status, setStatus] = useState<Status>("idle")

  const isOpen = app !== null

  const initUsers = () => {
    if (app) setUsers(generateInactiveUsers(app))
    setStatus("idle")
  }

  const selectedCount = users.filter((u) => u.checked).length
  const perSeat      = app ? Math.round(app.monthlyEur / app.seats) : 0
  const monthlySave  = selectedCount * perSeat
  const yearlySave   = monthlySave * 12

  const toggleUser = (id: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, checked: !u.checked } : u))
    )
  }

  const handleRevoke = () => {
    setStatus("revoking")
    setTimeout(() => {
      setStatus("done")
      setTimeout(() => {
        onConfirm(app!, selectedCount)
        onClose()
        setStatus("idle")
      }, 1200)
    }, 1800)
  }

  if (!app) return null

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      position="right"
      width="md"
      title={`Optimize ${app.name} · Save up to €${monthlySave.toLocaleString()}/mo`}
      primaryAction={
        status === "idle"
          ? { label: `Revoke ${selectedCount} licence${selectedCount !== 1 ? "s" : ""} →`, onClick: handleRevoke, disabled: selectedCount === 0 }
          : status === "revoking"
          ? { label: "Revoking licences...", onClick: () => {}, loading: true }
          : { label: "Done ✓", onClick: onClose }
      }
      secondaryAction={{ label: "Cancel", onClick: onClose }}
      key={app.id}
    >
      <div className="flex flex-col gap-6" onAnimationStart={initUsers}>
        {status === "revoking" && (
          <div className="rounded-lg bg-f1-background-secondary px-4 py-3 text-sm text-f1-foreground-secondary">
            Revoking licences via {app.name} API...
          </div>
        )}

        {status === "idle" && (
          <>
            {/* Section 1 — Inactive users */}
            <div className="flex flex-col gap-3">
              <F0Text content="Inactive users" variant="label" />
              <div className="flex flex-col divide-y divide-f1-border">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="flex cursor-pointer items-center gap-3 py-3"
                    onClick={() => toggleUser(user.id)}
                  >
                    <F0Checkbox
                      checked={user.checked}
                      onCheckedChange={() => toggleUser(user.id)}
                    />
                    <F0AvatarPerson
                      size="md"
                      firstName={user.name.split(" ")[0]}
                      lastName={user.name.split(" ")[1] ?? ""}
                    />
                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="truncate text-sm font-medium text-f1-foreground">
                        {user.name}
                      </span>
                      <span className="truncate text-xs text-f1-foreground-secondary">
                        {user.role}
                      </span>
                    </div>
                    <span className="shrink-0 text-xs text-f1-foreground-secondary">
                      Last seen {user.lastSeenDays}d ago
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2 — Impact summary */}
            <div className="rounded-lg border border-f1-border bg-f1-background-secondary px-4 py-3">
              <p className="text-sm text-f1-foreground">
                Revoking{" "}
                <span className="font-semibold">{selectedCount} licence{selectedCount !== 1 ? "s" : ""}</span>{" "}
                will save{" "}
                <span className="font-semibold text-f1-foreground-positive">
                  €{monthlySave.toLocaleString()}/mo
                </span>{" "}
                ·{" "}
                <span className="font-semibold text-f1-foreground-positive">
                  €{yearlySave.toLocaleString()}/yr
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </F0Dialog>
  )
}
