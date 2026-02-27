import { Markdown } from "@copilotkit/react-ui"

import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { ButtonDropdownItem } from "@/components/F0ButtonDropdown/types"
import Download from "@/icons/app/Download"

import { f0MarkdownRenderersSimple } from "../F0MarkdownRenderers"
import { F0DataDownloadActionItem, F0DataDownloadProps } from "./types"

/**
 * Opens the download URL in a new tab.
 */
function handleDownload(item: F0DataDownloadActionItem): void {
  if (!item.downloadUrl) {
    console.error("Missing download URL for download action")
    return
  }

  window.open(item.downloadUrl, "_blank", "noopener,noreferrer")
}

/**
 * Component that renders an optional markdown preview followed by
 * download buttons. When a single action is provided, a plain button
 * is rendered; when secondary actions exist, a split-button dropdown
 * is shown instead.
 */
export const F0DataDownload = ({
  markdown,
  primaryAction,
  secondaryActions,
}: F0DataDownloadProps) => {
  const hasSecondaryActions = secondaryActions && secondaryActions.length > 0

  // Build dropdown items when there are secondary actions
  const dropdownItems: ButtonDropdownItem<string>[] = hasSecondaryActions
    ? [
        {
          value: "primary",
          label: primaryAction.label,
          icon: Download,
        },
        ...secondaryActions.map((action, index) => ({
          value: `secondary-${index}`,
          label: action.label,
          icon: Download,
        })),
      ]
    : []

  const handleDropdownClick = (value: string) => {
    if (value === "primary") {
      handleDownload(primaryAction)
    } else {
      const index = parseInt(value.replace("secondary-", ""), 10)
      const action = secondaryActions?.[index]
      if (action) {
        handleDownload(action)
      }
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {markdown && (
        <div className="w-fit max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
          <Markdown content={markdown} components={f0MarkdownRenderersSimple} />
        </div>
      )}
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
            icon={Download}
            onClick={() => handleDownload(primaryAction)}
          />
        )}
      </div>
    </div>
  )
}
