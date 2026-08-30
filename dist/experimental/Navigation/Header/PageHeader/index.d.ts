import { StatusVariant } from '../../../../components/tags/F0TagStatus';
import { ModuleId } from '../../../../components/avatars/F0AvatarModule';
import { IconType } from '../../../../components/F0Icon';
import { ActionButtonVariant } from '../../../../ui/Action';
import { BreadcrumbsProps } from '../Breadcrumbs';
import { NavigationProps } from '../PageNavigation';
import { ProductUpdatesProp } from '../ProductUpdates';
export { PageHeaderNavigationContext, PageHeaderNavigationProvider, usePageHeaderNavigation, } from './PageHeaderNavigationContext';
export { usePageHeaderItemNavigation, type PageHeaderItemNavigationInput, type UsePageHeaderItemNavigationConfig, } from './usePageHeaderItemNavigation';
export type PageAction = {
    label: string;
    icon: IconType;
    variant?: ActionButtonVariant;
} & ({
    href: string;
} | {
    onClick: () => void;
} | {
    actions: Array<{
        label: string;
        href: string;
    }>;
});
type HeaderProps = {
    module: {
        id: ModuleId;
        name: string;
        href: string;
    };
    statusTag?: {
        text: string;
        variant: StatusVariant;
        tooltip?: string;
    };
    actions?: PageAction[];
    navigation?: NavigationProps;
    embedded?: boolean;
    breadcrumbs?: BreadcrumbsProps["breadcrumbs"];
    productUpdates?: {
        isVisible?: boolean;
    } & ProductUpdatesProp;
    favorites?: {
        isMarked: boolean;
        onChange: (newValue: boolean) => void;
        label: string;
    };
    oneSwitchTooltip?: {
        whenDisabled?: string;
        whenEnabled?: string;
    };
    oneSwitchAutoOpen?: boolean;
    /**
     * Hide the per-page One switch. Use when One is reachable from elsewhere
     * (e.g. a sidebar tab) so the page header doesn't duplicate the entry point.
     */
    hideOneSwitch?: boolean;
};
export declare function PageHeader({ module, statusTag, breadcrumbs, actions, embedded, navigation, productUpdates, favorites, oneSwitchTooltip, oneSwitchAutoOpen, hideOneSwitch, }: HeaderProps): import("react").JSX.Element;
