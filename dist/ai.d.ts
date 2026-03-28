import { AgentState } from '@livekit/components-react';
import { AIMessage } from '@copilotkit/shared';
import { ClassValue } from 'cva';
import { ComponentProps } from 'react';
import { CopilotKitProps } from '@copilotkit/react-core';
import { ForwardRefExoticComponent } from 'react';
import { InputProps } from '@copilotkit/react-ui';
import { JSX as JSX_2 } from 'react';
import { LocalAudioTrack } from 'livekit-client';
import { Message } from '@copilotkit/shared';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { RemoteAudioTrack } from 'livekit-client';
import { SVGProps } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { TrackReferenceOrPlaceholder } from '@livekit/components-react';
import { VariantProps } from 'cva';

export declare type ActionItemStatus = (typeof actionItemStatuses)[number];

export declare const actionItemStatuses: readonly ["inProgress", "executing", "completed"];

/* Excluded from this release type: AgentState */

declare type AggregationType = "count" | "sum" | "avg" | "min" | "max" | "countDistinct";

/**
 * Credits configuration for the AI chat.
 * Groups all credits-related props into a single object.
 *
 * When provided, a credits button is shown in the chat header.
 */
export declare type AiChatCredits = {
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
 * Interaction mode for the AI chat
 */
export declare type AiChatMode = "chat" | "voice";

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
     * The current interaction mode
     */
    mode: AiChatMode;
    /**
     * Set the interaction mode
     */
    setMode: React.Dispatch<React.SetStateAction<AiChatMode>>;
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
     * Optional component rendered when voice mode is active.
     */
    VoiceMode?: React.ComponentType;
    /**
     * Set the footer content. Use this to update the footer from outside the provider (e.g. per page/route).
     */
    setFooter: React.Dispatch<React.SetStateAction<React.ReactNode | undefined>>;
    /** Whether the assistant is currently generating a response */
    inProgress: boolean;
    /** Set the in-progress state (synced from CopilotKit's isLoading) */
    setInProgress: (value: boolean) => void;
} & Pick<AiChatState, "greeting" | "agent" | "disclaimer" | "resizable" | "entityResolvers" | "toolHints" | "credits"> & {
    /** The current canvas content, or null when canvas is closed */
    canvasContent: CanvasContent | null;
    /** Open the canvas panel with the given content */
    openCanvas: (content: CanvasContent) => void;
    /** Close the canvas panel and restore the previous visualization mode */
    closeCanvas: () => void;
    /** The currently active tool hint, or null if none is selected */
    activeToolHint: AiChatToolHint | null;
    /** Set the active tool hint (pass null to clear) */
    setActiveToolHint: React.Dispatch<React.SetStateAction<AiChatToolHint | null>>;
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
    VoiceMode?: React.ComponentType;
    entityResolvers?: EntityResolvers;
    toolHints?: AiChatToolHint[];
    credits?: AiChatCredits;
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
 * Default AI chat translations — derived from the global defaultTranslations
 * to avoid manual duplication.
 */
export declare const aiTranslations: {
    ai: {
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
};

/**
 * Discriminated union for canvas panel content.
 * Add new entity types to this union as they are implemented.
 */
export declare type CanvasContent = DashboardCanvasContent;

/**
 * Base shape shared by all canvas content types.
 * Every entity adds its own fields on top of this.
 */
export declare type CanvasContentBase = {
    type: string;
    title: string;
    toolCallId?: string;
};

/**
 * Contract for a canvas entity type.
 *
 * Each entity (dashboard, survey, goal, job-posting…) implements this
 * interface and is added to the `canvasEntities` record in `registry.ts`.
 *
 * To add a new entity type:
 * 1. Create a folder in `canvas/entities/<your-entity>/`
 * 2. Define a type extending `CanvasContentBase` in `types.ts`
 * 3. Implement and export `CanvasEntityDefinition` in `index.tsx`
 * 4. Add the entity to the record in `canvas/registry.ts`
 */
export declare type CanvasEntityDefinition<T extends CanvasContentBase = CanvasContentBase> = {
    /** Must match the `type` discriminant on the content object */
    type: T["type"];
    /** Renders the main body of the canvas panel */
    renderContent: (props: {
        content: T;
        refreshKey: number;
    }) => ReactNode;
    /** Renders the full header (title, actions, close button) */
    renderHeader: (props: {
        content: T;
        onClose: () => void;
    }) => ReactNode;
    /**
     * Optional wrapper providing entity-scoped context around
     * both header and body (e.g. shared edit-mode state).
     */
    wrapper?: (props: {
        content: T;
        children: ReactNode;
    }) => ReactNode;
};

declare interface ChartComputation {
    datasetId: string;
    xAxis: string;
    yAxis: string;
    aggregation: AggregationType;
    series?: string;
    sortBy?: "value" | "category";
    sortOrder?: "asc" | "desc";
    limit?: number;
}

declare interface ChatDashboardBarChartConfig extends ChatDashboardChartConfigBase {
    type: "bar";
    orientation?: "vertical" | "horizontal";
    stacked?: boolean;
}

declare type ChatDashboardChartConfig = ChatDashboardBarChartConfig | ChatDashboardLineChartConfig | ChatDashboardFunnelChartConfig | ChatDashboardRadarChartConfig | ChatDashboardPieChartConfig | ChatDashboardGaugeChartConfig | ChatDashboardHeatmapChartConfig;

declare interface ChatDashboardChartConfigBase {
    showLegend?: boolean;
    showGrid?: boolean;
    showLabels?: boolean;
    valueFormat?: FormatPreset;
}

declare interface ChatDashboardChartItem extends ChatDashboardItemBase {
    type: "chart";
    chart: ChatDashboardChartConfig;
    computation: ChartComputation | RadarComputation | PieComputation | GaugeComputation | HeatmapComputation;
}

declare interface ChatDashboardCollectionItem extends ChatDashboardItemBase {
    type: "collection";
    columns: ChatDashboardColumn[];
    computation: CollectionComputation;
}

declare interface ChatDashboardColumn {
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
declare interface ChatDashboardConfig {
    /** Dashboard title displayed in the canvas header and chat report card */
    title: string;
    /** Filter definitions — keys become filter IDs */
    filters?: Record<string, ChatDashboardFilterDefinition>;
    /** Ordered list of dashboard items with computation specs */
    items: ChatDashboardItem[];
    /** Fetch specs for server-side data retrieval, keyed by datasetId */
    fetchSpecs: Record<string, DashboardFetchSpec>;
}

declare interface ChatDashboardFilterDefinition {
    type: "in";
    label: string;
    column: string;
    datasetId: string;
}

declare interface ChatDashboardFunnelChartConfig {
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
    showVisualMap?: boolean;
    valueFormat?: FormatPreset;
}

declare type ChatDashboardItem = ChatDashboardChartItem | ChatDashboardMetricItem | ChatDashboardCollectionItem;

declare interface ChatDashboardItemBase {
    id: string;
    title: string;
    description?: string;
    /** Source attribution shown as a subtitle (e.g. "Based on 8 feedbacks from 3 evaluators") */
    sourceDescription?: string;
    colSpan?: number;
    rowSpan?: number;
    x?: number;
    y?: number;
}

declare interface ChatDashboardLineChartConfig extends ChatDashboardChartConfigBase {
    type: "line";
    lineType?: "linear" | "smooth" | "step";
    showArea?: boolean;
    showDots?: boolean;
}

declare type ChatDashboardMetricFormat = {
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

declare interface ChatDashboardMetricItem extends ChatDashboardItemBase {
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

declare type ChatTextareaProps = InputProps & {
    submitLabel?: string;
    creditWarning?: "soft";
    onDismissCreditWarning?: () => void;
    onGetCredits?: () => void;
};

declare interface CollectionComputation {
    datasetId: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    limit?: number;
}

/**
 * Credits usage data returned by the host app
 */
export declare type CreditsUsage = {
    used: number;
    total: number;
};

/**
 * CSS RGB color string type
 * @example 'rgb(255, 0, 0)' or 'rgb(255,0,0)'
 */
export declare type CSSRgbString = `rgb(${number}, ${number}, ${number})` | `rgb(${number},${number},${number})`;

/**
 * Dashboard canvas content — renders an analytics dashboard.
 */
export declare type DashboardCanvasContent = CanvasContentBase & {
    type: "dashboard";
    config: ChatDashboardConfig;
    apiConfig: {
        baseUrl: string;
        headers: Record<string, string>;
    };
};

declare interface DashboardFetchSpec {
    fetch: Array<{
        toolId: string;
        args: Record<string, unknown>;
    }>;
    query: string | null;
    columnLabels?: Record<string, string>;
}

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
export declare const F0AiChatProvider: ({ enabled, greeting, initialMessage, welcomeScreenSuggestions, disclaimer, resizable, defaultVisualizationMode, lockVisualizationMode, historyEnabled, footer, VoiceMode, entityResolvers, toolHints, credits, onThumbsUp, onThumbsDown, children, agent, tracking, ...copilotKitProps }: AiChatProviderProps) => JSX_2.Element;

export declare const F0AiChatTextArea: ({ submitLabel, inProgress, onSend, onStop, creditWarning, onDismissCreditWarning, onGetCredits, }: ChatTextareaProps) => JSX_2.Element;

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
 * A preset formatting instruction the LLM can specify instead of a
 * real formatter function. The wrapper component maps these to actual
 * `(value: number) => string` functions at render time.
 */
declare type FormatPreset = {
    type: "number";
} | {
    type: "currency";
    currency?: string;
} | {
    type: "percent";
} | {
    type: "compact";
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
 * Look up a canvas entity definition by content type.
 * Returns `undefined` if the type is not configured.
 */
export declare function getCanvasEntity(type: string): CanvasEntityDefinition<any> | undefined;

declare interface HeatmapComputation {
    datasetId: string;
    xAxis: string;
    yAxis: string;
    valueColumn: string;
    aggregation: AggregationType;
}

export declare function I18nProvider({ children, translations, }: I18nProviderProps): JSX.Element;

export declare interface I18nProviderProps {
    children: ReactNode;
    translations: TranslationsType;
}

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
    animate?: "normal" | "animate";
}>;

declare type Join<T extends string[], D extends string> = T extends [] ? never : T extends [infer F] ? F : T extends [infer F, ...infer R] ? F extends string ? `${F}${D}${Join<Extract<R, string[]>, D>}` : never : string;

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

declare interface MetricComputation {
    datasetId: string;
    aggregation: AggregationType;
    column?: string;
}

export declare type OneIconSize = (typeof oneIconSizes)[number];

export declare const oneIconSizes: readonly ["xs", "sm", "md", "lg"];

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

export declare function useAiChat(): AiChatProviderReturnValue;

export declare function useAiChatTranslations(): AiChatTranslations;

/**
 * Hook that invokes every configured copilot action factory.
 * Actions are declared in the `copilotActions` array in `registry.ts`.
 */
export declare function useDefaultCopilotActions(): void;

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
