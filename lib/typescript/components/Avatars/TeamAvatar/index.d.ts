import { ComponentProps } from "react";
import { BaseAvatar } from "../BaseAvatar";
import { AvatarBadge } from "../types";
type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;
type Props = {
    name: string;
    src?: string;
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;
export declare const TeamAvatar: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=index.d.ts.map