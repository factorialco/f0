import {
  F0Alert,
  F0Avatar,
  F0BigNumber,
  F0Box,
  F0Button,
  F0Card,
  F0Checkbox,
  F0Dialog,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Download } from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"

import {
  certificatesForEmployee,
  employees,
  findTraining,
  participantsForTraining,
  sessionsForTraining,
  trainings,
} from "@/fixtures"
import type { PrototypeMeta } from "../../../types"

export const meta: PrototypeMeta = {
  slug: "trainings-employees",
  title: "Trainings — Employees view (admin)",
  description:
    "Admin-facing list of employees with their trainings. Click an employee to see their training detail with certificates, session attendances, file viewer and a NextSession modal.",
  category: "Talent",
  module: "trainings",
  audience: ["admin", "manager"],
  tags: ["trainings", "employees", "certificates"],
  createdAt: "2026-05-12",
}

type View =
  | "list"
  | "training-detail"

function StatusChip({ status }: { status: string }) {
  const map: Record<string, string> = {
    completed: "bg-f1-background-positive text-f1-foreground-positive",
    in_progress: "bg-f1-background-info text-f1-foreground-info",
    not_started: "bg-f1-background-secondary text-f1-foreground-secondary",
    expired: "bg-f1-background-critical text-f1-foreground-critical",
    valid: "bg-f1-background-positive text-f1-foreground-positive",
    expiring_soon: "bg-f1-background-warning text-f1-foreground-warning",
    attended: "bg-f1-background-positive text-f1-foreground-positive",
    missed: "bg-f1-background-critical text-f1-foreground-critical",
    excused: "bg-f1-background-secondary text-f1-foreground-secondary",
    pending: "bg-f1-background-warning text-f1-foreground-warning",
  }
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${map[status] ?? "bg-f1-background-secondary text-f1-foreground-secondary"}`}
    >
      {status.replace("_", " ")}
    </span>
  )
}

function useView() {
  const [params, setSearch] = useSearchParams()
  const view = (params.get("view") as View | null) ?? "list"
  return {
    view,
    employeeId: params.get("employeeId"),
    trainingId: params.get("trainingId"),
    sessionId: params.get("sessionId"),
    fileId: params.get("fileId"),
    nextSession: params.get("nextSession") === "1",
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

// --- LIST -------------------------------------------------------------------

function ListView({
  setSearch,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const [query, setQuery] = useState("")

  const rows = useMemo(() => {
    return employees.slice(0, 12).map((e) => {
      const assigned = trainings.filter((_t, i) => (i + e.id.charCodeAt(4)) % 3 !== 0)
      const completed = assigned.filter((_t, i) => i % 2 === 0).length
      const certs = certificatesForEmployee(e.id)
      const lastTraining = assigned[0]
      return {
        employee: e,
        assignedCount: assigned.length,
        completedCount: completed,
        certsCount: certs.length,
        lastTrainingName: lastTraining?.name ?? "—",
        lastTrainingId: lastTraining?.id ?? null,
      }
    })
  }, [])

  const filtered = useMemo(
    () =>
      rows.filter((r) =>
        query.length === 0
          ? true
          : r.employee.fullName.toLowerCase().includes(query.toLowerCase())
      ),
    [rows, query]
  )

  const totalAssigned = rows.reduce((acc, r) => acc + r.assignedCount, 0)
  const totalCompleted = rows.reduce((acc, r) => acc + r.completedCount, 0)
  const totalCerts = rows.reduce((acc, r) => acc + r.certsCount, 0)

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <div className="flex flex-col gap-1">
        <F0Heading
          content="Employees & trainings"
          variant="heading-large"
          as="h1"
        />
        <F0Text
          content="Browse trainings assigned to each employee, their certificates and attendance."
          variant="body"
        />
      </div>

      <section className="grid grid-cols-4 gap-4">
        <F0BigNumber label="Employees" value={rows.length} />
        <F0BigNumber label="Assignments" value={totalAssigned} />
        <F0BigNumber label="Completed" value={totalCompleted} />
        <F0BigNumber label="Certificates" value={totalCerts} />
      </section>

      <div className="max-w-md">
        <Input
          label="Search employee"
          hideLabel
          placeholder="Search employee…"
          value={query}
          onChange={(v) => setQuery(v ?? "")}
        />
      </div>

      <F0Card title={`Employees (${filtered.length})`}>
        <div className="flex flex-col divide-y divide-f1-border-secondary">
          {filtered.map((r) => (
            <button
              key={r.employee.id}
              className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center gap-4 p-4 text-left hover:bg-f1-background-hover"
              onClick={() =>
                r.lastTrainingId &&
                go(setSearch, {
                  view: "training-detail",
                  employeeId: r.employee.id,
                  trainingId: r.lastTrainingId,
                })
              }
            >
              <div className="flex items-center gap-3">
                <F0Avatar
                  src={r.employee.avatarUrl}
                  firstName={r.employee.fullName.split(" ")[0]}
                  lastName={r.employee.fullName.split(" ")[1] ?? ""}
                  size="sm"
                />
                <div className="flex flex-col">
                  <F0Text content={r.employee.fullName} variant="label" />
                  <F0Text content={r.employee.role} variant="small" />
                </div>
              </div>
              <F0Text content={`${r.assignedCount} assigned`} variant="small" />
              <F0Text content={`${r.completedCount} done`} variant="small" />
              <F0Text
                content={`${r.certsCount} certs`}
                variant="small"
              />
              <F0Text content={r.lastTrainingName} variant="small" />
            </button>
          ))}
        </div>
      </F0Card>
    </F0Box>
  )
}

// --- TRAINING DETAIL (admin perspective of an employee's training) ---------

function TrainingDetailView({
  setSearch,
  employeeId,
  trainingId,
  sessionId,
  fileId,
  nextSession,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
  employeeId: string | null
  trainingId: string | null
  sessionId: string | null
  fileId: string | null
  nextSession: boolean
}) {
  const emp = employees.find((e) => e.id === employeeId)
  const t = trainingId ? findTraining(trainingId) : null
  const [tab, setTab] = useState<"detail" | "certificates" | "upload">("detail")
  if (!emp || !t)
    return (
      <F0Box padding="xl">
        <F0Alert
          variant="warning"
          title="Not found"
          description="Pick an employee and training."
        />
      </F0Box>
    )

  const sessions = sessionsForTraining(t.id)
  const certs = certificatesForEmployee(emp.id).filter(
    (c) => c.trainingId === t.id
  )
  const participants = participantsForTraining(t.id)
  const me = participants.find((p) => p.employeeId === emp.id)

  const sessionToShow = sessionId
    ? sessions.find((s) => s.id === sessionId)
    : null
  const nextScheduled = sessions.find((s) => s.status === "scheduled")

  return (
    <>
      <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
        <button
          onClick={() =>
            go(setSearch, {
              view: "list",
              employeeId: null,
              trainingId: null,
              sessionId: null,
              fileId: null,
              nextSession: null,
            })
          }
          className="self-start text-sm text-f1-foreground-info hover:underline"
        >
          ← Back to employees
        </button>

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <F0Avatar
              src={emp.avatarUrl}
              firstName={emp.fullName.split(" ")[0]}
              lastName={emp.fullName.split(" ")[1] ?? ""}
              size="md"
            />
            <div className="flex flex-col gap-1">
              <F0Heading
                content={`${emp.fullName} — ${t.name}`}
                variant="heading-large"
                as="h1"
              />
              <F0Text
                content={`${emp.role} • ${t.totalDuration}h • ${t.categories.map((c) => c.name).join(", ")}`}
                variant="small"
              />
            </div>
          </div>
          {nextScheduled && (
            <F0Button
              label="Next session"
              variant="default"
              onClick={() => go(setSearch, { nextSession: "1" })}
            />
          )}
        </div>

        <Tabs
          tabs={[
            {
              id: "detail",
              label: "Detail",
              onClick: () => setTab("detail"),
            },
            {
              id: "certificates",
              label: `Certificates (${certs.length})`,
              onClick: () => setTab("certificates"),
            },
            {
              id: "upload",
              label: "Upload",
              onClick: () => setTab("upload"),
            },
          ]}
          activeTabId={tab}
          key={tab}
        />

        {tab === "detail" && (
          <>
            <div className="grid grid-cols-4 gap-4">
              <F0BigNumber
                label="Status"
                value={me?.status?.replace("_", " ") ?? "not started"}
              />
              <F0BigNumber
                label="Sessions attended"
                value={`${me?.sessionsAttended ?? 0}/${me?.sessionsTotal ?? sessions.length}`}
              />
              <F0BigNumber
                label="Attendance"
                value={`${me?.attendancePercentage ?? 0}%`}
              />
              <F0BigNumber
                label="Modules"
                value={`${me?.completedModules ?? 0}/${me?.totalModules ?? 0}`}
              />
            </div>

            <F0Card title="Sessions">
              <div className="flex flex-col divide-y divide-f1-border-secondary">
                {sessions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() =>
                      go(setSearch, { sessionId: s.id })
                    }
                    className="flex items-center gap-4 p-4 text-left hover:bg-f1-background-hover"
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
                ))}
              </div>
            </F0Card>
          </>
        )}

        {tab === "certificates" && (
          <F0Card title="Certificates">
            <div className="flex flex-col divide-y divide-f1-border-secondary">
              {certs.length === 0 ? (
                <div className="p-6 text-center">
                  <F0Text
                    content="No certificates uploaded yet."
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
                      <F0Text content={c.fileName} variant="label" />
                      <F0Text
                        content={`Uploaded ${c.uploadedAt.slice(0, 10)} • ${c.fileSize}`}
                        variant="small"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <StatusChip status={c.status} />
                      <F0Button
                        label="View"
                        variant="ghost"
                        size="sm"
                        onClick={() => go(setSearch, { fileId: c.id })}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </F0Card>
        )}

        {tab === "upload" && (
          <F0Card title="Upload a certificate">
            <div className="flex flex-col gap-3 p-4">
              <F0Text
                content="Drop a PDF or image file representing the certificate. It will be visible to the employee and counted toward their trainings."
                variant="body"
              />
              <div className="flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-f1-border-secondary bg-f1-background-secondary p-12 text-center">
                <F0Text
                  content="Drag & drop a file here, or click to browse"
                  variant="label"
                />
                <F0Text content="PDF, PNG, JPG up to 10 MB" variant="small" />
              </div>
              <div className="flex justify-end gap-2">
                <F0Button label="Cancel" variant="ghost" />
                <F0Button label="Upload" variant="default" />
              </div>
            </div>
          </F0Card>
        )}
      </F0Box>

      {/* Session modal */}
      {sessionToShow && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => go(setSearch, { sessionId: null })}
        >
          <div
            className="w-full max-w-lg rounded-lg bg-f1-background p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <F0Heading
              content={sessionToShow.title}
              variant="heading"
              as="h2"
            />
            <div className="mt-3 flex flex-col gap-2">
              <F0Text
                content={`${sessionToShow.startsAt.slice(0, 16).replace("T", " ")} → ${sessionToShow.endsAt.slice(11, 16)}`}
                variant="small"
              />
              <F0Text
                content={`${sessionToShow.mode} • ${sessionToShow.location ?? "Online"}`}
                variant="small"
              />
              {sessionToShow.notes && (
                <F0Text content={sessionToShow.notes} variant="description" />
              )}
              <div className="flex items-center justify-between">
                <F0Text
                  content={`${sessionToShow.attendedCount}/${sessionToShow.totalCount} attended`}
                  variant="small"
                />
                <StatusChip status={sessionToShow.status} />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <F0Button
                label="Close"
                variant="ghost"
                onClick={() => go(setSearch, { sessionId: null })}
              />
              <F0Button label="Edit attendance" variant="default" />
            </div>
          </div>
        </div>
      )}

      {/* File viewer modal */}
      {fileId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => go(setSearch, { fileId: null })}
        >
          <div
            className="w-full max-w-2xl rounded-lg bg-f1-background p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <F0Heading
              content="Certificate preview"
              variant="heading"
              as="h2"
            />
            <div className="mt-3 flex h-96 items-center justify-center rounded-md bg-f1-background-secondary">
              <F0Text content="PDF preview" variant="small" />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <F0Button
                label="Close"
                variant="ghost"
                onClick={() => go(setSearch, { fileId: null })}
              />
              <F0Button label="Download" variant="default" />
            </div>
          </div>
        </div>
      )}

      {/* Next session modal */}
      {nextSession && nextScheduled && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => go(setSearch, { nextSession: null })}
        >
          <div
            className="w-full max-w-lg rounded-lg bg-f1-background p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <F0Heading
              content="Next session"
              variant="heading"
              as="h2"
            />
            <div className="mt-3 flex flex-col gap-2">
              <F0Text content={nextScheduled.title} variant="label" />
              <F0Text
                content={`${nextScheduled.startsAt.slice(0, 16).replace("T", " ")} → ${nextScheduled.endsAt.slice(11, 16)}`}
                variant="small"
              />
              <F0Text
                content={`${nextScheduled.mode} • ${nextScheduled.location ?? "Online"}`}
                variant="small"
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <F0Button
                label="Close"
                variant="ghost"
                onClick={() => go(setSearch, { nextSession: null })}
              />
              <F0Button label="Add to calendar" variant="default" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// --- ROOT -------------------------------------------------------------------

export default function TrainingsEmployees() {
  const {
    view,
    employeeId,
    trainingId,
    sessionId,
    fileId,
    nextSession,
    setSearch,
  } = useView()
  const [exportOpen, setExportOpen] = useState(false)
  const [exportFormat, setExportFormat] = useState<"csv" | "xlsx" | "pdf">(
    "csv"
  )
  const [exportScope, setExportScope] = useState<"all" | "filtered" | "selected">(
    "all"
  )
  const [exportCerts, setExportCerts] = useState(true)
  const [exportAttendance, setExportAttendance] = useState(true)
  const [exportCosts, setExportCosts] = useState(false)

  return (
    <>
    <Page
      header={
        <PageHeader
          module={{
            id: "company_trainings",
            name: "Trainings",
            href: "/p/trainings",
          }}
          breadcrumbs={
            view === "list"
              ? [
                  { id: "list", label: "Trainings", href: "/p/trainings" },
                  { id: "emp", label: "Employees" },
                ]
              : [
                  { id: "list", label: "Trainings", href: "/p/trainings" },
                  {
                    id: "emp",
                    label: "Employees",
                    href: "/p/trainings-employees",
                  },
                  { id: "detail", label: "Training detail" },
                ]
          }
          actions={[
            {
              label: "Export progress",
              icon: Download,
              onClick: () => setExportOpen(true),
            },
          ]}
        />
      }
    >
      {view === "list" && <ListView setSearch={setSearch} />}
      {view === "training-detail" && (
        <TrainingDetailView
          setSearch={setSearch}
          employeeId={employeeId}
          trainingId={trainingId}
          sessionId={sessionId}
          fileId={fileId}
          nextSession={nextSession}
        />
      )}
    </Page>
    {exportOpen && (
      <F0Dialog
        isOpen={exportOpen}
        onClose={() => setExportOpen(false)}
        position="center"
        width="md"
        title="Export employee progress"
        primaryAction={{
          label: "Export",
          onClick: () => setExportOpen(false),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setExportOpen(false),
        }}
      >
        <div className="flex flex-col gap-4">
          <F0Select<"csv" | "xlsx" | "pdf">
            label="Format"
            value={exportFormat}
            onChange={(v: "csv" | "xlsx" | "pdf") => setExportFormat(v)}
            options={[
              { value: "csv", label: "CSV" },
              { value: "xlsx", label: "XLSX" },
              { value: "pdf", label: "PDF" },
            ]}
          />
          <F0Select<"all" | "filtered" | "selected">
            label="Scope"
            value={exportScope}
            onChange={(v: "all" | "filtered" | "selected") => setExportScope(v)}
            options={[
              { value: "all", label: "All employees" },
              { value: "filtered", label: "Filtered list only" },
              { value: "selected", label: "Selected employees" },
            ]}
          />
          <F0Checkbox
            checked={exportCerts}
            onCheckedChange={(c) => setExportCerts(c === true)}
            title="Include certificates"
          />
          <F0Checkbox
            checked={exportAttendance}
            onCheckedChange={(c) => setExportAttendance(c === true)}
            title="Include session attendance"
          />
          <F0Checkbox
            checked={exportCosts}
            onCheckedChange={(c) => setExportCosts(c === true)}
            title="Include cost breakdown"
          />
        </div>
      </F0Dialog>
    )}
    </>
  )
}
