export type CelebrationProps = {
    link: string;
    firstName: string;
    lastName: string;
    src?: string;
    onClick?: () => void;
    canReact?: boolean;
    lastEmojiReaction?: string;
    onReactionSelect?: (emoji: string) => void;
    type?: "birthday" | "anniversary" | "first-day";
    typeLabel: string;
    date: Date;
};
export declare const BaseCelebration: ({ link, firstName, lastName, src, onClick, canReact, lastEmojiReaction, onReactionSelect, type, typeLabel, date, }: CelebrationProps) => import("react").JSX.Element;
export declare const CelebrationSkeleton: () => import("react").JSX.Element;
export declare const Celebration: (({ link, firstName, lastName, src, onClick, canReact, lastEmojiReaction, onReactionSelect, type, typeLabel, date, }: CelebrationProps) => import("react").JSX.Element) & {
    Skeleton: () => import("react").JSX.Element;
};
