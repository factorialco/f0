import { Button } from "@/components/Actions/Button"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Icon } from "@/components/F0Icon"
import { Counter } from "@/experimental/Information/Counter"
import { CheckCircle } from "@/icons/app"
import LogoAvatar from "@/icons/app/LogoAvatar"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/ui/checkbox"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { HighlightText } from "../HighLightText"
import { EntitySelectEntity } from "../types"

interface Props {
  entity: EntitySelectEntity
  selected: boolean
  onSelect: (entity: EntitySelectEntity) => void
  onRemove: (entity: EntitySelectEntity) => void
  marginLeft: "ml-0" | "ml-6"
  search: string
  singleSelector?: boolean
  goToFirst?: () => void
  goToLast?: () => void
  disabled?: boolean
  hiddenAvatar?: boolean
}

export function focusNextFocusable(
  currentElement: HTMLElement,
  goToFirst?: () => void
) {
  const focusableSelectors = '[data-avatarname-navigator-element="true"]'
  const allFocusable = Array.from(
    document.querySelectorAll(focusableSelectors)
  ) as HTMLElement[]

  const currentIndex = allFocusable.indexOf(currentElement)
  if (currentIndex >= 0 && currentIndex < allFocusable.length - 1) {
    allFocusable[currentIndex + 1].focus()
  } else if (allFocusable.length > 0) {
    goToFirst?.()
  }
}

export function focusPreviousFocusable(
  currentElement: HTMLElement,
  goToLast?: () => void
) {
  const focusableSelectors = '[data-avatarname-navigator-element="true"]'
  const allFocusable = Array.from(
    document.querySelectorAll(focusableSelectors)
  ) as HTMLElement[]

  const currentIndex = allFocusable.indexOf(currentElement)
  if (currentIndex > 0) {
    allFocusable[currentIndex - 1].focus()
  } else if (allFocusable.length > 0) {
    goToLast?.()
  }
}

export const ListItemSingleContent = ({
  entity,
  selected,
  onSelect,
  onRemove,
  marginLeft,
  search,
  goToFirst,
  goToLast,
  singleSelector = false,
  disabled = false,
  hiddenAvatar = false,
}: Props) => {
  const nameParts = entity.name.split(" ")
  const firstName = nameParts[0] || ""
  const lastName = nameParts.slice(1).join(" ")

  const handleLabelClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault()
    ev.stopPropagation()
    if (disabled) return
    if (selected) {
      onRemove(entity)
    } else {
      onSelect(entity)
    }
  }

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLButtonElement>) => {
    if (ev.key === "Enter" || ev.key === " ") {
      ev.preventDefault()
      if (disabled) return
      if (!selected) {
        onSelect(entity)
      } else if (selected) {
        onRemove(entity)
      }
    } else if (ev.key === "ArrowDown") {
      focusNextFocusable(ev.currentTarget, goToFirst)
    } else if (ev.key === "ArrowUp") {
      focusPreviousFocusable(ev.currentTarget, goToLast)
    }
  }

  return (
    <div className="w-full pl-1 pr-1">
      <label
        aria-label={entity.name}
        className={cn(
          marginLeft,
          "flex flex-row flex-wrap items-center gap-2 rounded-[10px] border px-2 py-1.5 hover:cursor-pointer",
          "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
          selected && singleSelector
            ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20"
            : ""
        )}
      >
        {!hiddenAvatar && (
          <F0AvatarPerson
            src={entity.avatar}
            firstName={firstName}
            lastName={lastName}
            size="xs"
          />
        )}

        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-row items-center gap-2 break-all">
            <HighlightText
              text={entity.name}
              search={search}
              searchKeys={entity.searchKeys}
            />
          </div>
        </div>

        <Checkbox
          data-avatarname-navigator-element="true"
          checked={selected}
          disabled={disabled}
          onClick={handleLabelClick}
          onKeyDown={handleKeyDown}
          className={cn(
            "pointer-events-none ml-auto",
            singleSelector ? "opacity-0" : ""
          )}
        />

        {singleSelector && selected && (
          <F0Icon
            className="text-f1-icon-selected"
            icon={CheckCircle}
            size="md"
          />
        )}
      </label>
    </div>
  )
}

const EntitySelectListItem = ({
  groupView,
  expanded,
  search,
  entity,
  selected,
  partialSelected,
  onSelect,
  onRemove,
  onExpand,
  goToFirst,
  goToLast,
  isChild = false,
  hideLine = false,
  showGroupIcon = false,
  singleSelector = false,
  disabled = false,
  hiddenAvatar = false,
}: {
  entity: EntitySelectEntity
  groupView: boolean
  expanded: boolean
  selected: boolean
  partialSelected: boolean
  search: string
  showGroupIcon?: boolean
  onSelect: (entity: EntitySelectEntity) => void
  onRemove: (entity: EntitySelectEntity) => void
  onExpand: (expanded: boolean) => void
  singleSelector: boolean
  isChild?: boolean
  hideLine?: boolean
  goToFirst?: () => void
  goToLast?: () => void
  disabled?: boolean
  hiddenAvatar?: boolean
}) => {
  const [pressingLabel, setPressingLabel] = useState<boolean>(false)
  if (!groupView) {
    return (
      <ListItemSingleContent
        marginLeft={isChild ? "ml-6" : "ml-0"}
        entity={entity}
        search={search}
        selected={selected}
        onSelect={onSelect}
        onRemove={onRemove}
        singleSelector={singleSelector}
        goToFirst={goToFirst}
        goToLast={goToLast}
        disabled={disabled}
        hiddenAvatar={hiddenAvatar}
      />
    )
  }

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLButtonElement>) => {
    if (ev.key === " ") {
      ev.preventDefault()
      onExpand(!expanded)
    } else if (ev.key === "Enter" && singleSelector) {
      onExpand(!expanded)
    } else if (ev.key === "Enter") {
      if (disabled) return
      if (!selected || partialSelected) {
        onSelect(entity)
      } else if (selected) {
        onRemove(entity)
      }
    } else if (ev.key === "ArrowDown") {
      focusNextFocusable(ev.currentTarget, goToFirst)
    } else if (ev.key === "ArrowUp") {
      focusPreviousFocusable(ev.currentTarget, goToLast)
    }
  }

  const handleGroupClick = () => {
    if (pressingLabel) {
      onExpand(!expanded)
      setPressingLabel(false)
    } else {
      if (disabled) return
      if (singleSelector) return
      if (selected) onRemove(entity)
      else onSelect(entity)
    }
  }

  if (!entity.subItems?.length) return null

  const checked = selected || partialSelected
  return (
    <>
      <div className="flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1">
        <Button
          round
          hideLabel
          icon={expanded ? ChevronDown : ChevronRight}
          onClick={() => onExpand(!expanded)}
          label={expanded ? "Collapse" : "Expand"}
          size="sm"
          variant="ghost"
          type="button"
        />
        <label
          aria-label={entity.name}
          onPointerDown={() => {
            setPressingLabel(true)
          }}
          className="flex flex-1 flex-row items-center gap-2 rounded-[10px] border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover"
        >
          {showGroupIcon && (
            <F0Icon
              icon={LogoAvatar}
              className="rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
            />
          )}
          <div className="flex flex-grow flex-row items-center gap-2 break-all">
            <HighlightText
              semiBold
              text={entity.name}
              search={search}
              searchKeys={entity.searchKeys}
            />
            <Counter value={entity.subItems?.length ?? 0} />
          </div>
          <Checkbox
            checked={checked}
            disabled={disabled}
            onClick={handleGroupClick}
            onKeyDown={handleKeyDown}
            indeterminate={partialSelected}
            onPointerDown={(ev) => {
              ev.stopPropagation()
              setPressingLabel(false)
            }}
            data-avatarname-navigator-element="true"
            className={cn("ml-auto", singleSelector ? "opacity-0" : "")}
          />
        </label>
      </div>

      {!hideLine && !expanded && (
        <div className="h-[1px] w-full bg-f1-border-secondary" />
      )}
    </>
  )
}

EntitySelectListItem.displayName = "EntitySelectListItem"

export { EntitySelectListItem }
