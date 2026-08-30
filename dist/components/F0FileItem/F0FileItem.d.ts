import { FileDef } from '../avatars/F0AvatarFile/types';
import { IconType } from '../F0Icon';
import { HTMLAttributes } from 'react';
export type F0FileAction = {
    icon?: IconType;
    label: string;
    onClick: () => void;
    critical?: boolean;
};
export declare const f0FileItemSizes: readonly ["md", "lg"];
export type F0FileItemSize = (typeof f0FileItemSizes)[number];
export interface F0FileItemProps extends HTMLAttributes<HTMLDivElement> {
    file: File | FileDef;
    actions?: F0FileAction[];
    disabled?: boolean;
    size?: F0FileItemSize;
}
/** @deprecated Use F0FileAction */
export type FileAction = F0FileAction;
/** @deprecated Use F0FileItemProps */
export type FileItemProps = F0FileItemProps;
/** @deprecated Use F0FileItemSize */
export type FileItemSize = F0FileItemSize;
/**
 * @experimental This is an experimental component, use it at your own risk
 */
declare const F0FileItem: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<F0FileItemProps & import('react').RefAttributes<HTMLDivElement>>>;
export { F0FileItem };
/** @deprecated Use F0FileItem */
export declare const FileItem: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<F0FileItemProps & import('react').RefAttributes<HTMLDivElement>>>;
