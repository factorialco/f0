import { Button } from "@/components/Actions/Button"
import { OneDropdownButton } from "@/components/Actions/OneDropdownButton"
import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { IconType } from "@/components/F0Icon"
import {
  Dropdown,
  DropdownItem,
  MobileDropdown,
} from "@/experimental/Navigation/Dropdown"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import NumberFlow from "@number-flow/react"
import { AnimatePresence, motion } from "motion/react"

type ActionType = {
  label: string
  icon?: IconType
  onClick?: () => void
  disabled?: boolean
  critical?: boolean
}

interface OneActionBarProps {
  /**
   * Whether the action bar is open
   */
  isOpen: boolean

  /**
   * The primary action
   */
  primaryActions?: ActionType[]

  /**
   * The secondary actions
   */
  secondaryActions?: ActionType[]

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

export const OneActionBar = ({
  isOpen,
  primaryActions = [],
  secondaryActions = [],
  selectedNumber = undefined,
  onUnselect,
  warningMessage,
}: OneActionBarProps) => {
  const i18n = useI18n()

  const selectedText =
    selectedNumber === 1
      ? i18n.status.selected.singular
      : i18n.status.selected.plural

  const visibleSecondaryActions = secondaryActions.slice(0, 2)
  const dropdownActions = secondaryActions.slice(2).map((action) => ({
    ...action,
    critical: action.critical || false,
  })) as DropdownItem[]

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
              <Button
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
                <>
                  <MobileDropdown items={secondaryActions} />
                  {primaryActions.length > 1 ? (
                    <OneDropdownButton
                      items={primaryActions.map((action) => ({
                        value: action.label,
                        label: action.label,
                        icon: action.icon,
                        critical: action.critical,
                      }))}
                      onClick={(value) => {
                        const action = primaryActions.find(
                          (a) => a.label === value
                        )
                        action?.onClick?.()
                      }}
                      size="lg"
                    />
                  ) : primaryActions.length === 1 ? (
                    <Button
                      label={primaryActions[0].label}
                      icon={primaryActions[0].icon}
                      onClick={primaryActions[0].onClick}
                      disabled={primaryActions[0].disabled}
                      size="lg"
                    />
                  ) : null}
                </>
              )}
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              {warningMessage ? (
                <Alert message={warningMessage} />
              ) : (
                <>
                  {dropdownActions.length > 0 && (
                    <Dropdown items={dropdownActions} />
                  )}
                  {visibleSecondaryActions
                    .slice()
                    .reverse()
                    .map((action) => (
                      <Button
                        variant={action.critical ? "critical" : "outline"}
                        key={action.label}
                        label={action.label}
                        icon={action.icon}
                        onClick={action.onClick}
                        disabled={action.disabled}
                      />
                    ))}
                  {primaryActions.length > 1 ? (
                    <OneDropdownButton
                      items={primaryActions.map((action) => ({
                        value: action.label,
                        label: action.label,
                        icon: action.icon,
                        critical: action.critical,
                      }))}
                      onClick={(value) => {
                        const action = primaryActions.find(
                          (a) => a.label === value
                        )
                        action?.onClick?.()
                      }}
                    />
                  ) : primaryActions.length === 1 ? (
                    <Button
                      label={primaryActions[0].label}
                      icon={primaryActions[0].icon}
                      onClick={primaryActions[0].onClick}
                      disabled={primaryActions[0].disabled}
                    />
                  ) : null}
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
