import {
  OneDataCollection,
  SectionHeader,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { Delete, Upload } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { F0Alert, F0Box, F0Dialog } from "@factorialco/f0-react"

import {
  filesForTraining,
  type Training,
  type TrainingFile,
} from "@/fixtures"

type Props = { training: Training }

type DialogState =
  | { kind: "none" }
  | { kind: "upload" }
  | { kind: "delete"; file: TrainingFile }

const ICON_BY_TYPE: Record<TrainingFile["type"], string> = {
  pdf: "📄",
  video: "🎬",
  doc: "📝",
  link: "🔗",
  image: "🖼️",
  scorm: "📦",
}

export function DocumentsTab({ training }: Props) {
  const allFiles = filesForTraining(training.id)
  const [dialog, setDialog] = useState<DialogState>({ kind: "none" })

  const source = useDataCollectionSource<TrainingFile>(
    {
      search: { enabled: true, sync: true },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ search, pagination }) => {
          const term = (search ?? "").toLowerCase().trim()
          const filtered = allFiles.filter((f) =>
            term === "" ? true : f.name.toLowerCase().includes(term)
          )
          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = filtered.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = filtered.slice(start, start + perPage)
          return {
            type: "pages" as const,
            records,
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      primaryActions: () => ({
        label: "Upload",
        icon: Upload,
        onClick: () => setDialog({ kind: "upload" }),
      }),
      itemActions: (f: TrainingFile) => [
        {
          label: "Delete",
          icon: Delete,
          onClick: () => setDialog({ kind: "delete", file: f }),
        },
      ],
    },
    [training.id]
  )

  const columns = [
    {
      label: "Name",
      render: (f: TrainingFile) => ({
        type: "text" as const,
        value: `${ICON_BY_TYPE[f.type] ?? "📄"}  ${f.name}`,
      }),
    },
    {
      label: "Size",
      render: (f: TrainingFile) => ({
        type: "text" as const,
        value: f.size ?? "-",
      }),
    },
    {
      label: "Uploaded",
      render: (f: TrainingFile) => ({
        type: "text" as const,
        value: f.uploadedAt.slice(0, 10),
      }),
    },
    {
      label: "Uploaded by",
      render: (f: TrainingFile) => ({
        type: "text" as const,
        value: f.uploadedBy,
      }),
    },
  ]

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <SectionHeader
        title="Documents"
        description="Files visible to admins and HR — internal paperwork, attendance sheets, signed agreements."
        separator="bottom"
      />

      {allFiles.length === 0 ? (
        <F0Alert
          variant="info"
          title="No documents yet"
          description="Upload files to keep all training-related paperwork in one place."
        />
      ) : (
        <OneDataCollection
          id={`trainings/documents-${training.id}/v1`}
          source={source}
          visualizations={[
            {
              type: "table",
              options: {
                frozenColumns: 1,
                allowColumnHiding: true,
                columns,
              },
            },
          ]}
        />
      )}

      <F0Dialog
        open={dialog.kind === "upload"}
        title="Upload document"
        description="Choose a file from your computer to attach to this training."
        primaryAction={{
          label: "Upload",
          onClick: () => setDialog({ kind: "none" }),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setDialog({ kind: "none" }),
        }}
        onClose={() => setDialog({ kind: "none" })}
      >
        <input type="file" />
      </F0Dialog>

      <F0Dialog
        open={dialog.kind === "delete"}
        title="Delete document"
        description={
          dialog.kind === "delete"
            ? `Are you sure you want to delete "${dialog.file.name}"? This action cannot be undone.`
            : ""
        }
        primaryAction={{
          label: "Delete",
          variant: "critical",
          onClick: () => setDialog({ kind: "none" }),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setDialog({ kind: "none" }),
        }}
        onClose={() => setDialog({ kind: "none" })}
      />
    </F0Box>
  )
}
