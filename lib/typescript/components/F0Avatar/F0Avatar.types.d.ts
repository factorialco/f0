import type { F0BadgeProps, F0BadgeVariant } from "../F0Badge";
import { type IconType } from "../primitives/F0Icon";
import { type FileLike } from "./internal/file-type";
import { type ModuleId } from "./internal/module-icons";
export type { ModuleId } from "./internal/module-icons";
export type { FileLike } from "./internal/file-type";
export type AvatarBadge = ({
    type: "module";
    module: ModuleId;
} | {
    type: F0BadgeVariant;
    icon: F0BadgeProps["icon"];
}) & {
    tooltip?: string;
};
export declare const F0_AVATAR_BANNED_PROPS: readonly ["className", "style"];
type F0AvatarBannedProps = {
    [K in (typeof F0_AVATAR_BANNED_PROPS)[number]]?: never;
};
/**
 * Figma-aligned size scale for main avatars (Person, Company, Team, File).
 * Maps to internal ui/avatar sizes.
 */
export declare const F0_AVATAR_SIZES: readonly ["xs", "sm", "md", "lg", "xl", "2xl"];
export type F0AvatarSize = (typeof F0_AVATAR_SIZES)[number];
export declare const F0_AVATAR_UTILITY_SIZES: readonly ["sm", "md", "lg"];
export type F0AvatarUtilitySize = (typeof F0_AVATAR_UTILITY_SIZES)[number];
export declare const F0_AVATAR_FLAG_SIZES: readonly ["xs", "sm", "md", "lg"];
export type F0AvatarFlagSize = (typeof F0_AVATAR_FLAG_SIZES)[number];
export declare const F0_AVATAR_ALERT_TYPES: readonly ["critical", "warning", "info", "positive"];
export type F0AvatarAlertType = (typeof F0_AVATAR_ALERT_TYPES)[number];
export declare const F0_AVATAR_MODULE_SIZES: readonly ["xxs", "xs", "sm", "md", "lg", "xl"];
export type F0AvatarModuleSize = (typeof F0_AVATAR_MODULE_SIZES)[number];
export type F0AvatarPersonProps = {
    firstName: string;
    lastName: string;
    src?: string;
    size?: F0AvatarSize;
    badge?: AvatarBadge;
    deactivated?: boolean;
    "aria-label"?: string;
    "aria-labelledby"?: string;
} & F0AvatarBannedProps;
export type F0AvatarTeamProps = {
    name: string;
    src?: string;
    size?: F0AvatarSize;
    badge?: AvatarBadge;
    "aria-label"?: string;
    "aria-labelledby"?: string;
} & F0AvatarBannedProps;
export type F0AvatarCompanyProps = {
    name: string;
    src?: string;
    size?: F0AvatarSize;
    badge?: AvatarBadge;
    "aria-label"?: string;
    "aria-labelledby"?: string;
} & F0AvatarBannedProps;
export type F0AvatarEmojiProps = {
    emoji: string;
    size?: F0AvatarUtilitySize;
} & F0AvatarBannedProps;
export type F0AvatarFileProps = {
    file: FileLike;
    size?: F0AvatarSize;
    badge?: AvatarBadge;
} & F0AvatarBannedProps;
export type F0AvatarIconProps = {
    icon: IconType;
    size?: F0AvatarUtilitySize;
} & F0AvatarBannedProps;
export type F0AvatarFlagProps = {
    flag: string;
    size?: F0AvatarFlagSize;
    badge?: AvatarBadge;
} & F0AvatarBannedProps;
export type F0AvatarAlertProps = {
    alertType: F0AvatarAlertType;
    size?: F0AvatarUtilitySize;
} & F0AvatarBannedProps;
export type F0AvatarDateProps = {
    date: Date;
} & F0AvatarBannedProps;
export type F0AvatarModuleProps = {
    module: ModuleId;
    size?: F0AvatarModuleSize;
} & F0AvatarBannedProps;
export type F0AvatarVariant = ({
    type: "person";
} & Omit<F0AvatarPersonProps, "size">) | ({
    type: "team";
} & Omit<F0AvatarTeamProps, "size">) | ({
    type: "company";
} & Omit<F0AvatarCompanyProps, "size">) | ({
    type: "emoji";
} & Omit<F0AvatarEmojiProps, "size">) | ({
    type: "file";
} & Omit<F0AvatarFileProps, "size">) | ({
    type: "icon";
} & Omit<F0AvatarIconProps, "size">) | ({
    type: "flag";
} & Omit<F0AvatarFlagProps, "size">) | ({
    type: "alert";
} & Omit<F0AvatarAlertProps, "size">) | ({
    type: "date";
} & Omit<F0AvatarDateProps, "size">) | ({
    type: "module";
} & Omit<F0AvatarModuleProps, "size">);
export type F0AvatarProps = {
    avatar: F0AvatarVariant;
    size?: F0AvatarSize;
} & F0AvatarBannedProps;
//# sourceMappingURL=F0Avatar.types.d.ts.map