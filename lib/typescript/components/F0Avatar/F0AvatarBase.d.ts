import { ComponentProps } from "react";
import { type F0IconProps, type IconType } from "../primitives/F0Icon";
import { Avatar as AvatarComponent } from "./F0Avatar.primitives";
import { type AvatarBadge } from "./F0Avatar.types";
type ShadAvatarProps = ComponentProps<typeof AvatarComponent>;
export type BaseAvatarProps = {
    type: ShadAvatarProps["type"];
    name: string | string[];
    src?: string;
    size?: ShadAvatarProps["size"];
    color?: ShadAvatarProps["color"] | "random";
    badge?: AvatarBadge;
    icon?: {
        icon: IconType;
        color?: F0IconProps["color"];
    };
} & Pick<ShadAvatarProps, "aria-label" | "aria-labelledby">;
export declare const BaseAvatar: {
    ({ src, name, size, type, color, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, icon, }: BaseAvatarProps): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=F0AvatarBase.d.ts.map