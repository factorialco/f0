import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Delete, Pencil, Upload } from "@factorialco/f0-react/icons/app"

import { applySort } from "@/lib/applySort"

import { policies, type Policy } from "./policiesData"

/**
 * useDataCollectionSource setup for the Policies screen (Figma
 * 1350:190929):
 * - Status filter + presets (Published / Draft / Outdated).
 * - Search by policy name.
 * - Functional sort by name / last update.
 * - No pagination: the dataset is bounded and tiny (8 rows).
 * - "Upload documents" primary + "Start new" secondary, per-row actions.
 */
export function usePoliciesSource() {
  return useDataCollectionSource<Policy>(
    {
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "published", label: "Published" },
              { value: "draft", label: "Draft" },
              { value: "outdated", label: "Outdated" },
            ],
          },
        },
      },
      presets: [
        { label: "Published", filter: { status: ["published"] } },
        { label: "Draft", filter: { status: ["draft"] } },
        { label: "Outdated", filter: { status: ["outdated"] } },
      ],
      sortings: {
        name: { label: "Policy name" },
        lastUpdate: { label: "Last update" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        fetchData: ({ filters, search, sortings }) => {
          const raw = filters?.status
          const wanted = Array.isArray(raw) ? (raw as string[]) : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = policies
            .filter((p) =>
              wanted.length === 0 ? true : wanted.includes(p.status)
            )
            .filter((p) =>
              term === "" ? true : p.name.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (p, field) => {
            switch (field) {
              case "name":
                return p.name.toLowerCase()
              case "lastUpdate":
                return p.updatedDaysAgo
              default:
                return null
            }
          })

          return { records: sorted }
        },
      },
      selectable: (item) => item.id,
      primaryActions: () => ({
        label: "Upload documents",
        icon: Upload,
        onClick: () => {},
      }),
      secondaryActions: () => [
        { label: "Start new", icon: Pencil, onClick: () => {} },
      ],
      itemActions: (item) => [
        { label: "Open", onClick: () => {} },
        { label: "Edit", icon: Pencil, onClick: () => {} },
        { type: "separator" },
        {
          label: "Delete",
          icon: Delete,
          onClick: () => {},
          critical: true,
          description: `Deletes "${item.name}"`,
        },
      ],
    },
    []
  )
}
