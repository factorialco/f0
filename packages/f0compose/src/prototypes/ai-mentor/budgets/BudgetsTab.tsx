import { F0Alert, F0Button, F0Card, F0Heading, F0Text } from "@factorialco/f0-react"

import { trainingBudgets } from "../fixtures"

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value)
}

export function BudgetsTab() {
  const totalPending = trainingBudgets.reduce((sum, b) => sum + b.pendingApproval, 0)
  const totalCommitted = trainingBudgets.reduce((sum, b) => sum + b.committedByAiMentor, 0)

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <F0Heading content="Budgets" variant="heading-large" as="h1" />
        <F0Text
          content="Training budget impact. AI Mentor costs only appear when an adapted or new course would consume budget."
          variant="body"
        />
      </header>

      {totalPending > 0 && (
        <F0Alert
          variant="warning"
          title={`${formatCurrency(totalPending)} pending if AI Mentor drafts are approved`}
          description="Pending approval is not counted as used budget yet. Approving the draft courses will move the amount to committed/used depending on the training policy."
        />
      )}

      <section className="grid grid-cols-2 gap-4">
        <F0Card title="AI Mentor already committed" description="Costs from assigned adapted courses">
          <div className="p-4">
            <span className="text-3xl font-semibold text-f1-foreground">
              {formatCurrency(totalCommitted)}
            </span>
          </div>
        </F0Card>
        <F0Card title="Pending review forecast" description="Not spent until L&D approves the draft">
          <div className="p-4">
            <span className="text-3xl font-semibold text-f1-foreground">
              {formatCurrency(totalPending)}
            </span>
          </div>
        </F0Card>
      </section>

      <F0Card title="Training budgets" description="Current budgets with AI Mentor forecast included explicitly">
        <div className="flex flex-col divide-y divide-f1-border">
          {trainingBudgets.map((budget) => {
            const remaining = budget.allocated - budget.used - budget.committedByAiMentor
            const projectedRemaining = remaining - budget.pendingApproval
            const usedPct = Math.round((budget.used / budget.allocated) * 100)
            const projectedPct = Math.round(
              ((budget.used + budget.committedByAiMentor + budget.pendingApproval) /
                budget.allocated) *
                100
            )

            return (
              <div key={budget.id} className="flex flex-col gap-3 px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-0.5">
                    <F0Text content={budget.name} variant="label" />
                    <F0Text content={`Owner: ${budget.owner}`} variant="small" />
                  </div>
                  <F0Button label="Open budget" variant="outline" onClick={() => {}} />
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {[
                    { label: "Allocated", value: budget.allocated },
                    { label: "Used", value: budget.used },
                    { label: "AI committed", value: budget.committedByAiMentor },
                    { label: "Pending AI review", value: budget.pendingApproval },
                    { label: "Projected remaining", value: projectedRemaining },
                  ].map((item) => (
                    <div key={item.label} className="rounded border border-f1-border bg-f1-background-secondary p-3">
                      <F0Text content={item.label} variant="small" />
                      <F0Text content={formatCurrency(item.value)} variant="label" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="h-2 overflow-hidden rounded-full bg-f1-background-secondary">
                    <div
                      className="h-full rounded-full bg-f1-background-info"
                      style={{ width: `${Math.min(projectedPct, 100)}%` }}
                    />
                  </div>
                  <F0Text
                    content={`Currently used: ${usedPct}% · Projected after pending AI drafts: ${projectedPct}%`}
                    variant="description"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </F0Card>
    </div>
  )
}
