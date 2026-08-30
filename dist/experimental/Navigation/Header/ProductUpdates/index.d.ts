import { ComponentProps } from 'react';
import { ModuleId } from '../../../../components/avatars/F0AvatarModule';
import { F0ButtonProps } from '../../../../components/F0Button';
import { DropdownMenu, DropdownMenuItem } from '../../../../ui/dropdown-menu';
type ProductUpdate = {
    title: string;
    href: string;
    mediaUrl: string;
    updated: string;
    unread?: boolean;
    onClick?: ComponentProps<typeof DropdownMenuItem>["onClick"];
};
type ProductUpdatesProp = {
    label: string;
    updatesPageUrl: string;
    getUpdates: () => Promise<Array<ProductUpdate>>;
    hasUnread?: boolean;
    currentModule: string;
    onOpenChange?: ComponentProps<typeof DropdownMenu>["onOpenChange"];
    onHeaderClick?: F0ButtonProps["onClick"];
    onItemClick?: ComponentProps<typeof DropdownMenuItem>["onClick"];
    emptyScreen: {
        title: string;
        description: string;
        buttonText: string;
    };
    errorScreen: {
        title: string;
        description: string;
        buttonText: string;
    };
    crossSelling?: {
        isVisible: boolean;
        sectionTitle: string;
        onClose?: () => void;
        products: Array<{
            title: string;
            description: string;
            onClick: () => void;
            dismissable: boolean;
            onClose?: () => void;
            trackVisibility?: (open: boolean) => void;
        } & ({
            module?: never;
            type: "one-campaign";
        } | {
            module: ModuleId;
            type?: never;
        })>;
    };
};
declare const ProductUpdates: ({ currentModule, label, getUpdates, updatesPageUrl, emptyScreen, errorScreen, onOpenChange, onHeaderClick, onItemClick, hasUnread, crossSelling, }: ProductUpdatesProp) => import("react").JSX.Element;
export { ProductUpdates, type ProductUpdate, type ProductUpdatesProp };
