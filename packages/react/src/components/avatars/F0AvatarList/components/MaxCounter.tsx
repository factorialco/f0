import { cva } from "cva"
import { useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { EllipsisHorizontal } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { internalAvatarTypes } from "@/ui/Avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"

import { AvatarVariant, AvatarVariants, F0Avatar } from "../../F0Avatar"
import { type AvatarListSize, type F0AvatarListExtras } from "../types"
import { getAvatarDisplayName } from "../utils"

const sizeVariants = cva({
  base: "flex shrink-0 items-center justify-center bg-f1-background-secondary font-medium text-f1-foreground-secondary",
  variants: {
    size: {
      xs: "h-5 w-5 rounded-xs text-sm",
      sm: "h-6 min-w-6 rounded-sm px-1 text-sm",
      md: "h-8 min-w-8 rounded px-1.5",
    } satisfies Record<AvatarListSize, string>,
    type: {
      base: "",
      rounded: "!rounded-full",
    } satisfies Record<(typeof internalAvatarTypes)[number], string>,
  },
  compoundVariants: [
    {
      size: "sm",
      type: "rounded",
      className: "px-1.5",
    },
    {
      size: "md",
      type: "rounded",
      className: "px-2",
    },
  ],
  defaultVariants: {
    size: "md",
    type: "base",
  },
})

type Props = {
  count: number
  size?: AvatarListSize
  type?: (typeof internalAvatarTypes)[number]
  list?: (Omit<AvatarVariant, "type"> & F0AvatarListExtras)[]
  avatarType?: AvatarVariants
}

export const MaxCounter = ({
  count,
  size = "md",
  type,
  list,
  avatarType = "person",
}: Props) => {
  const i18n = useI18n()
  const [open, setOpen] = useState(false)

  const label = (
    count === 1 ? i18n.avatarList.showMore.one : i18n.avatarList.showMore.other
  ).replace("{{count}}", count.toString())

  // At `xs` the counter is an ellipsis icon with no text, so the count needs a
  // text alternative (WCAG 1.1.1). An `sr-only` span rather than `aria-label`:
  // the plain counter below is a role-less <div>, where ARIA prohibits
  // `aria-label` and assistive technology need not honour it. Real text works
  // in both branches.
  const counterContent =
    size === "xs" ? (
      <>
        <F0Icon icon={EllipsisHorizontal} size="xs" />
        <span className="sr-only">{label}</span>
      </>
    ) : (
      `+${count}`
    )

  // Without a list there is nothing to disclose, so the counter stays a plain
  // element: a button would advertise an interaction that does not exist.
  if (!list?.length)
    return (
      <div
        className={cn(
          "cursor-default font-medium transition",
          sizeVariants({ size, type })
        )}
      >
        {counterContent}
      </div>
    )

  const items = list.map((avatar, index) => {
    const description = avatar.tooltipDescription
    return (
      <div
        key={index}
        className="flex items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2"
      >
        <div className="h-6 w-6 shrink-0">
          <F0Avatar
            avatar={{ type: avatarType, ...avatar } as AvatarVariant}
            size="sm"
          />
        </div>
        <div className="flex flex-col">
          <div className="whitespace-nowrap font-semibold">
            {getAvatarDisplayName(avatarType, avatar)}
          </div>
          {description && (
            <div className="whitespace-nowrap text-sm text-current opacity-70">
              {description}
            </div>
          )}
        </div>
      </div>
    )
  })

  return (
    <HoverCard open={open} onOpenChange={setOpen}>
      <HoverCardTrigger asChild>
        {/*
         * A real <button>, not the <div> this used to be. Radix opens the card
         * on `focus` as well as on hover, but only if the trigger can actually
         * receive focus — a role-less <div> never does, so the names in here
         * were mouse-only (WCAG 2.1.1). `onClick` toggles too, which is what
         * makes it reachable on touch: Radix preventDefaults `touchstart`, so
         * hover never fires there either.
         *
         * The accessible name keeps the visible "+N" inside it ("+12 more") so
         * a voice-control user can still say what they see (WCAG 2.5.3), and it
         * is the only name available at `xs`, where the counter is an icon.
         */}
        <button
          type="button"
          aria-expanded={open}
          aria-label={label}
          onClick={() => setOpen((previous) => !previous)}
          className={cn(
            "cursor-pointer font-medium transition hover:bg-f1-background-secondary-hover",
            sizeVariants({ size, type }),
            focusRing()
          )}
        >
          {counterContent}
        </button>
      </HoverCardTrigger>
      {/*
       * No ScrollArea, and no height cap. Anything scrollable in here is
       * unreachable by keyboard whatever `tabIndex` it carries, because
       * HoverCardContent strips tab stops on every render. Since the content is
       * purely readable, the honest fix is to have nothing to operate: the card
       * grows with its list.
       */}
      <HoverCardContent side="top" className="w-auto">
        <div className="flex flex-col py-1">{items}</div>
      </HoverCardContent>
    </HoverCard>
  )
}
