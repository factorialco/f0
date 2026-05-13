import {
  OneDataCollection,
  SectionHeader,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  Delete,
  File as FileIcon,
  Link as LinkIcon,
  Upload,
} from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { F0Box, F0Dialog } from "@factorialco/f0-react"

import { filesForTraining, type Training, type TrainingFile } from "@/fixtures"

type Props = { training: Training }

type DialogState =
  | { kind: "none" }
  | { kind: "newFile" }
  | { kind: "newLink" }
  | { kind: "delete"; item: TrainingFile }

function getSortableTitle(f: TrainingFile): string {
  return f.name
}

export function AttachmentsTab({ training }: Props) {
  const allFiles = filesForTraining(training.id).slice().sort((a, b) =>
    getSortableTitle(a) > getSortableTitle(b) ? 1 : -1
  )
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
            term === "" ? true : getSortableTitle(f).toLowerCase().includes(term)
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
        onClick: () => setDialog({ kind: "newFile" }),
      }),
      secondaryActions: {
        expanded: 1,
        actions: () => [
          {
            label: "New link",
            icon: LinkIcon,
            onClick: () => setDialog({ kind: "newLink" }),
          },
        ],
      },
      itemActions: (f: TrainingFile) => [
        {
          label: "Delete",
          icon: Delete,
          onClick: () => setDialog({ kind: "delete", item: f }),
        },
      ],
    },
    [training.id]
  )

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <SectionHeader
        title="Materials"
        description="Files and links shared with participants — handbooks, slides, videos, external resources."
        separator="bottom"
      />

      <OneDataCollection
        id={`trainings/materials-${training.id}/v1`}
        source={source}
        emptyStates={{
          "no-data": {
            title: "No materials yet",
            description:
              "Upload files or add links to share resources with this training's participants.",
          },
        }}
        visualizations={[
          {
            type: "card",
            options: {
              title: (item: TrainingFile) => item.name,
              description: (item: TrainingFile) =>
                item.type === "link" ? "" : item.size ?? "",
              cardProperties: [
                {
                  label: "",
                  icon: LinkIcon,
                  render: (item: TrainingFile) => {
                    if (item.type !== "link") return
                    return { type: "text" as const, value: item.url }
                  },
                },
                {
                  label: "",
                  icon: FileIcon,
                  render: (item: TrainingFile) => {
                    if (item.type === "link") return
                    return {
                      type: "file" as const,
                      value: { name: item.name, type: item.type },
                    }
                  },
                },
              ],
            },
          },
        ]}
      />

      <F0Dialog
        open={dialog.kind === "newFile"}
        title="Upload material"
        description="Choose a file from your computer to share with participants."
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
        open={dialog.kind === "newLink"}
        title="Add link"
        description="Paste a URL to share an external resource with participants."
        primaryAction={{
          label: "Add",
          onClick: () => setDialog({ kind: "none" }),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setDialog({ kind: "none" }),
        }}
        onClose={() => setDialog({ kind: "none" })}
      >
        <input type="url" placeholder="https://" />
      </F0Dialog>

      <F0Dialog
        open={dialog.kind === "delete"}
        title="Delete material"
        description={
          dialog.kind === "delete"
            ? `Are you sure you want to delete "${dialog.item.name}"? This action cannot be undone.`
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
