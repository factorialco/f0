import { EntitySelectEntity } from '../types';
interface Props {
    entity: EntitySelectEntity;
    selected: boolean;
    onSelect: (entity: EntitySelectEntity) => void;
    onRemove: (entity: EntitySelectEntity) => void;
    marginLeft: "ml-0" | "ml-6";
    search: string;
    singleSelector?: boolean;
    goToFirst?: () => void;
    goToLast?: () => void;
    disabled?: boolean;
    hiddenAvatar?: boolean;
}
export declare function focusNextFocusable(currentElement: HTMLElement, goToFirst?: () => void): void;
export declare function focusPreviousFocusable(currentElement: HTMLElement, goToLast?: () => void): void;
export declare const ListItemSingleContent: ({ entity, selected, onSelect, onRemove, marginLeft, search, goToFirst, goToLast, singleSelector, disabled, hiddenAvatar, }: Props) => import("react").JSX.Element;
declare const EntitySelectListItem: {
    ({ groupView, expanded, search, entity, selected, partialSelected, onSelect, onRemove, onExpand, goToFirst, goToLast, isChild, hideLine, showGroupIcon, singleSelector, disabled, hiddenAvatar, }: {
        entity: EntitySelectEntity;
        groupView: boolean;
        expanded: boolean;
        selected: boolean;
        partialSelected: boolean;
        search: string;
        showGroupIcon?: boolean;
        onSelect: (entity: EntitySelectEntity) => void;
        onRemove: (entity: EntitySelectEntity) => void;
        onExpand: (expanded: boolean) => void;
        singleSelector: boolean;
        isChild?: boolean;
        hideLine?: boolean;
        goToFirst?: () => void;
        goToLast?: () => void;
        disabled?: boolean;
        hiddenAvatar?: boolean;
    }): import("react").JSX.Element | null;
    displayName: string;
};
export { EntitySelectListItem };
