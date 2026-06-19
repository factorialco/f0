import { useState } from "react"
import { F0AvatarPerson, F0Checkbox, F0Dialog } from "@factorialco/f0-react"
import { CheckCircle } from "@factorialco/f0-react/icons/app"

type Employee = {
  id: string
  name: string
  role: string
  department: string
}

type AppAccess = {
  appId: string
  appName: string
  logo: string
  category: string
  monthlyCost: number
  lastActive: string
  checked: boolean
}

const EMPLOYEES: Employee[] = [
  { id: "e1", name: "Ana García",       role: "Account Executive",  department: "Sales" },
  { id: "e2", name: "Marc Puig",        role: "Sales Manager",      department: "Sales" },
  { id: "e3", name: "Laura Fernández",  role: "Marketing Analyst",  department: "Marketing" },
  { id: "e4", name: "David Torres",     role: "Product Manager",    department: "Product" },
  { id: "e5", name: "Carla Vidal",      role: "Designer",           department: "Design" },
  { id: "e6", name: "Pau Martínez",     role: "Engineer",           department: "Engineering" },
  { id: "e7", name: "Júlia Soler",      role: "Customer Success",   department: "Operations" },
  { id: "e8", name: "Oriol Llopis",     role: "Finance Analyst",    department: "Finance" },
]

const ACCESS_POOL: Omit<AppAccess, "checked">[] = [
  { appId: "slack",    appName: "Slack",         logo: "/logos/slack.png",    category: "Productivity", monthlyCost: 10, lastActive: "3h ago" },
  { appId: "notion",   appName: "Notion",         logo: "/logos/notion.png",   category: "Productivity", monthlyCost: 15, lastActive: "2 days ago" },
  { appId: "figma",    appName: "Figma",           logo: "/logos/figma.png",    category: "Design",       monthlyCost: 50, lastActive: "1 week ago" },
  { appId: "github",   appName: "GitHub",          logo: "/logos/github.png",   category: "Engineering",  monthlyCost: 20, lastActive: "5 days ago" },
  { appId: "jira",     appName: "Jira",            logo: "/logos/jira.png",     category: "Engineering",  monthlyCost: 17, lastActive: "4 days ago" },
  { appId: "zoom",     appName: "Zoom",            logo: "/logos/zoom.png",     category: "Productivity", monthlyCost: 20, lastActive: "1 day ago" },
  { appId: "datadog",  appName: "Datadog",         logo: "/logos/datadog.png",  category: "Engineering",  monthlyCost: 80, lastActive: "3 days ago" },
  { appId: "gsuite",   appName: "Google Workspace",logo: "/logos/google-workspace.png", category: "Productivity", monthlyCost: 20, lastActive: "1h ago" },
]

type ExecRow = { appId: string; appName: string; status: "pending" | "revoking" | "done" }

function generateAccess(employee: Employee): AppAccess[] {
  const subset = employee.department === "Design"
    ? ACCESS_POOL.filter((a) => ["slack", "notion", "figma", "zoom", "gsuite"].includes(a.appId))
    : employee.department === "Engineering"
    ? ACCESS_POOL.filter((a) => ["slack", "github", "jira", "datadog", "zoom", "gsuite"].includes(a.appId))
    : ACCESS_POOL.filter((_, i) => i < 6)
  return subset.map((a) => ({ ...a, checked: true }))
}

type Props = {
  isOpen: boolean
  onClose: () => void
}

export function OffboardingModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
  const [search, setSearch] = useState("")
  const [employee, setEmployee] = useState<Employee | null>(null)
  const [access, setAccess] = useState<AppAccess[]>([])
  const [execRows, setExecRows] = useState<ExecRow[]>([])
  const [execDone, setExecDone] = useState(false)

  const filteredEmployees = EMPLOYEES.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.department.toLowerCase().includes(search.toLowerCase())
  )

  const checkedAccess = access.filter((a) => a.checked)
  const totalCost = checkedAccess.reduce((s, a) => s + a.monthlyCost, 0)

  const handleSelectEmployee = (emp: Employee) => {
    setEmployee(emp)
    setAccess(generateAccess(emp))
    setStep(2)
  }

  const toggleAccess = (appId: string) => {
    setAccess((prev) =>
      prev.map((a) => (a.appId === appId ? { ...a, checked: !a.checked } : a))
    )
  }

  const handleConfirm = () => {
    const rows: ExecRow[] = checkedAccess.map((a) => ({
      appId: a.appId,
      appName: a.appName,
      status: "pending",
    }))
    setExecRows(rows)
    setStep(4)

    // Simulate sequential revocation
    rows.forEach((row, i) => {
      setTimeout(() => {
        setExecRows((prev) =>
          prev.map((r) => (r.appId === row.appId ? { ...r, status: "revoking" } : r))
        )
        setTimeout(() => {
          setExecRows((prev) =>
            prev.map((r) => (r.appId === row.appId ? { ...r, status: "done" } : r))
          )
          if (i === rows.length - 1) {
            setTimeout(() => setExecDone(true), 400)
          }
        }, 1000)
      }, i * 1200)
    })
  }

  const handleClose = () => {
    setStep(1)
    setSearch("")
    setEmployee(null)
    setAccess([])
    setExecRows([])
    setExecDone(false)
    onClose()
  }

  const primaryAction = (() => {
    if (step === 2) return { label: "Continue →", onClick: () => setStep(3) }
    if (step === 3) return { label: "Revoke all selected access →", onClick: handleConfirm }
    if (step === 4 && execDone) return { label: "Offboard another employee", onClick: handleClose }
    return undefined
  })()

  const secondaryAction = (() => {
    if (step === 2) return { label: "← Back", onClick: () => setStep(1) }
    if (step === 3) return { label: "← Back", onClick: () => setStep(2) }
    if (step === 4 && execDone) return { label: "View freed licences", onClick: handleClose }
    return { label: "Cancel", onClick: handleClose }
  })()

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={handleClose}
      position="center"
      width="lg"
      title={
        step === 1 ? "Offboard employee" :
        step === 2 ? `Licence overview — ${employee?.name}` :
        step === 3 ? "Confirm revocation" :
        execDone ? "Offboarding complete" : "Revoking access..."
      }
      description={
        step === 1 ? "Select the employee you want to offboard." :
        step === 2 ? "Review and deselect any apps you want to keep active." :
        step === 3 ? `Revoking access to ${checkedAccess.length} apps · Freeing €${totalCost}/mo in licences` :
        undefined
      }
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
    >
      <div className="flex flex-col gap-4">

        {/* Step 1 — Select employee */}
        {step === 1 && (
          <div className="flex flex-col gap-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search employee..."
              className="w-full rounded-lg border border-f1-border bg-f1-background px-3 py-2 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none focus:ring-2 focus:ring-f1-border-selected"
              autoFocus
            />
            <div className="flex flex-col divide-y divide-f1-border rounded-lg border border-f1-border">
              {filteredEmployees.map((emp) => (
                <button
                  key={emp.id}
                  onClick={() => handleSelectEmployee(emp)}
                  className="flex items-center gap-3 px-4 py-3 text-left hover:bg-f1-background-secondary"
                >
                  <F0AvatarPerson
                    size="md"
                    firstName={emp.name.split(" ")[0]}
                    lastName={emp.name.split(" ")[1] ?? ""}
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="text-sm font-medium text-f1-foreground">{emp.name}</span>
                    <span className="text-xs text-f1-foreground-secondary">
                      {emp.role} · {emp.department}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 — App access table */}
        {step === 2 && (
          <div className="overflow-hidden rounded-lg border border-f1-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-f1-border bg-f1-background-secondary">
                  <th className="w-8 px-3 py-2" />
                  <th className="px-3 py-2 text-left font-medium text-f1-foreground-secondary">App</th>
                  <th className="px-3 py-2 text-left font-medium text-f1-foreground-secondary">Category</th>
                  <th className="px-3 py-2 text-left font-medium text-f1-foreground-secondary">Cost/seat</th>
                  <th className="px-3 py-2 text-left font-medium text-f1-foreground-secondary">Last active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-f1-border">
                {access.map((a) => (
                  <tr
                    key={a.appId}
                    className="cursor-pointer bg-f1-background hover:bg-f1-background-secondary"
                    onClick={() => toggleAccess(a.appId)}
                  >
                    <td className="px-3 py-2">
                      <F0Checkbox checked={a.checked} onCheckedChange={() => toggleAccess(a.appId)} />
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <img src={a.logo} alt={a.appName} className="h-5 w-5 rounded" />
                        <span className="font-medium text-f1-foreground">{a.appName}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-f1-foreground-secondary">{a.category}</td>
                    <td className="px-3 py-2 text-f1-foreground-secondary">€{a.monthlyCost}</td>
                    <td className="px-3 py-2 text-f1-foreground-secondary">{a.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Step 3 — Impact summary */}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-f1-border bg-f1-background-secondary px-4 py-3">
              <p className="text-sm text-f1-foreground">
                Revoking access to{" "}
                <span className="font-semibold">{checkedAccess.length} apps</span>{" "}
                · Freeing{" "}
                <span className="font-semibold text-f1-foreground-positive">€{totalCost}/mo</span>{" "}
                in licences
              </p>
              <p className="mt-1 text-xs text-f1-foreground-secondary">
                Licences will be unassigned and available for reuse.
              </p>
            </div>
            <div className="flex flex-col divide-y divide-f1-border rounded-lg border border-f1-border">
              {checkedAccess.map((a) => (
                <div key={a.appId} className="flex items-center gap-3 px-4 py-2.5">
                  <img src={a.logo} alt={a.appName} className="h-5 w-5 rounded" />
                  <span className="flex-1 text-sm text-f1-foreground">{a.appName}</span>
                  <span className="text-xs text-f1-foreground-secondary">€{a.monthlyCost}/mo</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4 — Execution / success */}
        {step === 4 && (
          <div className="flex flex-col gap-3">
            {!execDone ? (
              <div className="flex flex-col divide-y divide-f1-border rounded-lg border border-f1-border">
                {execRows.map((row) => (
                  <div key={row.appId} className="flex items-center gap-3 px-4 py-2.5">
                    <span className="w-4 text-sm">
                      {row.status === "done" ? "✓" : row.status === "revoking" ? "⟳" : "○"}
                    </span>
                    <span
                      className={`flex-1 text-sm ${
                        row.status === "done"
                          ? "text-f1-foreground-positive"
                          : row.status === "revoking"
                          ? "text-f1-foreground"
                          : "text-f1-foreground-secondary"
                      }`}
                    >
                      {row.appName}
                    </span>
                    <span className="text-xs text-f1-foreground-secondary capitalize">
                      {row.status === "revoking" ? "revoking..." : row.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <CheckCircle className="h-10 w-10 text-f1-foreground-positive" />
                <div className="flex flex-col gap-1">
                  <span className="text-base font-semibold text-f1-foreground">
                    Offboarding complete
                  </span>
                  <span className="text-sm text-f1-foreground-secondary">
                    {checkedAccess.length} licences freed · €{totalCost}/mo available to reassign
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </F0Dialog>
  )
}
