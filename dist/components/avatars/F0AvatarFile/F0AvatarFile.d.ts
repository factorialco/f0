import { WithDataTestIdProps } from '../../../lib/data-testid';
import { Avatar } from '../../../ui/Avatar';
import { AvatarBadge } from '../F0Avatar/types';
import { BaseAvatarProps } from '../internal/BaseAvatar';
import { AvatarFileSize, FileDef } from './types';
export type F0AvatarFileProps = Omit<React.ComponentPropsWithoutRef<typeof Avatar>, "type" | "size"> & {
    file: FileDef;
    size?: AvatarFileSize;
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby"> & WithDataTestIdProps;
declare const F0AvatarFile: import('react').ForwardRefExoticComponent<Omit<Omit<Omit<import('@radix-ui/react-avatar').AvatarProps & import('react').RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: typeof import('../../../ui/Avatar').internalAvatarSizes[number];
    type?: typeof import('../../../ui/Avatar').internalAvatarTypes[number];
    color?: typeof import('../../../ui/Avatar').internalAvatarColors[number];
} & import('react').RefAttributes<HTMLSpanElement>, "ref">, "type" | "size"> & {
    file: FileDef;
    size?: AvatarFileSize;
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby"> & WithDataTestIdProps & import('react').RefAttributes<HTMLSpanElement>>;
export { F0AvatarFile, type FileDef };
