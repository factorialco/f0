import * as react_jsx_runtime from 'react/jsx-runtime';
import * as cva from 'cva';
import { VariantProps } from 'cva';
import { IconType } from '../Icon/index.js';
import 'react';
import 'react-native-svg';

declare const chipContainerVariants: (props?: ({
    variant?: "default" | "selected" | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
declare const chipTextVariants: (props?: ({
    variant?: "default" | "selected" | undefined;
} & ({
    class?: cva.ClassValue;
    className?: never;
} | {
    class?: never;
    className?: cva.ClassValue;
})) | undefined) => string;
interface ChipProps extends VariantProps<typeof chipContainerVariants> {
    label: string;
    icon?: IconType;
    onClick?: () => void;
    onClose?: () => void;
}
declare const OneChip: ({ label, variant, onClick, onClose, icon, }: ChipProps) => react_jsx_runtime.JSX.Element;

export { type ChipProps, OneChip, chipContainerVariants, chipTextVariants };
