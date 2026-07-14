import { useState, type ReactNode } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0ButtonToggleGroup } from "@/components/F0ButtonToggleGroup"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { OneEmptyState } from "@/components/OneEmptyState"
import { F0RichTextDisplay } from "@/components/RichText/F0RichTextDisplay"
import {
  type DropdownItem as DropdownItemType,
  type DropdownItemObject,
} from "@/experimental/Navigation/Dropdown"
import {
  Delete,
  Download,
  Ellipsis,
  Maximize,
  Minimize,
  InfoCircleLine,
} from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

interface DashboardItemProps {
  title: string
  description?: string
  isLoading: boolean
  error?: Error
  onRetry?: () => void
  /** Content-area skeleton shown while loading. Each item type provides its own. */
  skeleton?: ReactNode
  children: ReactNode
  /** Download actions shown inside a "Download" submenu */
  actions?: DropdownItemType[]
  /** When true, adds a "Delete" option to the dropdown menu */
  editMode?: boolean
  /** Called when the user clicks the delete action */
  handleDelete?: (itemId: string) => void
  /** Item ID — required when editMode is true for the delete callback */
  itemId?: string
  /** Chart type transform options — rendered as a toggle group in the dropdown */
  chartTypeOptions?: {
    label: string
    value: string
    icon: IconType
    isActive: boolean
    onSelect: () => void
  }[]
  /**
   * Optional markdown explanation of how this item's data is calculated.
   * When present, the dropdown menu shows a "Where does this data come from?"
   * entry that opens a dialog rendering this content as markdown. Hidden
   * entirely when omitted (backwards compatible).
   */
  explanation?: string
  /** Whether this item is currently expanded to fill the grid */
  isFullscreen?: boolean
  /** Called when the user toggles fullscreen from the dropdown */
  onFullscreenChange?: (fullscreen: boolean) => void
}

/**
 * Visual wrapper for a single dashboard widget.
 *
 * Always renders the real header (title + description) since those are
 * known from config. When loading, the content area shows the `skeleton`
 * prop instead of `children`. This eliminates layout shift and lets each
 * item type provide a skeleton that matches its content shape.
 */
export function DashboardItem({
  title,
  description,
  isLoading,
  error,
  onRetry,
  skeleton,
  children,
  actions = [],
  editMode,
  handleDelete,
  itemId,
  chartTypeOptions,
  explanation,
  isFullscreen = false,
  onFullscreenChange,
}: DashboardItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  /**
   * When true, the dropdown menu's content is swapped from the action list
   * to a markdown rendering of `explanation`. The dropdown trigger stays
   * pressed and the menu stays open — the user dismisses by clicking the
   * back arrow at the top of the explanation view, clicking outside, or
   * pressing Esc. Resets to `false` whenever the dropdown closes so the
   * next open always starts on the action list.
   */
  const [isExplanationView, setIsExplanationView] = useState(false)
  const translations = useI18n()

  const handleDropdownOpenChange = (open: boolean) => {
    setIsDropdownOpen(open)
    if (!open) setIsExplanationView(false)
  }

  // Filter to only actionable items (not separators/labels)
  const downloadActions = actions.filter(
    (a): a is DropdownItemObject =>
      !("type" in a) || a.type === "item" || a.type === undefined
  )
  const hasDownloads = downloadActions.length > 0
  const hasDelete = editMode && handleDelete && itemId
  const hasChartTypes = chartTypeOptions && chartTypeOptions.length > 0
  const hasExplanation = !!explanation && explanation.trim().length > 0
  const hasFullscreen = !!onFullscreenChange
  const showMenu = hasDownloads || hasDelete || hasChartTypes || hasExplanation

  if (error) {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary">
        <div className="flex shrink-0 flex-col p-4">
          <h3 className="text-base font-medium text-f1-foreground">{title}</h3>
          {description && (
            <p className="text-base text-f1-foreground-secondary">
              {description}
            </p>
          )}
        </div>
        <div className="min-h-0 flex-1 overflow-auto">
          <OneEmptyState
            variant="critical"
            title={translations.ai.dashboardItem.errorTitle}
            description={error.message}
            actions={
              onRetry
                ? [
                    {
                      type: "default",
                      label: translations.ai.dashboardItem.retry,
                      onClick: onRetry,
                    },
                  ]
                : []
            }
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className="group/dashitem flex h-full flex-col rounded-lg border border-solid border-f1-border-secondary bg-f1-background"
      aria-busy={isLoading ? "true" : undefined}
      aria-live={isLoading ? "polite" : undefined}
    >
      <div className="flex items-start px-4 py-3">
        <div className="flex min-w-0 flex-1 flex-col">
          <OneEllipsis
            tag="h3"
            className="text-base font-semibold text-f1-foreground"
          >
            {title}
          </OneEllipsis>
          {description && (
            <OneEllipsis className="text-base text-f1-foreground-secondary">
              {description}
            </OneEllipsis>
          )}
        </div>
        <div
          className={cn(
            "flex flex-shrink-0 gap-0.5",
            !isFullscreen &&
              `opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover/dashitem:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover/dashitem:sm:opacity-100 ${isDropdownOpen ? "delay-0 sm:opacity-100" : ""}`
          )}
        >
          {hasFullscreen && (
            <ButtonInternal
              label={
                isFullscreen
                  ? translations.actions.collapse
                  : translations.actions.expand
              }
              icon={isFullscreen ? Minimize : Maximize}
              variant="ghost"
              size="md"
              hideLabel
              compact
              onClick={() => onFullscreenChange?.(!isFullscreen)}
            />
          )}
          {showMenu && (
            <DropdownMenu
              open={isDropdownOpen}
              onOpenChange={handleDropdownOpenChange}
            >
              <DropdownMenuTrigger asChild>
                <ButtonInternal
                  label={translations.actions.other}
                  icon={Ellipsis}
                  variant="ghost"
                  size="md"
                  hideLabel
                  pressed={isDropdownOpen}
                  compact
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className={cn("py-1", isExplanationView && "w-96 max-w-[90vw]")}
              >
                {isExplanationView && hasExplanation ? (
                  <div className="px-3 py-2 text-base text-f1-foreground [&>div]:flex [&>div]:flex-col [&>div]:gap-2">
                    <F0RichTextDisplay
                      content={explanation as string}
                      format="markdown"
                    />
                  </div>
                ) : (
                  <>
                    {hasChartTypes && (
                      <div className="mb-1 flex flex-col items-start gap-2 border-0 border-b border-solid border-f1-border-secondary p-3">
                        <OneEllipsis className="text-base font-medium text-f1-foreground-tertiary">
                          {translations.ai.dashboardItem.chartType}
                        </OneEllipsis>
                        <F0ButtonToggleGroup
                          items={chartTypeOptions!.map((opt) => ({
                            value: opt.value,
                            icon: opt.icon,
                            label: opt.label,
                          }))}
                          value={
                            chartTypeOptions!.find((opt) => opt.isActive)?.value
                          }
                          onChange={(value: string) => {
                            chartTypeOptions!
                              .find((opt) => opt.value === value)
                              ?.onSelect()
                          }}
                          size="lg"
                          required
                          withBorder={false}
                          fullWidth
                        />
                      </div>
                    )}
                    {hasExplanation && (
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onSelect={(e) => {
                            e.preventDefault()
                            setIsExplanationView(true)
                          }}
                        >
                          <div className="flex w-full flex-row items-center gap-2">
                            <F0Icon icon={InfoCircleLine} />
                            <span className="flex-1">
                              {translations.ai.dashboardItem.dataExplanation}
                            </span>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    )}

                    {hasDownloads && (
                      <DropdownMenuGroup>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="mx-1 rounded-sm px-2">
                            <div className="flex w-full flex-row items-center gap-2 pr-2">
                              <F0Icon icon={Download} />
                              <span className="flex-1 text-base font-medium">
                                {translations.ai.dataDownload.title}
                              </span>
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              {downloadActions.map((action) => (
                                <DropdownMenuItem
                                  key={action.label}
                                  onClick={action.onClick}
                                >
                                  <div className="flex w-full flex-row items-center gap-2">
                                    {action.icon && (
                                      <F0Icon icon={action.icon} />
                                    )}
                                    <span className="flex-1">
                                      {action.label}
                                    </span>
                                  </div>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      </DropdownMenuGroup>
                    )}
                    {hasDelete && (
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() => {
                            if (isFullscreen) onFullscreenChange?.(false)
                            handleDelete(itemId)
                          }}
                          className={cn("text-f1-foreground-critical")}
                        >
                          <div className="flex w-full flex-row items-center gap-2">
                            <F0Icon icon={Delete} />
                            <span className="flex-1">
                              {translations.actions.delete}
                            </span>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    )}
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
      <div className="min-h-0 flex-1">{isLoading ? skeleton : children}</div>
    </div>
  )
}
