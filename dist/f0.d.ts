import { AlertTagCellValue } from '../../value-display/types/alertTag';
import { AlertTagCellValue as AlertTagCellValue_2 } from './types/alertTag';
import { AmountCellValue } from '../../value-display/types/amount';
import { AmountCellValue as AmountCellValue_2 } from './types/amount';
import { AnchorHTMLAttributes } from 'react';
import { AriaAttributes } from 'react';
import { AutoFill as AutoFill_2 } from 'react';
import { AvatarListCellValue } from '../../value-display/types/avatarList';
import { AvatarListCellValue as AvatarListCellValue_2 } from './types/avatarList';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { AvatarProps as AvatarProps_2 } from '@radix-ui/react-avatar';
import { baseColors } from '@factorialco/f0-core';
import { BigNumberProps as BigNumberProps_2 } from './types';
import { BlockContentExtraProps } from './blocks/BlockContent';
import { BlockProps } from './blocks/Block';
import { CategoryBarProps } from './CategoryBarChart';
import { ChartConfig } from '../../ui/chart';
import { ChartConfig as ChartConfig_2 } from './utils/types';
import { ChartPropsBase } from './utils/types';
import { ClassValue } from 'cva';
import { CompanyCellValue } from '../../value-display/types/company';
import { CompanyCellValue as CompanyCellValue_2 } from './types/company';
import { ComponentProps } from 'react';
import { ComponentType } from 'react';
import { Context } from 'react';
import { CountryCellValue } from './types/country';
import { DashboardProps as DashboardProps_2 } from './Dashboard';
import { DateCellValue } from '../../value-display/types/date';
import { DateCellValue as DateCellValue_2 } from './types/date';
import { DateFilterOptions } from './DateFilter/DateFilter';
import { default as default_2 } from 'react';
import { DotTagCellValue } from '../../value-display/types/dotTag';
import { DotTagCellValue as DotTagCellValue_2 } from './types/dotTag';
import { F0DialogInternalProps } from './internal-types';
import { F0GridStackProps as F0GridStackProps_2 } from './F0GridStack';
import { F0SelectProps as F0SelectProps_2 } from './types';
import { f1Colors } from '@factorialco/f0-core';
import { FC } from 'react';
import { FileCellValue } from '../../value-display/types/file';
import { FileCellValue as FileCellValue_2 } from './types/file';
import { FolderCellValue } from '../../value-display/types/folder';
import { FolderCellValue as FolderCellValue_2 } from './types/folder';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { GridStackOptions } from 'gridstack';
import { GridStackWidget } from 'gridstack';
import { GroupGridProps as GroupGridProps_2 } from './groups/GroupGrid';
import { GroupGridWidget as GroupGridWidget_2 } from './groups/GroupGrid';
import { GroupLinearProps } from './groups/GroupLinear';
import { GroupMasonryProps } from './groups/GroupMasonry';
import { HTMLAttributeAnchorTarget } from 'react';
import { HTMLAttributes } from 'react';
import { IconCellValue } from './types/icon';
import { ImgHTMLAttributes } from 'react';
import { InFilterOptions } from './InFilter/types';
import { internalAvatarColors as internalAvatarColors_2 } from '../../../ui/Avatar';
import { internalAvatarSizes as internalAvatarSizes_2 } from '../../../ui/Avatar';
import { internalAvatarTypes as internalAvatarTypes_2 } from '../../../ui/Avatar';
import { JSX as JSX_2 } from 'react';
import { LineChartConfig } from '../../ui/chart';
import { LineChartPropsBase } from './utils/types';
import { LongTextCellValue } from './types/longText';
import { NumberCellValue } from '../../value-display/types/number';
import { NumberCellValue as NumberCellValue_2 } from './types/number';
import { NumberFilterOptions } from './NumberFilter/NumberFilter';
import { Observable } from 'zen-observable-ts';
import { PageLayoutBlockComponent as PageLayoutBlockComponent_2 } from './types';
import { PageLayoutGroupComponent as PageLayoutGroupComponent_2 } from '../Layout';
import { PageProps } from './pages/Page';
import { PercentageCellValue } from './types/percentage';
import { PersonCellValue } from '../../value-display/types/person';
import { PersonCellValue as PersonCellValue_2 } from './types/person';
import { PieChartProps } from './PieChart';
import { PopoverContentProps } from '@radix-ui/react-popover';
import { ProgressBarCellValue } from '../../value-display/types/progressBar';
import { ProgressBarCellValue as ProgressBarCellValue_2 } from './types/progressBar';
import * as React_2 from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { SearchFilterOptions } from './SearchFilter/SearchFilter';
import { StatusCellValue } from '../../value-display/types/status';
import { StatusCellValue as StatusCellValue_2 } from './types/status';
import { SVGProps } from 'react';
import { SyncStatusCellValue } from './types/syncStatus';
import { TagCellValue } from '../../value-display/types/tag';
import { TagCellValue as TagCellValue_2 } from './types/tag';
import { TagListCellValue } from '../../value-display/types/tagList';
import { TagListCellValue as TagListCellValue_2 } from './types/tagList';
import { TeamCellValue } from '../../value-display/types/team';
import { TeamCellValue as TeamCellValue_2 } from './types/team';
import { TextCellValue } from '../../value-display/types/text';
import { TextCellValue as TextCellValue_2 } from './types/text';
import { ValueDisplayRendererContext } from '../../value-display';
import { VariantProps } from 'cva';

export declare type Action = UpsellAction | RegularAction;

declare type Action_2 = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: F0ButtonProps["variant"];
    disabled?: boolean;
};

declare type Action_3 = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: ButtonVariant;
    size?: "md" | "lg";
    loading?: boolean;
};

declare type ActionBaseProps = ActionCommonProps & DataAttributes;

declare type ActionButtonProps = ActionBaseProps & {
    type?: ButtonType;
    href?: never;
    target?: never;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

declare type ActionButtonVariant = (typeof actionButtonVariants)[number];

declare const actionButtonVariants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote", "outlinePromote", "ai"];

declare interface ActionCommonProps {
    /**
     * Tooltip
     */
    tooltip?: string | false;
    /**
     * The variant of the action.
     */
    variant?: ActionVariant;
    /**
     * The children of the action.
     */
    children: ReactNode;
    /**
     * The prepend of the action.
     */
    prepend?: ReactNode;
    /**
     * The append of the action.
     */
    append?: ReactNode;
    /**
     * The prepend outside (next to the button) of the action.
     */
    prependOutside?: ReactNode;
    /**
     * The append outside of the action.
     */
    appendOutside?: ReactNode;
    /**
     * The disabled state of the action.
     */
    disabled?: boolean;
    /**
     * The loading state of the action.
     */
    loading?: boolean;
    /**
     * The pressed state of the action.
     */
    pressed?: boolean;
    /**
     * The class name of the action.
     */
    className?: string;
    /**
     * The size of the action.
     */
    size?: ActionSize;
    /**
     * The font size of the action.
     */
    fontSize?: FontSize;
    /**
     * The render mode.
     * @default "default"
     */
    mode?: "default" | "only";
    /**
     * The title of the action.
     */
    title?: string;
    /**
     * make the left and right padding of the action smaller.
     */
    compact?: boolean;
    /**
     * The aria label of the action.
     */
    "aria-label"?: string;
    /**
     * The tab index of the action.
     */
    tabIndex?: number;
    /**
     * Mouse enter event handler.
     */
    onMouseEnter?: React.MouseEventHandler<HTMLElement>;
    /**
     * Mouse leave event handler.
     */
    onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}

declare type ActionDefinition = DropdownItemSeparator | (Pick<DropdownItemObject, "label" | "icon" | "description" | "critical"> & {
    onClick: () => void;
    enabled?: boolean;
    type?: "primary" | "secondary" | "other";
});

declare type ActionLinkProps = ActionBaseProps & {
    href: string;
    target?: NavTarget;
    rel?: string;
    onFocus?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    className?: string;
};

declare type ActionLinkVariant = (typeof actionLinkVariants)[number];

declare const actionLinkVariants: readonly ["link", "unstyled", "mention"];

declare type ActionProps = ActionLinkProps | ActionButtonProps;

declare type ActionSize = (typeof actionSizes)[number];

declare const actionSizes: readonly ["sm", "md", "lg"];

declare type ActionVariant = (typeof actionVariants)[number];

declare const actionVariants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote", "outlinePromote", "ai", "link", "unstyled", "mention"];

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

declare const _allowedVariants: readonly ["heading", "heading-large"];

declare const _allowedVariants_2: readonly ["body", "description", "small", "inverse", "code", "label"];

export declare type AllSelectionStatus = {
    checked: boolean;
    indeterminate: boolean;
    selectedCount: number;
    unselectedCount: number;
};

declare const allTags: readonly ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div", "label", "code"];

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

declare type AsAllowedList = (typeof allTags)[number];

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

declare const avatarEmojiSizes: readonly ["sm", "md", "lg", "xl"];

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
    type: "emoji";
} & F0AvatarEmojiProps) | ({
    type: "team";
} & F0AvatarTeamProps) | ({
    type: "company";
} & F0AvatarCompanyProps) | ({
    type: "file";
} & F0AvatarFileProps) | ({
    type: "flag";
} & F0AvatarFlagProps) | ({
    type: "icon";
} & F0AvatarIconProps), "size">;

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
} & Omit<F0AvatarFlagProps, "size">) | ({
    type: "emoji";
} & Omit<F0AvatarEmojiProps, "size">) | ({
    type: "icon";
} & Omit<F0AvatarIconProps, "size">);

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
     * Optional icon to display on the avatar. Will override the name or image if provided.
     */
    icon?: {
        icon: IconType;
        color?: F0IconProps["color"];
    };
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
    deactivated?: boolean;
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

export declare type BigNumberProps = {
    value: Numeric | NumberWithFormatter | number;
    label?: string;
    trend?: boolean | TrendConfig;
    comparisonHint?: string;
    comparison: Numeric | NumberWithFormatter | number;
};

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
    critical?: boolean;
    description?: string;
    disabled?: boolean;
};

declare type BulkActionsDefinition<R extends RecordType, Filters extends FiltersDefinition> = (selectedItems: Parameters<OnBulkActionCallback<R, Filters>>[1]) => {
    primary?: (BulkActionDefinition | {
        type: "separator";
    })[];
    secondary?: (BulkActionDefinition | {
        type: "separator";
    })[];
} | {
    warningMessage: string;
};

export declare type ButtonDropdownGroup<T = string> = {
    label?: string;
    items: ButtonDropdownItem<T>[];
};

export declare type ButtonDropdownItem<T = string> = {
    /**
     * The value of the item.
     */
    value: T;
    /**
     * The label of the item.
     */
    label: string;
    /**
     * The icon of the item.
     */
    icon?: IconType;
    /**
     * Whether the item is critical.
     * @default false
     */
    critical?: boolean;
    /**
     * The description of the item.
     */
    description?: string;
};

export declare type ButtonDropdownSize = (typeof buttonDropdownSizes)[number];

export declare const buttonDropdownSizes: readonly ["sm", "md", "lg"];

export declare type ButtonDropdownVariant = (typeof buttonDropdownVariants)[number];

export declare const buttonDropdownVariants: readonly ["default", "outline", "neutral"];

declare type ButtonInternalProps = Pick<ActionProps, "size" | "disabled" | "className" | "pressed" | "compact" | "tooltip" | "fontSize"> & DataAttributes & {
    /**
     * The aria-label of the button if not provided title or label will be used.
     */
    "aria-label"?: string;
    /**
     * The variant of the button.
     */
    variant?: ActionButtonVariant;
    /**
     * Callback fired when the button is clicked. Supports async functions for loading state.
     */
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | Promise<unknown>;
    /**
     * The title of the button.
     */
    title?: string;
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
    size?: ButtonSize;
    /**
     * @private
     * Appends a React node after the button content (for custom UI extensions).
     */
    append?: React.ReactNode;
    /**
     * If true, the button is inactive and does not respond to user interaction.
     */
    disabled?: boolean;
    /**
     * @private
     * If true, the button is visually active or selected (pressed state).
     */
    pressed?: boolean;
    /**
     * @private
     * If true, the button will not automatically add a tooltip based on the hideLabel and label properties.
     */
    noAutoTooltip?: boolean;
    /**
     * @private
     * If true, the button will not automatically add a title based label
     */
    noTitle?: boolean;
    /**
     * @private
     * If true, the button will rotate the icon when the button is hovered.
     */
    iconRotate?: boolean;
    /**
     * @private
     * The style of the button.
     */
    style?: React.CSSProperties;
} & ({
    /**
     * The URL to navigate to when the button is clicked.
     */
    href: string;
    /**
     * The target to navigate to when the button is clicked.
     */
    target?: NavTarget;
    type?: never;
} | {
    href?: never;
    target?: never;
    type?: ButtonType;
});

export declare type ButtonSize = (typeof buttonSizes)[number];

export declare const buttonSizes: readonly ["sm", "md", "lg"];

export declare type ButtonToggleSize = (typeof buttonToggleSizes)[number];

export declare const buttonToggleSizes: readonly ["sm", "md", "lg"];

export declare type ButtonToggleVariant = (typeof buttonToggleVariants)[number];

export declare const buttonToggleVariants: readonly ["compact", "expanded"];

declare type ButtonType = (typeof buttonTypes)[number];

declare const buttonTypes: readonly ["button", "submit", "reset"];

export declare type ButtonVariant = Exclude<(typeof actionButtonVariants)[number], "ai">;

export declare const buttonVariants: ("default" | "critical" | "promote" | "neutral" | "outline" | "ghost" | "outlinePromote")[];

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

export declare type CardImageFit = (typeof cardImageFits)[number];

export declare const cardImageFits: readonly ["contain", "cover", "fit-width", "fit-height", "scale-down"];

export declare type CardImageSize = (typeof cardImageSizes)[number];

export declare const cardImageSizes: readonly ["xs", "sm", "md", "lg", "xl"];

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
     * How the image should be displayed/fitted within its container
     * @default "fit-width"
     */
    imageFit?: CardImageFit;
    /**
     * Size of the image container
     * @default "sm"
     */
    imageSize?: CardImageSize;
    /**
     * Whether to show a blurred background image when the image doesn't fill the container
     * @default true
     */
    blurredBackground?: boolean;
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
    tooltip?: string;
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
    tooltip?: string;
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
    readonly progressBar: (args: ProgressBarCellValue, _meta: ValueDisplayRendererContext) => default_2.JSX.Element | null;
};

declare type CardPropertyType = keyof typeof cardPropertyRenderers;

declare interface CardSecondaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
}

declare interface CardSecondaryLink extends Pick<F0LinkProps, "href" | "target" | "disabled"> {
    label: string;
}

declare type CardVisualizationOptions<T, _Filters extends FiltersDefinition, _Sortings extends SortingsDefinition> = {
    cardProperties: ReadonlyArray<CardPropertyDefinition<T>>;
    title: (record: T) => string;
    description?: (record: T) => string;
    avatar?: (record: T) => CardAvatarVariant;
    image?: (record: T) => string;
    imageFit?: CardImageFit;
    imageSize?: CardImageSize;
    blurredBackground?: boolean;
    compact?: boolean;
};

export declare const CategoryBarChart: ForwardRefExoticComponent<Omit<CategoryBarProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface CheckboxProps extends DataAttributes_2 {
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

declare type ChildrenPaginationInfo = {
    total: number;
    perPage: number;
    currentPage: number;
    pagesCount: number;
    hasMore: boolean;
};

declare type ChildrenResponse<R extends RecordType> = NestedResponseWithType<R>;

declare type ChipLabel = {
    label: string;
} & ({
    icon: IconType;
    avatar?: never;
} | {
    icon?: never;
    avatar: AvatarVariant_2;
} | {
    icon?: never;
    avatar?: never;
});

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
    /**
     * @deprecated This will be removed in the next major version
     * Temporary prop to force the full width of the data collection (removes the X padding)
     */
    tmpFullWidth?: boolean;
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

export declare const ComboChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig> & {
label?: boolean;
legend?: boolean;
showValueUnderLabel?: boolean;
bar?: {
categories: string | string[];
axisLabel?: string;
hideAxis?: boolean;
axisPosition?: "left" | "right";
} | undefined;
line?: ({
categories: string | string[];
axisLabel?: string;
hideAxis?: boolean;
axisPosition?: "left" | "right";
} & {
dot?: boolean;
lineType?: "natural" | "linear";
}) | undefined;
scatter?: {
categories: string | string[];
axisLabel?: string;
hideAxis?: boolean;
axisPosition?: "left" | "right";
} | undefined;
onClick?: ((data: {
label: string;
values: {
[x: string]: number;
};
}) => void) | undefined;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare type CompanyAvatarVariant = Extract<AvatarVariant, {
    type: "company";
}>;

declare type CompanyTagProps = ComponentProps<typeof F0TagCompany>;

declare type CompareToDef = {
    label: string;
    value: {
        delta: number;
        units: GranularityDefinitionKey;
    } | ((value: DateRangeComplete) => DateRangeComplete | DateRangeComplete[]);
};

declare type CompareToDefKey = string;

declare type ComponentTypes = (typeof componentTypes)[number];

declare const componentTypes: readonly ["layout", "info", "action", "form"];

declare type CountryCode = keyof TranslationsType["countries"];

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

export declare const createPageLayoutBlock: <Props = unknown>(displayName: string, Component: React.ComponentType<Props>) => React.ComponentType<Props> & PageLayoutBlockComponent;

export declare const createPageLayoutBlockGroup: <Props = unknown>(displayName: string, Component: React.ComponentType<Props>) => React.ComponentType<Props> & PageLayoutGroupComponent;

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

export declare const Dashboard: ComponentType<DashboardProps_2> & PageLayoutGroupComponent_2;

export declare type DashboardProps = GroupGridProps<DashboardWidget>;

export declare type DashboardWidget = GroupGridWidget<{
    title: string;
    actions?: DropdownItem[];
    aiButton?: () => void;
}>;

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

declare type DataAttributes_2 = {
    [key: `data-${string}`]: string | undefined;
};

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
    currentNavigationFilters?: NavigationFiltersState<NavigationFilters>;
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
declare type DataCollectionStatus<CurrentFiltersState extends FiltersState<FiltersDefinition>> = {
    grouping?: GroupingState<RecordType, GroupingDefinition<RecordType>>;
    sortings?: SortingsState<SortingsDefinition>;
    filters?: CurrentFiltersState;
    search?: string | undefined;
    navigationFilters?: NavigationFiltersState<NavigationFiltersDefinition>;
    visualization?: number;
};

export declare type DataCollectionStorage<CurrentFiltersState extends FiltersState<FiltersDefinition> = FiltersState<FiltersDefinition>> = {
    settings?: DataCollectionSettings;
} & DataCollectionStatus<CurrentFiltersState>;

export declare type DataCollectionStorageHandler<CurrentFiltersState extends FiltersState<FiltersDefinition> = FiltersState<FiltersDefinition>> = {
    get: (key: string) => Promise<DataCollectionStorage<CurrentFiltersState>>;
    set: (key: string, storage: DataCollectionStorage<CurrentFiltersState>) => Promise<void>;
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
    /***** SORTINGS ***************************************************/
    /** Current state of applied sortings */
    currentSortings: SortingsState<Sortings>;
    /** Function to update the current sortings state */
    setCurrentSortings: React.Dispatch<React.SetStateAction<SortingsState<Sortings>>>;
    /*******************************************************/
    /***** SEARCH ***************************************************/
    currentSearch: undefined | string;
    debouncedCurrentSearch: undefined | string;
    setCurrentSearch: (search: string | undefined) => void;
    /*******************************************************/
    /***** LOADING ***************************************************/
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    /*******************************************************/
    /***** GROUPING ***************************************************/
    /** Current state of applied grouping */
    currentGrouping?: Grouping["mandatory"] extends true ? Exclude<GroupingState<R, Grouping>, undefined> : GroupingState<R, Grouping>;
    /** Function to update the current grouping state */
    setCurrentGrouping: React.Dispatch<React.SetStateAction<GroupingState<R, Grouping>>>;
    /*******************************************************/
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
    /***** FILTERS ***************************************************/
    /** Available filter configurations */
    filters?: Filters;
    /** Default filters state (this is the state that the source will back on reset)*/
    defaultFilters?: FiltersState<Filters>;
    /** Current state of applied filters */
    currentFilters?: FiltersState<Filters>;
    /** Predefined filter configurations that can be applied */
    presets?: PresetsDefinition<Filters>;
    /** Whether presets are currently loading */
    presetsLoading?: boolean;
    /*******************************************************/
    /***** SEARCH ***************************************************/
    /** Search configuration */
    search?: SearchOptions;
    /*******************************************************/
    /***** SORTINGS ***************************************************/
    /** Available sorting fields. If not provided, sorting is not allowed. */
    sortings?: Sortings;
    /** Default sorting state (this is the state that the source will back on reset)*/
    defaultSortings?: SortingsState<Sortings>;
    /** Current state of applied sortings */
    currentSortings?: SortingsState<Sortings>;
    /*******************************************************/
    /** Data adapter responsible for fetching and managing data */
    dataAdapter: DataAdapter<R, Filters>;
    /** Selectable items value under the checkbox column (undefined if not selectable) */
    selectable?: (item: R) => string | number | undefined;
    /** Default selected items */
    defaultSelectedItems?: SelectedItemsState<R>;
    /***** GROUPING ***************************************************/
    /** Grouping configuration */
    grouping?: Grouping;
    /** Default grouping state (this is the state that the source will back on reset)*/
    defaultGrouping?: GroupingState<R, Grouping>;
    /** Current state of applied grouping */
    currentGrouping?: GroupingState<R, Grouping>;
    /*******************************************************/
    /***** NESTED RECORDS ***************************************************/
    fetchChildren?: ({ item, filters, pagination, sortings, }: {
        item: R;
        filters?: FiltersState<Filters>;
        pagination?: ChildrenPaginationInfo;
        sortings?: SortingsState<Sortings>;
    }) => Promise<ChildrenResponse<R>>;
    /** Function to determine if an item has children */
    itemsWithChildren?: (item: R) => boolean;
    /** Function to get the number of children for an item */
    childrenCount?: ({ item, pagination, }: {
        item: R;
        pagination?: ChildrenPaginationInfo;
    }) => number | undefined;
};

export declare type DateFilterDefinition = BaseFilterDefinition<"date"> & {
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

declare type DatePickerCompareTo = Record<GranularityDefinitionKey, CompareToDef[]>;

declare interface DatePickerPopupProps {
    onSelect?: (value: DatePickerValue_2 | undefined) => void;
    value?: DatePickerValue_2;
    defaultValue?: DatePickerValue_2;
    presets?: DatePreset[];
    granularities?: GranularityDefinitionKey[];
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    hideGoToCurrent?: boolean;
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    compareTo?: DatePickerCompareTo;
    defaultCompareTo?: CompareToDefKey;
    hideCalendarInput?: boolean;
    asChild?: boolean;
    onCompareToChange?: (compareTo: DateRangeComplete | DateRangeComplete[] | undefined) => void;
}

export declare const datepickerSizes: readonly ["sm", "md"];

export declare type DatePickerValue = DatePickerValue_2;

declare type DatePickerValue_2 = {
    value: DateRangeComplete | undefined;
    granularity: GranularityDefinitionKey;
};

export declare interface DatePreset {
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
    readonly countries: {
        ad: string;
        ae: string;
        af: string;
        ag: string;
        ai: string;
        al: string;
        am: string;
        ao: string;
        ar: string;
        as: string;
        at: string;
        au: string;
        aw: string;
        ax: string;
        az: string;
        ba: string;
        bb: string;
        bd: string;
        be: string;
        bf: string;
        bg: string;
        bh: string;
        bi: string;
        bj: string;
        bm: string;
        bo: string;
        br: string;
        bt: string;
        bw: string;
        by: string;
        bz: string;
        ca: string;
        cd: string;
        cf: string;
        cg: string;
        ch: string;
        ci: string;
        ck: string;
        cl: string;
        cm: string;
        cn: string;
        co: string;
        cr: string;
        cu: string;
        cv: string;
        cw: string;
        cy: string;
        cz: string;
        de: string;
        dj: string;
        dk: string;
        dm: string;
        do: string;
        dz: string;
        ec: string;
        ee: string;
        eg: string;
        er: string;
        es: string;
        et: string;
        fi: string;
        fj: string;
        fk: string;
        fm: string;
        fo: string;
        fr: string;
        ga: string;
        gb: string;
        gd: string;
        ge: string;
        gg: string;
        gh: string;
        gi: string;
        gl: string;
        gm: string;
        gn: string;
        gq: string;
        gr: string;
        gt: string;
        gu: string;
        gw: string;
        hk: string;
        hn: string;
        hr: string;
        ht: string;
        hu: string;
        id: string;
        ie: string;
        il: string;
        im: string;
        in: string;
        io: string;
        iq: string;
        ir: string;
        is: string;
        it: string;
        je: string;
        jm: string;
        jo: string;
        jp: string;
        ke: string;
    };
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
        readonly sidebar: {
            readonly label: "Main navigation";
            readonly companySelector: {
                readonly label: "Select a company";
                readonly placeholder: "Select a company";
            };
        };
        readonly previous: "Previous";
        readonly next: "Next";
    };
    readonly inputs: {
        readonly password: {
            readonly show: "Show password";
            readonly hide: "Hide password";
        };
    };
    readonly actions: {
        readonly add: "Add";
        readonly edit: "Edit";
        readonly save: "Save";
        readonly send: "Send";
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
        readonly toggleDropdownMenu: "Toggle dropdown menu";
        readonly selectAll: "Select all";
    };
    readonly status: {
        readonly selected: {
            readonly singular: "Selected";
            readonly plural: "Selected";
            readonly all: "All selected";
        };
    };
    readonly syncStatus: {
        readonly synced: "Sync completed successfully.";
        readonly syncing: "Sync in progress.";
        readonly pending: "Not yet started.";
        readonly partiallySynced: "All aggregated data was synced but at least 1 failed.";
        readonly outdated: "Data might need to be synced again.";
        readonly failed: "Sync failed.";
    };
    readonly filters: {
        readonly searchPlaceholder: "Search filters...";
        readonly inFilter: {
            readonly searchPlaceholder: "Search options...";
        };
        readonly activeFilters: "Active filters: {{filters}}";
        readonly filteringBy: "Filtering by {{label}}";
        readonly availableFilters: "Available filters";
        readonly label: "Filters";
        readonly applyFilters: "Apply filters";
        readonly applySelection: "Apply selection";
        readonly cancel: "Cancel";
        readonly failedToLoadOptions: "Failed to load options";
        readonly retry: "Retry";
        readonly number: {
            readonly value: "Value";
            readonly equal: "Equal to";
            readonly equalTo: "Equal to {{value}}";
            readonly lessOrEqual: "Less or equal to";
            readonly lessThan: "Less than";
            readonly greaterOrEqual: "Greater or equal to";
            readonly greaterThan: "Greater than";
            readonly equalShort: "= {{value}}";
            readonly greaterThanOrEqualShort: ">= {{value}}";
            readonly greaterThanShort: "> {{value}}";
            readonly lessThanOrEqualShort: "<= {{value}}";
            readonly lessThanShort: "< {{value}}";
            readonly rangeTitle: "Use range";
            readonly range: "{{minStrict}} {{min}} and {{maxStrict}} {{max}}";
        };
        readonly search: {
            readonly relaxed: "Relaxed";
            readonly strict: "Strict";
        };
        readonly selectAll: "Select all";
        readonly clear: "Clear";
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
        readonly table: {
            readonly settings: {
                readonly showAllColumns: "Show all";
                readonly hideAllColumns: "Hide all";
            };
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
        readonly startNewChat: "Start new chat";
        readonly scrollToBottom: "Scroll to bottom";
        readonly welcome: "Ask or create with One";
        readonly defaultInitialMessage: "How can I help you today?";
        readonly inputPlaceholder: "Ask about time, people, or company info and a lot of other things...";
        readonly stopAnswerGeneration: "Stop generating";
        readonly sendMessage: "Send message";
        readonly thoughtsGroupTitle: "Reflection";
        readonly resourcesGroupTitle: "Resources";
        readonly thinking: "Thinking...";
        readonly exportTable: "Download table";
        readonly generatedTableFilename: "OneGeneratedTable";
        readonly removeFile: "Remove file";
        readonly attachFiles: "Attach files";
        readonly dropZoneTitle: "Drop files here";
        readonly dropZoneDescription: "Release to attach files to your message";
        readonly fileTooLarge: "The file '{fileName}' is too large. Maximum size is {maxSize}MB.";
        readonly filesTooLarge: "{count} files exceed the maximum size of {maxSize}MB and were not added.";
        readonly feedbackModal: {
            readonly positive: {
                readonly title: "What did you like about this response?";
                readonly label: "Your feedback helps us make Factorial AI better";
                readonly placeholder: "Share what worked well";
            };
            readonly negative: {
                readonly title: "What could have been better?";
                readonly label: "Your feedback helps us improve future answers";
                readonly placeholder: "Share what didn’t work";
            };
        };
        readonly ask: "Ask One";
    };
    readonly select: {
        readonly noResults: "No results found";
        readonly loadingMore: "Loading...";
    };
    readonly numberInput: {
        readonly between: "It should be between {{min}} and {{max}}";
        readonly greaterThan: "It should be greater than {{min}}";
        readonly lessThan: "It should be less than {{max}}";
    };
    readonly imageUpload: {
        readonly uploading: "Uploading...";
        readonly uploadError: "Upload failed";
        readonly insertImage: "Image";
        readonly deleteImage: "Delete";
        readonly errors: {
            readonly fileTooLarge: "The file is too large";
            readonly invalidType: "Invalid file type. Only images are allowed";
            readonly uploadFailed: "Failed to upload image. Please try again";
            readonly dismiss: "Dismiss";
        };
    };
    readonly coCreationForm: {
        readonly actions: {
            readonly actions: "Actions";
            readonly duplicateQuestion: "Duplicate question";
            readonly deleteQuestion: "Delete question";
            readonly duplicateSection: "Duplicate section";
            readonly deleteSection: "Delete section";
        };
        readonly questionTypes: {
            readonly section: "Section";
            readonly rating: "Rating";
            readonly multipleChoice: "Multiple choice";
            readonly singleChoice: "Single choice";
            readonly text: "Text";
            readonly longText: "Long text";
            readonly numeric: "Numeric";
            readonly link: "Link";
            readonly date: "Date";
        };
        readonly selectQuestion: {
            readonly addOption: "Add option";
            readonly newOption: "New option {{number}}";
            readonly markAsCorrect: "Mark as correct";
            readonly remove: "Remove";
            readonly correct: "Correct";
            readonly optionPlaceholder: "Type anything you want here...";
        };
        readonly answer: {
            readonly label: "Answer";
            readonly placeholder: "Respondent's answer";
        };
        readonly labels: {
            readonly applyingChanges: "Applying changes";
            readonly endOfSection: "End of section";
            readonly title: "Title";
            readonly titlePlaceholder: "Question title";
            readonly description: "Description";
            readonly questionDescriptionPlaceholder: "Describe the question in a few words";
            readonly sectionDescriptionPlaceholder: "Describe the section in a few words";
            readonly required: "Required";
            readonly questionType: "Question type";
            readonly questionOptions: "Question options";
            readonly actions: "Actions";
            readonly sectionTitlePlaceholder: "Section title";
        };
    };
};

export declare type DialogPosition = (typeof dialogPositions)[number];

declare const dialogPositions: readonly ["center", "left", "right", "fullscreen"];

export declare type DialogWidth = (typeof dialogWidths)[number];

declare const dialogWidths: readonly ["sm", "md", "lg", "xl"];

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

declare type DropdownItem = DropdownItemObject | DropdownItemSeparator | DropdownItemLabel;

declare type DropdownItemLabel = {
    type: "label";
    text: string;
};

declare type DropdownItemObject = Pick<NavigationItem, "label" | "href"> & {
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

export declare function EmojiImage({ emoji, size, alt }: EmojiImageProps): JSX_2.Element;

export declare interface EmojiImageProps extends VariantProps<typeof emojiVariants> {
    emoji: string;
    alt?: string;
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

export declare const experimental: <T extends React.ComponentType<any>>(name: string, component: T) => T;

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

export declare type F0AvatarEmojiProps = {
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
    flag: CountryCode | (string & {});
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

export declare const F0AvatarIcon: {
    ({ icon, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: F0AvatarIconProps): JSX_2.Element;
    displayName: string;
};

export declare type F0AvatarIconProps = {
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
    ({ firstName, lastName, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, deactivated, }: F0AvatarPersonProps): JSX_2.Element;
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
    /**
     * Whether the person is deactivated. If true, the avatar will display an icon instead of the person's name or picture.
     */
    deactivated?: boolean;
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

export declare const F0BigNumber: {
    ({ label, ...props }: BigNumberProps_2): JSX_2.Element;
    displayName: string;
} & {
    Skeleton: () => JSX_2.Element;
};

export declare const F0Button: ForwardRefExoticComponent<Omit<ButtonInternalProps, "style" | "className" | "variant" | "pressed" | "append" | "compact" | "noAutoTooltip" | "noTitle"> & {
variant?: Exclude<ButtonInternalProps["variant"], "ai">;
} & RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;

export declare const F0ButtonDropdown: ({ onClick, value, ...props }: F0ButtonDropdownProps) => JSX_2.Element | undefined;

export declare type F0ButtonDropdownProps<T = string> = {
    /**
     * The size of the button.
     * @default "md"
     */
    size?: ButtonDropdownSize;
    /**
     * The items to display in the dropdown.
     */
    items: ButtonDropdownItem<T>[] | ButtonDropdownGroup<T>[] | ButtonDropdownGroup<T>;
    /**
     * The variant of the button.
     * @default "default"
     */
    variant?: ButtonDropdownVariant;
    /**
     * The value of the button.
     */
    value?: T;
    /**
     * The disabled state of the button.
     * @default false
     */
    disabled?: boolean;
    /**
     * The loading state of the button.
     * @default false
     */
    loading?: boolean;
    /**
     * The tooltip of the button.
     * @default undefined
     */
    tooltip?: string;
    /**
     * The callback function to be called when the button is clicked.
     * @param value The value of the item that was clicked.
     * @param item The item that was clicked.
     */
    onClick: (value: T, item: ButtonDropdownItem<T>) => void;
};

export declare type F0ButtonProps = Omit<ButtonInternalProps, (typeof privateProps)[number] | "variant"> & {
    variant?: Exclude<ButtonInternalProps["variant"], "ai">;
};

export declare const F0ButtonToggle: ForwardRefExoticComponent<F0ButtonToggleProps & RefAttributes<HTMLButtonElement>>;

declare type F0ButtonToggleInternalProps = {
    /**
     * The accessible label for the button.
     */
    label: string | [string, string];
    /**
     * Whether the button is disabled.
     */
    disabled?: boolean;
    /**
     * The icon to display in the button. Can be a single icon or an array of two icons the first for the non-selected state and the second for the selected state.
     */
    icon: IconType | [IconType, IconType];
    /**
     * The size of the button.
     * @default "md"
     */
    size?: ButtonToggleSize;
    /**
     * The variant of the button.
     * @default "compact"
     * "compact" - The button will only show the icon.
     * "expanded" - The button will show the icon and the label.
     */
    variant?: ButtonToggleVariant;
    /**
     * @private
     * Whether to show a border around the button toggle.
     */
    withBorder?: boolean;
} & ({
    selected: boolean;
    onSelectedChange: (selected: boolean) => void;
    defaultSelected?: undefined;
} | {
    defaultSelected?: boolean;
    selected?: undefined;
    onSelectedChange?: undefined;
});

export declare type F0ButtonToggleProps = Omit<F0ButtonToggleInternalProps, (typeof privateProps_2)[number]>;

export declare const F0Card: ForwardRefExoticComponent<F0CardProps & RefAttributes<HTMLDivElement>> & {
    Skeleton: ({ compact }: {
        compact?: boolean;
    }) => JSX_2.Element;
};

export declare type F0CardProps = Omit<CardInternalProps, (typeof privateProps_3)[number]>;

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

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0DatePicker: typeof F0DatePicker_2;

declare function F0DatePicker_2({ onChange, value, presets, granularities, minDate, maxDate, open, ...inputProps }: F0DatePickerProps): JSX_2.Element;

export declare type F0DatePickerProps = Pick<DatePickerPopupProps, "granularities" | "minDate" | "maxDate" | "presets" | "open" | "onOpenChange"> & {
    onChange?: (value: DatePickerValue | undefined, stringValue: string | undefined) => void;
    value?: DatePickerValue;
} & Pick<InputFieldProps<string>, InputFieldInheritedProps>;

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0Dialog: FC<F0DialogInternalProps>;

export declare type F0DialogActionsProps = {
    primaryAction?: F0DialogPrimaryAction | F0DialogPrimaryActionItem[];
    secondaryAction?: F0DialogSecondaryAction;
};

export declare const F0DialogContext: Context<F0DialogContextType>;

declare type F0DialogContextType = {
    open: boolean;
    onClose: () => void;
    shownBottomSheet: boolean;
    position: DialogPosition;
    /**
     * The dialog's content container element.
     * Use this as the `portalContainer` prop for components like F0Select
     * to ensure dropdowns render inside the dialog.
     */
    portalContainer: HTMLDivElement | null;
};

export declare type F0DialogPrimaryAction = {
    label: string;
    icon?: IconType;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
};

export declare type F0DialogPrimaryActionItem = {
    value: string;
    label: string;
    icon?: IconType;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
};

export declare const F0DialogProvider: ({ isOpen, onClose, shownBottomSheet, position, children, portalContainer, }: F0DialogProviderProps) => JSX_2.Element;

declare type F0DialogProviderProps = {
    isOpen: boolean;
    onClose: () => void;
    shownBottomSheet?: boolean;
    position: DialogPosition;
    children: ReactNode;
    portalContainer: HTMLDivElement | null;
};

export declare type F0DialogSecondaryAction = {
    label: string;
    icon?: IconType;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
};

export declare type F0DropdownButtonProps<T = string> = {
    size?: ButtonDropdownSize;
    items: ButtonDropdownItem<T>[] | ButtonDropdownGroup<T>[] | ButtonDropdownGroup<T>;
    variant?: ButtonDropdownVariant;
    value?: T;
    disabled?: boolean;
    loading?: boolean;
    onClick: (value: T, item: ButtonDropdownItem<T>) => void;
};

export declare function F0EventCatcherProvider({ children, onEvent, enabled, catchEvents, }: EventCatcherProviderProps): JSX.Element;

/**
 * A standalone dual-pane filter picker content component.
 *
 * This component renders the filter picker interface (left panel with filter list,
 * right panel with filter content) without any popover wrapper, allowing it to be
 * embedded directly in modals, sidebars, or other containers.
 *
 * Features:
 * - Left panel showing filter categories with search
 * - Right panel showing filter options for the selected filter
 * - Multi-select with checkboxes for "in" type filters
 * - Support for search, date, number, and custom filter types
 * - Select All and Clear actions
 *
 * @template Filters - The type defining the structure of available filters
 *
 * @example
 * ```tsx
 * // Embed directly in a modal or page
 * <F0FilterPickerContent
 *   filters={{
 *     department: {
 *       type: "in",
 *       label: "Department",
 *       options: {
 *         options: [
 *           { value: "engineering", label: "Engineering" },
 *           { value: "marketing", label: "Marketing" },
 *         ]
 *       }
 *     },
 *     location: {
 *       type: "in",
 *       label: "Location",
 *       options: {
 *         options: [
 *           { value: "nyc", label: "New York" },
 *           { value: "sf", label: "San Francisco" },
 *         ]
 *       }
 *     }
 *   }}
 *   value={selectedFilters}
 *   onChange={setSelectedFilters}
 * />
 * ```
 */
export declare function F0FilterPickerContent<Filters extends FiltersDefinition>({ filters, value, onChange, height, width, className, showApplyButton, applyButtonLabel, }: F0FilterPickerContentProps<Filters>): JSX_2.Element | null;

export declare namespace F0FilterPickerContent {
    var displayName: string;
}

/**
 * Props for the F0FilterPickerContent component.
 * @template Filters - The type defining the structure of available filters
 */
export declare interface F0FilterPickerContentProps<Filters extends FiltersDefinition> extends FilterPickerBaseProps<Filters> {
    /** Current state of applied filters */
    value: FiltersState<Filters>;
    /**
     * Callback fired when filters change.
     * - With apply button (default): called when Apply button is clicked
     * - Without apply button: called immediately on every selection
     */
    onChange: (value: FiltersState<Filters>) => void;
    /** Width of the content panel */
    width?: number;
}

export declare const F0GridStack: {
    ({ options, widgets, onChange, className, }: F0GridStackProps_2): JSX_2.Element;
    displayName: string;
};

export declare interface F0GridStackProps {
    options: GridStackReactOptions;
    widgets: GridStackReactWidget[];
    onChange?: (widgets: GridStackReactWidget[]) => void;
    className?: string;
}

export declare const F0Heading: ForwardRefExoticComponent<Omit<F0HeadingProps, "ref"> & RefAttributes<HTMLElement>>;

export declare type F0HeadingProps = Omit<TextProps, "className" | "variant" | "as"> & {
    variant?: (typeof _allowedVariants)[number];
    as?: HeadingTags;
};

export declare const F0Icon: ForwardRefExoticComponent<Omit<Omit<F0IconProps, "ref"> & RefAttributes<SVGSVGElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare interface F0IconProps extends SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {
    icon: IconType;
    size?: "lg" | "md" | "sm" | "xs";
    state?: "normal" | "animate";
    color?: "default" | "currentColor" | `#${string}` | Lowercase<NestedKeyOf<typeof f1Colors.icon>>;
}

export declare const F0Link: ForwardRefExoticComponent<Omit<ActionLinkProps, "href" | "variant"> & {
variant?: ActionLinkVariant;
stopPropagation?: boolean;
href?: string;
} & RefAttributes<HTMLAnchorElement>>;

export declare type F0LinkProps = Omit<ActionLinkProps, "variant" | "href"> & {
    variant?: ActionLinkVariant;
    stopPropagation?: boolean;
    href?: string;
};

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

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0Select: <T extends string = string, R = unknown>(props: F0SelectProps_2<T, R> & {
    ref?: React.Ref<HTMLButtonElement>;
}) => React.ReactElement;

/**
 * Base props shared across all F0Select variants
 */
declare type F0SelectBaseProps<T extends string, R = unknown> = {
    onChangeSelectedOption?: (option: F0SelectItemObject<T, ResolvedRecordType<R>> | undefined, checked: boolean) => void;
    children?: React.ReactNode;
    open?: boolean;
    showSearchBox?: boolean;
    searchBoxPlaceholder?: string;
    onSearchChange?: (value: string) => void;
    searchValue?: string;
    onOpenChange?: (open: boolean) => void;
    searchEmptyMessage?: string;
    className?: string;
    selectContentClassName?: string;
    actions?: Action_2[];
    /** Container element to render the portal content into */
    portalContainer?: HTMLElement | null;
    /**
     * When true, renders the select as a static list without the input trigger.
     * Only displays the dropdown content with max height, border and scroll.
     */
    asList?: boolean;
};

export declare type F0SelectItemObject<T, R = unknown> = {
    type?: "item";
    value: T;
    label: string;
    description?: string;
    avatar?: AvatarVariant;
    tag?: string;
    icon?: IconType;
    item?: R;
    disabled?: boolean;
};

export declare type F0SelectItemProps<T, R = unknown> = F0SelectItemObject<T, R> | {
    type: "separator";
};

/**
 * Select component for choosing from a list of options.
 *
 * @template T - The type of the emitted value
 * @template R - The type of the record/item data (used with data source)
 */
export declare type F0SelectProps<T extends string, R = unknown> = F0SelectBaseProps<T, R> & // Single select not clearable
({
    clearable?: false;
    multiple?: false;
    value?: T;
    defaultItem?: F0SelectItemObject<T, ResolvedRecordType<R>>;
    onChange?: (value: T, originalItem?: ResolvedRecordType<R> | undefined, option?: F0SelectItemObject<T, ResolvedRecordType<R>>) => void;
    /** Callback for selection changes - provides full selection state for advanced use cases (e.g., "Select All" with exclusions) */
    onSelectItems?: never;
} | {
    clearable: true;
    multiple?: false;
    value?: T;
    defaultItem?: F0SelectItemObject<T, ResolvedRecordType<R>>;
    onChange?: (value: T, originalItem?: ResolvedRecordType<R> | undefined, option?: F0SelectItemObject<T, ResolvedRecordType<R>>) => void;
    onSelectItems?: never;
} | {
    multiple: true;
    clearable?: boolean;
    value?: T[];
    defaultItem?: F0SelectItemObject<T, ResolvedRecordType<R>>[];
    onChange?: (value: T[], originalItems: ResolvedRecordType<R>[], options: F0SelectItemObject<T, ResolvedRecordType<R>>[]) => void;
    /**
     * Callback for selection changes - provides full selection state including:
     * - `status.allSelected`: true if "Select All" was used, "indeterminate" if some items deselected after Select All
     * - `status.items`: Map of all items with their checked state
     * - `filters`: Current applied filters
     * - `selectedCount`: Total number of selected items
     *
     * Use this for "chunked" selection mode where you need to track:
     * - When allSelected is true/indeterminate: excluded items are those with checked=false
     * - When allSelected is false: included items are those with checked=true
     */
    onSelectItems?: OnSelectItemsCallback<ResolvedRecordType<R>, FiltersDefinition>;
    /**
     * Disables the "Select All" functionality, forcing manual selection of items one by one.
     * When enabled, the allSelected state will always be false and users must select items individually.
     */
    disableSelectAll?: boolean;
}) & ({
    source: DataSourceDefinition<ResolvedRecordType<R>, FiltersDefinition, SortingsDefinition, GroupingDefinition<ResolvedRecordType<R>>>;
    mapOptions: (item: ResolvedRecordType<R>) => F0SelectItemProps<T, ResolvedRecordType<R>>;
    options?: never;
} | {
    source?: never;
    mapOptions?: never;
    searchFn?: (option: F0SelectItemProps<T, unknown>, search?: string) => boolean | undefined;
    options: F0SelectItemProps<T, unknown>[];
}) & Pick<InputFieldProps<T>, "required" | "loading" | "hideLabel" | "labelIcon" | "size" | "label" | "icon" | "placeholder" | "disabled" | "name" | "error" | "status" | "hint">;

export declare const F0TagAlert: ForwardRefExoticComponent<TagAlertProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagBalance: ForwardRefExoticComponent<TagBalanceProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagCompany: ForwardRefExoticComponent<TagCompanyProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagDot: ForwardRefExoticComponent<TagDotProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagList: {
    <T extends TagType>({ type, tags, max, remainingCount: initialRemainingCount, }: TagListProps<T>): JSX_2.Element;
    displayName: string;
};

export declare const F0TagPerson: ForwardRefExoticComponent<F0TagPersonProps & RefAttributes<HTMLDivElement>>;

export declare type F0TagPersonProps = {
    src?: string;
    name: string;
};

export declare const F0TagRaw: ForwardRefExoticComponent<TagRawProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagStatus: ForwardRefExoticComponent<TagStatusProps & RefAttributes<HTMLDivElement>>;

export declare const F0TagTeam: ForwardRefExoticComponent<TagTeamProps & RefAttributes<HTMLDivElement>>;

export declare const F0Text: ForwardRefExoticComponent<Omit<F0TextProps, "ref"> & RefAttributes<HTMLElement>>;

export declare type F0TextProps = Omit<TextProps, "className" | "variant" | "as"> & {
    variant?: (typeof _allowedVariants_2)[number];
    as?: TextTags;
    markdown?: boolean;
};

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
declare type FilterDefinitionsByType<T = unknown, R extends RecordType = RecordType> = {
    in: InFilterDefinition<T, R>;
    search: SearchFilterDefinition;
    date: DateFilterDefinition;
    number: NumberFilterDefinition;
};

/**
 * Configuration options for filters in a collection.
 * Defines the structure and behavior of available filters.
 * @template FilterKeys - String literal type for filter keys
 */
export declare type FilterOptions<FilterKeys extends string> = Record<FilterKeys, FilterDefinition>;

/**
 * Shared styling and behavior props used by both public and internal components.
 * Internal type - not exported to external consumers.
 * @template Filters - The type defining the structure of available filters
 */
declare interface FilterPickerBaseProps<Filters extends FiltersDefinition> {
    /** The schema defining available filters and their configurations */
    filters: Filters;
    /** Height of the content panel */
    height?: number;
    /** Optional className for the container */
    className?: string;
    /** Whether to show the apply button (default: true) */
    showApplyButton?: boolean;
    /** Custom label for the apply button */
    applyButtonLabel?: string;
}

/**
 * Record of filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available filters for a collection.
 * @template Keys - String literal type for filter keys
 */
export declare type FiltersDefinition<Keys extends string = string> = Record<Keys, FilterDefinition>;

export declare type FiltersMode = "default" | "compact" | "simple";

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
    i18n: I18nContextType;
};

declare type FilterTypeDefinition<Value = unknown, Options extends object = never, EmptyValue = Value, OptionalOptions extends boolean = false> = {
    emptyValue: EmptyValue;
    /** Check if the value is empty */
    isEmpty: (value: Value | undefined, context: FilterTypeContext<Options>) => boolean;
    /** Render the filter form */
    render: <Schema extends FilterTypeSchema<Options, OptionalOptions>>(props: {
        schema: Schema;
        value: Value;
        onChange: (value: Value) => void;
        isCompactMode?: boolean;
    }) => React.ReactNode;
    /**
     * The value label to display in the filter chips
     */
    chipLabel: (value: Value, context: FilterTypeContext<Options>) => string | ChipLabel | Promise<string | ChipLabel>;
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
    readonly search: FilterTypeDefinition<string | {
        value: string;
        strict: boolean;
    }, SearchFilterOptions, string | {
        value: string;
        strict: boolean;
    }, true>;
    readonly date: FilterTypeDefinition<Date | DateRange | undefined, DateFilterOptions>;
    readonly number: FilterTypeDefinition<NumberFilterValue, NumberFilterOptions>;
};

declare type FilterTypeSchema<Options extends object = never, OptionalOptions extends boolean = false> = OptionalOptions extends true ? FilterTypeSchemaOptionalOptions<Options> : FilterTypeSchemaRequiredOptions<Options>;

declare type FilterTypeSchemaOptionalOptions<Options extends object = never> = {
    label: string;
    options?: Options extends never ? never : Options;
};

declare type FilterTypeSchemaRequiredOptions<Options extends object = never> = {
    label: string;
    options: Options extends never ? never : Options;
};

/**
 * Extracts the appropriate value type for a given filter:
 * - InFilter -> Array of selected values of type T
 * - SearchFilter -> Search string
 *
 * This type is used to ensure type safety when working with filter values.
 * @template T - The filter definition type
 */
export declare type FilterValue<T extends FilterDefinition> = T extends InFilterDefinition<infer U> ? U[] : T extends SearchFilterDefinition ? string : T extends DateFilterDefinition ? DateRange | Date | undefined : T extends NumberFilterDefinition ? NumberFilterValue | undefined : never;

/**
 * Extracts the value type for a specific filter key from a FiltersDefinition.
 * This helper type allows for type-safe access to filter values when you know the specific filter key.
 *
 * @example
 * ```ts
 * type MyFilters = {
 *   department: InFilterDefinition<string>
 *   search: SearchFilterDefinition
 * }
 *
 * type DepartmentValue = FilterValueByKey<MyFilters, 'department'> // string[]
 * type SearchValue = FilterValueByKey<MyFilters, 'search'> // string
 * ```
 *
 * @template Definition - The FiltersDefinition type
 * @template Key - The specific filter key to extract the value type for
 */
export declare type FilterValueByKey<Definition extends Record<string, FilterDefinition>, Key extends keyof Definition> = FilterValue<Definition[Key]>;

export declare type FlagAvatarVariant = Extract<AvatarVariant, {
    type: "flag";
}>;

declare type FontSize = (typeof fontSizes)[number];

declare const fontSizes: readonly ["sm", "md", "lg"];

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
    toStringMaxWidth: () => number;
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

export declare type GridStackReactOptions = Omit<GridStackOptions, "children">;

export declare type GridStackReactSize = {
    w: number;
    h: number;
};

export declare interface GridStackReactWidget extends Omit<GridStackWidget, "content" | "id"> {
    id: Required<GridStackWidget>["id"];
    allowedSizes?: GridStackReactSize[];
    content?: React.ReactElement;
    meta?: Record<string, unknown>;
    _originalContent?: React.ReactNode;
}

/**
 * Symbol used to identify the groupId in the data
 */
export declare const GROUP_ID_SYMBOL: unique symbol;

declare interface GroupGridProps<Widget extends GroupGridWidget, Deps extends Record<string, unknown> = Record<string, unknown>> {
    widgets: Optional<Widget, "x" | "y">[];
    editMode?: boolean;
    /**
     * Callback function that is called whenever the layout changes.
     * Receives an array of widgets with updated positions and properties.
     * This can be used to keep widgets in sync by using the returned data.
     */
    onChange?: (widgets: Widget[]) => void;
    WidgetWrapper?: (children: React.ReactNode, meta: Widget["meta"] | undefined, editMode: boolean) => React.ReactElement;
    /**
     * If the group is the main content of the page, it will try to take the full height of the page
     */
    main?: boolean;
    /**
     * Current values for dependencies. When this changes, widgets with `deps` arrays
     * will have their content updated automatically. Widgets reference dependencies
     * by key names (e.g., `deps: ['globalCounter']` maps to `deps: { globalCounter: 0 }`).
     */
    deps?: Deps;
}

declare type GroupGridWidget<Meta extends Record<string, unknown> = Record<string, unknown>, DepsKeys extends string[] = string[]> = {
    id: string;
    availableSizes?: GroupGridWidgetSize[];
    content: React.ReactNode | ((deps: Partial<Record<DepsKeys[number], unknown>>) => React.ReactNode);
    x: number;
    y: number;
    locked?: boolean;
    meta?: Meta;
    /**
     * Dependencies array that, when changed, will trigger a content update.
     * Each value in the array is compared using strict equality (`===`).
     */
    deps?: DepsKeys;
} & GroupGridWidgetSize;

declare type GroupGridWidgetSize = {
    w: number;
    h: number;
};

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

declare type HeadingTags = (typeof headingTags)[number];

declare const headingTags: readonly ["h1", "h2", "h3", "h4", "h5", "h6"];

export declare const HomeLayout: ForwardRefExoticComponent<Omit<{
widgets?: ReactNode[];
children?: ReactNode;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type I18nContextType = TranslationsType & {
    t: (key: TranslationKey, args?: Record<string, string | number>) => string;
};

declare interface I18nProviderProps {
    children: ReactNode;
    translations: TranslationsType;
}

export declare type IconAvatarVariant = Extract<AvatarVariant, {
    type: "icon";
}>;

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

export declare type InFilterDefinition<T = string | number, R extends RecordType = RecordType> = BaseFilterDefinition<"in"> & {
    options: InFilterOptions_2<T, R>;
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
declare type InFilterOptions_2<T, _R extends RecordType = RecordType> = {
    cache?: boolean;
    /**
     * Optional function to resolve labels for specific values without fetching all options.
     * This is useful when you have a dynamic source and want to avoid fetching all options
     * just to display labels for selected values.
     * @param value - The value to get the label for
     * @returns The label for the value, or a promise that resolves to the label
     * @note The parameter type is `unknown` to allow compatibility when T is different types
     */
    getLabel?: (value: unknown) => string | Promise<string>;
} & ({
    options: Array<InFilterOptionItem<T>> | (() => Array<InFilterOptionItem<T>> | Promise<Array<InFilterOptionItem<T>>>);
} | {
    source: DataSourceDefinition<any, FiltersDefinition, SortingsDefinition, GroupingDefinition<any>>;
    mapOptions: (item: any) => InFilterOptionItem<T>;
});

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

declare const INPUTFIELD_SIZES: readonly ["sm", "md"];

declare type InputFieldInheritedProps = (typeof inputFieldInheritedProps)[number];

declare const inputFieldInheritedProps: readonly ["label", "placeholder", "hideLabel", "size", "error", "disabled", "readonly", "required", "clearable", "labelIcon", "status", "hint"];

declare type InputFieldProps<T> = {
    autoFocus?: boolean;
    label: string;
    placeholder?: string;
    labelIcon?: IconType;
    hideLabel?: boolean;
    hidePlaceholder?: boolean;
    name?: string;
    onClickPlaceholder?: () => void;
    onClickChildren?: () => void;
    onClickContent?: () => void;
    value?: T | undefined;
    onChange?: (value: T) => void;
    size?: InputFieldSize;
    error?: string | boolean;
    status?: InputFieldStatus;
    hint?: string;
    disabled?: boolean;
    className?: string;
    required?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    role?: string;
    autocomplete?: AutoFill_2;
    inputRef?: React.Ref<unknown>;
    "aria-controls"?: AriaAttributes["aria-controls"];
    "aria-expanded"?: AriaAttributes["aria-expanded"];
    onClear?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    canGrow?: boolean;
    children: React.ReactNode & {
        onFocus?: () => void;
        onBlur?: () => void;
        onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
        onChange?: (value: T | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
        value?: T;
    };
    icon?: IconType;
    isEmpty?: (value: T | undefined) => boolean;
    emptyValue?: T;
    maxLength?: number;
    hideMaxLength?: boolean;
    append?: React.ReactNode;
    appendTag?: string;
    lengthProvider?: (value: T | undefined) => number;
    loading?: boolean;
    avatar?: AvatarVariant;
    loadingIndicator?: {
        /**
         * If true, the loading spinner will be displayed over the content without affecting the layout
         */
        asOverlay?: boolean;
        /**
         * The offset of the loading spinner from the content
         */
        offset?: number;
    };
    /**
     * Renders a button toggle inside the input field
     */
    buttonToggle?: {
        label: string | [string, string];
        icon: IconType | [IconType, IconType];
        selected: boolean;
        disabled?: boolean;
        onChange: (selected: boolean) => void;
    };
};

declare type InputFieldSize = (typeof INPUTFIELD_SIZES)[number];

declare type InputFieldStatus = {
    type: Exclude<InputFieldStatusType, "error">;
    message: string;
} | {
    type: "error";
    message?: string;
};

declare const inputFieldStatus: readonly ["default", "warning", "info", "error"];

declare type InputFieldStatusType = (typeof inputFieldStatus)[number];

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

declare type Join<T extends string[], D extends string> = T extends [] ? never : T extends [infer F] ? F : T extends [infer F, ...infer R] ? F extends string ? `${F}${D}${Join<Extract<R, string[]>, D>}` : never : string;

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

export declare const Layout: {
    Page: ForwardRefExoticComponent<PageProps & RefAttributes<HTMLDivElement>>;
    Block: ForwardRefExoticComponent<BlockProps & RefAttributes<HTMLDivElement>>;
    BlockContent: ComponentType<BlockProps & BlockContentExtraProps> & PageLayoutBlockComponent_2;
    Group: ForwardRefExoticComponent<GroupLinearProps & RefAttributes<HTMLDivElement>>;
    GroupGrid: {
        <Widget extends GroupGridWidget_2, Deps extends Record<string, unknown> = Record<string, unknown>>({ widgets, editMode, onChange, WidgetWrapper, main, deps: dependencyValues, }: GroupGridProps_2<Widget, Deps>): JSX_2.Element;
        displayName: string;
    };
    GroupMasonry: {
        ({ blocks, sortable: _sortable, onSort: _onSort, main, }: GroupMasonryProps): JSX_2.Element;
        displayName: string;
    };
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

export declare type Level = (typeof levels)[number];

declare const levels: readonly ["info", "warning", "critical", "positive"];

export declare const LineChart: ForwardRefExoticComponent<Omit<LineChartPropsBase<LineChartConfig> & {
lineType?: "natural" | "linear";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type LinkContextValue = {
    currentPath?: string;
    component?: (props: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => JSX.Element;
};

declare type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
    disabled?: boolean;
};

export declare const linkVariants: readonly ["link", "unstyled", "mention"];

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
    readonly communities: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
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
    readonly salary_advance: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
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

declare type NavigationItem = Pick<LinkProps, "href" | "exactMatch" | "onClick"> & {
    label: string;
} & DataAttributes_2;

declare type NavTarget = HTMLAttributeAnchorTarget;

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

declare type NestedResponseWithType<R extends RecordType> = {
    records: R[];
    type?: NestedVariant;
    paginationInfo?: ChildrenPaginationInfo;
};

declare type NestedVariant = "basic" | "detailed";

export declare type NewColor = Extract<BaseColor, (typeof tagDotColors)[number]>;

export declare interface NextStepsProps {
    title: string;
    items: StepItemProps[];
}

export declare type NumberFilterDefinition = BaseFilterDefinition<"number"> & {
    options?: NumberFilterOptions_2;
};

declare type NumberFilterOptions_2 = {
    min?: number;
    max?: number;
    modes?: readonly ("range" | "single")[];
    openCloseToggle?: boolean;
};

declare type NumberFilterValue = {
    mode: "single";
    value: number | undefined;
} | {
    mode: "range";
    from: {
        value: number | undefined;
        closed: boolean;
    };
    to: {
        value: number | undefined;
        closed: boolean;
    };
} | undefined;

export declare type NumberWithFormatter = NumericWithFormatter & {
    animated?: boolean;
};

declare type Numeric = NumericValue | number | undefined | null;

/**
 * Formats a numeric value according to the provided options.
 *
 * @param value - The numeric value to format.
 * @param options - The formatting options.
 * @returns The formatted value as a string.
 */
declare type NumericFormatter = (value: Numeric, options?: NumericFormatterOptions) => string;

/**
 * Configuration options for the numeric formatter.
 */
declare type NumericFormatterOptions = {
    /**
     * Locale string for number formatting (e.g., "en-US", "es-ES", "de-DE").
     * Determines the decimal separator and other locale-specific formatting rules.
     *
     * @default "en-US"
     */
    locale?: string;
    /**
     * Maximum number of decimal places to display.
     * The formatter will round the number to this precision.
     *
     * @default 2
     */
    decimalPlaces?: number;
    /**
     * Whether to hide the units from the formatted value.
     *
     * @default false
     */
    hideUnits?: boolean;
    /**
     * Whether to space the units from the formatted value.
     *
     * @default false
     */
    unitsSpaced?: boolean;
    /**
     * Whether to use compact notation for the formatted value.
     *
     * @default false
     */
    compact?: boolean;
    /**
     * Placeholder text to return when value is undefined or null.
     */
    emptyPlaceholder?: string;
    /**
     * Whether to use grouping for the formatted value.
     *
     * @default true
     */
    useGrouping?: boolean;
};

/**
 * Represents a numeric value that can be formatted with optional units.
 *
 * The value can be provided in two formats:
 * - `value`: Direct numeric value (e.g., 123.45)
 * - `value_x100`: Value stored as integer multiplied by 100 (e.g., 12345 represents 123.45)
 *
 * @example
 * ```ts
 * // Direct value
 * const directValue: NumericValue = { value: 123.45, units: "€" }
 *
 * // Value stored as x100 (useful for avoiding floating point precision issues)
 * const x100Value: NumericValue = { value_x100: 12345, units: "€" }
 * ```
 */
declare type NumericValue = {
    /**
     * Optional unit string to append or prepend to the formatted number.
     * Common examples: "€", "$", "kg", "%", etc.
     */
    units?: string;
    /**
     * Position of the units relative to the number.
     * - "prepend": Units appear before the number (e.g., "$123.45")
     * - "append": Units appear after the number (e.g., "123.45€")
     *
     * @default "append"
     */
    unitsPosition?: "prepend" | "append";
} & ({
    /**
     * Direct numeric value to format.
     */
    value: number | undefined;
} | {
    /**
     * Numeric value stored as an integer multiplied by 100.
     * This format is useful for avoiding floating-point precision issues.
     * The formatter will automatically divide by 100 before formatting.
     *
     * @example
     * value_x100: 12345 represents 123.45
     */
    value_x100: number | undefined;
});

/**
 * A numeric value that can be formatted with an optional formatter and options.
 *
 * @param value - The numeric value to format.
 * @param formatter - The formatter to use.
 * @param formatterOptions - The formatting options.
 */
declare type NumericWithFormatter = {
    numericValue: NumericValue;
    formatter?: NumericFormatter;
    formatterOptions?: NumericFormatterOptions;
};

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
    /** Callback fired when filters open state is changed */
    onOpenChange?: (isOpen: boolean) => void;
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

declare type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

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

export declare interface PageLayoutBlockComponent {
    __isPageLayoutBlock: true;
    displayName?: string;
}

export declare interface PageLayoutGroupComponent {
    __isPageLayoutGroup: true;
    displayName?: string;
}

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

declare type PathsToStringProps<T> = T extends string ? [] : {
    [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
}[Extract<keyof T, string>];

export declare type PersonAvatarVariant = Extract<AvatarVariant, {
    type: "person";
}>;

declare type PersonTagProps = ComponentProps<typeof F0TagPerson>;

export declare const PieChart: ForwardRefExoticComponent<Omit<PieChartProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const predefinedPresets: Record<string, DatePreset>;

/**
 * Defines preset filter configurations that can be applied to a collection.
 * @template Filters - The available filter configurations
 */
export declare type PresetDefinition<Filters extends FiltersDefinition> = {
    /** Display name for the preset */
    label: string;
    /** Filter configuration to apply when this preset is selected */
    filter: FiltersState<Filters>;
    /**
     * How the preset is applied when clicked:
     * - 'replace' (default): Replace all current filters with preset's filter
     * - 'additive': Merge preset's filter with current filters, preserving existing selections
     */
    mode?: "replace" | "additive";
    /** Function to count the number of items that match the filter */
    itemsCount?: (filters: FiltersState<Filters>) => Promise<number | undefined> | number | undefined;
};

export declare type PresetsDefinition<Filters extends FiltersDefinition> = PresetDefinition<Filters>[];

declare type PrevNextDateNavigation = {
    prev: DateRange | false;
    next: DateRange | false;
};

declare type PrimaryActionItemDefinition = Pick<DropdownItemObject, "label" | "icon"> & {
    loading?: boolean;
    onClick?: () => void | Promise<void>;
    disabled?: boolean;
};

/**
 * Defines the structure and configuration of the primary action that can be performed on a collection.
 * @returns An action
 */
declare type PrimaryActionsDefinitionFn = () => PrimaryActionItemDefinition | PrimaryActionItemDefinition[] | undefined;

export declare const PrivacyModeProvider: React_2.FC<{
    initiallyEnabled?: boolean;
    children: ReactNode;
}>;

declare const privateProps: readonly ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style"];

declare const privateProps_2: readonly ["withBorder"];

declare const privateProps_3: readonly ["forceVerticalMetadata", "disableOverlayLink"];

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
    promoTag?: {
        label: string;
        variant?: Variant;
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

export declare function ProductModal({ isOpen, onClose, title, image, benefits, errorMessage, successMessage, loadingState, nextSteps, closeLabel, primaryAction, modalTitle, modalModule, secondaryAction, portalContainer, tag, promoTag, showResponseDialog, }: ProductModalProps): JSX_2.Element;

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
    promoTag?: {
        label: string;
        variant?: Variant;
    };
    primaryAction?: Action_3;
    secondaryAction?: Action_3;
    portalContainer?: HTMLElement | null;
    showResponseDialog?: boolean;
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

/**
 * A numeric value that can be formatted with an optional formatter and options.
 * This is a relaxed version of NumericWithFormatter that allows the numeric value to be a Numeric.
 */
declare type RelaxedNumericWithFormatter = Omit<NumericWithFormatter, "numericValue"> & {
    numericValue: Numeric;
};

declare type RendererDefinition = ValueDisplayRendererDefinition;

export declare type ResolvedRecordType<R> = R extends RecordType ? R : RecordType;

export declare type SearchFilterDefinition = BaseFilterDefinition<"search">;

declare type SearchOptions = {
    /** Whether search is enabled */
    enabled: boolean;
    /** Whether search is synchronous */
    sync?: boolean;
    /** Debounce time for search */
    debounceTime?: number;
};

declare type SecondaryActionGroup = {
    label?: string;
    items: SecondaryActionItem[];
};

/**
 * Defines the structure and configuration of secondary actions that can be performed on a collection.
 * @returns An array of actions
 */
declare type SecondaryActionItem = Pick<DropdownItemObject, "label" | "icon" | "description" | "critical"> & {
    enabled?: boolean;
    hideLabelWhenExpanded?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void | Promise<void>;
};

declare type SecondaryActionsDefinition = {
    expanded: Enumerate<typeof MAX_EXPANDED_ACTIONS>;
    actions: () => SecondaryActionsItems | undefined;
} | (() => SecondaryActionsItems | undefined);

declare type SecondaryActionsItems = SecondaryActionItem[] | SecondaryActionItem[][] | SecondaryActionGroup[];

/**
 * Represents a collection of selected items.
 * @template T - The type of items in the collection
 */
export declare type SelectedItems<T> = ReadonlyArray<T>;

export declare type SelectedItemsDetailedStatus<R extends RecordType, Filters extends FiltersDefinition> = {
    allSelected: boolean | "indeterminate";
    /** Status of items that have been loaded. Items not yet loaded won't appear here. */
    itemsStatus: ReadonlyArray<{
        item: R;
        checked: boolean;
    }>;
    /** All selected item IDs, including those not yet loaded */
    selectedIds: ReadonlyArray<SelectionId>;
    groupsStatus: Record<string, boolean>;
    filters: FiltersState<Filters>;
    selectedCount: number;
};

/**
 * Represents the selected items by id
 */
export declare type SelectedItemsState<R extends RecordType> = {
    allSelected: boolean | "indeterminate";
    items: Map<SelectedItemState<R>["id"], SelectedItemState<R>>;
    groups: Map<SelectedState["id"], SelectedState>;
};

export declare type SelectedItemState<R extends RecordType> = SelectedState & {
    item?: WithGroupId<R>;
};

export declare type SelectedState = {
    id: SelectionId;
    checked: boolean;
};

export declare type SelectionId = number | string;

export declare type SelectionMeta<R extends RecordType> = {
    selectedItemsCount: number;
    totalKnownItemsCount: number;
    checkedItems: ReadonlyArray<R>;
    uncheckedItems: ReadonlyArray<R>;
};

export declare type SelectionStatus<R extends RecordType, Filters extends FiltersDefinition> = {
    allChecked: boolean | "indeterminate";
    /** Status of items that have been loaded. Items not yet loaded won't appear here. */
    itemsStatus: ReadonlyArray<{
        item: R;
        checked: boolean;
    }>;
    /** All selected item IDs, including those not yet loaded */
    selectedIds: ReadonlyArray<SelectionId>;
    checkedItems: ReadonlyArray<R>;
    uncheckedItems: ReadonlyArray<R>;
    groupsStatus: Record<string, boolean>;
    filters: FiltersState<Filters>;
    selectedCount: number;
    totalKnownItemsCount: number;
};

export declare const selectSizes: readonly ["sm", "md"];

/**
 * Response structure for non-paginated data
 */
declare type SimpleResult<T> = T[];

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

export declare type Status = (typeof statuses_2)[number];

declare const statuses: readonly ["neutral", "info", "positive", "warning", "critical"];

declare const statuses_2: readonly ["positive", "neutral", "negative"];

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
    order?: ColId[];
    hidden?: ColId[];
};

export declare const Tag: ({ tag }: {
    tag: TagVariant;
}) => ReactNode;

export declare type TagAlertProps<Text extends string = string> = {
    text: Text extends "" ? never : Text;
    level: Level;
};

export declare type TagBalanceProps = {
    /**
     * Inverts the balance status color. Is useful when a negative percent mean something positive.
     */
    invertStatus?: boolean;
    /**
     * Hint text to display next to the tag (This text is not displayed when the balance is null or undefined)
     */
    hint?: string;
    /**
     * Info text to display an i icon and a tooltip next to the tag
     */
    info?: string;
    /**
     * Text to display when the balance is null or undefined
     */
    nullText?: string;
    /**
     * Value to display next to the tag can be a number, a Numeric or a NumericWithFormatter
     */
    amount: RelaxedNumericWithFormatter | Numeric;
} & ({
    percentage: (Omit<RelaxedNumericWithFormatter, "value"> & {
        value: Omit<Numeric, "units" | "unitsPosition">;
    }) | Omit<Numeric, "units" | "unitsPosition">;
} | {
    percentage?: null;
    formatterOptions?: undefined;
});

export declare interface TagCompanyProps {
    name: string;
    src?: string;
}

export declare const TagCounter: {
    ({ count, list }: Props_2): JSX_2.Element;
    displayName: string;
};

export declare type TagCounterItem = TagVariant;

declare type TagDataType<T extends string> = Omit<Extract<TagVariant, {
    type: T;
}>, "type" | "description">;

export declare const tagDotColors: ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];

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
    tags: Array<TagTypeMapping[T]>;
    /**
     * The maximum number of tags to display.
     * @default 4
     */
    max?: number;
    /**
     * The remaining number to display.
     */
    remainingCount?: number;
};

export declare type TagRawProps = {
    /**
     * The label to display in the tag or used for accessible text
     */
    text: string;
    /**
     * Additional accessible text to display in the tag
     */
    additionalAccessibleText?: string;
} & ({
    icon: IconType;
    onlyIcon: true;
} | {
    icon?: IconType;
    onlyIcon?: boolean;
});

export declare interface TagStatusProps {
    text: string;
    variant: Variant;
    /**
     * Sometimes you need to clarify the status for screen reader users
     * E.g., when showing a tooltip for sighted user, provide the tootip text to this prop because tooltips aren't accessible
     */
    additionalAccessibleText?: string;
}

export declare interface TagTeamProps {
    name: string;
    src?: string;
}

export declare type TagType = (typeof tagTypes)[number];

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

declare const tagTypes: readonly ["dot", "person", "team", "company", "alert", "status", "balance", "raw"];

export declare type TagVariant = BaseTag<{
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

declare interface TextProps extends Omit<default_2.HTMLAttributes<HTMLElement>, "className">, default_2.RefAttributes<HTMLElement> {
    /**
     * Content to be rendered
     */
    content: string;
    /**
     * The text variant to render. Determines styling and default semantic element.
     */
    variant?: TextVariant;
    /**
     * Text alignment
     * @default left
     */
    align?: NonNullable<TextVariants["align"]>;
    /**
     * Additional classes to apply
     * @private
     */
    className?: string;
    /**
     * HTML tag name to use for rendered element.
     * If not provided, uses semantic default based on variant.
     * @default varies by variant
     */
    as?: AsAllowedList;
    /**
     * Enable text ellipsis with optional line configuration
     * - `true`: Single line ellipsis (lines = 1)
     * - `number`: Multi-line ellipsis with specified line count
     * - `undefined`: No ellipsis
     */
    ellipsis?: boolean | number;
    /**
     * Disable tooltip when text is truncated
     * Only applies when ellipsis is enabled
     * @default false
     */
    noEllipsisTooltip?: boolean;
    /**
     * Enable markdown parsing for content
     * @default false
     */
    markdown?: boolean;
}

declare type TextTags = (typeof textTags)[number];

declare const textTags: readonly ["p", "span", "div", "label", "code"];

declare type TextVariant = NonNullable<TextVariants["variant"]>;

declare type TextVariants = VariantProps<typeof textVariants>;

declare const textVariants: (props?: ({
    variant?: "info" | "small" | "body" | "code" | "label" | "description" | "inverse" | "critical" | "warning" | "positive" | "selected" | "heading" | "heading-large" | "label-input" | "warning-strong" | "critical-strong" | "positive-strong" | "info-strong" | undefined;
    align?: "center" | "left" | "right" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type TranslationKey = Join<PathsToStringProps<typeof defaultTranslations>, ".">;

declare type TranslationShape<T> = {
    [K in keyof T]: T[K] extends string ? string : T[K] extends Record<string, string | Record<string, unknown>> ? TranslationShape<T[K]> : never;
};

export declare type TranslationsType = TranslationShape<typeof defaultTranslations>;

export declare type TrendConfig = {
    show?: boolean;
    invertStatus?: boolean;
};

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

export declare interface UpsellingButtonProps extends Omit<F0ButtonProps, "icon"> {
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
    variant: F0ButtonProps["variant"];
    size?: F0ButtonProps["size"];
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
    search: string | undefined;
    setSearch: (search: string | undefined) => void;
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
export declare function useDataSource<R extends RecordType = RecordType, FiltersSchema extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>>({ defaultFilters, currentFilters: externalCurrentFilters, defaultGrouping: externalDefaultGrouping, currentGrouping: externalCurrentGrouping, filters, search, defaultSortings, currentSortings: externalCurrentSortings, dataAdapter, grouping, ...rest }: DataSourceDefinition<R, FiltersSchema, Sortings, Grouping>, deps?: ReadonlyArray<unknown>): DataSource<R, FiltersSchema, Sortings, Grouping>;

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

export declare const useF0Dialog: () => F0DialogContextType;

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

/**
 * Custom hook to manage selection state for items and groups in a data table
 * Supports single/multi selection, grouped data, pagination, and filtering
 */
export declare function useSelectable<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Grouping extends GroupingDefinition<R>>({ data, paginationInfo, source, selectionMode, selectedState, onSelectItems, disableSelectAll, isSearchActive, }: UseSelectableProps<R, Filters, Sortings, Grouping>): UseSelectableReturn<R, Filters>;

export declare type UseSelectableProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Grouping extends GroupingDefinition<R>> = {
    data: Data<R>;
    paginationInfo: PaginationInfo | null;
    source: DataSourceDefinition<R, Filters, Sortings, Grouping>;
    onSelectItems?: OnSelectItemsCallback<R, Filters>;
    selectionMode?: "multi" | "single";
    selectedState?: SelectedItemsState<R>;
    /**
     * Disables the automatic "Select All" state when all items are manually selected.
     * When true, allSelected will always be false even if all items are checked.
     */
    disableSelectAll?: boolean;
    /**
     * Indicates if search is currently active.
     * When true, selecting all visible items won't trigger "all selected" state,
     * because the visible items are a filtered subset.
     */
    isSearchActive?: boolean;
};

export declare type UseSelectableReturn<R extends RecordType, Filters extends FiltersDefinition> = {
    isAllSelected: boolean;
    selectedItems: Map<SelectionId, R>;
    selectedGroups: Map<SelectionId, GroupRecord<R>>;
    isPartiallySelected: boolean;
    groupAllSelectedStatus: Record<SelectionId, AllSelectionStatus>;
    allSelectedStatus: AllSelectionStatus;
    selectionStatus: SelectionStatus<R, Filters>;
    /**
     * The current selected state
     */
    selectedState: SelectedItemsState<R>;
    /**
     * The meta data about the selection
     */
    selectionMeta: SelectionMeta<R>;
    /**
     * Clears the selection
     */
    clearSelection: () => void;
    /**
     * Handles the change of the selected item.
     * Accepts either SelectionId(s) or the item itself (R).
     * When passing an item, the ID will be extracted using source.selectable.
     */
    handleSelectItemChange: (itemOrId: R | SelectionId | readonly SelectionId[], checked: boolean) => void;
    /**
     * Handles the change of the selected all items
     */
    handleSelectAll: (checked: boolean) => void;
    /**
     * Handles the change of the selected group.
     * Accepts either SelectionId(s) or a GroupRecord.
     * When passing a GroupRecord, the key will be used as the ID.
     */
    handleSelectGroupChange: (groupOrId: GroupRecord<R> | SelectionId | readonly SelectionId[], checked: boolean) => void;
};

export declare const useXRay: () => {
    enabled: boolean;
    filter: ComponentTypes[];
    enable: (filter?: ComponentTypes[]) => void;
    disable: () => void;
};

declare type ValueDisplayRendererContext_2 = {
    visualization: ValueDisplayVisualizationType;
    i18n: TranslationsType;
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
    readonly progressBar: (args: ProgressBarCellValue_2, _meta: ValueDisplayRendererContext_2) => JSX_2.Element | null;
    readonly company: (args: CompanyCellValue_2, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly team: (args: TeamCellValue_2, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly tag: (args: TagCellValue_2) => JSX_2.Element;
    readonly dotTag: (args: DotTagCellValue_2) => JSX_2.Element;
    readonly tagList: (args: TagListCellValue_2) => JSX_2.Element;
    readonly icon: (args: IconCellValue, meta: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly file: (args: FileCellValue_2) => JSX_2.Element;
    readonly folder: (args: FolderCellValue_2) => JSX_2.Element;
    readonly country: (args: CountryCellValue, context: ValueDisplayRendererContext_2) => JSX_2.Element;
    readonly syncStatus: (args: SyncStatusCellValue, context: ValueDisplayRendererContext_2) => JSX_2.Element;
};

declare type ValueDisplayVisualizationType = "table" | "card" | "list" | (string & {});

export declare type Variant = (typeof statuses)[number];

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

declare module "gridstack" {
    interface GridStackWidget {
        id?: string;
        allowedSizes?: Array<{
            w: number;
            h: number;
        }>;
        meta?: Record<string, unknown>;
    }
    interface GridStackNode {
        allowedSizes?: Array<{
            w: number;
            h: number;
        }>;
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        moodTracker: {
            insertMoodTracker: (data: MoodTrackerData, config?: MoodTrackerConfig) => ReturnType;
        };
    }
}


declare namespace Calendar {
    var displayName: string;
}
