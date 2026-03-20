import { AgentState } from '@livekit/components-react';
import { AIMessage } from '@copilotkit/shared';
import { AssistantMessageProps } from '@copilotkit/react-ui';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ClassValue } from 'cva';
import { ComponentProps } from 'react';
import { Context } from 'react';
import { CopilotKitProps } from '@copilotkit/react-core';
import { DateFilterOptions } from './DateFilter/DateFilter';
import { f1Colors } from '@factorialco/f0-core';
import { ForwardRefExoticComponent } from 'react';
import { InFilterOptions } from './InFilter/types';
import { JSX as JSX_2 } from 'react';
import { LocalAudioTrack } from 'livekit-client';
import { Message } from '@copilotkit/shared';
import { MessagesProps } from '@copilotkit/react-ui';
import { NumberFilterOptions } from './NumberFilter/NumberFilter';
import { Observable } from 'zen-observable-ts';
import * as React_2 from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { RemoteAudioTrack } from 'livekit-client';
import { SearchFilterOptions } from './SearchFilter/SearchFilter';
import { SVGProps } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { TrackReferenceOrPlaceholder } from '@livekit/components-react';
import { VariantProps } from 'cva';

export declare function A({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX_2.Element;

export declare type ActionItemStatus = (typeof actionItemStatuses)[number];

export declare const actionItemStatuses: readonly ["inProgress", "executing", "completed"];

/* Excluded from this release type: AgentState */

export declare type AggregationType = "count" | "sum" | "avg" | "min" | "max" | "countDistinct";

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
export declare type AiChatProviderProps = {
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
 * Return value type for the useAiChat hook
 */
declare type AiChatProviderReturnValue = {
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    shouldPlayEntranceAnimation: boolean;
    setShouldPlayEntranceAnimation: React.Dispatch<React.SetStateAction<boolean>>;
    tmp_setAgent: (agent?: string) => void;
    placeholders: string[];
    setPlaceholders: React.Dispatch<React.SetStateAction<string[]>>;
    /**
     * The initial message to display in the chat
     */
    initialMessage?: string | string[];
    setInitialMessage: React.Dispatch<React.SetStateAction<string | string[] | undefined>>;
    welcomeScreenSuggestions: WelcomeScreenSuggestion[];
    setWelcomeScreenSuggestions: React.Dispatch<React.SetStateAction<WelcomeScreenSuggestion[]>>;
    onThumbsUp?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    onThumbsDown?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    tracking?: AiChatTrackingOptions;
    /**
     * Clear/reset the chat conversation
     */
    clear: () => void;
    /* Excluded from this release type: setClearFunction */
    /**
     * Title of the currently loaded thread, or null for new conversations
     */
    currentThreadTitle: string | null;
    /**
     * Load a thread by ID and set its title in the header
     */
    loadThread: (threadId: string, title: string) => void;
    /* Excluded from this release type: setLoadThreadFunction */
    /** Whether a thread's messages are currently being fetched */
    isLoadingThread: boolean;
    /* Excluded from this release type: setIsLoadingThread */
    /**
     * Send a message to the chat
     * @param message - The message content as a string, or a full Message object
     */
    sendMessage: (message: string | Message) => void;
    /* Excluded from this release type: setSendMessageFunction */
    /**
     * Current width of the chat window (for resizable mode)
     */
    chatWidth: number;
    setChatWidth: React.Dispatch<React.SetStateAction<number>>;
    /**
     * Reset the chat width to the default value (360px)
     */
    resetChatWidth: () => void;
    /**
     * The current visualization mode of the chat
     */
    visualizationMode: VisualizationMode;
    /**
     * Set the visualization mode
     */
    setVisualizationMode: React.Dispatch<React.SetStateAction<VisualizationMode>>;
    /**
     * When true, prevents switching between visualization modes
     */
    lockVisualizationMode: boolean;
    historyEnabled: boolean;
    /**
     * Optional footer content rendered below the textarea
     */
    footer?: React.ReactNode;
    /**
     * Set the footer content. Use this to update the footer from outside the provider (e.g. per page/route).
     */
    setFooter: React.Dispatch<React.SetStateAction<React.ReactNode | undefined>>;
} & Pick<AiChatState, "greeting" | "agent" | "disclaimer" | "resizable" | "entityResolvers" | "toolHints"> & {
    /** The current canvas content, or null when canvas is closed */
    canvasContent: CanvasContent | null;
    /** The dashboard config from the current canvas content, or null */
    canvasDashboard: ChatDashboardConfig | null;
    /** Open the canvas panel with the given content */
    openCanvas: (content: CanvasContent) => void;
    /** Close the canvas panel and restore the previous visualization mode */
    closeCanvas: () => void;
    /** The currently active tool hint, or null if none is selected */
    activeToolHint: AiChatToolHint | null;
    /** Set the active tool hint (pass null to clear) */
    setActiveToolHint: React.Dispatch<React.SetStateAction<AiChatToolHint | null>>;
    /** Get a saved dashboard config by toolCallId (returns updated config after user edits) */
    getSavedDashboardConfig: (toolCallId: string) => ChatDashboardConfig | undefined;
    /** Save an updated dashboard config keyed by toolCallId */
    updateDashboardConfig: (toolCallId: string, config: ChatDashboardConfig) => void;
};

/**
 * Internal state for the AiChat provider
 */
declare interface AiChatState {
    greeting?: string;
    enabled: boolean;
    agent?: string;
    initialMessage?: string | string[];
    welcomeScreenSuggestions?: WelcomeScreenSuggestion[];
    disclaimer?: AiChatDisclaimer;
    resizable?: boolean;
    defaultVisualizationMode?: VisualizationMode;
    lockVisualizationMode?: boolean;
    historyEnabled?: boolean;
    footer?: React.ReactNode;
    entityResolvers?: EntityResolvers;
    toolHints?: AiChatToolHint[];
    placeholders?: string[];
    setPlaceholders?: React.Dispatch<React.SetStateAction<string[]>>;
    onThumbsUp?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    onThumbsDown?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    tracking?: AiChatTrackingOptions;
}

/**
 * A tool hint that can be activated to prepend invisible context to the user's
 * message, telling the AI about the user's intent (e.g. "generate tables",
 * "data analysis"). Similar to Gemini's tool selector UI.
 *
 * Only one tool hint can be active at a time. It persists across messages
 * until the user explicitly removes it.
 */
export declare type AiChatToolHint = {
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

/**
 * AI Chat translations type
 */
export declare type AiChatTranslations = TranslationShape_2<typeof aiTranslations>;

export declare function AiChatTranslationsProvider({ children, translations, }: AiChatTranslationsProviderProps): JSX.Element;

/**
 * Props for the AiChatTranslationsProvider component
 */
export declare interface AiChatTranslationsProviderProps {
    children: React.ReactNode;
    translations: AiChatTranslations;
}

/**
 * Default AI chat translations
 */
export declare const aiTranslations: {
    ai: {
        openChat: string;
        closeChat: string;
        startNewChat: string;
        scrollToBottom: string;
        welcome: string;
        defaultInitialMessage: string;
        inputPlaceholder: string;
        stopAnswerGeneration: string;
        responseStopped: string;
        sendMessage: string;
        thoughtsGroupTitle: string;
        resourcesGroupTitle: string;
        thinking: string;
        closeDashboard: string;
        exportTable: string;
        generatedTableFilename: string;
        feedbackModal: {
            positive: {
                title: string;
                label: string;
                placeholder: string;
            };
            negative: {
                title: string;
                label: string;
                placeholder: string;
            };
        };
        dataDownloadPreview: string;
        expandChat: string;
        collapseChat: string;
        chatHistory: string;
        noPreviousChats: string;
        newConversation: string;
        today: string;
        yesterday: string;
        thisMonth: string;
        older: string;
        searchChats: string;
        pinnedChats: string;
        threadOptions: string;
        pinChat: string;
        unpinChat: string;
        deleteChat: string;
        ask: string;
        viewProfile: string;
        tools: string;
        reportCard: {
            reportLabel: string;
            openButton: string;
        };
        dataDownload: {
            download: string;
        };
        unsavedChanges: string;
        saveChanges: string;
        discardChanges: string;
    };
};

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

declare type AvatarVariant = ({
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

/**
 * Base data adapter configuration for non-paginated collections
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations
 */
declare type BaseDataAdapter<R extends RecordType, Filters extends FiltersDefinition, Options extends BaseFetchOptions<Filters>, FetchReturn = BaseResponse<R>> = {
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
declare type BaseFetchOptions<Filters extends FiltersDefinition> = {
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
declare type BasePaginatedResponse<R> = BaseResponse<R> & {
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
declare type BaseResponse<R> = {
    records: R[];
    summaries?: R;
};

export declare function Blockquote({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>): JSX_2.Element;

declare type CalendarMode = "single" | "range";

declare type CalendarView = "day" | "month" | "year" | "week" | "quarter" | "halfyear";

/**
 * Discriminated union for canvas panel content.
 * Expand this union to support new content types in the canvas.
 */
export declare type CanvasContent = {
    type: "dashboard";
    title: string;
    config: ChatDashboardConfig;
    apiConfig: {
        baseUrl: string;
        headers: Record<string, string>;
    };
    toolCallId?: string;
};

export declare interface ChartComputation {
    datasetId: string;
    xAxis: string;
    yAxis: string;
    aggregation: AggregationType;
    series?: string;
    sortBy?: "value" | "category";
    sortOrder?: "asc" | "desc";
    limit?: number;
}

export declare interface ChatDashboardBarChartConfig extends ChatDashboardChartConfigBase {
    type: "bar";
    orientation?: "vertical" | "horizontal";
    stacked?: boolean;
}

export declare type ChatDashboardChartConfig = ChatDashboardBarChartConfig | ChatDashboardLineChartConfig | ChatDashboardFunnelChartConfig | ChatDashboardRadarChartConfig | ChatDashboardPieChartConfig | ChatDashboardGaugeChartConfig | ChatDashboardHeatmapChartConfig;

declare interface ChatDashboardChartConfigBase {
    showLegend?: boolean;
    showGrid?: boolean;
    showLabels?: boolean;
    valueFormat?: FormatPreset;
}

export declare interface ChatDashboardChartItem extends ChatDashboardItemBase {
    type: "chart";
    chart: ChatDashboardChartConfig;
    computation: ChartComputation | RadarComputation | PieComputation | GaugeComputation | HeatmapComputation;
}

export declare interface ChatDashboardCollectionItem extends ChatDashboardItemBase {
    type: "collection";
    columns: ChatDashboardColumn[];
    computation: CollectionComputation;
}

export declare interface ChatDashboardColumn {
    /** Column key — must match a key in each row object */
    id: string;
    /** Display header label */
    label: string;
    /** Optional fixed width in pixels */
    width?: number;
}

/**
 * Complete dashboard configuration received via `displayDashboard`.
 * Contains fetchSpecs that describe how to obtain data server-side —
 * no raw data is included. Fully JSON-serializable.
 */
export declare interface ChatDashboardConfig {
    /** Dashboard title displayed in the canvas header and chat report card */
    title: string;
    /** Filter definitions — keys become filter IDs */
    filters?: Record<string, ChatDashboardFilterDefinition>;
    /** Ordered list of dashboard items with computation specs */
    items: ChatDashboardItem[];
    /** Fetch specs for server-side data retrieval, keyed by datasetId */
    fetchSpecs: Record<string, DashboardFetchSpec>;
}

export declare interface ChatDashboardFilterDefinition {
    type: "in";
    label: string;
    column: string;
    datasetId: string;
}

export declare interface ChatDashboardFunnelChartConfig {
    type: "funnel";
    sort?: "descending" | "ascending" | "none";
    orient?: "horizontal" | "vertical";
    labelPosition?: "inside" | "outside";
    showLegend?: boolean;
    showLabels?: boolean;
    showConversion?: boolean;
    valueFormat?: FormatPreset;
}

declare interface ChatDashboardGaugeChartConfig {
    type: "gauge";
    min?: number;
    max?: number;
    showValue?: boolean;
    valueFormat?: FormatPreset;
}

declare interface ChatDashboardHeatmapChartConfig {
    type: "heatmap";
    min?: number;
    max?: number;
    showLabels?: boolean;
    valueFormat?: FormatPreset;
}

export declare type ChatDashboardItem = ChatDashboardChartItem | ChatDashboardMetricItem | ChatDashboardCollectionItem;

declare interface ChatDashboardItemBase extends DashboardItemBase {
    /** Source attribution shown as a subtitle (e.g. "Based on 8 feedbacks from 3 evaluators") */
    sourceDescription?: string;
}

export declare interface ChatDashboardLineChartConfig extends ChatDashboardChartConfigBase {
    type: "line";
    lineType?: "linear" | "smooth" | "step";
    showArea?: boolean;
    showDots?: boolean;
}

export declare type ChatDashboardMetricFormat = MetricFormat;

export declare interface ChatDashboardMetricItem extends ChatDashboardItemBase {
    type: "metric";
    format?: ChatDashboardMetricFormat;
    decimals?: number;
    computation: MetricComputation;
}

declare interface ChatDashboardPieChartConfig {
    type: "pie";
    innerRadius?: number;
    showLegend?: boolean;
    showLabels?: boolean;
    showPercentage?: boolean;
    valueFormat?: FormatPreset;
}

declare interface ChatDashboardRadarChartConfig extends ChatDashboardChartConfigBase {
    type: "radar";
    showArea?: boolean;
}

export declare const ChatSpinner: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;

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
    avatar: AvatarVariant;
} | {
    icon?: never;
    avatar?: never;
});

export declare interface CollectionComputation {
    datasetId: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    limit?: number;
}

declare type CountryCode = keyof TranslationsType["countries"];

/**
 * CSS RGB color string type
 * @example 'rgb(255, 0, 0)' or 'rgb(255,0,0)'
 */
export declare type CSSRgbString = `rgb(${number}, ${number}, ${number})` | `rgb(${number},${number},${number})`;

export declare interface DashboardFetchSpec {
    fetch: Array<{
        toolId: string;
        args: Record<string, unknown>;
    }>;
    query: string | null;
    columnLabels?: Record<string, string>;
}

declare interface DashboardItemBase {
    /** Unique key for React reconciliation and identity */
    id: string;
    /** Widget title displayed in the header */
    title: string;
    /** Optional description below the title */
    description?: string;
    /** Number of grid columns this item spans (1–12). */
    colSpan?: number;
    /** Number of grid rows this item spans. */
    rowSpan?: number;
    /** Grid column position (0-based). When set, skip auto-packing. */
    x?: number;
    /** Grid row position (0-based). When set, skip auto-packing. */
    y?: number;
    /**
     * Whether this item receives dashboard-level filters in its fetchData.
     * When false, fetchData receives an empty object.
     * @default true
     */
    useDashboardFilters?: boolean;
    /** Item-level filter definitions. Renders a compact filter bar within the card. */
    itemFilters?: FiltersDefinition;
    /** Initial values for item-level filters. */
    defaultItemFilters?: FiltersState<FiltersDefinition>;
}

/**
 * Combined type for all possible data adapter configurations
 * @template R - The type of records in the collection
 * @template Filters - The available filter configurations
 */
declare type DataAdapter<R extends RecordType, Filters extends FiltersDefinition> = BaseDataAdapter<R, Filters, BaseFetchOptions<Filters>, BaseResponse<R>> | PaginatedDataAdapter<R, Filters, PaginatedFetchOptions<Filters>, PaginatedResponse<R>>;

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
declare type DataSourceDefinition<R extends RecordType = RecordType, Filters extends FiltersDefinition = FiltersDefinition, Sortings extends SortingsDefinition = SortingsDefinition, Grouping extends GroupingDefinition<R> = GroupingDefinition<R>> = {
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

declare type DateRange = {
    from: Date;
    to?: Date;
};

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
        readonly reportCard: {
            readonly reportLabel: "Report";
            readonly openButton: "Open";
        };
        readonly dataDownload: {
            readonly download: "Download {{format}}";
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

export declare function Em({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>): JSX_2.Element;

/**
 * Generic entity reference renderer for custom `<entity-ref>` HTML tags
 * embedded in AI chat markdown output.
 *
 * Dispatches to type-specific renderers based on the `type` attribute.
 * Falls back to rendering children as plain text for unknown types.
 *
 * Usage in markdown (via rehype-raw):
 *   <entity-ref type="person" id="123">Ana García</entity-ref>
 */
export declare function EntityRef({ type, id, children, }: {
    type?: string;
    id?: string;
    children?: ReactNode;
}): JSX_2.Element;

/**
 * Map of async resolver functions keyed by entity type.
 * Each resolver takes an entity ID and returns the profile data
 * needed to render the entity reference hover card.
 *
 * Extensible: add new entity types here as needed (e.g. `team`, `department`).
 */
export declare type EntityResolvers = {
    person?: (id: string) => Promise<PersonProfile>;
    /**
     * Search for persons by name query. Used by the @mention autocomplete
     * in the chat input to let users reference specific employees.
     */
    searchPersons?: (query: string) => Promise<PersonProfile[]>;
};

export declare const F0ActionItem: ({ title, status, inGroup }: F0ActionItemProps) => JSX_2.Element;

/**
 * Props for the F0ActionItem component
 */
export declare interface F0ActionItemProps {
    /**
     * The title text displayed next to the status icon
     */
    title: string;
    /**
     * Current status of the action item
     */
    status?: "inProgress" | "executing" | "completed";
    /**
     * Whether the action item is part of a group
     */
    inGroup?: boolean;
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0AiChat: () => JSX_2.Element | null;

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0AiChatProvider: ({ enabled, greeting, initialMessage, welcomeScreenSuggestions, disclaimer, resizable, defaultVisualizationMode, lockVisualizationMode, historyEnabled, footer, entityResolvers, toolHints, onThumbsUp, onThumbsDown, children, agent, tracking, ...copilotKitProps }: AiChatProviderProps) => JSX_2.Element;

export declare const F0AiChatTextArea: ({ submitLabel, inProgress, onSend, onStop, placeholders, defaultPlaceholder, autoFocus, entityResolvers, toolHints, activeToolHint, onActiveToolHintChange, }: F0AiChatTextAreaProps) => JSX_2.Element;

/**
 * Props for the F0AiChatTextArea component
 */
export declare interface F0AiChatTextAreaProps {
    /**
     * Whether the chat is currently processing a message
     */
    inProgress: boolean;
    /**
     * Callback when the user sends a message
     */
    onSend: (message: string) => void;
    /**
     * Callback when the user stops the current generation
     */
    onStop?: () => void;
    /**
     * Custom label for the submit button
     */
    submitLabel?: string;
    /**
     * Array of placeholder strings to cycle through with typewriter effect.
     * If multiple placeholders are provided, they will animate in a cycle.
     * If a single placeholder is provided, it will be displayed statically.
     */
    placeholders?: string[];
    /**
     * Default placeholder text when no placeholders are provided or as fallback
     */
    defaultPlaceholder?: string;
    /**
     * Whether the textarea should autofocus on mount
     * @default true
     */
    autoFocus?: boolean;
    /**
     * Entity resolvers for @mention autocomplete and entity reference rendering.
     * When `searchPersons` is provided, typing @ in the textarea opens an
     * autocomplete popover to mention employees.
     */
    entityResolvers?: EntityResolvers;
    /**
     * Available tool hints that the user can activate.
     * Renders a selector button to the left of the send button.
     */
    toolHints?: AiChatToolHint[];
    /**
     * The currently active tool hint, or null if none is selected.
     */
    activeToolHint?: AiChatToolHint | null;
    /**
     * Callback when the active tool hint changes (selection or removal).
     */
    onActiveToolHintChange?: (toolHint: AiChatToolHint | null) => void;
}

export declare const F0AiCollapsibleMessage: ({ icon, title, children, }: F0AiCollapsibleMessageProps) => JSX_2.Element;

/**
 * Props for the F0AiCollapsibleMessage component
 */
export declare interface F0AiCollapsibleMessageProps {
    /**
     * Icon to display in the collapsible trigger
     */
    icon: IconType;
    /**
     * Title text for the collapsible trigger
     */
    title: string;
    /**
     * Content to show when expanded
     */
    children: ReactNode;
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0AiFullscreenChat: () => JSX_2.Element | null;

export declare class F0AiMask {
    readonly element: HTMLElement;
    private canvas;
    private options;
    private running;
    private disposed;
    private startTime;
    private lastTime;
    private rafId;
    private glr;
    private observer?;
    constructor(options?: MaskOptions);
    start(): void;
    pause(): void;
    dispose(): void;
    resize(width: number, height: number, ratio?: number): void;
    /**
     * Automatically resizes the canvas to match the dimensions of the given element.
     * @note using ResizeObserver
     */
    autoResize(sourceElement: HTMLElement): void;
    fadeIn(): Promise<void>;
    fadeOut(): Promise<void>;
    private checkGLError;
    private getGLErrorName;
    private setupGL;
    private render;
}

export declare function F0AuraVoiceAnimation({ size, state, color, colorShift, audioTrack, themeMode, className, ref, ...props }: F0AuraVoiceAnimationProps & ComponentProps<"div"> & VariantProps<typeof F0AuraVoiceAnimationVariants>): JSX_2.Element;

export declare interface F0AuraVoiceAnimationProps {
    className?: string;
    size?: "icon" | "sm" | "md" | "lg" | "xl";
    state?: AgentState;
    color?: string;
    colorShift?: number;
    themeMode?: "dark" | "light";
    audioTrack?: LocalAudioTrack | RemoteAudioTrack | TrackReferenceOrPlaceholder;
}

declare const F0AuraVoiceAnimationVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "icon" | "xl" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type F0AvatarCompanyProps = {
    name: string;
    src?: string;
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare type F0AvatarEmojiProps = {
    emoji: string;
    size?: (typeof avatarEmojiSizes)[number];
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;

declare type F0AvatarFileProps = Omit<React.ComponentPropsWithoutRef<typeof Avatar>, "type" | "size"> & {
    file: FileDef;
    size?: AvatarFileSize;
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby"> & WithDataTestIdProps;

declare type F0AvatarFlagProps = {
    flag: CountryCode | (string & {});
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare type F0AvatarIconProps = {
    icon: IconType;
    size?: (typeof avatarIconSizes)[number];
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;

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
    size?: BaseAvatarProps["size"];
    /**
     * The badge to display on the avatar. Can be a module badge or a custom badge.
     */
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

/**
 * Compact card shown inline in the AI chat to represent a generated
 * dashboard report. Uses F0Card with an icon avatar, the dashboard
 * title/description, and an item summary in metadata. Clicking the
 * card triggers `onView` to open the canvas panel.
 *
 * Subscribes to the external `savedDashboardConfigStore` via
 * `useSyncExternalStore` so it re-renders when the user edits the
 * dashboard layout and saves — independently of React context.
 */
export declare function F0ChatReportCard({ config: originalConfig, onView, toolCallId, }: F0ChatReportCardProps): JSX_2.Element;

export declare namespace F0ChatReportCard {
    var displayName: string;
}

export declare interface F0ChatReportCardProps {
    /** The original dashboard config from the agent */
    config: ChatDashboardConfig;
    /** Callback when the user clicks the card to view the report */
    onView: (config: ChatDashboardConfig) => void;
    /** Tool call ID used to look up saved (edited) dashboard configs */
    toolCallId?: string;
}

/**
 * Component that renders an optional markdown preview followed by
 * a dropdown button with "Download Excel" as the primary action and
 * "Download CSV" as a secondary option. Files are generated client-side
 * from the raw dataset provided by the agent.
 */
export declare const F0DataDownload: ({ markdown, filename, dataset, }: F0DataDownloadProps) => JSX_2.Element;

/**
 * Inline dataset for client-side file generation (Excel / CSV).
 * Sent by the agent with the raw query results.
 */
export declare type F0DataDownloadDataset = {
    /**
     * Column headers in display order.
     */
    columns: string[];
    /**
     * Array of row objects keyed by column name.
     */
    rows: Record<string, unknown>[];
    /**
     * Total number of rows returned by the query (before truncation).
     * Used together with previewCount to render the preview note.
     */
    totalCount?: number;
    /**
     * Number of rows shown in the markdown preview table.
     * Used together with totalCount to render the preview note.
     */
    previewCount?: number;
    /**
     * Map of raw column names to human-readable labels in the user's language.
     * Used for Excel/CSV headers. Falls back to the raw column name when absent.
     */
    columnLabels?: Record<string, string>;
};

/**
 * Props for the F0DataDownload component.
 *
 * Renders an optional markdown preview/description followed by
 * "Download Excel" and "Download CSV" buttons. The component generates
 * the files client-side from the provided dataset.
 */
export declare type F0DataDownloadProps = {
    /**
     * Optional markdown content to display above the download buttons.
     * Typically a 5-row preview table generated by the agent.
     */
    markdown?: string;
    /**
     * Descriptive filename (without extension) for the downloaded files.
     * Generated by the AI to reflect the query content in the user's language.
     */
    filename?: string;
    /**
     * Raw dataset for client-side Excel and CSV generation.
     */
    dataset: F0DataDownloadDataset;
};

export declare const F0HILActionConfirmation: ({ text, confirmationText, onConfirm, cancelText, onCancel, }: F0HILActionConfirmationProps) => JSX_2.Element;

/**
 * Props for the F0HILActionConfirmation component
 */
export declare type F0HILActionConfirmationProps = {
    /**
     * Optional descriptive text shown above the action buttons
     */
    text?: string;
    /**
     * Text displayed on the confirmation button
     */
    confirmationText: string;
    /**
     * Callback fired when the confirmation button is clicked
     */
    onConfirm: () => void;
    /**
     * Text displayed on the cancel button
     */
    cancelText: string;
    /**
     * Callback fired when the cancel button is clicked
     */
    onCancel: () => void;
};

declare interface F0IconProps extends SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {
    icon: IconType;
    size?: "lg" | "md" | "sm" | "xs";
    state?: "normal" | "animate";
    color?: "default" | "currentColor" | `#${string}` | Lowercase<NestedKeyOf<typeof f1Colors.icon>>;
}

export declare const f0MarkdownRenderers: NonNullable<AssistantMessageProps["markdownTagRenderers"]>;

/**
 * Markdown renderers without the table download button.
 * Use this when the parent component already provides its own download controls.
 */
export declare const f0MarkdownRenderersSimple: NonNullable<AssistantMessageProps["markdownTagRenderers"]>;

export declare const F0MessageSources: ({ sources }: F0MessageSourcesProps) => JSX_2.Element | null;

/**
 * Props for the F0MessageSources component
 */
export declare type F0MessageSourcesProps = {
    /**
     * Array of sources to display
     */
    sources: F0Source[];
};

export declare const F0OneIcon: ForwardRefExoticComponent<Omit<F0OneIconProps, "ref"> & RefAttributes<SVGSVGElement>>;

/**
 * Props for the F0OneIcon component
 */
export declare interface F0OneIconProps extends SVGProps<SVGSVGElement> {
    /**
     * Whether the icon should spin
     */
    spin?: boolean;
    /**
     * Whether the icon is in hover state
     */
    hover?: boolean;
    /**
     * Background color override
     */
    background?: string;
    /**
     * Size of the icon
     */
    size?: "xs" | "sm" | "md" | "lg";
}

export declare const F0OneSwitch: ({ className, disabled, onVisible, tooltip, autoOpen, onToggle, }: F0OneSwitchProps) => JSX_2.Element | null;

/**
 * Props for the F0OneSwitch component
 */
export declare type F0OneSwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
    /** Callback when the switch is visible */
    onVisible?: () => void;
    /** Callback when the switch is toggled */
    onToggle?: () => void;
    /** Custom text shown in the tooltip when the chat is closed */
    tooltip?: {
        whenDisabled?: string;
        whenEnabled?: string;
    };
    /** When true, the tooltip is opened automatically for 3 seconds*/
    autoOpen?: boolean;
};

/**
 * Source object for message sources
 */
export declare type F0Source = {
    /**
     * Title of the source
     */
    title: string;
    /**
     * Optional link URL
     */
    link?: string;
    /**
     * Optional icon name (from @/icons/app)
     */
    icon?: string;
    /**
     * Whether to open link in new tab
     */
    targetBlank?: boolean;
};

export declare const F0Thinking: ({ messages, title }: F0ThinkingProps) => JSX_2.Element;

/**
 * Props for the F0Thinking component
 */
export declare type F0ThinkingProps = {
    /**
     * Array of thinking/reflection messages to display
     */
    messages: Message[];
    /**
     * Whether the thinking process is currently active
     */
    isActive?: boolean;
    /**
     * Custom render function for messages
     */
    RenderMessage?: MessagesProps["RenderMessage"];
    /**
     * Custom assistant message component
     */
    AssistantMessage?: MessagesProps["AssistantMessage"];
    /**
     * Whether the chat is currently in progress
     */
    inProgress?: boolean;
    /**
     * Custom title for the thinking section
     */
    title?: string;
};

declare type FileDef = {
    name: string;
    type: string;
};

/**
 * Union of all available filter types.
 * Used to define possible filter configurations in a collection.
 * @template T - Type of values for the InFilterDefinition
 */
declare type FilterDefinition = FilterDefinitionsByType[keyof FilterDefinitionsByType];

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
 * Record of filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available filters for a collection.
 * @template Keys - String literal type for filter keys
 */
declare type FiltersDefinition<Keys extends string = string> = Record<Keys, FilterDefinition>;

/**
 * Current state of all filters in a collection.
 * Maps filter keys to their current values.
 * This represents the active filter selections at any given time.
 * @template Definition - Record of filter definitions
 */
declare type FiltersState<Definition extends Record<string, FilterDefinition>> = {
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
declare type FilterValue<T extends FilterDefinition> = T extends InFilterDefinition<infer U> ? U[] : T extends SearchFilterDefinition ? string : T extends DateFilterDefinition ? DateRange | Date | undefined : T extends NumberFilterDefinition ? NumberFilterValue | undefined : never;

/**
 * A preset formatting instruction the LLM can specify instead of a
 * real formatter function. The wrapper component maps these to actual
 * `(value: number) => string` functions at render time.
 */
export declare type FormatPreset = {
    type: "number";
} | {
    type: "currency";
    currency?: string;
} | {
    type: "percent";
} | {
    type: "compact";
};

export declare const FullscreenChatContext: Context<FullscreenChatContextType>;

/**
 * Context type for fullscreen chat state
 */
declare type FullscreenChatContextType = {
    inProgress: boolean;
    setInProgress: (value: boolean) => void;
};

declare interface GaugeComputation {
    datasetId: string;
    aggregation: AggregationType;
    column?: string;
    min?: number;
    max?: number;
    name?: string;
}

/**
 * Symbol used to identify the groupId in the data
 */
declare const GROUP_ID_SYMBOL: unique symbol;

/**
 * Defines the structure and configuration of a grouping options for a data source.
 * @template RecordType - The type of records in the collection
 */
declare type GroupingDefinition<R extends RecordType> = {
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
declare type GroupingState<R extends RecordType, Grouping extends GroupingDefinition<R>> = {
    field: keyof Grouping["groupBy"];
    order?: SortOrder;
} | undefined;

export declare function H1({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>): JSX_2.Element;

export declare function H2({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>): JSX_2.Element;

export declare function H3({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>): JSX_2.Element;

declare interface HeatmapComputation {
    datasetId: string;
    xAxis: string;
    yAxis: string;
    valueColumn: string;
    aggregation: AggregationType;
}

export declare function Hr({ ...props }: React.HTMLAttributes<HTMLHRElement>): JSX_2.Element;

declare type I18nContextType = TranslationsType & {
    t: (key: TranslationKey, args?: Record<string, string | number>) => string;
};

export declare function I18nProvider({ children, translations, }: I18nProviderProps): JSX.Element;

export declare interface I18nProviderProps {
    children: ReactNode;
    translations: TranslationsType;
}

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

declare function Image_2({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>): JSX_2.Element;
export { Image_2 as Image }

declare type InFilterDefinition<T = string | number, R extends RecordType = RecordType> = BaseFilterDefinition<"in"> & {
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
declare type InfiniteScrollPaginatedResponse<TRecord> = BasePaginatedResponse<TRecord> & {
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

declare type Join<T extends string[], D extends string> = T extends [] ? never : T extends [infer F] ? F : T extends [infer F, ...infer R] ? F extends string ? `${F}${D}${Join<Extract<R, string[]>, D>}` : never : string;

export declare function Li({ children, ...props }: React.HTMLAttributes<HTMLLIElement>): JSX_2.Element;

export declare type MaskOptions = {
    /**
     * The width of the Mask element.
     * @default 600
     */
    width?: number;
    /**
     * The height of the Mask element.
     * @default 600
     */
    height?: number;
    /**
     * Device pixel ratio multiplier; can be less than 1.
     */
    ratio?: number;
    /**
     * Color mode. Upon what background color will the element be displayed.
     * - dark: optimize for dark background. (clean and luminous glow. may be invisible on light backgrounds.)
     * - light: optimize for light background. (high saturation glow. not elegant on dark backgrounds.)
     * @default light
     * @note It's not possible to make a style that works well on both light and dark backgrounds.
     * @note If you do not know the background color, start with light.
     */
    mode?: "dark" | "light";
    /**
     * Color list.
     * @default ['rgb(229, 25, 67)', 'rgb(229, 86, 25)', 'rgb(229, 25, 67)', 'rgb(161, 173, 229)']
     * @note The color list must be specified with 4 colors in an array, formatted as rgb color strings.
     */
    colors?: [CSSRgbString, CSSRgbString, CSSRgbString, CSSRgbString];
    /**
     * The width of the border.
     * @default 8
     */
    borderWidth?: number;
    /**
     * The width of the glow effect.
     * @default 200
     *
     */
    glowWidth?: number;
    /**
     * The border radius.
     * @default 8
     */
    borderRadius?: number;
    /**
     * Custom class names for wrapper and canvas elements.
     */
    classNames?: string;
    /**
     * Custom styles for wrapper and canvas elements.
     */
    styles?: Partial<CSSStyleDeclaration>;
};

export declare interface MetricComputation {
    datasetId: string;
    aggregation: AggregationType;
    column?: string;
}

/** How to format the metric value */
declare type MetricFormat = {
    type: "number";
} | {
    type: "currency";
    currency?: string;
} | {
    type: "percent";
} | {
    type: "custom";
    suffix?: string;
    prefix?: string;
};

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

declare type NumberFilterDefinition = BaseFilterDefinition<"number"> & {
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

export declare function Ol({ children, ...props }: React.HTMLAttributes<HTMLOListElement>): JSX_2.Element;

export declare type OneIconSize = (typeof oneIconSizes)[number];

export declare const oneIconSizes: readonly ["xs", "sm", "md", "lg"];

export declare function P({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX_2.Element;

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
declare type PageBasedPaginatedResponse<TRecord> = BasePaginatedResponse<TRecord> & {
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
declare type PaginatedDataAdapter<R extends RecordType, Filters extends FiltersDefinition, Options extends PaginatedFetchOptions<Filters> = PaginatedFetchOptions<Filters>, FetchReturn = PaginatedResponse<R>> = {
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

declare type PaginatedFetchOptions<Filters extends FiltersDefinition> = BaseFetchOptions<Filters> & {
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
declare type PaginatedResponse<TRecord> = PageBasedPaginatedResponse<TRecord> | InfiniteScrollPaginatedResponse<TRecord>;

/**
 * Defines the available pagination types used throughout the application.
 * - "pages": Represents traditional page-based navigation with numbered pages.
 * - "infinite-scroll": Represents continuous loading of content as the user scrolls.
 * - "no-pagination": Represents a collection that does not use pagination.
 */
declare type PaginationType = "pages" | "infinite-scroll" | "no-pagination";

declare type PathsToStringProps<T> = T extends string ? [] : {
    [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
}[Extract<keyof T, string>];

/**
 * Profile data for a person entity (employee), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export declare type PersonProfile = {
    id: string | number;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    jobTitle?: string;
};

declare interface PieComputation {
    datasetId: string;
    nameColumn: string;
    valueColumn: string;
    aggregation: AggregationType;
    sortBy?: "value" | "name";
    sortOrder?: "asc" | "desc";
    limit?: number;
}

export declare function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>): JSX_2.Element;

/**
 * Defines preset filter configurations that can be applied to a collection.
 * @template Filters - The available filter configurations
 */
declare type PresetDefinition<Filters extends FiltersDefinition> = {
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

declare type PresetsDefinition<Filters extends FiltersDefinition> = PresetDefinition<Filters>[];

declare interface PromiseState<T> {
    loading: boolean;
    error?: Error | null;
    data?: T | null;
}

declare interface RadarComputation {
    datasetId: string;
    seriesColumn: string;
    indicators: Array<{
        column: string;
        label: string;
        max?: number;
    }>;
    limit?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}

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
declare type RecordType = Record<string, unknown>;

declare type SearchFilterDefinition = BaseFilterDefinition<"search">;

declare type SearchOptions = {
    /** Whether search is enabled */
    enabled: boolean;
    /** Whether search is synchronous */
    sync?: boolean;
    /** Debounce time for search */
    debounceTime?: number;
};

/**
 * Represents the selected items by id
 */
declare type SelectedItemsState<R extends RecordType> = {
    allSelected: boolean | "indeterminate";
    items: Map<SelectedItemState<R>["id"], SelectedItemState<R>>;
    groups: Map<SelectedState["id"], SelectedState>;
};

declare type SelectedItemState<R extends RecordType> = SelectedState & {
    item?: WithGroupId<R>;
};

declare type SelectedState = {
    id: SelectionId;
    checked: boolean;
};

declare type SelectionId = number | string;

declare type SortingsDefinition = Record<string, {
    label: string;
}>;

declare type SortingsState<Definition extends SortingsDefinition> = {
    field: keyof Definition;
    order: SortOrder;
} | null;

/**
 * Type helper to create a multiple sortings state (the main sorting and the grouping sorting)
 */
declare type SortingsStateMultiple = {
    field: string;
    order: "asc" | "desc";
}[];

declare type SortOrder = "asc" | "desc";

export declare function Strong({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>): JSX_2.Element;

export declare function Table({ children, ...props }: React.HTMLAttributes<HTMLTableElement>): JSX_2.Element;

/**
 * Table variant without the built-in download button.
 * Used inside components that already provide their own download controls.
 */
export declare function TableSimple({ children, ...props }: React.HTMLAttributes<HTMLTableElement>): JSX_2.Element;

export declare function Td({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>): JSX_2.Element;

export declare function Th({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>): JSX_2.Element;

declare type TranslationKey = Join<PathsToStringProps<typeof defaultTranslations>, ".">;

declare type TranslationShape<T> = {
    [K in keyof T]: T[K] extends string ? string : T[K] extends Record<string, string | Record<string, unknown>> ? TranslationShape<T[K]> : never;
};

/**
 * Translation shape helper type
 */
declare type TranslationShape_2<T> = {
    [K in keyof T]: T[K] extends string ? string : T[K] extends Record<string, string | Record<string, unknown>> ? TranslationShape_2<T[K]> : never;
};

export declare type TranslationsType = TranslationShape<typeof defaultTranslations>;

export declare function Ul({ children, ...props }: React.HTMLAttributes<HTMLUListElement>): JSX_2.Element;

export declare function useAiChat(): AiChatProviderReturnValue;

export declare function useAiChatTranslations(): AiChatTranslations;

/**
 * Hook to register all default copilot actions.
 * This provides a single entry point to enable all standard AI chat actions.
 *
 * @example
 * // Enable all default actions in your component
 * const MyComponent = () => {
 *   useDefaultCopilotActions()
 *   return <div>...</div>
 * }
 */
export declare const useDefaultCopilotActions: () => void;

export declare function useI18n(): TranslationsType & {
    t: (key: TranslationKey, args?: Record<string, string | number>) => string;
};

/**
 * Hook to register the message sources action.
 * Attaches information sources to the assistant's response to show where the AI got its information from.
 */
export declare const useMessageSourcesAction: () => void;

/**
 * Hook to register the orchestrator thinking action.
 * Displays the orchestrator's thinking process as a non-blocking UI element.
 */
export declare const useOrchestratorThinkingAction: () => void;

/**
 * Visualization mode for the AI chat
 */
export declare type VisualizationMode = "sidepanel" | "fullscreen" | "canvas";

/**
 * Welcome screen suggestion item
 */
export declare type WelcomeScreenSuggestion = {
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


declare namespace Calendar {
    var displayName: string;
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
