import { BadgeProps } from '../../../ui/IconBadge';
import { F0AvatarModuleProps } from '../F0AvatarModule';
import { AvatarFileSize, FileDef } from './types';
type FileTypeInfo = {
    type: string;
    color: string;
};
declare const getFileTypeInfo: (file: FileDef) => FileTypeInfo;
export declare const getBadgeSize: (size?: AvatarFileSize) => BadgeProps["size"];
export declare const getAvatarSize: (size?: AvatarFileSize) => F0AvatarModuleProps["size"] | undefined;
export { getFileTypeInfo };
export type { FileTypeInfo };
