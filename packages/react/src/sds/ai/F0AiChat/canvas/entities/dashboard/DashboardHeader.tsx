import { useCallback, useEffect, useMemo, useState } from "react"

import { Upload } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { useL10n } from "@/lib/providers/l10n"
import { ResourceHeader } from "@/patterns/ResourceHeader"

import type { DashboardCanvasContent } from "../../../types"
import type { DashboardMetadata } from "./types"

import { useAiChat } from "../../../providers/AiChatStateProvider"
import { useDashboardCanvas } from "./DashboardContext"

/**
 * Canvas header for the dashboard entity. Delegates layout, actions, status
 * tag and close button to `ResourceHeader` so the canvas stays visually
 * consistent with other resource surfaces. The export dropdown is threaded
 * through `otherActions`, and the saved/draft/unsaved state is computed from
 * the saved-dashboard metadata on `content`.
 */
export function DashboardHeader({
  content,
  onClose,
}: {
  content: DashboardCanvasContent
  onClose: () => void
}) {
  const { t } = useI18n()
  const { locale } = useL10n()
  const { canvasActions } = useAiChat()
  const { exportAsExcel } = useDashboardCanvas()
  const [isExporting, setIsExporting] = useState(false)
  const [metadata, setMetadata] = useState<DashboardMetadata | null>(null)

  const savedDashboardId = content.savedDashboardId
  const getMetadata = canvasActions?.dashboard?.getMetadata

  // Fetch creator + last-edited only once the dashboard has been persisted.
  // Guarded by `isCurrent` so a rapid id swap (user re-opens a different saved
  // dashboard before the first request resolves) doesn't flash stale metadata.
  useEffect(() => {
    if (!savedDashboardId || !getMetadata) {
      setMetadata(null)
      return
    }

    let isCurrent = true
    void (async () => {
      try {
        const result = await getMetadata(savedDashboardId)
        if (!isCurrent) return
        setMetadata(result ?? null)
      } catch {
        if (!isCurrent) return
        setMetadata(null)
      }
    })()

    return () => {
      isCurrent = false
    }
  }, [savedDashboardId, getMetadata])

  const handleExport = useCallback(async () => {
    if (!exportAsExcel) return
    setIsExporting(true)
    try {
      await exportAsExcel()
    } finally {
      setIsExporting(false)
    }
  }, [exportAsExcel])

  const secondaryActions = useMemo(() => {
    if (!exportAsExcel) return undefined
    return [
      {
        label: t("ai.dataDownload.export"),
        icon: Upload,
        onClick: handleExport,
        loading: isExporting,
      },
    ]
  }, [exportAsExcel, isExporting, handleExport, t])

  // Status tag: Saved (has id, no pending iteration), Unsaved (has id but
  // iteration not persisted), Draft (no id at all). handleSave in
  // DashboardContext requires both id AND category to persist externally —
  // for the purpose of the tag we only gate on id, matching the visible
  // semantics of "has it ever been saved".
  const isSaved = Boolean(content.savedDashboardId)
  const isUnsaved = isSaved && content.savedDashboardUnsaved === true

  const status = isUnsaved
    ? {
        label: t("ai.dashboard.statusLabel"),
        text: t("ai.dashboard.status.unsaved"),
        variant: "warning" as const,
      }
    : isSaved
      ? {
          label: t("ai.dashboard.statusLabel"),
          text: t("ai.dashboard.status.saved"),
          variant: "positive" as const,
        }
      : {
          label: t("ai.dashboard.statusLabel"),
          text: t("ai.dashboard.status.draft"),
          variant: "neutral" as const,
        }

  // Creator avatar + last-edited date surfaced in the metadata strip (not as
  // the main header avatar). This keeps the canvas header compact and groups
  // "who / when" together as a single attribution block. Both rows only
  // render when the host app returned metadata for the saved dashboard.
  const headerMetadata = useMemo(() => {
    if (!metadata) return undefined

    const fullName =
      `${metadata.creator.firstName} ${metadata.creator.lastName}`.trim()

    const editedAt =
      metadata.lastEdited instanceof Date
        ? metadata.lastEdited
        : new Date(metadata.lastEdited)
    const hasValidDate = !Number.isNaN(editedAt.getTime())
    const formattedDate = hasValidDate
      ? editedAt.toLocaleDateString(locale, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : null

    return [
      {
        label: t("ai.dashboard.createdBy"),
        value: {
          type: "avatar" as const,
          variant: {
            type: "person" as const,
            firstName: metadata.creator.firstName,
            lastName: metadata.creator.lastName,
            src: metadata.creator.src,
          },
          text: fullName,
        },
      },
      formattedDate
        ? {
            label: t("ai.dashboard.lastEdited"),
            value: { type: "date" as const, formattedDate },
          }
        : undefined,
    ]
  }, [metadata, locale, t])

  // Title + description precedence: once the dashboard is saved (has an id)
  // the backend metadata is the source of truth — the chat-history snapshot
  // in `content` / `config` can drift if someone edited the dashboard from
  // another surface (e.g. Analytics list page) after this conversation was
  // opened. We prefer metadata values when present, fall back to the
  // history copy otherwise (covers the pre-fetch window and drafts).
  const displayTitle = metadata?.title ?? content.title
  const displayDescription = metadata?.description ?? content.config.description

  return (
    <ResourceHeader
      title={displayTitle}
      description={displayDescription}
      status={status}
      metadata={headerMetadata}
      secondaryActions={secondaryActions}
      onClose={onClose}
      closeLabel={t("ai.closeDashboard")}
    />
  )
}
