import { BaseAvatarProps } from '../internal/BaseAvatar';
export declare const avatarEmojiSizes: readonly ["sm", "md", "lg", "xl"];
export type F0AvatarEmojiProps = {
    emoji: string;
    size?: (typeof avatarEmojiSizes)[number];
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;
export declare const F0AvatarEmoji: {
    ({ emoji, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: F0AvatarEmojiProps): import("react").JSX.Element;
    displayName: string;
};
