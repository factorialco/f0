import { motion } from "motion/react"
import { ReactElement } from "react"

import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { F0AvatarEmoji } from "@/components/avatars/F0AvatarEmoji"
import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0Icon } from "@/components/F0Icon"
import { F0Link } from "@/components/F0Link"
import { Check } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { withDataTestId, WithDataTestIdProps } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
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

/** Visual toggle/switch indicator without accessibility role (role is on parent) */
function ToggleIndicator({ checked }: { checked: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-6 w-10 shrink-0 items-center rounded-full p-0.5 transition-colors",
        checked ? "bg-f1-background-selected-bold" : "bg-f1-border"
      )}
    >
      <div
        className={cn(
          "h-5 w-5 rounded-full bg-f1-background shadow-sm transition-transform",
          checked ? "translate-x-4" : "translate-x-0"
        )}
      />
    </div>
  )
}

interface CardSelectableProps<T extends CardSelectableValue> {
  item: CardSelectableItem<T>
  selected: boolean
  disabled: boolean
  multiple: boolean
  onSelect: () => void
  /** When true, shows a toggle/switch indicator instead of checkbox/radio */
  isToggle?: boolean
  /** When true, renders without individual card borders (for grouped layout) */
  grouped?: boolean
}

function _CardSelectable<T extends CardSelectableValue>({
  item,
  selected,
  disabled,
  multiple,
  onSelect,
  isToggle,
  grouped,
}: CardSelectableProps<T>) {
  const { forms } = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const isDisabled = disabled || item.disabled

  const handleClick = () => {
    if (!isDisabled) {
      onSelect()
    }
  }

  // Determine the appropriate ARIA role
  const role = isToggle ? "switch" : multiple ? "checkbox" : "radio"

  const renderIndicator = () => {
    if (isToggle) {
      return <ToggleIndicator checked={selected} />
    }
    if (multiple) {
      return <CheckboxIndicator checked={selected} />
    }
    return <RadioIndicator checked={selected} />
  }

  const hasSelectedContent = !!item.selectedContent

  return (
    <div
      className={cn(
        "relative flex flex-1 flex-col overflow-hidden transition-colors",
        grouped
          ? ""
          : cn(
              "rounded-xl border border-solid",
              selected && !isToggle
                ? "border-f1-border-selected-bold bg-f1-background-selected-secondary"
                : "border-f1-border-secondary bg-f1-background hover:border-f1-border"
            ),
        isDisabled && "cursor-not-allowed opacity-50"
      )}
    >
      {/* Interactive card header */}
      <div
        role={role}
        aria-checked={selected}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={(e) => {
          // Ignore key events from interactive descendants (e.g. links, buttons)
          // to prevent toggling selection when activating nested controls
          const target = e.target as HTMLElement
          if (target.closest("a, button") && target !== e.currentTarget) return

          if ((e.key === "Enter" || e.key === " ") && !isDisabled) {
            e.preventDefault()
            handleClick()
          }
        }}
        className={cn(
          "flex cursor-pointer items-center gap-3",
          focusRing(),
          grouped ? "px-4 py-3" : "p-4"
        )}
      >
        {item.avatar && <AvatarRender avatar={item.avatar} />}
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-col gap-0.5">
            <span
              className={cn(
                "text-base text-f1-foreground",
                grouped ? "font-medium" : "font-semibold"
              )}
            >
              {item.title}
              {item.required && (
                <span className="ml-0.5 text-f1-foreground-critical">*</span>
              )}
            </span>
            {item.description && (
              <span className="text-base text-f1-foreground-secondary">
                {item.description}
              </span>
            )}
          </div>
          {item.moreInfoLink && (
            <F0Link
              href={item.moreInfoLink.href}
              target="_blank"
              variant="link"
              className="self-start"
              stopPropagation
            >
              {item.moreInfoLink.label ?? forms.moreInformation}
            </F0Link>
          )}
        </div>
        {renderIndicator()}
      </div>

      {/* Expandable content — outside the interactive area, attached below */}
      {hasSelectedContent && (
        <motion.div
          initial={false}
          animate={{
            height: selected ? "auto" : 0,
            opacity: selected ? 1 : 0,
            visibility: selected ? "visible" : "hidden",
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.15,
            ease: [0.165, 0.84, 0.44, 1],
          }}
          className="overflow-hidden"
        >
          <div
            className="border-0 border-t border-solid border-f1-border-secondary"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2 bg-f1-background-tertiary p-4">
              {item.selectedContent}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

/**
 * Generic component type so consumers can use <F0Select<T, R> />.
 * Preserves dataTestId and CardSelectable
 */
type CardSelectableGeneric = <T extends CardSelectableValue>(
  props: CardSelectableProps<T> & WithDataTestIdProps
) => ReactElement | null

const CardSelectableWrapped = withDataTestId(_CardSelectable)

export const CardSelectable =
  CardSelectableWrapped as unknown as CardSelectableGeneric
