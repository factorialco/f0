import { AlertTagCellValue } from '../../value-display/types/alertTag';
import { AlertTagCellValue as AlertTagCellValue_2 } from './types/alertTag.tsx';
import { AmountCellValue } from '../../value-display/types/amount';
import { AmountCellValue as AmountCellValue_2 } from './types/amount.tsx';
import { AnchorHTMLAttributes } from 'react';
import { AvatarListCellValue } from '../../value-display/types/avatarList';
import { AvatarListCellValue as AvatarListCellValue_2 } from './types/avatarList.tsx';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { AvatarProps as AvatarProps_2 } from '@radix-ui/react-avatar';
import { baseColors } from '@factorialco/f0-core';
import { CategoryBarProps } from './CategoryBarChart';
import { ChartConfig } from '../../ui/chart';
import { ChartConfig as ChartConfig_2 } from './utils/types';
import { ChartPropsBase } from './utils/types';
import { ClassValue } from 'cva';
import { CompanyCellValue } from '../../value-display/types/company';
import { CompanyCellValue as CompanyCellValue_2 } from './types/company.tsx';
import { ComponentProps } from 'react';
import { DateCellValue } from '../../value-display/types/date';
import { DateCellValue as DateCellValue_2 } from './types/date.tsx';
import { DateFilterOptions } from './DateFilter/DateFilter';
import { default as default_2 } from 'react';
import { DotTagCellValue } from '../../value-display/types/dotTag';
import { DotTagCellValue as DotTagCellValue_2 } from './types/dotTag.tsx';
import { F0IconProps as F0IconProps_2 } from './F0Icon';
import { f1Colors } from '@factorialco/f0-core';
import { FileCellValue } from '../../value-display/types/file';
import { FileCellValue as FileCellValue_2 } from './types/file.tsx';
import { FolderCellValue } from '../../value-display/types/folder';
import { FolderCellValue as FolderCellValue_2 } from './types/folder.tsx';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { IconCellValue } from './types/icon.tsx';
import { ImgHTMLAttributes } from 'react';
import { InFilterOptions } from './InFilter/types';
import { internalAvatarColors as internalAvatarColors_2 } from '../../../ui/Avatar';
import { internalAvatarSizes as internalAvatarSizes_2 } from '../../../ui/Avatar';
import { internalAvatarTypes as internalAvatarTypes_2 } from '../../../ui/Avatar';
import { JSX as JSX_2 } from 'react';
import { LineChartConfig } from '../../ui/chart';
import { LineChartPropsBase } from './utils/types';
import { LinkProps as LinkProps_3 } from './Link';
import { LongTextCellValue } from './types/longText.tsx';
import { MouseEventHandler } from 'react';
import { NumberCellValue } from '../../value-display/types/number';
import { NumberCellValue as NumberCellValue_2 } from './types/number.tsx';
import { Observable } from 'zen-observable-ts';
import { PercentageCellValue } from './types/percentage.tsx';
import { PersonCellValue } from '../../value-display/types/person';
import { PersonCellValue as PersonCellValue_2 } from './types/person.tsx';
import { PieChartProps } from './PieChart';
import { PopoverContentProps } from '@radix-ui/react-popover';
import * as React_2 from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { StatusCellValue } from '../../value-display/types/status';
import { StatusCellValue as StatusCellValue_2 } from './types/status.tsx';
import { SVGProps } from 'react';
import { TagCellValue } from '../../value-display/types/tag';
import { TagCellValue as TagCellValue_2 } from './types/tag.tsx';
import { TagListCellValue } from '../../value-display/types/tagList';
import { TagListCellValue as TagListCellValue_2 } from './types/tagList.tsx';
import { TeamCellValue } from '../../value-display/types/team';
import { TeamCellValue as TeamCellValue_2 } from './types/team.tsx';
import { TextCellValue } from '../../value-display/types/text';
import { TextCellValue as TextCellValue_2 } from './types/text.tsx';
import { ValueDisplayRendererContext } from '../../value-display';
import { VariantProps } from 'cva';

export declare type Action = UpsellAction | RegularAction;

declare type Action_2 = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: ButtonVariant;
    size?: "md" | "lg";
    loading?: boolean;
};

declare type ActionDefinition = DropdownItemSeparator | (Omit<DropdownItemObject, "type" | "onClick"> & {
    onClick: () => void;
    enabled?: boolean;
    type?: "primary" | "secondary" | "other";
});

export declare type AlertAvatarProps = VariantProps<typeof alertAvatarVariants> & {
    type: (typeof alertAvatarTypes)[number];
    size?: (typeof alertAvatarSizes)[number];
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;

declare const alertAvatarSizes: readonly ["sm", "md", "lg"];

declare const alertAvatarTypes: readonly ["critical", "warning", "info", "positive"];

declare const alertAvatarVariants: (props?: ({
    type?: "info" | "critical" | "warning" | "positive" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type AlertTagProps = ComponentProps<typeof F0TagAlert>;

export declare type AllSelectionStatus = {
    checked: boolean;
    indeterminate: boolean;
    selectedCount: number;
    unselectedCount: number;
};

declare type AnimationVariantsOptions = {
    delay?: number;
    duration?: number;
    maxDelay?: number;
};

export declare const AreaChart: ForwardRefExoticComponent<Omit<LineChartPropsBase<LineChartConfig> & {
lineType?: "step" | "linear" | "natural" | "monotoneX";
marginTop?: number;
canBeBlurred?: boolean;
blurArea?: "l" | "r" | "lr";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const Avatar: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: (typeof internalAvatarSizes)[number];
    type?: (typeof internalAvatarTypes)[number];
    color?: (typeof internalAvatarColors)[number];
} & React_2.RefAttributes<HTMLSpanElement>>;

export declare type AvatarBadge = ({
    type: "module";
    module: ModuleId;
} | {
    type: Exclude<BadgeProps["type"], undefined>;
    icon: BadgeProps["icon"];
}) & {
    tooltip?: string;
};

declare const avatarEmojiSizes: readonly ["sm", "md", "lg"];

declare type AvatarFileSize = (typeof avatarFileSizes)[number];

declare const avatarFileSizes: readonly ["xs", "sm", "md", "lg"];

declare const avatarIconSizes: readonly ["sm", "md", "lg"];

export declare type AvatarListSize = (typeof avatarListSizes)[number];

declare const avatarListSizes: readonly ["xs", "sm", "md"];

declare type AvatarProps = {
    avatar: AvatarVariant_2;
    size?: AvatarSize;
};

declare type AvatarSize = (typeof avatarSizes)[number];

declare const avatarSizes: readonly ["xs", "sm", "md", "lg", "xl", "2xl"];

export declare type AvatarVariant = DistributiveOmit<({
    type: "person";
} & F0AvatarPersonProps) | ({
    type: "team";
} & F0AvatarTeamProps) | ({
    type: "company";
} & F0AvatarCompanyProps) | ({
    type: "file";
} & F0AvatarFileProps) | ({
    type: "flag";
} & F0AvatarFlagProps), "size">;

declare type AvatarVariant_2 = ({
    type: "person";
} & Omit<F0AvatarPersonProps, "size">) | ({
    type: "team";
} & Omit<F0AvatarTeamProps, "size">) | ({
    type: "company";
} & Omit<F0AvatarCompanyProps, "size">) | ({
    type: "file";
} & Omit<F0AvatarFileProps, "size">) | ({
    type: "flag";
} & Omit<F0AvatarFlagProps, "size">);

export declare type AvatarVariants = (typeof avatarVariants)[number];

export declare const avatarVariants: readonly ["person", "team", "company", "file", "flag"];

export declare const Await: <T>({ resolve, fallback, error: errorFallback, children, }: AwaitProps<T>) => ReactNode;

declare type AwaitProps<T> = {
    resolve: Promise<T> | T;
    fallback: ReactNode;
    error?: ReactNode;
    className?: string;
    children: (value: T) => ReactNode;
};

declare interface BadgeProps extends VariantProps<typeof badgeVariants> {
    icon: IconType;
    type?: VariantProps<typeof badgeVariants>["type"];
    size?: keyof typeof iconSizes;
}

declare const badgeVariants: (props?: ({
    type?: "critical" | "warning" | "positive" | "neutral" | "highlight" | undefined;
    size?: "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type BalanceTagProps = ComponentProps<typeof F0TagBalance>;

declare type BannerAction = {
    label: string;
    onClick: () => void;
    variant?: "default" | "outline" | "ghost";
    icon?: IconType;
};

export declare const BarChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig> & {
type?: "simple" | "stacked" | "stacked-by-sign";
label?: boolean;
legend?: boolean;
showValueUnderLabel?: boolean;
highlightLastBar?: boolean;
onClick?: ((data: {
label: string;
values: {
[x: string]: number;
};
}) => void) | undefined;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type BaseAction = {
    label: string;
    onClick: () => Promise<void> | void;
};

declare type BaseAvatarProps = {
    /**
     * The type of the avatar.
     */
    type: InternalAvatarProps["type"];
    /**
     * The name of the avatar.
     */
    name: string | string[];
    /**
     * The source of the avatar's image.
     */
    src?: string;
    /**
     * This is a workaround until we implement the ability to deal with images
     */
    flag?: ReactElement;
    /**
     * The color of the avatar.
     * @default "random"
     */
    color?: InternalAvatarProps["color"] | "random";
    /**
     * The badge to display on the avatar. Can be a module badge or a custom badge.
     */
    badge?: AvatarBadge;
} & Partial<Pick<InternalAvatarProps, "aria-label" | "aria-labelledby">> & ({
    size: AvatarSize;
} | {
    /**
     * @deprecated Use AvatarSize instead (xs, sm, md, lg, xl, 2xl)
     */
    size: InternalAvatarProps["size"];
});

declare type BaseBannerProps = {
    title: string;
    subtitle?: string;
    mediaUrl: string;
    primaryAction?: BannerAction;
    secondaryAction?: BannerAction;
    onClose?: () => void;
    isLoading?: boolean;
    children?: React.ReactNode;
    variant?: "default" | "full-width";
};

declare interface BaseChipProps extends VariantProps<typeof chipVariants> {
    /**
     * The label of the chip
     * */
    label: string;
    /**
     * If defined, the chip will be clickable
     * */
    onClick?: () => void;
    /**
     * If defined, the close icon will be displayed and the chip will be clickable
     * */
    onClose?: () => void;
}

declare type BaseColor = keyof typeof baseColors;

/**
 * Base data adapter configuration for non-paginated collections
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export declare type BaseDataAdapter<R extends RecordType, Filters extends FiltersDefinition, Options extends BaseFetchOptions<Filters>, FetchReturn = BaseResponse<R>> = {
    /** Indicates this adapter doesn't use pagination */
    paginationType?: never | undefined;
    /**
     * Function to fetch data based on filter options
     * @param options - The filter options to apply when fetching data
     * @returns Array of records, promise of records, or observable of records
     */
    fetchData: (options: Options) => FetchReturn | Promise<FetchReturn> | Observable<PromiseState<FetchReturn>>;
};

/**
 * Base options for data fetching
 * @template Filters - The available filter configurations
 */
export declare type BaseFetchOptions<Filters extends FiltersDefinition> = {
    /** Currently applied filters */
    filters: FiltersState<Filters>;
    sortings: SortingsStateMultiple;
    search?: string;
};

/**
 * Base definition for all filter types.
 * Provides common properties that all filters must implement.
 */
declare type BaseFilterDefinition<T extends FilterTypeKey> = {
    /** Human-readable label for the filter */
    label: string;
    /** The type of filter */
    type: T;
    /**
     * Whether to hide the selector for this filter
     */
    hideSelector?: boolean;
};

/**
 * Represents a base structure for paginated API responses, providing
 * details about the records on the current page and pagination metadata.
 *
 * @template R The type of each record in the paginated response.
 *
 * @property {number} total The total number of records available.
 * @property {number} perPage The number of records displayed per page.
 */
export declare type BasePaginatedResponse<R> = BaseResponse<R> & {
    /** Total number of records available */
    total: number;
    /** Number of records per page */
    perPage: number;
};

/**
 * Base response type for collection data
 * @template R - The type of records in the collection
 *
 * @property {R[]} records The list of records for the current page.
 * @property {TRecord} [summaries] Optional summaries data for the collection.
 */
export declare type BaseResponse<R> = {
    records: R[];
    summaries?: R;
};

declare type BaseTag<T extends {
    type: string;
}> = T & WithTooltipDescription;

export declare const buildTranslations: (translations: TranslationsType) => TranslationsType;

/**
 * Represents a bulk action that can be performed on a collection.
 */
declare type BulkAction = string;

/**
 * Represents a bulk action definition.
 */
declare type BulkActionDefinition = {
    label: string;
    icon?: IconType;
    id: string;
    keepSelection?: boolean;
};

declare type BulkActionsDefinition<R extends RecordType, Filters extends FiltersDefinition> = (selectedItems: Parameters<OnBulkActionCallback<R, Filters>>[1]) => {
    primary: BulkActionDefinition[];
    secondary?: BulkActionDefinition[];
} | {
    warningMessage: string;
};

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

declare const Button_2: React_2.ForwardRefExoticComponent<ButtonProps_2 & React_2.RefAttributes<HTMLButtonElement>>;

declare type ButtonInternalProps = Pick<ComponentProps<typeof Button_2>, "variant" | "size" | "disabled" | "type" | "round" | "className" | "pressed"> & DataAttributes & {
    /**
     * Callback fired when the button is clicked. Supports async functions for loading state.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>;
    /**
     * The visible label for the button. Required for accessibility.
     */
    label: string;
    /**
     * Indicates that an action is in progress. Shows a loading spinner and blocks interaction.
     */
    loading?: boolean;
    /**
     * Adds an icon to the button, combined with the label for better clarity and recognition.
     */
    icon?: IconType;
    /**
     * Adds an emoji to the button, can be used as a special case of icon-only button.
     */
    emoji?: string;
    /**
     * Hides the label visually (for icon-only or emoji-only buttons), but keeps it accessible for screen readers.
     */
    hideLabel?: boolean;
    /**
     * Sets the button size. 'lg' for mobile, 'md' for desktop, 'sm' for compact/secondary actions.
     */
    size?: "sm" | "md" | "lg";
    /**
     * Appends a React node after the button content (for custom UI extensions).
     */
    append?: React.ReactNode;
    /**
     * Appends a React node as a separate button, visually grouped with the main button.
     */
    appendButton?: React.ReactNode;
    /**
     * If true, the button is inactive and does not respond to user interaction.
     */
    disabled?: boolean;
    /**
     * If true, the button is visually active or selected (pressed state).
     */
    pressed?: boolean;
};

export declare type ButtonProps = Omit<ButtonInternalProps, (typeof privateProps)[number]>;

declare interface ButtonProps_2 extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    round?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    appendButton?: React_2.ReactNode;
    pressed?: boolean;
}

declare type ButtonSize = (typeof sizes)[number];

declare type ButtonVariant = (typeof variants)[number];

declare const buttonVariants: (props?: ({
    disabled?: boolean | undefined;
    pressed?: boolean | undefined;
    variant?: "default" | "critical" | "promote" | "neutral" | "outline" | "ghost" | "outlinePromote" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type CalendarMode = "single" | "range";

declare type CalendarView = "day" | "month" | "year" | "week" | "quarter" | "halfyear";

declare type CardAvatarVariant = AvatarVariant | {
    type: "emoji";
    emoji: string;
} | {
    type: "file";
    file: File;
} | {
    type: "icon";
    icon: IconType;
};

/**
 * Group Cards: Renders
 */
declare type CardCollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = CollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, CardVisualizationOptions<Record, Filters, Sortings>>;

declare interface CardInternalProps {
    /**
     * Whether the card has a compact layout
     */
    compact?: boolean;
    /**
     * The avatar to display in the card
     */
    avatar?: CardAvatarVariant;
    /**
     * Whether the card has an image
     */
    image?: string;
    /**
     * The title of the card
     */
    title?: string;
    /**
     * The description of the card
     */
    description?: string;
    /**
     * Metadata items to display in the card
     */
    metadata?: CardMetadata[];
    /**
     * The children to display in the card
     */
    children?: ReactNode;
    /**
     * The link to navigate to when the card is clicked
     */
    link?: string;
    /**
     * The primary action that displays a primary button in the card footer
     */
    primaryAction?: CardPrimaryAction;
    /**
     * The secondary actions - either an array of button actions or a single link
     */
    secondaryActions?: CardSecondaryAction[] | CardSecondaryLink;
    /**
     * Actions to display in the dropdown menu inside the card content
     */
    otherActions?: DropdownItem[];
    /**
     * Whether the card is selectable
     */
    selectable?: boolean;
    /**
     * Whether the card is selected
     */
    selected?: boolean;
    /**
     * The callback to handle the selection of the card
     */
    onSelect?: (selected: boolean) => void;
    /**
     * The callback to handle the click of the card
     */
    onClick?: () => void;
    /**
     * Force vertical metadata for compact layout
     * Private prop
     */
    forceVerticalMetadata?: boolean;
    /**
     * Whether the card should have a full height
     */
    fullHeight?: boolean;
    /**
     * When true, disables the full-card overlay link so parent components
     * can manage drag-and-drop while still allowing click navigation via onClick
     */
    disableOverlayLink?: boolean;
}

declare type CardMetadata = {
    icon: IconType;
    property: Exclude<CardMetadataProperty, {
        type: "file";
    }>;
} | {
    property: Extract<CardMetadataProperty, {
        type: "file";
    }>;
};

/**
 * Card metadata property renderers.
 * Each metadata item consists of an icon and a property with its data.
 */
declare type CardMetadataProperty = {
    [K in CardPropertyType]: {
        type: K;
        value: Parameters<(typeof valueDisplayRenderers)[K]>[0];
    };
}[CardPropertyType];

declare interface CardPrimaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
}

declare type CardPropertyDefinition<T> = PropertyDefinition_2<T> & {
    icon?: IconType;
};

declare const cardPropertyRenderers: {
    readonly text: (args: TextCellValue, meta: ValueDisplayRendererContext) => default_2.JSX.Element;
    readonly number: (args: NumberCellValue, meta: ValueDisplayRendererContext) => default_2.JSX.Element;
    readonly date: (args: DateCellValue, meta: ValueDisplayRendererContext) => default_2.JSX.Element;
    readonly amount: (args: AmountCellValue, meta: ValueDisplayRendererContext) => default_2.JSX.Element;
    readonly person: (args: PersonCellValue, meta: ValueDisplayRendererContext) => default_2.JSX.Element;
    readonly company: (args: CompanyCellValue, meta: ValueDisplayRendererContext) => default_2.JSX.Element;
    readonly team: (args: TeamCellValue, meta: ValueDisplayRendererContext) => default_2.JSX.Element;
    readonly status: (args: StatusCellValue) => default_2.JSX.Element;
    readonly tag: (args: TagCellValue) => default_2.JSX.Element;
    readonly avatarList: (args: AvatarListCellValue, meta: ValueDisplayRendererContext) => default_2.JSX.Element;
    readonly tagList: (args: TagListCellValue) => default_2.JSX.Element;
    readonly alertTag: (args: AlertTagCellValue) => default_2.JSX.Element;
    readonly dotTag: (args: DotTagCellValue) => default_2.JSX.Element;
    readonly file: (args: FileCellValue) => default_2.JSX.Element;
    readonly folder: (args: FolderCellValue) => default_2.JSX.Element;
};

declare type CardPropertyType = keyof typeof cardPropertyRenderers;

declare interface CardSecondaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
}

declare interface CardSecondaryLink extends Pick<LinkProps, "href" | "target" | "disabled"> {
    label: string;
}

declare type CardVisualizationOptions<T, _Filters extends FiltersDefinition, _Sortings extends SortingsDefinition> = {
    cardProperties: ReadonlyArray<CardPropertyDefinition<T>>;
    title: (record: T) => string;
    description?: (record: T) => string;
    avatar?: (record: T) => CardAvatarVariant;
    image?: (record: T) => string;
    compact?: boolean;
};

export declare const CategoryBarChart: ForwardRefExoticComponent<Omit<CategoryBarProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface CheckboxProps extends DataAttributes {
    /**
     * The title of the checkbox
     */
    title?: string;
    /**
     * The id of the checkbox
     */
    id?: string;
    /**
     * The checked state of the checkbox
     * @default false
     */
    checked?: boolean;
    /**
     * Whether the checkbox is indeterminate
     * @default false
     */
    indeterminate?: boolean;
    /**
     * The callback function that is called when the checkbox is checked
     */
    onCheckedChange?: (checked: boolean) => void;
    /**
     * Whether the checkbox is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The value of the checkbox
     */
    value?: string;
    /**
     * Whether to hide the label
     * @default false
     */
    hideLabel?: boolean;
    /**
     * Whether the checkbox is only presentational, so it does not have functionality
     * @default false
     */
    presentational?: boolean;
    /**
     * Whether the checkbox should stop event propagation
     * @default false
     */
    stopPropagation?: boolean;
    /**
     * The name of the checkbox
     */
    name?: string;
}

declare type ChipProps = BaseChipProps & ChipVariants & {
    variant?: "default" | "selected";
};

declare type ChipVariants = {
    /**
     * If defined, an avatar will be displayed in the chip
     * */
    avatar: AvatarVariant;
    icon?: undefined;
} | {
    /**
     * If defined, an icon will be displayed in the chip
     * */
    icon: IconType;
    avatar?: undefined;
} | {
    avatar?: undefined;
    icon?: undefined;
};

declare const chipVariants: (props?: ({
    variant?: "default" | "selected" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type ColId = string;

/**
 * Props for the Collection component.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template VisualizationOptions - Additional options for visualizing the collection
 */
declare type CollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>, VisualizationOptions extends object> = {
    /** The data source configuration and state */
    source: DataCollectionSource<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    /** Function to handle item selection */
    onSelectItems: OnSelectItemsCallback<Record, Filters>;
    /** Function to handle data load */
    onLoadData: OnLoadDataCallback<Record, Filters>;
    onLoadError: OnLoadErrorCallback;
} & VisualizationOptions;

declare type CollectionVisualizations<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = {
    table: VisualizacionTypeDefinition<TableCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, TableVisualizationSettings>;
    list: VisualizacionTypeDefinition<ListCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    card: VisualizacionTypeDefinition<CardCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    kanban: VisualizacionTypeDefinition<KanbanCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
};

declare const collectionVisualizations: CollectionVisualizations<RecordType, FiltersDefinition, SortingsDefinition, SummariesDefinition, ItemActionsDefinition<RecordType>, NavigationFiltersDefinition, GroupingDefinition<RecordType>>;

declare type ColumnWidth = keyof typeof columnWidths | number;

declare const columnWidths: {
    readonly auto: undefined;
    readonly fit: 1;
};

export declare type CompanyAvatarVariant = Extract<AvatarVariant, {
    type: "company";
}>;

declare type CompanyTagProps = ComponentProps<typeof F0TagCompany>;

declare type ComponentTypes = (typeof componentTypes)[number];

declare const componentTypes: readonly ["layout", "info", "action", "form"];

export declare const CopyButton: ForwardRefExoticComponent<Omit<CopyButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;

declare type CopyButtonProps = Omit<ComponentProps<typeof Button_2>, "onClick" | "children" | "title" | "label" | "hideLabel" | "icon" | "round"> & {
    valueToCopy: string;
    copiedTooltipLabel?: string;
    copyTooltipLabel?: string;
    onCopy?: MouseEventHandler<HTMLButtonElement>;
};

export declare function createAtlaskitDriver(instanceId: symbol): DndDriver;

/**
 * Create a data source definition from a data source definition
 * This function is a helper to allow to infer the type of the data source definition
 * from the data source definition.
 *
 * @param definition - The data source definition to create from
 * @returns The created data source definition
 */
export declare const createDataSourceDefinition: <R extends RecordType = RecordType, FiltersSchema extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>>(definition: DataSourceDefinition<R, FiltersSchema, Sortings, Grouping>) => DataSourceDefinition<R, FiltersSchema, Sortings, Grouping>;

/**
 * Extracts the current filters type from filter options.
 * Creates a type mapping filter keys to their respective value types.
 * Used for type-safe access to filter values.
 * @template F - The filter options type
 */
export declare type CurrentFilters<F extends FilterOptions<string>> = F extends {
    fields: Record<infer K extends string, FilterDefinition>;
} ? {
    [Key in K]?: FilterValue<F["fields"][Key]>;
} : Record<string, never>;

export declare type Data<R extends RecordType> = {
    records: WithGroupId<R>[];
    type: "grouped" | "flat";
    groups: GroupRecord<R>[];
};

/**
 * Combined type for all possible data adapter configurations
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export declare type DataAdapter<R extends RecordType, Filters extends FiltersDefinition> = BaseDataAdapter<R, Filters, BaseFetchOptions<Filters>, BaseResponse<R>> | PaginatedDataAdapter<R, Filters, PaginatedFetchOptions<Filters>, PaginatedResponse<R>>;

declare type DataCollectionBaseFetchOptions<Filters extends FiltersDefinition, NavigationFilters extends NavigationFiltersDefinition> = BaseFetchOptions<Filters> & DataCollectionExtendFetchOptions<NavigationFilters>;

/**
 * Data collection data adapter
 */
declare type DataCollectionDataAdapter<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition> = BaseDataAdapter<R, Filters, DataCollectionBaseFetchOptions<Filters, NavigationFilters>, BaseResponse<R>> | PaginatedDataAdapter<R, Filters, DataCollectionPaginatedFetchOptions<Filters, NavigationFilters>, PaginatedResponse<R>>;

/**
 * Extended base fetch options for data collection
 */
declare type DataCollectionExtendFetchOptions<NavigationFilters extends NavigationFiltersDefinition> = {
    navigationFilters: NavigationFiltersState<NavigationFilters>;
};

export declare const dataCollectionLocalStorageHandler: DataCollectionStorageHandler;

/**
 * Extended base fetch options for data collection
 */
declare type DataCollectionPaginatedFetchOptions<Filters extends FiltersDefinition, NavigationFilters extends NavigationFiltersDefinition> = PaginatedFetchOptions<Filters> & DataCollectionExtendFetchOptions<NavigationFilters>;

declare type DataCollectionSettings = {
    visualization: VisualizationSettings;
};

declare interface DataCollectionSettingsContextType {
    setSettings: default_2.Dispatch<default_2.SetStateAction<DataCollectionSettings>>;
    settings: DataCollectionSettings;
    setVisualizationSettings: (key: keyof VisualizationSettings, settings: VisualizationSettings[keyof VisualizationSettings] | ((prev: VisualizationSettings[keyof VisualizationSettings]) => VisualizationSettings[keyof VisualizationSettings])) => void;
}

/**
 * Data collection source
 * Extends the base data source with data collection specific elements / features
 */
declare type DataCollectionSource<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Summaries extends SummariesDefinition = SummariesDefinition, ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>> = DataSource<R, Filters, Sortings, Grouping> & DataCollectionSourceDefinition<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
    currentNavigationFilters: NavigationFiltersState<NavigationFilters>;
    setCurrentNavigationFilters: React.Dispatch<React.SetStateAction<NavigationFiltersState<NavigationFilters>>>;
    /** Current summaries data */
    currentSummaries?: R;
    /** Function to update the current summaries data */
    setCurrentSummaries?: React.Dispatch<React.SetStateAction<R | undefined>>;
};

/**
 * Data collection source definition
 * Extends the base data source definition with data collection specific elements / features
 */
declare type DataCollectionSourceDefinition<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Summaries extends SummariesDefinition = SummariesDefinition, ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>> = Omit<DataSourceDefinition<R, Filters, Sortings, Grouping>, "dataAdapter"> & {
    /**
     * Data Collection specific datasource elements / features
     */
    /** Navigation filters */
    navigationFilters?: NavigationFilters;
    /** URL for a single item in the collection */
    itemUrl?: (item: R) => string | undefined;
    /** Click handler for a single item in the collection */
    itemOnClick?: (item: R) => () => void;
    /** Available actions that can be performed on records */
    itemActions?: ItemActions;
    /** Available primary actions that can be performed on the collection */
    primaryActions?: PrimaryActionsDefinitionFn;
    /** Available secondary actions that can be performed on the collection */
    secondaryActions?: SecondaryActionsDefinition;
    /** Available summaries fields. If not provided, summaries is not allowed. */
    summaries?: Summaries & {
        label?: string;
    };
    dataAdapter: DataCollectionDataAdapter<R, Filters, NavigationFilters>;
    /** Bulk actions that can be performed on the collection */
    bulkActions?: BulkActionsDefinition<R, Filters>;
    /** Total items summary that can be displayed on the collection
     * If true, the total items summary will be displayed on the collection
     * If a function is provided, the total items summary will be displayed on the collection
     */
    totalItemSummary?: boolean | ((totalItems: number) => string | null);
    /** Item filter that can be used to filter the items before they are displayed */
    itemPreFilter?: (item: R) => boolean;
    /** Lanes configuration */
    lanes?: ReadonlyArray<Lane<Filters>>;
};

/**
 * The status of the data collection
 */
declare type DataCollectionStatus = {
    grouping?: GroupingState<RecordType, GroupingDefinition<RecordType>>;
    sortings?: SortingsState<SortingsDefinition>;
    filters?: FiltersState<FiltersDefinition>;
    search?: string | undefined;
    navigationFilters?: NavigationFiltersState<NavigationFiltersDefinition>;
    visualization?: number;
};

export declare type DataCollectionStorage = {
    settings?: DataCollectionSettings;
} & DataCollectionStatus;

export declare type DataCollectionStorageHandler = {
    get: (key: string) => Promise<DataCollectionStorage>;
    set: (key: string, storage: DataCollectionStorage) => Promise<void>;
};

/**
 * Represents an error that occurred during data fetching
 */
export declare interface DataError {
    message: string;
    cause?: unknown;
}

/**
 * Represents a data source with filtering capabilities and data fetching functionality.
 * Extends DataSourceDefinition with runtime properties for state management.
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 */
export declare type DataSource<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Grouping extends GroupingDefinition<R>> = DataSourceDefinition<R, Filters, Sortings, Grouping> & {
    /** Current state of applied filters */
    currentFilters: FiltersState<Filters>;
    /** Function to update the current filters state */
    setCurrentFilters: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>;
    /** Whether presets are currently loading */
    presetsLoading?: boolean;
    /** Current state of applied sortings */
    currentSortings: SortingsState<Sortings>;
    /** Function to update the current sortings state */
    setCurrentSortings: React.Dispatch<React.SetStateAction<SortingsState<Sortings>>>;
    currentSearch: undefined | string;
    debouncedCurrentSearch: undefined | string;
    setCurrentSearch: (search: string | undefined) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    /** Current state of applied grouping */
    currentGrouping?: Grouping["mandatory"] extends true ? Exclude<GroupingState<R, Grouping>, undefined> : GroupingState<R, Grouping>;
    /** Function to update the current grouping state */
    setCurrentGrouping: React.Dispatch<React.SetStateAction<GroupingState<R, Grouping>>>;
    /** Function to provide an id for a record, necessary for append mode */
    idProvider?: <Item extends R>(item: Item, index?: number) => string | number | symbol;
    /** Item filter that can be used to filter the items before they are displayed */
    itemPreFilter?: (item: R) => boolean;
};

/**
 * Defines the structure and configuration of a data source for a collection.
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template NavigationFilters - The available navigation filters for the collection
 * @template Sortings - The available sortings for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template PrimaryActions - The available primary actions that can be performed on the collection
 * @template SecondaryActions - The available actions that can be performed on the collection
 * @template OtherActions - The available actions that can be performed on the collection
 * @template Summaries - The available summaries for the collection
 */
export declare type DataSourceDefinition<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>> = {
    /** Available filter configurations */
    filters?: Filters;
    /** Current state of applied filters */
    currentFilters?: FiltersState<Filters>;
    /** Predefined filter configurations that can be applied */
    presets?: PresetsDefinition<Filters>;
    /** Whether presets are currently loading */
    presetsLoading?: boolean;
    /** Search configuration */
    search?: SearchOptions;
    /** Available sorting fields. If not provided, sorting is not allowed. */
    sortings?: Sortings;
    defaultSorting?: SortingsState<Sortings>;
    /** Data adapter responsible for fetching and managing data */
    dataAdapter: DataAdapter<R, Filters>;
    /** Selectable items value under the checkbox column (undefined if not selectable) */
    selectable?: (item: R) => string | number | undefined;
    /** Default selected items */
    defaultSelectedItems?: SelectedItemsState;
    /** Grouping configuration */
    grouping?: Grouping;
    currentGrouping?: GroupingState<R, Grouping>;
};

declare type DateFilterDefinition = BaseFilterDefinition<"date"> & {
    options?: DateFilterOptions_2;
};

declare type DateFilterOptions_2 = {
    minDate?: Date;
    maxDate?: Date;
    mode?: CalendarMode;
    defaultSelected?: Date | DateRange | null;
    view?: CalendarView;
};

declare type DateNavigationOptions = {
    min?: Date;
    max?: Date;
};

declare type DateNavigationOptions_2 = {
    granularity?: GranularityDefinitionKey[] | GranularityDefinitionKey;
    defaultGranularity?: GranularityDefinitionKey;
    min?: Date;
    max?: Date;
    presets?: DatePreset[];
    hideGoToCurrent?: boolean;
};

declare type DateNavigatorFilterDefinition = NavigationFilterDefinitionBase<Date | DateRange | DateValue> & {
    type: "date-navigator";
} & DateNavigationOptions_2;

declare interface DatePreset {
    label: string;
    granularity: GranularityDefinitionKey;
    value: DateRange | (() => DateRange);
}

declare type DateRange = {
    from: Date;
    to?: Date;
};

declare type DateRangeComplete = Required<DateRange>;

declare type DateRangeString = {
    from: string;
    to?: string;
};

declare type DateStringFormat = "default" | "long";

declare type DateValue = {
    value: DateRangeComplete;
    valueString: string;
    granularity: GranularityDefinitionKey;
};

declare type DefaultAction = BannerAction;

export declare const defaultTranslations: {
    readonly approvals: {
        readonly history: "Approval history";
        readonly statuses: {
            readonly waiting: "Waiting";
            readonly pending: "Pending";
            readonly approved: "Approved";
            readonly rejected: "Rejected";
        };
        readonly requiredNumbers: {
            readonly one: "One approval required";
            readonly other: "{{count}} approvals required";
        };
    };
    readonly navigation: {
        readonly sidebar: "Main navigation";
        readonly previous: "Previous";
        readonly next: "Next";
    };
    readonly actions: {
        readonly add: "Add";
        readonly edit: "Edit";
        readonly save: "Save";
        readonly cancel: "Cancel";
        readonly copy: "Copy";
        readonly close: "Close";
        readonly showAll: "Show all";
        readonly showLess: "Show less";
        readonly skipToContent: "Skip to content";
        readonly view: "View";
        readonly unselect: "Unselect";
        readonly search: "Search";
        readonly clear: "Clear";
        readonly more: "More";
        readonly moveUp: "Move up";
        readonly moveDown: "Move down";
        readonly thumbsUp: "Like";
        readonly thumbsDown: "Dislike";
        readonly other: "Other actions";
        readonly toggle: "Toggle";
    };
    readonly status: {
        readonly selected: {
            readonly singular: "Selected";
            readonly plural: "Selected";
        };
    };
    readonly filters: {
        readonly label: "Filters";
        readonly applyFilters: "Apply filters";
        readonly applySelection: "Apply selection";
        readonly cancel: "Cancel";
        readonly failedToLoadOptions: "Failed to load options";
        readonly retry: "Retry";
    };
    readonly toc: {
        readonly search: "Search...";
    };
    readonly collections: {
        readonly sorting: {
            readonly noSorting: "No sorting";
            readonly toggleDirection: "Toggle sorting direction";
            readonly sortBy: "Sort by";
        };
        readonly grouping: {
            readonly noGrouping: "No grouping";
            readonly groupBy: "Group by";
            readonly toggleDirection: "Toggle direction";
        };
        readonly actions: {
            readonly actions: "Actions";
        };
        readonly visualizations: {
            readonly table: "Table view";
            readonly card: "Card view";
            readonly list: "List view";
            readonly kanban: "Kanban view";
            readonly pagination: {
                readonly of: "of";
            };
            readonly settings: "{{visualizationName}} settings";
            readonly reset: "Reset to default";
        };
        readonly itemsCount: "items";
        readonly emptyStates: {
            readonly noData: {
                readonly title: "No data";
                readonly description: "No data available";
            };
            readonly noResults: {
                readonly title: "No results";
                readonly description: "No results found try another search or clear the filters";
                readonly clearFilters: "Clear filters";
            };
            readonly error: {
                readonly title: "Error";
                readonly description: "An error occurred while loading the data";
                readonly retry: "Retry";
            };
        };
        readonly summaries: {
            readonly types: {
                readonly sum: "sum";
            };
        };
    };
    readonly shortcut: "Shortcut";
    readonly date: {
        readonly from: "From";
        readonly to: "To";
        readonly none: "None";
        readonly date: "Date";
        readonly custom: "Custom period";
        readonly selectDate: "Select Date";
        readonly compareTo: "Compare to";
        readonly presets: {
            readonly last7Days: "Last 7 days";
            readonly last30Days: "Last 30 days";
            readonly last3Months: "Last 3 months";
            readonly last6Months: "Last 6 months";
            readonly lastYear: "Last year";
            readonly last3Years: "Last 3 years";
            readonly last100Years: "Last 100 years";
        };
        readonly range: "Range";
        readonly selectedBy: "Selected by";
        readonly groups: {
            readonly today: "Today";
            readonly yesterday: "Yesterday";
            readonly lastWeek: "Last week";
            readonly lastMonth: "Last month";
            readonly other: "Other";
        };
        readonly granularities: {
            readonly day: {
                readonly currentDate: "Today";
                readonly label: "Day";
            };
            readonly week: {
                readonly currentDate: "This week";
                readonly label: "Week";
                readonly long: "Week of {{day}} {{month}} {{year}}";
                readonly longSingular: "Week of {{date}}";
                readonly longPlural: "Weeks of {{date}}";
            };
            readonly month: {
                readonly currentDate: "This month";
                readonly label: "Month";
            };
            readonly quarter: {
                readonly currentDate: "This quarter";
                readonly label: "Quarter";
            };
            readonly halfyear: {
                readonly currentDate: "This half year";
                readonly label: "Half year";
            };
            readonly year: {
                readonly currentDate: "This year";
                readonly label: "Year";
            };
            readonly range: {
                readonly currentDate: "Today";
                readonly label: "Range";
            };
        };
        readonly month: {
            readonly january: "January";
            readonly february: "February";
            readonly march: "March";
            readonly april: "April";
            readonly may: "May";
            readonly june: "June";
            readonly july: "July";
            readonly august: "August";
            readonly september: "September";
            readonly october: "October";
            readonly november: "November";
            readonly december: "December";
        };
    };
    readonly favorites: {
        readonly favorites: "Favorites";
        readonly remove: "Remove favorite";
    };
    readonly notifications: "Notifications";
    readonly ai: {
        readonly openChat: "Open Chat with One AI";
        readonly closeChat: "Close Chat with One AI";
        readonly scrollToBottom: "Scroll to bottom";
        readonly welcome: "Ask or create with One";
        readonly defaultInitialMessage: "How can I help you today?";
        readonly inputPlaceholder: "Write something here...";
        readonly stopAnswerGeneration: "Stop generating";
        readonly sendMessage: "Send message";
        readonly thoughtsGroupTitle: "Reflection";
    };
    readonly select: {
        readonly noResults: "No results found";
        readonly loadingMore: "Loading...";
    };
};

/**
 * Remove a property from a union of objects.
 * @example
 * type Person = {
 *   name: string
 *   age: number
 * } | {
 *   name: string
 *   height: number
 * }
 *
 * type PersonWithoutName = DistributiveOmit<Person, "name">
 * // { age: number } | { height: number }
 */
declare type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;

export declare interface DndDriver<T = unknown> {
    registerDraggable: (el: HTMLElement, options: {
        payload: DragPayload<T>;
        disabled?: boolean;
        handle?: HTMLElement | null;
    }) => () => void;
    registerDroppable: (el: HTMLElement, options: {
        id: string;
        accepts: string[];
    }) => () => void;
    subscribe: (cb: (e: {
        phase: "start" | "over" | "drop" | "cancel";
        source: DragPayload<T>;
        intent?: DropIntent;
    }) => void) => () => void;
}

export declare function DndProvider({ driver, children, }: {
    driver: DndDriver;
    children: ReactNode;
}): JSX_2.Element;

export declare type DragPayload<T = unknown> = {
    kind: string;
    id: string;
    data?: T;
};

declare type DropdownItem = DropdownItemObject | DropdownItemSeparator;

declare type DropdownItemObject = NavigationItem & {
    type?: "item";
    onClick?: () => void;
    icon?: IconType;
    description?: string;
    critical?: boolean;
    avatar?: AvatarVariant;
};

declare type DropdownItemSeparator = {
    type: "separator";
};

export declare type DropIntent = {
    type: "reorder";
    containerId: string;
    fromIndex: number;
    toIndex: number;
} | {
    type: "move";
    fromContainerId: string;
    toContainerId: string;
    fromIndex: number;
    toIndex: number | null;
} | {
    type: "enter-container";
    toContainerId: string;
} | {
    type: "cancel";
};

export declare function EmojiImage({ emoji, size }: EmojiImageProps): JSX_2.Element;

export declare interface EmojiImageProps extends VariantProps<typeof emojiVariants> {
    emoji: string;
}

declare const emojiVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N ? [...Acc, N][number] : Enumerate<N, [...Acc, Acc["length"]]>;

export declare interface ErrorMessageProps {
    title: string;
    description: string;
}

declare type EventCatcherFunction = (eventName: EventName, params: EventParams) => void;

declare interface EventCatcherProviderProps {
    children: ReactNode;
    onEvent: EventCatcherFunction;
    enabled?: boolean;
    catchEvents?: string[];
}

declare type EventName = "datacollection.filter-change" | "datacollection.sorting-change" | "datacollection.preset-click";

declare type EventParams = Record<string, EventScalar | Array<EventScalar>>;

declare type EventScalar = string | number | boolean | undefined | null;

export declare const experimental: <T extends (...args: any[]) => any>(name: string, component: T) => T;

declare type ExtractVisualizationSettings<T> = T extends {
    settings: {
        default: infer S;
    };
} ? S : never;

export declare const F0Avatar: ({ avatar, size }: AvatarProps) => ReactNode;

export declare const F0AvatarAlert: ({ type, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: AlertAvatarProps) => JSX_2.Element;

export declare const F0AvatarCompany: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: F0AvatarCompanyProps): JSX_2.Element;
    displayName: string;
};

export declare type F0AvatarCompanyProps = {
    name: string;
    src?: string;
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

export declare const F0AvatarDate: ({ date, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: F0AvatarDateProps) => JSX_2.Element;

declare type F0AvatarDateProps = {
    date: Date;
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;

export declare const F0AvatarEmoji: {
    ({ emoji, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: F0AvatarEmojiProps): JSX_2.Element;
    displayName: string;
};

declare type F0AvatarEmojiProps = {
    emoji: string;
    size?: (typeof avatarEmojiSizes)[number];
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;

export declare const F0AvatarFile: ForwardRefExoticComponent<Omit<Omit<Omit<AvatarProps_2 & RefAttributes<HTMLSpanElement>, "ref"> & {
size?: internalAvatarSizes_2[number];
type?: internalAvatarTypes_2[number];
color?: internalAvatarColors_2[number];
} & RefAttributes<HTMLSpanElement>, "ref">, "type" | "size"> & {
file: FileDef;
size?: AvatarFileSize;
badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby"> & RefAttributes<HTMLSpanElement>>;

export declare type F0AvatarFileProps = Omit<React.ComponentPropsWithoutRef<typeof Avatar>, "type" | "size"> & {
    file: FileDef;
    size?: AvatarFileSize;
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare type F0AvatarFlagProps = {
    flag: string;
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

export declare const F0AvatarIcon: {
    ({ icon, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: F0AvatarIconProps): JSX_2.Element;
    displayName: string;
};

declare type F0AvatarIconProps = {
    icon: IconType;
    size?: (typeof avatarIconSizes)[number];
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;

export declare const F0AvatarList: {
    ({ avatars, size, type, noTooltip, remainingCount: initialRemainingCount, max, }: F0AvatarListProps): JSX_2.Element;
    displayName: string;
};

export declare type F0AvatarListProps = {
    /**
     * The size of the avatars in the list.
     * @default "md"
     */
    size?: AvatarListSize;
    /**
     * Whether to hide tooltips in each avatar.
     * @default false
     */
    noTooltip?: boolean;
    /**
     * The maximum number of avatars to display.
     * @default 3
     */
    max?: number;
    /**
     * The remaining number to display.
     */
    remainingCount?: number;
    /**
     * The layout of the avatar list.
     * - "fill" - Avatars will expand to fill the available width, with overflow items shown in a counter
     * - "compact" - Avatars will be stacked tightly together up to the max limit, with remaining shown in counter
     * @default "compact"
     */
    layout?: "fill" | "compact";
} & F0AvatarListPropsAvatars;

declare type F0AvatarListPropsAvatars = {
    type: "person";
    avatars: (Omit<PersonAvatarVariant, "type"> & Record<string, unknown>)[];
} | {
    type: "team";
    avatars: (Omit<TeamAvatarVariant, "type"> & Record<string, unknown>)[];
} | {
    type: "company";
    avatars: (Omit<CompanyAvatarVariant, "type"> & Record<string, unknown>)[];
} | {
    type: "flag";
    avatars: (Omit<FlagAvatarVariant, "type"> & Record<string, unknown>)[];
} | {
    type: "file";
    avatars: (Omit<FileAvatarVariant, "type"> & Record<string, unknown>)[];
};

/**
 * Module avatar
 * @description A component that displays a module avatar
 * @experimental
 * @returns
 */
export declare function F0AvatarModule({ size, module, ...props }: F0AvatarModuleProps): JSX_2.Element;

export declare type F0AvatarModuleProps = VariantProps<typeof moduleAvatarVariants> & {
    module: ModuleId;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

export declare const F0AvatarPerson: {
    ({ firstName, lastName, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: F0AvatarPersonProps): JSX_2.Element;
    displayName: string;
};

export declare type F0AvatarPersonProps = {
    /**
     * The first name of the person.
     */
    firstName: string;
    /**
     * The last name of the person.
     */
    lastName: string;
    /**
     * The source of the person's image.
     */
    src?: string;
    /**
     * The size of the avatar.
     */
    size?: BaseAvatarProps["size"];
    /**
     * The badge to display on the avatar. Can be a module badge or a custom badge.
     */
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

export declare const F0AvatarTeam: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: F0AvatarTeamProps): JSX_2.Element;
    displayName: string;
};

export declare type F0AvatarTeamProps = {
    /**
     * The name of the team.
     */
    name: string;
    /**
     * The source of the team's image.
     */
    src?: string;
    /**
     * The size of the avatar.
     */
    size?: BaseAvatarProps["size"];
    /**
     * The badge to display on the avatar. Can be a module badge or a custom badge.
     */
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

export declare const F0Card: ForwardRefExoticComponent<F0CardProps & RefAttributes<HTMLDivElement>> & {
    Skeleton: ({ compact }: {
        compact?: boolean;
    }) => JSX_2.Element;
};

export declare type F0CardProps = Omit<CardInternalProps, (typeof privateProps_2)[number]>;

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0Checkbox: typeof _F0Checkbox;

declare function _F0Checkbox({ title, onCheckedChange, id, disabled, indeterminate, checked, value, hideLabel, presentational, stopPropagation, name, ...rest }: CheckboxProps): JSX_2.Element;

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0ChipList: {
    ({ chips, max, remainingCount: initialRemainingCount, layout, }: Props): JSX_2.Element;
    displayName: string;
};

export declare function F0EventCatcherProvider({ children, onEvent, enabled, catchEvents, }: EventCatcherProviderProps): JSX.Element;

export declare const F0Icon: ForwardRefExoticComponent<Omit<Omit<F0IconProps_2, "ref"> & RefAttributes<SVGSVGElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare interface F0IconProps extends SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {
    icon: IconType;
    size?: "lg" | "md" | "sm" | "xs";
    state?: "normal" | "animate";
    color?: "default" | "currentColor" | `#${string}` | Lowercase<NestedKeyOf<typeof f1Colors.icon>>;
}

export declare const F0Provider: React.FC<{
    children: React.ReactNode;
    link?: LinkContextValue;
    privacyModeInitiallyEnabled?: boolean;
    image?: ImageContextValue;
    layout?: Omit<ComponentProps<typeof LayoutProvider>, "children">;
    i18n: Omit<I18nProviderProps, "children">;
    l10n: Omit<L10nProviderProps, "children">;
    isDev?: boolean;
    showExperimentalWarnings?: boolean;
    dataCollectionStorageHandler?: DataCollectionStorageHandler;
}>;

export declare const F0TagAlert: ForwardRefExoticComponent<TagAlertProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagBalance: ForwardRefExoticComponent<TagBalanceProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagCompany: ForwardRefExoticComponent<TagCompanyProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagDot: ForwardRefExoticComponent<TagDotProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagList: {
    <T extends TagType>({ type, tags, max, remainingCount: initialRemainingCount, layout, }: TagListProps<T>): JSX_2.Element;
    displayName: string;
};

export declare const F0TagPerson: ForwardRefExoticComponent<TagPersonProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagRaw: ForwardRefExoticComponent<TagRawProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagStatus: ForwardRefExoticComponent<TagStatusProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagTeam: ForwardRefExoticComponent<TagTeamProps & RefAttributes<HTMLDivElement>>;

export declare type FileAvatarVariant = Extract<AvatarVariant, {
    type: "file";
}>;

declare type FileDef = {
    name: string;
    type: string;
};

/**
 * Union of all available filter types.
 * Used to define possible filter configurations in a collection.
 * @template T - Type of values for the InFilterDefinition
 */
export declare type FilterDefinition = FilterDefinitionsByType[keyof FilterDefinitionsByType];

/**
 * All the available filter types
 */
declare type FilterDefinitionsByType<T = unknown> = {
    in: InFilterDefinition<T>;
    search: SearchFilterDefinition;
    date: DateFilterDefinition;
};

/**
 * Configuration options for filters in a collection.
 * Defines the structure and behavior of available filters.
 * @template FilterKeys - String literal type for filter keys
 */
export declare type FilterOptions<FilterKeys extends string> = Record<FilterKeys, FilterDefinition>;

/**
 * Record of filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available filters for a collection.
 * @template Keys - String literal type for filter keys
 */
export declare type FiltersDefinition<Keys extends string = string> = Record<Keys, FilterDefinition>;

export declare type FiltersMode = "default" | "compact";

/**
 * Current state of all filters in a collection.
 * Maps filter keys to their current values.
 * This represents the active filter selections at any given time.
 * @template Definition - Record of filter definitions
 */
export declare type FiltersState<Definition extends Record<string, FilterDefinition>> = {
    [K in keyof Definition]?: FilterValue<Definition[K]>;
};

declare type FilterTypeContext<Options extends object = never> = {
    schema: FilterTypeSchema<Options>;
    i18n: TranslationsType;
};

declare type FilterTypeDefinition<Value = unknown, Options extends object = never, EmptyValue = Value> = {
    /** Check if the value is empty */
    emptyValue: EmptyValue;
    isEmpty: (value: Value, context: FilterTypeContext<Options>) => boolean;
    /** Render the filter form */
    render: <Schema extends FilterTypeSchema<Options>>(props: {
        schema: Schema;
        value: Value;
        onChange: (value: Value) => void;
        isCompactMode?: boolean;
    }) => React.ReactNode;
    /**
     * The value label to display in the filter chips
     */
    chipLabel: (value: Value, context: FilterTypeContext<Options>) => string | Promise<string>;
    /**
     * The default options to render a filter of this type, for example max and min date for a date filter, the list of options for an in filter, etc
     */
    defaultOptions?: Options;
    /**
     * The height of the filter form container in pixels
     */
    formHeight?: number;
};

declare type FilterTypeKey = keyof typeof filterTypes;

declare const filterTypes: {
    readonly in: FilterTypeDefinition<string[], InFilterOptions<string>>;
    readonly search: FilterTypeDefinition<string>;
    readonly date: FilterTypeDefinition<Date | DateRange | undefined, DateFilterOptions>;
};

declare type FilterTypeSchema<Options extends object = never> = {
    options: Options extends never ? never : Options;
    label: string;
};

/**
 * Extracts the appropriate value type for a given filter:
 * - InFilter -> Array of selected values of type T
 * - SearchFilter -> Search string
 *
 * This type is used to ensure type safety when working with filter values.
 * @template T - The filter definition type
 */
export declare type FilterValue<T extends FilterDefinition> = T extends InFilterDefinition<infer U> ? U[] : T extends SearchFilterDefinition ? string : T extends DateFilterDefinition ? DateRange | Date | undefined : never;

export declare type FlagAvatarVariant = Extract<AvatarVariant, {
    type: "flag";
}>;

export declare const getAnimationVariants: (options?: AnimationVariantsOptions) => {
    hidden: {
        opacity: number;
        y: number;
    };
    visible: (i: number) => {
        opacity: number;
        y: number;
        transition: {
            delay: number;
            duration: number;
            type: string;
            stiffness: number;
            damping: number;
        };
    };
};

/**
 * Get the pagination type of a data adapter
 * @param dataAdapter - The data adapter to get the pagination type of
 * @returns The pagination type of the data adapter
 */
export declare const getDataSourcePaginationType: <D extends {
    paginationType?: PaginationType | undefined | never;
}>(dataAdapter: D) => PaginationType;

export declare function getEmojiLabel(emoji: string): string;

declare interface GranularityDefinition {
    calendarMode?: CalendarMode;
    calendarView: CalendarView;
    label: (viewDate: Date, i18n: TranslationsType) => ReactNode;
    toRangeString: (date: Date | DateRange | undefined | null, i18n: TranslationsType, format?: DateStringFormat) => DateRangeString;
    toRange: <T extends Date | DateRange | undefined | null>(date: T) => T extends Date | DateRange ? DateRangeComplete : T;
    toString: (date: Date | DateRange | undefined | null, i18n: TranslationsType, format?: DateStringFormat) => string;
    fromString: (dateStr: string | DateRangeString, i18n: TranslationsType) => DateRange | null;
    navigateUIView: (viewDate: Date, direction: -1 | 1) => Date;
    navigate: (date: Date, direction: -1 | 1) => Date;
    getViewDateFromDate: (date: Date) => Date;
    render: (renderProps: {
        mode: CalendarMode;
        selected: Date | DateRange | null;
        onSelect: (date: Date | DateRange | null) => void;
        month: Date;
        onMonthChange: (date: Date) => void;
        motionDirection: number;
        minDate?: Date;
        maxDate?: Date;
        setViewDate: (date: Date) => void;
        viewDate: Date;
        compact?: boolean;
    }) => ReactNode;
    add: (date: DateRangeComplete, delta: number) => DateRangeComplete;
    getPrevNext(date: DateRange, options: DateNavigationOptions): PrevNextDateNavigation;
}

declare type GranularityDefinitionKey = keyof typeof granularityDefinitions;

declare const granularityDefinitions: Record<string, GranularityDefinition>;

/**
 * Symbol used to identify the groupId in the data
 */
export declare const GROUP_ID_SYMBOL: unique symbol;

/**
 * Defines the structure and configuration of a grouping options for a data source.
 * @template RecordType - The type of records in the collection
 */
export declare type GroupingDefinition<R extends RecordType> = {
    /** Whether grouping is mandatory or the user can chose not to group */
    mandatory?: boolean;
    hideSelector?: boolean;
    groupBy: {
        [K in RecordPaths<R>]?: {
            /** The label for the grouping */
            name: string;
            /** The item count for the grouping */
            label: (groupId: RecordPathValue<R, K>, filters: FiltersState<FiltersDefinition>) => string | Promise<string>;
            defaultDirection?: SortOrder;
            itemCount?: (groupId: RecordPathValue<R, K>, filters: FiltersState<FiltersDefinition>) => number | undefined | Promise<number | undefined>;
        };
    };
} & ({
    /** Whether the grouping is non collapsible */
    collapsible: true;
    /** The initial open groups */
    defaultOpenGroups?: boolean | string[];
} | {
    collapsible?: false;
    defaultOpenGroups?: never;
});

/**
 * The selected the grouping state
 * @template Grouping - The grouping definition
 */
export declare type GroupingState<R extends RecordType, Grouping extends GroupingDefinition<R>> = {
    field: keyof Grouping["groupBy"];
    order?: SortOrder;
} | undefined;

export declare type GroupRecord<RecordType> = {
    key: string;
    label: string | Promise<string>;
    itemCount: number | undefined | Promise<number | undefined>;
    records: RecordType[];
};

export declare const HomeLayout: ForwardRefExoticComponent<Omit<{
widgets?: ReactNode[];
children?: ReactNode;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface I18nProviderProps {
    children: ReactNode;
    translations: TranslationsType;
}

declare const iconSizes: {
    readonly xs: "xs";
    readonly sm: "xs";
    readonly md: "sm";
    readonly lg: "md";
};

export declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
    animate?: "normal" | "animate";
}>;

declare const iconVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type ImageContextValue = {
    src?: (props: ImageProps) => SrcProps;
};

declare type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

declare type InFilterDefinition<T = unknown> = BaseFilterDefinition<"in"> & {
    options: InFilterOptions_2<T>;
};

/**
 * Represents a selectable option in filter components.
 * Used primarily with InFilterDefinition.
 * @template T - Type of the underlying value
 */
declare type InFilterOptionItem<T = unknown> = {
    /** The value used for filtering */
    value: T;
    /** Human-readable label for the option */
    label: string;
};

/**
 * Represents the options for the InFilter component.
 * @template T - Type of the underlying value
 */
declare type InFilterOptions_2<T> = {
    cache?: boolean;
    options: Array<InFilterOptionItem<T>> | (() => Array<InFilterOptionItem<T>> | Promise<Array<InFilterOptionItem<T>>>);
};

/**
 * Represents a paginated response structure tailored for infinite scroll implementations.
 *
 * @template TRecord The type of the individual record contained in the paginated response.
 *
 * @extends BasePaginatedResponse
 *
 * @property {"infinite-scroll"} type Identifies the pagination type as "infinite-scroll".
 * @property {string | null} cursor The current position cursor used to fetch the next set of records.
 * @property {boolean} hasMore Indicates whether there are additional records available for loading.
 */
export declare type InfiniteScrollPaginatedResponse<TRecord> = BasePaginatedResponse<TRecord> & {
    type: Extract<PaginationType, "infinite-scroll">;
    /**
     * Represents the current position cursor for pagination.
     * This is typically a string (often Base64-encoded) that represents
     * the position of the last item in the current result set.
     * Used to fetch the next page of results.
     */
    cursor: string | null;
    /**
     * A boolean flag indicating whether there are more items available for fetching.
     * Used to determine if additional requests should be made for pagination.
     */
    hasMore: boolean;
};

declare const internalAvatarColors: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];

declare type InternalAvatarProps = React_2.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: (typeof internalAvatarSizes)[number];
    type?: (typeof internalAvatarTypes)[number];
    color?: (typeof internalAvatarColors)[number];
};

declare const internalAvatarSizes: readonly ["xsmall", "small", "medium", "large", "xlarge", "xxlarge"];

declare const internalAvatarTypes: readonly ["base", "rounded"];

export declare function isInfiniteScrollPagination<R extends RecordType>(pagination: PaginationInfo | null): pagination is InfiniteScrollPaginatedResponse<R>;

export declare function isPageBasedPagination<R extends RecordType>(pagination: PaginationInfo | null): pagination is PageBasedPaginatedResponse<R>;

declare type ItemActionsDefinition<T extends RecordType> = (item: T) => ActionDefinition[] | undefined;

declare type ItemDefinition = {
    title: string;
    description?: string[];
    avatar?: AvatarVariant;
};

declare type KanbanCollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = CollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, KanbanVisualizationOptions<Record, Filters, Sortings>>;

declare type KanbanLaneDefinition = {
    id: string;
    title: string;
    variant?: Variant;
};

declare type KanbanOnCreate = (laneId: string) => void | Promise<void>;

declare type KanbanOnMove<TRecord extends RecordType> = (fromLaneId: string, toLaneId: string, sourceRecord: TRecord, destinyRecord: {
    record: TRecord;
    position: "above" | "below";
} | null) => Promise<TRecord>;

declare type KanbanVisualizationOptions<Record extends RecordType, _Filters extends FiltersDefinition, _Sortings extends SortingsDefinition> = {
    lanes: ReadonlyArray<KanbanLaneDefinition>;
    title?: (record: Record) => string;
    description?: (record: Record) => string;
    avatar?: (record: Record) => CardAvatarVariant;
    metadata?: (record: Record) => ReadonlyArray<{
        icon: IconType;
        property: CardMetadataProperty;
    }>;
    onMove?: KanbanOnMove<Record>;
    onCreate?: KanbanOnCreate;
};

declare type L10nContextValue = {
    locale: string;
};

declare interface L10nProviderProps {
    children: ReactNode;
    l10n: L10nContextValue;
}

/**
 * Represents a single lane configuration with its own filters
 * @template Filters - The available filter configurations for this lane
 */
declare type Lane<Filters extends FiltersDefinition> = {
    id: string;
    filters: FiltersState<Filters>;
};

declare interface LayoutProps {
    fullScreen?: boolean;
    addBodyClasses?: boolean;
}

declare const LayoutProvider: React.FC<{
    children: React.ReactNode;
} & LayoutProps>;

declare const layoutVariants: (props?: ({
    variant?: "narrow" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare type Level = "info" | "warning" | "critical" | "positive";

export declare const LineChart: ForwardRefExoticComponent<Omit<LineChartPropsBase<LineChartConfig> & {
lineType?: "natural" | "linear";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const Link: ForwardRefExoticComponent<Omit<LinkProps_3 & RefAttributes<HTMLAnchorElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type LinkContextValue = {
    currentPath?: string;
    component?: (props: LinkProps_2, ref: ForwardedRef<HTMLAnchorElement>) => JSX.Element;
};

export declare interface LinkProps extends LinkProps_2, VariantProps<typeof linkVariants>, DataAttributes {
    stopPropagation?: boolean;
}

declare type LinkProps_2 = AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
    disabled?: boolean;
};

declare const linkVariants: (props?: ({
    variant?: "link" | "unstyled" | undefined;
    disabled?: boolean | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

/**
 * Group List: Renders the list for a group
 */
declare type ListCollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = CollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, ListVisualizationOptions<Record, Filters, Sortings>>;

declare type ListPropertyDefinition<R, Sortings extends SortingsDefinition> = WithOptionalSorting_2<R, Sortings> & PropertyDefinition_2<R>;

declare type ListVisualizationOptions<R extends RecordType, _Filters extends FiltersDefinition, Sortings extends SortingsDefinition> = {
    itemDefinition: (record: R) => ItemDefinition;
    fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>;
};

export declare interface LoadingStateProps {
    label: string;
}

declare const MAX_EXPANDED_ACTIONS = 2;

declare const moduleAvatarVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | "xxs" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare type ModuleId = keyof typeof modules;

export declare const modules: {
    readonly "ai-reports": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly analytics: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly ats: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly benefits: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly billing: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly calendar: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly cards: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "clock-in": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly company_attendance: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly company_documents: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly company_projects: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly company_trainings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly compensations: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly complaints: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly discover: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly documents: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly employee_attendance: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly employees: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly engagement: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly engagement_insights: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_surveys: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-accounting": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-sales": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-spending": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-treasury": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-workspace": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly goals: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly home: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly hub: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly it_management: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly kudos: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly meetings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_benefits: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_documents: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_projects: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_spending: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_trainings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "new-trainings": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly notifications: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly inbox: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly overviews: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly pages: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly payroll_bundle: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly performance_v2: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly performance: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly playground: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly processes: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly profile: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly project_management: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly reports: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly settings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly personal_settings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly shift_management: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly shifts: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly social: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly software: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly space_control: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly talent_analytics: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly tasks: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "time-tracking": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly timeoff: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly workflows: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
};

declare type NavigationFilterDefinition = DateNavigatorFilterDefinition;

declare type NavigationFilterDefinitionBase<T> = {
    type: string;
    defaultValue: T;
};

/**
 * Record of navigation filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available navigation filters for a collection.
 * @template Keys - String literal type for filter keys
 */
declare type NavigationFiltersDefinition<Keys extends string = string> = Record<Keys, NavigationFilterDefinition>;

/**
 * Current state of all navigation filters in a collection.
 * Maps filter keys to their current values.
 * This represents the active filter selections at any given time.
 * @template Definition - Record of filter definitions
 */
declare type NavigationFiltersState<Definition extends Record<string, NavigationFilterDefinition>> = {
    [K in keyof Definition]?: NavigationFilterValue<Definition[K]>;
};

/**
 * Represents a navigation filter with its current value.
 * @template T - The type of the filter value
 */
declare type NavigationFilterValue<T> = T extends DateNavigatorFilterDefinition ? DateValue : T extends undefined ? undefined : never;

declare type NavigationItem = Pick<LinkProps_2, "href" | "exactMatch" | "onClick"> & {
    label: string;
} & DataAttributes;

/**
 * Utility type to extract all possible paths from nested object.
 * Generates hyphenated paths from nested object structure
 * Only includes parent key if it has a DEFAULT property
 */
declare type NestedKeyOf<T> = {
    [K in keyof T & string]: T[K] extends object ? K extends "DEFAULT" ? never : T[K] extends {
        DEFAULT: string;
    } ? `${K}` | `${K}-${NestedKeyOf<T[K]>}` : `${K}-${NestedKeyOf<T[K]>}` : K extends "DEFAULT" ? never : `${K}`;
}[keyof T & string];

export declare type NewColor = Extract<BaseColor, "viridian" | "malibu" | "yellow" | "purple" | "lilac" | "barbie" | "smoke" | "army" | "flubber" | "indigo" | "camel">;

export declare interface NextStepsProps {
    title: string;
    items: StepItemProps[];
}

declare type OnBulkActionCallback<Record extends RecordType, Filters extends FiltersDefinition> = (...args: [
action: BulkAction,
...Parameters<OnSelectItemsCallback<Record, Filters>>
]) => void;

/**
 * OneFiltersPicker component to use as a single component
 */
export declare const OneFilterPicker: {
    <Definition extends FiltersDefinition>(props: OneFilterPickerRootProps<Definition>): JSX_2.Element;
    displayName: string;
};

/**
 * Props for the Filters component.
 * @template Definition - The type defining the structure of available filters
 */
declare type OneFilterPickerRootProps<Definition extends FiltersDefinition> = {
    /** The definition of available filters and their configurations */
    filters?: Definition;
    /** Current state of applied filters */
    value: FiltersState<Definition>;
    /** Optional preset configurations that users can select */
    presets?: PresetsDefinition<Definition>;
    /** Whether presets are currently loading */
    presetsLoading?: boolean;
    /** Callback fired when filters are changed */
    onChange: (value: FiltersState<Definition>) => void;
    /** The children of the component */
    children?: React.ReactNode;
    /** The mode of the component */
    mode?: FiltersMode;
};

declare type OnLoadDataCallback<Record extends RecordType, Filters extends FiltersDefinition> = (data: {
    totalItems: number | undefined;
    filters: FiltersState<Filters>;
    search: string | undefined;
    isInitialLoading: boolean;
    data: Record[];
}) => void;

declare type OnLoadErrorCallback = (error: DataError) => void;

export declare type OnSelectItemsCallback<R extends RecordType, Filters extends FiltersDefinition> = (selectedItems: SelectedItemsDetailedStatus<R, Filters> & {
    byLane?: Record<string, SelectedItemsDetailedStatus<R, Filters>>;
}, clearSelectedItems: () => void) => void;

/**
 * Represents a paginated response with page-based navigation.
 *
 * Combines the base pagination response with additional properties specific to
 * page-based pagination, allowing clients to navigate the dataset using page numbers.
 *
 * This type is useful for APIs returning data in discrete pages, where both the
 * current page index and the total number of pages are provided.
 *
 * @template TRecord - The type of the individual records in the dataset.
 *
 * @property {"pages"} type - Indicates the pagination type is page-based.
 * @property {number} currentPage - The index of the current page being viewed.
 * @property {number} pagesCount - The total number of pages available.
 */
export declare type PageBasedPaginatedResponse<TRecord> = BasePaginatedResponse<TRecord> & {
    type: Extract<PaginationType, "pages">;
    /** Current page number (1-indexed) */
    currentPage: number;
    /** Total number of pages available */
    pagesCount: number;
};

/**
 * Paginated data adapter configuration
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export declare type PaginatedDataAdapter<R extends RecordType, Filters extends FiltersDefinition, Options extends PaginatedFetchOptions<Filters> = PaginatedFetchOptions<Filters>, FetchReturn = PaginatedResponse<R>> = {
    /** Indicates this adapter uses page-based pagination */
    paginationType: PaginationType;
    /** Default number of records per page */
    perPage?: number;
    /**
     * Function to fetch paginated data based on filter and pagination options
     * @param options - The filter and pagination options to apply when fetching data
     * @returns Paginated response with records and pagination info
     */
    fetchData: (options: Options) => FetchReturn | Promise<FetchReturn> | Observable<PromiseState<FetchReturn>>;
};

export declare type PaginatedFetchOptions<Filters extends FiltersDefinition> = BaseFetchOptions<Filters> & {
    pagination: {
        perPage?: number;
    } & ({
        currentPage: number;
        cursor?: never;
    } | {
        cursor?: string | null;
        currentPage?: never;
    });
};

/**
 * Response type for paginated collection data
 * @template Record - The type of records in the collection
 */
export declare type PaginatedResponse<TRecord> = PageBasedPaginatedResponse<TRecord> | InfiniteScrollPaginatedResponse<TRecord>;

/**
 * Pagination state and controls
 */
export declare type PaginationInfo = Omit<PageBasedPaginatedResponse<unknown>, "records"> | Omit<InfiniteScrollPaginatedResponse<unknown>, "records">;

/**
 * Defines the available pagination types used throughout the application.
 * - "pages": Represents traditional page-based navigation with numbered pages.
 * - "infinite-scroll": Represents continuous loading of content as the user scrolls.
 * - "no-pagination": Represents a collection that does not use pagination.
 */
export declare type PaginationType = "pages" | "infinite-scroll" | "no-pagination";

export declare type PersonAvatarVariant = Extract<AvatarVariant, {
    type: "person";
}>;

declare type PersonTagProps = ComponentProps<typeof F0TagPerson>;

export declare const PieChart: ForwardRefExoticComponent<Omit<PieChartProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

/**
 * Defines preset filter configurations that can be applied to a collection.
 * @template Filters - The available filter configurations
 */
export declare type PresetDefinition<Filters extends FiltersDefinition> = {
    /** Display name for the preset */
    label: string;
    /** Filter configuration to apply when this preset is selected */
    filter: FiltersState<Filters>;
    /** Function to count the number of items that match the filter */
    itemsCount?: (filters: FiltersState<Filters>) => Promise<number | undefined> | number | undefined;
};

export declare type PresetsDefinition<Filters extends FiltersDefinition> = PresetDefinition<Filters>[];

declare type PrevNextDateNavigation = {
    prev: DateRange | false;
    next: DateRange | false;
};

declare type PrimaryActionsDefinition = Pick<DropdownItemObject, "onClick" | "label" | "icon">;

/**
 * Defines the structure and configuration of the primary action that can be performed on a collection.
 * @returns An action
 */
declare type PrimaryActionsDefinitionFn = () => PrimaryActionsDefinition | PrimaryActionsDefinition[] | undefined;

export declare const PrivacyModeProvider: React_2.FC<{
    initiallyEnabled?: boolean;
    children: ReactNode;
}>;

declare const privateProps: readonly ["append", "appendButton", "className"];

declare const privateProps_2: readonly ["forceVerticalMetadata", "disableOverlayLink"];

export declare const ProductBlankslate: ForwardRefExoticComponent<ProductBlankslateProps & RefAttributes<HTMLDivElement>>;

declare type ProductBlankslateProps = {
    title: string;
    subtitle?: string;
    image: string;
    benefits: string[];
    actions?: React.ReactNode;
    withShadow?: boolean;
    module?: ModuleId;
    moduleName?: string;
    tag?: {
        label: string;
        icon: IconType;
    };
};

export declare function ProductCard({ title, description, onClick, onClose, isVisible, dismissable, trackVisibility, type, ...props }: ProductCardProps): false | JSX_2.Element;

export declare type ProductCardProps = {
    title: string;
    description: string;
    onClick: () => void;
    onClose?: () => void;
    isVisible: boolean;
    dismissable?: boolean;
    trackVisibility?: (open: boolean) => void;
} & ({
    module?: never;
    type: "one-campaign";
} | {
    module: ModuleId;
    type?: never;
});

export declare function ProductModal({ isOpen, onClose, title, image, benefits, errorMessage, successMessage, loadingState, nextSteps, closeLabel, primaryAction, modalTitle, modalModule, secondaryAction, portalContainer, tag, }: ProductModalProps): JSX_2.Element;

declare type ProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    modalTitle: string;
    modalModule: ModuleId;
    title: string;
    image: string;
    benefits: string[];
    errorMessage: {
        title: string;
        description: string;
    };
    successMessage: {
        title: string;
        description: string;
        buttonLabel?: string;
        buttonOnClick?: () => void;
    };
    loadingState: {
        label: string;
    };
    closeLabel: string;
    nextSteps?: {
        title: string;
        items: {
            text: string;
            isCompleted?: boolean;
        }[];
    };
    tag?: {
        label: string;
        icon: IconType;
    };
    primaryAction?: Action_2;
    secondaryAction?: Action_2;
    portalContainer?: HTMLElement | null;
};

export declare function ProductWidget({ mediaUrl, title, description, onClose, dismissible, width, trackVisibility, actions, showConfirmation, }: ProductWidgetProps): JSX_2.Element;

declare type ProductWidgetProps = {
    mediaUrl?: string;
    title: string;
    description: string;
    onClose: () => void;
    dismissible: boolean;
    width?: string;
    trackVisibility?: (visible: boolean) => void;
    actions?: Action[];
    showConfirmation?: boolean;
};

export declare const ProgressBarChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig_2> & {
value: number;
max?: number;
label?: string;
color?: string;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

/**
 * Utility type for handling both Promise and Observable return types.
 * @template T - The type of the value being promised or observed
 */
export declare type PromiseOrObservable<T> = T | Promise<T> | Observable<PromiseState<T>>;

declare interface PromiseState<T> {
    loading: boolean;
    error?: Error | null;
    data?: T | null;
}

declare type PromoteAction = {
    variant: "promote";
    label: string;
    onClick: () => void;
    errorMessage: UpsellingButtonProps["errorMessage"];
    successMessage: UpsellingButtonProps["successMessage"];
    loadingState: UpsellingButtonProps["loadingState"];
    nextSteps: UpsellingButtonProps["nextSteps"];
    closeLabel: UpsellingButtonProps["closeLabel"];
    showIcon?: boolean;
    showConfirmation?: boolean;
    icon?: IconType;
};

declare type PropertyDefinition_2<T> = {
    label: string;
    /**
     * Optional tooltip text. When provided, displays an info icon next to the header content
     * that shows this text in a tooltip when hovered.
     */
    info?: string;
    /**
     * Function that extracts and formats the value from an item.
     * Should return an object matching the expected args for the specified renderer type.
     *
     * Example usage:
     * {
     *   render: (item) => ({
     *     type: "avatar",
     *     value: {
     *       type: "person",
     *       firstName: item.firstName,
     *       lastName: item.lastName,
     *     }
     *   })
     * }
     */
    render: (item: T) => RendererDefinition | string | number | undefined;
    /**
     * Function that determines if the property should be hidden for a given item.
     * Should return true if the property should be hidden, false otherwise.
     */
    hide?: (item: T) => boolean;
};

declare type Props = {
    /**
     * Array of chips to display.
     */
    chips: Array<ChipProps>;
    /**
     * The maximum number of chips to display.
     * @default 4
     */
    max?: number;
    /**
     * The remaining number to display.
     */
    remainingCount?: number;
    /**
     * The layout of the chip list.
     * - "fill" - Chips will expand to fill the available width, with overflow items shown in a counter
     * - "compact" - Chips will be stacked together up to the max limit, with remaining shown in counter
     * @default "compact"
     */
    layout?: "fill" | "compact";
};

declare type Props_2 = {
    count: number;
    list?: TagCounterItem[];
};

/**
 * Utility type to get all possible paths through an object using dot notation
 * @template T - The object type to traverse
 */
declare type RecordPaths<T> = T extends Record<string, unknown> ? {
    [K in keyof T]: K extends string ? T[K] extends Record<string, unknown> ? K | `${K}.${RecordPaths<T[K]>}` : K : never;
}[keyof T] : never;

/**
 * Utility type to get the value type at a given path
 * @template T - The object type
 * @template P - The path string
 */
declare type RecordPathValue<T, P extends string> = P extends keyof T ? T[P] : P extends `${infer K}.${infer Rest}` ? K extends keyof T ? RecordPathValue<T[K], Rest> : never : never;

/**
 * Represents a record type with string keys and unknown values.
 * This type is used to represent the data structure of a collection.
 */
export declare type RecordType = Record<string, unknown>;

declare type RegularAction = BaseAction & {
    type: "regular";
    variant: ButtonVariant;
};

declare type RendererDefinition = ValueDisplayRendererDefinition;

declare type SearchFilterDefinition = BaseFilterDefinition<"search">;

declare type SearchOptions = {
    /** Whether search is enabled */
    enabled: boolean;
    /** Whether search is synchronous */
    sync?: boolean;
    /** Debounce time for search */
    debounceTime?: number;
};

declare type SecondaryActionsDefinition = {
    expanded: Enumerate<typeof MAX_EXPANDED_ACTIONS>;
    actions: () => Array<SecondaryActionsItemDefinition> | undefined;
} | (() => Array<SecondaryActionsItemDefinition> | undefined);

/**
 * Defines the structure and configuration of secondary actions that can be performed on a collection.
 * @returns An array of actions
 */
declare type SecondaryActionsItemDefinition = DropdownItem & {
    enabled?: boolean;
    hideLabelWhenExpanded?: boolean;
};

/**
 * Represents a collection of selected items.
 * @template T - The type of items in the collection
 */
export declare type SelectedItems<T> = ReadonlyArray<T>;

export declare type SelectedItemsDetailedStatus<R extends RecordType, Filters extends FiltersDefinition> = {
    allSelected: boolean | "indeterminate";
    itemsStatus: ReadonlyArray<{
        item: R;
        checked: boolean;
    }>;
    groupsStatus: Record<string, boolean>;
    filters: FiltersState<Filters>;
    selectedCount: number;
};

/**
 * Represents the selected items by id
 */
export declare type SelectedItemsState = {
    allSelected?: boolean | "indeterminate";
    items?: ReadonlyArray<{
        id: string;
        checked: boolean;
    }>;
    groups?: ReadonlyArray<{
        groupId: string;
        checked: boolean;
    }>;
};

/**
 * Response structure for non-paginated data
 */
declare type SimpleResult<T> = T[];

declare const sizes: readonly ["sm", "md", "lg"];

/**
 * Type helper to extract keys from a SortingsDefinition
 */
export declare type SortingKey<Definition extends SortingsDefinition> = Definition extends readonly string[] ? Definition[number] : keyof Definition;

export declare type SortingsDefinition = Record<string, {
    label: string;
}>;

export declare type SortingsState<Definition extends SortingsDefinition> = {
    field: keyof Definition;
    order: SortOrder;
} | null;

/**
 * Type helper to create a multiple sortings state (the main sorting and the grouping sorting)
 */
export declare type SortingsStateMultiple = {
    field: string;
    order: "asc" | "desc";
}[];

export declare type SortOrder = "asc" | "desc";

declare type SrcProps = Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes">;

export declare const StandardLayout: ForwardRefExoticComponent<Omit<StandardLayoutProps & HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare interface StandardLayoutProps extends VariantProps<typeof layoutVariants> {
    children?: default_2.ReactNode;
}

export declare type Status = "positive" | "neutral" | "negative";

export declare type StatusVariant = Variant;

export declare interface StepItemProps {
    text: string;
    isCompleted?: boolean;
}

export declare interface SuccessMessageProps {
    title: string;
    description: string;
    buttonLabel?: string;
    buttonOnClick?: () => void;
}

declare type SummariesDefinition = Record<string, {
    type: SummaryType;
}>;

/**
 * Type helper to extract keys from a SummaryDefinition
 */
declare type SummaryKey<Definition extends SummariesDefinition> = Definition extends readonly string[] ? Definition[number] : keyof Definition;

declare type SummaryType = "sum";

declare type TableCollectionProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = CollectionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, TableVisualizationOptions<R, Filters, Sortings, Summaries>>;

declare type TableColumnDefinition<R extends RecordType, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition> = WithOptionalSorting<R, Sortings> & Pick<ComponentProps<typeof TableHead>, "hidden" | "info" | "infoIcon" | "sticky" | "width"> & {
    /**
     * Optional summary configuration for this column
     * References a key in the Summaries definition, similar to how sorting works
     */
    summary?: SummaryKey<Summaries>;
    /**
     * The id of the column (if not provided, the id will be the label of the column)
     */
    id?: ColId;
    /**
     * The initial order of the column
     */
    order?: number;
    /**
     * The initial state of the hidden (only applies if allowColumnHiding is true)
     */
    hidden?: boolean;
    /**
     * Avoid hiding the column by the user
     */
    noHiding?: boolean;
};

declare function TableHead({ children, width, sortState, onSortClick, info, infoIcon, sticky, hidden, align, className, }: TableHeadProps): JSX_2.Element;

declare interface TableHeadProps {
    children: React.ReactNode;
    /**
     * The width of the header cell. If not provided, the width will be "auto"
     * @default "auto"
     */
    width?: ColumnWidth;
    /**
     * When true, the header cell will stick in the specified position when scrolling horizontally
     * @default undefined
     */
    sticky?: {
        left?: number;
        right?: never;
    } | {
        left?: never;
        right?: number;
    };
    /**
     * The current sort direction of this column. "none" indicates no sorting,
     * "asc" sorts ascending (A-Z, 1-9), and "desc" sorts descending (Z-A, 9-1)
     * @default "none"
     */
    sortState?: "none" | "asc" | "desc";
    /**
     * Callback fired when the sort button is clicked.
     * Use this to handle toggling between sort states.
     */
    onSortClick?: () => void;
    /**
     * Optional tooltip text. When provided, displays an info icon next to the header content
     * that shows this text in a tooltip when hovered.
     */
    info?: string;
    /**
     * Icon to display when info is provided.
     * @default InfoCircleLine
     */
    infoIcon?: IconType;
    /**
     * When true, the header cell will not be visible.
     * @default false
     */
    hidden?: boolean;
    /**
     * Alingment of the cell
     * @default "left"
     */
    align?: "left" | "right";
    /**
     * The class name of the header cell
     */
    className?: string;
}

declare type TableVisualizationOptions<R extends RecordType, _Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition> = {
    /**
     * The columns to display
     */
    columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>;
    /**
     * The number of columns to freeze on the left
     */
    frozenColumns?: 0 | 1 | 2;
    /**
     * Allow users to reorder columns (you can only reorder columns that are not frozen) (check cols props to define the order)
     */
    allowColumnReordering?: boolean;
    /**
     * Allow users to hide columns (you can define especifcally non hiddable columns in col props, also frozen columns are not hiddable)
     */
    allowColumnHiding?: boolean;
};

declare type TableVisualizationSettings = {
    order: ColId[];
    hidden: ColId[];
};

export declare type TagAlertProps<Text extends string = string> = {
    text: Text extends "" ? never : Text;
    level: Level;
};

export declare interface TagBalanceProps {
    text: string;
    status: Status;
}

export declare interface TagCompanyProps {
    companyName: string;
    companyImageUrl: string;
    onClick?: () => void;
}

export declare const TagCounter: {
    ({ count, list }: Props_2): JSX_2.Element;
    displayName: string;
};

export declare type TagCounterItem = TagVariant;

declare type TagDataType<T extends string> = Omit<Extract<TagVariant, {
    type: T;
}>, "type" | "description">;

export declare const tagDotColors: NewColor[];

export declare type TagDotProps = {
    text: string;
} & ({
    color: NewColor;
} | {
    customColor: string;
});

export declare type TagListProps<T extends TagType> = {
    /**
     * The type of tags to display. Only one type can be used at a time.
     */
    type: T;
    /**
     * Array of tag data corresponding to the specified type.
     */
    tags: Array<TagTypeMapping[T] & WithTooltipDescription_2>;
    /**
     * The maximum number of tags to display.
     * @default 4
     */
    max?: number;
    /**
     * The remaining number to display.
     */
    remainingCount?: number;
    /**
     * The layout of the tag list.
     * - "fill" - Tags will expand to fill the available width, with overflow items shown in a counter
     * - "compact" - Tags will be stacked together up to the max limit, with remaining shown in counter
     * @default "compact"
     */
    layout?: "fill" | "compact";
};

export declare interface TagPersonProps {
    name: string;
    avatarUrl: string;
    onClick?: () => void;
}

export declare interface TagRawProps {
    text?: string;
    additionalAccesibleText?: string;
    icon?: IconType;
    noBorder?: boolean;
    className?: string;
}

export declare interface TagStatusProps {
    text: string;
    variant: Variant;
    /**
     * Sometimes you need to clarify the status for screen reader users
     * E.g., when showing a tooltip for sighted user, provide the tootip text to this prop because tooltips aren't accessible
     */
    additionalAccesibleText?: string;
}

export declare interface TagTeamProps {
    teamName: string;
    teamImageUrl: string;
    onClick?: () => void;
}

export declare type TagType = keyof TagTypeMapping;

declare type TagTypeMapping = {
    dot: TagDataType<"dot">;
    person: TagDataType<"person">;
    team: TagDataType<"team">;
    company: TagDataType<"company">;
    alert: TagDataType<"alert">;
    status: TagDataType<"status">;
    balance: TagDataType<"balance">;
    raw: TagDataType<"raw">;
};

declare type TagVariant = BaseTag<{
    type: "dot";
} & TagDotProps> | BaseTag<{
    type: "person";
} & PersonTagProps> | BaseTag<{
    type: "team";
} & TeamTagProps> | BaseTag<{
    type: "company";
} & CompanyTagProps> | BaseTag<{
    type: "alert";
} & AlertTagProps> | BaseTag<{
    type: "status";
} & TagStatusProps> | BaseTag<{
    type: "balance";
} & BalanceTagProps> | BaseTag<{
    type: "raw";
} & TagRawProps>;

export declare type TeamAvatarVariant = Extract<AvatarVariant, {
    type: "team";
}>;

declare type TeamTagProps = ComponentProps<typeof F0TagTeam>;

declare type TranslationShape<T> = {
    [K in keyof T]: T[K] extends string ? string : T[K] extends Record<string, string | Record<string, unknown>> ? TranslationShape<T[K]> : never;
};

export declare type TranslationsType = TranslationShape<typeof defaultTranslations>;

export declare const TwoColumnLayout: ForwardRefExoticComponent<Omit<TwoColumnLayoutProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare interface TwoColumnLayoutProps {
    children: ReactNode;
    sideContent: ReactNode;
    mainColumnPosition?: "left" | "right";
    sticky?: boolean;
}

declare type UpsellAction = BaseAction & {
    type: "upsell";
    variant: "promote" | "outlinePromote";
    errorMessage: ErrorMessageProps;
    successMessage: SuccessMessageProps;
    loadingState: LoadingStateProps;
    nextSteps: NextStepsProps;
    closeLabel: string;
    showConfirmation: boolean;
};

export declare const UpsellingBanner: ForwardRefExoticComponent<Omit<BaseBannerProps, "children" | "primaryAction" | "secondaryAction"> & {
primaryAction?: DefaultAction | PromoteAction;
secondaryAction?: DefaultAction | PromoteAction;
} & RefAttributes<HTMLDivElement>>;

export declare function UpsellingButton({ label, showIcon, onRequest, showConfirmation, loading: externalLoading, errorMessage, successMessage, loadingState, nextSteps, closeLabel, variant, onModalStateChange, portalContainer, ...props }: UpsellingButtonProps): JSX_2.Element;

export declare interface UpsellingButtonProps extends Omit<ButtonProps, "icon"> {
    variant?: "promote" | "outlinePromote";
    /**
     * The text to be displayed in the button
     */
    label: string;
    /**
     * Whether to show the Upsell icon. Defaults to true.
     */
    showIcon?: boolean;
    /**
     * Function to be executed when the button is clicked
     */
    onRequest?: () => Promise<void> | void;
    /**
     * Whether to show the confirmation dialog after the request
     */
    showConfirmation?: boolean;
    /**
     * The error message to be displayed in the confirmation dialog
     */
    errorMessage: ErrorMessageProps;
    /**
     * The success message to be displayed in the confirmation dialog
     */
    successMessage: SuccessMessageProps;
    /**
     * The label to be displayed in the button when the request is being processed
     */
    loadingState: LoadingStateProps;
    /**
     * The next steps to be displayed in the confirmation dialog
     */
    nextSteps: NextStepsProps;
    /**
     * The label to be displayed in the close button of the confirmation dialog
     */
    closeLabel: string;
    /**
     * Callback to notify when the modal state changes (open/closed)
     */
    onModalStateChange?: (isOpen: boolean) => void;
    /**
     * Portal container for the confirmation dialog
     */
    portalContainer?: HTMLElement | null;
}

export declare function UpsellingPopover({ isOpen, setIsOpen, label, variant, size, showIcon, side, align, icon, mediaUrl, title, description, width, trackVisibility, actions, onClick, hideLabel, }: UpsellingPopoverProps): JSX_2.Element;

declare type UpsellingPopoverProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    label: string;
    variant: ButtonProps["variant"];
    size?: ButtonProps["size"];
    side?: PopoverContentProps["side"];
    align?: PopoverContentProps["align"];
    icon?: IconType;
    showIcon?: boolean;
    mediaUrl: string;
    title: string;
    description: string;
    width?: string;
    trackVisibility?: (visible: boolean) => void;
    actions?: Action[];
    onClick?: () => void;
    hideLabel?: boolean;
};

export declare const UpsellRequestResponseDialog: ForwardRefExoticComponent<UpsellRequestResponseDialogProps & RefAttributes<HTMLDivElement>>;

declare interface UpsellRequestResponseDialogProps {
    open: boolean;
    onClose?: () => void;
    success: boolean;
    errorMessage: ErrorMessageProps;
    successMessage: SuccessMessageProps;
    nextSteps?: NextStepsProps;
    closeLabel: string;
    portalContainer?: HTMLElement | null;
}

/**
 * A core React hook that manages data fetching, state management, and pagination within the Collections ecosystem.
 *
 * ## Why a Separate Hook?
 *
 * `useData` exists as a separate hook for three main reasons:
 *
 * - **Visualization-Specific Needs**: Different visualizations have unique data requirements:
 *   - Card visualizations need grid-aligned pagination (multiples of grid columns)
 *   - Table visualizations work best with row-optimized data fetching
 *   - Custom visualizations may need specialized data transformations
 *
 * - **Separation of Concerns**: Maintains clear boundaries between:
 *   - Data source configuration (managed by `useDataSource`)
 *   - Data fetching & state management (handled by `useData`)
 *   - UI presentation (implemented by visualization components)
 *
 * - **Extensibility**: New visualization types can be added without modifying core data logic,
 *   as each visualization directly controls how it consumes data
 *
 * ## Core Features
 *
 * - Handles multiple data source types seamlessly (synchronous, Promise-based, Observable-based)
 * - Manages pagination state with automatic page handling
 * - Provides consistent loading states (`isInitialLoading`, `isLoading`)
 * - Implements standardized error handling with detailed error information
 * - Performs automatic cleanup of subscriptions to prevent memory leaks
 * - Supports filter application with proper filter state management
 *
 * ## Usage in Visualizations
 *
 * Each visualization component calls `useData` directly to maintain control over its specific data needs:
 *
 * ```tsx
 * // Example: CardCollection customizing pagination before calling useData
 * function CardCollection({ source }) {
 *   // Override source to ensure grid-friendly pagination (multiples of 2,3,4)
 *   const adaptedSource = useMemo(() => ({
 *     ...source,
 *     dataAdapter: {
 *       ...source.dataAdapter,
 *       perPage: source.dataAdapter.perPage ?? 24,
 *     }
 *   }), [source]);
 *
 *   // Let useData handle the data fetching with our customized source
 *   const { data, isInitialLoading, paginationInfo, setPage } = useData(adaptedSource);
 *
 *   // Rendering logic follows...
 * }
 * ```
 *
 * @template R - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 *
 * @param source - The data source object containing dataAdapter and filter state
 * @param options - Optional configuration including filter overrides
 *
 * @returns {UseDataReturn<R>} An object containing:
 * - data: The current collection records
 * - isInitialLoading: Whether this is the first data load
 * - isLoading: Whether any data fetch is in progress
 * - error: Any error that occurred during data fetching
 * - paginationInfo: Pagination state and metadata if available
 * - setPage: Function to navigate to a specific page
 */
export declare function useData<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>>(source: DataSource<R, Filters, Sortings, Grouping>, { filters, onError, fetchParamsProvider, onResponse, }?: UseDataOptions<R, Filters>, deps?: unknown[]): UseDataReturn<R>;

/**
 * Hook options for useData
 */
export declare interface UseDataOptions<R extends RecordType, Filters extends FiltersDefinition> {
    filters?: Partial<FiltersState<Filters>>;
    /**
     * A function that is called when an error occurs during data fetching.
     * It is called with the error object.
     * @param error - The error object.
     */
    onError?: (error: DataError) => void;
    /**
     * A function that provides the fetch parameters for the data source.
     * It is called before each fetch request and can be used to modify the fetch parameters.
     * @param options - The fetch parameters for the data source.
     * @returns The fetch parameters for the data source.
     */
    fetchParamsProvider?: <O extends BaseFetchOptions<Filters>>(options: O) => O;
    /**
     * A function that is called when the data is fetched successfully.
     * It is called with the response data.
     * @param response - The response data.
     */
    onResponse?: (response: PaginatedResponse<R> | SimpleResult<R>) => void;
}

/**
 * Hook return type for useData
 */
export declare interface UseDataReturn<R extends RecordType> {
    data: Data<R>;
    isInitialLoading: boolean;
    isLoading: boolean;
    isLoadingMore: boolean;
    error: DataError | null;
    paginationInfo: PaginationInfo | null;
    setPage: (page: number) => void;
    loadMore: () => void;
    totalItems: number | undefined;
    mergedFilters: FiltersState<FiltersDefinition>;
}

/**
 * A hook that manages data source state and filtering capabilities for a collection.
 * It creates and returns a reusable data source that can be shared across different
 * visualizations and components.
 *
 * This hook is intentionally separated from the rendering components to:
 * 1. Enable sharing the same data source across multiple components
 * 2. Allow for state management outside the rendering layer
 * 3. Support more complex data filtering, querying, and pagination logic
 * 4. Provide a clean separation between data management and visualization
 *
 * @template R - The type of records in the collection
 * @template Filters - The definition of available filters for the collection
 * @template ItemActions - The definition of available item actions
 * @template Actions - The definition of available actions for the collection
 *
 * @param options - Configuration object containing:
 *   - filters: Optional filter configurations for the collection
 *   - currentFilters: Initial state of the filters
 *   - dataAdapter: Adapter for data fetching and manipulation
 *   - itemActions: Optional item actions available
 *   - actions: Optional DataCollection actions
 *   - presets: Optional filter presets
 * @param deps - Dependency array for memoization, similar to useEffect dependencies
 *
 * @returns A DataSource object containing:
 * - filters: The available filter configurations
 * - currentFilters: The current state of the filters
 * - setCurrentFilters: Function to update the filter state
 * - dataAdapter: The data adapter for fetching/manipulating data
 * - itemActions: Available actions for records (items)
 * - actions: Available actions for the collection
 * - presets: Available filter presets
 */
export declare function useDataSource<R extends RecordType = RecordType, FiltersSchema extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>>({ currentFilters: initialCurrentFilters, currentGrouping: initialCurrentGrouping, filters, search, defaultSorting, dataAdapter, grouping, ...rest }: DataSourceDefinition<R, FiltersSchema, Sortings, Grouping>, deps?: ReadonlyArray<unknown>): DataSource<R, FiltersSchema, Sortings, Grouping>;

export declare function useDndEvents(handler: (e: {
    phase: "start" | "over" | "drop" | "cancel";
    source: DragPayload;
}) => void): void;

export declare function useDraggable<T = unknown>(args: {
    ref: React.RefObject<HTMLElement>;
    payload: DragPayload<T>;
    disabled?: boolean;
    handleRef?: React.RefObject<HTMLElement | null>;
}): void;

export declare function useDroppableList(args?: {
    ref: React.RefObject<HTMLElement>;
    id: string;
    accepts: string[];
}): void;

export declare const useEmojiConfetti: () => {
    fireEmojiConfetti: (emoji: string, elementRef: RefObject<HTMLElement>) => void;
};

export declare const useGroups: <R extends RecordType>(groups: GroupRecord<R>[], defaultOpenGroups?: boolean | GroupRecord<R>["key"][]) => {
    openGroups: Record<string, boolean>;
    setGroupOpen: (key: string, open: boolean) => void;
};

export declare const usePrivacyMode: () => {
    enabled: boolean;
    enable: () => void;
    disable: () => void;
    toggle: () => void;
};

export declare const useReducedMotion: () => boolean;

export declare type UseSelectable<R extends RecordType> = {
    isAllSelected: boolean;
    selectedItems: Map<number | string, R>;
    selectedGroups: Map<string, GroupRecord<R>>;
    isPartiallySelected: boolean;
    handleSelectItemChange: (item: R, checked: boolean) => void;
    handleSelectAll: (checked: boolean) => void;
    handleSelectGroupChange: (group: GroupRecord<R>, checked: boolean) => void;
    groupAllSelectedStatus: Record<string, AllSelectionStatus>;
    allSelectedStatus: AllSelectionStatus;
};

export declare function useSelectable<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Grouping extends GroupingDefinition<R>>(data: Data<R>, paginationInfo: PaginationInfo | null, source: DataSourceDefinition<R, Filters, Sortings, Grouping>, onSelectItems: OnSelectItemsCallback<R, Filters> | undefined, defaultSelectedItems?: SelectedItemsState | undefined): UseSelectable<R>;

export declare const useXRay: () => {
    enabled: boolean;
    filter: ComponentTypes[];
    enable: (filter?: ComponentTypes[]) => void;
    disable: () => void;
};

declare type ValueDisplayRendererContext_2 = {
    visualization: ValueDisplayVisualizationType;
};

/**
 * The definition of a renderer.
 * Union type of all possible renderer definitions to ensure the value is the type related the `type`{ [RenderedType]: RendererFuncArgument }.
 */
declare type ValueDisplayRendererDefinition = {
    [K in keyof typeof valueDisplayRenderers]: {
        type: K;
        value: Parameters<(typeof valueDisplayRenderers)[K]>[0];
    };
}[keyof typeof valueDisplayRenderers];

declare const valueDisplayRenderers: {
    readonly text: (args: TextCellValue_2, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly longText: (args: LongTextCellValue, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly number: (args: NumberCellValue_2, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly date: (args: DateCellValue_2, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly amount: (args: AmountCellValue_2, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly avatarList: (args: AvatarListCellValue_2, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly status: (args: StatusCellValue_2) => JSX_2.Element;
    readonly alertTag: (args: AlertTagCellValue_2) => JSX_2.Element;
    readonly person: (args: PersonCellValue_2, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly percentage: (args: PercentageCellValue, meta: ValueDisplayRendererContext_2) => JSX_2.Element | null;
    readonly company: (args: CompanyCellValue_2, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly team: (args: TeamCellValue_2, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly tag: (args: TagCellValue_2) => JSX_2.Element;
    readonly dotTag: (args: DotTagCellValue_2) => JSX_2.Element;
    readonly tagList: (args: TagListCellValue_2) => JSX_2.Element;
    readonly icon: (args: IconCellValue, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly file: (args: FileCellValue_2) => JSX_2.Element;
    readonly folder: (args: FolderCellValue_2) => JSX_2.Element;
};

declare type ValueDisplayVisualizationType = "table" | "card" | "list" | (string & {});

export declare type Variant = "neutral" | "info" | "positive" | "warning" | "critical";

declare const variants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote", "outlinePromote"];

export declare const VerticalBarChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig_2> & {
label?: boolean;
showRatio?: boolean;
valueFormatter?: (value: string | number | undefined) => string | number;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type VisualizacionTypeDefinition<Props, Settings = Record<string, never>> = {
    render: (props: Props) => JSX.Element;
    name: string;
    icon: IconType;
    settings: {
        default: Settings;
        renderer?: (props: Props) => JSX.Element | null;
        resetHandler?: (settings: DataCollectionSettingsContextType) => void;
    };
};

declare type VisualizationSettings = {
    [K in keyof typeof collectionVisualizations]: ExtractVisualizationSettings<(typeof collectionVisualizations)[K]>;
};

export declare type WithGroupId<RecordType> = RecordType & {
    [GROUP_ID_SYMBOL]: unknown | undefined;
};

declare type WithOptionalSorting<R extends RecordType, Sortings extends SortingsDefinition> = Omit<PropertyDefinition_2<R>, "hide"> & {
    sorting?: SortingKey<Sortings>;
    /**
     * The alignment of the column. If not provided, the alignment will be "left"
     */
    align?: "left" | "right";
    /**
     * The width of the column. If not provided, the width will be "auto"
     */
    width?: number;
};

declare type WithOptionalSorting_2<Record, Sortings extends SortingsDefinition> = PropertyDefinition_2<Record> & {
    sorting?: SortingKey<Sortings>;
};

declare interface WithTooltipDescription {
    /**
     * Optional description to show in the tooltip
     */
    description?: string;
}

declare type WithTooltipDescription_2 = {
    description?: string;
};

export { }


declare global {
    interface Window {
        XRay: {
            enable: (filter?: ComponentTypes[]) => void;
            disable: () => void;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        aiBlock: {
            insertAIBlock: (data: AIBlockData, config: AIBlockConfigWithLabels) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        liveCompanion: {
            insertLiveCompanion: (data: LiveCompanionData, config?: LiveCompanionConfig) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        transcript: {
            insertTranscript: (data: TranscriptData, config?: TranscriptConfig) => ReturnType;
        };
    }
}


declare namespace Calendar {
    var displayName: string;
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        moodTracker: {
            insertMoodTracker: (data: MoodTrackerData, config?: MoodTrackerConfig) => ReturnType;
        };
    }
}
