import {
  F0BigNumber,
  F0Box,
  F0Card,
  F0Checkbox,
  F0Dialog,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import { Page, PageHeader, Tabs } from "@factorialco/f0-react/dist/experimental"
import { Download } from "@factorialco/f0-react/icons/app"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { insightsAggregates, trainingCategories } from "@/fixtures"
import { trainingsTopNav } from "../../topNav"
import type { PrototypeMeta } from "../../../types"

export const meta: PrototypeMeta = {
  slug: "trainings-insights",
  title: "Trainings — Insights",
  description:
    "Admin Insights dashboard for the Trainings module: KPIs, monthly trend, cost by category, participants by department and completion breakdown — matches the production /trainings/insights view.",
  category: "Talent",
  module: "trainings",
  audience: ["admin"],
  tags: ["trainings", "analytics", "insights", "charts"],
  createdAt: "2026-05-12",
}

const YEAR_OPTIONS = [
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
  { value: "2026", label: "2026" },
]

const FORMAT_OPTIONS = [
  { value: "xlsx", label: "Excel (.xlsx)" },
  { value: "csv", label: "CSV" },
  { value: "pdf", label: "PDF" },
]

const RANGE_OPTIONS = [
  { value: "year", label: "Current year" },
  { value: "custom", label: "Custom range" },
  { value: "all", label: "All time" },
]

function Bar({
  label,
  value,
  max,
  format,
}: {
  label: string
  value: number
  max: number
  format?: (n: number) => string
}) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100)
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline justify-between">
        <F0Text content={label} variant="small" />
        <F0Text content={(format ?? String)(value)} variant="small" />
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary">
        <div
          className="h-full rounded-full bg-f1-background-info"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function TrainingsInsights() {
  const navigate = useNavigate()
  const a = insightsAggregates
  const [year, setYear] = useState("2026")
  const [categoryId, setCategoryId] = useState<string>("all")
  const [exportOpen, setExportOpen] = useState(false)
  const [exportFormat, setExportFormat] = useState("xlsx")
  const [exportRange, setExportRange] = useState("year")
  const [includeCharts, setIncludeCharts] = useState(true)
  const [includeDepartments, setIncludeDepartments] = useState(true)
  const maxMonthly = Math.max(...a.monthlyParticipants.map((m) => m.value))
  const maxCostCat = Math.max(...a.costByCategory.map((c) => c.value))
  const maxDept = Math.max(...a.participantsByDepartment.map((d) => d.value))
  const maxHours = Math.max(...a.hoursByMonth.map((m) => m.value))

  const fmtEur = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n)

  const categoryOptions = [
    { value: "all", label: "All categories" },
    ...trainingCategories.map((c) => ({ value: c.id, label: c.name })),
  ]

  return (
    <>
      <Page
        header={
          <>
            <PageHeader
              module={{
                id: "company_trainings",
                name: "Trainings",
                href: "/p/trainings",
              }}
              breadcrumbs={[
                { id: "list", label: "Trainings", href: "/p/trainings" },
                { id: "insights", label: "Insights" },
              ]}
              actions={[
                {
                  label: "Export report",
                  icon: Download,
                  onClick: () => setExportOpen(true),
                },
              ]}
            />
            <Tabs
              tabs={trainingsTopNav.map((t) => ({
                id: t.id,
                label: t.label,
                onClick: () => navigate(t.href),
              }))}
              activeTabId="insights"
            />
          </>
        }
      >
        <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
          <div className="flex flex-col gap-1">
            <F0Heading content="Insights" variant="heading-large" as="h1" />
            <F0Text
              content="Overview of training activity, completion and spend for the current period."
              variant="body"
            />
          </div>

          <div className="flex flex-wrap items-end gap-4">
            <div className="min-w-[160px]">
              <F0Select
                label="Year"
                value={year}
                onChange={(v: string) => setYear(v)}
                options={YEAR_OPTIONS}
              />
            </div>
            <div className="min-w-[220px]">
              <F0Select
                label="Category"
                value={categoryId}
                onChange={(v: string) => setCategoryId(v)}
                options={categoryOptions}
              />
            </div>
            <F0Text
              content={`Showing data for ${year}${categoryId !== "all" ? ` · ${trainingCategories.find((c) => c.id === categoryId)?.name}` : ""}`}
              variant="small"
            />
          </div>

          <section className="grid grid-cols-4 gap-4">
            <F0BigNumber label="Trainings" value={a.trainingsCount} />
            <F0BigNumber label="Participants" value={a.participantsTotal} />
            <F0BigNumber
              label="Completion rate"
              value={`${a.completionRatePct}%`}
            />
            <F0BigNumber label="Total cost" value={fmtEur(a.totalCost)} />
          </section>

          <div className="grid grid-cols-2 gap-4">
            <F0Card title="Participants by month">
              <div className="flex flex-col gap-3 p-4">
                {a.monthlyParticipants.map((m) => (
                  <Bar
                    key={m.month}
                    label={m.month}
                    value={m.value}
                    max={maxMonthly}
                  />
                ))}
              </div>
            </F0Card>

            <F0Card title="Hours of training by month">
              <div className="flex flex-col gap-3 p-4">
                {a.hoursByMonth.map((m) => (
                  <Bar
                    key={m.month}
                    label={m.month}
                    value={m.value}
                    max={maxHours}
                    format={(n) => `${n} h`}
                  />
                ))}
              </div>
            </F0Card>

            <F0Card title="Cost by category">
              <div className="flex flex-col gap-3 p-4">
                {a.costByCategory.map((c) => (
                  <Bar
                    key={c.name}
                    label={c.name}
                    value={c.value}
                    max={maxCostCat}
                    format={fmtEur}
                  />
                ))}
              </div>
            </F0Card>

            <F0Card title="Participants by department">
              <div className="flex flex-col gap-3 p-4">
                {a.participantsByDepartment.map((d) => (
                  <Bar
                    key={d.name}
                    label={d.name}
                    value={d.value}
                    max={maxDept}
                  />
                ))}
              </div>
            </F0Card>
          </div>

          <F0Card title="Completion breakdown">
            <div className="grid grid-cols-4 gap-4 p-4">
              <F0BigNumber label="Completed" value={a.participantsCompleted} />
              <F0BigNumber
                label="In progress"
                value={a.participantsInProgress}
              />
              <F0BigNumber label="Expired" value={a.participantsExpired} />
              <F0BigNumber
                label="Not started"
                value={a.participantsNotStarted}
              />
            </div>
          </F0Card>
        </F0Box>
      </Page>

      <F0Dialog
        open={exportOpen}
        onOpenChange={(o: boolean) => {
          if (!o) setExportOpen(false)
        }}
        width="md"
        title="Export insights report"
        primaryAction={{
          label: "Export",
          onClick: () => setExportOpen(false),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setExportOpen(false),
        }}
      >
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0Select
            label="Format"
            value={exportFormat}
            onChange={(v: string) => setExportFormat(v)}
            options={FORMAT_OPTIONS}
          />
          <F0Select
            label="Range"
            value={exportRange}
            onChange={(v: string) => setExportRange(v)}
            options={RANGE_OPTIONS}
          />
          <F0Checkbox
            checked={includeCharts}
            onCheckedChange={(c) => setIncludeCharts(c === true)}
            title="Include charts"
          />
          <F0Checkbox
            checked={includeDepartments}
            onCheckedChange={(c) => setIncludeDepartments(c === true)}
            title="Include department breakdown"
          />
        </F0Box>
      </F0Dialog>
    </>
  )
}
