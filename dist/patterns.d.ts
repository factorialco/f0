import { AIMessage } from '@copilotkit/shared';
import { AlertTagCellValue } from './types/alertTag';
import { AlertTagCellValue as AlertTagCellValue_2 } from '../../../ui/value-display/types/alertTag';
import { AmountCellValue } from './types/amount';
import { AmountCellValue as AmountCellValue_2 } from '../../../ui/value-display/types/amount';
import { AnchorHTMLAttributes } from 'react';
import { AriaAttributes } from 'react';
import { AutoFill as AutoFill_2 } from 'react';
import { AvatarListCellValue } from './types/avatarList';
import { AvatarListCellValue as AvatarListCellValue_2 } from '../../../ui/value-display/types/avatarList';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { BarSeriesCellValue } from './types/barSeries';
import { baseColors } from '@factorialco/f0-core';
import { ButtonHTMLAttributes } from 'react';
import { ClassValue } from 'cva';
import { CompanyCellValue } from './types/company';
import { CompanyCellValue as CompanyCellValue_2 } from '../../../ui/value-display/types/company';
import { ComponentProps } from 'react';
import { CompoundCellValue } from './types/compound';
import { CopilotKitProps } from '@copilotkit/react-core';
import { CountryCellValue } from './types/country';
import { DateCellValue } from './types/date';
import { DateCellValue as DateCellValue_2 } from '../../../ui/value-display/types/date';
import { DateFilterOptions } from './DateFilter/DateFilter';
import { default as default_2 } from 'react';
import { DeltaCellValue } from './types/delta';
import { Dispatch } from 'react';
import { DotTagCellValue } from './types/dotTag';
import { DotTagCellValue as DotTagCellValue_2 } from '../../../ui/value-display/types/dotTag';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { f1Colors } from '@factorialco/f0-core';
import { FC } from 'react';
import { FileCellValue } from './types/file';
import { FileCellValue as FileCellValue_2 } from '../../../ui/value-display/types/file';
import { FolderCellValue } from './types/folder';
import { FolderCellValue as FolderCellValue_2 } from '../../../ui/value-display/types/folder';
import { ForwardRefExoticComponent } from 'react';
import { HourDistributionCellValue } from './types/hourDistribution';
import { HTMLAttributeAnchorTarget } from 'react';
import { IconCellValue } from './types/icon';
import { InFilterOptions } from './InFilter/types';
import { JSX as JSX_2 } from 'react';
import { LongTextCellValue } from './types/longText';
import { Message } from '@copilotkit/shared';
import { NumberCellValue } from './types/number';
import { NumberCellValue as NumberCellValue_2 } from '../../../ui/value-display/types/number';
import { NumberFilterOptions } from './NumberFilter/NumberFilter';
import { Observable } from 'zen-observable-ts';
import { PercentageCellValue } from './types/percentage';
import { PersonCellValue } from './types/person';
import { PersonCellValue as PersonCellValue_2 } from '../../../ui/value-display/types/person';
import { ProgressBarCellValue } from './types/progressBar';
import { ProgressBarCellValue as ProgressBarCellValue_2 } from '../../../ui/value-display/types/progressBar';
import * as React_2 from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { SearchFilterOptions } from './SearchFilter/SearchFilter';
import { StatusCellValue } from './types/status';
import { StatusCellValue as StatusCellValue_2 } from '../../../ui/value-display/types/status';
import { SVGProps } from 'react';
import { TagCellValue } from './types/tag';
import { TagCellValue as TagCellValue_2 } from '../../../ui/value-display/types/tag';
import { TagListCellValue } from './types/tagList';
import { TagListCellValue as TagListCellValue_2 } from '../../../ui/value-display/types/tagList';
import { TeamCellValue } from './types/team';
import { TeamCellValue as TeamCellValue_2 } from '../../../ui/value-display/types/team';
import { TextCellValue } from './types/text';
import { TextCellValue as TextCellValue_2 } from '../../../ui/value-display/types/text';
import { ValueDisplayRendererContext as ValueDisplayRendererContext_2 } from '../../../ui/value-display';
import { VariantProps } from 'cva';
import { WithDataTestIdReturnType } from '../../../lib/data-testid';
import { WithDataTestIdReturnType as WithDataTestIdReturnType_2 } from '../../lib/data-testid';

declare type Action = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: F0ButtonProps["variant"];
    disabled?: boolean;
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

export declare type ActionDefinition = DropdownItemSeparator | (Pick<DropdownItemObject, "label" | "icon" | "description" | "critical"> & {
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

declare type ActionProps = {
    buttonType: "gradient" | "internal";
    label: string;
    onClick: () => void;
    isLoading: boolean;
    buttonVariant?: ButtonVariant;
    icon?: IconType;
};

declare type ActionProps_2 = ActionLinkProps | ActionButtonProps;

declare type ActionProps_3 = {
    /**
     * The label of the action
     */
    label: string;
    /**
     * The click handler of the action
     */
    onClick: () => void;
    /**
     * The variant of the action
     * @default "default"
     * @optional
     */
    variant?: "default" | "outline" | "promote";
    /**
     * The icon of the action
     * @optional
     */
    icon?: IconType;
} & ({
    /**
     * The type of the action
     */
    type: "upsell";
    /**
     * The error message of the action
     */
    errorMessage: ErrorMessageProps;
    /**
     * The success message of the action
     */
    successMessage: SuccessMessageProps;
    /**
     * The loading state of the action
     */
    loadingState: LoadingStateProps;
    /**
     * The next steps of the action
     */
    nextSteps: NextStepsProps;
    /**
     * The next steps of the action
     */
    closeLabel: string;
} | {
    /**
     * The type of the action
     */
    type?: "default";
});

declare type ActionSize = (typeof actionSizes)[number];

declare const actionSizes: readonly ["sm", "md", "lg"];

declare type ActionVariant = (typeof actionVariants)[number];

declare const actionVariants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote", "outlinePromote", "ai", "link", "unstyled", "mention"];

declare type AddRowActionsResult = PrimaryActionItemDefinition | PrimaryActionItemDefinition[] | undefined;

/**
 * Credits configuration for the AI chat.
 * Groups all credits-related props into a single object.
 *
 * When provided, a credits button is shown in the chat header.
 */
declare type AiChatCredits = {
    /** Async function to fetch credits usage. Called each time the popover opens. */
    fetchUsage: () => Promise<CreditsUsage>;
    /** URL to the plan upgrade page. When provided, a link is shown in the popover. */
    upgradePlanUrl?: string;
    /** Company name displayed in the popover header. */
    companyName?: string;
    /** Company logo URL displayed in the popover header. */
    companyLogoUrl?: string;
    /** Plan name displayed below the company name (e.g. "Free plan", "Enterprise"). */
    planName?: string;
};

/**
 * Disclaimer configuration for the chat input
 */
declare type AiChatDisclaimer = {
    text: string;
    link?: string;
    linkText?: string;
};

/**
 * Props for the AiChatProvider component
 */
declare type AiChatProviderProps = {
    enabled?: boolean;
    greeting?: string;
    initialMessage?: string | string[];
    welcomeScreenSuggestions?: WelcomeScreenSuggestion[];
    disclaimer?: AiChatDisclaimer;
    /**
     * Enable resizable chat window
     * When enabled, the chat can be resized between 300px and 50% of the screen width
     */
    resizable?: boolean;
    /**
     * The default visualization mode for the chat
     * When set to "fullscreen", the chat starts in fullscreen mode and auto-opens
     * @default "sidepanel"
     */
    defaultVisualizationMode?: VisualizationMode;
    /**
     * When true, prevents switching between visualization modes (hides the expand/collapse button)
     * @default false
     */
    lockVisualizationMode?: boolean;
    /**
     * Enable chat history UI (clickable header title + history dialog).
     * When false (default), the header shows a simple "New Chat" button instead.
     * Set to true only when the backend supports the /copilotkit/chat-history/threads route.
     * @default false
     */
    historyEnabled?: boolean;
    /**
     * Optional footer content rendered below the textarea
     */
    footer?: React.ReactNode;
    /**
     * Optional component rendered in place of the chat UI when voice mode is active.
     */
    VoiceMode?: React.ComponentType;
    /**
     * Async resolver functions for entity references in markdown.
     * Used to fetch profile data for inline entity mentions (hover cards).
     * The consuming app provides these so the chat can resolve entity IDs
     * (e.g. employee IDs) into rich profile data without knowing the API.
     */
    entityResolvers?: EntityResolvers;
    /**
     * Available tool hints that the user can activate to provide intent context
     * to the AI. Renders a selector button next to the send button.
     * Only one tool hint can be active at a time.
     */
    toolHints?: AiChatToolHint[];
    /**
     * Credits configuration. When provided, a credits button is shown in the chat header.
     * Groups fetchUsage, upgradePlanUrl, and company/plan display info.
     */
    credits?: AiChatCredits;
    onThumbsUp?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    onThumbsDown?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    tracking?: AiChatTrackingOptions;
} & Pick<CopilotKitProps, "agent" | "credentials" | "children" | "runtimeUrl" | "showDevConsole" | "threadId" | "headers">;

/**
 * A tool hint that can be activated to prepend invisible context to the user's
 * message, telling the AI about the user's intent (e.g. "generate tables",
 * "data analysis"). Similar to Gemini's tool selector UI.
 *
 * Only one tool hint can be active at a time. It persists across messages
 * until the user explicitly removes it.
 */
declare type AiChatToolHint = {
    /** Unique identifier for this tool hint */
    id: string;
    /** Display label shown in the selector and chip */
    label: string;
    /** Optional icon shown in the selector and chip */
    icon?: IconType;
    /**
     * Prompt text injected as invisible context before the user's message.
     * The AI receives this but the user never sees it in the chat.
     */
    prompt: string;
};

/**
 * Tracking options for the AI chat
 */
declare type AiChatTrackingOptions = {
    onVisibility?: () => void;
    onClose?: () => void;
    onWelcomeSuggestionClick?: (suggestion: WelcomeScreenSuggestion) => void;
    onNewChat?: () => void;
    onMessage?: (message: Message) => void;
};

declare type AiPromotionChatProviderProps = {
    enabled?: boolean;
    greeting?: string;
    title?: string;
    description?: string;
    benefits?: {
        noBoldText: string;
        boldText: string;
    }[];
    actions?: ActionProps[];
    onShow?: () => void;
    onHide?: () => void;
    children: React.ReactNode;
};

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const ApplicationFrame: typeof _ApplicationFrame;

declare function _ApplicationFrame({ children, sidebar, banner, ai, aiPromotion, }: ApplicationFrameProps): JSX_2.Element;

export declare interface ApplicationFrameProps {
    ai?: Omit<AiChatProviderProps, "children">;
    aiPromotion?: Omit<AiPromotionChatProviderProps, "children">;
    banner?: React.ReactNode;
    sidebar: React.ReactNode;
    children: React.ReactNode;
}

declare const Avatar: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: (typeof internalAvatarSizes)[number];
    type?: (typeof internalAvatarTypes)[number];
    color?: (typeof internalAvatarColors)[number];
} & React_2.RefAttributes<HTMLSpanElement>>;

declare type AvatarBadge = ({
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

declare type AvatarSize = (typeof avatarSizes)[number];

declare const avatarSizes: readonly ["xs", "sm", "md", "lg", "xl", "2xl"];

declare type AvatarVariant = DistributiveOmit<({
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

declare const BaseAvatar: ForwardRefExoticComponent<BaseAvatarProps_2 & RefAttributes<HTMLDivElement>>;

declare type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;

declare type BaseAvatarProps_2 = {
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
    /**
     * Optional standalone fetch for CSV export that does NOT affect UI state.
     * When provided, the export action uses this instead of fetchData to avoid
     * side-effects on reactive adapters (e.g. Apollo watchQuery).
     */
    exportFetchData?: (options: Options) => FetchReturn | Promise<FetchReturn>;
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

export declare const BaseTabs: React.FC<TabsProps>;

declare interface BaseTOCItem {
    id: string;
    label: string;
    onClick?: (id: string) => void;
    icon?: IconType;
    disabled?: boolean;
    otherActions?: TOCItemAction[];
}

declare type BreadcrumbBaseItemType = NavigationItem & {
    id: string;
    loading?: boolean;
    label: string;
};

export declare type BreadcrumbItemType = BreadcrumbLoadingItemType | BreadcrumbNavItemType | BreadcrumbSelectItemType;

export declare type BreadcrumbLoadingItemType = Pick<BreadcrumbBaseItemType, "id"> & {
    loading: true;
};

export declare type BreadcrumbNavItemType = BreadcrumbBaseItemType & {
    module?: ModuleId;
};

/**
 * Responsive breadcrumb navigation component that automatically collapses items when space is limited.
 *
 * Features:
 * - Responsive layout that adjusts to container width
 * - Maintains first and last items visible
 * - Collapses middle items into a dropdown when needed
 * - Supports loading states
 * - Animated transitions
 *
 * @example
 * ```tsx
 * <Breadcrumbs
 *   breadcrumbs={[
 *     { id: "home", label: "Home", href: "/" },
 *     { id: "section", label: "Section", href: "/section" },
 *     { id: "page", label: "Current Page" }
 *   ]}
 * />
 * ```
 */
export declare function Breadcrumbs({ breadcrumbs, append }: BreadcrumbsProps): JSX_2.Element;

export declare function BreadcrumbSelect<T extends string, R = unknown>({ ...props }: BreadcrumbSelectProps<T, R>): JSX_2.Element;

export declare type BreadcrumbSelectItemType = BreadcrumbBaseItemType & {
    type: "select";
    searchbox?: boolean;
    externalSearch?: boolean;
    onChange: BreadcrumbSelectProps<string, RecordType>["onChange"];
    value?: string;
    defaultItem?: F0SelectItemObject<string, RecordType>;
} & ({
    source: DataSourceDefinition<RecordType, FiltersDefinition, SortingsDefinition, GroupingDefinition<RecordType>>;
    mapOptions: (item: RecordType) => F0SelectItemProps<string>;
    options?: never;
} | {
    source?: never;
    mapOptions?: never;
    options: F0SelectItemProps<string, RecordType>[];
});

export declare type BreadcrumbSelectProps<T extends string, R = unknown> = F0SelectProps<T, R> & {
    multiple?: false;
};

export declare interface BreadcrumbsProps {
    /** Array of breadcrumb items to display */
    breadcrumbs: BreadcrumbItemType[];
    append?: ReactNode;
}

export declare interface BreadcrumbState {
    visibleCount: number;
    headItem: BreadcrumbItemType | null;
    tailItems: BreadcrumbItemType[];
    collapsedItems: BreadcrumbItemType[];
    isOnly: boolean;
    minWidth: number | undefined;
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
    icon?: IconType;
    id: string;
    keepSelection?: boolean;
    critical?: boolean;
    description?: string;
    disabled?: boolean;
};

export declare type BulkActionsDefinition<R extends RecordType, Filters extends FiltersDefinition> = (selectedItems: Parameters<OnBulkActionCallback<R, Filters>>[1]) => {
    primary?: (BulkActionDefinition | {
        type: "separator";
    })[];
    secondary?: (BulkActionDefinition | {
        type: "separator";
    })[];
} | {
    warningMessage: string;
};

declare type ButtonInternalProps = Pick<ActionProps_2, "size" | "disabled" | "className" | "pressed" | "compact" | "tooltip" | "fontSize"> & DataAttributes & {
    /**
     * The aria-label of the button if not provided title or label will be used.
     */
    "aria-label"?: string;
    /**
     * The variant of the button.
     */
    variant?: ActionButtonVariant;
    /**
     * The filters'counter value to display.
     */
    counterValue?: number;
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

declare type ButtonSize = (typeof buttonSizes)[number];

declare const buttonSizes: readonly ["sm", "md", "lg"];

declare type ButtonType = (typeof buttonTypes)[number];

declare const buttonTypes: readonly ["button", "submit", "reset"];

declare type ButtonVariant = Exclude<(typeof actionButtonVariants)[number], "ai">;

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

declare type CardImageAspectRatio = (typeof cardImageAspectRatios)[number];

declare const cardImageAspectRatios: readonly ["default", "video"];

declare type CardImageFit = (typeof cardImageFits)[number];

declare const cardImageFits: readonly ["contain", "cover", "fit-width", "fit-height", "scale-down"];

declare type CardImageSize = (typeof cardImageSizes)[number];

declare const cardImageSizes: readonly ["xs", "sm", "md", "lg", "xl"];

/**
 * Card metadata property renderers.
 * Each metadata item consists of an icon and a property with its data.
 */
declare type CardMetadataProperty = {
    [K in CardPropertyType]: {
        type: K;
        label: string;
        value: Parameters<(typeof valueDisplayRenderers)[K]>[0];
    };
}[CardPropertyType];

declare type CardPropertyDefinition<T> = PropertyDefinition_2<T> & {
    icon?: IconType;
};

declare const cardPropertyRenderers: {
    readonly text: (args: TextCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly number: (args: NumberCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly date: (args: DateCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly amount: (args: AmountCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly person: (args: PersonCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly company: (args: CompanyCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly team: (args: TeamCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly status: (args: StatusCellValue_2) => default_2.JSX.Element;
    readonly tag: (args: TagCellValue_2) => default_2.JSX.Element;
    readonly avatarList: (args: AvatarListCellValue_2, meta: ValueDisplayRendererContext_2) => default_2.JSX.Element;
    readonly tagList: (args: TagListCellValue_2) => default_2.JSX.Element;
    readonly alertTag: (args: AlertTagCellValue_2) => default_2.JSX.Element;
    readonly dotTag: (args: DotTagCellValue_2) => default_2.JSX.Element;
    readonly file: (args: FileCellValue_2) => default_2.JSX.Element;
    readonly folder: (args: FolderCellValue_2) => default_2.JSX.Element;
    readonly progressBar: (args: ProgressBarCellValue_2, _meta: ValueDisplayRendererContext_2) => default_2.JSX.Element | null;
};

declare type CardPropertyType = keyof typeof cardPropertyRenderers;

declare type CardVisualizationOptions<T, _Filters extends FiltersDefinition, _Sortings extends SortingsDefinition> = {
    cardProperties: ReadonlyArray<CardPropertyDefinition<T>>;
    title: (record: T) => string;
    description?: (record: T) => string;
    avatar?: (record: T) => CardAvatarVariant;
    image?: (record: T) => string;
    imageFit?: CardImageFit;
    imageSize?: CardImageSize;
    imageAspectRatio?: CardImageAspectRatio;
    blurredBackground?: boolean;
    compact?: boolean;
};

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Carousel: WithDataTestIdReturnType<({ children, columns, showArrows, showDots, autoplay, delay, showPeek, doubleColumns, }: CarouselProps) => default_2.JSX.Element>;

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

declare type ColId = string;

/**
 * Props for the Collection component.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template ItemActions - The available actions that can be performed on records
 * @template VisualizationOptions - Additional options for visualizing the collection
 */
export declare type CollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>, VisualizationOptions extends object> = {
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
    /** Indicates the source visualization type */
    fromVisualization?: TableVisualizationType;
} & VisualizationOptions;

declare type CollectionVisualizations<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = {
    table: VisualizacionTypeDefinition<TableCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, TableVisualizationSettings>;
    editableTable: VisualizacionTypeDefinition<EditableTableCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, EditableTableVisualizationSettings>;
    list: VisualizacionTypeDefinition<ListCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    card: VisualizacionTypeDefinition<CardCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    kanban: VisualizacionTypeDefinition<KanbanCollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
};

declare const collectionVisualizations: CollectionVisualizations<RecordType, FiltersDefinition, SortingsDefinition, SummariesDefinition, ItemActionsDefinition<RecordType>, NavigationFiltersDefinition, GroupingDefinition<RecordType>>;

declare type ColumnNumber = 1 | 2 | 3 | 4 | 6;

declare type ColumnWidth = keyof typeof columnWidths | number;

declare const columnWidths: {
    readonly auto: undefined;
    readonly fit: 1;
};

declare interface Company {
    id: string;
    name: string;
    logo?: string;
}

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

declare type CompareToDef = {
    label: string;
    value: {
        delta: number;
        units: GranularityDefinitionKey;
    } | ((value: DateRangeComplete) => DateRangeComplete | DateRangeComplete[]);
};

declare type CompareToDefKey = string;

declare type CountryCode = keyof TranslationsType["countries"];

/**
 * Credits usage data returned by the host app
 */
declare type CreditsUsage = {
    used: number;
    total: number;
};

export declare interface CSVExportOptions {
    filename?: string;
    includeHeaders?: boolean;
    /** Column IDs to exclude from export (respects column visibility settings) */
    hiddenColumnIds?: Set<string>;
    /** Column ID order to apply (respects column reordering settings) */
    columnOrder?: string[];
}

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

declare type CustomEmptyStates = Partial<Record<EmptyStateType, Partial<EmptyState>>>;

export declare type CustomVisualizationProps<Source extends {
    dataAdapter: DataCollectionDataAdapter<any, any, any>;
}> = {
    onSelectItems: OnSelectItemsCallback<InferRecord<Source>, InferFilters<Source>>;
    onLoadData: OnLoadDataCallback<InferRecord<Source>, InferFilters<Source>>;
    onLoadError: OnLoadErrorCallback;
    source: Source;
};

declare type Data<R extends RecordType> = {
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

export declare type DataCollectionBaseFetchOptions<Filters extends FiltersDefinition, NavigationFilters extends NavigationFiltersDefinition> = BaseFetchOptions<Filters> & DataCollectionExtendFetchOptions<NavigationFilters>;

/**
 * Data collection data adapter
 */
export declare type DataCollectionDataAdapter<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition> = BaseDataAdapter<R, Filters, DataCollectionBaseFetchOptions<Filters, NavigationFilters>, BaseResponse<R>> | PaginatedDataAdapter<R, Filters, DataCollectionPaginatedFetchOptions<Filters, NavigationFilters>, PaginatedResponse<R>>;

/**
 * Extended base fetch options for data collection
 */
declare type DataCollectionExtendFetchOptions<NavigationFilters extends NavigationFiltersDefinition> = {
    navigationFilters: NavigationFiltersState<NavigationFilters>;
};

/**
 * Extended base fetch options for data collection
 */
export declare type DataCollectionPaginatedFetchOptions<Filters extends FiltersDefinition, NavigationFilters extends NavigationFiltersDefinition> = PaginatedFetchOptions<Filters> & DataCollectionExtendFetchOptions<NavigationFilters>;

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
export declare type DataCollectionSource<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Summaries extends SummariesDefinition = SummariesDefinition, ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>> = DataSource<R, Filters, Sortings, Grouping> & DataCollectionSourceDefinition<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & {
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
export declare type DataCollectionSourceDefinition<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Summaries extends SummariesDefinition = SummariesDefinition, ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>> = Omit<DataSourceDefinition<R, Filters, Sortings, Grouping>, "dataAdapter"> & {
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
    /** Label for the primary actions dropdown trigger button */
    primaryActionsLabel?: string;
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
    /** Per-visualization filter states, keyed by visualization index.
     *  Only present when visualizations declare per-view filter overrides. */
    visualizationFilters?: Record<string, CurrentFiltersState>;
};

declare type DataCollectionStatusComplete<CurrentFiltersState extends FiltersState<FiltersDefinition>> = DataCollectionStatus<CurrentFiltersState> & {
    settings?: DataCollectionSettings;
};

declare type DataCollectionStorageFeature = (typeof dataCollectionStorageFeatures)[number];

/**
 * The available features of the data collection status storage
 */
declare const dataCollectionStorageFeatures: readonly ["filters", "navigationFilters", "sortings", "grouping", "visualization", "search", "visualizationFilters"];

declare type DataCollectionStorageFeaturesDefinition = ("*" | `all` | `!${DataCollectionStorageFeature}` | `${DataCollectionStorageFeature}`)[];

/**
 * Represents an error that occurred during data fetching
 */
declare interface DataError {
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
    /**
     * When true, selection spans across all pages (cross-page selection).
     * - Selection state persists when navigating between pages
     * - itemStatus includes items from all pages
     *
     * When false (default), selection is scoped to the current page only:
     * - Selection state resets when navigating between pages
     * - itemStatus only includes items from the current page
     */
    allPagesSelection?: boolean;
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
    }) => ChildrenResponse<R> | Promise<ChildrenResponse<R>> | Observable<PromiseState<ChildrenResponse<R>>>;
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
    onSelect?: (value: DatePickerValue | undefined) => void;
    value?: DatePickerValue;
    defaultValue?: DatePickerValue;
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
    weekStartsOn?: WeekStartsOn;
}

export declare type DatePickerValue = {
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

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const DaytimePage: WithDataTestIdReturnType<typeof _DaytimePage>;

declare function _DaytimePage({ children, header, period, embedded, }: DaytimePageProps): JSX_2.Element;

declare namespace _DaytimePage {
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
        pulse?: ComponentProps<typeof F0AvatarPulse>["pulse"];
        onPulseClick?: ComponentProps<typeof F0AvatarPulse>["onPulseClick"];
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

declare const defaultTranslations: {
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
        readonly delete: "Delete";
        readonly copy: "Copy";
        readonly paste: "Paste";
        readonly close: "Close";
        readonly collapse: "Collapse";
        readonly expand: "Expand";
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
        readonly selectAllItems: "Select all {{total}} items";
    };
    readonly status: {
        readonly selected: {
            readonly singular: "Selected";
            readonly plural: "Selected";
            readonly all: "All selected";
            readonly allOnPage: "All {{count}} items on this page are selected";
            readonly selectAllItems: "Select all {{total}} items";
            readonly allItemsSelected: "All {{total}} items selected";
        };
        readonly noItemsSelected: "No items selected";
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
            readonly editableTable: "Editable table view";
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
        readonly editableTable: {
            readonly errors: {
                readonly saveFailed: "Save failed";
            };
            readonly addRow: "Add row";
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
        readonly export: {
            readonly label: "Export to CSV";
            readonly description: "Download all data as a CSV file";
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
        readonly settings: "Settings";
        readonly scrollToBottom: "Scroll to bottom";
        readonly welcome: "Ask or create with One";
        readonly defaultInitialMessage: "How can I help you today?";
        readonly inputPlaceholder: "Ask about time, people, or company info and a lot of other things...";
        readonly stopAnswerGeneration: "Stop generating";
        readonly responseStopped: "You stopped this response";
        readonly sendMessage: "Send message";
        readonly thoughtsGroupTitle: "Reflection";
        readonly resourcesGroupTitle: "Resources";
        readonly thinking: "Thinking...";
        readonly closeDashboard: "Close dashboard";
        readonly unsavedChanges: "Unsaved changes";
        readonly saveChanges: "Save changes";
        readonly discardChanges: "Discard";
        readonly exportTable: "Download table";
        readonly generatedTableFilename: "OneGeneratedTable";
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
        readonly dataDownloadPreview: "Preview {{shown}} of {{total}} rows — download the Excel to see all data.";
        readonly expandChat: "Expand chat";
        readonly collapseChat: "Collapse chat";
        readonly chatHistory: "Chat history";
        readonly noPreviousChats: "No previous conversations";
        readonly newConversation: "New conversation";
        readonly today: "Today";
        readonly yesterday: "Yesterday";
        readonly thisMonth: "This month";
        readonly older: "Older";
        readonly searchChats: "Search conversations...";
        readonly pinnedChats: "Pinned";
        readonly threadOptions: "Thread options";
        readonly pinChat: "Pin chat";
        readonly unpinChat: "Unpin chat";
        readonly deleteChat: "Delete chat";
        readonly ask: "Ask One";
        readonly viewProfile: "View profile";
        readonly tools: "Tools";
        readonly credits: {
            readonly title: "Credits";
            readonly creditsLeft: "{{total}} left";
            readonly monthlyCredits: "Monthly credits";
            readonly creditsError: "Could not load credits";
            readonly upgradePlan: "Upgrade";
            readonly needMoreCredits: "Need more credits?";
        };
        readonly reportCard: {
            readonly reportLabel: "Report";
            readonly openButton: "Open";
        };
        readonly dataDownload: {
            readonly download: "Download {{format}}";
            readonly exportDashboard: "Export dashboard as {{format}}";
            readonly exporting: "Exporting...";
        };
        readonly pong: {
            readonly title: "Pong";
            readonly youWin: "You win!";
            readonly youLose: "You lose!";
            readonly goal: "Goal";
            readonly controls: "← → to move";
            readonly escToExit: "Esc to exit";
        };
        readonly creditWarning: {
            readonly soft: "You're running low on AI credits.";
            readonly getCredits: "Get credits";
            readonly dismiss: "Dismiss";
            readonly messageBanner: {
                readonly title: "This response requires credits";
                readonly description: "Your company has run out of AI credits.";
                readonly actionLabel: "Get credits";
            };
        };
        readonly growth: {
            readonly demoCard: {
                readonly title: "See {{moduleName}} in action";
                readonly actionLabel: "Start demo";
            };
            readonly bookAMeetingCard: {
                readonly title: "Talk with an expert";
                readonly schedule: "Mon-Fri · 09:00-21:00 (CEST)";
                readonly actionLabel: "Book a meeting";
            };
            readonly questionCard: {
                readonly actionLabel: "Next";
                readonly skipLabel: "Skip";
                readonly sendLabel: "Send";
            };
            readonly moduleCard: {
                readonly actionLabel: "Learn more";
            };
            readonly faqCard: {
                readonly title: "Questions before getting started";
            };
        };
    };
    readonly select: {
        readonly noResults: "No results found";
        readonly loadingMore: "Loading...";
        readonly applySelection: "Apply selection";
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
    readonly surveyFormBuilder: {
        readonly actions: {
            readonly actions: "Actions";
            readonly duplicateQuestion: "Duplicate question";
            readonly deleteQuestion: "Delete question";
            readonly duplicateSection: "Duplicate section";
            readonly deleteSection: "Delete section";
            readonly confirmMoveLastQuestion: "Move question";
            readonly cancelMoveLastQuestion: "Cancel";
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
            readonly dropdownSingle: "Dropdown";
            readonly file: "File upload";
            readonly checkbox: "Checkbox";
        };
        readonly selectQuestion: {
            readonly addOption: "Add option";
            readonly newOption: "New option {{number}}";
            readonly markAsCorrect: "Mark as correct";
            readonly remove: "Remove";
            readonly correct: "Correct";
            readonly optionPlaceholder: "Type anything you want here...";
        };
        readonly fileQuestion: {
            readonly uploadButton: "Upload file";
        };
        readonly checkboxQuestion: {
            readonly placeholder: "Provide a label for the checkbox";
        };
        readonly answer: {
            readonly label: "Answer";
            readonly dropdownPlaceholder: "Pick an option";
            readonly textPlaceholder: "Type your answer";
            readonly numericPlaceholder: "Enter a number";
            readonly linkPlaceholder: "https://example.com";
            readonly invalidUrl: "Enter a valid URL";
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
            readonly lastQuestionDialogTitle: "Remove last question from section";
            readonly lastQuestionDialogDescription: "Moving this question will leave the section empty and it will be removed. Do you want to continue?";
        };
    };
    readonly surveyAnsweringForm: {
        readonly actions: {
            readonly submit: "Submit survey";
            readonly cancel: "Cancel";
            readonly next: "Next";
            readonly previous: "Previous";
            readonly expand: "Expand";
            readonly collapse: "Collapse";
        };
        readonly labels: {
            readonly empty: {
                readonly title: "No questions to answer";
                readonly description: "This survey has no questions yet.";
                readonly emoji: "📝";
            };
        };
    };
    readonly richTextEditor: {
        readonly bold: "Bold";
        readonly italic: "Italic";
        readonly underline: "Underline";
        readonly strike: "Strike";
        readonly highlight: "Highlight";
        readonly heading1: "Heading 1";
        readonly heading2: "Heading 2";
        readonly heading3: "Heading 3";
        readonly left: "Left";
        readonly center: "Center";
        readonly right: "Right";
        readonly justify: "Justify";
        readonly bulletList: "Bullet List";
        readonly orderedList: "Ordered List";
        readonly taskList: "Task List";
        readonly codeBlock: "Code Block";
        readonly horizontalRule: "Horizontal Rule";
        readonly quote: "Quote";
        readonly moreOptions: "More Options";
        readonly code: "Code";
        readonly divider: "Divider";
        readonly bullet: "Bullet";
        readonly ordered: "Ordered";
        readonly task: "Task";
        readonly details: "Dropdown";
        readonly video: "Video";
        readonly videoUrlPrompt: "Enter a YouTube or Vimeo URL";
        readonly videoUrlInvalid: "Please enter a valid YouTube or Vimeo URL";
        readonly link: "Link";
        readonly linkPlaceholder: "Enter a link";
        readonly groups: {
            readonly textStyles: "Text Styles";
            readonly lists: "Lists";
            readonly blocks: "Blocks";
        };
        readonly ai: {
            readonly enhanceButtonLabel: "Enhance";
            readonly loadingEnhanceLabel: "Loading...";
            readonly defaultError: "An error occurred while loading";
            readonly closeErrorButtonLabel: "Continue editing";
            readonly acceptChangesButtonLabel: "Accept";
            readonly rejectChangesButtonLabel: "Reject";
            readonly repeatButtonLabel: "Repeat";
            readonly customPromptPlaceholder: "What do you want to do?";
        };
    };
    readonly forms: {
        readonly actionBar: {
            readonly unsavedChanges: "You have changes pending to be saved";
            readonly saving: "Saving...";
            readonly saved: "Your changes have been saved";
            readonly discard: "Discard";
            readonly issues: {
                readonly one: "{{count}} issue";
                readonly other: "{{count}} issues";
            };
        };
        readonly file: {
            readonly dropzone: "Drag and drop a file, or click to select";
            readonly dropzoneActive: "Drop the file here";
            readonly dropzoneMultiple: "Drag and drop files, or click to select";
            readonly acceptedTypes: "Accepted formats: {{types}}";
            readonly remove: "Remove";
            readonly uploading: "Uploading…";
            readonly processing: "Processing…";
            readonly uploadFailed: "Upload failed";
            readonly fileTooLarge: "File exceeds {{maxSize}} MB limit";
            readonly invalidFileType: "File type not accepted. Accepted formats: {{types}}";
        };
        readonly moreInformation: "More information";
        readonly validation: {
            readonly required: "This field is required";
            readonly invalidType: "Invalid value";
            readonly string: {
                readonly email: "Enter a valid email address";
                readonly url: "Enter a valid URL";
                readonly min: "Must be at least {{min}} characters";
                readonly max: "Must be at most {{max}} characters";
            };
            readonly number: {
                readonly min: "Must be at least {{min}}";
                readonly max: "Must be at most {{max}}";
                readonly positive: "Must be a positive number";
                readonly negative: "Must be a negative number";
                readonly integer: "Must be a whole number";
            };
            readonly date: {
                readonly min: "Date must be after {{min}}";
                readonly max: "Date must be before {{max}}";
                readonly invalid: "Enter a valid date";
            };
            readonly array: {
                readonly min: "Select at least {{min}} option";
                readonly max: "Select at most {{max}} options";
            };
            readonly checkbox: {
                readonly mustBeChecked: "This option must be selected";
            };
        };
    };
    readonly wizard: {
        readonly previous: "Previous";
        readonly next: "Continue";
        readonly submit: "Submit";
        readonly stepOf: "Step {{current}} of {{total}}";
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

export declare function downloadAsCSV<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(data: R[], visualization: Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> | undefined, options?: CSVExportOptions): Promise<void>;

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Dropdown: (props: DropdownProps) => JSX_2.Element;

declare type DropdownInternalProps = {
    items: DropdownItem[];
    icon?: IconType;
    size?: F0ButtonProps["size"];
    children?: default_2.ReactNode;
    align?: "start" | "end" | "center";
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    label?: string;
} & DataAttributes_2;

export declare type DropdownItem = DropdownItemObject | DropdownItemSeparator | DropdownItemLabel;

declare type DropdownItem_2 = DropdownItemObject_2 | DropdownItemSeparator_2 | DropdownItemLabel_2;

export declare type DropdownItemLabel = {
    type: "label";
    text: string;
};

declare type DropdownItemLabel_2 = {
    type: "label";
    text: string;
};

export declare type DropdownItemObject = Pick<NavigationItem, "label" | "href"> & {
    type?: "item";
    onClick?: () => void;
    icon?: IconType;
    description?: string;
    critical?: boolean;
    avatar?: AvatarVariant;
};

declare type DropdownItemObject_2 = Pick<NavigationItem_2, "label" | "href"> & {
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

declare type DropdownItemSeparator_2 = {
    type: "separator";
};

export declare type DropdownItemWithoutIcon = Omit<DropdownItemObject, "icon">;

declare const DropdownMenu: React_2.FC<DropdownMenuPrimitive.DropdownMenuProps>;

declare const DropdownMenuItem: React_2.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React_2.RefAttributes<HTMLDivElement>>;

declare type DropdownProps = Omit<DropdownInternalProps, (typeof privateProps_2)[number]> & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
} & WithDataTestIdProps;

/** The edit mode for a column cell in the editable table. */
declare type EditableTableCellEditType = "text" | "number" | "date" | "select" | "multiselect" | "display-only" | "disabled";

declare type EditableTableCollectionProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = CollectionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, EditableTableVisualizationOptions<R, Filters, Sortings, Summaries>>;

/**
 * Column definition for Editable Table.
 *
 * When `editType` is set, the column's `id` is used as the record key to
 * read the initial value from `item[id]` and to merge the updated value
 * back into the item passed to `onCellChange`.
 */
declare type EditableTableColumnDefinition<R extends RecordType, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition> = TableColumnDefinition<R, Sortings, Summaries> & {
    /** Optional placeholder passed to editable inputs (e.g. date cells). */
    inputPlaceholder?: string;
    /**
     * Determines how the cell is rendered in edit mode.
     * Receives the current item and returns the cell type (e.g. `"text"`) or
     * `undefined` to render the cell read-only.
     * The column `id` is used as the record key to read/write the value.
     * When omitted, the cell is always rendered read-only.
     */
    editType?: (item: R) => EditableTableCellEditType | undefined;
    /**
     * Configuration for `"select"` cells. Required when `editType` returns `"select"`.
     * Accepts either static `options` or a `source` + `mapOptions` for async data.
     *
     * If `editType` returns `"select"` but `selectConfig` is missing, the cell
     * falls back to a non-editable display with a `console.warn` at runtime.
     * Type-level enforcement is not possible because `editType` is a per-row
     * function whose return value isn't statically known.
     */
    selectConfig?: SelectCellConfig<R>;
    /**
     * Configuration for `"number"` cells. Accepts constraints (`min`, `max`),
     * stepping (`step`), formatting (`maxDecimals`, `locale`), and units.
     * Falls back to sensible defaults when omitted.
     */
    numberConfig?: NumberCellConfig;
};

declare type EditableTableVisualizationOptions<R extends RecordType, _Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition> = Omit<TableVisualizationOptions<R, _Filters, Sortings, Summaries>, "columns"> & {
    columns: ReadonlyArray<EditableTableColumnDefinition<R, Sortings, Summaries>>;
    /**
     * Called when a cell value changes with the full updated row.
     * Resolve with nothing for success, or `{ columnId: "message" }` to set errors.
     * Rejection sets an error on the edited column.
     */
    onCellChange: (updatedItem: R) => Promise<void | Record<string, string>>;
    /**
     * When provided, renders action buttons at the bottom of the root-level table.
     * Returns a single action, an array of actions, or undefined to hide the row.
     */
    addRowActions?: () => AddRowActionsResult;
    /**
     * Label for the dropdown trigger button when multiple root-level add-row
     * actions are provided. Falls back to the first action's label if omitted.
     */
    addRowActionsLabel?: string;
    /**
     * When provided, renders action buttons at the bottom of each expanded nested row.
     * Receives the parent item whose children the new row will be added to.
     */
    addNestedRowActions?: (parent: R) => AddRowActionsResult;
    /**
     * Label for the dropdown trigger button when multiple nested add-row
     * actions are provided. Falls back to the first action's label if omitted.
     */
    addNestedRowActionsLabel?: string;
};

declare type EditableTableVisualizationSettings = TableVisualizationSettings;

declare type EmptyState = {
    emoji?: string;
    title: string;
    description?: string;
    actions?: ActionProps_3[];
};

declare const emptyStatesTypes: readonly ["no-data", "no-results", "error"];

declare type EmptyStateType = (typeof emptyStatesTypes)[number];

/**
 * Map of async resolver functions keyed by entity type.
 * Each resolver takes an entity ID and returns the profile data
 * needed to render the entity reference hover card.
 *
 * Extensible: add new entity types here as needed (e.g. `team`, `department`).
 */
declare type EntityResolvers = {
    person?: (id: string) => Promise<PersonProfile>;
    /**
     * Search for persons by name query. Used by the @mention autocomplete
     * in the chat input to let users reference specific employees.
     */
    searchPersons?: (query: string) => Promise<PersonProfile[]>;
};

declare type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N ? [...Acc, N][number] : Enumerate<N, [...Acc, Acc["length"]]>;

declare interface ErrorMessageProps {
    title: string;
    description: string;
}

/**
 * Extracts the property keys from a record type.
 * @template RecordType - The type containing the properties to extract
 */
export declare type ExtractPropertyKeys<RecordType> = keyof RecordType;

declare type ExtractVisualizationSettings<T> = T extends {
    settings: {
        default: infer S;
    };
} ? S : never;

declare type F0AvatarCompanyProps = {
    name: string;
    src?: string;
    size?: BaseAvatarProps_2["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby">;

declare type F0AvatarEmojiProps = {
    emoji: string;
    size?: (typeof avatarEmojiSizes)[number];
} & Partial<Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby">>;

declare type F0AvatarFileProps = Omit<React.ComponentPropsWithoutRef<typeof Avatar>, "type" | "size"> & {
    file: FileDef;
    size?: AvatarFileSize;
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby"> & WithDataTestIdProps;

declare type F0AvatarFlagProps = {
    flag: CountryCode | (string & {});
    size?: BaseAvatarProps_2["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby">;

declare type F0AvatarIconProps = {
    icon: IconType;
    size?: (typeof avatarIconSizes)[number];
} & Partial<Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby">>;

declare type F0AvatarPersonProps = {
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
    size?: BaseAvatarProps_2["size"];
    /**
     * The badge to display on the avatar. Can be a module badge or a custom badge.
     */
    badge?: AvatarBadge;
    /**
     * Whether the person is deactivated. If true, the avatar will display an icon instead of the person's name or picture.
     */
    deactivated?: boolean;
} & Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby">;

declare const F0AvatarPulse: {
    ({ firstName, lastName, src, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, pulse, onPulseClick, }: F0AvatarPulseProps): JSX_2.Element;
    displayName: string;
};

declare type F0AvatarPulseProps = {
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
     * The pulse to display on the avatar.
     */
    pulse?: Pulse;
    /**
     * The callback to be called when the pulse is clicked.
     */
    onPulseClick: () => void;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare type F0AvatarTeamProps = {
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
    size?: BaseAvatarProps_2["size"];
    /**
     * The badge to display on the avatar. Can be a module badge or a custom badge.
     */
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby">;

declare type F0ButtonProps = Omit<ButtonInternalProps, (typeof privateProps)[number] | "variant"> & {
    variant?: Exclude<ButtonInternalProps["variant"], "ai">;
};

declare interface F0IconProps extends SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {
    icon: IconType;
    size?: "lg" | "md" | "sm" | "xs";
    state?: "normal" | "animate";
    color?: "default" | "currentColor" | `#${string}` | Lowercase<NestedKeyOf<typeof f1Colors.icon>>;
}

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
    actions?: Action[];
    /** Container element to render the portal content into */
    portalContainer?: HTMLElement | null;
    /**
     * When true, renders the select as a static list without the input trigger.
     * Only displays the dropdown content with max height, border and scroll.
     */
    asList?: boolean;
    /**
     * When true, shows a selection preview panel on the right side of the dropdown
     * for multi-select mode. When false and filters are present, filters use compact mode.
     * @default false
     */
    showPreview?: boolean;
} & WithDataTestIdProps;

declare type F0SelectItemObject<T, R = unknown> = {
    type?: "item";
    value: T;
    label: string;
    description?: string;
    avatar?: AvatarVariant;
    tag?: F0SelectTagProp;
    icon?: IconType;
    item?: R;
    disabled?: boolean;
};

declare type F0SelectItemProps<T, R = unknown> = F0SelectItemObject<T, R> | {
    type: "separator";
};

/**
 * Select component for choosing from a list of options.
 *
 * @template T - The type of the emitted value
 * @template R - The type of the record/item data (used with data source)
 */
declare type F0SelectProps<T extends string, R = unknown> = F0SelectBaseProps<T, R> & // Single select not clearable
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

declare type F0SelectTagProp = string | {
    type: "dot";
    text: string;
    color: NewColor;
} | {
    type: "person";
    name: string;
    src?: string;
};

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0TableOfContent: WithDataTestIdReturnType<typeof _F0TableOfContent>;

declare function _F0TableOfContent(props: TOCProps): JSX_2.Element;

declare type FavoriteMenuItem = ({
    type: "icon";
    icon: IconType;
} | {
    type: "avatar";
    avatar?: AvatarVariant;
}) & {
    tooltip?: string;
} & NavigationItem_2;

declare type FileDef = {
    name: string;
    type: string;
};

/**
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @returns An array of filtered actions
 */
export declare const filterActions: (groups: SecondaryActionGroup[]) => SecondaryActionGroup[];

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
 * Filters the actions based on the enabled property
 * @param actions - The actions to filter
 * @param item - The item to filter the actions for
 * @returns An array of filtered actions
 */
export declare const filterItemActions: <T extends RecordType>(actions: ItemActionsDefinition<T> | undefined, item: T) => ActionDefinition[];

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

export declare type FiltersMode = "default" | "compact" | "simple" | "inline";

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
    /** The key of this filter in the FiltersDefinition (passed to chipLabel for nested label lookups) */
    filterKey?: string;
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
        onFilterChange?: (key: string, value: unknown) => void;
        allFiltersValue?: Record<string, unknown>;
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

declare type FontSize = (typeof fontSizes)[number];

declare const fontSizes: readonly ["sm", "md", "lg"];

declare interface FrameContextType {
    isSmallScreen: boolean;
    isLastToggleInvokedByUser: boolean;
    sidebarState: SidebarState;
    prevSidebarState: SidebarState | null;
    toggleSidebar: (callData?: {
        isInvokedByUser: boolean;
    }) => void;
    setForceFloat: (force: boolean) => void;
}

export declare function generateCSVContent<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(data: R[], visualization: Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> | undefined, options?: CSVExportOptions): string;

/**
 * Get the primaryActionsItems from the primaryActionsDefinition or the actions property
 */
export declare const getPrimaryActions: (primaryActions: PrimaryActionsDefinitionFn | undefined) => PrimaryActionItemDefinition[];

/**
 * Get the secondaryActionsItems from the secondaryActionsDefinition or the actions property
 */
export declare const getSecondaryActions: (secondaryActions: SecondaryActionsDefinition | undefined) => SecondaryActionGroup[];

declare interface GranularityDefinition {
    calendarMode?: CalendarMode;
    calendarView: CalendarView;
    weekStartsOn?: WeekStartsOn;
    label: (viewDate: Date, i18n: TranslationsType, locale?: string) => ReactNode;
    toRangeString: (date: Date | DateRange | undefined | null, i18n: TranslationsType, format?: DateStringFormat) => DateRangeString;
    toRange: <T extends Date | DateRange | undefined | null>(date: T) => T extends Date | DateRange ? DateRangeComplete : T;
    toString: (date: Date | DateRange | undefined | null, i18n: TranslationsType, format?: DateStringFormat, locale?: string) => string;
    toStringMaxWidth: () => number;
    placeholder: () => string;
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
        weekStartsOn?: WeekStartsOn;
    }) => ReactNode;
    add: (date: DateRangeComplete, delta: number) => DateRangeComplete;
    getPrevNext(date: DateRange, options: DateNavigationOptions): PrevNextDateNavigation;
}

declare type GranularityDefinitionKey = keyof typeof granularityDefinitions;

declare const granularityDefinitions: Record<string, GranularityDefinition>;

/**
 * Symbol used to identify the groupId in the data
 */
declare const GROUP_ID_SYMBOL: unique symbol;

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

declare type GroupRecord<RecordType> = {
    key: string;
    label: string | Promise<string>;
    itemCount: number | undefined | Promise<number | undefined>;
    records: RecordType[];
};

declare type HeaderProps = {
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
};

declare type I18nContextType = TranslationsType & {
    t: (key: TranslationKey, args?: Record<string, string | number>) => string;
};

declare const iconSizes: {
    readonly xs: "xs";
    readonly sm: "xs";
    readonly md: "sm";
    readonly lg: "md";
};

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
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

declare type IdStructure = {
    id: string;
    children?: IdStructure[];
};

declare type InferFilters<S> = S extends {
    dataAdapter: DataCollectionDataAdapter<any, infer F, any>;
} ? F : never;

/**
 * Returns the custom visualization props based on the data collection source.
 *
 * @template Source - The data collection source
 */
declare type InferRecord<S> = S extends {
    dataAdapter: DataCollectionDataAdapter<infer R, any, any>;
} ? R : never;

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
    /**
     * Nested children that belong to a different filter key.
     * Enables hierarchical filtering (e.g., office -> space -> desk).
     */
    children?: {
        /** The filter key where child selections are stored in FiltersState */
        filterKey: string;
        /** Child options, which can themselves have children for infinite nesting */
        options: Array<InFilterOptionItem<T>>;
    };
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
    transparent?: boolean;
};

declare type InputFieldSize = (typeof INPUTFIELD_SIZES)[number];

declare type InputFieldStatus = {
    type: Exclude<InputFieldStatusType, "error">;
    message?: string;
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

export declare function Item({ item, counter, isActive, collapsible, isExpanded, onToggleExpanded, sortable, children, onDragOver, onDragLeave, onDrop, canDropInside, currentParentId, justDropped, }: TOCItemProps): JSX_2.Element;

export declare type ItemActionsDefinition<T extends RecordType> = (item: T) => ActionDefinition[] | undefined;

declare type ItemDefinition = {
    title: string;
    description?: string[];
    avatar?: AvatarVariant;
};

export declare function ItemSectionHeader({ item, children, isActive, collapsible, isExpanded, onToggleExpanded, sortable, hideChildrenCounter, canDropInside, onDragOver, onDragLeave, onDrop, currentParentId, draggedItemId, }: TOCItemSectionHeaderProps): JSX_2.Element;

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

/**
 * Represents a single lane configuration with its own filters
 * @template Filters - The available filter configurations for this lane
 */
export declare type Lane<Filters extends FiltersDefinition> = {
    id: string;
    filters: FiltersState<Filters>;
};

declare type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
    disabled?: boolean;
};

/**
 * Group List: Renders the list for a group
 */
declare type ListCollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = CollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, ListVisualizationOptions<Record, Filters, Sortings>>;

declare type ListPropertyDefinition<R, Sortings extends SortingsDefinition> = WithOptionalSorting_2<R, Sortings> & PropertyDefinition_2<R>;

declare type ListVisualizationOptions<R extends RecordType, _Filters extends FiltersDefinition, Sortings extends SortingsDefinition> = {
    itemDefinition: (record: R) => ItemDefinition;
    fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>;
};

declare interface LoadingStateProps {
    label: string;
}

export declare const MAX_EXPANDED_ACTIONS = 2;

export declare function Menu({ tree, onCollapse, onSort, onFavoritesChange, favorites, }: MenuProps): JSX_2.Element;

export declare interface MenuCategory {
    id: string;
    title: string;
    items: MenuItem[];
    isRoot?: boolean;
    isOpen?: boolean;
    isSortable?: boolean;
}

export declare interface MenuItem extends NavigationItem_2 {
    icon: IconType;
    badge?: number;
}

export declare interface MenuProps {
    tree: MenuCategory[];
    favorites?: FavoriteMenuItem[];
    onCollapse?: (category: MenuCategory, isOpen: boolean) => void;
    onSort?: (categories: MenuCategory[]) => void;
    onFavoritesChange?: (favorites: FavoriteMenuItem[]) => void;
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const MobileDropdown: ({ items, children, dataTestId }: DropdownProps) => JSX_2.Element;

declare type ModuleId = keyof typeof modules;

declare const modules: {
    readonly "ai-reports": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly ai_ticketing: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
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
    readonly device_catalog: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
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
    readonly get_started: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly home: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly hub: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly it_management: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly kudos: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly lms: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
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

export declare type NavigationFilter<T, InitialValue = T> = {
    /**
     * Converts the initial value to the correct type for the filter.
     * This is useful for filters that have a complex internal state but the initial value is a simple type, for example a navigation filter. The initial can be a simple date but the internal state converts it to a date range based on the granularity.
     * @param defaultValue - The initial value to convert
     * @param props - The props of the filter
     * @returns The converted value
     */
    valueConverter?: (defaultValue: InitialValue, filterDef: NavigationFilterComponentProps<T>["filter"], i18n: TranslationsType) => T;
    /**
     * Renders the filter component.
     * @param props - The props of the filter
     * @returns The rendered component
     */
    render: (props: NavigationFilterComponentProps<T>) => React.ReactNode;
};

export declare type NavigationFilterComponentProps<T> = {
    filter: NavigationFilterDefinition;
    value: T;
    onChange: (value: T) => void;
};

export declare type NavigationFilterDefinition = DateNavigatorFilterDefinition;

export declare type NavigationFilterDefinitionBase<T> = {
    type: string;
    defaultValue: T;
};

/**
 * Record of navigation filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available navigation filters for a collection.
 * @template Keys - String literal type for filter keys
 */
export declare type NavigationFiltersDefinition<Keys extends string = string> = Record<Keys, NavigationFilterDefinition>;

/**
 * Current state of all navigation filters in a collection.
 * Maps filter keys to their current values.
 * This represents the active filter selections at any given time.
 * @template Definition - Record of filter definitions
 */
export declare type NavigationFiltersState<Definition extends Record<string, NavigationFilterDefinition>> = {
    [K in keyof Definition]?: NavigationFilterValue<Definition[K]>;
};

/**
 * Represents a navigation filter with its current value.
 * @template T - The type of the filter value
 */
export declare type NavigationFilterValue<T> = T extends DateNavigatorFilterDefinition ? DateValue : T extends undefined ? undefined : never;

declare type NavigationItem = Pick<LinkProps, "href" | "exactMatch" | "onClick"> & {
    label: string;
} & DataAttributes_2;

declare type NavigationItem_2 = Pick<LinkProps, "href" | "exactMatch" | "onClick"> & {
    label: string;
} & DataAttributes_2;

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

declare type NewColor = Extract<BaseColor, (typeof tagDotColors)[number]>;

declare type NextDepth<T> = T extends 1 ? 2 : T extends 2 ? 3 : T extends 3 ? 4 : never;

declare interface NextStepsProps {
    title: string;
    items: StepItemProps[];
}

declare type NumberCellConfig = {
    min?: number;
    max?: number;
    step?: number;
    maxDecimals?: number;
    locale?: string;
    units?: string;
};

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

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const OmniButton: WithDataTestIdReturnType_2<typeof _OmniButton>;

declare function _OmniButton({ label, options, hasNewUpdate }: OmniButtonProps): JSX_2.Element;

declare interface OmniButtonProps {
    label: string;
    options: Option_2[];
    hasNewUpdate?: boolean;
}

export declare type OnBulkActionCallback<Record extends RecordType, Filters extends FiltersDefinition> = (...args: [
action: BulkAction,
...Parameters<OnSelectItemsCallback<Record, Filters>>
]) => void;

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const OneDataCollection: OneDataCollectionGeneric;

/**
 * Generic component type so consumers can use <F0Select<T, R> />.
 * Preserves dataTestId and OneDataCollection
 */
declare type OneDataCollectionGeneric = <R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(props: OneDataCollectionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> & WithDataTestIdProps) => ReactElement | null;

/**
 * A component that renders a collection of data with filtering and visualization capabilities.
 * It consumes a data source (created by useDataCollectionSource) and displays it through one or more visualizations.
 *
 * DataCollection is separated from useDataCollectionSource to:
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
declare type OneDataCollectionProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = {
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    visualizations: ReadonlyArray<Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>>;
    onSelectItems?: OnSelectItemsCallback<R, Filters>;
    onBulkAction?: OnBulkActionCallback<R, Filters>;
    emptyStates?: CustomEmptyStates;
    onTotalItemsChange?: (totalItems: number) => void;
    fullHeight?: boolean;
    /** Function to handle state change */
    onStateChange?: (state: DataCollectionStatusComplete<FiltersState<Filters>>) => void;
    /** Key for the data collection settings and state, must be unique for each data collection and contain the version e.g. "employees/v1"
     */
    id?: string;
    /** Storage for the data collection settings and state: use false to disable the storage */
    storage?: false | {
        /** Features for the data collection storage , for example you can disable the storage for the data collection filters state
         * You can use "*" for all features and ! to disable a feature
         *
         * For example:
         * - "*" - will use all storage features (empty "" means all)
         * - "filters" - will use only the storage for the data collection filters state
         * - "filters, sortings" - will use the storage for the data collection filters and sortings state
         * - "*, !filters" - will not use the storage for the data collection filters state
         * - "!filters, sortings" - will not use the storage for the data collection filters and sortings state
         *
         */
        features?: DataCollectionStorageFeaturesDefinition;
    };
    /**
     * @deprecated removes the horizontal padding from the data collection
     */
    tmpFullWidth?: boolean;
};

export declare const OneDateNavigator: typeof _OneDateNavigator;

declare function _OneDateNavigator({ onSelect, defaultValue, presets, granularities, hideNavigation, hideGoToCurrent, compareTo, defaultCompareTo, onCompareToChange, value, dataTestId, ...props }: OneDatePickerProps): JSX_2.Element;

export declare interface OneDatePickerProps extends Omit<DatePickerPopupProps, "children">, WithDataTestIdProps {
    hideNavigation?: boolean;
    hideGoToCurrent?: boolean;
}

export declare const OneFilterPicker: <Definition extends FiltersDefinition>(props: OneFilterPickerRootProps<Definition> & {
    dataTestId?: string;
}) => ReactElement | null;

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
    /** Display counter for the applied filters */
    displayCounter?: boolean;
};

export declare type OnLoadDataCallback<Record extends RecordType, Filters extends FiltersDefinition> = (data: {
    totalItems: number | undefined;
    filters: FiltersState<Filters>;
    search: string | undefined;
    isInitialLoading: boolean;
    data: Record[];
}) => void;

export declare type OnLoadErrorCallback = (error: DataError) => void;

export declare type OnSelectItemsCallback<R extends RecordType, Filters extends FiltersDefinition> = (selectedItems: SelectedItemsDetailedStatus<R, Filters> & {
    byLane?: Record<string, SelectedItemsDetailedStatus<R, Filters>>;
}, clearSelectedItems: () => void, handleSelectAll?: (checked: boolean) => void) => void;

declare interface Option_2 {
    title?: string;
    description?: string;
    href?: string;
    target?: string;
    onClick?: (event: any) => unknown;
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Page: WithDataTestIdReturnType<typeof _Page>;

declare function _Page({ children, header, embedded }: PageProps): JSX_2.Element;

declare namespace _Page {
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

export declare function PageHeader({ module, statusTag, breadcrumbs, actions, embedded, navigation, productUpdates, favorites, oneSwitchTooltip, oneSwitchAutoOpen, }: HeaderProps): JSX_2.Element;

declare interface PageProps {
    children?: React.ReactNode;
    header?: React.ReactNode;
    embedded?: boolean;
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
    /**
     * Optional standalone fetch for CSV export that does NOT affect UI state.
     * When provided, the export action uses this instead of fetchData to avoid
     * side-effects on reactive adapters (e.g. Apollo watchQuery).
     */
    exportFetchData?: (options: Options) => FetchReturn | Promise<FetchReturn>;
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

/**
 * Profile data for a person entity (employee), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
declare type PersonProfile = {
    id: string | number;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    jobTitle?: string;
};

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

export declare type PrimaryActionItemDefinition = Pick<DropdownItemObject, "label" | "icon" | "description"> & {
    loading?: boolean;
    onClick?: () => void | Promise<void>;
    disabled?: boolean;
};

/**
 * Defines the structure and configuration of the primary action that can be performed on a collection.
 * @returns An action
 */
export declare type PrimaryActionsDefinitionFn = () => PrimaryActionItemDefinition | PrimaryActionItemDefinition[] | undefined;

declare const privateProps: readonly ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style"];

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
    /**
     * Function that determines if the property should be hidden for a given item.
     * Should return true if the property should be hidden, false otherwise.
     */
    hide?: (item: T) => boolean;
};

declare type Pulse = (typeof pulses)[number];

declare const pulses: readonly ["superNegative", "negative", "neutral", "positive", "superPositive"];

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

declare type ReferenceType = "none" | "striped";

declare type RendererDefinition = ValueDisplayRendererDefinition;

declare type ResolvedRecordType<R> = R extends RecordType ? R : RecordType;

export declare function SearchBar({ onClick, placeholder, shortcut, ...props }: SearchBarProps): JSX_2.Element;

declare interface SearchBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder: string;
    shortcut?: string[];
}

export declare type SearchFilterDefinition = BaseFilterDefinition<"search">;

declare type SearchOptions = {
    /** Whether search is enabled */
    enabled: boolean;
    /** Whether search is synchronous */
    sync?: boolean;
    /** Debounce time for search */
    debounceTime?: number;
};

export declare type SecondaryActionGroup = {
    label?: string;
    items: SecondaryActionItem[];
};

/**
 * Defines the structure and configuration of secondary actions that can be performed on a collection.
 * @returns An array of actions
 */
export declare type SecondaryActionItem = Pick<DropdownItemObject, "label" | "icon" | "description" | "critical"> & {
    enabled?: boolean;
    hideLabelWhenExpanded?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void | Promise<void>;
};

export declare type SecondaryActionsDefinition = {
    expanded: Enumerate<typeof MAX_EXPANDED_ACTIONS>;
    actions: () => SecondaryActionsItems | undefined;
} | (() => SecondaryActionsItems | undefined);

export declare type SecondaryActionsItems = SecondaryActionItem[] | SecondaryActionItem[][] | SecondaryActionGroup[];

/**
 * Configuration for select-type cells. Mirrors F0Select's two data modes:
 * - Static `options` (array or per-row function)
 * - Async `source` (DataSourceDefinition) with `mapOptions`
 */
declare type SelectCellConfig<R extends RecordType> = {
    placeholder?: string;
    clearable?: boolean;
    showSearchBox?: boolean;
    defaultItem?: (item: R) => F0SelectItemObject<string, RecordType> | undefined;
} & ({
    options: F0SelectItemProps<string>[] | ((item: R) => F0SelectItemProps<string>[]);
    source?: never;
    mapOptions?: never;
} | {
    source: Omit<DataSourceDefinition<RecordType, FiltersDefinition, SortingsDefinition, GroupingDefinition<RecordType>>, "selectable" | "grouping" | "defaultGrouping" | "currentGrouping" | "fetchChildren" | "itemsWithChildren" | "childrenCount">;
    mapOptions: (record: RecordType) => F0SelectItemProps<string, RecordType>;
    options?: never;
});

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

export declare const Sidebar: WithDataTestIdReturnType<typeof _Sidebar>;

declare function _Sidebar({ header, body, footer, onFooterDropdownClick, }: SidebarProps): JSX_2.Element;

export declare function SidebarFooter({ user, options, showActivityButton, activityButtonShortcut, onActivityButtonClick, onDropdownClick, hasActivityUpdates, }: SidebarFooterProps): JSX_2.Element;

declare interface SidebarFooterProps {
    user: {
        firstName: string;
        lastName: string;
        avatarUrl?: string;
    };
    showActivityButton?: boolean;
    hasActivityUpdates?: boolean;
    activityButtonShortcut?: string[];
    onActivityButtonClick?: () => void;
    onDropdownClick?: () => void;
    options: DropdownItem_2[];
}

export declare function SidebarHeader({ companies, selected, onChange, withNotification, additionalOptions, isLoading, }: SidebarHeaderProps): JSX_2.Element;

export declare type SidebarHeaderProps = CompanySelectorProps & SidebarIconProps;

declare type SidebarIconProps = {
    isExpanded: boolean;
    onClick?: () => void;
};

declare interface SidebarProps {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
    onFooterDropdownClick?: () => void;
}

declare type SidebarState = "locked" | "unlocked" | "hidden";

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

declare const statuses: readonly ["neutral", "info", "positive", "warning", "critical"];

declare type StatusVariant = Variant;

declare interface StepItemProps {
    text: string;
    isCompleted?: boolean;
}

declare interface SuccessMessageProps {
    title: string;
    description: string;
    buttonLabel?: string;
    buttonOnClick?: () => void;
}

export declare type SummariesDefinition = Record<string, {
    type: SummaryType;
}>;

/**
 * Type helper to extract keys from a SummaryDefinition
 */
export declare type SummaryKey<Definition extends SummariesDefinition> = Definition extends readonly string[] ? Definition[number] : keyof Definition;

export declare type SummaryType = "sum";

export declare type TabItem = {
    label: string;
    index?: boolean;
    variant?: "default" | "upsell";
    onClick?: () => void;
} & DataAttributes_2 & ({
    href: string;
} | {
    id: string;
});

declare type TableCollectionProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = CollectionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, TableVisualizationOptions<R, Filters, Sortings, Summaries>>;

declare type TableColumnDefinition<R extends RecordType, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition> = WithOptionalSorting<R, Sortings> & Pick<ComponentProps<typeof TableHead>, "hidden" | "info" | "infoIcon" | "sticky" | "width"> & {
    /**
     * Optional summary configuration for this column
     * References a key in the Summaries definition, similar to how sorting works
     */
    summary?: SummaryKey<Summaries>;
    /**
     * Placeholder to display in this column's summary-row cell when no summary
     * value is rendered. This also applies to columns without a `summary`
     * definition. Takes precedence over the row-level `summaryPlaceholder`.
     */
    summaryPlaceholder?: string;
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
    /**
     * Assigns this column to a header group. Columns with the same
     * headerGroupId are visually grouped under a shared spanning header.
     * The label for each group is provided via `headerGroupLabels` in
     * the visualization options.
     */
    headerGroupId?: string;
};

declare function TableHead({ children, width, sortState, onSortClick, info, infoIcon, sticky, hidden, align, className, colSpan, }: TableHeadProps): JSX_2.Element;

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
    /**
     * The number of columns this header cell should span
     */
    colSpan?: number;
}

declare type TableVisualizationOptions<R extends RecordType, _Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition> = {
    /**
     * The columns to display
     */
    columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>;
    /**
     * Placeholder to display in summary-row cells when no summary value is
     * rendered. This also applies to columns without a `summary` definition.
     * Column-level `summaryPlaceholder` takes precedence.
     * @default "-"
     */
    summaryPlaceholder?: string;
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
    /**
     * Marks one or more rows as reference rows.
     * Reference rows are rendered with a slanted background pattern across the full row.
     */
    referenceRowType?: (item: R) => ReferenceType;
    /**
     * Labels for header groups. Keys are headerGroupId values used in column
     * definitions, values are the display labels rendered in the spanning header row.
     */
    headerGroupLabels?: Record<string, string>;
};

declare type TableVisualizationSettings = {
    order?: ColId[];
    hidden?: ColId[];
};

export declare type TableVisualizationType = "table" | "editableTable";

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Tabs: WithDataTestIdReturnType<FC<TabsProps> & {
Skeleton: FC<Pick<TabsProps, "secondary">>;
}>;

export declare interface TabsProps {
    tabs: TabItem[];
    activeTabId?: string;
    setActiveTabId?: Dispatch<string>;
    secondary?: boolean;
    embedded?: boolean;
}

export declare const TabsSkeleton: React.FC<Pick<TabsProps, "secondary">>;

declare const tagDotColors: ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];

export declare type TOCItem<Depth extends 1 | 2 | 3 | 4 = 1> = BaseTOCItem & {
    children?: NextDepth<Depth> extends never ? never : TOCItem<NextDepth<Depth>>[];
};

export declare type TOCItemAction = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    critical?: boolean;
    /** Show a check icon to indicate this item is selected */
    selected?: boolean;
} | {
    type: "separator";
} | {
    type: "label";
    text: string;
} | {
    type: "toggle";
    label: string;
    icon?: IconType;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
} | {
    type: "submenu";
    label: string;
    icon?: IconType;
    /** Currently selected option label shown inline */
    selectedLabel?: string;
    children: TOCItemAction[];
};

declare interface TOCItemProps {
    item: TOCItem;
    counter?: number;
    isActive?: boolean;
    sortable: boolean;
    collapsible?: boolean;
    isExpanded?: boolean;
    onToggleExpanded?: (id: string) => void;
    children?: ReactNode;
    onDragOver?: (itemId: string, position: "before" | "after" | "inside") => void;
    onDragLeave?: () => void;
    onDrop?: (itemId: string, position: "before" | "after" | "inside") => void;
    canDropInside?: boolean;
    currentParentId?: string | null;
    draggedItemId?: string | null;
    justDropped?: boolean;
}

declare interface TOCItemSectionHeaderProps {
    item: TOCItem;
    children?: ReactNode;
    isActive?: boolean;
    collapsible?: boolean;
    isExpanded?: boolean;
    onToggleExpanded?: (id: string) => void;
    sortable: boolean;
    hideChildrenCounter?: boolean;
    canDropInside?: boolean;
    onDragOver?: (itemId: string, position: "before" | "after" | "inside") => void;
    onDragLeave?: () => void;
    onDrop?: (itemId: string, position: "before" | "after" | "inside") => void;
    currentParentId?: string | null;
    draggedItemId?: string | null;
}

export declare interface TOCProps {
    /** Optional title displayed at the top of the menu */
    title?: string;
    items: TOCItem[];
    className?: string;
    activeItem?: string;
    collapsible?: boolean;
    sortable?: boolean;
    onReorder?: (reorderedIds: IdStructure[]) => void;
    showSearchBox?: boolean;
    searchPlaceholder?: string;
    hideChildrenCounter?: boolean;
    /** Enable vertical scrolling when content overflows (default: true) */
    scrollable?: boolean;
}

declare type TranslationKey = Join<PathsToStringProps<typeof defaultTranslations>, ".">;

declare type TranslationShape<T> = {
    [K in keyof T]: T[K] extends string ? string : T[K] extends Record<string, string | Record<string, unknown>> ? TranslationShape<T[K]> : never;
};

declare type TranslationsType = TranslationShape<typeof defaultTranslations>;

export declare type UseDataCollectionData<R extends RecordType> = UseDataCollectionDataReturn<R> & {
    summaries?: R;
};

export declare function useDataCollectionData<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>(source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActionsDefinition<R>, NavigationFilters, Grouping>, options?: UseDataOptions<R, Filters>): UseDataCollectionData<R>;

/**
 * Hook return type for useData
 */
declare type UseDataCollectionDataReturn<R extends RecordType> = UseDataReturn<R> & {
    summaries?: R;
};

export declare const useDataCollectionSource: <R extends RecordType = RecordType, FiltersSchema extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Summaries extends SummariesDefinition = SummariesDefinition, ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition = NavigationFiltersDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>>(source: DataCollectionSourceDefinition<R, FiltersSchema, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>, deps?: ReadonlyArray<unknown>) => DataCollectionSource<R, FiltersSchema, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;

/**
 * Hook options for useData
 */
declare interface UseDataOptions<R extends RecordType, Filters extends FiltersDefinition> {
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
declare interface UseDataReturn<R extends RecordType> {
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

export declare function useExportAction<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>>({ source, currentVisualization, filename, enabled, }: UseExportActionProps<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>): SecondaryActionItem;

declare interface UseExportActionProps<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> {
    source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    currentVisualization: Visualization<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping> | undefined;
    filename?: string;
    /** When false the hook returns a disabled no-op export action for
     *  collections that don't use export. Due to the Rules of Hooks, internal
     *  state, callbacks, and i18n are still initialized. Defaults to `true`. */
    enabled?: boolean;
}

export declare const useInfiniteScrollPagination: (paginationInfo: PaginationInfo | null, isLoading: boolean, isLoadingMore: boolean, loadMore: () => void) => {
    loadingIndicatorRef: RefObject<HTMLTableCellElement>;
};

export declare function useSidebar(): FrameContextType;

declare type ValueDisplayRendererContext = {
    visualization: ValueDisplayVisualizationType;
    i18n: TranslationsType;
    tableAlign?: ValueDisplayTableAlignment;
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
    readonly text: (args: TextCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly longText: (args: LongTextCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly number: (args: NumberCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly date: (args: DateCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly amount: (args: AmountCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly compound: (args: CompoundCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly avatarList: (args: AvatarListCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly status: (args: StatusCellValue) => JSX_2.Element;
    readonly alertTag: (args: AlertTagCellValue) => JSX_2.Element;
    readonly person: (args: PersonCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly percentage: (args: PercentageCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element | null;
    readonly progressBar: (args: ProgressBarCellValue, _meta: ValueDisplayRendererContext) => JSX_2.Element | null;
    readonly barSeries: (args: BarSeriesCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly hourDistribution: (args: HourDistributionCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly company: (args: CompanyCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly team: (args: TeamCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly tag: (args: TagCellValue) => JSX_2.Element;
    readonly dotTag: (args: DotTagCellValue) => JSX_2.Element;
    readonly tagList: (args: TagListCellValue) => JSX_2.Element;
    readonly icon: (args: IconCellValue, meta: ValueDisplayRendererContext) => JSX_2.Element;
    readonly file: (args: FileCellValue) => JSX_2.Element;
    readonly folder: (args: FolderCellValue) => JSX_2.Element;
    readonly country: (args: CountryCellValue, context: ValueDisplayRendererContext) => JSX_2.Element;
    readonly delta: (args: DeltaCellValue) => JSX_2.Element;
};

declare type ValueDisplayTableAlignment = "left" | "right";

declare type ValueDisplayVisualizationType = "table" | "card" | "list" | (string & {});

declare type Variant = (typeof statuses)[number];

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

/**
 * Represents a visualization configuration for displaying collection data.
 * Supports different visualization types (card, table, or custom) with their respective options.
 *
 * @template R - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 * @template ItemActions - The actions type extending Item ActionsDefinition
 */
declare type Visualization<R extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<R>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<R>> = ({
    /** Card-based visualization type */
    type: "card";
    /** Configuration options for card visualization */
    options: CardVisualizationOptions<R, Filters, Sortings>;
} & VisualizationFilterOverrides<Filters>) | ({
    /** Kanban-based visualization type */
    type: "kanban";
    /** Configuration options for kanban visualization */
    options: KanbanVisualizationOptions<R, Filters, Sortings>;
} & VisualizationFilterOverrides<Filters>) | ({
    /** Table-based visualization type */
    type: "table";
    /** Configuration options for table visualization */
    options: TableVisualizationOptions<R, Filters, Sortings, Summaries>;
} & VisualizationFilterOverrides<Filters>) | ({
    /** Editable table-based visualization type */
    type: "editableTable";
    /** Configuration options for editable table visualization */
    options: EditableTableVisualizationOptions<R, Filters, Sortings, Summaries>;
} & VisualizationFilterOverrides<Filters>) | ({
    /** List-based visualization type */
    type: "list";
    /** Configuration options for list visualization */
    options: ListVisualizationOptions<R, Filters, Sortings>;
} & VisualizationFilterOverrides<Filters>) | ({
    /** Human-readable label for the visualization */
    label: string;
    /** Icon to represent the visualization in UI */
    icon: IconType;
    /** Custom visualization type */
    type: "custom";
    /** Custom component to render the visualization */
    component: (props: {
        onSelectItems: OnSelectItemsCallback<R, Filters>;
        onLoadData: OnLoadDataCallback<R, Filters>;
        onLoadError: OnLoadErrorCallback;
        source: DataCollectionSource<R, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping>;
    }) => JSX.Element;
} & VisualizationFilterOverrides<Filters>);

/**
 * Optional per-visualization filter and preset overrides.
 * When provided on a visualization, these override the global source filters/presets
 * for that specific view, and the view maintains its own independent filter state.
 *
 * @template Filters - The filters type extending FiltersDefinition
 */
export declare type VisualizationFilterOverrides<Filters extends FiltersDefinition> = {
    /** Override which filters are available when this visualization is active.
     *  If not provided, the global source filters are used.
     *  Can be a subset of the source filters definition. */
    filters?: Partial<Filters>;
    /** Preset configuration used only when this visualization is active.
     *  These replace the global source presets for this visualization. */
    presets?: PresetsDefinition<Filters>;
};

/**
 * Visualization mode for the AI chat
 */
declare type VisualizationMode = "sidepanel" | "fullscreen" | "canvas";

declare type VisualizationSettings = {
    [K in keyof typeof collectionVisualizations]: ExtractVisualizationSettings<(typeof collectionVisualizations)[K]>;
};

declare const WeekStartDay: {
    readonly Sunday: 0;
    readonly Monday: 1;
    readonly Tuesday: 2;
    readonly Wednesday: 3;
    readonly Thursday: 4;
    readonly Friday: 5;
    readonly Saturday: 6;
};

declare type WeekStartsOn = (typeof WeekStartDay)[keyof typeof WeekStartDay];

/**
 * Welcome screen suggestion item
 */
declare type WelcomeScreenSuggestion = {
    icon: IconType;
    message: string;
    prompt?: string;
};

declare type WithDataTestIdProps = {
    dataTestId?: string;
};

declare type WithGroupId<RecordType> = RecordType & {
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

export { }


declare global {
    interface Window {
        XRay: {
            enable: (filter?: ComponentTypes[]) => void;
            disable: () => void;
        };
    }
}


declare namespace _DaytimePage {
    var displayName: string;
}


declare namespace _Page {
    var displayName: string;
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
        aiBlock: {
            insertAIBlock: (data: AIBlockData, config: AIBlockConfig) => ReturnType;
            executeAIAction: (actionType: string, config: AIBlockConfig) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        enhanceHighlight: {
            setEnhanceHighlight: (from: number, to: number) => ReturnType;
            clearEnhanceHighlight: () => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        moodTracker: {
            insertMoodTracker: (data: MoodTrackerData) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        transcript: {
            insertTranscript: (data: TranscriptData) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        videoEmbed: {
            setVideoEmbed: (options: {
                src: string;
            }) => ReturnType;
        };
    }
}


declare namespace Calendar {
    var displayName: string;
}


declare namespace _DaytimePage {
    var displayName: string;
}


declare namespace _Page {
    var displayName: string;
}
