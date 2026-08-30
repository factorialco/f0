import { AvatarVariant, CompanyAvatarVariant, PersonAvatarVariant, TeamAvatarVariant } from '../../../../components/avatars/F0Avatar';
import { IconType } from '../../../../components/F0Icon';
import { NewColor } from '../../../../components/tags/F0TagDot';
import { StatusVariant } from '../../../../components/tags/F0TagStatus';
type MetadataItemValue = {
    type: "text";
    content: string;
} | {
    type: "avatar";
    variant: AvatarVariant;
    text: string;
} | {
    type: "status";
    label: string;
    variant: StatusVariant;
} | ({
    type: "list";
    max?: number;
} & ({
    variant: "person";
    avatars: (PersonAvatarVariant | (PersonAvatarVariant & Record<string, unknown>))[];
} | {
    variant: "team";
    avatars: (TeamAvatarVariant | (TeamAvatarVariant & Record<string, unknown>))[];
} | {
    variant: "company";
    avatars: (CompanyAvatarVariant | (CompanyAvatarVariant & Record<string, unknown>))[];
})) | {
    type: "data-list";
    data: string[];
} | {
    type: "tag-list";
    tags: string[];
} | {
    type: "dot-tag";
    label: string;
    color: NewColor;
} | {
    type: "date";
    formattedDate: string;
    icon?: "warning" | "critical";
} | {
    type: "progress-bar";
    value: number;
    max?: number;
    label?: string;
    color?: string;
};
type MetadataAction = {
    icon: IconType;
    label: string;
    onClick: () => void;
    type?: never;
};
type MetadataCopyAction = {
    icon?: never;
    label?: never;
    onClick?: never;
    copyValue?: string;
    type: "copy";
};
interface MetadataItem {
    label: string;
    value: MetadataItemValue;
    actions?: (MetadataAction | MetadataCopyAction)[];
    hideLabel?: boolean;
    /**
     * Optional leading icon shown before the label/value. Useful when the icon itself
     * conveys the field (e.g. with `hideLabel`), so the item reads as "icon + value".
     */
    icon?: IconType;
    /**
     * Optional info text. When provided, displays an info icon next to the label
     * that shows this text in a tooltip when hovered.
     */
    info?: {
        title: string;
        description?: string;
    };
}
export type MetadataRowGap = "none" | "xs" | "sm" | "md";
export interface MetadataProps {
    /**
     * Everything is not a MetadataItem is ignored.
     * Undefined and boolean enable conditional items
     **/
    items: (MetadataItem | undefined | boolean)[];
    /**
     * If true and the metadata type is a list, it will be collapsed to the first item
     */
    collapse?: boolean;
    rowGap?: MetadataRowGap;
}
declare function MetadataItem({ item }: {
    item: MetadataItem;
}): import("react").JSX.Element;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Metadata: import('react').MemoExoticComponent<({ items, rowGap, }: MetadataProps) => import("react").JSX.Element>;
export type { MetadataAction, MetadataItem, MetadataItemValue };
