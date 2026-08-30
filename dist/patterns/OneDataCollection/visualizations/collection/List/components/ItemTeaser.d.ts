import { AvatarVariant } from '../../../../../../components/avatars/F0Avatar';
export type ItemTeaserProps = {
    title: string;
    avatar?: AvatarVariant;
    description?: string[];
};
export declare const ItemTeaser: ({ title, avatar, description }: ItemTeaserProps) => import("react").JSX.Element;
