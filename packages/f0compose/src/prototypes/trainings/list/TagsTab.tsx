import { useState } from "react"
import { useDataCollectionSource, OneDataCollection, Input } from "@factorialco/f0-react/dist/experimental"
import { F0Dialog } from "@factorialco/f0-react"
import { Add, Delete } from "@factorialco/f0-react/icons/app"

import { trainingCategories, type TrainingCategory } from "@/fixtures"
import { applySort } from "@/lib/applySort"

export function TagsTab() {
  const [creating, setCreating] = useState<{ name: string } | null>(null)
  const [deleting, setDeleting] = useState<TrainingCategory | null>(null)

  const source = useDataCollectionSource<TrainingCategory>(
    {
      search: { enabled: true, sync: true },
      sortings: {
        name: { label: "Name" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 30,
        fetchData: ({ search, sortings, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = trainingCategories.filter((c) =>
            term === "" ? true : c.name.toLowerCase().includes(term)
          )
          const sorted = applySort(filtered, sortings, (c, field) => {
            if (field === "name") return c.name.toLowerCase()
            return null
          })
          const perPage = pagination?.perPage ?? 30
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = sorted.slice(start, start + perPage)
          return { type: "pages" as const, records, total, perPage, currentPage, pagesCount }
        },
      },
      primaryActions: () => ({
        label: "Add tag",
        icon: Add,
        onClick: () => setCreating({ name: "" }),
      }),
      itemActions: (item) => [
        {
          label: "Delete",
          icon: Delete,
          onClick: () => setDeleting(item),
          critical: true,
        },
      ],
    },
    []
  )

  return (
    <>
    <OneDataCollection
      id="trainings/tags/v1"
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              {
                label: "Name",
                sorting: "name",
                render: (item) => ({ type: "text", value: item.name }),
              },
            ],
          },
        },
      ]}
    />

    {creating && (
      <F0Dialog
        isOpen={true}
        onClose={() => setCreating(null)}
        position="center"
        width="md"
        title="Add tag"
        description="Tags help you categorise trainings and filter them across the catalog."
        primaryAction={{
          label: "Add",
          onClick: () => setCreating(null),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setCreating(null),
        }}
      >
        <div className="flex flex-col gap-4 p-4">
          <Input
            label="Name"
            value={creating.name}
            onChange={(v: string) => setCreating({ name: v })}
            placeholder="e.g. Compliance"
          />
        </div>
      </F0Dialog>
    )}

    {deleting && (
      <F0Dialog
        isOpen={true}
        onClose={() => setDeleting(null)}
        position="center"
        width="md"
        title={`Delete "${deleting.name}"?`}
        description="Trainings using this tag will keep their existing assignment until edited."
        primaryAction={{
          label: "Delete",
          variant: "critical",
          onClick: () => setDeleting(null),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setDeleting(null),
        }}
      />
    )}
    </>
  )
}
