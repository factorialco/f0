import { VariantProps } from 'cva';
import * as NavigationMenuPrimitives from "@radix-ui/react-navigation-menu";
import * as React from "react";
declare const tabNavigationVariants: (props?: ({
    secondary?: boolean | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
interface TabNavigationProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Root>, VariantProps<typeof tabNavigationVariants> {
}
declare const TabNavigation: React.ForwardRefExoticComponent<TabNavigationProps & React.RefAttributes<HTMLElement>>;
declare const tabNavigationLinkVariants: (props?: ({
    secondary?: boolean | undefined;
    disabled?: boolean | undefined;
} & ({
    class?: import('cva').ClassValue;
    className?: never;
} | {
    class?: never;
    className?: import('cva').ClassValue;
})) | undefined) => string;
interface TabNavigationLinkProps extends Omit<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Link>, "onSelect">, VariantProps<typeof tabNavigationLinkVariants> {
    active?: boolean;
}
declare const TabNavigationLink: React.ForwardRefExoticComponent<TabNavigationLinkProps & React.RefAttributes<HTMLAnchorElement>> & {
    Skeleton: React.FC<{
        className?: string;
    }>;
};
export { TabNavigation, TabNavigationLink };
