import { Avatar as AvatarComponent } from "../../../ui/avatar";
import { ComponentProps } from "react";
import { AvatarBadge } from "../types";
type ShadAvatarProps = ComponentProps<typeof AvatarComponent>;
type Props = {
    type: ShadAvatarProps["type"];
    name: string | string[];
    src?: string;
    size?: ShadAvatarProps["size"];
    color?: ShadAvatarProps["color"] | "random";
    badge?: AvatarBadge;
} & Pick<ShadAvatarProps, "aria-label" | "aria-labelledby">;
export declare const BaseAvatar: {
    ({ src, name, size, type, color, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=index.d.ts.map