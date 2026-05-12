import NumberFlow from "@number-flow/react"
import { forwardRef, useEffect, useMemo, useRef } from "react"

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

/**
 * Walks any supported primaryActions shape and marks every action as
 * loading + disabled. Used to shift the loading indicator from the bar level
 * down to the button/dropdown level.
 */
function withLoadingOnActions(
  actions: ActionBarItem[] | ActionBarGroup[] | ActionBarGroup
): ActionBarItem[] | ActionBarGroup[] | ActionBarGroup {
  const markItem = (item: ActionBarItem): ActionBarItem => ({
    ...item,
    loading: true,
    disabled: true,
  })

  if (Array.isArray(actions)) {
    // Discriminate between ActionBarItem[] and ActionBarGroup[] — the two
    // shapes are mutually exclusive in the ActionBarItem[] | ActionBarGroup[]
    // union, so we can check the first element to decide.
    if (actions.length === 0 || !("items" in actions[0])) {
      return (actions as ActionBarItem[]).map(markItem)
    }
    return (actions as ActionBarGroup[]).map((group) => ({
      ...group,
      items: group.items.map(markItem),
    }))
  }

  // Single ActionBarGroup
  return { ...actions, items: actions.items.map(markItem) }
}

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

  // Keep a snapshot of the last known selectedNumber so the leftContent area
  // (counter + Unselect button) doesn't vanish during the brief success state.
  // Selection is cleared as soon as the promise resolves, but the bar stays
  // open for ~1.5s to show the checkmark — without this the bar shrinks
  // abruptly as leftContent disappears.
  const lastSelectedNumberRef = useRef(selectedNumber ?? 0)
  useEffect(() => {
    if (selectedNumber) lastSelectedNumberRef.current = selectedNumber
  }, [selectedNumber])
  const displayedSelectedNumber =
    isInteractionDisabled && !selectedNumber
      ? lastSelectedNumberRef.current
      : selectedNumber

  // During loading we push the spinner down to the button/dropdown level
  // instead of showing a bar-level StatusIcon. For success and error the
  // bar-level StatusIcon is the right feedback (no button equivalent exists
  // for those states), so we pass those through unchanged.
  const actionBarStatus = status === "loading" ? "idle" : status

  const resolvedPrimaryActions = useMemo(() => {
    if (warningMessage || !primaryActions) return []
    if (status !== "loading") return primaryActions
    return withLoadingOnActions(primaryActions)
  }, [primaryActions, status, warningMessage])

  const resolvedSecondaryActions = useMemo(() => {
    if (warningMessage || !secondaryActions) return []
    if (status !== "loading") return secondaryActions
    return secondaryActions.map((a) => ({ ...a, disabled: true }))
  }, [secondaryActions, status, warningMessage])

  const leftContent = useMemo(() => {
    if (!warningMessage && !displayedSelectedNumber) {
      return null
    }
    return (
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        {warningMessage && <WarningAlert message={warningMessage} />}
        {!!displayedSelectedNumber && (
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
                  value={displayedSelectedNumber}
                  className="text-f1-foreground"
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
    displayedSelectedNumber,
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
      status={actionBarStatus}
      leftContent={leftContent}
      primaryActions={resolvedPrimaryActions}
      secondaryActions={resolvedSecondaryActions}
    />
  )
})

OneDataCollectionActionBar.displayName = "OneDataCollectionActionBar"
