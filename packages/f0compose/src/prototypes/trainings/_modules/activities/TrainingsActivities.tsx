import {
  F0Alert,
  F0Avatar,
  F0Box,
  F0Card,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { useMemo, useState } from "react"

import {
  employees,
  trainings,
} from "@/fixtures"
import type { PrototypeMeta } from "../../../types"

export const meta: PrototypeMeta = {
  slug: "trainings-activities",
  title: "Trainings — Activity feed",
  description:
    "Chronological activity feed of every action across the Trainings module: enrollments, completions, certificate uploads, request decisions, budget changes and survey submissions. Filter by type, employee or training.",
  category: "Talent",
  module: "trainings",
  audience: ["admin", "manager"],
  tags: ["trainings", "activity", "audit", "feed"],
  createdAt: "2026-05-12",
}

type ActivityKind =
  | "enrollment"
  | "completion"
  | "certificate"
  | "request"
  | "budget"
  | "survey"
  | "session"

type Activity = {
  id: string
  kind: ActivityKind
  ts: string
  actorId: string
  trainingId: string | null
  message: string
}

function generateActivities(): Activity[] {
  const out: Activity[] = []
  let i = 0
  for (const e of employees.slice(0, 8)) {
    for (const t of trainings.slice(0, 4)) {
      const days = (i % 14) + 1
      const ts = new Date(Date.now() - days * 86400000).toISOString()
      const kinds: ActivityKind[] = [
        "enrollment",
        "completion",
        "certificate",
        "session",
        "survey",
      ]
      const k = kinds[i % kinds.length]
      out.push({
        id: `act-${++i}`,
        kind: k,
        ts,
        actorId: e.id,
        trainingId: t.id,
        message:
          k === "enrollment"
            ? `enrolled in "${t.name}"`
            : k === "completion"
              ? `completed "${t.name}"`
              : k === "certificate"
                ? `uploaded a certificate for "${t.name}"`
                : k === "session"
                  ? `attended a session of "${t.name}"`
                  : `submitted the post-training survey for "${t.name}"`,
      })
    }
  }
  // budget + request entries
  out.push({
    id: "act-100",
    kind: "budget",
    ts: new Date(Date.now() - 2 * 86400000).toISOString(),
    actorId: employees[0]?.id ?? "emp-001",
    trainingId: null,
    message: 'allocated €4,000 to budget "Leadership Bootcamp Q2"',
  })
  out.push({
    id: "act-101",
    kind: "request",
    ts: new Date(Date.now() - 3 * 86400000).toISOString(),
    actorId: employees[1]?.id ?? "emp-002",
    trainingId: null,
    message: "approved a training request from Ana García",
  })
  return out.sort((a, b) => (a.ts < b.ts ? 1 : -1))
}

const KIND_LABEL: Record<ActivityKind, string> = {
  enrollment: "Enrollment",
  completion: "Completion",
  certificate: "Certificate",
  request: "Request",
  budget: "Budget",
  survey: "Survey",
  session: "Session",
}

const KIND_COLOR: Record<ActivityKind, string> = {
  enrollment: "bg-f1-background-info text-f1-foreground-info",
  completion: "bg-f1-background-positive text-f1-foreground-positive",
  certificate: "bg-f1-background-warning text-f1-foreground-warning",
  request: "bg-f1-background-secondary text-f1-foreground-secondary",
  budget: "bg-f1-background-bold text-white",
  survey: "bg-f1-background-secondary text-f1-foreground-secondary",
  session: "bg-f1-background-info text-f1-foreground-info",
}

function fmt(ts: string) {
  const d = new Date(ts)
  return d.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default function TrainingsActivities() {
  const [tab, setTab] = useState<"all" | ActivityKind>("all")
  const [employeeFilter, setEmployeeFilter] = useState<string>("__all")
  const all = useMemo(generateActivities, [])
  const filtered = all.filter((a) => {
    if (tab !== "all" && a.kind !== tab) return false
    if (employeeFilter !== "__all" && a.actorId !== employeeFilter) return false
    return true
  })

  return (
    <Page
      header={
        <PageHeader
          module={{
            id: "company_trainings",
            name: "Trainings",
            href: "/p/trainings",
          }}
          breadcrumbs={[
            { id: "list", label: "Trainings", href: "/p/trainings" },
            { id: "activities", label: "Activity" },
          ]}
        />
      }
    >
      <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
        <div className="flex flex-col gap-1">
          <F0Heading
            content="Activity feed"
            variant="heading-large"
            as="h1"
          />
          <F0Text
            content="Chronological audit of every change in the Trainings module."
            variant="body"
          />
        </div>

        <div className="flex items-center gap-3 min-w-[240px]">
          <F0Select<string>
            label="Employee"
            hideLabel
            value={employeeFilter}
            onChange={(v: string) => setEmployeeFilter(v)}
            options={[
              { value: "__all", label: "All employees" },
              ...employees.map((e) => ({ value: e.id, label: e.fullName })),
            ]}
          />
        </div>

        <Tabs
          tabs={[
            { id: "all", label: `All (${all.length})`, onClick: () => setTab("all") },
            ...(Object.keys(KIND_LABEL) as ActivityKind[]).map((k) => ({
              id: k,
              label: KIND_LABEL[k],
              onClick: () => setTab(k),
            })),
          ]}
          activeTabId={tab}
        />

        {filtered.length === 0 ? (
          <F0Alert
            variant="info"
            title="No activity matches"
            description="Try removing filters or selecting a different category."
          />
        ) : (
          <F0Card title={`${filtered.length} entries`}>
            <div className="flex flex-col divide-y divide-f1-border-secondary">
              {filtered.map((a) => {
                const actor = employees.find((e) => e.id === a.actorId)
                return (
                  <div
                    key={a.id}
                    className="flex items-start gap-3 p-4 hover:bg-f1-background-hover"
                  >
                    {actor && (
                      <F0Avatar
                        src={actor.avatarUrl}
                        firstName={actor.fullName.split(" ")[0] ?? ""}
                        lastName={actor.fullName.split(" ").slice(1).join(" ")}
                        size="md"
                      />
                    )}
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="text-sm">
                        <strong>
                          {actor ? actor.fullName : "—"}
                        </strong>{" "}
                        {a.message}
                      </div>
                      <F0Text content={fmt(a.ts)} variant="small" />
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${KIND_COLOR[a.kind]}`}
                    >
                      {KIND_LABEL[a.kind]}
                    </span>
                  </div>
                )
              })}
            </div>
          </F0Card>
        )}
      </F0Box>
    </Page>
  )
}
