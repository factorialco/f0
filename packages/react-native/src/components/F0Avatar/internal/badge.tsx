import React from "react"

import { F0Badge, type F0BadgeSize } from "../../F0Badge"
import { type AvatarBadge, type F0AvatarModuleSize } from "../F0Avatar.types"
import { F0AvatarModule } from "../F0AvatarModule"

type RenderAvatarBadgeParams = {
  badge: AvatarBadge
  badgeSize: F0BadgeSize
  moduleSize: F0AvatarModuleSize
}

export function renderAvatarBadge({
  badge,
  badgeSize,
  moduleSize,
}: RenderAvatarBadgeParams): React.ReactNode {
  if (badge.type === "module") {
    return <F0AvatarModule module={badge.module} size={moduleSize} />
  }

  return <F0Badge variant={badge.type} icon={badge.icon} size={badgeSize} />
}

export function getAvatarBadgeContainerClassName(badge?: AvatarBadge): string {
  return badge?.type === "module" ? "inline-flex p-[3px]" : "inline-flex "
}
