import { ComponentProps } from "react";
import { Avatar as AvatarComponent } from "../../../ui/avatar";
import { type F0IconProps, type IconType } from "../../primitives/F0Icon";
import { AvatarBadge } from "../types";
type ShadAvatarProps = ComponentProps<typeof AvatarComponent>;
type Props = {
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
    ({ src, name, size, type, color, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, icon, }: Props): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=index.d.ts.map