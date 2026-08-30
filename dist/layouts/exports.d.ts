import { StandardLayoutProps } from './StandardLayout';
import { TwoColumnLayoutProps } from './TwoColumnLayout';
export type { StandardLayoutProps, TwoColumnLayoutProps };
export declare const StandardLayout: import('../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<StandardLayoutProps & import('react').HTMLAttributes<HTMLElement> & import('react').RefAttributes<HTMLElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
export declare const TwoColumnLayout: import('../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<TwoColumnLayoutProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
export declare const HomeLayout: import('../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<{
    widgets?: import('react').ReactNode[];
    children?: import('react').ReactNode;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement | SVGElement>>>;
export { Dashboard, type DashboardProps, type DashboardWidget, } from './Dashboard';
export * from './Layout';
