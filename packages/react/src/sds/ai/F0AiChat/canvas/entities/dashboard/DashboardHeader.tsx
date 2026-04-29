import { useCallback, useEffect, useMemo, useState } from "react"

import { Cross, Download } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { useL10n } from "@/lib/providers/l10n"
import { ResourceHeader } from "@/patterns/ResourceHeader"

import type { DashboardCanvasContent } from "../../../types"
import type { DashboardMetadata } from "./types"

import { useAiChat } from "../../../providers/AiChatStateProvider"
import { useDashboardCanvas } from "./DashboardContext"

/**
 * Canvas header for the dashboard entity. Layout, title, status tag,
 * metadata strip, and the action row (export + close) are all delegated
 * to `ResourceHeader`. The close button is just another `secondaryAction`
 * with `hideLabel`, so the shared header component doesn't need to know
 * about canvas-specific close affordances.
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
  // Clear immediately on id change so we never flash the previous dashboard's
  // metadata while the new request is in flight. `isCurrent` then prevents a
  // late-arriving stale resolution from overwriting fresh state.
  useEffect(() => {
    setMetadata(null)

    if (!savedDashboardId || !getMetadata) {
      return
    }

    let isCurrent = true
    void (async () => {
      try {
        const result = await getMetadata(savedDashboardId)
        if (!isCurrent) return
        setMetadata(result ?? null)
      } catch (error) {
        if (!isCurrent) return
        console.warn("Failed to load dashboard metadata", {
          dashboardId: savedDashboardId,
          error,
        })
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

  // Close button rendered as the last secondary action (icon-only via
  // `hideLabel`). Keeps it visually grouped with Export and lets
  // `ResourceHeader` own the responsive action row.
  const secondaryActions = useMemo(() => {
    const actions = []
    if (exportAsExcel) {
      actions.push({
        label: t("ai.dataDownload.export"),
        icon: Download,
        onClick: handleExport,
        loading: isExporting,
      })
    }
    actions.push({
      label: t("ai.closeDashboard"),
      icon: Cross,
      hideLabel: true,
      onClick: onClose,
    })
    return actions
  }, [exportAsExcel, isExporting, handleExport, onClose, t])

  // Status tag: Saved (has id+category, no pending iteration), Unsaved (has
  // id+category but iteration not persisted), Draft (missing either). Both
  // fields are required to persist externally (see `DashboardContent.handleSave`
  // / `isSavedDashboard`), so the tag follows the same gate to stay consistent
  // with the actions the user can actually take.
  const isSaved = Boolean(
    content.savedDashboardId && content.savedDashboardCategory
  )
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
    />
  )
}
