import {
  OneDataCollection,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { Delete, PersonPlus } from "@factorialco/f0-react/icons/app"

import { type TrainingMembership, type TrainingMembershipStatus } from "@/fixtures"
import { applySort } from "@/lib/applySort"

import { membershipStatusLabel } from "../../shared/status"
import { getParticipantsColumns } from "./participantsColumns"

interface Props {
  trainingId: string
}

export function ParticipantsTab({ trainingId }: Props) {
  const { memberships, columns } = getParticipantsColumns(trainingId)

  const source = useDataCollectionSource<TrainingMembership>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: (
              [
                "notstarted",
                "started",
                "completed",
                "partiallycompleted",
                "missing",
              ] as TrainingMembershipStatus[]
            ).map((s) => ({ value: s, label: membershipStatusLabel[s] })),
          },
        },
      },
      presets: [
        { label: "All", filter: {} },
        { label: "Completed", filter: { status: ["completed"] } },
        { label: "In progress", filter: { status: ["started"] } },
        { label: "Not started", filter: { status: ["notstarted"] } },
      ],
      sortings: {
        employee: { label: "Employee" },
        enrolledAt: { label: "Enrolled" },
        status: { label: "Status" },
      },
      primaryActions: () => ({
        label: "Add participants",
        icon: PersonPlus,
        onClick: () => {},
      }),
      itemActions: () => [
        {
          label: "Delete",
          icon: Delete,
          onClick: () => {},
          critical: true,
        },
      ],
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wantedStatus = Array.isArray(filters?.status)
            ? (filters.status as TrainingMembershipStatus[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = memberships
            .filter((m) =>
              wantedStatus.length === 0 ? true : wantedStatus.includes(m.status)
            )
            .filter((m) =>
              term === "" ? true : m.employeeId.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (m, field) => {
            switch (field) {
              case "enrolledAt":
                return Date.parse(m.enrolledAt)
              case "status":
                return m.status
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 20
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
    },
    [trainingId]
  )

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns } },
      ]}
    />
  )
}
