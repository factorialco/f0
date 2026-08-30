import { VariantProps } from 'cva';
declare const emojiVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
/**
 * How an emoji is drawn.
 *
 * - `image` (default) swaps it for a twemoji SVG, so every platform shows the
 *   same picture.
 * - `native` renders the character and lets the OS draw it, so people see the
 *   emoji they know from the rest of their machine.
 *
 * F0Chat asks for `native`; the rest of F0 stays on `image` for now. Flipping
 * this default is the single switch that takes the whole design system native.
 */
export type EmojiRenderMode = "image" | "native";
export interface EmojiImageProps extends VariantProps<typeof emojiVariants> {
    emoji: string;
    alt?: string;
    mode?: EmojiRenderMode;
}
export declare function EmojiImage({ emoji, size, alt, mode, }: EmojiImageProps): import("react").JSX.Element;
export declare function getEmojiLabel(emoji: string): string;
export {};
