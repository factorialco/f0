import { default as React } from 'react';
import { AvatarBadge } from '../../../components/avatars/F0Avatar/types';
import { IconType } from '../../../components/F0Icon';
import { TagDotProps } from '../../../components/tags/F0TagDot';
import { TagRawProps } from '../../../components/tags/F0TagRaw';
export type OnePersonListItemProps = {
    person: {
        firstName: string;
        lastName: string;
        avatarUrl?: string;
        avatarBadge?: AvatarBadge;
    };
    description?: string;
    bottomTags: Omit<TagRawProps, "noBorder">[];
    rightTag?: TagDotProps;
    actions?: {
        primary?: {
            icon?: IconType;
            label: string;
            onClick: () => void;
        };
        secondary?: {
            icon: IconType;
            onClick: () => void;
        };
    };
    info?: string;
    onClick: () => void;
    withPointerCursor?: boolean;
};
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const OnePersonListItem: import('../../../lib/data-testid').WithDataTestIdReturnType<React.ForwardRefExoticComponent<OnePersonListItemProps & React.RefAttributes<HTMLDivElement>> & {
    Skeleton: () => React.JSX.Element;
}>;
