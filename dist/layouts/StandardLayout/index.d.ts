import { VariantProps } from 'cva';
import { default as React } from 'react';
export interface StandardLayoutProps extends VariantProps<typeof layoutVariants> {
    children?: React.ReactNode;
}
declare const layoutVariants: (props?: ({
    variant?: "narrow" | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
export declare const StandardLayout: import('../../lib/data-testid').WithDataTestIdReturnType<React.ForwardRefExoticComponent<Omit<StandardLayoutProps & React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement | SVGElement>>>;
export {};
