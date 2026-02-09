import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { F0AvatarEmoji } from "@/components/avatars/F0AvatarEmoji"
import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0Icon } from "@/components/F0Icon"
import { Check } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"

import type {
  CardSelectableAvatarVariant,
  CardSelectableItem,
  CardSelectableValue,
} from "./types"

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
  return <F0Avatar avatar={avatar as AvatarVariant} size="md" />
}

function RadioIndicator({ checked }: { checked: boolean }) {
  return (
    <div
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        checked
          ? "bg-f1-background-selected-bold"
          : "border-2 border-solid border-f1-border bg-f1-background"
      )}
    >
      {checked && <div className="h-2 w-2 rounded-full bg-f1-background" />}
    </div>
  )
}

/** Visual checkbox indicator without accessibility role (role is on parent) */
function CheckboxIndicator({ checked }: { checked: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-xs transition-colors",
        checked
          ? "bg-f1-background-selected-bold text-f1-foreground-inverse"
          : "border border-solid border-f1-border bg-f1-background"
      )}
    >
      {checked && <F0Icon icon={Check} size="sm" />}
    </div>
  )
}

interface CardSelectableProps<T extends CardSelectableValue> {
  item: CardSelectableItem<T>
  selected: boolean
  disabled: boolean
  multiple: boolean
  onSelect: () => void
}

export function CardSelectable<T extends CardSelectableValue>({
  item,
  selected,
  disabled,
  multiple,
  onSelect,
}: CardSelectableProps<T>) {
  const isDisabled = disabled || item.disabled

  const handleClick = () => {
    if (!isDisabled) {
      onSelect()
    }
  }

  return (
    <div
      role={multiple ? "checkbox" : "radio"}
      aria-checked={selected}
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
        selected
          ? "border-f1-border-selected-bold bg-f1-background-selected-secondary"
          : "border-f1-border-secondary bg-f1-background hover:border-f1-border",
        isDisabled && "cursor-not-allowed opacity-50"
      )}
    >
      {item.avatar && <AvatarRender avatar={item.avatar} />}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-base font-semibold text-f1-foreground">
          {item.title}
        </span>
        {item.description && (
          <span className="text-sm text-f1-foreground-secondary">
            {item.description}
          </span>
        )}
      </div>
      {multiple ? (
        <CheckboxIndicator checked={selected} />
      ) : (
        <RadioIndicator checked={selected} />
      )}
    </div>
  )
}
