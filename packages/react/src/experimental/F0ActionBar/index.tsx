import { AnimatePresence, motion } from "motion/react"
import { Fragment, useCallback, useMemo } from "react"

import { F0Button } from "@/components/F0Button"
import {
  ButtonDropdownGroup,
  F0ButtonDropdown,
} from "@/components/F0ButtonDropdown"
import { IconType } from "@/components/F0Icon"
import type { TestableProps } from "@/global.types"
import { Dropdown, MobileDropdown } from "@/experimental/Navigation/Dropdown"

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

interface F0ActionBarProps extends TestableProps {
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
   * The label of the action bar
   */
  label?: string
}

export const F0ActionBar = ({
  isOpen,
  secondaryActions = [],
  label,
  testId,
  ...props
}: F0ActionBarProps) => {
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
          className="fixed bottom-2 left-2 right-2 z-50 flex h-fit w-[calc(100%-16px)] flex-col items-center gap-2 rounded-xl bg-f1-background-inverse p-2 pl-4 text-f1-foreground shadow-lg backdrop-blur-sm dark:bg-f1-background-inverse-secondary sm:bottom-5 sm:mx-auto sm:h-12 sm:w-max sm:flex-row sm:gap-8"
          data-testid={testId}
        >
          {!!label && (
            <span className="font-medium text-f1-foreground-inverse">
              {label}
            </span>
          )}
          <div>
            <div className="dark flex flex-col items-center gap-2 sm:hidden [&_button]:w-full [&_div]:w-full">
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
            </div>
            <div className="dark hidden items-center gap-2 sm:flex">
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
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
