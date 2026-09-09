import { F0Button } from "@/components/F0Button"
import { Badge } from "@/ui/IconBadge"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { Bell as BellIcon, Circle as CircleIcon } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { DropdownItem } from "@/experimental/Navigation/Dropdown"

import { SidebarUser, SidebarUserMenu } from "../UserMenu"

interface SidebarFooterProps {
  user: SidebarUser
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
        <SidebarUserMenu
          user={user}
          options={options}
          onDropdownClick={onDropdownClick}
        />
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
