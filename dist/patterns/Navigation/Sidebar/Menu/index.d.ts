import { AvatarVariant } from '../../../../components/avatars/F0Avatar';
import { IconType } from '../../../../components/F0Icon';
import { NavigationItem } from '../../../../experimental/Navigation/utils';
export interface MenuItem extends NavigationItem {
    icon: IconType;
    badge?: number;
    tag?: string;
}
type FavoriteMenuItem = ({
    type: "icon";
    icon: IconType;
} | {
    type: "avatar";
    avatar?: AvatarVariant;
}) & {
    tooltip?: string;
} & NavigationItem;
export interface MenuCategory {
    id: string;
    title: string;
    items: MenuItem[];
    isRoot?: boolean;
    isOpen?: boolean;
    isSortable?: boolean;
}
export interface MenuProps {
    tree: MenuCategory[];
    favorites?: FavoriteMenuItem[];
    onCollapse?: (category: MenuCategory, isOpen: boolean) => void;
    onSort?: (categories: MenuCategory[]) => void;
    onFavoritesChange?: (favorites: FavoriteMenuItem[]) => void;
}
export declare function Menu({ tree, onCollapse, onSort, onFavoritesChange, favorites, }: MenuProps): import("react").JSX.Element;
export {};
