import { internalAvatarTypes } from '../../../../ui/Avatar';
import { AvatarVariant, AvatarVariants } from '../../F0Avatar';
import { AvatarListSize, F0AvatarListExtras } from '../types';
type Props = {
    count: number;
    size?: AvatarListSize;
    type?: (typeof internalAvatarTypes)[number];
    list?: (Omit<AvatarVariant, "type"> & F0AvatarListExtras)[];
    avatarType?: AvatarVariants;
};
export declare const MaxCounter: ({ count, size, type, list, avatarType, }: Props) => import("react").JSX.Element;
export {};
