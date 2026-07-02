import { useCopilotAction, useCopilotReadable } from "@/copilot"
import { useCallback, useState } from "react"
import {
  F0AvatarList,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
  OneDataCollection,
} from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  Archive,
  Calendar,
  Cross,
  ExternalLink,
  LayersFront,
  Pencil,
  Sparkles,
} from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import type { Job } from "@/fixtures"
import { employees } from "@/fixtures"
import { applySort } from "@/lib/applySort"
import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"

import { statusText, statusVariant } from "./jobStatus"
import {
  getCandidatesForJob,
  pipelinePhases,
  type PipelineCandidate,
  type PipelinePhase,
} from "../shared/pipelineData"

const employeeMap = new Map(employees.map((e) => [e.id, e]))

type DetailTab = "applications" | "standard-portals" | "premium-portals" | "marketplace"

const detailTabs: { id: DetailTab; label: string }[] = [
  { id: "applications", label: "Applications" },
  { id: "standard-portals", label: "Standard portals" },
  { id: "premium-portals", label: "Premium portals" },
  { id: "marketplace", label: "Marketplace" },
]

// ── Phase → kanban lane variant ─────────────────────────────────────────

function phaseVariant(
  phase: PipelinePhase
): "info" | "positive" | "warning" | "critical" | "neutral" {
  switch (phase) {
    case "New":
      return "info"
    case "Screening Rejection":
      return "critical"
    case "CV Reviewed":
    case "Portfolio Reviewed":
    case "Phone Screen":
      return "positive"
    case "Challenge":
      return "warning"
    case "Interview":
      return "warning"
    case "Offer":
    case "Hired":
      return "positive"
    case "Rejected":
      return "critical"
    default:
      return "neutral"
  }
}

// ── Table columns ───────────────────────────────────────────────────────

const candidateColumns = [
  {
    id: "name",
    label: "Name",
    frozen: true,
    sorting: "fullName",
    render: (item: PipelineCandidate) => ({
      type: "person" as const,
      value: {
        firstName: item.firstName,
        lastName: item.lastName,
        src: item.avatarUrl || undefined,
      },
    }),
  },
  {
    id: "phase",
    label: "Phase",
    render: (item: PipelineCandidate) => ({
      type: "status" as const,
      value: {
        label: item.phase,
        status:
          item.phase === "Rejected" || item.phase === "Screening Rejection"
            ? "critical"
            : item.phase === "New"
              ? "info"
              : "positive",
      },
    }),
  },
  {
    id: "addedOn",
    label: "Added on",
    sorting: "addedOn",
    render: (item: PipelineCandidate) => item.addedOn,
  },
  {
    id: "source",
    label: "Source",
    render: (item: PipelineCandidate) => item.source,
  },
  {
    id: "alerts",
    label: "Alerts",
    render: (item: PipelineCandidate) =>
      item.alerts > 0
        ? {
            type: "status" as const,
            value: { label: String(item.alerts), status: "critical" },
          }
        : "-",
  },
  {
    id: "rating",
    label: "Rating",
    render: (item: PipelineCandidate) =>
      item.rating > 0 ? `${item.rating}/5` : "-",
  },
  {
    id: "match",
    label: "Match",
    render: (item: PipelineCandidate) =>
      item.match ? { type: "tag" as const, value: { label: "Match" } } : "-",
  },
]

// ── Kanban lane definitions (visualization layer) ───────────────────────

const kanbanLanes = pipelinePhases.map((phase) => ({
  id: phase,
  title: phase,
  variant: phaseVariant(phase),
}))

// ── Source lane definitions (data layer — each lane filters by phase) ───

const sourceLanes = pipelinePhases.map((phase) => ({
  id: phase,
  filters: { phase: [phase] },
}))

// ── Main component ──────────────────────────────────────────────────────

export function JobDetailView({
  job,
  onBack,
}: {
  job: Job
  onBack: () => void
}) {
  const [searchParams, setSearchParams] = useSearchParams()

  const rawDetailTab = searchParams.get("detailTab")
  const activeTab: DetailTab =
    rawDetailTab && detailTabs.some((t) => t.id === rawDetailTab)
      ? (rawDetailTab as DetailTab)
      : "applications"

  const setTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    if (id === "applications") next.delete("detailTab")
    else next.set("detailTab", id)
    setSearchParams(next)
  }

  const tabsWithNav = detailTabs.map((t) => ({
    ...t,
    onClick: () => setTab(t.id),
  }))

  const hiringTeam = job.hiringManagerIds
    .map((id) => employeeMap.get(id))
    .filter((e): e is NonNullable<typeof e> => e != null)

  const [jobCandidates, setJobCandidates] = useState(() =>
    getCandidatesForJob(job.id)
  )

  const handleMove = useCallback(
    async (
      _fromLaneId: string,
      toLaneId: string,
      sourceRecord: PipelineCandidate
    ): Promise<PipelineCandidate> => {
      const updated = {
        ...sourceRecord,
        phase: toLaneId as PipelinePhase,
      }
      setJobCandidates((prev) =>
        prev.map((c) => (c.id === sourceRecord.id ? updated : c))
      )
      return updated
    },
    []
  )

  // ── Copilot: expose state ───────────────────────────────────────────────

  useCopilotReadable({
    description:
      "The job opening currently being viewed, including title, status, location, and department.",
    value: {
      id: job.id,
      title: job.title,
      status: job.status,
      location: job.location,
      department: job.departmentId,
    },
  })

  useCopilotReadable({
    description:
      "Pipeline candidates for this job. Each has an id, name, current phase, source, rating (1-5), match flag, and the date they were added.",
    value: jobCandidates.map((c) => ({
      id: c.id,
      name: c.fullName,
      phase: c.phase,
      source: c.source,
      rating: c.rating,
      match: c.match,
      addedOn: c.addedOn,
    })),
  })

  useCopilotReadable({
    description:
      "Available pipeline phases a candidate can be moved to, in order.",
    value: [...pipelinePhases],
  })

  // ── Copilot: actions ────────────────────────────────────────────────────

  useCopilotAction({
    name: "moveCandidateToPhase",
    description:
      "Move a candidate to a different pipeline phase. Use the candidate id and one of the available pipeline phases.",
    parameters: [
      {
        name: "candidateId",
        type: "string",
        description: "The id of the candidate to move",
        required: true,
      },
      {
        name: "phase",
        type: "string",
        description:
          "The target phase (must be one of the available pipeline phases)",
        required: true,
      },
    ],
    handler: ({ candidateId, phase }) => {
      const candidate = jobCandidates.find((c) => c.id === candidateId)
      if (!candidate) return
      if (!pipelinePhases.includes(phase as PipelinePhase)) return
      const updated = { ...candidate, phase: phase as PipelinePhase }
      setJobCandidates((prev) =>
        prev.map((c) => (c.id === candidateId ? updated : c))
      )
    },
  })

  useCopilotAction({
    name: "addCandidate",
    description:
      "Add a new candidate to this job's pipeline. The candidate starts in the 'New' phase.",
    parameters: [
      {
        name: "firstName",
        type: "string",
        description: "Candidate first name",
        required: true,
      },
      {
        name: "lastName",
        type: "string",
        description: "Candidate last name",
        required: true,
      },
      {
        name: "source",
        type: "string",
        description:
          "Where the candidate came from (e.g. LinkedIn, Employee referral, Company page)",
        required: true,
      },
    ],
    handler: ({ firstName, lastName, source }) => {
      const newCandidate: PipelineCandidate = {
        id: `pc-ai-${Date.now()}`,
        fullName: `${firstName} ${lastName}`,
        firstName,
        lastName,
        avatarUrl: "",
        phase: "New",
        addedOn: new Date().toISOString().slice(0, 10),
        source,
        alerts: 0,
        rating: 0,
        match: false,
        jobId: job.id,
      }
      setJobCandidates((prev) => [...prev, newCandidate])
    },
  })

  // Phase preset counts
  const phaseCounts = new Map<string, number>()
  for (const c of jobCandidates) {
    phaseCounts.set(c.phase, (phaseCounts.get(c.phase) ?? 0) + 1)
  }

  const source = useDataCollectionSource<PipelineCandidate>(
    {
      filters: {
        phase: {
          type: "in",
          label: "Phase",
          options: {
            options: pipelinePhases
              .filter((p) => (phaseCounts.get(p) ?? 0) > 0)
              .map((p) => ({
                value: p,
                label: p,
              })),
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "Active", filter: {} },
        ...pipelinePhases
          .filter((p) => (phaseCounts.get(p) ?? 0) > 0)
          .map((p) => ({
            label: `${p}  ${phaseCounts.get(p) ?? 0}`,
            filter: { phase: [p] },
          })),
      ],
      sortings: {
        fullName: { label: "Name" },
        addedOn: { label: "Added on" },
      },
      search: { enabled: true, sync: true },
      selectable: (item: PipelineCandidate) => item.id,
      lanes: sourceLanes,
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const phaseFilter = Array.isArray(filters?.phase)
            ? (filters.phase as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = jobCandidates
            .filter((c) =>
              phaseFilter.length === 0 ? true : phaseFilter.includes(c.phase)
            )
            .filter((c) =>
              term === "" ? true : c.fullName.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (c, field) => {
            switch (field) {
              case "fullName":
                return c.fullName.toLowerCase()
              case "addedOn":
                return c.addedOn
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 25
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage

          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "New candidate",
        icon: Add,
        onClick: () => {},
      }),
      secondaryActions: () => [
        {
          label: "Suggest candidates",
          icon: Sparkles,
          onClick: () => {},
        },
      ],
    },
    [jobCandidates]
  )

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "ats",
              name: "Recruitment",
              href: "/p/recruitment",
            }}
            breadcrumbs={[
              { id: "jobs", label: "Jobs", onClick: onBack },
              { id: "detail", label: job.title },
            ]}
          />
          <ResourceHeader
            title={job.title}
            primaryAction={{
              label: "Unlist",
              onClick: () => {},
            }}
            secondaryActions={[
              { label: "Edit", icon: Pencil, onClick: () => {} },
            ]}
            otherActions={[
              { label: "Archive", icon: Archive, onClick: () => {} },
              { label: "Cancel", icon: Cross, onClick: () => {} },
              { label: "Copy URL", icon: LayersFront, onClick: () => {} },
              { label: "Duplicate job opening", icon: LayersFront, onClick: () => {} },
            ]}
          />

          {/* Status + metadata row */}
          <div className="flex items-center gap-3 px-6 pb-3 flex-wrap border-b border-f1-border-secondary">
            <F0TagStatus
              text={statusText(job.status)}
              variant={statusVariant(job.status)}
            />
            <span className="text-f1-foreground-secondary">|</span>
            <F0Text content={`Location  ${job.location}`} variant="body" />
            <span className="text-f1-foreground-secondary">|</span>
            <div className="flex items-center gap-1.5">
              <F0Text content="Hiring team" variant="body" />
              {hiringTeam.length > 0 && (
                <F0AvatarList
                  type="person"
                  avatars={hiringTeam.map((e) => ({
                    firstName: e.fullName.split(" ")[0] ?? "",
                    lastName: e.fullName.split(" ")[1] ?? "",
                    src: e.avatarUrl,
                  }))}
                  size="xs"
                  max={3}
                  layout="compact"
                />
              )}
            </div>
            {job.departmentId && (
              <>
                <span className="text-f1-foreground-secondary">|</span>
                <F0Text
                  content={`Team  ${job.departmentId}`}
                  variant="body"
                />
              </>
            )}
            <span className="text-f1-foreground-secondary">|</span>
            <F0Text content="Preview" variant="body" />
            <a className="text-f1-foreground-info cursor-pointer text-sm">
              Link
            </a>
          </div>

          <Tabs
            key={activeTab}
            tabs={tabsWithNav}
            activeTabId={activeTab}
          />
        </>
      }
    >
      {activeTab === "applications" && (
        <div className="mt-4">
          <OneDataCollection
          source={source}
          visualizations={[
            {
              type: "kanban",
              options: {
                lanes: kanbanLanes,
                onMove: handleMove,
                title: (c: PipelineCandidate) => c.fullName,
                description: (c: PipelineCandidate) => c.source,
                avatar: (c: PipelineCandidate) => ({
                  type: "person" as const,
                  firstName: c.firstName,
                  lastName: c.lastName,
                  src: c.avatarUrl || undefined,
                }),
                metadata: (c: PipelineCandidate) => [
                  {
                    icon: ExternalLink,
                    property: {
                      type: "text" as const,
                      label: "Source",
                      value: c.source,
                    },
                  },
                  {
                    icon: Calendar,
                    property: {
                      type: "text" as const,
                      label: "Added",
                      value: c.addedOn,
                    },
                  },
                ],
              },
            },
            { type: "table", options: { columns: candidateColumns } },
          ]}
        />
        </div>
      )}
      {activeTab !== "applications" && (
        <div className="p-6">
          <F0Text
            content={`The "${detailTabs.find((t) => t.id === activeTab)?.label}" tab is part of the prototype scaffold.`}
            variant="description"
          />
        </div>
      )}
    </Page>
  )
}
