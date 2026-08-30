import { VariantProps } from 'cva';
import { BaseAvatarProps } from '../internal/BaseAvatar';
import { ModuleId } from './modules';
declare const moduleAvatarVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | "4xs" | "3xs" | "2xs" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
export type F0AvatarModuleProps = VariantProps<typeof moduleAvatarVariants> & {
    module: ModuleId;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;
/**
 * Module avatar
 * @description A component that displays a module avatar
 */
export declare function F0AvatarModule({ size, module, ...props }: F0AvatarModuleProps): import("react").JSX.Element;
export {};
