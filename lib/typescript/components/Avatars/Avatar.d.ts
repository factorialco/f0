import { sizes } from "../../ui/avatar";
import { ComponentProps, ReactNode } from "react";
import { CompanyAvatar } from "./CompanyAvatar";
import { PersonAvatar } from "./PersonAvatar";
import { TeamAvatar } from "./TeamAvatar";
type PersonAvatarProps = ComponentProps<typeof PersonAvatar>;
type TeamAvatarProps = ComponentProps<typeof TeamAvatar>;
type CompanyAvatarProps = ComponentProps<typeof CompanyAvatar>;
export type AvatarVariant = ({
    type: "person";
} & Omit<PersonAvatarProps, "size">) | ({
    type: "team";
} & Omit<TeamAvatarProps, "size">) | ({
    type: "company";
} & Omit<CompanyAvatarProps, "size">);
export declare const Avatar: ({ avatar, size, }: {
    avatar: AvatarVariant;
    size?: (typeof sizes)[number];
}) => ReactNode;
export {};
//# sourceMappingURL=Avatar.d.ts.map