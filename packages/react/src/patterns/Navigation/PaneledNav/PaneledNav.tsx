import { useState } from "react"

import { breakpoints } from "@factorialco/f0-core"
import { useMediaQuery } from "usehooks-ts"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Bell } from "@/icons/app"
import { Link } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"
import { F0OneSwitch } from "@/sds/ai/F0OneSwitch"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { GridGlyph } from "./GridGlyph"
import { PaneledNavProps } from "./types"

/**
 * Topbar navigation with a 2×2-grid trigger that opens a multi-column
 * mega-menu panel. Reproduces the `NavigationConcept` prototype using F0
 * tokens and primitives, plus a right-side cluster: notifications bell, the
 * "One" AI activation toggle, and a user avatar with a dropdown menu.
 */
export const PaneledNav = ({
  sections,
  columns = 4,
  user,
  userMenuItems,
  onNotificationsClick,
  notificationsBadge = false,
}: PaneledNavProps) => {
  const [open, setOpen] = useState(false)

  // Adapt the column count to the viewport so the panel never overflows and
  // labels never wrap on smaller screens (same responsive primitive as
  // ApplicationFrame's FrameProvider): ≥lg → up to `columns`, md–lg → 3,
  // sm–md → 2, phones → 1 (full-width list).
  const belowSm = useMediaQuery(`(max-width: 640px)`, {
    initializeWithValue: true,
  })
  const belowMd = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })
  const belowLg = useMediaQuery(`(max-width: ${breakpoints.lg}px)`, {
    initializeWithValue: true,
  })
  const effectiveColumns = Math.min(
    columns,
    belowSm ? 1 : belowMd ? 2 : belowLg ? 3 : columns
  )

  // On phones the panel fills the viewport (full-bleed list); on larger
  // screens it's sized to its columns (~14rem each), capped to the viewport.
  const panelWidth = belowSm
    ? "calc(100vw - 1rem)"
    : `min(calc(100vw - 1rem), ${effectiveColumns * 14}rem)`

  return (
    <header className="flex h-10 items-center gap-2 border-0 border-b border-solid border-f1-border bg-f1-background px-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-label="Open navigation menu"
            className={cn(
              "flex size-8 items-center justify-center rounded-lg border border-solid border-f1-border bg-f1-background text-f1-foreground transition-[background-color,border-color,transform] duration-150 active:scale-[0.96]",
              "hover:bg-f1-background-secondary",
              "data-[state=open]:border-f1-background-selected-bold data-[state=open]:bg-f1-background-selected-bold data-[state=open]:text-f1-foreground-inverse",
              focusRing()
            )}
          >
            <GridGlyph />
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={6}
          className="max-w-[calc(100vw-1rem)] rounded-xl border-f1-border p-6 px-7 shadow-lg [max-width:var(--radix-popover-content-available-width)]"
          style={{
            width: panelWidth,
            // CSS multi-column flows sections down-then-right in source order
            // and balances them, so the reading order stays identical at every
            // column count (unlike round-robin, which reshuffles on resize).
            columnCount: effectiveColumns,
            columnGap: "2rem",
          }}
        >
          {sections.map((section) => (
            <div
              key={section.title}
              className="mb-7 flex break-inside-avoid flex-col last:mb-0"
            >
              <h3 className="m-0 mb-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-f1-foreground-secondary">
                {section.title}
              </h3>
              <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "-mx-2.5 flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[1.1875rem] font-medium leading-tight text-f1-foreground no-underline transition-colors",
                        "hover:bg-f1-background-secondary hover:text-f1-foreground-selected focus-visible:bg-f1-background-secondary focus-visible:text-f1-foreground-selected",
                        focusRing()
                      )}
                    >
                      {item.icon && <F0Icon icon={item.icon} size="md" />}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </PopoverContent>
      </Popover>

      <div className="ml-auto flex items-center gap-2">
        <div className="relative">
          <F0Button
            icon={Bell}
            label="Notifications"
            hideLabel
            variant="ghost"
            size="md"
            onClick={onNotificationsClick}
          />
          {notificationsBadge && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-1.5 top-1.5 size-2 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background"
            />
          )}
        </div>

        <Dropdown align="end" items={userMenuItems}>
          <button
            type="button"
            aria-label="Open user menu"
            className={cn("rounded-full", focusRing())}
          >
            <F0AvatarPerson
              firstName={user.firstName}
              lastName={user.lastName}
              src={user.src}
              size="md"
            />
          </button>
        </Dropdown>

        <F0OneSwitch />
      </div>
    </header>
  )
}

PaneledNav.displayName = "PaneledNav"
