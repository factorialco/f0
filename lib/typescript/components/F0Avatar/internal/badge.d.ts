import React from "react";
import { type F0BadgeSize } from "../../F0Badge";
import { type AvatarBadge, type F0AvatarModuleSize } from "../F0Avatar.types";
type RenderAvatarBadgeParams = {
    badge: AvatarBadge;
    badgeSize: F0BadgeSize;
    moduleSize: F0AvatarModuleSize;
};
export declare function renderAvatarBadge({ badge, badgeSize, moduleSize, }: RenderAvatarBadgeParams): React.ReactNode;
export declare function getAvatarBadgeContainerClassName(badge?: AvatarBadge): string;
export {};
//# sourceMappingURL=badge.d.ts.map