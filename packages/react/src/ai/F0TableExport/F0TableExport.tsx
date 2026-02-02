import { Markdown } from "@copilotkit/react-ui"

import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { ButtonDropdownItem } from "@/components/F0ButtonDropdown/types"
import { Download } from "@/icons/app"

import { f0MarkdownRenderersSimple } from "../F0MarkdownRenderers"
import { F0TableExportActionItem, F0TableExportProps } from "./types"

/**
 * Converts a base64 string to a Blob
 */
function base64ToBlob(base64: string, mimeType: string): Blob {
  const byteCharacters = atob(base64)
  const byteNumbers = new Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  const byteArray = new Uint8Array(byteNumbers)
  return new Blob([byteArray], { type: mimeType })
}

/**
 * Handles file download from base64 data
 */
function handleDownload(item: F0TableExportActionItem): void {
  if (!item.fileData || !item.mimeType || !item.fileName) {
    console.error("Missing file data for download action")
    return
  }

  const blob = base64ToBlob(item.fileData, item.mimeType)
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = item.fileName
  link.click()
  URL.revokeObjectURL(url)
}

/**
 * Component that renders a table preview with download/action buttons.
 * Use this to display data tables with export options in various formats.
 */
export const F0TableExport = ({
  markdown,
  primaryAction,
  secondaryActions,
}: F0TableExportProps) => {
  const handleActionClick = (item: F0TableExportActionItem) => {
    if (item.type === "download") {
      handleDownload(item)
    }
    // Actions of type "action" are handled by Mastra via frontend tools
  }

  const hasSecondaryActions = secondaryActions && secondaryActions.length > 0

  // Create dropdown items from all actions
  const dropdownItems: ButtonDropdownItem<string>[] = hasSecondaryActions
    ? [
        {
          value: "primary",
          label: primaryAction.label,
          icon: primaryAction.type === "download" ? Download : undefined,
        },
        ...secondaryActions.map((action, index) => ({
          value: action.actionId || `secondary-${index}`,
          label: action.label,
          icon: action.type === "download" ? Download : undefined,
        })),
      ]
    : []

  const handleDropdownClick = (value: string) => {
    if (value === "primary") {
      handleActionClick(primaryAction)
    } else {
      const action = secondaryActions?.find(
        (a, index) => a.actionId === value || `secondary-${index}` === value
      )
      if (action) {
        handleActionClick(action)
      }
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="w-fit max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
        <Markdown content={markdown} components={f0MarkdownRenderersSimple} />
      </div>
      <div className="flex justify-start">
        {hasSecondaryActions ? (
          <F0ButtonDropdown
            variant="outline"
            size="sm"
            items={dropdownItems}
            value="primary"
            onClick={handleDropdownClick}
          />
        ) : (
          <F0Button
            variant="outline"
            size="sm"
            label={primaryAction.label}
            icon={primaryAction.type === "download" ? Download : undefined}
            onClick={() => handleActionClick(primaryAction)}
          />
        )}
      </div>
    </div>
  )
}
