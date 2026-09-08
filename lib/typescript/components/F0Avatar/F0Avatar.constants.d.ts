import { type ComponentProps } from "react";
import type { F0BadgeSize } from "../F0Badge";
import { Avatar } from "./F0Avatar.primitives";
import { type F0AvatarFlagSize, type F0AvatarModuleSize, type F0AvatarSize, type F0AvatarUtilitySize } from "./F0Avatar.types";
import { type AvatarListSize } from "./F0AvatarList.types";
export type F0AvatarInternalSize = NonNullable<ComponentProps<typeof Avatar>["size"]>;
export declare const F0_AVATAR_SIZE_TO_INTERNAL_SIZE: Record<F0AvatarSize, F0AvatarInternalSize>;
export declare const F0_AVATAR_INTERNAL_SIZE_TO_MODULE_SIZE: Record<F0AvatarInternalSize, F0AvatarModuleSize>;
export declare const F0_AVATAR_INTERNAL_SIZE_TO_BADGE_SIZE: Record<F0AvatarInternalSize, F0BadgeSize>;
export declare const F0_AVATAR_INTERNAL_SIZE_TO_FLAG_SIZE: Record<F0AvatarInternalSize, F0AvatarFlagSize>;
export declare const F0_AVATAR_INTERNAL_SIZE_TO_UTILITY_SIZE: Record<F0AvatarInternalSize, F0AvatarUtilitySize>;
export declare const F0_AVATAR_FLAG_SIZE_TO_MODULE_SIZE: Record<F0AvatarFlagSize, F0AvatarModuleSize>;
export declare const F0_AVATAR_FLAG_SIZE_TO_BADGE_SIZE: Record<F0AvatarFlagSize, F0BadgeSize>;
export declare const F0_AVATAR_LIST_SIZE_TO_INTERNAL_SIZE: Record<AvatarListSize, Extract<F0AvatarInternalSize, "xsmall" | "small" | "medium">>;
//# sourceMappingURL=F0Avatar.constants.d.ts.map