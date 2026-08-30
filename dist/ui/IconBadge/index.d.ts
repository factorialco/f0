import { VariantProps } from 'cva';
import { IconType } from '../../components/F0Icon';
declare const badgeVariants: (props?: ({
    type?: "critical" | "warning" | "positive" | "neutral" | "highlight" | undefined;
    size?: "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
declare const iconSizes: {
    readonly xs: "xs";
    readonly sm: "xs";
    readonly md: "sm";
    readonly lg: "md";
};
export interface BadgeProps extends VariantProps<typeof badgeVariants> {
    icon: IconType;
    type?: VariantProps<typeof badgeVariants>["type"];
    size?: keyof typeof iconSizes;
}
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Badge: import('../../lib/data-testid').WithDataTestIdReturnType<({ type, size, icon }: BadgeProps) => import("react").JSX.Element>;
export {};
