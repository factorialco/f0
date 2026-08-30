import { IconType } from '../../../../../components/F0Icon';
import { ReactionsProps } from '../../../../social/Reactions';
import { DropdownItem } from '../../../../../experimental/Navigation/Dropdown';
import { PostDescriptionProps } from '../PostDescription';
import { PostEventProps } from '../PostEvent';
export type CommunityPostAction = {
    label?: string;
    icon?: IconType;
    onClick: () => void;
};
export type CommunityPostProps = {
    id: string;
    author?: {
        firstName: string;
        lastName: string;
        avatarUrl?: string;
        url?: string;
    };
    group: {
        title: string;
        onClick: () => void;
    };
    createdAt: Date;
    title: string;
    description?: PostDescriptionProps["content"];
    mediaUrl?: string;
    event?: PostEventProps;
    counters: {
        views?: string;
        comments: string;
    };
    reactions?: ReactionsProps;
    inLabel: string;
    comment: {
        label: string;
        onClick: () => void;
    };
    actions?: CommunityPostAction[];
    noVideoPreload?: boolean;
    /**
     * WHAT CLICKING THE POST DOES — and whether it does anything.
     *
     * OMIT IT once the post is the destination. In a feed the card is a way in, so
     * it takes a pointer cursor, a hover tint and a focus ring. Opened in a dialog
     * it is already what you came for, and every one of those says there is
     * somewhere further to go when there isn't: the tint follows the mouse across
     * a page you are reading, and clicking does nothing.
     */
    onClick?: (id: string) => void;
    noReactionsButton?: boolean;
    dropdownItems?: DropdownItem[];
    descriptionExpandable?: boolean;
    /**
     * Keeps the title as the post's ACCESSIBLE NAME but takes it out of the card —
     * for a container that already shows it, like a dialog carrying the post's
     * title in its own header. Without this the same words appear twice, an inch
     * apart.
     *
     * The title element stays in the DOM, `sr-only`: it is what the expanded
     * description points at (`aria-describedby`), so removing it would quietly
     * break that as well as the post's name.
     */
    hideTitle?: boolean;
};
export declare const BaseCommunityPost: ({ id, author, group, createdAt, title, description, onClick, mediaUrl, event, counters, reactions, inLabel, comment, actions, dropdownItems, noReactionsButton, descriptionExpandable, hideTitle, }: CommunityPostProps) => import("react").JSX.Element;
export type CommunityPostSkeletonProps = {
    withEvent?: boolean;
    withImage?: boolean;
};
export declare const CommunityPostSkeleton: ({ withEvent, withImage, }: CommunityPostSkeletonProps) => import("react").JSX.Element;
export declare const CommunityPost: (({ id, author, group, createdAt, title, description, onClick, mediaUrl, event, counters, reactions, inLabel, comment, actions, dropdownItems, noReactionsButton, descriptionExpandable, hideTitle, }: CommunityPostProps) => import("react").JSX.Element) & {
    Skeleton: ({ withEvent, withImage, }: CommunityPostSkeletonProps) => import("react").JSX.Element;
};
