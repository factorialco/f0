import { useState } from "react"
import { useDataCollectionSource, OneDataCollection, Input } from "@factorialco/f0-react/dist/experimental"
import { F0Dialog } from "@factorialco/f0-react"
import { Add, Delete, Pencil } from "@factorialco/f0-react/icons/app"

import { avatarFor } from "@/fixtures"
import { applySort } from "@/lib/applySort"

type SurveyTemplate = {
  id: string
  name: string
  formType: "satisfaction" | "effectiveness" | "knowledge"
  status: "active" | "draft"
  authorName: string
  authorAvatar: string
}

const FORM_TYPE_LABEL: Record<string, string> = {
  satisfaction: "Satisfaction",
  effectiveness: "Effectiveness",
  knowledge: "Knowledge",
}

const FORM_TYPE_COLOR: Record<string, string> = {
  satisfaction: "#F59E0B",
  effectiveness: "#3B82F6",
  knowledge: "#8B5CF6",
}

const surveyTemplates: SurveyTemplate[] = [
  {
    id: "st-001",
    name: "Post-training satisfaction survey",
    formType: "satisfaction",
    status: "active",
    authorName: "Javier Molina",
    authorAvatar: avatarFor("emp-001"),
  },
  {
    id: "st-002",
    name: "Knowledge assessment – Compliance",
    formType: "knowledge",
    status: "active",
    authorName: "Ana García",
    authorAvatar: avatarFor("emp-003"),
  },
  {
    id: "st-003",
    name: "Training effectiveness evaluation",
    formType: "effectiveness",
    status: "active",
    authorName: "Laura Soler",
    authorAvatar: avatarFor("emp-002"),
  },
  {
    id: "st-004",
    name: "Manager feedback form (draft)",
    formType: "satisfaction",
    status: "draft",
    authorName: "Javier Molina",
    authorAvatar: avatarFor("emp-001"),
  },
]

export function SurveyTemplatesTab() {
  const [editing, setEditing] = useState<{
    mode: "create" | "edit"
    template?: SurveyTemplate
    name: string
  } | null>(null)
  const [deleting, setDeleting] = useState<SurveyTemplate | null>(null)

  const source = useDataCollectionSource<SurveyTemplate>(
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
          const filtered = surveyTemplates.filter((t) =>
            term === "" ? true : t.name.toLowerCase().includes(term)
          )
          const sorted = applySort(filtered, sortings, (t, field) => {
            if (field === "name") return t.name.toLowerCase()
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
        label: "New survey",
        icon: Add,
        onClick: () => setEditing({ mode: "create", name: "" }),
      }),
      itemActions: (item) => [
        {
          label: "Edit",
          icon: Pencil,
          onClick: () =>
            setEditing({ mode: "edit", template: item, name: item.name }),
        },
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
      id="trainings/survey-templates/v1"
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
              {
                label: "Type",
                render: (item) => ({
                  type: "tag",
                  value: {
                    label: FORM_TYPE_LABEL[item.formType] ?? item.formType,
                    customColor: FORM_TYPE_COLOR[item.formType] ?? "#ccc",
                  },
                }),
              },
              {
                label: "Status",
                render: (item) => ({
                  type: "status",
                  value: {
                    status: item.status === "active" ? "positive" : "neutral",
                    label: item.status === "active" ? "Published" : "Draft",
                  },
                }),
              },
              {
                label: "Author",
                render: (item) => ({
                  type: "person",
                  value: {
                    firstName: item.authorName.split(" ")[0] ?? "",
                    lastName: item.authorName.split(" ").slice(1).join(" "),
                    src: item.authorAvatar,
                  },
                }),
              },
            ],
          },
        },
      ]}
    />

    {editing && (
      <F0Dialog
        isOpen={true}
        onClose={() => setEditing(null)}
        position="center"
        width="md"
        title={editing.mode === "create" ? "New survey template" : "Edit survey template"}
        description="Survey templates can be reused across trainings to collect feedback or assess knowledge."
        primaryAction={{
          label: editing.mode === "create" ? "Create" : "Save",
          onClick: () => setEditing(null),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setEditing(null),
        }}
      >
        <div className="flex flex-col gap-4 p-4">
          <Input
            label="Name"
            value={editing.name}
            onChange={(v: string) => setEditing({ ...editing, name: v })}
            placeholder="e.g. Post-training satisfaction survey"
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
        description="This template will no longer be available when creating new forms. Existing forms based on it will not be affected."
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
