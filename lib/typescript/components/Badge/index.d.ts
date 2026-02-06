import { type VariantProps } from "tailwind-variants";
import { type IconType } from "../Icon";
declare const badgeVariants: import("tailwind-variants").TVReturnType<{
    type: {
        neutral: string;
        highlight: string;
        positive: string;
        critical: string;
        warning: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "flex shrink-0 items-center justify-center rounded-full", {
    type: {
        neutral: string;
        highlight: string;
        positive: string;
        critical: string;
        warning: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    type: {
        neutral: string;
        highlight: string;
        positive: string;
        critical: string;
        warning: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "flex shrink-0 items-center justify-center rounded-full", unknown, unknown, undefined>>;
declare const iconSizes: {
    readonly xs: "xs";
    readonly sm: "xs";
    readonly md: "sm";
    readonly lg: "md";
};
export interface BadgeProps extends VariantProps<typeof badgeVariants> {
    icon: IconType;
    size?: keyof typeof iconSizes;
}
export declare const Badge: ({ type, size, icon }: BadgeProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map