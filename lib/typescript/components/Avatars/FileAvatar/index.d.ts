import { ComponentProps } from "react";
import { BaseAvatar } from "../BaseAvatar";
import { AvatarBadge } from "../types";
import { FileLike } from "./utils";
type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;
type Props = {
    file: FileLike;
    className?: string;
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
};
export declare const FileAvatar: {
    ({ file, className, size, badge, ...props }: Props): import("react").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=index.d.ts.map