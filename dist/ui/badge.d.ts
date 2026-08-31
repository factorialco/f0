import { VariantProps } from 'cva';
import * as React from "react";
declare const badgeVariants: (props?: ({
    readonly variant?: "info" | "name" | "critical" | "warning" | "positive" | "neutral" | "default" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): React.JSX.Element;
export { Badge, badgeVariants };
