import { F0Box, F0Text } from "@factorialco/f0-react"
import {
  F0ActionBar,
  NotesTextEditor,
} from "@factorialco/f0-react/dist/experimental"
import type { DropdownItem } from "@factorialco/f0-react/dist/experimental"
import {
  ArrowLeft,
  ClockBack,
  Delete,
  Swap,
} from "@factorialco/f0-react/icons/app"
import { useCallback, useState } from "react"

import type { Policy } from "@/fixtures"
import { relativeDate } from "@/fixtures"

import { DeletePageDialog } from "./DeletePageDialog"
import { DiscardDraftDialog } from "./DiscardDraftDialog"
import { MovePageDialog } from "./MovePageDialog"
import { PublishPageDialog } from "./PublishPageDialog"
import type { PoliciesState } from "./usePoliciesState"

type PageDetailProps = {
  page: Policy
  state: PoliciesState
  onBack: () => void
}

/**
 * Policy page detail view — rich text editor with metadata sidebar,
 * action bar, and all action dialogs.
 */
export function PageDetail({ page, state, onBack }: PageDetailProps) {
  const [showPublish, setShowPublish] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [showMove, setShowMove] = useState(false)
  const [showDiscard, setShowDiscard] = useState(false)
  const [showVersionHistory, setShowVersionHistory] = useState(false)
  const [isDirty, setIsDirty] = useState(false)

  const isDraft = page.visibility === "private"
  const wasPublished = page.lastPublishedAt !== null

  const handleTitleChange = useCallback(
    (newTitle: string) => {
      setIsDirty(true)
      state.updatePage(page.id, {
        title: newTitle,
        updatedAt: new Date().toISOString().slice(0, 10),
      })
    },
    [page.id, state]
  )

  const handleContentChange = useCallback(() => {
    setIsDirty(true)
    state.updatePage(page.id, {
      updatedAt: new Date().toISOString().slice(0, 10),
    })
  }, [page.id, state])

  const handlePublish = useCallback(
    (update: Partial<Policy>) => {
      state.updatePage(page.id, update)
      setIsDirty(false)
    },
    [page.id, state]
  )

  const handleDelete = useCallback(() => {
    state.deletePage(page.id)
    onBack()
  }, [page.id, state, onBack])

  const handleMove = useCallback(
    (folder: string) => {
      state.updatePage(page.id, { folder })
    },
    [page.id, state]
  )

  const handleDiscard = useCallback(() => {
    setIsDirty(false)
  }, [])

  // Metadata sidebar items (MetadataItem[])
  const metadata = [
    {
      label: "Status",
      value: {
        type: "status" as const,
        label: isDraft ? "Draft" : "Published",
        variant: isDraft ? ("neutral" as const) : ("positive" as const),
      },
    },
    ...(page.mandatory
      ? [
          {
            label: "Acknowledgements",
            value: {
              type: "text" as const,
              content: `${page.acknowledgedCount} of ${page.totalEmployees} confirmed`,
            },
          },
        ]
      : []),
    {
      label: "Owner",
      value: {
        type: "avatar" as const,
        variant: {
          type: "person" as const,
          firstName: page.ownerName.split(" ")[0] ?? "",
          lastName: page.ownerName.split(" ").slice(1).join(" "),
          src: page.ownerAvatarUrl,
        },
        text: page.ownerName,
      },
    },
    {
      label: "Folder",
      value: {
        type: "text" as const,
        content: isDraft && !page.folder ? "—" : page.folder,
      },
    },
    ...(!isDraft
      ? [
          {
            label: "Visibility",
            value: {
              type: "text" as const,
              content:
                page.visibility === "company" ? "Everyone" : "Specific groups",
            },
          },
        ]
      : []),
    {
      label: "Updated",
      value: {
        type: "text" as const,
        content: isDirty
          ? "Saving..."
          : relativeDate(page.lastPublishedAt ?? page.updatedAt),
      },
    },
  ]

  // Other actions (overflow dropdown)
  const otherActions: DropdownItem[] = [
    ...(page.visibility !== "private"
      ? [
          {
            type: "item" as const,
            label: "Move page",
            icon: Swap,
            onClick: () => setShowMove(true),
          },
        ]
      : []),
    { type: "separator" as const },
    {
      type: "item" as const,
      label: "Delete",
      icon: Delete,
      onClick: () => setShowDelete(true),
      critical: true,
    },
  ]

  // Secondary actions (header icon buttons)
  const secondaryActions = [
    ...(!isDraft
      ? [
          {
            label: "Version history",
            icon: ClockBack,
            onClick: () => setShowVersionHistory(true),
            hideLabel: true,
          },
        ]
      : []),
  ]

  // Get latest page state
  const currentPage = state.getPage(page.id)
  if (!currentPage) return null

  return (
    <F0Box display="flex" flexDirection="column" height="full">
      {/* Back navigation */}
      <F0Box
        display="flex"
        alignItems="center"
        gap="sm"
        padding="md"
        onClick={onBack}
      >
        <ArrowLeft width={16} height={16} />
        <F0Text content="Back to pages" variant="description" />
      </F0Box>

      {/* Editor area */}
      <F0Box display="flex" flexDirection="column">
        <NotesTextEditor
          placeholder="Start writing your policy page..."
          initialEditorState={{
            title: currentPage.title,
            content: SAMPLE_CONTENT,
          }}
          onTitleChange={handleTitleChange}
          titlePlaceholder="Untitled"
          onChange={handleContentChange}
          showBubbleMenu
          metadata={metadata}
          secondaryActions={secondaryActions}
          otherActions={otherActions}
        />
      </F0Box>

      {/* Publish action bar for drafts or dirty published pages */}
      <F0ActionBar
        isOpen={isDraft || isDirty}
        label={
          isDraft
            ? wasPublished
              ? "You have unpublished changes"
              : "This page is a draft"
            : "You have unsaved changes"
        }
        primaryActions={[
          {
            label: isDraft ? "Publish" : "Save",
            onClick: () => {
              if (isDraft) {
                setShowPublish(true)
              } else {
                setIsDirty(false)
              }
            },
          },
        ]}
        secondaryActions={
          wasPublished && isDraft
            ? [
                {
                  label: "Discard",
                  onClick: () => setShowDiscard(true),
                },
              ]
            : undefined
        }
      />

      {/* Dialogs */}
      <PublishPageDialog
        page={currentPage}
        open={showPublish}
        onClose={() => setShowPublish(false)}
        onPublish={handlePublish}
      />
      <DeletePageDialog
        page={currentPage}
        open={showDelete}
        onClose={() => setShowDelete(false)}
        onDelete={handleDelete}
      />
      <MovePageDialog
        page={currentPage}
        open={showMove}
        onClose={() => setShowMove(false)}
        onMove={handleMove}
      />
      <DiscardDraftDialog
        open={showDiscard}
        onClose={() => setShowDiscard(false)}
        onDiscard={handleDiscard}
      />

      {/* Version history overlay */}
      {showVersionHistory && (
        <VersionHistoryOverlay onClose={() => setShowVersionHistory(false)} />
      )}
    </F0Box>
  )
}

/** Placeholder version history overlay. */
function VersionHistoryOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 600,
          backgroundColor: "var(--background-primary, #fff)",
          borderRadius: 12,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <F0Text content="Version history" variant="label" />
        <F0Box display="flex" flexDirection="column" gap="sm">
          <VersionEntry label="Current version" date="Today" isCurrent />
          <VersionEntry label="Published v3" date="3 weeks ago" />
          <VersionEntry label="Published v2" date="2 months ago" />
          <VersionEntry label="Published v1" date="5 months ago" />
        </F0Box>
        <F0Box display="flex" justifyContent="end">
          <button
            onClick={onClose}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              border: "1px solid #e5e7eb",
              backgroundColor: "transparent",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </F0Box>
      </div>
    </div>
  )
}

function VersionEntry({
  label,
  date,
  isCurrent,
}: {
  label: string
  date: string
  isCurrent?: boolean
}) {
  return (
    <F0Box
      display="flex"
      justifyContent="between"
      alignItems="center"
      padding="sm"
      borderRadius="sm"
      background={isCurrent ? "selected" : "secondary"}
    >
      <F0Text content={label} variant="body" />
      <F0Text content={date} variant="description" />
    </F0Box>
  )
}

/** Sample JSON content for the rich text editor. */
const SAMPLE_CONTENT = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This is a sample policy page. You can edit the content here using the rich text editor.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Use the toolbar to format text, add headings, lists, and more. Changes are auto-saved.",
        },
      ],
    },
  ],
}
