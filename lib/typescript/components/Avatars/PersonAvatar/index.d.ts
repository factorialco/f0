import { ComponentProps } from "react";
import { BaseAvatar } from "../BaseAvatar";
import { AvatarBadge } from "../types";
type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;
export type PersonAvatarProps = {
    firstName: string;
    lastName: string;
    src?: string;
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
    deactivated?: boolean;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;
export declare function PersonAvatar({ firstName, lastName, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, deactivated, }: PersonAvatarProps): import("node_modules/@types/react").JSX.Element;
export declare namespace PersonAvatar {
    var displayName: string;
}
export {};
//# sourceMappingURL=index.d.ts.map