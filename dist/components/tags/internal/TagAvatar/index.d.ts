import { AvatarVariant } from '../../../avatars/F0Avatar';
type Props = {
    text: string;
    deactivated?: boolean;
    avatar: AvatarVariant;
    onClick?: () => void;
};
export declare const F0TagAvatar: import('react').ForwardRefExoticComponent<Props & import('react').RefAttributes<HTMLDivElement>>;
export {};
