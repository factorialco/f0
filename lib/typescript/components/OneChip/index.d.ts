import { type VariantProps } from "tailwind-variants";
import { type IconType } from "../primitives/F0Icon";
/**
 * @deprecated Use `f0ChipContainerVariants` from `../F0Chip/F0Chip.styles` instead.
 */
export declare const chipContainerVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        selected: string;
    };
}, undefined, "flex items-center gap-1 rounded-full border border-solid border-f0-border px-2 py-0.5 grow-0", {
    variant: {
        default: string;
        selected: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        selected: string;
    };
}, undefined, "flex items-center gap-1 rounded-full border border-solid border-f0-border px-2 py-0.5 grow-0", unknown, unknown, undefined>>;
/**
 * @deprecated Use `f0ChipTextVariants` from `../F0Chip/F0Chip.styles` instead.
 */
export declare const chipTextVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        selected: string;
    };
}, undefined, "font-medium", {
    variant: {
        default: string;
        selected: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        selected: string;
    };
}, undefined, "font-medium", unknown, unknown, undefined>>;
/**
 * @deprecated Use `F0Chip` from `src/components/F0Chip` instead.
 */
interface OneChipProps extends VariantProps<typeof chipContainerVariants> {
    label: string;
    icon?: IconType;
    onClick?: () => void;
    onClose?: () => void;
}
/**
 * @deprecated Use `F0Chip` from `src/components/F0Chip` instead.
 * Migration: replace `OneChip` with `F0Chip` and rename `onClick` to `onPress`.
 */
export declare const OneChip: ({ label, variant, onClick, onClose, icon, }: OneChipProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map