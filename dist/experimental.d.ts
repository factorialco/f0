import { AlertAvatarProps as AlertAvatarProps_2 } from '../exports';
import { AnchorHTMLAttributes } from 'react';
import { AreaChartWidgetProps } from './AreaChartWidget';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { AvatarProps } from '@radix-ui/react-avatar';
import { BarChartProps } from '../../../components/Charts/BarChart';
import { ButtonHTMLAttributes } from 'react';
import { ClassValue } from 'cva';
import { color as color_2 } from '../../../../ui/avatar';
import { ComponentProps } from 'react';
import { ControllerProps } from 'react-hook-form';
import { ControllerRenderProps } from 'react-hook-form';
import { DateFilterOptions } from './DateFilter/DateFilter';
import { default as default_2 } from 'react';
import { Dispatch } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { FC } from 'react';
import { FieldPath } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { IconType as IconType_3 } from '../../factorial-one';
import { InFilterOptions } from './InFilter/types';
import { JSONContent } from '@tiptap/react';
import { JSX as JSX_2 } from 'react';
import { LineChartProps } from '../../../components/Charts/LineChart';
import { Observable } from 'zen-observable-ts';
import { Path } from 'react-hook-form';
import { PieChartProps } from '../../../components/Charts/PieChart';
import { PopoverProps } from '@radix-ui/react-popover';
import { PropsWithChildren } from 'react';
import * as React_2 from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import * as RechartsPrimitive from 'recharts';
import { RefAttributes } from 'react';
import { ScrollAreaProps } from '@radix-ui/react-scroll-area';
import { sizes as sizes_2 } from '../../../../ui/avatar';
import { SVGProps } from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type as type_2 } from '../../../../ui/avatar';
import { useForm } from 'react-hook-form';
import { UseFormHandleSubmit } from 'react-hook-form';
import { UseFormProps } from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form';
import { VariantProps } from 'cva';
import { VerticalBarChartProps } from '../../../components/Charts/VerticalBarChart';
import { WidgetProps as WidgetProps_2 } from '../Widget';
import { z } from 'zod';
import { ZodType } from 'zod';

declare type Action = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: ButtonProps["variant"];
};

declare type ActionType = CopyActionType | NavigateActionType;

export declare type actionType = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant: "default" | "outline" | "neutral" | undefined;
    icon?: IconType_2;
};

export declare const ActivityItemList: (({ items, onClickItem, }: ActivityItemListProps) => default_2.JSX.Element) & {
    Skeleton: () => default_2.JSX.Element;
};

export declare type ActivityItemListProps = Pick<SectionProps, "items" | "onClickItem">;

export declare const ActivityItemListSkeleton: () => default_2.JSX.Element;

declare type ActivityItemProps = {
    id: string;
    createdAt: Date;
    title: string;
    description?: string;
    icon?: IconType;
    category: string;
    isUnread?: boolean;
    onClick: (id: string) => void;
};

export declare const Alert: React_2.ForwardRefExoticComponent<Omit<React_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "info" | "positive" | "warning" | "destructive" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLElement | SVGElement>>;

export declare const AlertAvatar: ({ icon, type, size }: AlertAvatarProps) => JSX_2.Element;

export declare type AlertAvatarProps = VariantProps<typeof alertAvatarVariants> & {
    icon?: IconType;
    type: "critical" | "warning" | "info" | "positive";
    size?: "sm" | "md" | "lg";
};

declare const alertAvatarVariants: (props?: ({
    type?: "info" | "critical" | "positive" | "warning" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare const AlertDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

declare interface AlertProps extends VariantProps<typeof alertVariants> {
    title: string;
    description: string;
    action: {
        label: string;
        onClick?: () => void;
    };
    link?: {
        label: string;
        href: string;
    };
    variant: AlertVariant;
}

export declare const AlertTag: ForwardRefExoticComponent<Props_10<string> & RefAttributes<HTMLDivElement>>;

export declare const AlertTitle: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLHeadingElement> & React_2.RefAttributes<HTMLParagraphElement>>;

declare type AlertVariant = "info" | "warning" | "critical";

declare const alertVariants: (props?: ({
    variant?: "info" | "critical" | "warning" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare function ApplicationFrame({ children, sidebar, banner, }: ApplicationFrameProps): JSX_2.Element;

declare interface ApplicationFrameProps {
    banner?: React.ReactNode;
    sidebar: React.ReactNode;
    children: React.ReactNode;
}

export declare const AreaChartWidget: ForwardRefExoticComponent<Omit<AreaChartWidgetProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const AutoGrid: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
tileSize?: "lg" | "md" | "sm" | undefined;
gap?: "2" | "4" | "8" | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const Avatar: ({ avatar, size, }: {
    avatar: AvatarVariant;
    size?: (typeof sizes)[number];
}) => ReactNode;

declare const Avatar_2: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: (typeof sizes)[number];
    type?: (typeof type)[number];
    color?: (typeof color)[number];
} & React_2.RefAttributes<HTMLSpanElement>>;

export declare const AvatarList: {
    ({ avatars, size, type, noTooltip, remainingCount: initialRemainingCount, max, layout, }: Props_4): JSX_2.Element;
    displayName: string;
};

declare type AvatarListMetadata = BaseMetadata & {
    type: "avatarList";
    avatars: AvatarVariant[];
    max?: number;
};

declare type AvatarType = AvatarVariant["type"];

export declare type AvatarVariant = ({
    type: "person";
} & Omit<PersonAvatarProps, "size">) | ({
    type: "team";
} & Omit<TeamAvatarProps, "size">) | ({
    type: "company";
} & Omit<CompanyAvatarProps, "size">);

export declare const Badge: ({ type, size, icon }: BadgeProps) => JSX_2.Element;

export declare interface BadgeProps extends VariantProps<typeof badgeVariants> {
    icon: IconType;
    size?: keyof typeof iconSizes;
}

declare const badgeVariants: (props?: ({
    type?: "critical" | "neutral" | "positive" | "highlight" | "warning" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare const BalanceTag: ForwardRefExoticComponent<Props_11 & RefAttributes<HTMLDivElement>>;

export declare const BarChartWidget: ForwardRefExoticComponent<Omit<WidgetProps_2 & {
chart: BarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const BaseActivityItemList: ({ items, onClickItem, }: ActivityItemListProps) => default_2.JSX.Element;

declare const BaseAvatar: ForwardRefExoticComponent<    {
type: ShadAvatarProps["type"];
name: string | string[];
src?: string;
size?: ShadAvatarProps["size"];
color?: ShadAvatarProps["color"] | "random";
badge?: BadgeProps;
} & Pick<Omit<AvatarProps & RefAttributes<HTMLSpanElement>, "ref"> & {
size?: sizes_2[number];
type?: type_2[number];
color?: color_2[number];
} & RefAttributes<HTMLSpanElement>, "aria-label" | "aria-labelledby"> & RefAttributes<HTMLDivElement>>;

declare type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;

declare type BaseAvatarProps_2 = ComponentProps<typeof BaseAvatar>;

declare type BaseAvatarProps_3 = ComponentProps<typeof BaseAvatar>;

declare type BaseAvatarProps_4 = ComponentProps<typeof BaseAvatar>;

export declare const BaseCelebration: ({ link, firstName, lastName, src, onClick, canReact, lastEmojiReaction, onReactionSelect, type, typeLabel, date, }: CelebrationProps) => JSX_2.Element;

declare const baseColors: {
    white: {
        3: string;
        5: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
    };
    current: string;
    transparent: string;
    grey: {
        0: string;
        5: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
        solid: {
            40: string;
            50: string;
        };
    };
    lilac: {
        50: string;
        60: string;
        70: string;
    };
    barbie: {
        50: string;
        60: string;
        70: string;
    };
    smoke: {
        50: string;
        60: string;
        70: string;
    };
    army: {
        50: string;
        60: string;
        70: string;
    };
    flubber: {
        50: string;
        60: string;
        70: string;
    };
    indigo: {
        50: string;
        60: string;
        70: string;
    };
    camel: {
        50: string;
        60: string;
        70: string;
    };
    radical: {
        50: string;
        60: string;
        70: string;
    };
    viridian: {
        50: string;
        60: string;
        70: string;
    };
    orange: {
        50: string;
        60: string;
        70: string;
    };
    red: {
        50: string;
        60: string;
        70: string;
    };
    grass: {
        50: string;
        60: string;
        70: string;
    };
    malibu: {
        50: string;
        60: string;
        70: string;
    };
    yellow: {
        50: string;
        60: string;
        70: string;
    };
    purple: {
        50: string;
        60: string;
        70: string;
    };
    special: {
        highlight: string;
    };
};

export declare const BaseCommunityPost: ({ id, author, group, createdAt, title, description, onClick, mediaUrl, event, counters, reactions, inLabel, comment, dropdownItems, noVideoPreload, }: CommunityPostProps) => JSX_2.Element;

/**
 * Base data adapter configuration for non-paginated collections
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export declare type BaseDataAdapter<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition> = {
    /** Indicates this adapter doesn't use pagination */
    paginationType?: never;
    /**
     * Function to fetch data based on filter options
     * @param options - The filter options to apply when fetching data
     * @returns Array of records, promise of records, or observable of records
     */
    fetchData: (options: BaseFetchOptions<Filters, Sortings>) => BaseResponse<Record> | Promise<BaseResponse<Record>> | Observable<PromiseState<BaseResponse<Record>>>;
};

/**
 * Base options for data fetching
 * @template Filters - The available filter configurations
 */
export declare type BaseFetchOptions<Filters extends FiltersDefinition, Sortings extends SortingsDefinition> = {
    /** Currently applied filters */
    filters: FiltersState<Filters>;
    sortings: SortingsState<Sortings>;
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
};

declare function BaseHeader({ title, avatar, description, primaryAction, secondaryActions, otherActions, status, metadata, }: BaseHeaderProps_2): JSX_2.Element;

declare type BaseHeaderProps = ComponentProps<typeof BaseHeader>;

declare interface BaseHeaderProps_2 {
    title: string;
    avatar?: {
        type: "generic";
        name: string;
        src?: string;
    } | AvatarVariant;
    description?: string;
    primaryAction?: PrimaryActionButton | PrimaryDropdownAction<string>;
    secondaryActions?: SecondaryAction[];
    otherActions?: (DropdownItem & {
        isVisible?: boolean;
    })[];
    status?: {
        label: string;
        text: string;
        variant: StatusVariant;
        actions?: MetadataAction[];
    };
    metadata?: MetadataProps["items"];
}

declare type BaseMetadata = {
    icon: IconType;
};

/**
 * Base response type for collection data
 * @template Record - The type of records in the collection
 */
export declare type BaseResponse<Record> = Record[];

export declare const BaseTabs: React.FC<TabsProps>;

export declare type BreadcrumbBaseItemType = NavigationItem & {
    id: string;
    loading?: boolean;
    label: string;
};

export declare type BreadcrumbItemType = BreadcrumbLoadingItemType | BreadcrumbNavItemType | BreadcrumbSelectItemType;

export declare type BreadcrumbLoadingItemType = Pick<BreadcrumbBaseItemType, "id"> & {
    loading: true;
};

export declare type BreadcrumbNavItemType = BreadcrumbBaseItemType & {
    icon?: IconType;
};

export declare function BreadcrumbSelect({ options, defaultItem, ...props }: BreadcrumbSelectProps): JSX_2.Element;

export declare type BreadcrumbSelectItemType = BreadcrumbBaseItemType & {
    type: "select";
    searchbox?: boolean;
    externalSearch?: boolean;
    options: BreadcrumbSelectProps["options"];
    onChange: BreadcrumbSelectProps["onChange"];
    value?: string;
    defaultItem?: SelectItemObject<string>;
};

export declare type BreadcrumbSelectProps = Omit<SelectProps<string>, "options" | "value"> & {
    options: Options;
    value?: string;
    defaultItem?: SelectItemObject<string>;
};

declare interface BreakType {
    id: string;
    name: string;
    duration?: string;
    description?: string;
    isPaid: boolean;
}

/**
 * Represents a bulk action that can be performed on a collection.
 */
export declare type BulkAction = string;

/**
 * Represents a bulk action definition.
 */
export declare type BulkActionDefinition = {
    label: string;
    icon?: IconType_2;
    id: string;
    keepSelection?: boolean;
};

declare const Button: React_2.ForwardRefExoticComponent<ButtonProps_2 & React_2.RefAttributes<HTMLButtonElement>>;

declare type ButtonInternalProps = Pick<ComponentProps<typeof Button>, "variant" | "size" | "disabled" | "type" | "round" | "className"> & DataAttributes & {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>;
    label: string;
    loading?: boolean;
    icon?: IconType;
    emoji?: string;
    hideLabel?: boolean;
    size?: "sm" | "md" | "lg";
    append?: React.ReactNode;
    appendButton?: React.ReactNode;
};

declare type ButtonProps = Omit<ButtonInternalProps, (typeof privateProps)[number]>;

declare interface ButtonProps_2 extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    round?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    appendButton?: React_2.ReactNode;
}

declare type ButtonSize = (typeof sizes_3)[number];

declare type ButtonVariant = (typeof variants_2)[number];

declare const buttonVariants: (props?: ({
    disabled?: boolean | undefined;
    variant?: "default" | "outline" | "critical" | "neutral" | "ghost" | "promote" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare type CalendarDate = {
    day: number;
    month: number;
    year: number;
};

export declare const CalendarEvent: ForwardRefExoticComponent<CalendarEventProps & RefAttributes<HTMLDivElement>>;

export declare const CalendarEventList: FC<CalendarEventListProps>;

export declare interface CalendarEventListProps {
    events: CalendarEventProps[];
    gap?: number;
    showAllItems?: boolean;
    minSize?: number;
}

export declare interface CalendarEventProps {
    label?: string;
    title: string;
    subtitle?: string;
    description: string;
    color: string;
    isPending: boolean;
    leftTags?: Tag[];
    rightTags?: Tag[];
    fromDate?: Date;
    toDate?: Date;
    noBackground?: boolean;
}

export declare type CalendarMode = "single" | "range";

export declare type CalendarView = "day" | "month" | "year" | "week" | "quarter" | "halfyear";

declare type CardPropertyDefinition<T> = PropertyDefinition_2<T>;

declare type CardVisualizationOptions<T, _Filters extends FiltersDefinition, _Sortings extends SortingsDefinition> = {
    cardProperties: ReadonlyArray<CardPropertyDefinition<T>>;
    title: (record: T) => string;
};

export declare const Carousel: ({ children, columns, showArrows, showDots, autoplay, delay, showPeek, doubleColumns, }: CarouselProps) => default_2.JSX.Element;

declare interface CarouselBreakpoints {
    default?: ColumnNumber;
    xs?: ColumnNumber;
    sm?: ColumnNumber;
    md?: ColumnNumber;
    lg?: ColumnNumber;
    xl?: ColumnNumber;
}

declare interface CarouselProps {
    children: default_2.ReactNode;
    showArrows?: boolean;
    showDots?: boolean;
    autoplay?: boolean;
    delay?: number;
    columns?: CarouselBreakpoints;
    showPeek?: boolean;
    doubleColumns?: {
        index: number;
        sizes: (keyof CarouselBreakpoints)[];
    }[];
}

declare interface CategoryBarProps {
    data: {
        name: string;
        value: number;
        color?: string;
    }[];
    legend: boolean;
    hideTooltip?: boolean;
}

export declare function CategoryBarSection({ title, subtitle, data, helpText, legend, hideTooltip, }: CategoryBarSectionProps): JSX_2.Element;

declare interface CategoryBarSectionProps {
    title: string;
    subtitle: string;
    data: CategoryBarProps["data"];
    helpText?: string;
    legend?: boolean;
    hideTooltip?: boolean;
}

export declare const Celebration: (({ link, firstName, lastName, src, onClick, canReact, lastEmojiReaction, onReactionSelect, type, typeLabel, date, }: CelebrationProps) => JSX_2.Element) & {
    Skeleton: () => JSX_2.Element;
};

export declare type CelebrationProps = {
    link: string;
    firstName: string;
    lastName: string;
    src?: string;
    onClick?: () => void;
    canReact?: boolean;
    lastEmojiReaction?: string;
    onReactionSelect?: (emoji: string) => void;
    type?: "birthday" | "anniversary" | "first-day";
    typeLabel: string;
    date: Date;
};

export declare const CelebrationSkeleton: () => JSX_2.Element;

declare type ChartConfig = Record<string, ChartConfig_2[keyof ChartConfig_2]>;

declare type ChartConfig_2 = {
    [k in string]: {
        label?: React_2.ReactNode;
        icon?: React_2.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};

declare const ChartContainer: React_2.ForwardRefExoticComponent<Omit<ChartContainerComponentProps, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

declare interface ChartContainerComponentProps extends React_2.ComponentProps<"div">, VariantProps<typeof variants> {
    config: ChartConfig_2;
    children: React_2.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}

declare type ChartItem<K extends ChartConfig> = {
    label: string;
    values: {
        [key in keyof K]: number;
    };
};

export declare const ChartWidgetEmptyState: ForwardRefExoticComponent<Props_16 & RefAttributes<HTMLDivElement>>;

export declare type ChatWidgetEmptyStateProps = Props_16;

/**
 * Filter chips list
 */
export declare const ChipsList: {
    (): JSX_2.Element | undefined;
    displayName: string;
};

export declare function ClockInControls({ trackedMinutes, remainingMinutes, data, labels, locationId, locations, canShowLocation, locationSelectorDisabled, onClockIn, onClockOut, onBreak, breakTypes, onChangeBreakTypeId, canShowBreakButton, canSeeGraph, canSeeRemainingTime, onChangeLocationId, canShowProject, projectSelectorElement, breakTypeName, }: ClockInControlsProps): JSX_2.Element;

export declare interface ClockInControlsProps {
    /** Optional remaining time in minutes */
    remainingMinutes?: number;
    /** Clock in entries data */
    data: ClockInGraphProps["data"];
    /** Tracked minutes */
    trackedMinutes: number;
    /** Labels for all text content */
    labels: {
        clockedOut: string;
        clockedIn: string;
        onBreak: string;
        clockIn: string;
        clockOut: string;
        break: string;
        resume: string;
        remainingTime: string;
        overtime: string;
        selectLocation: string;
        selectProject: string;
        paid: string;
        unpaid: string;
    };
    locationId?: string;
    onChangeLocationId: Dispatch<string>;
    locations: {
        id: string;
        name: string;
        icon: IconType;
    }[];
    breakTypes?: BreakType[];
    onChangeBreakTypeId?: Dispatch<string>;
    canShowLocation?: boolean;
    locationSelectorDisabled?: boolean;
    canShowBreakButton?: boolean;
    canSeeGraph?: boolean;
    canSeeRemainingTime?: boolean;
    /** Callback when Clock In button is clicked */
    onClockIn?: () => void;
    /** Callback when Clock Out button is clicked */
    onClockOut?: () => void;
    /** Callback when Break button is clicked */
    onBreak?: (breakTypeId?: string) => void;
    canShowProject?: boolean;
    projectSelectorElement?: React.ReactNode;
    breakTypeName?: string;
}

declare interface ClockInGraphProps {
    trackedMinutes?: number;
    data?: {
        from: Date;
        to: Date;
        variant: ClockInStatus;
    }[];
    remainingMinutes?: number;
}

declare type ClockInStatus = "clocked-in" | "break" | "clocked-out";

/**
 * Props for the Collection component.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template VisualizationOptions - Additional options for visualizing the collection
 */
export declare type CollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, ItemActions extends ItemActionsDefinition<Record>, VisualizationOptions extends object> = {
    /** The data source configuration and state */
    source: DataSource<Record, Filters, Sortings, ItemActions>;
    /** Function to handle item selection */
    onSelectItems?: OnSelectItemsCallback<Record, Filters>;
} & VisualizationOptions;

export declare type CollectionSearchOptions = {
    /** Whether search is enabled */
    enabled: boolean;
    /** Whether search is synchronous */
    sync?: boolean;
    /** Debounce time for search */
    debounceTime?: number;
};

declare const color: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];

declare type ColumnNumber = 1 | 2 | 3 | 4 | 6;

declare type ColumnWidth = keyof typeof columnWidths | number;

declare const columnWidths: {
    readonly auto: undefined;
    readonly fit: 1;
};

export declare const CommunityPost: (({ id, author, group, createdAt, title, description, onClick, mediaUrl, event, counters, reactions, inLabel, comment, dropdownItems, noVideoPreload, }: CommunityPostProps) => JSX_2.Element) & {
    Skeleton: ({ withEvent, withImage, }: CommunityPostSkeletonProps) => JSX_2.Element;
};

export declare type CommunityPostProps = {
    id: string;
    author?: {
        firstName: string;
        lastName: string;
        avatarUrl?: string;
        url?: string;
    };
    group: {
        title: string;
        onClick: () => void;
    };
    createdAt: Date;
    title: string;
    description?: PostDescriptionProps["content"];
    mediaUrl?: string;
    event?: PostEventProps;
    counters: {
        views?: string;
        comments: string;
    };
    reactions?: ReactionsProps;
    inLabel: string;
    comment: {
        label: string;
        onClick: () => void;
    };
    noVideoPreload?: boolean;
    onClick: (id: string) => void;
    dropdownItems?: DropdownItem[];
};

export declare const CommunityPostSkeleton: ({ withEvent, withImage, }: CommunityPostSkeletonProps) => JSX_2.Element;

export declare type CommunityPostSkeletonProps = {
    withEvent?: boolean;
    withImage?: boolean;
};

declare interface Company {
    id: string;
    name: string;
    logo?: string;
}

export declare const CompanyAvatar: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props_3): JSX_2.Element;
    displayName: string;
};

declare type CompanyAvatarProps = ComponentProps<typeof CompanyAvatar>;

declare const CompanyItem: ForwardRefExoticComponent<CompanyItemProps & RefAttributes<HTMLLIElement>>;

declare type CompanyItemProps = {
    name: string;
    avatarUrl?: URL_2;
    action?: ActionType;
};

declare type CompanyMetadata = BaseMetadata & {
    type: "company";
    name: string;
    src?: string;
};

export declare function CompanySelector({ companies, selected, onChange, isLoading, withNotification, additionalOptions, }: CompanySelectorProps): JSX_2.Element;

export declare type CompanySelectorProps = {
    companies: Company[];
    selected?: string;
    onChange: (value: string) => void;
    isLoading?: boolean;
    withNotification?: boolean;
    additionalOptions?: {
        label: string;
        value: string;
        icon?: IconType;
        description?: string;
        onClick?: () => void;
    }[];
};

export declare const CompanyTag: ForwardRefExoticComponent<Props_12 & RefAttributes<HTMLDivElement>>;

declare type Content = (ComponentProps<typeof DataList.Item> & {
    type: "item";
}) | (ComponentProps<typeof DataList.PersonItem> & {
    type: "person";
}) | (ComponentProps<typeof DataList.CompanyItem> & {
    type: "company";
}) | (ComponentProps<typeof DataList.TeamItem> & {
    type: "team";
}) | (ComponentProps<typeof Weekdays> & {
    type: "weekdays";
});

/**
 * Filter controls
 */
export declare const Controls: {
    (): JSX_2.Element | undefined;
    displayName: string;
};

declare type CopyActionType = {
    type: "copy";
    text?: string;
};

export declare function Counter({ size, type, value, maxValue }: CounterProps): JSX_2.Element;

declare type CounterProps = {
    value: number;
    maxValue?: number;
} & VariantProps<typeof counterVariants>;

declare const counterVariants: (props?: ({
    size?: "md" | "sm" | undefined;
    type?: "bold" | "default" | "selected" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

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

export declare const Dashboard: ForwardRefExoticComponent<DashboardProps & RefAttributes<HTMLDivElement>> & {
    Skeleton: () => JSX_2.Element;
};

declare type DashboardProps = {
    widgetWidth?: WidgetWidth;
    children?: ReactNode[];
};

declare type DashboardProps_2 = {
    children: ReactNode[];
};

/**
 * Combined type for all possible data adapter configurations
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export declare type DataAdapter<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition> = BaseDataAdapter<Record, Filters, Sortings> | PaginatedDataAdapter<Record, Filters, Sortings>;

declare const DataList: ForwardRefExoticComponent<DataListProps & RefAttributes<HTMLUListElement>> & {
    Item: ForwardRefExoticComponent<ItemProps & RefAttributes<HTMLLIElement>>;
    CompanyItem: ForwardRefExoticComponent<CompanyItemProps & RefAttributes<HTMLLIElement>>;
    PersonItem: ForwardRefExoticComponent<EmployeeItemProps & RefAttributes<HTMLLIElement>>;
    TeamItem: ForwardRefExoticComponent<TeamItemProps & RefAttributes<HTMLLIElement>>;
};

declare type DataListProps = {
    children: ReactElement<Items>[] | ReactElement<Items>;
    label?: string;
};

/**
 * Represents a data source with filtering capabilities and data fetching functionality.
 * Extends DataSourceDefinition with runtime properties for state management.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 */
export declare type DataSource<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, ItemActions extends ItemActionsDefinition<Record> = ItemActionsDefinition<Record>> = DataSourceDefinition<Record, Filters, Sortings, ItemActions> & {
    /** Current state of applied filters */
    currentFilters: FiltersState<Filters>;
    /** Function to update the current filters state */
    setCurrentFilters: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>;
    /** Current state of applied sortings */
    currentSortings: SortingsState<Sortings>;
    /** Function to update the current sortings state */
    setCurrentSortings: React.Dispatch<React.SetStateAction<SortingsState<Sortings>>>;
    currentSearch: undefined | string;
    debouncedCurrentSearch: undefined | string;
    setCurrentSearch: (search: string | undefined) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
};

/**
 * Defines the structure and configuration of a data source for a collection.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template SecondaryActions - The available actions that can be performed on the collection
 */
export declare type DataSourceDefinition<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, ItemActions extends ItemActionsDefinition<Record>> = {
    /** Available filter configurations */
    filters?: Filters;
    /** Predefined filter configurations that can be applied */
    presets?: PresetsDefinition<Filters>;
    /** URL for a single item in the collection */
    itemUrl?: (item: Record) => string | undefined;
    /** Click handler for a single item in the collection */
    itemOnClick?: (item: Record) => () => void;
    /** Available actions that can be performed on records */
    itemActions?: ItemActions;
    /** Available primary actions that can be performed on the collection */
    primaryActions?: PrimaryActionsDefinition;
    /** Available secondary actions that can be performed on the collection */
    secondaryActions?: SecondaryActionsDefinition;
    /** Search configuration */
    search?: CollectionSearchOptions;
    /** Current state of applied filters */
    currentFilters?: FiltersState<Filters>;
    /** Available sorting fields. If not provided, sorting is not allowed. */
    sortings?: Sortings;
    defaultSorting?: SortingsState<Sortings>;
    /** Data adapter responsible for fetching and managing data */
    dataAdapter: DataAdapter<Record, Filters, Sortings>;
    /** Selectable items value under the checkbox column (undefined if not selectable) */
    selectable?: (item: Record) => string | number | undefined;
    /** Bulk actions that can be performed on the collection */
    bulkActions?: (selectedItems: Parameters<OnBulkActionCallback<Record, Filters>>[1]) => {
        primary: BulkActionDefinition[];
        secondary?: BulkActionDefinition[];
    };
};

export declare const DateAvatar: ({ date }: Props_5) => JSX_2.Element;

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

export declare type DateNavigationOptions = {
    min?: Date;
    max?: Date;
};

export declare type DateRange = {
    from: Date;
    to?: Date;
};

export declare type DateRangeComplete = Required<DateRange>;

export declare type DateRangeString = {
    from: string;
    to?: string;
};

export declare function DaytimePage({ children, header, period, embedded, }: DaytimePageProps): JSX_2.Element;

export declare namespace DaytimePage {
    var displayName: string;
}

export declare interface DaytimePageProps extends VariantProps<typeof daytimePageVariants> {
    children?: React.ReactNode;
    header?: {
        title: string;
        description?: string;
        employeeFirstName: string;
        employeeLastName: string;
        employeeAvatar?: string;
        pulse?: ComponentProps<typeof PulseAvatar>["pulse"];
        onPulseClick?: ComponentProps<typeof PulseAvatar>["onPulseClick"];
    };
    embedded?: boolean;
}

declare const daytimePageVariants: (props?: ({
    period?: "evening" | "morning" | "afternoon" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare const DetailsItem: ForwardRefExoticComponent<DetailsItemType & RefAttributes<HTMLDivElement>>;

export declare const DetailsItemsList: ForwardRefExoticComponent<DetailsItemsListProps & RefAttributes<HTMLDivElement>>;

declare interface DetailsItemsListProps {
    title: string;
    details: DetailsItemType[];
}

export declare interface DetailsItemType {
    title: string;
    content: Content | Content[];
    spacingAtTheBottom?: boolean;
}

export declare const Dialog: ForwardRefExoticComponent<Omit<{
header: {
type: AlertAvatarProps_2["type"];
title: string;
description: string;
};
actions: {
primary: {
label: string;
onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>) | undefined;
disabled?: boolean | undefined | undefined;
icon?: IconType_3 | undefined;
} & {
variant?: "default" | "critical" | "neutral";
};
secondary: {
label: string;
onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>) | undefined;
disabled?: boolean | undefined | undefined;
icon?: IconType_3 | undefined;
};
};
open?: boolean;
onClose?: () => void;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const DotTag: ForwardRefExoticComponent<DotTagProps & RefAttributes<HTMLDivElement>>;

export declare const dotTagColors: NewColor[];

export declare type DotTagProps = {
    text: string;
} & ({
    color: NewColor;
} | {
    customColor: string;
});

export declare const Dropdown: (props: DropdownProps) => JSX_2.Element;

declare type DropdownInternalProps = {
    items: DropdownItem[];
    icon?: IconType;
    size?: ButtonProps["size"];
    children?: React.ReactNode;
    align?: "start" | "end";
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
} & DataAttributes;

export declare type DropdownItem = DropdownItemObject | {
    type: "separator";
};

export declare type DropdownItemObject = NavigationItem & {
    type?: "item";
    onClick?: () => void;
    icon?: IconType;
    description?: string;
    critical?: boolean;
    avatar?: AvatarVariant;
};

declare const DropdownMenu: React_2.FC<DropdownMenuPrimitive.DropdownMenuProps>;

declare const DropdownMenuItem: React_2.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React_2.RefAttributes<HTMLDivElement>>;

declare const DropdownMenuTrigger: React_2.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

declare type DropdownProps = Omit<DropdownInternalProps, (typeof privateProps_2)[number]> & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};

export declare type editorStateType = {
    html: string;
    json: JSONContent | null;
};

export declare const EmojiAvatar: {
    ({ emoji, size }: Props_6): JSX_2.Element;
    displayName: string;
};

declare type EmployeeItemProps = {
    firstName: string;
    lastName: string;
    avatarUrl?: URL_2;
    action?: ActionType;
};

export declare type enhanceConfig = {
    onEnhanceText: (params: enhanceTextParams) => Promise<enhancedTextResponse>;
    enhancementOptions?: EnhancementOption[];
    enhanceLabels: enhanceLabelsType;
};

export declare type enhancedTextResponse = {
    success: boolean;
    text: string;
    error?: string;
};

export declare type enhanceLabelsType = {
    defaultError: string;
    enhanceButtonLabel: string;
    acceptChangesButtonLabel: string;
    rejectChangesButtonLabel: string;
    repeatButtonLabel: string;
    customPromptPlaceholder: string;
    loadingEnhanceLabel: string;
};

export declare type EnhancementOption = {
    id: string;
    label: string;
    subOptions?: EnhancementOption[];
};

export declare type enhanceTextParams = {
    text: string;
    selectedIntent?: string;
    customIntent?: string;
    context?: string;
};

export declare const EntitySelect: (props: EntitySelectProps & {
    children?: React.ReactNode;
}) => JSX_2.Element;

declare interface EntitySelectCommonProps extends Omit<PopoverProps, "children" | "modal"> {
    entities: EntitySelectEntity[];
    groups: EntitySelectNamedGroup[];
    selectedGroup: string;
    triggerPlaceholder: string;
    triggerSelected: string;
    notFoundTitle: string;
    notFoundSubtitle: string;
    onItemExpandedChange: (id: number, expanded: boolean) => void;
    onGroupChange: (value: string | null) => void;
    disabled?: boolean;
    zIndex?: number;
    loading?: boolean;
    searchPlaceholder?: string;
    selectAllLabel?: string;
    clearLabel?: string;
    selectedLabel?: string;
    selectedEntities?: EntitySelectEntity[];
    alwaysOpen?: boolean;
    width?: number;
    hiddenAvatar?: boolean;
}

export declare type EntitySelectEntity = {
    id: number;
    name: string;
    avatar?: string;
    expanded?: boolean;
    searchKeys?: string[];
    subItems?: EntitySelectSubEntity[];
};

export declare interface EntitySelectMultipleProps extends EntitySelectCommonProps {
    onSelect: (entities: EntitySelectEntity[]) => void;
    singleSelector: false | undefined;
}

export declare type EntitySelectNamedGroup = {
    value: string;
    label: string;
    groupType?: "avatar" | "team";
};

export declare type EntitySelectProps = EntitySelectSingleProps | EntitySelectMultipleProps;

export declare interface EntitySelectSingleProps extends EntitySelectCommonProps {
    onSelect: (entity: EntitySelectEntity | null) => void;
    singleSelector: true;
}

export declare type EntitySelectSubEntity = {
    subId: number;
    subName: string;
    subAvatar?: string;
    subSearchKeys?: string[];
};

export declare type errorConfig = {
    onClose?: () => void;
    closeErrorButtonLabel?: string;
};

/**
 * Extracts the property keys from a record type.
 * @template RecordType - The type containing the properties to extract
 */
export declare type ExtractPropertyKeys<RecordType> = keyof RecordType;

export declare const F1SearchBox: ForwardRefExoticComponent<F1SearchBoxProps & RefAttributes<HTMLInputElement>>;

declare type F1SearchBoxProps = {
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    threshold?: number;
    debounceTime?: number;
    clearable?: boolean;
    autoFocus?: boolean;
    onChange?: (value: string) => void;
};

export declare const FILE_TYPES: {
    readonly PDF: "pdf";
    readonly IMAGE: "image";
    readonly DOC: "doc";
    readonly EXCEL: "excel";
    readonly PPT: "ppt";
    readonly TXT: "txt";
    readonly VIDEO: "video";
    readonly AUDIO: "audio";
    readonly ARCHIVE: "archive";
    readonly CSV: "csv";
    readonly HTML: "html";
    readonly MARKDOWN: "markdown";
};

export declare type FileAction = {
    icon?: IconType;
    label: string;
    onClick: () => void;
    critical?: boolean;
};

export declare const FileAvatar: ForwardRefExoticComponent<Omit<Omit<AvatarProps & RefAttributes<HTMLSpanElement>, "ref"> & {
size?: sizes_2[number];
type?: type_2[number];
color?: color_2[number];
} & RefAttributes<HTMLSpanElement>, "ref"> & {
file: File;
} & RefAttributes<HTMLSpanElement>>;

export declare const FileItem: ForwardRefExoticComponent<FileItemProps & RefAttributes<HTMLDivElement>>;

declare interface FileItemProps extends React.HTMLAttributes<HTMLDivElement> {
    file: File;
    actions?: FileAction[];
    disabled?: boolean;
}

export declare type filesConfig = {
    onFiles: (files: File[]) => void;
    multipleFiles: boolean;
    maxFileSize?: number;
    acceptedFileType?: FileType[];
};

export declare type FileType = (typeof FILE_TYPES)[keyof typeof FILE_TYPES];

/**
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @returns An array of filtered actions
 */
export declare const filterActions: (actions: SecondaryActionsDefinition) => (DropdownItem & {
    enabled?: boolean;
})[];

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
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @param item - The item to filter the actions for
 * @returns An array of filtered actions
 */
export declare const filterItemActions: <T extends RecordType>(actions: ItemActionsDefinition<T>, item: T) => (DropdownItem & {
    enabled?: boolean;
})[];

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

/**
 * Props for the Filters component.
 * @template Definition - The type defining the structure of available filters
 */
declare interface FiltersRootProps<Definition extends FiltersDefinition> {
    /** The definition of available filters and their configurations */
    schema?: Definition;
    /** Current state of applied filters */
    filters: FiltersState<Definition>;
    /** Optional preset configurations that users can select */
    presets?: PresetsDefinition<Definition>;
    /** Callback fired when filters are changed */
    onChange: (value: FiltersState<Definition>) => void;
    /** The children of the component */
    children: React.ReactNode;
}
export { FiltersRootProps }
export { FiltersRootProps as RootProps }

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
    }) => React.ReactNode;
    /**
     * The value label to display in the filter chips
     */
    chipLabel: (value: Value, context: FilterTypeContext<Options>) => string | Promise<string>;
    /**
     * The default options to render a filter of this type, for example max and min date for a date filter, the list of options for an in filter, etc
     */
    defaultOptions?: Options;
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

export declare type FlattenedItem = {
    parent: EntitySelectEntity | null;
    subItem: EntitySelectSubEntity & {
        expanded?: boolean;
        subItems?: EntitySelectSubEntity[];
    };
};

export declare function Form<Schema extends SchemaType, FormData extends InferSchema<Schema>>({ onSubmit, children, ...form }: {
    children: React.ReactNode;
} & FormType<Schema, FormData>): JSX_2.Element;

export declare function FormActions<Schema extends SchemaType, FormData extends InferSchema<Schema>>({ submitLabel, form, }: {
    submitLabel: string;
    form: FormType<Schema, FormData>;
}): JSX_2.Element;

declare type FormError<Fields extends FieldValues> = {
    success: false;
    rootMessage?: string;
    errors: Partial<Record<Path<Fields>, string>>;
};

export declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ label, description, children, ...props }: FormFieldProps<TFieldValues, TName> & {
    children: (field: ControllerRenderProps<TFieldValues>) => JSX.Element;
}) => JSX_2.Element;

export declare type FormFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Pick<ControllerProps<TFieldValues, TName>, "name" | "control"> & {
    label: string;
    description?: string;
};

declare type FormType<T extends SchemaType, FormType extends InferSchema<T>> = UseFormReturn<FormType, unknown, undefined> & {
    onSubmit: ReturnType<UseFormHandleSubmit<FormType>>;
};

declare interface FrameContextType {
    isSmallScreen: boolean;
    sidebarState: SidebarState;
    prevSidebarState: SidebarState | null;
    toggleSidebar: () => void;
}

export declare const getGranularitySimpleDefinition: (view: CalendarView) => GranularityDefinitionSimple;

export declare interface GranularityDefinition {
    label: (viewDate: Date) => ReactNode;
    toRangeString: (date: Date | DateRange | undefined | null) => DateRangeString;
    toRange: <T extends Date | DateRange | undefined | null>(date: T) => T extends Date | DateRange ? DateRange : T;
    toString: (date: Date | DateRange | undefined | null) => string;
    fromString: (dateStr: string | DateRangeString) => DateRange | null;
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
        setViewDate: (date: Date) => void;
        viewDate: Date;
    }) => ReactNode;
    getPrevNext(date: DateRange, options: DateNavigationOptions): PrevNextDateNavigation;
}

export declare const granularityDefinitions: Record<CalendarView, GranularityDefinition>;

export declare type GranularityDefinitionSimple = Pick<GranularityDefinition, "toRangeString">;

declare type HeaderProps = {
    module: {
        name: string;
        href: string;
        icon: IconType;
    };
    statusTag?: {
        text: string;
        variant: StatusVariant;
        tooltip?: string;
    };
    actions?: PageAction[];
    navigation?: NavigationProps;
    embedded?: boolean;
    breadcrumbs?: BreadcrumbItemType[];
    productUpdates?: {
        isVisible?: boolean;
    } & ProductUpdatesProp;
};

export declare type heightType = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full" | "auto";

export declare const HighlightBanner: ({ title, subtitle, buttonLabel, onClick, }: HighlightBannerProps) => JSX_2.Element;

declare type HighlightBannerProps = {
    title: string;
    subtitle: string;
    buttonLabel: string;
    onClick?: () => void;
};

declare type HTMLString = string;

export declare const IconAvatar: {
    ({ icon, size, className }: Props_7): JSX_2.Element;
    displayName: string;
};

declare const iconSizes: {
    readonly sm: "xs";
    readonly md: "sm";
    readonly lg: "md";
};

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
    animate?: "normal" | "animate";
}>;

declare type IconType_2 = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
    animate?: "normal" | "animate";
}>;

declare const Indicator: ForwardRefExoticComponent<IndicatorProps & RefAttributes<HTMLDivElement>>;

declare type IndicatorProps = {
    content: string;
    label: string;
    color?: string;
} & ({
    icon?: IconType;
} | {
    emoji?: string;
});

export declare const IndicatorsList: ForwardRefExoticComponent<IndicatorsListProps & RefAttributes<HTMLDivElement>>;

export declare interface IndicatorsListProps {
    items: ComponentProps<typeof Indicator>[];
}

declare type InferSchema<T extends SchemaType> = z.infer<T>;

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
    options: Array<InFilterOptionItem<T>> | (() => Array<InFilterOptionItem<T>> | Promise<Array<InFilterOptionItem<T>>>);
};

export declare const Input: React.FC<InputProps>;

declare const Input_2: React_2.ForwardRefExoticComponent<React_2.InputHTMLAttributes<HTMLInputElement> & {
    icon?: IconType;
    clearable?: boolean;
    error?: boolean;
} & React_2.RefAttributes<HTMLInputElement>>;

export declare type InputProps = Pick<ComponentProps<typeof Input_2>, "ref" | "disabled" | "size" | "onChange" | "value" | "placeholder"> & {
    type?: Exclude<HTMLInputTypeAttribute, "number">;
};

declare const Item: ForwardRefExoticComponent<ItemProps & RefAttributes<HTMLLIElement>>;

export declare type ItemActionsDefinition<T extends RecordType> = (item: T) => Array<DropdownItem & {
    enabled?: boolean;
}> | undefined;

declare type ItemProps = {
    text: string;
    icon?: IconType;
    action?: ActionType;
};

declare type Items = typeof Item | typeof PersonItem | typeof CompanyItem | typeof TeamItem;

declare type Items_2 = SelectItemObject<string>[];

export declare type lastIntentType = {
    selectedIntent?: string;
    customIntent?: string;
} | null;

declare type Level = "info" | "warning" | "critical";

export declare const LineChartWidget: ForwardRefExoticComponent<Omit<WidgetProps_2 & {
chart: LineChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
    disabled?: boolean;
};

export declare type MentionedUser = {
    id: number;
    label: string;
    image_url?: string;
    href?: string;
};

export declare type mentionsConfig = {
    onMentionQueryStringChanged?: (queryString: string) => Promise<MentionedUser[]> | undefined;
    users: MentionedUser[];
};

export declare function Menu({ tree, onCollapse, onSort }: MenuProps): default_2.JSX.Element;

export declare interface MenuCategory {
    id: string;
    title: string;
    items: MenuItem[];
    isRoot?: boolean;
    isOpen?: boolean;
    isSortable?: boolean;
}

export declare interface MenuItem extends NavigationItem {
    icon: IconType;
    badge?: number;
}

declare interface MenuProps {
    tree: MenuCategory[];
    onCollapse?: (category: MenuCategory, isOpen: boolean) => void;
    onSort?: (categories: MenuCategory[]) => void;
}

declare type Metadata = SimpleMetadata | AvatarListMetadata | StatusMetadata | UserMetadata | CompanyMetadata | TeamMetadata | TagMetadata;

declare type MetadataAction = {
    icon: IconType;
    label: string;
    onClick: () => void;
    type?: never;
};

declare type MetadataCopyAction = {
    icon?: never;
    label?: never;
    onClick?: never;
    copyValue?: string;
    type: "copy";
};

declare function MetadataItem({ item }: {
    item: MetadataItem;
}): JSX_2.Element;

declare interface MetadataItem {
    label: string;
    value: MetadataItemValue;
    actions?: (MetadataAction | MetadataCopyAction)[];
    hideLabel?: boolean;
}

declare type MetadataItemValue = {
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
} | {
    type: "list";
    variant: AvatarVariant["type"];
    avatars: AvatarVariant[];
} | {
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
};

declare interface MetadataProps {
    /**
     * Everything is not a MetadataItem is ignored.
     * Undefined and boolean enable conditional items
     **/
    items: (MetadataItem | undefined | boolean)[];
    /**
     * If true and the metadata type is a list, it will be collapsed to the first item
     */
    collapse?: boolean;
}

export declare const MobileDropdown: ({ items, children }: DropdownProps) => JSX_2.Element;

declare type ModalPosition = "center" | "left" | "right";

export declare function ModuleAvatar({ size, icon }: ModuleAvatarProps): JSX_2.Element;

export declare interface ModuleAvatarProps extends VariantProps<typeof moduleAvatarVariants> {
    icon: IconType;
}

declare const moduleAvatarVariants: (props?: ({
    size?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type NavigateActionType = {
    type: "navigate";
    href: string;
};

declare type NavigationItem = Pick<LinkProps, "href" | "exactMatch" | "onClick"> & {
    label: string;
} & DataAttributes;

declare type NavigationProps = {
    previous?: {
        url: string;
        title: string;
    };
    next?: {
        url: string;
        title: string;
    };
    counter?: {
        current: number;
        total: number;
    };
};

export declare type NewColor = Extract<keyof typeof baseColors, "viridian" | "malibu" | "yellow" | "purple" | "lilac" | "barbie" | "smoke" | "army" | "flubber" | "indigo" | "camel">;

export declare const NumberInput: ForwardRefExoticComponent<Omit<NumberInputProps, "ref"> & RefAttributes<HTMLInputElement>>;

declare type NumberInputProps = Omit<InputProps, "value" | "type" | "onChange"> & {
    locale: string;
    value?: number | null;
    step?: number;
    min?: number;
    max?: number;
    maxDecimals?: number;
    onChange?: (value: number | null) => void;
};

export declare function OmniButton({ label, options, hasNewUpdate }: OmniButtonProps): JSX_2.Element;

declare interface OmniButtonProps {
    label: string;
    options: Option_2[];
    hasNewUpdate?: boolean;
}

export declare type OnBulkActionCallback<Record extends RecordType, Filters extends FiltersDefinition> = (...args: [
action: BulkAction,
...Parameters<OnSelectItemsCallback<Record, Filters>>
]) => void;

export declare const OneAlert: ({ title, description, action, link, variant, }: AlertProps) => JSX_2.Element;

export declare function OneCalendar({ mode, view, onSelect, defaultMonth, defaultSelected, showNavigation, showInput, }: OneCalendarProps): JSX_2.Element;

export declare interface OneCalendarProps {
    mode: CalendarMode;
    view: CalendarView;
    onSelect?: (date: DateRange | null) => void;
    defaultMonth?: Date;
    defaultSelected?: Date | DateRange | null;
    showNavigation?: boolean;
    showInput?: boolean;
}

export declare function OneCard({ avatar, title, description, metadata, children, link, primaryAction, secondaryActions, otherActions, selectable, selected, onSelect, }: OneCardProps): JSX_2.Element;

declare interface OneCardProps {
    /**
     * The avatar to display in the card
     */
    avatar?: AvatarVariant;
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
    metadata?: Metadata[];
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
    primaryAction?: {
        label: string;
        icon?: IconType;
        onClick: () => void;
    };
    /**
     * The secondary actions that display a secondary button in the card footer
     * The first secondary action will display its label, while the rest will display
     * just the icon
     */
    secondaryActions?: {
        label: string;
        icon: IconType;
        onClick: () => void;
    }[];
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
}

/**
 * A component that renders a collection of data with filtering and visualization capabilities.
 * It consumes a data source (created by useDataSource) and displays it through one or more visualizations.
 *
 * DataCollection is separated from useDataSource to:
 * 1. Support the composition pattern - data sources can be created and managed independently
 * 2. Allow a single data source to be visualized in multiple ways simultaneously
 * 3. Enable reuse of the same data source in different parts of the application
 * 4. Provide a clean separation of concerns between data management and UI rendering
 *
 * @template Record - The type of records in the collection
 * @template Filters - The definition of available filters for the collection
 * @template ItemActions - The definition of available item actions
 *
 * @param source - The data source containing filters, data, and state management
 * @param visualizations - Array of available visualization options (e.g., table, card view)
 *
 * @returns A JSX element containing:
 * - Filter controls (if filters are defined)
 * - Visualization selector (if multiple visualizations are available)
 * - The selected visualization of the data
 */
export declare const OneDataCollection: <Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, ItemActions extends ItemActionsDefinition<Record>>({ source, visualizations, onSelectItems, onBulkAction, }: {
    source: DataSource<Record, Filters, Sortings, ItemActions>;
    visualizations: ReadonlyArray<Visualization<Record, Filters, Sortings>>;
    onSelectItems?: OnSelectItemsCallback<Record, Filters>;
    onBulkAction?: OnBulkActionCallback<Record, Filters>;
}) => JSX.Element;

declare type OneDropdownButtonItem<T = string> = {
    value: T;
    label: string;
    icon?: IconType;
};

export declare const OneModal: OneModalComponent;

declare const OneModal_2: default_2.FC<OneModalProps>;

declare type OneModalComponent = typeof OneModal_2 & {
    Header: typeof OneModalHeader;
    Content: typeof OneModalContent;
};

declare const OneModalContent: ({ tabs, activeTabId, setActiveTabId, children, }: OneModalContentProps) => JSX_2.Element;

declare type OneModalContentProps = {
    children: React.ReactNode;
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>;

declare const OneModalHeader: ({ title, otherActions, }: OneModalHeaderProps) => JSX_2.Element;

declare type OneModalHeaderProps = {
    title: string;
    otherActions?: DropdownInternalProps["items"];
};

declare type OneModalProps = {
    /** Whether the modal is open */
    isOpen: boolean;
    /** Callback when modal is closed */
    onClose: () => void;
    /** Whether to render the modal as a bottom sheet on mobile */
    asBottomSheetInMobile?: boolean;
    position?: ModalPosition;
    /** Custom content to render in the modal. Only accepts OneModal.Header and OneModal.Content components */
    children: default_2.ReactElement<ComponentProps<typeof OneModalHeader> | ComponentProps<typeof OneModalContent>> | default_2.ReactElement<ComponentProps<typeof OneModalHeader> | ComponentProps<typeof OneModalContent>>[];
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>;

export declare function OnePagination({ totalPages, currentPage, onPageChange, showControls, ariaLabel, visibleRange, hasNextPage, disabled, }: OnePaginationProps): JSX_2.Element;

declare interface OnePaginationProps {
    /**
     * The total number of pages. Pass 0 if the total is unknown.
     */
    totalPages: number;
    /**
     * The current page.
     * @default 1
     */
    currentPage?: number;
    /**
     * The callback function to handle page change.
     */
    onPageChange?: (page: number) => void;
    /**
     * Whether to show the controls.
     * @default true
     */
    showControls?: boolean;
    /**
     * Accessible label for the pagination navigation.
     * @default "Page navigation"
     */
    ariaLabel?: string;
    /**
     * The number of pages to show on the sides of the current page.
     * @default 3
     */
    visibleRange?: number;
    /**
     * Used in indeterminate state (totalPages = 0) to indicate if there are more pages available.
     * @default true
     */
    hasNextPage?: boolean;
    /**
     * Whether to disable the pagination.
     * @default false
     */
    disabled?: boolean;
}

export declare const OnePersonListItem: default_2.ForwardRefExoticComponent<OnePersonListItemProps & default_2.RefAttributes<HTMLDivElement>> & {
    Skeleton: () => default_2.JSX.Element;
};

export declare type OnePersonListItemProps = {
    person: {
        firstName: string;
        lastName: string;
        avatarUrl?: string;
        avatarBadge?: Omit<BadgeProps, "size">;
    };
    description?: string;
    bottomTags: Omit<RawTagProps, "noBorder">[];
    rightTag?: DotTagProps;
    actions?: {
        primary?: {
            icon?: IconType;
            label: string;
            onClick: () => void;
        };
        secondary?: {
            icon: IconType;
            onClick: () => void;
        };
    };
    info?: string;
    onClick: () => void;
    withPointerCursor?: boolean;
};

export declare type OnSelectItemsCallback<Record extends RecordType, Filters extends FiltersDefinition> = (selectedItems: {
    allSelected: boolean | "indeterminate";
    itemsStatus: ReadonlyArray<{
        item: Record;
        checked: boolean;
    }>;
    filters: FiltersState<Filters>;
    selectedCount: number;
}, clearSelectedItems: () => void) => void;

declare type OnSubmitHandler<TFieldValues extends FieldValues, TTransformedValues extends FieldValues | undefined = undefined> = (data: ReturnType<UseFormHandleSubmit<TFieldValues, TTransformedValues>>) => Promise<Success | FormError<TFieldValues>> | Success | FormError<TFieldValues>;

declare interface Option_2 {
    title?: string;
    description?: string;
    href?: string;
    target?: string;
    onClick?: (event: any) => unknown;
}

declare type Options = Items_2 | ((search?: string) => Promise<Items_2> | Items_2);

export declare function Page({ children, header, embedded }: PageProps): JSX_2.Element;

export declare namespace Page {
    var displayName: string;
}

export declare type PageAction = {
    label: string;
    icon: IconType;
} & ({
    href: string;
} | {
    actions: Array<{
        label: string;
        href: string;
    }>;
});

export declare function PageHeader({ module, statusTag, breadcrumbs, actions, embedded, navigation, productUpdates, }: HeaderProps): JSX_2.Element;

declare interface PageProps {
    children?: React.ReactNode;
    header?: React.ReactNode;
    embedded?: boolean;
}

/**
 * Paginated data adapter configuration
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export declare type PaginatedDataAdapter<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition> = {
    /** Indicates this adapter uses page-based pagination */
    paginationType: "pages";
    /** Default number of records per page */
    perPage?: number;
    /**
     * Function to fetch paginated data based on filter and pagination options
     * @param options - The filter and pagination options to apply when fetching data
     * @returns Paginated response with records and pagination info
     */
    fetchData: (options: PaginatedFetchOptions<Filters, Sortings>) => PaginatedResponse<Record> | Promise<PaginatedResponse<Record>> | Observable<PromiseState<PaginatedResponse<Record>>>;
};

/**
 * Options for paginated data fetching
 * @template Filters - The available filter configurations
 */
export declare type PaginatedFetchOptions<Filters extends FiltersDefinition, Sortings extends SortingsDefinition> = BaseFetchOptions<Filters, Sortings> & {
    /** Pagination configuration */
    pagination: {
        currentPage: number;
        perPage: number;
    };
};

/**
 * Response type for paginated collection data
 * @template Record - The type of records in the collection
 */
export declare type PaginatedResponse<Record> = {
    /** The records for the current page */
    records: Record[];
} & PaginationInfo;

/**
 * Information about the current pagination state
 */
export declare type PaginationInfo = {
    /** Total number of records available */
    total: number;
    /** Current page number (1-indexed) */
    currentPage: number;
    /** Number of records per page */
    perPage: number;
    /** Total number of pages available */
    pagesCount: number;
};

export declare const PersonAvatar: {
    ({ firstName, lastName, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props): JSX_2.Element;
    displayName: string;
};

declare type PersonAvatarProps = ComponentProps<typeof PersonAvatar>;

declare const PersonItem: ForwardRefExoticComponent<EmployeeItemProps & RefAttributes<HTMLLIElement>>;

export declare const PersonTag: ForwardRefExoticComponent<Props_13 & RefAttributes<HTMLDivElement>>;

export declare const PieChartWidget: ForwardRefExoticComponent<Omit<WidgetProps_2 & {
chart: PieChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type PostDescriptionProps = {
    content: HTMLString;
    collapsed?: boolean;
};

declare type PostEventProps = {
    title: string;
    imageUrl?: string;
    place?: string;
    date: Date;
};

/**
 * Filter presets
 */
export declare const Presets: {
    (): JSX_2.Element | undefined;
    displayName: string;
};

/**
 * Defines preset filter configurations that can be applied to a collection.
 * @template Filters - The available filter configurations
 */
export declare type PresetsDefinition<Filters extends FiltersDefinition> = Array<{
    /** Display name for the preset */
    label: string;
    /** Filter configuration to apply when this preset is selected */
    filter: FiltersState<Filters>;
}>;

export declare type PrevNextDateNavigation = {
    prev: DateRange | false;
    next: DateRange | false;
};

declare interface PrimaryAction {
    disabled?: boolean;
    tooltip?: string;
    isVisible?: boolean;
}

declare interface PrimaryActionButton extends PrimaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
}

/**
 * Defines the structure and configuration of the primary action that can be performed on a collection.
 * @returns An action
 */
export declare type PrimaryActionsDefinition = () => Pick<DropdownItemObject, "onClick" | "label" | "icon"> | undefined;

export declare type primaryActionType = {
    action: actionType;
    subActions?: subActionType[];
};

declare interface PrimaryDropdownAction<T> extends PrimaryAction {
    items: OneDropdownButtonItem<T>[];
    value?: T;
    onClick: (value: T, item: OneDropdownButtonItem<T>) => void;
}

export declare const PrivateBox: FC<PropsWithChildren>;

declare const privateProps: readonly ["append", "appendButton", "className"];

declare const privateProps_2: readonly [];

declare type ProductUpdate = {
    title: string;
    href: string;
    mediaUrl: string;
    updated: string;
    unread?: boolean;
    onClick?: ComponentProps<typeof DropdownMenuItem>["onClick"];
};

declare type ProductUpdatesProp = {
    label: string;
    moreUpdatesLabel: string;
    updatesPageUrl: string;
    getUpdates: () => Promise<Array<ProductUpdate>>;
    hasUnread?: boolean;
    currentModule: string;
    onOpenChange?: ComponentProps<typeof DropdownMenu>["onOpenChange"];
    onHeaderClick?: ComponentProps<typeof DropdownMenuTrigger>["onClick"];
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
};

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
};

declare type PropertyRendererMetadata<T> = {
    visualization: VisualizationType;
    property: PropertyDefinition_2<T>;
};

/**
 * Renders a property value based on the renderer type.
 * @param renderer - The renderer type to use
 * @param args - The arguments to pass to the renderer
 * @returns The rendered property value
 */
declare const propertyRenderers: {
    readonly text: (text: string | number | undefined) => JSX_2.Element;
    readonly number: (number: number | undefined, meta: PropertyRendererMetadata<never>) => JSX_2.Element;
    readonly date: (date: Date | undefined) => JSX_2.Element;
    readonly amount: (amount: number | undefined, meta: PropertyRendererMetadata<never>) => JSX_2.Element;
    readonly avatarList: (args: {
        avatarList: AvatarVariant[];
        max?: number;
    }) => JSX_2.Element;
    readonly status: (args: {
        status: StatusVariant;
        label: string;
    }) => JSX_2.Element;
    readonly person: (args: {
        firstName: string;
        lastName: string;
        src?: string;
    }) => JSX_2.Element;
    readonly company: (args: {
        name: string;
        src?: string;
    }) => JSX_2.Element;
    readonly team: (args: {
        name: string;
        src?: string;
    }) => JSX_2.Element;
    readonly tag: (args: {
        label: string;
        icon?: IconType;
    }) => JSX_2.Element;
    readonly dotTag: (args: {
        label: string;
        color: NewColor;
    }) => JSX_2.Element;
};

declare type Props = {
    firstName: string;
    lastName: string;
    src?: string;
    size?: BaseAvatarProps["size"];
    badge?: BadgeProps;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare type Props_10<Text extends string = string> = {
    text: Text extends "" ? never : Text;
    level: Level;
};

declare interface Props_11 {
    text: string;
    status: Status;
}

declare type Props_12 = {
    companyName: string;
    companyImageUrl: string;
    onClick?: () => void;
};

declare type Props_13 = {
    name: string;
    avatarUrl: string;
    onClick?: () => void;
};

declare type Props_14 = {
    teamName: string;
    teamImageUrl: string;
    onClick?: () => void;
};

declare type Props_15 = {
    firstName: string;
    lastName: string;
    src?: string;
    pulse?: Pulse;
    onPulseClick: () => void;
} & Pick<BaseAvatarProps_4, "aria-label" | "aria-labelledby">;

declare interface Props_16 {
    title: string;
    content: string;
    buttonLabel?: string;
    buttonIcon?: IconType;
    buttonAction?: () => void;
    type: Type;
}

declare type Props_17 = {
    label: string;
    icon: IconType;
    iconClassName?: string;
    count: number;
    onClick?: () => void;
};

declare type Props_18<Id extends string | number = string | number> = {
    id: Id;
    icon?: IconType;
    title: string;
    subtitle: string;
    onClick?: (id: Id) => void;
};

declare type Props_19<Id extends string | number = string | number> = {
    items: Omit<WidgetInboxListItemProps<Id>, "onClick">[];
    minSize?: number;
    onClickItem?: (id: Id) => void;
    showAllItems?: boolean;
};

declare type Props_2 = {
    name: string;
    src?: string;
    size?: BaseAvatarProps_2["size"];
    badge?: BadgeProps;
} & Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby">;

declare type Props_20<Id extends string | number = string | number> = {
    items: Omit<WidgetSimpleListItemProps<Id>, "onClick">[];
    minSize?: number;
    gap?: number;
    onClickItem?: (id: Id) => void;
    showAllItems?: boolean;
};

declare type Props_3 = {
    name: string;
    src?: string;
    size?: BaseAvatarProps_3["size"];
    badge?: BadgeProps;
} & Pick<BaseAvatarProps_3, "aria-label" | "aria-labelledby">;

declare type Props_4 = {
    avatars: AvatarVariant[];
    size?: (typeof sizes)[number];
    type?: AvatarType;
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
};

declare type Props_5 = {
    date: Date;
};

declare type Props_6 = {
    emoji: string;
    size?: "sm" | "md" | "lg";
};

declare type Props_7 = {
    icon: IconType;
    size?: "sm" | "md" | "lg";
    className?: string;
};

declare type Props_8 = {} & Pick<BaseHeaderProps, "avatar" | "title" | "description" | "primaryAction" | "secondaryActions" | "otherActions" | "metadata" | "status">;

declare type Props_9 = {
    /** Main heading text */
    title: string;
    /** Description text below the title */
    description: string;
    /**  Complementary action specific to the section */
    action?: Pick<ButtonProps, "label" | "onClick"> & {
        icon?: IconType;
        variant?: "default" | "outline";
    };
    /** Optional Link to related documentation (Help center or other link))*/
    supportButton?: {
        label: string;
        href: string;
    };
    /** If specified, a separator will be displayed above or below the content */
    separator?: "top" | "bottom";
};

declare type Pulse = "superNegative" | "negative" | "neutral" | "positive" | "superPositive";

declare const PulseAvatar: {
    ({ firstName, lastName, src, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, pulse, onPulseClick, }: Props_15): JSX_2.Element;
    displayName: string;
};

export declare const RadarChart: <K extends ChartConfig>(props: RadarChartProps<K> & RefAttributes<HTMLDivElement>) => React.ReactNode;

export declare const _RadarChart: <K extends ChartConfig>({ data, dataConfig, scaleMin, scaleMax, aspect }: RadarChartProps<K>, ref: ForwardedRef<HTMLDivElement>) => JSX_2.Element;

export declare type RadarChartProps<K extends ChartConfig> = {
    dataConfig: K;
    data: ChartItem<K>[];
    scaleMin?: number;
    scaleMax?: number;
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};

export declare const rangeSeparator = "\u2192";

export declare const RawTag: ForwardRefExoticComponent<RawTagProps & RefAttributes<HTMLDivElement>>;

export declare type RawTagProps = {
    text?: string;
    additionalAccesibleText?: string;
    icon?: IconType;
    noBorder?: boolean;
    className?: string;
};

declare interface ReactionProps {
    emoji: string;
    initialCount: number;
    hasReacted?: boolean;
    users?: User_2[];
    onInteraction?: (emoji: string) => void;
}

declare interface ReactionsProps {
    items: ReactionProps[];
    onInteraction?: (emoji: string) => void;
    locale?: string;
}

/**
 * Represents a record type with string keys and unknown values.
 * This type is used to represent the data structure of a collection.
 */
export declare type RecordType = Record<string, unknown>;

/**
 * The definition of a renderer.
 * Union type of all possible renderer definitions to ensure the value is the type related the `type`{ [RenderedType]: RendererFuncArgument }.
 */
declare type RendererDefinition = {
    [K in keyof typeof propertyRenderers]: {
        type: K;
        value: Parameters<(typeof propertyRenderers)[K]>[0];
    };
}[keyof typeof propertyRenderers];

export declare const ResourceHeader: ({ avatar, title, description, primaryAction, secondaryActions, otherActions, status, metadata, }: Props_8) => JSX_2.Element;

export declare type resultType = {
    value: string | null;
    mentionIds?: number[];
};

export declare const RichTextDisplay: ForwardRefExoticComponent<RichTextDisplayProps & RefAttributes<HTMLDivElement>>;

export declare type RichTextDisplayHandle = HTMLDivElement;

export declare interface RichTextDisplayProps extends HTMLAttributes<HTMLDivElement> {
    content: string;
    className?: string;
}

export declare const RichTextEditor: ForwardRefExoticComponent<RichTextEditorProps & RefAttributes<RichTextEditorHandle>> & {
    Skeleton: ({ rows }: RichTextEditorSkeletonProps) => JSX_2.Element;
};

export declare type RichTextEditorHandle = {
    clear: () => void;
    clearFiles: () => void;
    focus: () => void;
    setError: (error: string | null) => void;
    setContent: (content: string) => void;
};

export declare interface RichTextEditorProps {
    mentionsConfig?: mentionsConfig;
    enhanceConfig?: enhanceConfig;
    filesConfig?: filesConfig;
    secondaryAction?: actionType;
    primaryAction?: primaryActionType;
    onChange: (result: resultType) => void;
    maxCharacters?: number;
    placeholder: string;
    initialEditorState?: {
        content?: string;
        files?: File[];
    };
    toolbarLabels: toolbarLabels;
    title: string;
    errorConfig?: errorConfig;
    height?: heightType;
}

declare interface RichTextEditorSkeletonProps {
    rows?: number;
}

/**
 * A comprehensive filtering interface that manages multiple filter types.
 * Provides a popover interface for filter configuration and displays active filters as chips.
 *
 * The component supports multiple filter types through a unified interface:
 * - "in" type filters: Multi-select filters with predefined options
 * - "search" type filters: Free-text search filters
 *
 * Features:
 * - Search and multi-select filters with type safety
 * - Temporary filter state that's only applied when explicitly confirmed
 * - Animated filter chips for active filters
 * - Support for filter presets for quick selection of common filter combinations
 * - Responsive design for different viewport sizes
 *
 * The component maintains a temporary state of filters that are only applied
 * when the user explicitly clicks the "Apply Filters" button, allowing for
 * a more controlled filtering experience.
 *
 * @template Definition - The type defining the structure of available filters
 *
 * @example
 * ```tsx
 * // Example with multiple filter types and presets
 * <Filters
 *   schema={{
 *     department: {
 *       type: "in",
 *       label: "Department",
 *       options: [
 *         { value: "engineering", label: "Engineering" },
 *         { value: "marketing", label: "Marketing" },
 *         { value: "sales", label: "Sales" }
 *       ]
 *     },
 *     search: {
 *       type: "search",
 *       label: "Search"
 *     }
 *   }}
 *   filters={{
 *     department: ["engineering"]
 *   }}
 *   presets={[
 *     {
 *       label: "Engineering Only",
 *       filter: { department: ["engineering"] }
 *     },
 *     {
 *       label: "Sales & Marketing",
 *       filter: { department: ["sales", "marketing"] }
 *     }
 *   ]}
 *   onChange={setFilters}
 * />
 * ```
 *
 * @see {@link FiltersDefinition} for detailed schema structure
 * @see {@link FiltersState} for the structure of filter state
 */
export declare const Root: {
    <Definition extends FiltersDefinition>({ filters, schema, children, ...props }: FiltersRootProps<Definition>): JSX_2.Element;
    displayName: string;
};

declare type SchemaType = ZodType;

export declare const ScrollArea: ForwardRefExoticComponent<Omit<Omit<ScrollAreaProps & RefAttributes<HTMLDivElement>, "ref"> & {
showBar?: boolean;
viewportRef?: React.RefObject<HTMLDivElement>;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare function SearchBar({ onClick, placeholder, shortcut, ...props }: SearchBarProps): JSX_2.Element;

declare interface SearchBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder: string;
    shortcut?: string[];
}

declare type SearchFilterDefinition = BaseFilterDefinition<"search">;

declare interface SecondaryAction extends PrimaryActionButton {
    variant?: "outline" | "critical";
}

/**
 * Defines the structure and configuration of secondary actions that can be performed on a collection.
 * @returns An array of actions
 */
export declare type SecondaryActionsDefinition = () => Array<DropdownItem & {
    enabled?: boolean;
}> | undefined;

export declare const SectionHeader: ({ title, description, action, supportButton, separator, }: Props_9) => JSX_2.Element;

declare type SectionProps = {
    title: string;
    items: ActivityItemProps[];
    onClickItem: (id: string) => void;
};

export declare const Select: ForwardRefExoticComponent<SelectProps<string, any> & RefAttributes<HTMLButtonElement>>;

/**
 * Represents a collection of selected items.
 * @template T - The type of items in the collection
 */
export declare type SelectedItems<T> = ReadonlyArray<T>;

export declare type SelectItemObject<T, R = unknown> = {
    type?: "item";
    value: T;
    label: string;
    description?: string;
    avatar?: AvatarVariant;
    tag?: string;
    icon?: IconType;
    item?: R;
};

export declare type SelectItemProps<T, R = unknown> = SelectItemObject<T, R> | {
    type: "separator";
};

export declare type SelectProps<T, R = any> = {
    placeholder?: string;
    onChange: (value: T, item?: R) => void;
    value?: T;
    defaultItem?: SelectItemObject<T, R>;
    options: SelectItemProps<T, R>[];
    children?: React.ReactNode;
    disabled?: boolean;
    open?: boolean;
    showSearchBox?: boolean;
    searchBoxPlaceholder?: string;
    onSearchChange?: (value: string) => void;
    externalSearch?: boolean;
    searchValue?: string;
    onOpenChange?: (open: boolean) => void;
    searchEmptyMessage?: string;
    className?: string;
    selectContentClassName?: string;
};

declare type ShadAvatarProps = ComponentProps<typeof Avatar_2>;

export declare function Shortcut({ keys, variant }: ShortcutProps): JSX_2.Element | null;

declare interface ShortcutProps extends VariantProps<typeof shortcutVariants> {
    keys: string[];
}

declare const shortcutVariants: (props?: ({
    variant?: "default" | "inverse" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare function Sidebar({ header, body, footer }: SidebarProps): JSX_2.Element;

export declare function SidebarHeader({ companies, selected, onChange, withNotification, additionalOptions, }: SidebarHeaderProps): JSX_2.Element;

export declare type SidebarHeaderProps = CompanySelectorProps & SidebarIconProps;

declare type SidebarIconProps = {
    isExpanded: boolean;
    onClick?: () => void;
};

declare interface SidebarProps {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
}

declare type SidebarState = "locked" | "unlocked" | "hidden";

declare type SimpleMetadata = BaseMetadata & {
    type: "text";
    title: string;
};

declare const sizes: readonly ["xsmall", "small", "medium", "large", "xlarge"];

declare const sizes_3: readonly ["sm", "md", "lg"];

declare const skeletonVariants: (props?: ({
    height?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

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

export declare type SortOrder = "asc" | "desc";

export declare function Spinner({ size, className }: SpinnerProps): JSX_2.Element;

declare interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
    className?: string;
}

declare const spinnerVariants: (props?: ({
    size?: "small" | "large" | "medium" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare const Split: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | undefined;
maxWidth?: "md" | "sm" | "xs" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | undefined;
height?: "auto" | "full" | undefined;
width?: "auto" | "full" | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | undefined;
basis?: "0" | undefined;
inline?: boolean | undefined;
justifyContent?: "center" | "end" | "start" | "stretch" | "space-between" | undefined;
alignItems?: "center" | "end" | "start" | "stretch" | "space-between" | undefined;
grow?: boolean | undefined;
shrink?: boolean | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | undefined;
wrap?: boolean | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const Stack: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | undefined;
maxWidth?: "md" | "sm" | "xs" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | undefined;
height?: "auto" | "full" | undefined;
width?: "auto" | "full" | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | undefined;
basis?: "0" | undefined;
inline?: boolean | undefined;
justifyContent?: "center" | "end" | "start" | "stretch" | "space-between" | undefined;
alignItems?: "center" | "end" | "start" | "stretch" | "space-between" | undefined;
grow?: boolean | undefined;
shrink?: boolean | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type Status = "positive" | "neutral" | "negative";

declare type StatusMetadata = BaseMetadata & {
    type: "status";
    status: StatusVariant;
    label: string;
};

export declare const StatusTag: ForwardRefExoticComponent<StatusTagProps & RefAttributes<HTMLDivElement>>;

export declare interface StatusTagProps {
    text: string;
    variant: Variant;
    /**
     * Sometimes you need to clarify the status for screen reader users
     * E.g., when showing a tooltip for sighted user, provide the tootip text to this prop because tooltips aren't accessible
     */
    additionalAccesibleText?: string;
}

export declare type StatusVariant = Variant;

export declare type subActionType = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    icon?: IconType_2;
};

declare type Success = {
    success: true;
    rootMessage?: never;
    errors?: never;
};

export declare const SummariesWidget: ForwardRefExoticComponent<Omit<WidgetProps_2 & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare function Switch({ title, onCheckedChange, id, disabled, checked, value, hideLabel, presentational, ...rest }: SwitchProps): JSX_2.Element;

declare interface SwitchProps extends DataAttributes {
    /**
     * The title of the switch
     */
    title?: string;
    /**
     * The id of the switch
     */
    id?: string;
    /**
     * The checked state of the switch
     * @default false
     */
    checked?: boolean;
    /**
     * The callback function that is called when the switch is toggled
     */
    onCheckedChange?: (checked: boolean) => void;
    /**
     * Whether the switch is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The value of the switch
     */
    value?: string;
    /**
     * Whether to hide the label
     * @default false
     */
    hideLabel?: boolean;
    /**
     * Whether the switch is only presentational, so it does not have functionality
     * @default false
     */
    presentational?: boolean;
}

export declare type TabItem = {
    label: string;
    index?: boolean;
} & DataAttributes & ({
    href: string;
} | {
    id: string;
});

declare type TableColumnDefinition<Record, Sortings extends SortingsDefinition> = WithOptionalSorting<Record, Sortings> & Pick<ComponentProps<typeof TableHead>, "hidden" | "info" | "sticky" | "width">;

declare function TableHead({ children, width, sortState, onSortClick, info, sticky, hidden, align, }: TableHeadProps): JSX_2.Element;

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
     * When true, the header cell will not be visible.
     * @default false
     */
    hidden?: boolean;
    /**
     * Alingment of the cell
     * @default "left"
     */
    align?: "left" | "right";
}

declare type TableVisualizationOptions<Record extends RecordType, _Filters extends FiltersDefinition, Sortings extends SortingsDefinition> = {
    columns: ReadonlyArray<TableColumnDefinition<Record, Sortings>>;
    frozenColumns?: 0 | 1 | 2;
};

export declare const Tabs: FC<TabsProps> & {
    Skeleton: FC<Pick<TabsProps, "secondary">>;
};

export declare interface TabsProps {
    tabs: TabItem[];
    activeTabId?: string;
    setActiveTabId?: Dispatch<string>;
    secondary?: boolean;
    embedded?: boolean;
}

export declare const TabsSkeleton: React.FC<Pick<TabsProps, "secondary">>;

declare type Tag = {
    icon: IconType;
    label?: string;
    description?: string;
};

declare type TagMetadata = BaseMetadata & {
    type: "tag";
    label: string;
    tagIcon?: IconType;
};

declare interface Task {
    id: number | string;
    text: string;
    badge?: {
        text: string;
        isPastDue?: boolean;
    };
    counter?: number;
}

export declare function TasksList({ tasks, onClickTask, hideIcons, maxTasksToShow, emptyMessage, }: TasksListProps): JSX_2.Element;

declare function TasksList({ tasks, onClickTask, hideIcons, maxTasksToShow, emptyMessage, }: TasksListProps): JSX_2.Element;

declare interface TasksList_2 {
    inProgress?: (Task | string)[];
    todo?: (Task | string)[];
}

export declare interface TasksListProps {
    tasks: TasksList_2;
    maxTasksToShow?: number;
    onClickTask?: (task: Task) => void;
    emptyMessage?: string;
    hideIcons?: boolean;
}

export declare const TeamAvatar: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props_2): JSX_2.Element;
    displayName: string;
};

declare type TeamAvatarProps = ComponentProps<typeof TeamAvatar>;

declare const TeamItem: ForwardRefExoticComponent<TeamItemProps & RefAttributes<HTMLLIElement>>;

declare type TeamItemProps = {
    name: string;
    action?: ActionType;
};

declare type TeamMetadata = BaseMetadata & {
    type: "team";
    name: string;
    src?: string;
};

export declare const TeamTag: ForwardRefExoticComponent<Props_14 & RefAttributes<HTMLDivElement>>;

export declare const Textarea: React.FC<TextareaProps>;

declare const Textarea_2: React_2.ForwardRefExoticComponent<TextareaProps_2 & React_2.RefAttributes<HTMLTextAreaElement>>;

export declare type TextareaProps = Pick<ComponentProps<typeof Textarea_2>, "disabled" | "onChange" | "value" | "placeholder" | "rows" | "cols">;

declare type TextareaProps_2 = React_2.TextareaHTMLAttributes<HTMLTextAreaElement>;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

export declare const ToggleGroup: React_2.ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & React_2.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & React_2.RefAttributes<HTMLDivElement>, "ref">) & VariantProps<(props?: ({
    variant?: "default" | "outline" | undefined;
    size?: "lg" | "sm" | "default" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string>) & React_2.RefAttributes<HTMLDivElement>>;

export declare const ToggleGroupItem: React_2.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | undefined;
    size?: "lg" | "sm" | "default" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string> & React_2.RefAttributes<HTMLButtonElement>>;

export declare type toolbarLabels = {
    bold: string;
    italic: string;
    underline: string;
    strike: string;
    highlight: string;
    heading1: string;
    heading2: string;
    heading3: string;
    left: string;
    center: string;
    right: string;
    justify: string;
    bulletList: string;
    orderedList: string;
    taskList: string;
    codeBlock: string;
    horizontalRule: string;
    quote: string;
    moreOptions: string;
    code: string;
    divider: string;
    bullet: string;
    ordered: string;
    task: string;
    linkPlaceholder: string;
    linkLabel: string;
    linkPaste: string;
    close: string;
};

declare interface TwoColumnsItemType {
    title: string;
    info: string | ReactNode;
}

export declare const TwoColumnsList: ForwardRefExoticComponent<TwoColumnsListType & RefAttributes<HTMLDivElement>>;

declare interface TwoColumnsListType {
    title?: string;
    list: TwoColumnsItemType[];
}

declare type Type = "bar-chart" | "line-chart";

declare const type: readonly ["base", "rounded"];

declare type URL_2 = string;

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
 * @template Record - The type of records in the collection
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
export declare const useDataSource: <Record extends RecordType, FiltersSchema extends FiltersDefinition, Sortings extends SortingsDefinition, ItemActions extends ItemActionsDefinition<Record>>({ currentFilters: initialCurrentFilters, filters, search, defaultSorting, dataAdapter, ...rest }: DataSourceDefinition<Record, FiltersSchema, Sortings, ItemActions>, deps?: ReadonlyArray<unknown>) => DataSource<Record, FiltersSchema, Sortings, ItemActions>;

export { useForm }

export declare function useFormSchema<Schema extends SchemaType, FormData extends InferSchema<Schema>>(schema: Schema, options: UseFormProps<FormData>, onSubmit: OnSubmitHandler<FormData>): FormType<Schema, FormData>;

export declare function User({ firstName, lastName, avatarUrl, options }: UserProps): JSX_2.Element;

declare interface User_2 {
    name: string;
}

declare type UserMetadata = BaseMetadata & {
    type: "user";
    firstName: string;
    lastName: string;
    src?: string;
};

declare interface UserProps {
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    options: DropdownItem[];
}

export declare function useSidebar(): FrameContextType;

declare type Variant = "neutral" | "info" | "positive" | "warning" | "critical";

declare const variants: (props?: ({
    aspect?: "small" | "square" | "wide" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare const variants_2: readonly ["default", "outline", "critical", "neutral", "ghost", "promote"];

export declare const VerticalBarChartWidget: ForwardRefExoticComponent<Omit<WidgetProps_2 & {
chart: VerticalBarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

/**
 * Represents a visualization configuration for displaying collection data.
 * Supports different visualization types (card, table, or custom) with their respective options.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template ItemActions - The actions type extending Item ActionsDefinition
 */
declare type Visualization<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition> = {
    /** Card-based visualization type */
    type: "card";
    /** Configuration options for card visualization */
    options: CardVisualizationOptions<Record, Filters, Sortings>;
} | {
    /** Table-based visualization type */
    type: "table";
    /** Configuration options for table visualization */
    options: TableVisualizationOptions<Record, Filters, Sortings>;
} | {
    /** Custom visualization type */
    type: "custom";
    /** Human-readable label for the visualization */
    label: string;
    /** Icon to represent the visualization in UI */
    icon: IconType;
    /** Custom component to render the visualization */
    component: (props: {
        source: DataSource<Record, Filters, Sortings>;
    }) => JSX.Element;
};

/**
 * Represents the type of visualization.
 * TODO: This should be a union of all the types in the Visualization type.
 */
declare type VisualizationType = "card" | "table" | "custom";

export declare const Weekdays: ForwardRefExoticComponent<WeekdaysProps & RefAttributes<HTMLDivElement>>;

declare interface WeekdaysProps {
    activatedDays?: number[];
    daysOfTheWeek?: string[];
}

export declare const Widget: default_2.ForwardRefExoticComponent<WidgetProps & {
    children: ReactNode;
} & default_2.RefAttributes<HTMLDivElement>> & {
    Skeleton: default_2.ForwardRefExoticComponent<WidgetSkeletonProps & default_2.RefAttributes<HTMLDivElement>>;
};

export declare function WidgetAvatarsListItem({ id, title, subtitle, avatars, remainingCount, withPointerCursor, onClick, ...props }: WidgetAvatarsListItemProps): JSX_2.Element;

export declare type WidgetAvatarsListItemProps = {
    id: string | number;
    title: string;
    subtitle: string;
    avatars: AvatarVariant[];
    remainingCount?: number;
    withPointerCursor?: boolean;
    onClick?: (id: string | number) => void;
} & ({
    emoji: string;
} | {
    alert: ComponentProps<typeof AlertAvatar>["type"];
    alertIcon?: IconType;
});

export declare function WidgetEmptyState({ title, description, emoji, actions, }: WidgetEmptyStateProps): JSX_2.Element;

export declare type WidgetEmptyStateProps = {
    title: string;
    description: string;
    emoji?: string;
    actions?: Action[];
};

export declare function WidgetHighlightButton({ label, count, icon, iconClassName, onClick, }: Props_17): JSX_2.Element;

export declare function WidgetInboxList({ items, minSize, onClickItem, showAllItems, }: Props_19): JSX_2.Element;

export declare function WidgetInboxListItem({ id, title, subtitle, icon, onClick, }: Props_18): JSX_2.Element;

export declare type WidgetInboxListItemProps<Id extends string | number = string | number> = Props_18<Id>;

export declare type WidgetInboxListProps = Props_19;

export declare interface WidgetProps {
    header?: {
        title?: string;
        subtitle?: string;
        comment?: string;
        info?: string;
        canBeBlurred?: boolean;
        link?: {
            title: string;
            url?: string;
            onClick?: () => void;
            icon?: IconType;
        };
        count?: number;
    };
    action?: ButtonProps;
    summaries?: Array<{
        label: string;
        value: string | number;
        prefixUnit?: string;
        postfixUnit?: string;
    }>;
    alert?: string;
    status?: {
        text: string;
        variant: StatusVariant;
    };
    fullHeight?: boolean;
}

export declare const WidgetSection: ForwardRefExoticComponent<    {
children?: ReactNode | undefined;
} & {
title?: string;
} & RefAttributes<HTMLDivElement>>;

export declare function WidgetSimpleList({ items, gap, minSize, onClickItem, showAllItems, }: Props_20): JSX_2.Element;

export declare function WidgetSimpleListItem({ id, title, alert, rawTag, count, icon, rightIcon, iconClassName, rightIconClassName, onClick, }: WidgetSimpleListItemProps): JSX_2.Element;

export declare type WidgetSimpleListItemProps<Id extends string | number = string | number> = {
    id: Id;
    title: string;
    icon?: IconType;
    iconClassName?: string;
    rightIcon?: IconType;
    rightIconClassName?: string;
    count?: number;
    alert?: ComponentProps<typeof AlertTag>;
    rawTag?: ComponentProps<typeof RawTag>;
    onClick?: (id: Id) => void;
};

export declare type WidgetSimpleListProps = Props_20;

export declare type WidgetSkeletonProps = {
    header?: {
        title?: string;
        subtitle?: string;
    };
} & (VariantProps<typeof skeletonVariants> | {
    height: "full";
});

export declare const WidgetStrip: ForwardRefExoticComponent<DashboardProps_2 & RefAttributes<HTMLDivElement>> & {
    Skeleton: () => JSX_2.Element;
};

declare type WidgetWidth = "sm" | "md" | "lg";

declare type WithOptionalSorting<Record, Sortings extends SortingsDefinition> = PropertyDefinition_2<Record> & {
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

export { }


declare global {
    interface Window {
        XRay: {
            enable: (filter?: ComponentTypes[]) => void;
            disable: () => void;
        };
    }
}


declare namespace Calendar {
    var displayName: string;
}
