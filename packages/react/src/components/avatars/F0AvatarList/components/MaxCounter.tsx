import { cva } from "cva"
import { useEffect, useRef, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { EllipsisHorizontal } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { internalAvatarTypes } from "@/ui/Avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"

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
  // Which input opened the card decides whether focus may move into it. On
  // click or Enter that is correct and is what makes the list operable. On
  // hover it would yank focus away from whatever the user is actually doing,
  // so `onOpenAutoFocus` is suppressed for that path below.
  const openedByPointer = useRef(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  )
  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const cancelClose = () => clearTimeout(closeTimer.current)
  const openByPointer = () => {
    cancelClose()
    openedByPointer.current = true
    setOpen(true)
  }
  // Grace period so the pointer can travel from the trigger onto the card
  // without it closing underneath. WCAG 1.4.13 requires hover-triggered content
  // to be hoverable; `HoverCard` gave this for free, `Popover` does not.
  const closeByPointer = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }

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
        className="flex w-[180px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2"
      >
        <div className="h-6 w-6 shrink-0">
          <F0Avatar
            avatar={{ type: avatarType, ...avatar } as AvatarVariant}
            size="sm"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="truncate font-semibold">
            {getAvatarDisplayName(avatarType, avatar)}
          </div>
          {description && (
            <div className="truncate text-sm text-current opacity-70">
              {description}
            </div>
          )}
        </div>
      </div>
    )
  })

  return (
    /*
     * `Popover`, not `HoverCard`. The list here has to be scrollable — a large
     * cluster would otherwise produce a card taller than the screen — and a
     * scroll region cannot live in a hover card: Radix `HoverCardContent`
     * rewrites every tabbable node it contains to `tabindex="-1"` on each
     * render, so `ScrollArea`'s own `tabIndex={0}` is stripped and the region
     * becomes unreachable (axe `scrollable-region-focusable`, WCAG 2.1.1).
     * `Popover` preserves tab stops, so the same `ScrollArea` is operable.
     *
     * The cost is that the card opens on click/Enter rather than on focus:
     * Popover moves focus into its content, and the content is portalled to the
     * end of <body>, so suppressing that would leave the scroll region
     * unreachable by Tab. Hover still opens it for pointer users.
     */
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {/*
         * A real <button>, not the role-less <div> this used to be — that never
         * entered the tab order, so the collapsed names were mouse-only. Radix
         * supplies `aria-expanded` and `aria-haspopup` on the trigger.
         *
         * The accessible name keeps the visible "+N" inside it ("+12 more") so
         * a voice-control user can say what they see (WCAG 2.5.3), and it is
         * the only name available at `xs`, where the counter is an icon.
         */}
        <button
          type="button"
          aria-label={label}
          onPointerEnter={openByPointer}
          onPointerLeave={closeByPointer}
          onClick={(event) => {
            // Radix's own trigger `onClick` toggles, and a pointer click is
            // preceded by `pointerenter`, which has already opened the card —
            // so the click meant to pin it would close it instead. Radix
            // composes handlers with `checkForDefaultPrevented`, so calling
            // `preventDefault` here suppresses that toggle. Nothing else is
            // lost: a `type="button"` click has no default action.
            openedByPointer.current = false
            if (open) {
              event.preventDefault()
              // Pull focus in — that is what makes the list scrollable by
              // keyboard. Hover-opening deliberately does not do this.
              contentRef.current?.focus()
            }
            // Otherwise let Radix's toggle open it, focus and all.
          }}
          className={cn(
            "cursor-pointer font-medium transition hover:bg-f1-background-secondary-hover",
            sizeVariants({ size, type }),
            focusRing()
          )}
        >
          {counterContent}
        </button>
      </PopoverTrigger>
      <PopoverContent
        ref={contentRef}
        side="top"
        // Swapping the container must not change how this looks. `ui/popover`
        // ships a light, bordered, padded surface; `ui/hover-card` ships a
        // borderless 200px inverse one, and that is what this popover has always
        // been. These overrides restore it exactly (`cn` is tailwind-merge, so
        // the later class wins). `overflow-hidden` also matters functionally:
        // `ui/popover`'s own `overflow-auto` would otherwise be a second,
        // non-focusable scroll container, which axe rejects (measured).
        className="w-[200px] overflow-hidden rounded border-0 bg-f1-background-inverse p-0 font-medium text-f1-foreground-inverse shadow-none"
        onPointerEnter={cancelClose}
        onPointerLeave={closeByPointer}
        onOpenAutoFocus={(event) => {
          // Hover must not pull focus out of whatever the user is doing.
          if (openedByPointer.current) event.preventDefault()
        }}
        onCloseAutoFocus={(event) => {
          // ...and must not push it back either. Radix returns focus to the
          // trigger on close, which after a hover-and-leave leaves the counter
          // sitting there focus-ringed as though it had been tabbed to. Only a
          // card the user opened deliberately should hand focus back.
          if (openedByPointer.current) event.preventDefault()
        }}
      >
        {/* 172px, the legacy cap — not the viewport clamp. Same visual height
            as before; the difference is that this scroll region is now
            focusable, because Popover keeps the tab stop that HoverCard
            stripped. */}
        <ScrollArea className="[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col">
          {items}
          <ScrollBar
            orientation="vertical"
            className="[&_div]:bg-f1-background"
          />
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}
