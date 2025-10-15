import * as react_jsx_runtime from 'react/jsx-runtime';
import * as cva from 'cva';
import { VariantProps } from 'cva';
import { IconType } from '../../Icon/index.mjs';
import { ModuleId } from './modules.mjs';
import 'react';
import 'react-native-svg';

declare const moduleAvatarVariants: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
type ModuleAvatarProps = VariantProps<typeof moduleAvatarVariants> & ({
    module: ModuleId;
} | {
    /**
     * @deprecated This component should only render module related icons, not arbitrary icons. The `icon` property will be removed soon. Use the `module` prop instead.
     */
    icon: IconType;
});
declare const ModuleAvatar: {
    ({ size, ...props }: ModuleAvatarProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { ModuleAvatar, type ModuleAvatarProps };
