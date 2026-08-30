import { RefObject } from 'react';
type CelebrationAvatarProps = {
    firstName: string;
    lastName: string;
    src?: string;
    canReact: boolean;
    lastEmojiReaction?: string;
    onReactionSelect?: (emoji: string) => void;
    pickerRef?: RefObject<HTMLDivElement>;
};
export declare function CelebrationAvatar({ firstName, lastName, src, canReact, lastEmojiReaction, onReactionSelect, pickerRef, }: CelebrationAvatarProps): import("react").JSX.Element;
export {};
