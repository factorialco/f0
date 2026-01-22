import NumberFlow from "@number-flow/react"
import { AnimatePresence, motion } from "motion/react"
import { Fragment, useCallback, useMemo } from "react"

import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0Button } from "@/components/F0Button"
import {
  ButtonDropdownGroup,
  F0ButtonDropdown,
} from "@/components/F0ButtonDropdown"
import { IconType } from "@/components/F0Icon"
import { Dropdown, MobileDropdown } from "@/experimental/Navigation/Dropdown"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

type ActionType = {
  label: string
  icon?: IconType
  onClick?: () => void
  disabled?: boolean
  critical?: boolean
  description?: string
}

export type ActionBarGroup = {
  label?: string
  items: ActionBarItem[]
}

export type ActionBarItem = ActionType

function isActionGroup(
  item: ActionBarItem | ActionBarGroup
): item is ActionBarGroup {
  return "items" in item
}

/**
 * Normalize the items to an array of DropdownButtonGroup
 */
const normalizeItems = (
  items: ActionType[] | ActionBarGroup[] | ActionBarGroup
): ActionBarGroup[] => {
  if (Array.isArray(items)) {
    if (items.every((item) => isActionGroup(item))) {
      // ActionBarGroup[]
      return items
    } else {
      // ActionType[]
      return [
        {
          items: items,
        },
      ]
    }
  } else {
    // ActionBarGroup
    return [items]
  }
}

interface ActionBarProps {
  /**
   * Whether the action bar is open
   */
  isOpen: boolean

  /**
   * The primary action
   */
  primaryActions?: ActionBarItem[] | ActionBarGroup[] | ActionBarGroup

  /**
   * The secondary actions
   */
  secondaryActions?: ActionBarItem[]

  /**
   * The number of selected items. If not defined, the action bar will not show the selected items count and the unselect button.
   * @default undefined
   */
  selectedNumber?: number

  /**
   * The function to unselect the items
   */
  onUnselect?: () => void

  /**
   * The warning message to show in the action bar
   */
  warningMessage?: string
}

const Alert = ({ message }: { message: string }) => {
  return (
    <div className="flex w-full flex-row items-center gap-2 rounded-md bg-f1-background-warning p-2">
      <F0AvatarAlert type="warning" size="sm" />
      <p className="flex-1 font-medium text-f1-foreground-warning">{message}</p>
    </div>
  )
}

export const ActionBar = ({
  isOpen,
  secondaryActions = [],
  selectedNumber = undefined,
  onUnselect,
  warningMessage,
  ...props
}: ActionBarProps) => {
  const i18n = useI18n()

  const selectedText =
    selectedNumber === 1
      ? i18n.status.selected.singular
      : i18n.status.selected.plural

  const visibleSecondaryActions = secondaryActions.slice(0, 2)
  const dropdownActions = secondaryActions.slice(2).map((action) => ({
    ...action,
    critical: action.critical || false,
  }))

  /**
   * Normalize the primary actions to be a list of groups
   */
  const primaryActions = useMemo(
    () => normalizeItems(props.primaryActions ?? []),
    [props.primaryActions]
  )

  /**
   * Transforms the normalized primary actions into a format suitable for dropdown components.
   * Each action group and its items are mapped to the expected dropdown item structure.
   */
  const primaryActionsDropdownItems = useMemo<ButtonDropdownGroup[]>(() => {
    {
      return primaryActions.map((group) => ({
        ...group,
        items: group.items.map((item) => ({
          value: item.label,
          label: item.label,
          icon: item.icon,
          critical: item.critical,
          description: item.description,
          disabled: item.disabled,
        })),
      }))
    }
  }, [primaryActions])

  const singlePrimaryAction = useMemo(() => {
    return primaryActions.length === 1 && primaryActions[0].items.length === 1
      ? primaryActions[0].items[0]
      : null
  }, [primaryActions])

  const getActionByValue = useCallback(
    (value: string) => {
      return primaryActions
        .flatMap((group) => group.items)
        .find((item) => item.label === value)
    },
    [primaryActions]
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          transition={{ ease: [0.175, 0.885, 0.32, 1.275], duration: 0.3 }}
          className={cn(
            "fixed bottom-2 left-2 right-2 z-50 flex h-fit w-[calc(100%-16px)] flex-col gap-2 rounded-xl bg-f1-background-inverse p-2 text-f1-foreground-inverse shadow-lg backdrop-blur-sm dark:bg-f1-background-inverse-secondary sm:bottom-5 sm:mx-auto sm:h-12 sm:w-max sm:flex-row sm:gap-8",
            warningMessage && "sm:py-1 sm:pr-1"
          )}
        >
          {selectedNumber && (
            <div className="dark flex h-8 w-full items-center justify-between gap-2 px-2 sm:h-auto sm:w-fit sm:justify-start sm:pl-2 sm:pr-0">
              <span className="font-medium tabular-nums">
                <NumberFlow
                  value={selectedNumber}
                  spinTiming={{
                    duration: 200,
                    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                />
                <span> {selectedText}</span>
              </span>
              <F0Button
                variant="outline"
                size="sm"
                label={i18n.actions.unselect}
                onClick={onUnselect}
              />
            </div>
          )}
          <div className="dark">
            <div
              className={cn(
                "flex flex-col items-center gap-2 sm:hidden",
                !warningMessage && "[&_button]:w-full [&_div]:w-full"
              )}
            >
              {warningMessage ? (
                <Alert message={warningMessage} />
              ) : (
                <Fragment key="mobile-actions">
                  <MobileDropdown items={secondaryActions} />
                  {!singlePrimaryAction ? (
                    <F0ButtonDropdown
                      items={primaryActionsDropdownItems}
                      onClick={(value) => {
                        const action = getActionByValue(value)
                        ;(action as ActionType)?.onClick?.()
                      }}
                      size="lg"
                    />
                  ) : (
                    <F0Button
                      label={singlePrimaryAction.label}
                      icon={singlePrimaryAction.icon}
                      onClick={singlePrimaryAction.onClick}
                      disabled={singlePrimaryAction.disabled}
                      size="lg"
                    />
                  )}
                </Fragment>
              )}
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              {warningMessage ? (
                <Alert message={warningMessage} />
              ) : (
                <Fragment key="desktop-actions">
                  {dropdownActions.length > 0 && (
                    <Dropdown items={dropdownActions} />
                  )}
                  {visibleSecondaryActions
                    .slice()
                    .reverse()
                    .map((action) => (
                      <F0Button
                        variant={action.critical ? "critical" : "outline"}
                        key={action.label}
                        label={action.label}
                        icon={action.icon}
                        onClick={action.onClick}
                        disabled={action.disabled}
                      />
                    ))}
                  {!singlePrimaryAction ? (
                    <>
                      <F0ButtonDropdown
                        items={primaryActionsDropdownItems}
                        onClick={(value) => {
                          const action = getActionByValue(value)
                          ;(action as ActionType)?.onClick?.()
                        }}
                      />
                    </>
                  ) : (
                    <F0Button
                      label={singlePrimaryAction.label}
                      icon={singlePrimaryAction.icon}
                      onClick={singlePrimaryAction.onClick}
                      disabled={singlePrimaryAction.disabled}
                    />
                  )}
                </Fragment>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
