import { useState } from "react"
import { F0Dialog, F0Text } from "@factorialco/f0-react"
import { Paperclip } from "@factorialco/f0-react/icons/app"

type SaasApp = {
  id: string
  name: string
  active: number
  seats: number
  monthlyEur: number
  renewalDate: Date | null
}

type RenewalDecision = "same" | "reduce" | "cancel" | "remind"

type Props = {
  app: SaasApp | null
  daysUntil: number | null
  onClose: () => void
}

function usageTrend(app: SaasApp): { month: string; users: number }[] {
  return [
    { month: "Feb", users: Math.round(app.active * (1 + 0.18 + 0.04)) },
    { month: "Mar", users: Math.round(app.active * (1 + 0.18 * 0.5)) },
    { month: "Apr", users: app.active },
  ]
}

function aiRecommendation(app: SaasApp): { color: string; label: string } {
  const pct = app.seats > 0 ? Math.round((app.active / app.seats) * 100) : 0
  const unused = app.seats - app.active
  if (pct < 50) return { color: "🔴", label: "Consider cancelling — usage below 50%" }
  if (unused > 3) return { color: "🟡", label: `Renew with fewer seats — ${unused} inactive users` }
  return { color: "🟢", label: "Renew as-is — usage is healthy" }
}

function generateEmail(app: SaasApp, daysUntil: number | null): string {
  const unused = app.seats - app.active
  return `Subject: ${app.name} renewal — seats reduction request

Dear ${app.name} Account Manager,

We are approaching our renewal date for ${app.name} (in ${daysUntil ?? "—"} days) and would like to discuss adjusting our current contract.

Our current subscription: ${app.seats} seats at €${app.monthlyEur.toLocaleString()}/mo
Current active users: ${app.active} (${unused} licences unused)

We would like to reduce our seat count to ${app.active} licences, which would bring our monthly cost down proportionally.

We value our partnership and look forward to discussing this before the renewal deadline.

Kind regards,
IT Operations Team`
}

export function RenewalPanel({ app, daysUntil, onClose }: Props) {
  const [decision, setDecision] = useState<RenewalDecision>("same")
  const [reduceSeats, setReduceSeats] = useState("")
  const [emailOpen, setEmailOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)

  if (!app) return null

  const trend = usageTrend(app)
  const maxUsers = Math.max(...trend.map((t) => t.users))
  const rec = aiRecommendation(app)
  const email = generateEmail(app, daysUntil)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => {
      setSaved(false)
      onClose()
    }, 1200)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(email).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <F0Dialog
      isOpen={app !== null}
      onClose={onClose}
      position="right"
      width="md"
      title={`Renew ${app.name} · Expires in ${daysUntil ?? "—"} days`}
      primaryAction={
        saved
          ? { label: "Decision saved ✓", onClick: onClose }
          : { label: "Save decision", onClick: handleSave }
      }
      secondaryAction={{ label: "Set reminder", onClick: onClose }}
      key={app.id}
    >
      <div className="flex flex-col gap-6">
        {/* Section 1 — Usage trend */}
        <div className="flex flex-col gap-3">
          <F0Text content="Usage trend · last 3 months" variant="label" />
          <div className="flex items-end gap-2 rounded-lg border border-f1-border p-4">
            {trend.map((t) => {
              const heightPct = maxUsers > 0 ? Math.round((t.users / maxUsers) * 100) : 0
              const isLast = t.month === trend[trend.length - 1].month
              return (
                <div key={t.month} className="flex flex-1 flex-col items-center gap-1">
                  <span className="text-xs text-f1-foreground-secondary">{t.users}</span>
                  <div
                    className={`w-full rounded-sm transition-all ${isLast ? "bg-f1-foreground" : "bg-f1-border"}`}
                    style={{ height: `${Math.max(heightPct * 0.8, 8)}px` }}
                  />
                  <span className="text-xs text-f1-foreground-secondary">{t.month}</span>
                </div>
              )
            })}
          </div>
          <p className="text-xs text-f1-foreground-secondary">
            Usage has{" "}
            {trend[0].users > trend[trend.length - 1].users
              ? `dropped ${Math.round(((trend[0].users - trend[trend.length - 1].users) / trend[0].users) * 100)}% in the last 3 months`
              : "remained stable in the last 3 months"}
          </p>
        </div>

        {/* Section 2 — AI Recommendation */}
        <div className="flex flex-col gap-2">
          <F0Text content="AI recommendation" variant="label" />
          <div className="flex items-center gap-2 rounded-lg border border-f1-border bg-f1-background-secondary px-3 py-2 text-sm text-f1-foreground">
            <span>{rec.color}</span>
            <span>{rec.label}</span>
          </div>
        </div>

        {/* Section 3 — Action selector */}
        <div className="flex flex-col gap-2">
          <F0Text content="Your decision" variant="label" />
          <div className="flex flex-col gap-2">
            {(
              [
                { value: "same" as const, label: "Renew same terms" },
                { value: "reduce" as const, label: "Reduce seats" },
                { value: "cancel" as const, label: "Cancel at renewal" },
                { value: "remind" as const, label: "Remind me in 30 days" },
              ] as const
            ).map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 hover:bg-f1-background-secondary"
              >
                <input
                  type="radio"
                  name="renewal-decision"
                  value={opt.value}
                  checked={decision === opt.value}
                  onChange={() => setDecision(opt.value)}
                  className="accent-f1-foreground"
                />
                <span className="text-sm text-f1-foreground">{opt.label}</span>
                {opt.value === "reduce" && decision === "reduce" && (
                  <input
                    type="number"
                    value={reduceSeats}
                    onChange={(e) => setReduceSeats(e.target.value)}
                    placeholder="How many seats?"
                    className="ml-2 w-32 rounded-md border border-f1-border bg-f1-background px-2 py-0.5 text-sm text-f1-foreground focus:outline-none focus:ring-1 focus:ring-f1-border-selected"
                  />
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Section 4 — Draft vendor email */}
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center gap-1 text-sm font-medium text-f1-foreground-secondary hover:text-f1-foreground"
            onClick={() => setEmailOpen((v) => !v)}
          >
            <span>{emailOpen ? "▾" : "▸"}</span>
            Generate negotiation email →
          </button>
          {emailOpen && (
            <div className="flex flex-col gap-2">
              <pre className="rounded-lg border border-f1-border bg-f1-background-secondary p-3 text-xs text-f1-foreground-secondary whitespace-pre-wrap font-sans leading-relaxed">
                {email}
              </pre>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 rounded-md border border-f1-border bg-f1-background px-3 py-1.5 text-sm text-f1-foreground hover:bg-f1-background-secondary"
                >
                  <Paperclip className="h-3.5 w-3.5" />
                  {copied ? "Copied!" : "Copy email"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </F0Dialog>
  )
}
