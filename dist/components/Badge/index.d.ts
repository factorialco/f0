import * as react_jsx_runtime from 'react/jsx-runtime';
import * as cva from 'cva';
import { VariantProps } from 'cva';
import { IconType } from '../Icon/index.js';
import 'react';
import 'react-native-svg';

declare const badgeVariants: (props?: ({
    type?: "critical" | "neutral" | "highlight" | "positive" | "warning" | undefined;
    size?: "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
declare const iconSizes: {
    readonly xs: "xs";
    readonly sm: "xs";
    readonly md: "sm";
    readonly lg: "md";
};
interface BadgeProps extends VariantProps<typeof badgeVariants> {
    icon: IconType;
    size?: keyof typeof iconSizes;
}
declare const Badge: ({ type, size, icon }: BadgeProps) => react_jsx_runtime.JSX.Element;

export { Badge, type BadgeProps };
