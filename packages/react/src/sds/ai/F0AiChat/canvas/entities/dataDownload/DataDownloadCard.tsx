import { useI18n } from "@/lib/providers/i18n"

import type { DataDownloadDataset } from "../../../actions/core/dataDownload/types"
import type { DataDownloadCanvasContent } from "../../../types"

import {
  Table,
  Td,
  Th,
} from "../../../components/markdownRenderers/components/Table"
import { useToolCallId } from "../../../components/messages/AssistantMessage"
import { useAutoOpenCanvas } from "../../../hooks/useAutoOpenCanvas"
import { useAiChat } from "../../../providers/AiChatStateProvider"
import { CanvasCard } from "../../components/CanvasCard"

/**
 * Below this row count we render the dataset inline as a markdown-style
 * table instead of opening the canvas. The threshold is exclusive.
 */
const INLINE_TABLE_MAX_ROWS = 15

export type DataDownloadCardProps = {
  title?: string
  dataset: DataDownloadDataset
  filename?: string
  markdown?: string
}

export function DataDownloadCard({
  title: titleProp,
  dataset,
  filename,
  markdown,
}: DataDownloadCardProps) {
  const translations = useI18n()
  const toolCallId = useToolCallId()
  const { canvasContent, openCanvas, closeCanvas } = useAiChat()

  const cleanFilename = filename?.replaceAll("_", " ")

  const title = titleProp || cleanFilename || translations.ai.dataDownload.title

  // Render inline only when the rows we have represent the complete
  // dataset and it's small enough to display in the chat thread.
  const hasFullDataset =
    dataset.totalCount == null || dataset.totalCount <= dataset.rows.length
  const renderInline =
    hasFullDataset && dataset.rows.length < INLINE_TABLE_MAX_ROWS

  const isActive =
    canvasContent?.type === "dataDownload" &&
    canvasContent.toolCallId != null &&
    canvasContent.toolCallId === toolCallId

  const handleOpen = () =>
    openCanvas({
      type: "dataDownload",
      title,
      dataset,
      filename,
      markdown,
      toolCallId,
    } satisfies DataDownloadCanvasContent)

  // Skip auto-opening the canvas when we render inline.
  useAutoOpenCanvas(renderInline ? undefined : toolCallId, handleOpen)

  if (renderInline) {
    return (
      <Table title={title}>
        <thead>
          <tr>
            {dataset.columns.map((col) => (
              <Th key={col}>{dataset.columnLabels?.[col] ?? col}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataset.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {dataset.columns.map((col) => {
                const value = row[col]
                return <Td key={col}>{value == null ? "" : String(value)}</Td>
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }

  return (
    <CanvasCard
      module="analytics"
      title={title}
      description={
        dataset.totalCount != null
          ? `${dataset.totalCount} ${translations.ai.dataDownload.rows}`
          : translations.ai.dataDownload.title
      }
      onOpen={handleOpen}
      onClose={() => closeCanvas()}
      isActive={isActive}
    />
  )
}

DataDownloadCard.displayName = "DataDownloadCard"
