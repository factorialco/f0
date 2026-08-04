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
import { cn } from "@/lib/utils"

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
  // The link must not live inside the element carrying `role`, or axe's
  // `nested-interactive` fires (WCAG 2.1 SC 4.1.2: "Element has focusable
  // descendants") and the card becomes an interactive control wrapping another
  // one. It is rendered as a sibling row below the header instead.
  const moreInfoLink = item.moreInfoLink

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
                : "border-f1-border bg-f1-background hover:border-f1-border-hover"
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
          if ((e.key === "Enter" || e.key === " ") && !isDisabled) {
            e.preventDefault()
            handleClick()
          }
        }}
        className={cn(
          "flex cursor-pointer items-center gap-3",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-f1-special-ring",
          grouped ? "px-4 py-3" : "p-4",
          // The link row below supplies the bottom padding so the gap between
          // description and link matches the old in-column `gap-2`.
          moreInfoLink && "pb-0"
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
        </div>
        {renderIndicator()}
      </div>

      {/* Outside the interactive header — see the `moreInfoLink` note above. */}
      {moreInfoLink && (
        <div
          className={cn(
            "flex flex-row items-start gap-3 pt-2",
            grouped ? "px-4 pb-3" : "px-4 pb-4"
          )}
        >
          {item.avatar && (
            /* Invisible copy of the avatar keeps the link aligned with the
               title column without hardcoding the avatar's width. */
            <div aria-hidden="true" className="invisible">
              <AvatarRender avatar={item.avatar} />
            </div>
          )}
          <F0Link
            href={moreInfoLink.href}
            target="_blank"
            variant="link"
            /* min-h-6 keeps the touch target at 24px (WCAG 2.2 SC 2.5.8);
               the link's own text box is only 20px tall. */
            className="min-h-6 items-center self-start"
          >
            {moreInfoLink.label ?? forms.moreInformation}
          </F0Link>
        </div>
      )}

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
            className="border-0 border-t border-solid border-f1-border"
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
