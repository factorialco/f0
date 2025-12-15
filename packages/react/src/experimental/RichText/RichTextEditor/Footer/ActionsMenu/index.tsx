import { F0Button } from "@/components/F0Button"
import { ButtonDropdownItem, F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { Switch } from "@/experimental/Forms/Fields/Switch"
import { ToolbarDivider } from "@/experimental/RichText/CoreEditor"
import { primaryActionType, secondaryActionType, secondaryActionsType } from "../../utils/types"

interface ActionsMenuProps {
  secondaryAction?: secondaryActionsType
  primaryAction?: primaryActionType
  useLittleMode: boolean
  disableButtons: boolean
  isFullscreen: boolean
}

const getLabelID = (label?: string) => (label ? label.toLowerCase().replace(" ", "-") : "")

// Helper function to normalize secondaryAction to an array
const normalizeSecondaryActions = (
  secondaryAction?: secondaryActionsType
): secondaryActionType[] => {
  if (!secondaryAction) return []
  return Array.isArray(secondaryAction) ? secondaryAction : [secondaryAction]
}

const createActionItems = (
  primaryAction?: primaryActionType,
  secondaryActions?: secondaryActionType[]
): ButtonDropdownItem<string>[] => {
  const primaryActionItems = primaryAction
    ? [
        {
          label: primaryAction.action.label,
          value: getLabelID(primaryAction.action.label),
          icon: primaryAction.action.icon,
        },
      ]
    : []

  const subActionItems =
    primaryAction?.subActions?.map((sub) => ({
      label: sub.label,
      value: getLabelID(sub.label),
      icon: sub.icon,
    })) || []

  const secondaryActionItems =
    secondaryActions?.map((action) => ({
      label: action.label,
      value: getLabelID(action.label),
      icon: "icon" in action ? action.icon : undefined,
    })) || []

  return [...primaryActionItems, ...subActionItems, ...secondaryActionItems]
}

const handleActionClick = (
  labelID: string,
  primaryAction?: primaryActionType,
  secondaryActions?: secondaryActionType[]
) => {
  if (labelID === getLabelID(primaryAction?.action.label)) {
    primaryAction?.action.onClick()
    return
  }

  // Check secondary actions
  const matchingSecondaryAction = secondaryActions?.find(
    (action) => getLabelID(action.label) === labelID
  )
  if (matchingSecondaryAction) {
    matchingSecondaryAction.onClick()
    return
  }

  // Check sub actions
  primaryAction?.subActions?.find((sub) => getLabelID(sub.label) === labelID)?.onClick()
}

interface SecondaryActionsButtonsProps {
  secondaryActions: secondaryActionType[]
  useLittleMode: boolean
  primaryAction?: primaryActionType
  isFullscreen: boolean
  disableButtons: boolean
}

const SecondaryActionsButtons = ({
  secondaryActions,
  useLittleMode,
  primaryAction,
  isFullscreen,
  disableButtons,
}: SecondaryActionsButtonsProps) => {
  const shouldHideButtons = secondaryActions.length === 0

  if (shouldHideButtons) {
    return null
  }

  const switchActions = secondaryActions.filter((action) => action.type === "switch")
  const buttonActions = secondaryActions.filter((action) => action.type !== "switch")

  const shouldHideButtonActions =
    useLittleMode && primaryAction && !isFullscreen && buttonActions.length > 0

  return (
    <div className="flex items-center gap-3">
      {/* Render switch actions - these are always visible if they exist */}
      {switchActions.map((action, index) => {
        const toggleAction = action as secondaryActionType & {
          checked: boolean
          hideLabel?: boolean
        }
        return (
          <Switch
            key={`switch-${index}`}
            title={action.label}
            checked={toggleAction.checked || false}
            onCheckedChange={(checked) => {
              action.onClick(checked)
            }}
            disabled={disableButtons || action.disabled}
            hideLabel={toggleAction.hideLabel || false}
          />
        )
      })}

      {/* Render button actions - these might be hidden in little mode */}
      {!shouldHideButtonActions &&
        buttonActions.map((action, index) => (
          <F0Button
            key={`button-${index}`}
            onClick={(e) => {
              e.preventDefault()
              action.onClick()
            }}
            variant={"variant" in action ? action.variant : "outline"}
            size="md"
            label={action.label}
            disabled={disableButtons || action.disabled}
            icon={"icon" in action ? action.icon : undefined}
          />
        ))}
    </div>
  )
}

interface PrimaryActionButtonProps {
  primaryAction: primaryActionType["action"]
  disableButtons: boolean
  onClick: (e: React.MouseEvent) => void
}

const PrimaryActionButton = ({
  primaryAction,
  disableButtons,
  onClick,
}: PrimaryActionButtonProps) => {
  return (
    <F0Button
      onClick={onClick}
      variant={primaryAction.variant ?? "default"}
      size="md"
      label={primaryAction.label || ""}
      disabled={disableButtons || primaryAction.disabled}
      icon={primaryAction.icon}
    />
  )
}

interface PrimaryActionContentProps {
  primaryAction: primaryActionType
  isFullscreen: boolean
  listOfActions: ButtonDropdownItem<string>[]
  handleOnClick: (labelID: string) => void
  disableButtons: boolean
  includeSecondaryInDropdown: boolean
}

const renderPrimaryActionContent = ({
  primaryAction,
  isFullscreen,
  listOfActions,
  handleOnClick,
  disableButtons,
  includeSecondaryInDropdown,
}: PrimaryActionContentProps) => {
  if (!isFullscreen) {
    return primaryAction.subActions || includeSecondaryInDropdown ? (
      <F0ButtonDropdown
        items={listOfActions}
        onClick={handleOnClick}
        variant={primaryAction.action.variant ?? "default"}
        disabled={disableButtons}
        size="md"
      />
    ) : (
      <PrimaryActionButton
        primaryAction={primaryAction.action}
        disableButtons={disableButtons}
        onClick={(e) => {
          e.preventDefault()
          primaryAction.action.onClick()
        }}
      />
    )
  }

  return (
    <>
      {primaryAction.subActions?.map((sub) => (
        <F0Button
          key={getLabelID(sub.label)}
          onClick={(e) => {
            e.preventDefault()
            sub.onClick()
          }}
          variant={primaryAction.action.variant ?? "default"}
          size="md"
          label={sub.label}
          disabled={disableButtons || sub.disabled}
          icon={sub.icon}
        />
      ))}
      {primaryAction.subActions?.length && <ToolbarDivider />}
      <PrimaryActionButton
        primaryAction={primaryAction.action}
        disableButtons={disableButtons}
        onClick={(e) => {
          e.preventDefault()
          primaryAction.action.onClick()
        }}
      />
    </>
  )
}

const ActionsMenu = ({
  secondaryAction,
  primaryAction,
  useLittleMode,
  disableButtons,
  isFullscreen,
}: ActionsMenuProps) => {
  const secondaryActions = normalizeSecondaryActions(secondaryAction)

  if (secondaryActions.length === 0 && !primaryAction) return null

  const buttonSecondaryActions = secondaryActions.filter((action) => action.type !== "switch")
  const shouldIncludeSecondaryInDropdown =
    buttonSecondaryActions.length > 0 && useLittleMode && primaryAction && !isFullscreen

  const listOfActions = createActionItems(
    primaryAction,
    shouldIncludeSecondaryInDropdown ? buttonSecondaryActions : undefined
  )

  const onActionClick = (labelID: string) =>
    handleActionClick(labelID, primaryAction, secondaryActions)

  const shouldShowDivider =
    secondaryActions.length > 0 &&
    primaryAction &&
    (!useLittleMode || secondaryActions.some((action) => action.type === "switch") || isFullscreen)

  return (
    <div className="scrollbar-macos flex items-center gap-2 overflow-x-auto overflow-y-hidden">
      <SecondaryActionsButtons
        secondaryActions={secondaryActions}
        useLittleMode={useLittleMode}
        primaryAction={primaryAction}
        isFullscreen={isFullscreen}
        disableButtons={disableButtons}
      />

      {shouldShowDivider && <ToolbarDivider />}

      {primaryAction &&
        renderPrimaryActionContent({
          primaryAction,
          isFullscreen,
          listOfActions,
          handleOnClick: onActionClick,
          disableButtons,
          includeSecondaryInDropdown: shouldIncludeSecondaryInDropdown ?? false,
        })}
    </div>
  )
}

export { ActionsMenu }
