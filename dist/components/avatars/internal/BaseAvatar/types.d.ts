import { ReactElement } from 'react';
import { AvatarBadge } from '../../F0Avatar/types';
import { F0IconProps, IconType } from '../../../F0Icon';
import { InternalAvatarProps } from '../../../../ui/Avatar';
export declare const avatarSizes: readonly ["xs", "sm", "md", "lg", "xl", "2xl"];
export type AvatarSize = (typeof avatarSizes)[number];
export declare const sizesMapping: Record<NonNullable<InternalAvatarProps["size"]>, AvatarSize>;
export type BaseAvatarProps = {
    /**
     * The type of the avatar.
     */
    type: InternalAvatarProps["type"];
    /**
     * The name of the avatar.
     */
    name: string | string[];
    /**
     * The source of the avatar's image.
     */
    src?: string;
    /**
     * This is a workaround until we implement the ability to deal with images
     */
    flag?: ReactElement;
    /**
     * Optional icon to display on the avatar. Will override the name or image if provided.
     */
    icon?: {
        icon: IconType;
        color?: F0IconProps["color"];
    };
    /**
     * The color of the avatar.
     * @default "random"
     */
    color?: InternalAvatarProps["color"] | "random";
    /**
     * The badge to display on the avatar. Can be a module badge or a custom badge.
     */
    badge?: AvatarBadge;
} & Partial<Pick<InternalAvatarProps, "aria-label" | "aria-labelledby">> & ({
    size: AvatarSize;
} | {
    /**
     * @deprecated Use AvatarSize instead (xs, sm, md, lg, xl, 2xl)
     */
    size: InternalAvatarProps["size"];
});
