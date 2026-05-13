import { useState } from "react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { F0Dialog } from "@factorialco/f0-react"
import { EyeVisible } from "@factorialco/f0-react/icons/app"

import type { Training } from "@/fixtures"

import { useTrainingsSource, type TrainingsListAction } from "./useTrainingsSource"
import { BulkActionModal, type BulkActionKind } from "./BulkActionModal"

type Props = {
  onAdd: () => void
  onSelect: (training: Training) => void
}

type SimpleDialog = {
  title: string
  description: string
  primaryLabel: string
  critical?: boolean
}

export function TrainingsList({ onAdd, onSelect }: Props) {
  const [bulkAction, setBulkAction] = useState<{
    kind: BulkActionKind
    count: number
    clear: () => void
  } | null>(null)

  const [dialog, setDialog] = useState<SimpleDialog | null>(null)

  const handleAction = (action: TrainingsListAction) => {
    switch (action.kind) {
      case "export":
        setDialog({
          title: "Export trainings",
          description:
            "All trainings matching the current filters will be exported as CSV. The download will start automatically.",
          primaryLabel: "Export",
        })
        break
      case "import":
        setDialog({
          title: "Import trainings from CSV",
          description:
            "Upload a CSV file matching the trainings template. Existing trainings with the same code will be updated.",
          primaryLabel: "Choose file",
        })
        break
      case "import-courses":
        setDialog({
          title: "Import courses from a provider",
          description:
            "Connect a learning provider (Udemy, Coursera, etc.) and bulk-import its catalog into your trainings.",
          primaryLabel: "Continue",
        })
        break
      case "duplicate":
        setDialog({
          title: `Duplicate "${action.training.name}"?`,
          description:
            "A copy of this training will be created in draft status, including its content modules and forms.",
          primaryLabel: "Duplicate",
        })
        break
      case "toggle-catalog":
        setDialog({
          title: action.training.catalog
            ? `Remove "${action.training.name}" from catalog?`
            : `Add "${action.training.name}" to catalog?`,
          description: action.training.catalog
            ? "Employees will no longer be able to discover or self-enrol in this training from the catalog."
            : "Employees will be able to discover and self-enrol in this training from the catalog.",
          primaryLabel: action.training.catalog ? "Remove" : "Add",
        })
        break
      case "delete":
        setDialog({
          title: `Delete "${action.training.name}"?`,
          description:
            "This will permanently delete the training along with its classes, sessions, participants and content. This cannot be undone.",
          primaryLabel: "Delete",
          critical: true,
        })
        break
    }
  }

  const source = useTrainingsSource(onAdd, onSelect, handleAction)

  return (
    <>
    <OneDataCollection
      id="trainings/list/v1"
      source={source}
      onBulkAction={(action, selected, clearSelected) => {
        const allSelected = "allSelected" in selected && selected.allSelected
        const count = allSelected
          ? selected.itemsStatus.length
          : selected.itemsStatus.filter((i) =>
              "checked" in i ? i.checked : false
            ).length
        const kind: BulkActionKind =
          action === "display-catalog"
            ? "show-catalog"
            : action === "hide-catalog"
              ? "hide-catalog"
              : action === "delete"
                ? "delete"
                : "export"
        setBulkAction({ kind, count, clear: clearSelected })
      }}
      visualizations={[
        {
          type: "table",
          options: {
            frozenColumns: 1,
            allowColumnHiding: true,
            columns: [
              {
                label: "Name",
                sorting: "name",
                render: (item) => ({ type: "text", value: item.name }),
              },
              {
                label: "Code",
                render: (item) => ({ type: "text", value: item.code ?? "-" }),
              },
              {
                label: "Participants",
                render: (item) => ({
                  type: "number",
                  value: item.participantCount,
                }),
              },
              {
                label: "Expired participants",
                render: (item) => ({
                  type: "status",
                  value: {
                    status:
                      item.expiredParticipantCount > 0 ? "warning" : "positive",
                    label: String(item.expiredParticipantCount),
                  },
                }),
              },
              {
                label: "Catalog",
                render: (item) =>
                  item.catalog
                    ? {
                        type: "icon",
                        value: { icon: EyeVisible, label: "In catalog" },
                      }
                    : { type: "text", value: "-" },
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
                label: "Type",
                render: (item) => ({
                  type: "tag",
                  value: {
                    label: item.isMandatory ? "Mandatory" : "Non-mandatory",
                    customColor: "#fff",
                  },
                }),
              },
              {
                label: "Tags",
                width: 300,
                render: (item) => ({
                  type: "tagList",
                  value: {
                    type: "raw",
                    tags: item.categories.map((c) => ({ text: c.name })),
                    max: 3,
                  },
                }),
              },
            ],
          },
        },
      ]}
    />

    <BulkActionModal
      open={bulkAction !== null}
      kind={bulkAction?.kind ?? "delete"}
      count={bulkAction?.count ?? 0}
      onClose={() => {
        bulkAction?.clear()
        setBulkAction(null)
      }}
    />

    {dialog && (
      <F0Dialog
        isOpen={true}
        onClose={() => setDialog(null)}
        position="center"
        width="md"
        title={dialog.title}
        description={dialog.description}
        primaryAction={{
          label: dialog.primaryLabel,
          variant: dialog.critical ? "critical" : "default",
          onClick: () => setDialog(null),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setDialog(null),
        }}
      />
    )}
    </>
  )
}
