export type EmojiPickerProps = {
    className?: string;
    data?: unknown;
    onEmojiSelect?: (emoji: {
        native: string;
    }) => void;
    locale?: string;
    icons?: "outline" | "solid" | "auto";
    set?: string;
    theme?: "light" | "dark" | "auto";
    emojiButtonSize?: number;
    emojiButtonRadius?: string;
    emojiSize?: number;
    maxFrequentRows?: number;
    skinTonePosition?: "preview" | "search" | "none";
    previewPosition?: "top" | "bottom" | "none";
    searchPosition?: "sticky" | "static" | "none" | "top";
    navPosition?: "top" | "bottom" | "none";
    dynamicWidth?: boolean;
};
/**
 * Emoji-mart's <em-emoji-picker> wrapped as a React component (drop-in for
 * `@emoji-mart/react`). Wrapped in a render error boundary so a mount failure
 * degrades to nothing instead of unmounting the surrounding UI.
 */
export declare function EmojiPicker(props: EmojiPickerProps): import("react").JSX.Element;
