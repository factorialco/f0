import NumberFlow from "@number-flow/react"
import { forwardRef, useMemo } from "react"

import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0Button } from "@/components/F0Button"
import {
  type ActionBarGroup,
  type ActionBarItem,
  type ActionBarStatus,
  F0ActionBar,
  type F0ActionBarRef,
} from "@/components/F0ActionBar"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"

export type { ActionBarGroup, ActionBarItem, ActionBarStatus, F0ActionBarRef }

interface OneDataCollectionActionBarProps {
  isOpen: boolean
  primaryActions?: ActionBarItem[] | ActionBarGroup[] | ActionBarGroup
  secondaryActions?: ActionBarItem[]
  selectedNumber?: number
  onUnselect?: () => void
  warningMessage?: string
  allPagesSelection?: boolean
  isAllItemsSelected?: boolean
  totalItems?: number
  status?: ActionBarStatus
}

const WarningAlert = ({ message }: { message: string }) => (
  <div className="flex w-full flex-row items-center gap-2 rounded-md bg-f1-background-warning p-2">
    <F0AvatarAlert type="warning" size="sm" />
    <p className="flex-1 font-medium text-f1-foreground-warning">{message}</p>
  </div>
)

export const OneDataCollectionActionBar = forwardRef<
  F0ActionBarRef,
  OneDataCollectionActionBarProps
>(function OneDataCollectionActionBar(
  {
    isOpen,
    primaryActions,
    secondaryActions,
    selectedNumber,
    onUnselect,
    warningMessage,
    allPagesSelection = false,
    isAllItemsSelected = false,
    totalItems,
    status,
  },
  ref
) {
  const { t, ...i18n } = useI18n()

  const selectedText =
    selectedNumber === 1
      ? i18n.status.selected.singular
      : i18n.status.selected.plural

  const showAllItemsSelected =
    allPagesSelection && isAllItemsSelected && totalItems !== undefined

  // Prevent the Unselect button from clearing the selection while a bulk
  // action is in-flight. If it were clickable during loading/success, the
  // selection could be wiped before a rejected promise gets a chance to
  // preserve it for retry.
  const isInteractionDisabled = status === "loading" || status === "success"

  const leftContent = useMemo(() => {
    if (!warningMessage && !selectedNumber) {
      return null
    }
    return (
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        {warningMessage && <WarningAlert message={warningMessage} />}
        {!!selectedNumber && (
          <div className="dark flex h-8 w-full items-center justify-between gap-3 px-2 sm:h-auto sm:w-fit sm:justify-start sm:pl-2 sm:pr-0">
            {showAllItemsSelected ? (
              <span className="font-medium tabular-nums">
                {t("status.selected.allItemsSelected", {
                  total: totalItems ?? 0,
                })}
              </span>
            ) : (
              <span className="flex items-center gap-1 font-medium tabular-nums">
                <NumberFlow
                  value={selectedNumber}
                  spinTiming={{
                    duration: 200,
                    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                />
                <OneEllipsis className="text-f1-foreground">
                  {selectedText}
                </OneEllipsis>
              </span>
            )}
            <F0Button
              variant="outline"
              label={i18n.actions.unselect}
              onClick={onUnselect}
              disabled={isInteractionDisabled}
              size="sm"
            />
          </div>
        )}
      </div>
    )
  }, [
    warningMessage,
    selectedNumber,
    showAllItemsSelected,
    totalItems,
    selectedText,
    onUnselect,
    isInteractionDisabled,
    i18n.actions.unselect,
    t,
  ])

  return (
    <F0ActionBar
      ref={ref}
      isOpen={isOpen}
      variant="dark"
      status={status}
      leftContent={leftContent}
      primaryActions={warningMessage ? [] : primaryActions}
      secondaryActions={warningMessage ? [] : secondaryActions}
    />
  )
})

OneDataCollectionActionBar.displayName = "OneDataCollectionActionBar"
