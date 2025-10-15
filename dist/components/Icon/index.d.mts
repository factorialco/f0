import * as cva from 'cva';
import { VariantProps } from 'cva';
import react__default, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { SvgProps, Svg } from 'react-native-svg';

declare const iconVariants: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
interface IconProps extends SvgProps, VariantProps<typeof iconVariants> {
    icon: IconType;
    testID?: string;
    className?: string;
    variant?: "default" | "critical" | "neutral" | "ghost" | "outline" | "promote";
    isPressed?: boolean;
}
type IconType = ForwardRefExoticComponent<SvgProps & RefAttributes<Svg> & {
    className?: string;
}>;
declare function applyIconInterop(icon: IconType): IconType;
declare const Icon: react__default.ForwardRefExoticComponent<IconProps & react__default.RefAttributes<Svg>>;

export { Icon, type IconProps, type IconType, applyIconInterop };
