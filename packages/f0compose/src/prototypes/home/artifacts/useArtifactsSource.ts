import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Delete, Download, Pencil, Plus } from "@factorialco/f0-react/icons/app"

import { applySort } from "@/lib/applySort"

import { artifacts, type Artifact } from "./artifactsData"

/**
 * The Artifacts collection: one `kind` filter behind the two presets
 * Angel asked for — Documents and Analytics — plus search and a
 * functional sort. No pagination: the set is bounded and small, the same
 * call the Policies screen makes.
 */
export function useArtifactsSource() {
  return useDataCollectionSource<Artifact>(
    {
      filters: {
        kind: {
          type: "in",
          label: "Type",
          options: {
            options: [
              { value: "document", label: "Documents" },
              { value: "analytics", label: "Analytics" },
            ],
          },
        },
      },
      presets: [
        { label: "Documents", filter: { kind: ["document"] } },
        { label: "Analytics", filter: { kind: ["analytics"] } },
      ],
      sortings: {
        lastUpdate: { label: "Last update" },
        name: { label: "Name" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        fetchData: ({ filters, search, sortings }) => {
          const raw = filters?.kind
          const wanted = Array.isArray(raw) ? (raw as string[]) : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = artifacts
            .filter((a) =>
              wanted.length === 0 ? true : wanted.includes(a.kind)
            )
            .filter((a) =>
              term === ""
                ? true
                : a.name.toLowerCase().includes(term) ||
                  a.summary.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (a, field) => {
            switch (field) {
              case "name":
                return a.name.toLowerCase()
              case "lastUpdate":
                return a.updatedDaysAgo
              default:
                return null
            }
          })

          return { records: sorted }
        },
      },
      selectable: (item) => item.id,
      primaryActions: () => ({
        label: "New artifact",
        icon: Plus,
        onClick: () => {},
      }),
      itemActions: (item) => [
        { label: "Open", onClick: () => {} },
        { label: "Rename", icon: Pencil, onClick: () => {} },
        { label: "Download", icon: Download, onClick: () => {} },
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
