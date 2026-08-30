import { AvatarVariant } from '../../avatars/F0Avatar';
import { AlertAvatarProps } from '../../avatars/F0AvatarAlert';
import { ModuleId } from '../../avatars/F0AvatarModule';
import { IconType } from '../../F0Icon';
type CardAvatarVariant = AvatarVariant | {
    type: "emoji";
    emoji: string;
} | {
    type: "file";
    file: File;
} | {
    type: "icon";
    icon: IconType;
} | {
    type: "module";
    module: ModuleId;
} | {
    type: "alert";
    variant: AlertAvatarProps["type"];
} | {
    type: "date";
    date: Date;
};
type CardAvatarSize = "sm" | "md" | "lg";
interface CardAvatarProps {
    /**
     * The avatar to display
     */
    avatar: CardAvatarVariant;
    /**
     * Whether the avatar is displayed with an overlay
     */
    overlay?: boolean;
    /**
     * Whether the avatar is displayed in a compact layout
     */
    compact?: boolean;
    /**
     * Explicit size override. When omitted, the size derives from `compact`
     * (sm) or the default vertical layout (lg). Passing a size also signals
     * inline usage (e.g. the horizontal card) and drops the vertical margin.
     */
    size?: CardAvatarSize;
}
export declare function CardAvatar({ avatar, overlay, compact, size, }: CardAvatarProps): import("react").JSX.Element;
export type { CardAvatarVariant };
