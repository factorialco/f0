import * as cva from 'cva';
import { VariantProps } from 'cva';
import react__default from 'react';
import { View } from 'react-native';
import { IconType } from '../Icon/index.js';
import 'react-native-svg';

declare const variants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote"];
type ButtonVariant = (typeof variants)[number];
declare const sizes: readonly ["sm", "md", "lg"];
type ButtonSize = (typeof sizes)[number];
declare const buttonVariants: (props?: ({
    variant?: "default" | "critical" | "neutral" | "ghost" | "outline" | "promote" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
    disabled?: boolean | undefined;
    round?: boolean | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
interface ButtonProps extends VariantProps<typeof buttonVariants> {
    label: string;
    onPress?: () => void | Promise<unknown>;
    disabled?: boolean;
    loading?: boolean;
    icon?: IconType;
    emoji?: string;
    hideLabel?: boolean;
    className?: string;
    accessibilityHint?: string;
    showBadge?: boolean;
    fullWidth?: boolean;
}
declare const Button: react__default.ForwardRefExoticComponent<ButtonProps & react__default.RefAttributes<View>>;

export { Button, type ButtonProps, type ButtonSize, type ButtonVariant, sizes, variants };
