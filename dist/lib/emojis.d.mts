import * as react_jsx_runtime from 'react/jsx-runtime';

interface EmojiImageProps {
    size?: {
        icon: string;
        text: string;
    };
    className?: string;
    emoji: string;
}
declare function EmojiImage({ emoji, size, className }: EmojiImageProps): react_jsx_runtime.JSX.Element;

export { EmojiImage, type EmojiImageProps };
