interface User {
    name: string;
}
export interface ReactionProps {
    emoji: string;
    initialCount: number;
    hasReacted?: boolean;
    users?: User[];
    /** Resolve the complete user list on first hover or keyboard focus. */
    loadUsers?: () => Promise<User[]>;
    onInteraction?: (emoji: string) => void;
    size?: "sm" | "md" | "lg";
}
export declare function Reaction({ emoji, initialCount, hasReacted, users, loadUsers, onInteraction, size, }: ReactionProps): import("react").JSX.Element;
export {};
