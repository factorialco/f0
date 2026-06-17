import {
  F0Alert,
  F0Avatar,
  F0BigNumber,
  F0Box,
  F0Button,
  F0Card,
  F0Checkbox,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  NumberInput,
  Page,
  PageHeader,
  Tabs,
  Textarea,
} from "@factorialco/f0-react/dist/experimental"
import { useEffect, useMemo, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import { trainingRequests } from "@/fixtures"
import type { PrototypeMeta } from "../../../types"
import { trainingsTopNav } from "../../topNav"

export const meta: PrototypeMeta = {
  hidden: true,
  slug: "trainings-requests",
  title: "Trainings — Requests (admin)",
  description:
    "Admin queue of training requests submitted by employees. Filter by status, open a detail panel, approve or reject with comments.",
  category: "Talent",
  module: "trainings",
  audience: ["admin", "manager"],
  tags: ["trainings", "requests", "approvals"],
  createdAt: "2026-05-12",
}

type View = "list" | "detail"
type Status = "pending" | "approved" | "rejected" | "cancelled"

function useView() {
  const [params, setSearch] = useSearchParams()
  const view = (params.get("view") as View | null) ?? "list"
  const status = (params.get("status") as Status | "all" | null) ?? "all"
  return {
    view,
    requestId: params.get("requestId"),
    status,
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

const fmtEur = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n)

function StatusChip({ status }: { status: string }) {
  const map: Record<string, string> = {
    pending: "bg-f1-background-warning text-f1-foreground-warning",
    approved: "bg-f1-background-positive text-f1-foreground-positive",
    rejected: "bg-f1-background-critical text-f1-foreground-critical",
    cancelled: "bg-f1-background-secondary text-f1-foreground-secondary",
  }
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${map[status] ?? "bg-f1-background-secondary text-f1-foreground-secondary"}`}
    >
      {status}
    </span>
  )
}

// --- LIST -------------------------------------------------------------------

function ListView({
  status,
  setSearch,
}: {
  status: Status | "all"
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const [query, setQuery] = useState("")
  const counts = useMemo(() => {
    const c: Record<string, number> = {
      all: trainingRequests.length,
      pending: 0,
      approved: 0,
      rejected: 0,
      cancelled: 0,
    }
    trainingRequests.forEach((r) => {
      c[r.status] = (c[r.status] ?? 0) + 1
    })
    return c
  }, [])

  const filtered = useMemo(
    () =>
      trainingRequests.filter((r) => {
        if (status !== "all" && r.status !== status) return false
        if (query.length === 0) return true
        const q = query.toLowerCase()
        return (
          r.trainingName.toLowerCase().includes(q) ||
          r.authorEmployeeName.toLowerCase().includes(q)
        )
      }),
    [status, query]
  )

  const totalCost = filtered.reduce((a, r) => a + r.cost, 0)

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <div className="flex flex-col gap-1">
        <F0Heading content="Requests" variant="heading-large" as="h1" />
        <F0Text
          content="Requests from employees wanting to take a training. Review and decide."
          variant="body"
        />
      </div>

      <section className="grid grid-cols-4 gap-4">
        <F0BigNumber label="Total" value={counts.all} />
        <F0BigNumber label="Pending" value={counts.pending} />
        <F0BigNumber label="Approved" value={counts.approved} />
        <F0BigNumber label="Estimated cost" value={fmtEur(totalCost)} />
      </section>

      <Tabs
        tabs={[
          {
            id: "all",
            label: `All (${counts.all})`,
            onClick: () => go(setSearch, { status: "all" }),
          },
          {
            id: "pending",
            label: `Pending (${counts.pending ?? 0})`,
            onClick: () => go(setSearch, { status: "pending" }),
          },
          {
            id: "approved",
            label: `Approved (${counts.approved ?? 0})`,
            onClick: () => go(setSearch, { status: "approved" }),
          },
          {
            id: "rejected",
            label: `Rejected (${counts.rejected ?? 0})`,
            onClick: () => go(setSearch, { status: "rejected" }),
          },
        ]}
        activeTabId={status}
        key={status}
      />

      <div className="w-full max-w-md">
        <Input
          label="Search"
          hideLabel
          type="search"
          placeholder="Search by employee or training…"
          value={query}
          onChange={(v) => setQuery(v ?? "")}
        />
      </div>

      <F0Card title={`Requests (${filtered.length})`}>
        <div className="flex flex-col divide-y divide-f1-border-secondary">
          {filtered.length === 0 ? (
            <div className="p-6 text-center">
              <F0Text content="No requests match this filter." variant="small" />
            </div>
          ) : (
            filtered.map((r) => (
              <button
                key={r.id}
                onClick={() =>
                  go(setSearch, { view: "detail", requestId: r.id })
                }
                className="grid grid-cols-[2fr_2fr_1fr_1fr_auto] items-center gap-4 p-4 text-left hover:bg-f1-background-hover"
              >
                <div className="flex items-center gap-3">
                  <F0Avatar
                    src={r.authorAvatar}
                    firstName={r.authorEmployeeName.split(" ")[0]}
                    lastName={r.authorEmployeeName.split(" ")[1] ?? ""}
                    size="sm"
                  />
                  <div className="flex flex-col">
                    <F0Text content={r.authorEmployeeName} variant="label" />
                    <F0Text
                      content={`Submitted ${r.createdAt.slice(0, 10)}`}
                      variant="small"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <F0Text content={r.trainingName} variant="label" />
                  <F0Text
                    content={`${r.durationHours}h • ${r.schedule.replace("_", " ")}`}
                    variant="small"
                  />
                </div>
                <F0Text content={fmtEur(r.cost)} variant="small" />
                <F0Text
                  content={`${r.startDate.slice(0, 10)} → ${r.endDate.slice(0, 10)}`}
                  variant="small"
                />
                <StatusChip status={r.status} />
              </button>
            ))
          )}
        </div>
      </F0Card>
    </F0Box>
  )
}

// --- DETAIL -----------------------------------------------------------------

function DetailView({
  requestId,
  setSearch,
}: {
  requestId: string | null
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const r = trainingRequests.find((x) => x.id === requestId)
  const [comment, setComment] = useState("")
  const [decision, setDecision] = useState<
    null | "approve" | "reject" | "edit" | "delete" | "comment"
  >(null)
  const [editName, setEditName] = useState("")
  const [editCost, setEditCost] = useState<number | null>(null)
  const [editDuration, setEditDuration] = useState<number | null>(null)

  useEffect(() => {
    if (decision === "edit" && r) {
      setEditName(r.trainingName)
      setEditCost(r.cost)
      setEditDuration(r.durationHours)
    }
  }, [decision, r])

  if (!r)
    return (
      <F0Box padding="xl">
        <F0Alert
          variant="warning"
          title="Request not found"
          description="Pick one from the list."
        />
      </F0Box>
    )

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <button
        onClick={() => go(setSearch, { view: "list", requestId: null })}
        className="self-start text-sm text-f1-foreground-info hover:underline"
      >
        ← Back to requests
      </button>

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <F0Avatar
            src={r.authorAvatar}
            firstName={r.authorEmployeeName.split(" ")[0]}
            lastName={r.authorEmployeeName.split(" ")[1] ?? ""}
            size="md"
          />
          <div className="flex flex-col gap-1">
            <F0Heading
              content={r.trainingName}
              variant="heading-large"
              as="h1"
            />
            <F0Text
              content={`Requested by ${r.authorEmployeeName} on ${r.createdAt.slice(0, 10)}`}
              variant="small"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <StatusChip status={r.status} />
          <F0Button
            label="Edit"
            variant="outline"
            size="sm"
            onClick={() => setDecision("edit")}
          />
          <F0Button
            label="Delete"
            variant="critical"
            size="sm"
            onClick={() => setDecision("delete")}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <F0Card title="Training">
          <div className="flex flex-col gap-2 p-4">
            <Row label="Training" value={r.trainingName} />
            {r.providerName && (
              <Row label="Provider" value={r.providerName} />
            )}
            {r.externalReference && (
              <Row label="Reference" value={r.externalReference} />
            )}
            <Row label="Duration" value={`${r.durationHours} h`} />
            <Row
              label="Schedule"
              value={r.schedule.replace("_", " ")}
            />
            <Row
              label="Dates"
              value={`${r.startDate.slice(0, 10)} → ${r.endDate.slice(0, 10)}`}
            />
            <Row label="Subsidized" value={r.subsidized ? "Yes" : "No"} />
          </div>
        </F0Card>

        <F0Card title="Cost">
          <div className="flex flex-col gap-2 p-4">
            <Row label="Total cost" value={fmtEur(r.cost)} />
            <Row
              label="Cost to employee"
              value={fmtEur(r.costToEmployee)}
            />
            <Row
              label="Installments"
              value={String(r.paymentInstallments)}
            />
            {r.reviewerEmployeeName && (
              <Row label="Reviewer" value={r.reviewerEmployeeName} />
            )}
          </div>
        </F0Card>
      </div>

      <F0Card title="Need & comments">
        <div className="flex flex-col gap-3 p-4">
          <div className="flex flex-col gap-1">
            <F0Text content="Training need" variant="small" />
            <F0Text content={r.trainingNeed} variant="body" />
          </div>
          {r.comments && (
            <div className="flex flex-col gap-1">
              <F0Text content="Comments" variant="small" />
              <F0Text content={r.comments} variant="body" />
            </div>
          )}
        </div>
      </F0Card>

      {r.status === "pending" && (
        <F0Card title="Decision">
          <div className="flex flex-col gap-3 p-4">
            <Textarea
              label="Comment for employee"
              hideLabel
              rows={3}
              placeholder="Leave a comment for the employee…"
              value={comment}
              onChange={(v) => setComment(v ?? "")}
            />
            <div className="flex justify-end gap-2">
              <F0Button label="Reject" variant="critical" onClick={() => setDecision("reject")} />
              <F0Button label="Approve" variant="default" onClick={() => setDecision("approve")} />
            </div>
          </div>
        </F0Card>
      )}

      {r.status !== "pending" && (
        <F0Card title="Add comment">
          <div className="flex flex-col gap-3 p-4">
            <Textarea
              label="Additional comment"
              hideLabel
              rows={3}
              placeholder="Leave an additional comment…"
              value={comment}
              onChange={(v) => setComment(v ?? "")}
            />
            <div className="flex justify-end">
              <F0Button
                label="Post comment"
                variant="default"
                onClick={() => setDecision("comment")}
              />
            </div>
          </div>
        </F0Card>
      )}

      {decision && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
          onClick={() => setDecision(null)}
        >
          <div
            className="w-[460px] rounded-lg bg-f1-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-f1-border-secondary px-5 py-4">
              <strong className="text-base">
                {decision === "approve" && "Approve request"}
                {decision === "reject" && "Reject request"}
                {decision === "edit" && "Edit request"}
                {decision === "delete" && "Delete request"}
                {decision === "comment" && "Post comment"}
              </strong>
              <button
                onClick={() => setDecision(null)}
                className="text-2xl leading-none text-f1-foreground-secondary hover:text-f1-foreground"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-3 p-5 text-sm">
              {decision === "approve" && (
                <p>{`Approve "${r.trainingName}" for ${r.authorEmployeeName}?`}</p>
              )}
              {decision === "reject" && (
                <p>{`Reject "${r.trainingName}" for ${r.authorEmployeeName}?`}</p>
              )}
              {decision === "edit" && (
                <>
                  <Input
                    label="Training name"
                    value={editName}
                    onChange={(v) => setEditName(v ?? "")}
                  />
                  <NumberInput
                    label="Cost (€)"
                    locale="en-US"
                    value={editCost}
                    onChange={(v) => setEditCost(v)}
                  />
                  <NumberInput
                    label="Duration (hours)"
                    locale="en-US"
                    value={editDuration}
                    onChange={(v) => setEditDuration(v)}
                  />
                </>
              )}
              {decision === "delete" && (
                <div className="rounded-md bg-f1-background-critical-secondary p-3 text-f1-foreground-critical">
                  This request will be permanently deleted. This action cannot be
                  undone.
                </div>
              )}
              {decision === "comment" && (
                <p>This comment will be visible to the employee and reviewers.</p>
              )}
              {decision === "approve" && (
                <F0Checkbox title="Notify employee by email" checked />
              )}
              {decision === "approve" && (
                <F0Checkbox title="Auto-enroll in next available class" checked />
              )}
              {decision === "reject" && (
                <div className="rounded-md bg-f1-background-critical-secondary p-3 text-f1-foreground-critical">
                  The employee will receive your comment as the rejection reason.
                </div>
              )}
              {comment && decision !== "edit" && decision !== "delete" && (
                <div className="rounded-md border border-f1-border-secondary p-3">
                  <span className="text-xs uppercase tracking-wide text-f1-foreground-secondary">
                    Comment
                  </span>
                  <p className="mt-1">{comment}</p>
                </div>
              )}
            </div>
            <div className="flex justify-end gap-2 border-t border-f1-border-secondary px-5 py-4">
              <button
                onClick={() => setDecision(null)}
                className="rounded-md border border-f1-border-secondary px-4 py-1.5 text-sm font-medium hover:bg-f1-background-hover"
              >
                Cancel
              </button>
              <button
                onClick={() => setDecision(null)}
                className={`rounded-md px-4 py-1.5 text-sm font-semibold text-white ${decision === "reject" || decision === "delete" ? "bg-f1-background-critical hover:opacity-90" : "bg-f1-background-bold hover:opacity-90"}`}
              >
                {decision === "approve" && "Approve"}
                {decision === "reject" && "Reject"}
                {decision === "edit" && "Save changes"}
                {decision === "delete" && "Delete"}
                {decision === "comment" && "Post"}
              </button>
            </div>
          </div>
        </div>
      )}
    </F0Box>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <F0Text content={label} variant="small" />
      <F0Text content={value} variant="label" />
    </div>
  )
}

// --- ROOT -------------------------------------------------------------------

export default function TrainingsRequests() {
  const navigate = useNavigate()
  const { view, requestId, status, setSearch } = useView()
  return (
    <Page
      header={
        <>
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
                    { id: "requests", label: "Requests" },
                  ]
                : [
                    { id: "list", label: "Trainings", href: "/p/trainings" },
                    {
                      id: "requests",
                      label: "Requests",
                      href: "/p/trainings-requests",
                    },
                    { id: "detail", label: "Request detail" },
                  ]
            }
          />
          {view === "list" && (
            <Tabs
              tabs={trainingsTopNav.map((t) => ({
                id: t.id,
                label: t.label,
                onClick: () => navigate(t.href),
              }))}
              activeTabId="requests"
            />
          )}
        </>
      }
    >
      {view === "list" && <ListView status={status} setSearch={setSearch} />}
      {view === "detail" && (
        <DetailView requestId={requestId} setSearch={setSearch} />
      )}
    </Page>
  )
}
