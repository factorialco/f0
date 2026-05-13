import {
  F0Alert,
  F0BigNumber,
  F0Box,
  F0Button,
  F0Card,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  Page,
  PageHeader,
  Tabs,
  Textarea,
} from "@factorialco/f0-react/dist/experimental"
import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"

import {
  answersForTraining,
  certificatesForEmployee,
  certificatesForTraining,
  contentModulesForTraining,
  filesForTraining,
  findTraining,
  requestsForEmployee,
  sessionsForTraining,
  surveyTemplates,
  trainings,
  type TrainingFile,
  type TrainingSession,
} from "@/fixtures"
import type { PrototypeMeta } from "../../../types"

import { EmployeeModals, type EmployeeAction } from "./EmployeeModals"

export const meta: PrototypeMeta = {
  slug: "trainings-my",
  title: "My Trainings (employee)",
  description:
    "Employee-facing trainings module: overview, catalog, training detail (sessions, materials, certificates, content), requests and surveys (list, answer, score) — replicates /trainings/my flow.",
  category: "Talent",
  module: "trainings",
  audience: ["employee", "manager"],
  tags: ["trainings", "employee", "catalog", "surveys", "certificates"],
  createdAt: "2026-05-12",
}

const CURRENT_EMPLOYEE_ID = "emp-001"

type View =
  | "overview"
  | "catalog"
  | "catalog-detail"
  | "training-detail"
  | "requests"
  | "surveys"
  | "survey-answer"
  | "survey-score"

function useView(): {
  view: View
  trainingId: string | null
  surveyId: string | null
  setSearch: ReturnType<typeof useSearchParams>[1]
} {
  const [params, setSearch] = useSearchParams()
  const view = (params.get("view") as View | null) ?? "overview"
  return {
    view,
    trainingId: params.get("trainingId"),
    surveyId: params.get("surveyId"),
    setSearch,
  }
}

function go(
  setSearch: ReturnType<typeof useSearchParams>[1],
  next: Record<string, string | null>
) {
  setSearch((prev) => {
    const sp = new URLSearchParams(prev)
    Object.entries(next).forEach(([k, v]) => {
      if (v === null) sp.delete(k)
      else sp.set(k, v)
    })
    return sp
  })
}

function StatusChip({ status }: { status: string }) {
  const map: Record<string, string> = {
    completed: "bg-f1-background-positive text-f1-foreground-positive",
    in_progress: "bg-f1-background-info text-f1-foreground-info",
    not_started: "bg-f1-background-secondary text-f1-foreground-secondary",
    expired: "bg-f1-background-critical text-f1-foreground-critical",
    pending: "bg-f1-background-warning text-f1-foreground-warning",
    approved: "bg-f1-background-positive text-f1-foreground-positive",
    rejected: "bg-f1-background-critical text-f1-foreground-critical",
  }
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${map[status] ?? "bg-f1-background-secondary text-f1-foreground-secondary"}`}
    >
      {status.replace("_", " ")}
    </span>
  )
}

// --- VIEW: OVERVIEW ---------------------------------------------------------

function OverviewView({
  setSearch,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const myTrainings = trainings.slice(0, 5)
  const myRequests = requestsForEmployee(CURRENT_EMPLOYEE_ID)
  const myCerts = certificatesForEmployee(CURRENT_EMPLOYEE_ID)

  const totalCompleted = myTrainings.filter((_t, i) => i % 2 === 0).length
  const inProgress = myTrainings.length - totalCompleted

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <F0Heading content="My trainings" variant="heading-large" as="h1" />
          <F0Text
            content="Trainings assigned to you, your requests and your certificates."
            variant="body"
          />
        </div>
        <F0Button
          label="Browse catalog"
          variant="default"
          onClick={() => go(setSearch, { view: "catalog" })}
        />
      </div>

      <section className="grid grid-cols-4 gap-4">
        <F0BigNumber label="Assigned" value={myTrainings.length} />
        <F0BigNumber label="Completed" value={totalCompleted} />
        <F0BigNumber label="In progress" value={inProgress} />
        <F0BigNumber label="Certificates" value={myCerts.length} />
      </section>

      <F0Card title="My active trainings">
        <div className="flex flex-col divide-y divide-f1-border-secondary">
          {myTrainings.map((t, i) => {
            const status = i % 2 === 0 ? "completed" : "in_progress"
            return (
              <button
                key={t.id}
                className="flex items-center justify-between gap-4 p-4 text-left hover:bg-f1-background-hover"
                onClick={() =>
                  go(setSearch, {
                    view: "training-detail",
                    trainingId: t.id,
                  })
                }
              >
                <div className="flex flex-col gap-1">
                  <F0Text content={t.name} variant="label" />
                  <F0Text
                    content={`${t.totalDuration}h • ${t.categories.map((c) => c.name).join(", ")}`}
                    variant="small"
                  />
                </div>
                <StatusChip status={status} />
              </button>
            )
          })}
        </div>
      </F0Card>

      <div className="grid grid-cols-2 gap-4">
        <F0Card title="My requests">
          <div className="flex flex-col divide-y divide-f1-border-secondary">
            {myRequests.length === 0 ? (
              <div className="p-6 text-center">
                <F0Text
                  content="You haven't requested any training yet."
                  variant="small"
                />
              </div>
            ) : (
              myRequests.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between p-4"
                >
                  <div className="flex flex-col">
                    <F0Text content={r.trainingName} variant="label" />
                    <F0Text
                      content={`Requested ${r.createdAt.slice(0, 10)}`}
                      variant="small"
                    />
                  </div>
                  <StatusChip status={r.status} />
                </div>
              ))
            )}
          </div>
        </F0Card>

        <F0Card title="My certificates">
          <div className="flex flex-col divide-y divide-f1-border-secondary">
            {myCerts.length === 0 ? (
              <div className="p-6 text-center">
                <F0Text content="No certificates yet." variant="small" />
              </div>
            ) : (
              myCerts.map((c) => {
                const trn = findTraining(c.trainingId)
                return (
                  <div
                    key={c.id}
                    className="flex items-center justify-between p-4"
                  >
                    <div className="flex flex-col">
                      <F0Text content={trn?.name ?? c.fileName} variant="label" />
                      <F0Text
                        content={`Issued ${c.uploadedAt.slice(0, 10)}`}
                        variant="small"
                      />
                    </div>
                    <F0Button label="Download" variant="ghost" size="sm" />
                  </div>
                )
              })
            )}
          </div>
        </F0Card>
      </div>
    </F0Box>
  )
}

// --- VIEW: CATALOG ----------------------------------------------------------

function CatalogView({
  setSearch,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const catalog = trainings.filter((t) => t.catalog)
  const [query, setQuery] = useState("")
  const filtered = useMemo(
    () =>
      catalog.filter((t) =>
        query.length === 0
          ? true
          : t.name.toLowerCase().includes(query.toLowerCase())
      ),
    [catalog, query]
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <div className="flex flex-col gap-1">
        <F0Heading content="Catalog" variant="heading-large" as="h1" />
        <F0Text
          content="Explore the trainings open to you. Request the ones that interest you and wait for approval from your manager."
          variant="body"
        />
      </div>

      <div className="max-w-md">
        <Input
          label="Search trainings"
          hideLabel
          placeholder="Search trainings…"
          value={query}
          onChange={(v) => setQuery(v ?? "")}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filtered.map((t) => (
          <button
            key={t.id}
            onClick={() =>
              go(setSearch, {
                view: "catalog-detail",
                trainingId: t.id,
              })
            }
            className="flex flex-col items-stretch gap-3 rounded-lg border border-f1-border-secondary bg-f1-background p-4 text-left hover:border-f1-border-hover"
          >
            <div className="flex flex-wrap gap-1">
              {t.categories.slice(0, 2).map((c) => (
                <span
                  key={c.id}
                  className="rounded-full bg-f1-background-secondary px-2 py-0.5 text-xs"
                >
                  {c.name}
                </span>
              ))}
            </div>
            <F0Text content={t.name} variant="label" />
            <F0Text
              content={`${t.totalDuration}h • ${t.type === "internal" ? "Internal" : t.externalProvider ?? "External"}`}
              variant="small"
            />
            <F0Text content={t.description} variant="description" />
          </button>
        ))}
      </div>
    </F0Box>
  )
}

// --- VIEW: CATALOG DETAIL ---------------------------------------------------

function CatalogDetailView({
  setSearch,
  trainingId,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
  trainingId: string | null
}) {
  const t = trainingId ? findTraining(trainingId) : null
  const [tab, setTab] = useState<"overview" | "sessions" | "materials">(
    "overview"
  )
  if (!t)
    return (
      <F0Box padding="xl">
        <F0Alert
          variant="warning"
          title="Training not found"
          description="Pick one from the catalog."
        />
      </F0Box>
    )

  const sessions = sessionsForTraining(t.id)
  const files = filesForTraining(t.id)

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <button
        onClick={() => go(setSearch, { view: "catalog", trainingId: null })}
        className="self-start text-sm text-f1-foreground-info hover:underline"
      >
        ← Back to catalog
      </button>

      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <F0Heading content={t.name} variant="heading-large" as="h1" />
          <F0Text
            content={`${t.totalDuration}h • ${t.categories.map((c) => c.name).join(", ")}`}
            variant="small"
          />
        </div>
        <F0Button
          label="Request training"
          variant="default"
          onClick={() =>
            EmployeeModalContext.open({
              action: "request-training",
              trainingName: t.name,
            })
          }
        />
      </div>

      <Tabs
        tabs={[
          {
            id: "overview",
            label: "Overview",
            onClick: () => setTab("overview"),
          },
          {
            id: "sessions",
            label: `Sessions (${sessions.length})`,
            onClick: () => setTab("sessions"),
          },
          {
            id: "materials",
            label: `Materials (${files.length})`,
            onClick: () => setTab("materials"),
          },
        ]}
        activeTabId={tab}
        key={tab}
      />

      {tab === "overview" && (
        <div className="flex flex-col gap-4">
          <F0Card title="Description">
            <div className="p-4">
              <F0Text content={t.description} variant="body" />
            </div>
          </F0Card>
          <F0Card title="Objectives">
            <div className="p-4">
              <F0Text content={t.objectives} variant="body" />
            </div>
          </F0Card>
        </div>
      )}

      {tab === "sessions" && (
        <F0Card title="Sessions">
          <div className="flex flex-col divide-y divide-f1-border-secondary">
            {sessions.length === 0 ? (
              <div className="p-6 text-center">
                <F0Text content="No sessions scheduled." variant="small" />
              </div>
            ) : (
              sessions.map((s) => (
                <button
                  key={s.id}
                  onClick={() =>
                    EmployeeModalContext.open({
                      action: "session-detail",
                      session: s,
                    })
                  }
                  className="flex w-full items-center gap-4 p-4 text-left hover:bg-f1-background-hover"
                >
                  <div className="flex flex-1 flex-col">
                    <F0Text content={s.title} variant="label" />
                    <F0Text
                      content={`${s.startsAt.slice(0, 16).replace("T", " ")} • ${s.mode} • ${s.location ?? "Online"}`}
                      variant="small"
                    />
                  </div>
                  <StatusChip status={s.status} />
                </button>
              ))
            )}
          </div>
        </F0Card>
      )}

      {tab === "materials" && (
        <F0Card title="Materials">
          <div className="flex flex-col divide-y divide-f1-border-secondary">
            {files.length === 0 ? (
              <div className="p-6 text-center">
                <F0Text content="No materials available." variant="small" />
              </div>
            ) : (
              files.map((f) => (
                <div
                  key={f.id}
                  className="flex items-center justify-between p-4"
                >
                  <button
                    onClick={() =>
                      EmployeeModalContext.open({
                        action: "view-file",
                        file: f,
                      })
                    }
                    className="flex flex-1 flex-col items-start text-left hover:underline"
                  >
                    <F0Text content={f.name} variant="label" />
                    <F0Text
                      content={`${f.type} • ${f.size ?? "—"}`}
                      variant="small"
                    />
                  </button>
                  <F0Button
                    label="Download"
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      EmployeeModalContext.open({
                        action: "download-file",
                        file: f,
                      })
                    }
                  />
                </div>
              ))
            )}
          </div>
        </F0Card>
      )}
    </F0Box>
  )
}

// --- VIEW: TRAINING DETAIL (Revamp) -----------------------------------------

function TrainingDetailView({
  setSearch,
  trainingId,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
  trainingId: string | null
}) {
  const t = trainingId ? findTraining(trainingId) : null
  const [tab, setTab] = useState<
    "overview" | "detail" | "sessions" | "materials" | "certificates"
  >("overview")
  if (!t)
    return (
      <F0Box padding="xl">
        <F0Alert
          variant="warning"
          title="Training not found"
          description="Pick one from your list."
        />
      </F0Box>
    )

  const sessions = sessionsForTraining(t.id)
  const files = filesForTraining(t.id)
  const modules = contentModulesForTraining(t.id)
  const certs = certificatesForTraining(t.id).filter(
    (c) => c.employeeId === CURRENT_EMPLOYEE_ID
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <button
        onClick={() => go(setSearch, { view: "overview", trainingId: null })}
        className="self-start text-sm text-f1-foreground-info hover:underline"
      >
        ← Back
      </button>

      <div className="flex flex-col gap-1">
        <F0Heading content={t.name} variant="heading-large" as="h1" />
        <F0Text
          content={`${t.totalDuration}h • ${t.categories.map((c) => c.name).join(", ")}`}
          variant="small"
        />
      </div>

      <Tabs
        tabs={[
          { id: "overview", label: "Overview", onClick: () => setTab("overview") },
          { id: "detail", label: "Content", onClick: () => setTab("detail") },
          {
            id: "sessions",
            label: `Sessions (${sessions.length})`,
            onClick: () => setTab("sessions"),
          },
          {
            id: "materials",
            label: `Materials (${files.length})`,
            onClick: () => setTab("materials"),
          },
          {
            id: "certificates",
            label: `Certificates (${certs.length})`,
            onClick: () => setTab("certificates"),
          },
        ]}
        activeTabId={tab}
        key={tab}
      />

      {tab === "overview" && (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            <F0BigNumber label="Sessions" value={sessions.length} />
            <F0BigNumber label="Modules" value={modules.length} />
            <F0BigNumber label="Materials" value={files.length} />
          </div>
          <div className="flex justify-end gap-2">
            <F0Button
              label="Upload certificate"
              variant="ghost"
              onClick={() =>
                EmployeeModalContext.open({
                  action: "upload-certificate",
                  trainingName: t.name,
                })
              }
            />
            <F0Button
              label="Start training"
              variant="default"
              onClick={() => {
                window.location.href = `/p/trainings-content?view=consumer&trainingId=${t.id}`
              }}
            />
          </div>
        </div>
      )}

      {tab === "detail" && (
        <F0Card title="Content modules">
          <div className="flex flex-col divide-y divide-f1-border-secondary">
            {modules.length === 0 ? (
              <div className="p-6 text-center">
                <F0Text content="No content available." variant="small" />
              </div>
            ) : (
              modules.map((m) => (
                <div key={m.id} className="flex flex-col gap-2 p-4">
                  <F0Text content={m.title} variant="label" />
                  <div className="flex flex-col gap-1">
                    {m.blocks.map((b) => (
                      <div
                        key={b.id}
                        className="flex items-center justify-between rounded-md bg-f1-background-secondary px-3 py-2"
                      >
                        <F0Text content={`${b.type} • ${b.title}`} variant="small" />
                        <F0Button label="Open" variant="ghost" size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </F0Card>
      )}

      {tab === "sessions" && (
        <F0Card title="Sessions">
          <div className="flex flex-col divide-y divide-f1-border-secondary">
            {sessions.map((s) => (
              <div key={s.id} className="flex items-center gap-4 p-4">
                <div className="flex flex-1 flex-col">
                  <F0Text content={s.title} variant="label" />
                  <F0Text
                    content={`${s.startsAt.slice(0, 16).replace("T", " ")} • ${s.mode}`}
                    variant="small"
                  />
                </div>
                <StatusChip status={s.status} />
              </div>
            ))}
          </div>
        </F0Card>
      )}

      {tab === "materials" && (
        <F0Card title="Materials">
          <div className="flex flex-col divide-y divide-f1-border-secondary">
            {files.map((f) => (
              <div key={f.id} className="flex items-center justify-between p-4">
                <F0Text content={f.name} variant="label" />
                <div className="flex gap-2">
                  <F0Button
                    label="View"
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      EmployeeModalContext.open({
                        action: "view-file",
                        file: f,
                      })
                    }
                  />
                  <F0Button
                    label="Download"
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      EmployeeModalContext.open({
                        action: "download-file",
                        file: f,
                      })
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </F0Card>
      )}

      {tab === "certificates" && (
        <F0Card title="My certificates">
          <div className="flex flex-col divide-y divide-f1-border-secondary">
            {certs.length === 0 ? (
              <div className="p-6 text-center">
                <F0Text
                  content="Complete the training to receive a certificate."
                  variant="small"
                />
              </div>
            ) : (
              certs.map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between p-4"
                >
                  <div className="flex flex-col">
                    <F0Text content={t.name} variant="label" />
                    <F0Text
                      content={`Issued ${c.uploadedAt.slice(0, 10)}`}
                      variant="small"
                    />
                  </div>
                  <F0Button label="Download" variant="ghost" size="sm" />
                </div>
              ))
            )}
          </div>
        </F0Card>
      )}
    </F0Box>
  )
}

// --- VIEW: REQUESTS ---------------------------------------------------------

function RequestsView() {
  const reqs = requestsForEmployee(CURRENT_EMPLOYEE_ID)
  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <div className="flex flex-col gap-1">
        <F0Heading content="My requests" variant="heading-large" as="h1" />
        <F0Text
          content="Track the status of trainings you've requested."
          variant="body"
        />
      </div>

      <F0Card title="Requests">
        <div className="flex flex-col divide-y divide-f1-border-secondary">
          {reqs.length === 0 ? (
            <div className="p-6 text-center">
              <F0Text content="You haven't requested any training yet." variant="small" />
            </div>
          ) : (
            reqs.map((r) => (
              <div key={r.id} className="flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between">
                  <F0Text content={r.trainingName} variant="label" />
                  <StatusChip status={r.status} />
                </div>
                <F0Text
                  content={`Requested ${r.createdAt.slice(0, 10)} • Cost €${r.cost}`}
                  variant="small"
                />
                {r.comments && (
                  <F0Text content={r.comments} variant="description" />
                )}
              </div>
            ))
          )}
        </div>
      </F0Card>
    </F0Box>
  )
}

// --- VIEW: SURVEYS ----------------------------------------------------------

function SurveysListView({
  setSearch,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const pending = surveyTemplates.slice(0, 2)
  const completed = surveyTemplates.slice(2)
  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <div className="flex flex-col gap-1">
        <F0Heading content="Surveys" variant="heading-large" as="h1" />
        <F0Text
          content="Feedback forms tied to your trainings."
          variant="body"
        />
      </div>

      <F0Card title="Pending">
        <div className="flex flex-col divide-y divide-f1-border-secondary">
          {pending.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-between p-4"
            >
              <div className="flex flex-col">
                <F0Text content={s.name} variant="label" />
                <F0Text
                  content={`${s.questionCount} questions • ${s.category}`}
                  variant="small"
                />
              </div>
              <F0Button
                label="Answer"
                variant="default"
                size="sm"
                onClick={() =>
                  go(setSearch, {
                    view: "survey-answer",
                    surveyId: s.id,
                  })
                }
              />
            </div>
          ))}
        </div>
      </F0Card>

      <F0Card title="Completed">
        <div className="flex flex-col divide-y divide-f1-border-secondary">
          {completed.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-between p-4"
            >
              <div className="flex flex-col">
                <F0Text content={s.name} variant="label" />
                <F0Text
                  content={`${s.questionCount} questions • ${s.category}`}
                  variant="small"
                />
              </div>
              <F0Button
                label="View score"
                variant="ghost"
                size="sm"
                onClick={() =>
                  go(setSearch, {
                    view: "survey-score",
                    surveyId: s.id,
                  })
                }
              />
            </div>
          ))}
        </div>
      </F0Card>
    </F0Box>
  )
}

function SurveyAnswerView({
  setSearch,
  surveyId,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
  surveyId: string | null
}) {
  const s = surveyTemplates.find((x) => x.id === surveyId)
  if (!s)
    return (
      <F0Box padding="xl">
        <F0Alert variant="warning" title="Survey not found" description="" />
      </F0Box>
    )

  const questions = Array.from({ length: s.questionCount }, (_, i) => ({
    id: `q-${i + 1}`,
    label: `${s.category === "knowledge" ? "Which best describes…" : s.category === "satisfaction" ? "How would you rate…" : "What feedback do you have on…"} item ${i + 1}?`,
    type:
      s.responseScale === "yes-no"
        ? ("boolean" as const)
        : s.responseScale === "mixed" && i === s.questionCount - 1
          ? ("text" as const)
          : ("scale" as const),
  }))

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <button
        onClick={() => go(setSearch, { view: "surveys", surveyId: null })}
        className="self-start text-sm text-f1-foreground-info hover:underline"
      >
        ← Back to surveys
      </button>
      <div className="flex flex-col gap-1">
        <F0Heading content={s.name} variant="heading-large" as="h1" />
        <F0Text content={s.description} variant="body" />
      </div>

      <div className="flex flex-col gap-4">
        {questions.map((q, i) => (
          <F0Card key={q.id} title={`Q${i + 1}. ${q.label}`}>
            <div className="flex flex-col gap-2 p-4">
              {q.type === "scale" && (
                <div className="flex gap-2">
                  {(s.responseScale === "1-10"
                    ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    : [1, 2, 3, 4, 5]
                  ).map((n) => (
                    <button
                      key={n}
                      className="h-10 w-10 rounded-md border border-f1-border-secondary text-sm hover:bg-f1-background-hover"
                    >
                      {n}
                    </button>
                  ))}
                </div>
              )}
              {q.type === "text" && (
                <Textarea
                  label="Answer"
                  hideLabel
                  rows={3}
                  placeholder="Your answer…"
                />
              )}
              {q.type === "boolean" && (
                <div className="flex gap-2">
                  <F0Button label="Yes" variant="ghost" size="sm" />
                  <F0Button label="No" variant="ghost" size="sm" />
                </div>
              )}
            </div>
          </F0Card>
        ))}
      </div>

      <div className="flex justify-end gap-2">
        <F0Button
          label="Cancel"
          variant="ghost"
          onClick={() => go(setSearch, { view: "surveys", surveyId: null })}
        />
        <F0Button label="Submit" variant="default" />
      </div>
    </F0Box>
  )
}

function SurveyScoreView({
  setSearch,
  surveyId,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
  surveyId: string | null
}) {
  const s = surveyTemplates.find((x) => x.id === surveyId)
  if (!s)
    return (
      <F0Box padding="xl">
        <F0Alert variant="warning" title="Survey not found" description="" />
      </F0Box>
    )
  const answers = answersForTraining("trn-001").slice(0, 5)
  const avg =
    answers.length === 0
      ? 0
      : Math.round(
          (answers.reduce((acc, a) => acc + (a.averageScore ?? 0), 0) /
            answers.length) *
            10
        ) / 10
  const questions = Array.from({ length: s.questionCount }, (_, i) => ({
    id: `q-${i + 1}`,
    label: `Question ${i + 1}`,
  }))

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <button
        onClick={() => go(setSearch, { view: "surveys", surveyId: null })}
        className="self-start text-sm text-f1-foreground-info hover:underline"
      >
        ← Back to surveys
      </button>
      <div className="flex flex-col gap-1">
        <F0Heading
          content={`${s.name} — Score`}
          variant="heading-large"
          as="h1"
        />
        <F0Text content="Your answers and aggregated score." variant="body" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <F0BigNumber label="Your score" value={`${avg}/5`} />
        <F0BigNumber label="Average" value="4.2/5" />
        <F0BigNumber label="Responses" value={answers.length} />
      </div>

      <F0Card title="Your answers">
        <div className="flex flex-col divide-y divide-f1-border-secondary">
          {questions.map((q, i) => (
            <div
              key={q.id}
              className="flex items-start justify-between gap-4 p-4"
            >
              <F0Text content={`Q${i + 1}. ${q.label}`} variant="label" />
              <F0Text content="4 / 5" variant="small" />
            </div>
          ))}
        </div>
      </F0Card>
    </F0Box>
  )
}

// --- ROOT -------------------------------------------------------------------

type EmployeeModalState = {
  action: EmployeeAction
  trainingName?: string
  file?: TrainingFile | null
  session?: TrainingSession | null
}

export const EmployeeModalContext = {
  open: (_state: EmployeeModalState) => {},
}

export default function MyTrainings() {
  const { view, trainingId, surveyId, setSearch } = useView()
  const [modalState, setModalState] = useState<EmployeeModalState>({
    action: null,
  })

  EmployeeModalContext.open = (state) => setModalState(state)

  const closeModal = () =>
    setModalState({ action: null, trainingName: undefined, file: null })

  return (
    <>
      <Page
      header={
        <PageHeader
          module={{
            id: "company_trainings",
            name: "Trainings",
            href: "/p/trainings-my",
          }}
          breadcrumbs={
            view === "overview"
              ? [{ id: "my", label: "My trainings" }]
              : [
                  {
                    id: "my",
                    label: "My trainings",
                    href: "/p/trainings-my",
                  },
                  {
                    id: view,
                    label:
                      view === "catalog"
                        ? "Catalog"
                        : view === "catalog-detail"
                          ? "Catalog detail"
                          : view === "training-detail"
                            ? "Training detail"
                            : view === "requests"
                              ? "Requests"
                              : view === "surveys"
                                ? "Surveys"
                                : view === "survey-answer"
                                  ? "Answer survey"
                                  : "Survey score",
                  },
                ]
          }
          actions={undefined}
        />
      }
    >
      <Tabs
        tabs={[
          {
            id: "overview",
            label: "Overview",
            onClick: () => go(setSearch, { view: "overview", trainingId: null, surveyId: null }),
          },
          {
            id: "catalog",
            label: "Catalog",
            onClick: () => go(setSearch, { view: "catalog", trainingId: null, surveyId: null }),
          },
          {
            id: "requests",
            label: "Requests",
            onClick: () => go(setSearch, { view: "requests", trainingId: null, surveyId: null }),
          },
          {
            id: "surveys",
            label: "Surveys",
            onClick: () => go(setSearch, { view: "surveys", trainingId: null, surveyId: null }),
          },
        ]}
        activeTabId={
          view === "catalog-detail"
            ? "catalog"
            : view === "training-detail"
              ? "overview"
              : view === "survey-answer" || view === "survey-score"
                ? "surveys"
                : view
        }
        key={view}
      />

      {view === "overview" && <OverviewView setSearch={setSearch} />}
      {view === "catalog" && <CatalogView setSearch={setSearch} />}
      {view === "catalog-detail" && (
        <CatalogDetailView setSearch={setSearch} trainingId={trainingId} />
      )}
      {view === "training-detail" && (
        <TrainingDetailView setSearch={setSearch} trainingId={trainingId} />
      )}
      {view === "requests" && <RequestsView />}
      {view === "surveys" && <SurveysListView setSearch={setSearch} />}
      {view === "survey-answer" && (
        <SurveyAnswerView setSearch={setSearch} surveyId={surveyId} />
      )}
      {view === "survey-score" && (
        <SurveyScoreView setSearch={setSearch} surveyId={surveyId} />
      )}
    </Page>

    <EmployeeModals
      action={modalState.action}
      trainingName={modalState.trainingName}
      file={modalState.file}
      session={modalState.session}
      onClose={closeModal}
    />
    </>
  )
}
