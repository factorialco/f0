import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/components/OneEllipsis"
import { Badge } from "@/experimental/Information/Badge"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { Bell as BellIcon, Circle as CircleIcon } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { Dropdown, DropdownItem } from "../../Dropdown"

interface SidebarFooterProps {
  user: {
    firstName: string
    lastName: string
    avatarUrl?: string
  }
  showActivityButton?: boolean
  hasActivityUpdates?: boolean
  activityButtonShortcut?: string[]
  onActivityButtonClick?: () => void
  onDropdownClick?: () => void
  options: DropdownItem[]
}

export function SidebarFooter({
  user,
  options,
  showActivityButton = false,
  activityButtonShortcut,
  onActivityButtonClick,
  onDropdownClick,
  hasActivityUpdates,
}: SidebarFooterProps) {
  const i18n = useI18n()

  return (
    <div className="flex flex-row items-center justify-between gap-1 p-3">
      <div className="min-w-0 flex-1">
        <Dropdown items={options}>
          <button
            className={cn(
              "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
              focusRing("focus-visible:ring-inset")
            )}
            onClick={onDropdownClick}
          >
            <F0AvatarPerson
              src={user.avatarUrl}
              firstName={user.firstName}
              lastName={user.lastName}
              size="xs"
            />
            <OneEllipsis>{`${user.firstName} ${user.lastName}`}</OneEllipsis>
          </button>
        </Dropdown>
      </div>
      {showActivityButton && (
        <Tooltip label={i18n.notifications} shortcut={activityButtonShortcut}>
          <div className="relative">
            <F0Button
              icon={BellIcon}
              label={i18n.notifications}
              onClick={onActivityButtonClick}
              variant="ghost"
              hideLabel
            />
            {hasActivityUpdates && (
              <div className="absolute -right-1 -top-1 rounded-full bg-f1-background">
                <Badge type="highlight" size="sm" icon={CircleIcon} />
              </div>
            )}
          </div>
        </Tooltip>
      )}
    </div>
  )
}
