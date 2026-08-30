import { ReactNode } from 'react';
export interface TwoColumnLayoutProps {
    children: ReactNode;
    sideContent: ReactNode;
    mainColumnPosition?: "left" | "right";
    sticky?: boolean;
    /**
     * Which column stacks on top when the layout collapses to one column
     * (below `md`). Defaults to `"side"` (the historical behavior). Use `"main"`
     * to keep the main content first on narrow viewports.
     */
    responsiveStackOrder?: "side" | "main";
}
export declare const TwoColumnLayout: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<TwoColumnLayoutProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
