import { ActionLinkProps, ActionLinkVariant } from '../../ui/Action';
export type F0LinkProps = Omit<ActionLinkProps, "variant" | "href"> & {
    variant?: ActionLinkVariant;
    stopPropagation?: boolean;
    href?: string;
};
export declare const F0Link: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<ActionLinkProps, "href" | "variant"> & {
    variant?: ActionLinkVariant;
    stopPropagation?: boolean;
    href?: string;
} & import('react').RefAttributes<HTMLAnchorElement>>>;
