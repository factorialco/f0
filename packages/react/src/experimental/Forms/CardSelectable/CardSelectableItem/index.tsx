import { useId } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0AvatarEmoji } from "@/components/avatars/F0AvatarEmoji"
import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { cn, focusRing } from "@/lib/utils"
import { Checkbox } from "@/ui/checkbox"

import type {
  CardSelectableAvatarVariant,
  CardSelectableItemProps,
  CardSelectableValue,
} from "../types"

import { useCardSelectableContext } from "../context"

function AvatarRender({ avatar }: { avatar: CardSelectableAvatarVariant }) {
  if (avatar.type === "emoji") {
    return <F0AvatarEmoji emoji={avatar.emoji} size="md" />
  }
  if (avatar.type === "file") {
    return <F0AvatarFile file={avatar.file} size="md" />
  }
  if (avatar.type === "icon") {
    return <F0AvatarIcon icon={avatar.icon} size="md" />
  }
  return <F0Avatar avatar={avatar} size="md" />
}

export function CardSelectableItem<T extends CardSelectableValue>({
  value,
  title,
  description,
  avatar,
  disabled: itemDisabled = false,
}: CardSelectableItemProps<T>) {
  const {
    value: selectedValue,
    onSelect,
    disabled: groupDisabled,
  } = useCardSelectableContext<T>()
  const isSelected = selectedValue === value
  const isDisabled = groupDisabled || itemDisabled
  const inputId = useId()

  const handleClick = () => {
    if (!isDisabled && !isSelected) {
      onSelect(value)
    }
  }

  return (
    <div
      role="radio"
      aria-checked={isSelected}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && !isDisabled) {
          e.preventDefault()
          handleClick()
        }
      }}
      className={cn(
        "relative flex flex-1 cursor-pointer items-center gap-3 rounded-lg border border-solid p-4 transition-colors",
        focusRing(),
        isSelected
          ? "border-f1-border-selected-bold bg-f1-background-selected-secondary"
          : "border-f1-border-secondary bg-f1-background hover:border-f1-border",
        isDisabled && "cursor-not-allowed opacity-50"
      )}
    >
      {avatar && <AvatarRender avatar={avatar} />}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-base font-semibold text-f1-foreground">
          {title}
        </span>
        {description && (
          <span className="text-sm text-f1-foreground-secondary">
            {description}
          </span>
        )}
      </div>
      <Checkbox
        id={inputId}
        checked={isSelected}
        disabled={isDisabled}
        onCheckedChange={() => {
          if (!isDisabled && !isSelected) {
            onSelect(value)
          }
        }}
        onClick={(e) => e.stopPropagation()}
        hideLabel
        className="pointer-events-none"
      />
    </div>
  )
}
