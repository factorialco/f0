import { type VariantProps } from "tailwind-variants";
import { type IconType } from "../Icon";
export declare const chipContainerVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        selected: string;
    };
}, undefined, "flex items-center gap-1 rounded-full border border-solid border-f1-border px-2 py-0.5 grow-0", {
    variant: {
        default: string;
        selected: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        selected: string;
    };
}, undefined, "flex items-center gap-1 rounded-full border border-solid border-f1-border px-2 py-0.5 grow-0", unknown, unknown, undefined>>;
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
interface ChipProps extends VariantProps<typeof chipContainerVariants> {
    label: string;
    icon?: IconType;
    onClick?: () => void;
    onClose?: () => void;
}
export declare const OneChip: ({ label, variant, onClick, onClose, icon, }: ChipProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map