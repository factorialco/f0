import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn, focusRing } from "@/lib/utils"

import { PRESSABLE_CHIP } from "../pressable"

export type SidebarUser = {
  firstName: string
  lastName: string
  avatarUrl?: string
}

export type SidebarUserMenuProps = {
  user: SidebarUser
  options: DropdownItem[]
  onDropdownClick?: () => void
  /**
   * Avatar only — the rail, where the name has nowhere to go. Defaults to the
   * full row (avatar + name) the footer uses.
   */
  compact?: boolean
}

/**
 * The account menu: an avatar that opens the user's dropdown.
 *
 * Shared by `SidebarFooter` (full row, at the bottom of the panel) and
 * `SidebarRail` (avatar only, at the bottom of the rail) so the two can never
 * disagree about what the account menu contains or how it opens.
 */
export function SidebarUserMenu({
  user,
  options,
  onDropdownClick,
  compact = false,
}: SidebarUserMenuProps) {
  const fullName = `${user.firstName} ${user.lastName}`

  return (
    <Dropdown items={options}>
      <button
        type="button"
        // With the name hidden, it has to reach assistive tech some other way.
        // Not an F0 `Tooltip`: the dropdown anchors itself by cloning its child
        // and passing it a ref, and a component in between swallows that ref —
        // the menu then opens against the wrong element. The company selector
        // beside it solves the same problem the same way.
        aria-label={compact ? fullName : undefined}
        title={compact ? fullName : undefined}
        className={cn(
          "group flex items-center font-medium transition-colors",
          compact
            ? // The whole rail row is the target; the chip inside it is what
              // lights up, matching the company selector at the other end.
              "w-full cursor-pointer justify-center"
            : "w-full max-w-full gap-1.5 rounded p-1.5 hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          focusRing("focus-visible:ring-inset")
        )}
        onClick={onDropdownClick}
      >
        {compact ? (
          <span
            className={cn(
              "flex size-10 items-center justify-center rounded-lg group-hover:bg-f1-background-secondary group-data-[state=open]:bg-f1-background-secondary",
              PRESSABLE_CHIP
            )}
          >
            <F0AvatarPerson
              src={user.avatarUrl}
              firstName={user.firstName}
              lastName={user.lastName}
              size="sm"
            />
          </span>
        ) : (
          <>
            <F0AvatarPerson
              src={user.avatarUrl}
              firstName={user.firstName}
              lastName={user.lastName}
              size="xs"
            />
            <OneEllipsis className="text-f1-foreground">{fullName}</OneEllipsis>
          </>
        )}
      </button>
    </Dropdown>
  )
}
