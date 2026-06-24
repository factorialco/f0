import { AgentState } from '@livekit/components-react';
import { AnchorHTMLAttributes } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { baseColors } from '@factorialco/f0-core';
import { ClassValue } from 'cva';
import { CompanyItemProps } from './types';
import { ComponentProps } from 'react';
import { ComponentType } from 'react';
import { CSSProperties } from 'react';
import { EmployeeItemProps } from './types';
import { F0TagBalanceProps as F0TagBalanceProps_2 } from './types';
import { F0TagCompanyProps } from './types';
import { F0TagPersonProps } from './types';
import { F0TagTeamProps } from './types';
import { f1Colors } from '@factorialco/f0-core';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributeAnchorTarget } from 'react';
import { HTMLAttributes } from 'react';
import { ItemProps } from './types';
import { JSX as JSX_2 } from 'react';
import { LocalAudioTrack } from 'livekit-client';
import { NamedExoticComponent } from 'react';
import { Props as Props_3 } from './types';
import * as React_2 from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';
import { Ref } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { RemoteAudioTrack } from 'livekit-client';
import { SVGProps } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { TagAlertProps } from '../../../f0';
import { TagBalanceProps } from '../../../f0';
import { TagDotProps } from '../../../f0';
import { TagListProps } from '../../../f0';
import { TagRawProps } from '../../../f0';
import { TagStatusProps } from '../../../f0';
import { TagType } from '../../../f0';
import { TeamItemProps } from './types';
import { TrackReferenceOrPlaceholder } from '@livekit/components-react';
import { VariantProps } from 'cva';
import { WithDataTestIdReturnType } from '../../lib/data-testid';
import { WithDataTestIdReturnType as WithDataTestIdReturnType_2 } from '../../../lib/data-testid';

declare type ActionBaseProps = ActionCommonProps & DataAttributes;

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

export declare type ActionItemStatus = (typeof actionItemStatuses)[number];

export declare const actionItemStatuses: readonly ["inProgress", "executing", "writing", "completed"];

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

declare type ActionSize = (typeof actionSizes)[number];

declare const actionSizes: readonly ["sm", "md", "lg"];

declare type ActionVariant = (typeof actionVariants)[number];

declare const actionVariants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote", "outlinePromote", "ai", "link", "unstyled", "mention"];

/* Excluded from this release type: AgentState */

export declare type AggregationType = "count" | "sum" | "avg" | "min" | "max" | "countDistinct";

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
 * Credit warning configuration.
 * Groups severity level and action callbacks into a single object.
 *
 * When provided, a warning banner is shown above the chat textarea.
 */
export declare type AiChatCreditWarning = {
    /** The severity level of the warning. */
    level: "soft";
    /** Called when the user dismisses the credit warning banner. */
    onDismiss?: () => void;
    /** Called when the user clicks the "Get Credits" button. */
    onGetCredits?: () => void;
};

/**
 * Disclaimer configuration for the chat input
 */
declare type AiChatDisclaimer = {
    text: string;
    link?: string;
    linkText?: string;
    /**
     * Optional click handler on the disclaimer text. When set, the text becomes
     * keyboard-activatable (Enter / Space) and gets a subtle hover hint. Used by
     * the host to wire easter eggs (e.g. the pong game) without coupling f0 to
     * any specific behaviour.
     */
    onClick?: () => void;
};

/**
 * Employee credits configuration for the AI chat.
 *
 * Independent from `credits` (the classic company-level popover).
 * When provided, a separate, employee-only credits popover trigger is shown
 * in the chat header **instead of** the classic one — the host opts into
 * this mode by passing `employeeCredits` only for employees who have a
 * per-employee monthly allocation configured.
 *
 * Hosts that don't use per-employee allocations should keep using `credits`
 * and leave `employeeCredits` undefined; behavior is unchanged.
 */
declare type AiChatEmployeeCredits = {
    /** Async function to fetch the employee's credits usage. Called each time the popover opens. */
    fetchUsage: () => Promise<EmployeeCreditsUsage>;
    /** Company name displayed in the popover header. */
    companyName?: string;
    /** Company logo URL displayed in the popover header. */
    companyLogoUrl?: string;
    /** Plan name displayed below the company name (e.g. "Free plan", "Enterprise"). */
    planName?: string;
};

export declare type AiChatFileAttachmentConfig = {
    onUploadFiles: (files: File[]) => Promise<UploadedFile[]>;
    allowedMimeTypes?: string | string[];
    /**
     * Maximum number of files that can be attached at once.
     * Omit or pass undefined for no limit.
     */
    maxFiles?: number;
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
    /**
     * Edge the whole side panel docks to (AI chat, hosted content and canvas).
     * Hosts set "left" for a chat-first experience (e.g. communications).
     * @default "right"
     */
    side?: "left" | "right";
    /**
     * Greeting phrase(s) shown by the welcome screen when the chat is empty.
     * A single string renders once; an array rotates through phrases. Purely
     * UI config — does not affect runtime behavior.
     */
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
     * Configuration for entity references in markdown.
     * Groups resolver functions (data fetching for hover cards) and
     * URL builders (navigation links) for each entity type.
     */
    entityRefs?: EntityRefs;
    /**
     * Canvas action callbacks grouped by entity type.
     * Provides save/create functions for persisting canvas entities externally.
     */
    canvasActions?: CanvasActions;
    /**
     * Canvas entity definitions keyed by `CanvasContent["type"]`. The canvas
     * panel looks up the matching definition when `openCanvas` is called.
     *
     * F0AiChat ships without built-in canvas entities; the host app supplies
     * them here so canvas logic lives in one place.
     */
    canvasEntities?: Record<string, CanvasEntityDefinition>;
    /**
     * Credits configuration. When provided, a credits button is shown in the chat header.
     * Groups fetchUsage, upgradePlanUrl, and company/plan display info.
     */
    credits?: AiChatCredits;
    /**
     * Employee-only credits configuration. When provided, replaces the classic
     * `credits` popover trigger with a simpler employee-only popover that shows
     * just the logged-in employee's monthly allocation. Hosts opt in by passing
     * this only when an employee has a configured per-employee allocation.
     *
     * Takes precedence over `credits` — when both are provided, only the
     * employee-only popover is rendered.
     */
    employeeCredits?: AiChatEmployeeCredits;
    /**
     * Credit warning configuration. When provided, shows a warning banner above the chat textarea.
     * Groups severity level and action callbacks.
     */
    creditWarning?: AiChatCreditWarning;
    /**
     * File attachment configuration. When provided, enables file uploads in the chat.
     */
    fileAttachments?: AiChatFileAttachmentConfig;
    /**
     * Voice dictation. When provided, a microphone button is shown in the
     * composer: recorded audio is transcribed and the result fills the textarea
     * (the user reviews and sends it as a normal text message). When omitted,
     * the microphone is hidden.
     */
    onTranscribe?: TranscribeFn;
    onThumbsUp?: (message: F0AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    onThumbsDown?: (message: F0AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    tracking?: AiChatTrackingOptions;
    /**
     * Optional name of the AI agent. Forwarded to the host runtime adapter
     * (mock in stories, CopilotKit in factorial) — f0 itself only stores it.
     */
    agent?: string;
    /**
     * Slot elements rendered inside `<F0AiChat />`. Host apps (factorial in
     * production, the mock runtime in stories) provide their own connected
     * wrappers — f0 ships only the shell. Passing slots here makes them
     * available to any `<F0AiChat />` mounted under this provider (used by
     * `ApplicationFrame`, which renders the chat itself).
     */
    chatHeader?: React.ReactNode;
    chatMessages?: React.ReactNode;
    chatInput?: React.ReactNode;
    /** Children rendered inside the provider. */
    children?: React.ReactNode;
};

/**
 * Return value type for the useAiChat hook. UI-only by design — message
 * state and actions (send, clear, loadThread, etc.) live in the runtime
 * adapter and are read via `useAiChatRuntime()`.
 */
declare type AiChatProviderReturnValue = {
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    shouldPlayEntranceAnimation: boolean;
    setShouldPlayEntranceAnimation: React.Dispatch<React.SetStateAction<boolean>>;
    setAgent: React.Dispatch<React.SetStateAction<string | undefined>>;
    placeholders: string[];
    setPlaceholders: React.Dispatch<React.SetStateAction<string[]>>;
    initialMessage?: string | string[];
    setInitialMessage: React.Dispatch<React.SetStateAction<string | string[] | undefined>>;
    welcomeScreenSuggestions: WelcomeScreenSuggestion[];
    setWelcomeScreenSuggestions: React.Dispatch<React.SetStateAction<WelcomeScreenSuggestion[]>>;
    onThumbsUp?: (message: F0AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    onThumbsDown?: (message: F0AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    tracking?: AiChatTrackingOptions;
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
    /**
     * True while a clarifying flow is active. F0 uses this flag to freeze
     * layout / disable file drop / hide disclaimer. The actual panel state
     * is owned by the host (factorial); F0 only sees the boolean.
     */
    isClarifying: boolean;
    /** Set the clarifying flag. */
    setIsClarifying: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Whether files are currently being dragged over the chat window.
     * Set by the ChatWindow drag listeners and read by the DropOverlay
     * to control its visibility.
     */
    fileDragOver: boolean;
    /* Excluded from this release type: setFileDragOver */
    /**
     * Process files that were dropped onto the chat. Delegates to the
     * `processFiles` callback registered by `ChatTextarea`'s file-attachment
     * hook. Used by the chat-wide DropOverlay rendered in `SidebarWindow`.
     */
    processDroppedFiles: (files: File[]) => void;
    /* Excluded from this release type: setProcessDroppedFilesFunction */
    /**
     * Pre-loaded context shown as an empty state in the chat.
     * Prepended to the first user message as `<pending-context>`.
     */
    pendingContext: PendingContext | null;
    /** Set pending context (pass null to clear) */
    setPendingContext: React.Dispatch<React.SetStateAction<PendingContext | null>>;
    /**
     * Quoted fragment the user is replying to. Rendered as a chip above the
     * textarea and, on submit, prepended as a markdown blockquote to the user's
     * message (plus an invisible `<quote-context>` tag for the agent).
     */
    pendingQuote: PendingQuote | null;
    /** Set the pending quote (pass null to clear). */
    setPendingQuote: React.Dispatch<React.SetStateAction<PendingQuote | null>>;
    /**
     * Content currently hosted in the side panel, or `null` to show the F0.ai
     * chat. Only one is mounted at a time — see {@link SidePanelContent}.
     */
    panelContent: SidePanelContent | null;
    /**
     * Mount `content` in the side panel (replacing whatever was there) and open
     * the panel. Pass `null` to fall back to the AI chat. The previous content
     * is unmounted thanks to the `id` key.
     */
    setPanelContent: (content: SidePanelContent | null) => void;
    /** Clear the custom panel content and fall back to the F0.ai chat. */
    clearPanelContent: () => void;
    /**
     * Edge the whole side panel docks to — the AI chat, hosted content and the
     * canvas all follow it. Defaults to "right". Hosts flip it to "left" for a
     * chat-first experience (e.g. communications), where left is comfier to
     * navigate between conversations.
     */
    panelSide: "left" | "right";
    /** Set which edge the side panel docks to. */
    setPanelSide: React.Dispatch<React.SetStateAction<"left" | "right">>;
} & Pick<AiChatState, "agent" | "chatHeader" | "chatMessages" | "chatInput" | "disclaimer" | "resizable" | "entityRefs" | "canvasActions" | "canvasEntities" | "credits" | "employeeCredits" | "creditWarning" | "fileAttachments" | "onTranscribe"> & {
    /** The current canvas content, or null when canvas is closed */
    canvasContent: CanvasContent | null;
    /** Open the canvas panel with the given content */
    openCanvas: (content: CanvasContent) => void;
    /** Close the canvas panel and restore the previous visualization mode */
    closeCanvas: () => void;
    /** The currently active mini-game (easter egg), or null */
    activeGame: "pong" | null;
    /** Launch a mini-game overlay */
    openGame: (game: "pong") => void;
    /** Close the active mini-game overlay */
    closeGame: () => void;
};

/**
 * Internal state for the AiChat provider. Pure UI / config concerns —
 * message-runtime concerns (sendMessage, threadId, streaming) live in a
 * separate adapter (mock in stories, factorial-side in production).
 */
declare interface AiChatState {
    enabled: boolean;
    /** Initial edge the panel docks to. @default "right" */
    side?: "left" | "right";
    agent?: string;
    initialMessage?: string | string[];
    chatHeader?: React.ReactNode;
    chatMessages?: React.ReactNode;
    chatInput?: React.ReactNode;
    welcomeScreenSuggestions?: WelcomeScreenSuggestion[];
    disclaimer?: AiChatDisclaimer;
    resizable?: boolean;
    defaultVisualizationMode?: VisualizationMode;
    lockVisualizationMode?: boolean;
    historyEnabled?: boolean;
    footer?: React.ReactNode;
    VoiceMode?: React.ComponentType;
    entityRefs?: EntityRefs;
    canvasActions?: CanvasActions;
    canvasEntities?: Record<string, CanvasEntityDefinition>;
    credits?: AiChatCredits;
    employeeCredits?: AiChatEmployeeCredits;
    creditWarning?: AiChatCreditWarning;
    fileAttachments?: AiChatFileAttachmentConfig;
    onTranscribe?: TranscribeFn;
    placeholders?: string[];
    setPlaceholders?: React.Dispatch<React.SetStateAction<string[]>>;
    onThumbsUp?: (message: F0AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    onThumbsDown?: (message: F0AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    tracking?: AiChatTrackingOptions;
}

export declare type AiChatTrackingOptions = {
    onVisibility?: () => void;
    onClose?: () => void;
    onWelcomeSuggestionClick?: (event: WelcomeSuggestionClickEvent) => void;
    onNewChat?: () => void;
    onMessage?: (message: F0Message) => void;
    /** Mic button pressed — fires on intent, even if mic permission is later denied. */
    onDictationStart?: () => void;
    /** Dictation discarded by the user, while recording or mid-transcription. */
    onDictationCancel?: () => void;
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

export declare type AiInsightCardContent = {
    content: "text";
} | {
    content: "person";
    avatar: Pick<F0AvatarPersonProps, "firstName" | "lastName" | "src">;
} | {
    content: "people";
    avatars: Array<Pick<F0AvatarPersonProps, "firstName" | "lastName" | "src">>;
} | {
    content: "team";
    avatar: Pick<F0AvatarTeamProps, "name" | "src">;
} | {
    content: "company";
    avatar: Pick<F0AvatarCompanyProps, "name" | "src">;
} | {
    content: "alert";
    level: Level;
    alertLabel: string;
} | {
    content: "balance";
    balance: BalanceConfig;
} | {
    content: "sparkline";
    data: SparklineDataPoint[];
    label: string;
    invertStatus?: boolean;
};

/** Assistant-flavoured `Message`. Same shape — alias for self-documentation. */
declare type AIMessage = Message;

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
        readonly applyingChanges: "Applying changes";
        readonly sendMessage: "Send message";
        readonly thoughtsGroupTitle: "Reasoning";
        readonly resourcesGroupTitle: "Resources";
        readonly thinking: "Thinking...";
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
        readonly view: "View";
        readonly entityRef: {
            readonly candidate: {
                readonly source: "Source";
                readonly applied: "Applied on";
            };
            readonly requisition: {
                readonly lineManager: "Line manager";
                readonly reason: "Reason";
                readonly status: "Status";
            };
        };
        readonly credits: {
            readonly title: "Credits";
            readonly employeeCredits: "Your credits";
            readonly creditsLeft: "{{total}} left";
            readonly monthlyCredits: "Monthly credits";
            readonly creditsError: "Could not load credits";
            readonly upgradePlan: "Upgrade";
            readonly needMoreCredits: "Need more credits?";
        };
        readonly reportCard: {
            readonly tableLabel: "Table";
            readonly openButton: "Open";
        };
        readonly formCard: {
            readonly moreFields: "Open to see all fields";
        };
        readonly aiTable: {
            readonly title: "Table";
            readonly downloadExcel: "Download Excel";
            readonly downloadCsv: "Download CSV";
        };
        readonly dataDownload: {
            readonly title: "Download";
            readonly download: "Download {{format}}";
            readonly exportDashboard: "Export dashboard as {{format}}";
            readonly exporting: "Exporting…";
        };
        readonly dashboardItem: {
            readonly chartType: "Chart type";
            readonly errorTitle: "Error loading data";
            readonly retry: "Retry";
            readonly dataExplanation: "Where does this data come from?";
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
        };
        readonly attachFile: "Attach file";
        readonly recordAudio: "Record audio";
        readonly listening: "Listening…";
        readonly stopRecording: "Stop and transcribe";
        readonly cancelRecording: "Cancel recording";
        readonly transcribing: "Transcribing…";
        readonly micPermissionDenied: "Microphone access is blocked. Allow it in your browser settings to dictate.";
        readonly micError: "Couldn't access the microphone.";
        readonly transcriptionError: "Couldn't transcribe the audio. Try again.";
        readonly removeFile: "Remove";
        readonly fileUploadError: "Upload failed";
        readonly fileUploadBlockedSubmit: "Your message wasn't sent because one of the attachments failed to upload. Remove it or retry.";
        readonly tooManyFilesError: "You can attach up to {{maxFiles}} files at once";
        readonly dropFilesHere: "Drop your files here";
        readonly reply: "Reply";
        readonly removeQuote: "Remove quote";
        readonly clarifyingQuestion: {
            readonly submit: "Submit";
            readonly next: "Next";
            readonly back: "Back";
            readonly skip: "Skip";
            readonly typeYourAnswer: "Type your answer…";
            readonly stepOf: "{{current}} of {{total}}";
            readonly custom: "own answer";
            readonly skipped: "skipped";
            readonly navHint: {
                readonly navigate: "navigate";
                readonly select: "select";
                readonly cancel: "cancel";
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

declare type AlertAvatarProps = VariantProps<typeof alertAvatarVariants> & {
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

/**
 * A message to inject via appendMessages.
 * IDs are generated internally — callers only provide role, content, and
 * optional tool calls.
 */
export declare type AppendMessage = {
    role: "user" | "assistant";
    content: string;
    toolCalls?: AppendToolCall[];
} | {
    /** Tool result message — pairs with a toolCall from a previous assistant message */
    role: "tool";
    content: string;
    /**
     * ID of the paired tool call. Must equal the corresponding assistant
     * message's `toolCalls[i].id` — supply `AppendToolCall.id` on that call
     * and pass the same value here so the messages are correctly paired.
     */
    toolCallId: string;
};

/**
 * A tool call to inject via appendMessages.
 * IDs are generated internally unless `id` is provided.
 * When pairing with a tool-result message, provide the same `id`
 * in both the tool call and the tool-result's `toolCallId`.
 */
export declare type AppendToolCall = {
    id?: string;
    function: {
        name: string;
        arguments: string;
    };
};

export declare type AttachedFile = {
    id: string;
    file: File;
    status: "uploading" | "uploaded" | "error";
    uploadedFile?: UploadedFile;
    errorMessage?: string;
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

declare type AvatarListSize = (typeof avatarListSizes)[number];

declare const avatarListSizes: readonly ["xs", "sm", "md"];

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

export declare type BalanceConfig = {
    amount: RelaxedNumericWithFormatter | Numeric;
    percentage?: (Omit<RelaxedNumericWithFormatter, "value"> & {
        value: Omit<Numeric, "units" | "unitsPosition">;
    }) | Omit<Numeric, "units" | "unitsPosition"> | null;
    invertStatus?: boolean;
    hint?: string;
};

declare type BalanceTagProps = ComponentProps<typeof F0TagBalance>;

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

declare type BaseColor = keyof typeof baseColors;

declare type BaseTag<T extends {
    type: string;
}> = T & WithTooltipDescription;

/**
 * Profile data for a candidate entity (ATS applicant), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export declare type CandidateProfile = {
    id: string | number;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    source?: string;
    appliedAt?: string;
};

/**
 * Canvas-level action callbacks grouped by entity type.
 * Each entity defines its own actions type; this aggregates them.
 * Passed by the host app to F0AiChatProvider via `canvasActions`.
 */
export declare type CanvasActions = {
    dashboard?: DashboardCanvasActions;
};

declare type CanvasCardAction = {
    type: "open";
    onOpen: () => void;
    onClose: () => void;
    /** When false, hides the Open/Close button but the card stays clickable. Default true. */
    showButton?: boolean;
} | {
    type: "custom";
    icon: IconType;
    label: string;
    onClick: () => void;
    hideLabel?: boolean;
};

declare type CanvasCardAvatar = {
    type: "module";
    module: ModuleId;
} | {
    type: "file";
    file: FileDef;
};

/**
 * Discriminated union for canvas panel content.
 * Add new entity types to this union as they are implemented.
 */
export declare type CanvasContent = DashboardCanvasContent | FormCanvasContent | DataDownloadCanvasContent;

/**
 * Base shape shared by all canvas content types.
 * Every entity adds its own fields on top of this.
 */
export declare type CanvasContentBase = {
    type: string;
    title: string;
    description?: string;
    toolCallId?: string;
};

/**
 * Contract for a canvas entity type.
 *
 * Each entity (dashboard, survey, goal, job-posting…) implements this
 * interface and is added to the `canvasEntities` record passed to F0AiChat.
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
    /**
     * When true the content area uses `overflow-hidden` instead of
     * `overflow-auto`, letting the entity manage its own scrolling.
     */
    overflowHidden?: boolean;
};

/**
 * An optional action button rendered in the alert header.
 * Mutually exclusive with `dismissible` — only one can be shown at a time.
 * Supply either `onClick` (handler) or `href` (navigation link), not both.
 */
declare type CardAlertAction = {
    /** Label text for the action button. */
    label: string;
    /** Whether the action button is disabled. */
    disabled?: boolean;
} & ({
    /** Called when the action button is clicked. */
    onClick: () => void;
    href?: never;
} | {
    /** URL to navigate to when the action button is clicked. */
    href: string;
    onClick?: never;
});

declare interface CardAlertBase {
    /**
     * The visual variant of the alert, which determines the color scheme and default icon.
     */
    variant: CardAlertVariant;
    /**
     * The title text displayed in the alert banner.
     */
    title: string;
    /**
     * Optional custom icon. When omitted, defaults to the icon that best represents the variant.
     */
    icon?: IconType;
    /**
     * Controls whether the alert is visible. Defaults to true.
     * Use this together with onDismiss for controlled dismiss behaviour:
     *   alert={{ ..., visible, dismissible: true, onDismiss: () => setVisible(false) }}
     */
    visible?: boolean;
}

declare type CardAlertDismissible = CardAlertBase & {
    /** Renders a dismiss (×) button. Requires onDismiss. */
    dismissible: true;
    /**
     * Called when the dismiss (×) button is clicked.
     * The consumer is responsible for hiding the alert (e.g. by setting visible: false).
     */
    onDismiss: () => void;
    action?: never;
};

declare type CardAlertNonDismissible = CardAlertBase & {
    dismissible?: false;
    onDismiss?: never;
    action?: never;
};

declare type CardAlertProps = CardAlertDismissible | CardAlertWithAction | CardAlertNonDismissible;

declare type CardAlertVariant = (typeof cardAlertVariants)[number];

declare const cardAlertVariants: readonly ["info", "warning", "critical", "positive"];

declare type CardAlertWithAction = CardAlertBase & {
    dismissible?: never;
    onDismiss?: never;
    /** Action button rendered in the alert header. Mutually exclusive with `dismissible`. */
    action: CardAlertAction;
};

declare type CardAvatarVariant = AvatarVariant | {
    type: "emoji";
    emoji: string;
} | {
    type: "file";
    file: File;
} | {
    type: "icon";
    icon: IconType;
} | {
    type: "module";
    module: ModuleId;
} | {
    type: "alert";
    variant: AlertAvatarProps["type"];
} | {
    type: "date";
    date: Date;
};

declare interface CardHorizontalConfirmAction {
    onClick: () => void;
    /** Accessible label and tooltip. Defaults to "Confirm" / "Reject". */
    label?: string;
    disabled?: boolean;
}

/**
 * Container breakpoint at which the horizontal card switches between its inline and its
 * stacked (actions-on-their-own-line) layout. `never` keeps it inline at every
 * width.
 */
declare type CardHorizontalStackAt = "sm" | "md" | "lg" | "never";

/**
 * Resolved state shown at the trailing edge in place of the actions: a coloured
 * icon (e.g. `Check` for accepted, `Cross` for rejected) carrying the outcome.
 */
declare interface CardHorizontalStatus {
    /** The icon to render (e.g. `Check` for accepted, `Cross` for rejected). */
    icon: IconType;
    /** Colour family. */
    variant: StatusVariant;
    /** Accessible label; the icon carries meaning, so this is required. */
    label: string;
}

declare type CardInternalProps = F0AiInsightCardProps & {
    className?: string;
};

declare interface CardPrimaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
    /**
     * Visual emphasis of the primary action. `"outline"` renders it as an outline
     * button while keeping it pinned at the trailing edge (so a lone CTA never
     * sheds into the "⋯" menu). Use it when the card's only action shouldn't carry
     * full primary weight.
     * @default "default"
     */
    variant?: "default" | "outline";
}

declare interface CardSecondaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
}

declare interface CardSecondaryLink extends Pick<F0LinkProps, "href" | "target" | "disabled"> {
    label: string;
}

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
    /**
     * Optional header tooltip explaining what the column represents — formula
     * or aggregation if derived, source if direct. Forwarded to the underlying
     * table column's `info` prop. Omit when the label is self-explanatory.
     */
    info?: string;
}

/**
 * Complete dashboard configuration received via `displayDashboard`.
 * Contains fetchSpecs that describe how to obtain data server-side —
 * no raw data is included. Fully JSON-serializable.
 */
export declare interface ChatDashboardConfig {
    /** Dashboard title displayed in the canvas header and chat report card */
    title: string;
    /**
     * AI-generated 1–2 sentence summary of what the dashboard shows. Displayed
     * under the title in the canvas header. Optional at the type level so
     * legacy persisted dashboards (before the agent started emitting it) still
     * parse; the agent schema makes it required going forward.
     */
    description?: string;
    /** Filter definitions — keys become filter IDs */
    filters?: Record<string, ChatDashboardFilterDefinition>;
    /**
     * Dashboard-level navigation filters (e.g. date navigator). Keys become
     * filter IDs. Rendered above the grid by F0AnalyticsDashboard's
     * `navigationFilters` slot.
     */
    navigationFilters?: Record<string, ChatDashboardNavigationFilterDefinition>;
    /** Ordered list of dashboard items with computation specs */
    items: ChatDashboardItem[];
    /** Fetch specs for server-side data retrieval, keyed by datasetId */
    fetchSpecs: Record<string, DashboardFetchSpec>;
}

/** Granularity options exposed by F0's `OneDateNavigator`. */
export declare type ChatDashboardDateNavigationGranularity = "day" | "week" | "month" | "quarter" | "halfyear" | "year" | "range";

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

export declare interface ChatDashboardGaugeChartConfig {
    type: "gauge";
    min?: number;
    max?: number;
    showValue?: boolean;
    valueFormat?: FormatPreset;
}

export declare interface ChatDashboardHeatmapChartConfig {
    type: "heatmap";
    min?: number;
    max?: number;
    showLabels?: boolean;
    showVisualMap?: boolean;
    valueFormat?: FormatPreset;
}

export declare type ChatDashboardItem = ChatDashboardChartItem | ChatDashboardMetricItem | ChatDashboardCollectionItem;

declare interface ChatDashboardItemBase {
    id: string;
    title: string;
    description?: string;
    /** Source attribution shown as a subtitle (e.g. "Based on 8 feedbacks from 3 evaluators") */
    sourceDescription?: string;
    /**
     * Optional markdown explanation of how this item's data was calculated.
     * Surfaced via the per-item dropdown's "Where does this data come from?"
     * entry, which opens a dialog rendering the markdown. Omit to hide the
     * entry — backwards compatible with persisted dashboards.
     */
    explanation?: string;
    /**
     * @deprecated Ignored by the renderer — items auto-size to equal-width
     * slots based on the per-row slot budget. Kept for backwards compatibility
     * with persisted layouts; safe to leave unset.
     */
    colSpan?: number;
    /**
     * @deprecated Use `itemHeight` (pixels) instead. Kept for backwards
     * compatibility with persisted layouts: when `itemHeight` is unset, the
     * grid still reads `rowSpan * 48` as a fallback.
     */
    rowSpan?: number;
    /**
     * Item height in pixels. Takes precedence over `rowSpan` when set. The
     * row height in the grid is `max(itemHeight)` across all items in the row.
     * Persisted resizes write a pixel-accurate value here; agent-generated
     * dashboards should pick from a constrained set of values that match the
     * data shape (more rows / more categories → taller).
     */
    itemHeight?: number;
    x?: number;
    y?: number;
}

export declare interface ChatDashboardLineChartConfig extends ChatDashboardChartConfigBase {
    type: "line";
    lineType?: "linear" | "smooth" | "step";
    showArea?: boolean;
    showDots?: boolean;
}

export declare type ChatDashboardMetricFormat = {
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

export declare interface ChatDashboardMetricItem extends ChatDashboardItemBase {
    type: "metric";
    format?: ChatDashboardMetricFormat;
    decimals?: number;
    computation: MetricComputation;
}

/**
 * Navigation filter definitions emitted by the LLM via `displayDashboard`.
 * Discriminated on `type`. Today the only supported variant is
 * `dateNavigation`, which renders F0's date navigator above the dashboard
 * grid. The `column` and `datasetId` are agent-side metadata used by the
 * compute SQL builder; they are stripped before reaching F0AnalyticsDashboard.
 */
export declare type ChatDashboardNavigationFilterDefinition = {
    type: "dateNavigation";
    label: string;
    column: string;
    datasetId: string;
    granularities: ChatDashboardDateNavigationGranularity[];
    defaultGranularity?: ChatDashboardDateNavigationGranularity;
};

export declare interface ChatDashboardPieChartConfig {
    type: "pie";
    innerRadius?: number;
    showLegend?: boolean;
    showLabels?: boolean;
    showPercentage?: boolean;
    valueFormat?: FormatPreset;
}

export declare interface ChatDashboardRadarChartConfig extends ChatDashboardChartConfigBase {
    type: "radar";
    showArea?: boolean;
}

export declare const ChatSpinner: ForwardRefExoticComponent<ChatSpinnerProps & RefAttributes<HTMLDivElement>>;

declare interface ChatSpinnerProps {
    size?: number;
    className?: string;
    style?: CSSProperties;
    /**
     * "default" → spins 2 rotations, pauses, repeats.
     * "continuous" → 2 rotations forward, then 2 backward, no pause. Used for
     * "writing"-style activity where the indicator should never rest.
     */
    variant?: "default" | "continuous";
}

export declare type ChatThread = {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
};

/**
 * A single selectable option within a clarifying question step.
 */
export declare interface ClarifyingOption {
    /** Unique identifier for this option */
    id: string;
    /** Display label shown to the user */
    label: string;
}

/**
 * The active clarifying question state pushed into the AiChat context.
 * When no clarifying question is active the context value is `null`.
 *
 * Navigation metadata (currentStepIndex, totalSteps) and callbacks live
 * here so the panel component stays a pure view of this state.
 */
export declare interface ClarifyingQuestionState {
    /** The current step's data + interaction state */
    currentStep: ClarifyingStepState;
    /** Zero-based index of the current step */
    currentStepIndex: number;
    /** Total number of steps (1 for single-step questions) */
    totalSteps: number;
    /** Toggle selection of an option by its ID */
    toggleOption: (optionId: string) => void;
    /** Confirm the current step's selection and advance (or submit on final step) */
    confirm: () => void;
    /** Skip the current step (only valid when the step is optional) */
    skip: () => void;
    /**
     * Cancel the entire clarifying flow. Closes the panel and marks the tool
     * call as resolved-but-not-completed so it doesn't re-appear on history
     * reload. Cancellation is silent — no message is sent to the agent.
     */
    cancel: () => void;
    /** Go back to the previous step */
    back: () => void;
    /** Set the custom answer text */
    setCustomAnswerText: (text: string) => void;
    /** Toggle whether the custom answer is included in the submission */
    setCustomAnswerActive: (active: boolean) => void;
    /** Activate the custom answer input (in single mode, clears predefined selections) */
    activateCustomAnswer: () => void;
}

/**
 * Selection mode for a clarifying question step.
 * - "single": only one option can be selected (rendered as radio buttons)
 * - "multiple": multiple options can be selected (rendered as checkboxes)
 */
export declare type ClarifyingSelectionMode = "single" | "multiple";

/**
 * Pure data describing a single clarifying question step.
 * This is what the AI backend sends — no UI state or callbacks.
 */
export declare interface ClarifyingStepData {
    /** The question text displayed to the user */
    question: string;
    /** Available options the user can select from */
    options: ClarifyingOption[];
    /** Selection mode. Defaults to "single" when omitted */
    selectionMode?: ClarifyingSelectionMode;
    /** Whether the user can skip this step without selecting any option */
    optional?: boolean;
    /** Whether the user can type a free-text custom answer */
    allowCustomAnswer?: boolean;
}

/**
 * A step enriched with the user's current interaction state.
 * Used internally by the controller to track selections per step.
 */
export declare interface ClarifyingStepState extends ClarifyingStepData {
    /** IDs of currently selected options */
    selectedOptionIds: string[];
    /** Current custom answer text (preserved even when deactivated) */
    customAnswerText?: string;
    /** Whether the custom answer is currently included in the submission */
    isCustomAnswerActive: boolean;
}

export declare interface CollectionComputation {
    datasetId: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    limit?: number;
}

declare type CompanyAvatarVariant = Extract<AvatarVariant, {
    type: "company";
}>;

declare type CompanyTagProps = ComponentProps<typeof F0TagCompany>;

export declare type ContentType = (typeof contentTypes)[number];

export declare const contentTypes: readonly ["text", "person", "people", "team", "company", "alert", "balance", "sparkline"];

declare type CountryCode = keyof TranslationsType["countries"];

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
 * Callbacks for persisting dashboards externally (beyond chat history).
 */
export declare type DashboardCanvasActions = {
    /** Update an existing saved dashboard */
    save: (id: string, category: string, config: ChatDashboardConfig) => Promise<void>;
    /**
     * Create a new saved dashboard. Returns the new dashboard's id and
     * category so subsequent edits can call `save` (which requires both).
     * Returning void / undefined leaves the canvas in its current state.
     */
    create: (title: string, description: string, config: ChatDashboardConfig, category?: string) => Promise<{
        id: string;
        category: string;
    } | void>;
    /**
     * Fetch creator + last-edited metadata for a saved dashboard. The header
     * calls this lazily, only when the current dashboard has a
     * `savedDashboardId`. Returning `void` signals "no metadata available" —
     * the header will skip rendering the avatar and the last-edited row
     * instead of showing a placeholder.
     */
    getMetadata?: (id: string) => Promise<DashboardMetadata | void>;
};

/**
 * Dashboard canvas content — renders an analytics dashboard.
 */
export declare type DashboardCanvasContent = CanvasContentBase & {
    type: "dashboard";
    config: ChatDashboardConfig;
    apiConfig: {
        baseUrl: string;
        headers: Record<string, string>;
        runtimeFetch?: typeof fetch;
    };
    /** Present when the dashboard is a pre-saved dashboard */
    savedDashboardId?: string;
    /** Category of the saved dashboard */
    savedDashboardCategory?: string;
    /** Description of the saved dashboard */
    savedDashboardDescription?: string;
    /** True when the agent has iterated on a saved dashboard but the user hasn't saved yet */
    savedDashboardUnsaved?: boolean;
};

export declare interface DashboardFetchSpec {
    fetch: Array<{
        toolId: string;
        args: Record<string, unknown>;
    }>;
    query: string | null;
    columnLabels?: Record<string, string>;
}

/**
 * Creator + last-edited metadata for a saved dashboard. Returned by
 * `DashboardCanvasActions.getMetadata` so the header can render the author
 * avatar and the freshness signal only once a dashboard has been persisted.
 *
 * `title` and `description` are also returned: once a dashboard has an id
 * the backend is the source of truth and may diverge from what's stored in
 * the chat history (e.g. someone renamed the dashboard from the Analytics
 * list page since this conversation was first opened). The header prefers
 * these values over the ones baked into `content` / `config`.
 */
export declare type DashboardMetadata = {
    /**
     * Latest persisted title. When present, the header displays this instead
     * of `content.title` so the chat-history snapshot never shadows the
     * authoritative backend copy.
     */
    title?: string;
    /**
     * Latest persisted description. Same rationale as `title` — takes
     * precedence over `config.description` once the dashboard is saved.
     */
    description?: string;
    creator: {
        firstName: string;
        lastName: string;
        /** Optional avatar image URL. Falls back to initials when omitted. */
        src?: string;
    };
    /**
     * Last edited timestamp. Accepts `Date` or an ISO-8601 string so host apps
     * can forward backend payloads verbatim without pre-parsing.
     */
    lastEdited: Date | string;
};

declare type DataAttributes_2 = {
    [key: `data-${string}`]: string | undefined;
};

/**
 * Data download canvas content — renders a full data table with download options.
 */
export declare type DataDownloadCanvasContent = CanvasContentBase & {
    type: "dataDownload";
    dataset: DataDownloadDataset;
    filename?: string;
    markdown?: string;
};

/**
 * Inline dataset for client-side file generation (Excel / CSV).
 * Sent by the agent with the raw query results.
 */
export declare type DataDownloadDataset = {
    /** Column headers in display order. */
    columns: string[];
    /** Array of row objects keyed by column name. */
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

declare const DataList: ForwardRefExoticComponent<DataListProps & RefAttributes<HTMLUListElement>> & {
    Item: ForwardRefExoticComponent<ItemProps & RefAttributes<HTMLLIElement>>;
    CompanyItem: ForwardRefExoticComponent<CompanyItemProps & RefAttributes<HTMLLIElement>>;
    PersonItem: ForwardRefExoticComponent<EmployeeItemProps & RefAttributes<HTMLLIElement>>;
    TeamItem: ForwardRefExoticComponent<TeamItemProps & RefAttributes<HTMLLIElement>>;
    DotTagItem: ForwardRefExoticComponent<TagDotProps & RefAttributes<HTMLLIElement>>;
    AlertTagItem: ForwardRefExoticComponent<TagAlertProps & RefAttributes<HTMLLIElement>>;
    BalanceTagItem: ForwardRefExoticComponent<TagBalanceProps & RefAttributes<HTMLLIElement>>;
    StatusTagItem: ForwardRefExoticComponent<TagStatusProps & RefAttributes<HTMLLIElement>>;
    RawTagItem: ForwardRefExoticComponent<TagRawProps & RefAttributes<HTMLLIElement>>;
    TagListItem: <T extends TagType>(props: TagListProps<T> & {
        ref?: Ref<HTMLLIElement>;
    }) => ReturnType<(<T_1 extends TagType>(props: TagListProps<T_1>, ref: ForwardedRef<HTMLLIElement>) => JSX_2.Element)>;
};

declare type DataListProps = {
    children: ReactElement | ReactElement[];
    label?: string;
    isHorizontal?: boolean;
};

export declare type DateGroup = "today" | "yesterday" | "thisMonth" | "older";

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
            readonly search: "Search";
            readonly tabs: {
                readonly label: "Sidebar sections";
            };
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
        readonly private: {
            readonly show: "Show {{label}}";
            readonly hide: "Hide {{label}}";
        };
    };
    readonly link: {
        readonly opensInNewTab: "opens in new tab";
    };
    readonly audioPlayer: {
        readonly label: "Audio player";
        readonly play: "Play";
        readonly pause: "Pause";
        readonly seek: "Seek";
        readonly options: "Recording options";
        readonly playbackSpeed: "Playback speed";
        readonly position: "{{current}} of {{total}}";
        readonly viewDetail: "View detail";
        readonly hideDetail: "Hide detail";
        readonly details: "Recording details";
    };
    readonly actions: {
        readonly add: "Add";
        readonly edit: "Edit";
        readonly save: "Save";
        readonly send: "Send";
        readonly cancel: "Cancel";
        readonly ok: "Ok";
        readonly delete: "Delete";
        readonly copy: "Copy";
        readonly paste: "Paste";
        readonly close: "Close";
        readonly collapse: "Collapse";
        readonly collapseItem: "Collapse {{title}}";
        readonly expand: "Expand";
        readonly expandItem: "Expand {{title}}";
        readonly showAll: "Show all";
        readonly showLess: "Show less";
        readonly seeMore: "See more";
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
        readonly apply: "Apply";
        readonly saveAsPreset: "Save view";
        readonly editPreset: "Edit view";
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
        readonly resultsFor: {
            readonly one: "{{count}} result for:";
            readonly other: "{{count}} results for:";
        };
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
        readonly presets: {
            readonly createTitle: "Save view";
            readonly createDescription: "Save the current filters, sorting, grouping and columns as a view.";
            readonly updateTitle: "Update view";
            readonly updateDescription: "Update this view's name and description.";
            readonly nameLabel: "Title";
            readonly namePlaceholder: "View name";
            readonly duplicateName: "A view with this name already exists";
            readonly descriptionLabel: "Description";
            readonly descriptionPlaceholder: "Optional description";
            readonly save: "Save";
            readonly delete: "Remove";
            readonly share: "Share view";
            readonly copiedToClipboard: "Copied to your clipboard";
            readonly cancel: "Cancel";
        };
        readonly visualizations: {
            readonly table: "Table";
            readonly editableTable: "Editable table";
            readonly card: "Card";
            readonly list: "List";
            readonly kanban: "Kanban";
            readonly graph: "Graph";
            readonly pagination: {
                readonly of: "of";
            };
            readonly settings: "{{visualizationName}} settings";
            readonly reset: "Reset to default";
            readonly viewSelectorLabel: "Select view";
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
                readonly count: "count";
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
        readonly applyingChanges: "Applying changes";
        readonly sendMessage: "Send message";
        readonly thoughtsGroupTitle: "Reasoning";
        readonly resourcesGroupTitle: "Resources";
        readonly thinking: "Thinking...";
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
        readonly view: "View";
        readonly entityRef: {
            readonly candidate: {
                readonly source: "Source";
                readonly applied: "Applied on";
            };
            readonly requisition: {
                readonly lineManager: "Line manager";
                readonly reason: "Reason";
                readonly status: "Status";
            };
        };
        readonly credits: {
            readonly title: "Credits";
            readonly employeeCredits: "Your credits";
            readonly creditsLeft: "{{total}} left";
            readonly monthlyCredits: "Monthly credits";
            readonly creditsError: "Could not load credits";
            readonly upgradePlan: "Upgrade";
            readonly needMoreCredits: "Need more credits?";
        };
        readonly reportCard: {
            readonly tableLabel: "Table";
            readonly openButton: "Open";
        };
        readonly formCard: {
            readonly moreFields: "Open to see all fields";
        };
        readonly aiTable: {
            readonly title: "Table";
            readonly downloadExcel: "Download Excel";
            readonly downloadCsv: "Download CSV";
        };
        readonly dataDownload: {
            readonly title: "Download";
            readonly download: "Download {{format}}";
            readonly exportDashboard: "Export dashboard as {{format}}";
            readonly exporting: "Exporting…";
        };
        readonly dashboardItem: {
            readonly chartType: "Chart type";
            readonly errorTitle: "Error loading data";
            readonly retry: "Retry";
            readonly dataExplanation: "Where does this data come from?";
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
        };
        readonly attachFile: "Attach file";
        readonly recordAudio: "Record audio";
        readonly listening: "Listening…";
        readonly stopRecording: "Stop and transcribe";
        readonly cancelRecording: "Cancel recording";
        readonly transcribing: "Transcribing…";
        readonly micPermissionDenied: "Microphone access is blocked. Allow it in your browser settings to dictate.";
        readonly micError: "Couldn't access the microphone.";
        readonly transcriptionError: "Couldn't transcribe the audio. Try again.";
        readonly removeFile: "Remove";
        readonly fileUploadError: "Upload failed";
        readonly fileUploadBlockedSubmit: "Your message wasn't sent because one of the attachments failed to upload. Remove it or retry.";
        readonly tooManyFilesError: "You can attach up to {{maxFiles}} files at once";
        readonly dropFilesHere: "Drop your files here";
        readonly reply: "Reply";
        readonly removeQuote: "Remove quote";
        readonly clarifyingQuestion: {
            readonly submit: "Submit";
            readonly next: "Next";
            readonly back: "Back";
            readonly skip: "Skip";
            readonly typeYourAnswer: "Type your answer…";
            readonly stepOf: "{{current}} of {{total}}";
            readonly custom: "own answer";
            readonly skipped: "skipped";
            readonly navHint: {
                readonly navigate: "navigate";
                readonly select: "select";
                readonly cancel: "cancel";
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
    readonly chat: {
        readonly placeholder: "Write something here..";
        readonly send: "Send message";
        readonly close: "Close";
        readonly search: "Search";
        readonly searchPlaceholder: "Search messages";
        readonly noResults: "No results";
        readonly previousMatch: "Previous match";
        readonly nextMatch: "Next match";
        readonly closeSearch: "Close search";
        readonly backToLatest: "Jump to latest";
        readonly muted: "Muted";
        readonly expand: "Expand";
        readonly collapse: "Collapse";
        readonly attachFile: "Attach file";
        readonly recordAudio: "Record audio";
        readonly listening: "Listening…";
        readonly stopRecording: "Stop and transcribe";
        readonly cancelRecording: "Cancel recording";
        readonly transcribing: "Transcribing…";
        readonly dropFilesHere: "Drop your files here";
        readonly removeFile: "Remove";
        readonly today: "Today";
        readonly yesterday: "Yesterday";
        readonly sent: "Sent";
        readonly read: "Read";
        readonly readBy: {
            readonly one: "Read by {{count}}";
            readonly other: "Read by {{count}}";
        };
        readonly delivered: "Delivered";
        readonly back: "Back";
        readonly writing: "Writing…";
        readonly isTyping: "{{name}} is writing…";
        readonly twoTyping: "{{first}} and {{second}} are writing…";
        readonly severalTyping: "Several people are writing…";
        readonly copy: "Copy";
        readonly copied: "Copied";
        readonly delete: "Delete";
        readonly deletedMessage: "Message deleted";
        readonly moreActions: "Message actions";
        readonly info: "Info";
        readonly viewProfile: "View profile";
        readonly reply: "Reply";
        readonly react: "Add reaction";
        readonly download: "Download";
        readonly removeQuote: "Remove quote";
        readonly scrollToBottom: "Scroll to bottom";
        readonly newMessages: "New messages";
        readonly unreadCount: {
            readonly one: "{{count}} unread";
            readonly other: "{{count}} unread";
        };
        readonly emptyConversation: "No messages yet";
        readonly connecting: "Connecting…";
        readonly error: "Couldn't load this conversation";
        readonly loadingOlder: "Loading earlier messages…";
    };
    readonly dataChart: {
        readonly heatmapNotSupported: "Heatmap not supported at this size";
        readonly barChartVertical: "Bar (vertical)";
        readonly barChartHorizontal: "Bar (horizontal)";
        readonly lineChart: "Line";
        readonly funnel: "Funnel";
        readonly pieChart: "Pie";
        readonly table: "Table";
        readonly emptyState: {
            readonly title: "No data available";
            readonly description: "Try a different date or fewer filters";
        };
    };
    readonly select: {
        readonly noResults: "No results found";
        readonly loadingMore: "Loading...";
        readonly applySelection: "Apply selection";
        readonly create: "Create";
        readonly createWithValue: "Create \"{{value}}\"";
        readonly createEmptyMessage: "Try another search or create a new item";
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
            readonly addQuestion: "Add question";
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
            readonly allowMultiSelection: "Allow multi-selection";
            readonly allowCreate: "Allow creation";
            readonly singleSelection: "Single selection";
            readonly multiSelection: "Multi selection";
            readonly questionType: "Question type";
            readonly questionOptions: "Question options";
            readonly actions: "Actions";
            readonly locked: "Locked";
            readonly lockedSectionNotice: "These questions are predefined and can't be edited, moved, or removed.";
            readonly lockedQuestionNotice: "This question is predefined and can't be edited or removed.";
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
            readonly enhanceButtonLabel: "Generate";
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
            readonly maxFilesReached: "Maximum {{maxFiles}} files";
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
    readonly graph: {
        readonly canvas: "Graph canvas";
        readonly view: "Graph view";
        readonly controls: {
            readonly findMe: "Find me";
            readonly fitToView: "Fit to view";
            readonly zoomIn: "Zoom in";
            readonly zoomOut: "Zoom out";
            readonly navigation: "Graph navigation";
        };
    };
    readonly wizard: {
        readonly previous: "Previous";
        readonly next: "Continue";
        readonly submit: "Submit";
        readonly stepOf: "Step {{current}} of {{total}}";
    };
};

declare type DetailsItemContent = (ComponentProps<typeof DataList.Item> & {
    type: "item";
}) | (ComponentProps<typeof DataList.PersonItem> & {
    type: "person";
}) | (ComponentProps<typeof DataList.CompanyItem> & {
    type: "company";
}) | (ComponentProps<typeof DataList.TeamItem> & {
    type: "team";
}) | (ComponentProps<typeof Weekdays> & {
    type: "weekdays";
}) | (ComponentProps<typeof DataList.DotTagItem> & {
    type: "dot-tag";
}) | (Props & {
    type: "alert-tag";
}) | (F0TagBalanceProps & {
    type: "balance-tag";
}) | (F0TagStatusProps & {
    type: "status-tag";
}) | (F0TagRawProps & {
    type: "raw-tag";
}) | {
    [T in TagType_2]: {
        type: "tag-list";
        tagList: F0TagListProps<T>;
    };
}[TagType_2] | {
    type: "avatar-list";
    avatarList: F0AvatarListProps;
} | (ComponentProps<typeof F0FileItem> & {
    type: "file";
});

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

export declare const DropOverlay: ({ visible, onFilesDropped }: DropOverlayProps) => JSX_2.Element;

declare interface DropOverlayProps {
    visible: boolean;
    onFilesDropped: (files: File[]) => void;
}

/**
 * Employee credits usage data returned by the host app.
 *
 * Represents the logged-in employee's personal monthly allocation,
 * independent of any company-wide pool.
 */
declare type EmployeeCreditsUsage = {
    used: number;
    total: number;
};

/**
 * Grouped configuration for entity references in the AI chat.
 * Combines resolver functions (data fetching) with URL builders (navigation).
 */
export declare type EntityRefs = {
    resolvers?: EntityResolvers;
    urls?: EntityUrlBuilders;
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
    candidate?: (id: string) => Promise<CandidateProfile>;
    expense?: (id: string) => Promise<ExpenseProfile>;
    jobPosting?: (id: string) => Promise<JobPostingProfile>;
    requisition?: (id: string) => Promise<RequisitionProfile>;
    vacancy?: (id: string) => Promise<VacancyProfile>;
    /**
     * Search for persons by name query. Used by the @mention autocomplete
     * in the chat input to let users reference specific employees.
     */
    searchPersons?: (query: string) => Promise<PersonProfile[]>;
};

/**
 * Map of URL builder functions keyed by entity type.
 * Each builder takes an entity ID and returns the URL to navigate to.
 *
 * When a URL builder is not provided for an entity type, the hover card
 * will not show a navigation action.
 */
export declare type EntityUrlBuilders = {
    person?: (id: string) => string;
    candidate?: (id: string) => string;
    expense?: (id: string) => string;
    jobPosting?: (id: string) => string;
    requisition?: (id: string) => string;
    vacancy?: (id: string) => string;
};

/**
 * Profile data for an expense entity, resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export declare type ExpenseProfile = {
    id: string | number;
    description?: string;
    amount?: string;
    status?: string;
};

export declare const F0ActionItem: ({ title, status, inGroup }: F0ActionItemProps) => JSX_2.Element;

/**
 * Props for the F0ActionItem component
 */
export declare interface F0ActionItemProps {
    /**
     * The title text displayed next to the status icon
     */
    title?: string;
    /**
     * Current status of the action item
     */
    status?: "inProgress" | "executing" | "writing" | "completed";
    /**
     * Whether the action item is part of a group
     */
    inGroup?: boolean;
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0AiChat: ({ header: headerProp, messages: messagesProp, input: inputProp, }: F0AiChatProps) => JSX_2.Element | null;

/**
 * Headless chat header. Renders a top bar with title (or thread selector),
 * credits popover, fullscreen toggle and close button. Has two visual
 * variants:
 * - with-history: title acts as a thread selector (clickable) — the host
 *   wires `onOpenHistory` to mount its own history dialog.
 * - legacy: title is static; a "new chat" button is shown when `hasMessages`.
 *
 * Decoupled from CopilotKit and `useAiChat()` — everything via props.
 */
export declare const F0AiChatHeader: ({ historyEnabled, title, currentThreadTitle, fullscreen, lockVisualizationMode, onToggleVisualizationMode, onClose, onNewChat, onOpenHistory, hasMessages, credits, employeeCredits, }: F0AiChatHeaderProps) => JSX_2.Element;

export declare type F0AiChatHeaderProps = {
    /**
     * When true, renders the with-history variant: the title acts as a thread
     * selector that triggers `onOpenHistory`. When false (default), renders
     * the legacy variant with `title` shown as a static heading.
     */
    historyEnabled?: boolean;
    /** Static title for the legacy variant. Empty or undefined hides the heading. */
    title?: string;
    /**
     * With-history variant: title of the currently loaded thread, or null for
     * a brand-new conversation (renders the "New conversation" placeholder).
     */
    currentThreadTitle?: string | null;
    /** Whether the chat is currently in fullscreen mode (controls expand/minimize icon). */
    fullscreen?: boolean;
    /** When true, hides the expand/minimize button and the history selector. */
    lockVisualizationMode?: boolean;
    /** Toggle fullscreen ↔ sidepanel. */
    onToggleVisualizationMode?: () => void;
    /** Close button (X) callback. */
    onClose: () => void;
    /**
     * Legacy variant only: callback for the "new chat" button. Hidden when
     * `hasMessages` is false (i.e. the thread is empty so a new chat would be
     * a no-op).
     */
    onNewChat?: () => void;
    /** With-history variant: callback fired when the user clicks the title. */
    onOpenHistory?: () => void;
    /** Legacy variant gate: only renders the "new chat" button when true. */
    hasMessages?: boolean;
    /** Credits configuration. When present, renders the credits popover button. */
    credits?: AiChatCredits;
    /**
     * Employee-level credits configuration. When present, an employee-only
     * popover is rendered **instead of** the classic one (mutually exclusive
     * with `credits`). Hosts opt in per-employee.
     */
    employeeCredits?: AiChatEmployeeCredits;
};

/**
 * Headless chat-history dialog. Receives threads + handlers via props so
 * it can be wired against any backend or mocked in stories. No CopilotKit
 * or `useAiChat()` dependency.
 */
export declare const F0AiChatHistory: ({ onClose, onSelectThread, onNewChat, threads, isLoading, error, pinnedIds, onPinThread, onUnpinThread, onDeleteThread, }: F0AiChatHistoryProps) => ReactPortal;

export declare type F0AiChatHistoryProps = {
    /** Close the dialog (overlay click, ESC, or post-selection). */
    onClose: () => void;
    /** Called when the user picks a thread to load. */
    onSelectThread: (threadId: string, title: string) => void;
    /** Called when the user clicks "Start new chat". */
    onNewChat: () => void;
    /** Thread list (already fetched). */
    threads: ChatThread[];
    /** Whether the threads are still being fetched. */
    isLoading: boolean;
    /** Fetch error message, or null when no error. */
    error: string | null;
    /** Set of pinned thread IDs. */
    pinnedIds: Set<string>;
    /** Called when the user pins a thread. */
    onPinThread: (id: string) => void;
    /** Called when the user unpins a thread. */
    onUnpinThread: (id: string) => void;
    /** Called when the user deletes a thread (may be async). */
    onDeleteThread: (id: string) => Promise<void> | void;
};

/**
 * Slot composition for the F0 AI chat shell. F0 ships the shell + UI
 * primitives; the consumer (factorial in production, the mock runtime
 * in stories) supplies the connected slot components that wire data
 * through whatever runtime they choose (CopilotKit, Mastra, mock, …).
 *
 * Slots are optional so the shell renders cleanly even when no runtime
 * is mounted (the chat just stays empty).
 */
export declare interface F0AiChatProps {
    /** Header slot rendered at the top of the chat window. */
    header?: ReactNode;
    /** Messages slot rendered inside the scrollable area. */
    messages?: ReactNode;
    /** Input slot rendered at the bottom (textarea + suggestions + disclaimer). */
    input?: ReactNode;
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0AiChatProvider: ({ enabled, side, initialMessage, chatHeader, chatMessages, chatInput, welcomeScreenSuggestions, disclaimer, resizable, defaultVisualizationMode, lockVisualizationMode, historyEnabled, footer, VoiceMode, entityRefs, canvasActions, canvasEntities, credits, employeeCredits, creditWarning, fileAttachments, onTranscribe, onThumbsUp, onThumbsDown, children, agent, tracking, }: AiChatProviderProps) => JSX_2.Element;

/**
 * Headless chat composer.
 *
 * Owns local UI state (text, cursor, attached files, mention popover) and
 * emits a structured payload via `onSubmit`. The consumer decides what to
 * do with it (forward to CopilotKit, log it, mock it…). It carries no
 * coupling to `useAiChat()` or CopilotKit — wrappers like F0AiChat
 * provide the wiring.
 */
export declare const F0AiChatTextArea: ({ onSubmit, onStop, inProgress, onBeforeSubmit, placeholders, creditWarning, clarifyingUI, pendingContext, onPendingContextChange, pendingQuote, onPendingQuoteChange, fileAttachments, onTranscribe, searchPersons, onProcessFilesRef, disclaimer, footer, isWelcomeScreen, fullscreen, welcomeScreenSuggestions, onSuggestionClick, ref, }: F0AiChatTextAreaProps) => JSX_2.Element;

export declare type F0AiChatTextAreaProps = {
    ref: RefObject<HTMLDivElement>;
    /** Emitted when the user submits. Awaited so the textarea can stay disabled. */
    onSubmit: (payload: F0AiChatTextAreaSubmitPayload) => void | Promise<void>;
    /** Called when the user clicks the stop button while a response is streaming. */
    onStop?: () => void;
    /** Whether a response is currently streaming. Switches the submit button to "stop". */
    inProgress?: boolean;
    /**
     * Optional gate run before submission. Return `false` to abort the send
     * (e.g. show a quota dialog). The textarea stays focused and the input
     * is preserved.
     */
    onBeforeSubmit?: () => boolean | Promise<boolean>;
    /** Rotating placeholders for the typewriter effect. Empty/single-entry skips the typewriter. */
    placeholders?: string[];
    /** Credit warning banner shown above the composer. */
    creditWarning?: AiChatCreditWarning;
    /**
     * Optional ReactNode rendered in place of the input. When present the
     * composer enters "clarifying" mode: form submission is blocked, the
     * gradient border activates, and a nav-hint replaces the disclaimer.
     * The host owns the panel (typically `F0ClarifyingPanel`) and its
     * state — F0 just renders the slot.
     */
    clarifyingUI?: ReactNode;
    /** Pending context shown as a chip; prepended invisibly on submit. */
    pendingContext?: PendingContext | null;
    /** Called when the user dismisses pending context (or it gets consumed on submit). */
    onPendingContextChange?: (context: PendingContext | null) => void;
    /** Pending quote shown as a chip above the textarea. */
    pendingQuote?: PendingQuote | null;
    /** Called when the user dismisses the quote (or it gets consumed on submit). */
    onPendingQuoteChange?: (quote: PendingQuote | null) => void;
    /** File attachment configuration. When omitted, attachments are disabled. */
    fileAttachments?: AiChatFileAttachmentConfig;
    /**
     * Voice dictation. When provided, a microphone button is shown: recorded
     * audio is transcribed and the transcript fills the textarea (the user
     * reviews and sends it manually). When omitted, the microphone is hidden.
     */
    onTranscribe?: TranscribeFn;
    /** Async search used by the @-mention popover. When omitted, mentions are disabled. */
    searchPersons?: (query: string) => Promise<PersonProfile[]>;
    /**
     * Registers a callback that lets external drop zones forward dropped
     * files to this textarea's file-attachment pipeline. The textarea calls
     * the registrar with the handler on mount and with `null` on unmount.
     */
    onProcessFilesRef?: (handler: ((files: File[]) => void) | null) => void;
    /**
     * Optional disclaimer text + link rendered below the textarea. Hidden on
     * the welcome screen of the fullscreen layout to give the footer room.
     */
    disclaimer?: AiChatDisclaimer;
    /**
     * Optional footer (e.g. powered-by, legal copy) rendered below the
     * textarea on the welcome screen.
     */
    footer?: ReactNode;
    /**
     * Whether the chat is currently in its welcome state (no messages yet).
     * Controls footer visibility and welcome-screen-only layout tweaks.
     */
    isWelcomeScreen?: boolean;
    /**
     * Grouped suggestions rendered as outline buttons above the composer on
     * the welcome screen. Clicking a group opens a single popover (above the
     * row, left-aligned, spanning the composer width) with that group's items.
     * Hovering an item previews its prompt in the textarea placeholder.
     */
    welcomeScreenSuggestions?: WelcomeScreenSuggestion[];
    /** Called when the user clicks a sub-suggestion. Receives the picked
     *  `item` and its parent `group` (the outline-button entry). */
    onSuggestionClick?: (item: WelcomeScreenSuggestionItem, group: WelcomeScreenSuggestion) => void;
    /**
     * When true on the welcome screen, the composer adopts the fullscreen
     * layout: the input slot grows to claim the bottom half (so the textarea
     * rises toward the vertical center), and the welcome suggestions render
     * below the textarea with their popover opening downward (instead of above).
     */
    fullscreen?: boolean;
};

/**
 * Payload emitted by `F0AiChatTextArea` when the user submits.
 *
 * `text` contains HTML-escaped user-typed text with `<entity-ref>` tags
 * for @mentions only. The reply quote (if any) and pending context
 * travel as separate structured fields — the adapter (factorial) owns
 * the wire encoding when forwarding to the agent.
 */
export declare type F0AiChatTextAreaSubmitPayload = {
    text: string;
    files: UploadedFile[];
    context: PendingContext | null;
    quote: PendingQuote | null;
};

export declare const F0AiInsightCard: WithDataTestIdReturnType_2<ForwardRefExoticComponent<F0AiInsightCardPublicProps & RefAttributes<HTMLDivElement>> & {
Skeleton: () => JSX_2.Element;
}>;

export declare type F0AiInsightCardProps = {
    description?: string;
    heading: string;
    label?: string;
    selected?: boolean;
    onClick?: () => void;
    onAskOne?: () => void;
} & AiInsightCardContent;

declare type F0AiInsightCardPublicProps = Omit<CardInternalProps, (typeof privateProps)[number]>;

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

/** Assistant-flavoured `F0Message`. Same shape — alias kept for clarity. */
export declare type F0AIMessage = F0Message;

export declare const F0AiMessagesContainer: (props: F0AiMessagesContainerProps) => JSX_2.Element;

export declare type F0AiMessagesContainerProps = {
    /** Optional override for the assistant bubble component. */
    AssistantMessage?: MessageSlotComponent;
    /** Optional override for the user bubble component. */
    UserMessage?: MessageSlotComponent;
    /** Called when the user triggers regeneration on an assistant message. */
    onRegenerate?: (messageId: string) => void;
    /** Called when the user copies an assistant message's content. */
    onCopy?: (content: string) => void;
    /** Pre-processed turns to render (assembled by the connected wrapper). */
    turns: RenderableTurn[];
    /** Show a skeleton in place of the turns while a thread is being fetched. */
    isLoadingThread?: boolean;
    /** Optional React node rendered inline at the end of the list (e.g. CopilotKit interrupt). */
    interrupt?: ReactNode;
    /** Welcome phrase shown centered when the chat is empty. Falls back to
     *  `translations.ai.defaultInitialMessage` if omitted. */
    initialMessage?: string | string[];
    /** Called when the user clicks the welcome phrase (used by F0AiChat to open
     *  the pong easter egg). When omitted the phrase is non-interactive. */
    onWelcomeClick?: () => void;
    /** Returns a React node for an assistant message's tool call, or null. */
    renderToolCall?: F0AssistantMessageExtraProps["renderToolCall"];
    /** Called when the user selects text and clicks Reply (user or assistant bubble). */
    onReplyQuote?: (text: string) => void;
    /** Called when an assistant message finishes generating — for analytics. */
    onAssistantMessageRendered?: (message: Message) => void;
    /** Disables auto-scrollIntoView on new user messages (fullscreen sets false). */
    autoScrollUserIntoView?: boolean;
    /** Fullscreen welcome layout: pushes the welcome phrase to the bottom of the
     *  top half so it meets the composer near the vertical center. */
    fullscreen?: boolean;
    /**
     * Renders the markdown content of user/assistant messages. The connected
     * wrapper provides a CopilotKit + f0-markdown-renderers implementation;
     * standalone consumers can omit it and a plain whitespace-preserving
     * fallback is used.
     */
    renderMarkdown?: (content: string) => ReactNode;
    /** When omitted, feedback (thumbs + modal) is hidden. */
    feedback?: FeedbackConfig;
    /** Pause turnMinHeight observer (e.g. while a clarifying panel is open). */
    freezeLayout?: boolean;
    /** Disable the top/bottom scroll shadows. */
    noShadows?: boolean;
    /** Passthrough children appended after the last turn (CopilotKit parity). */
    children?: ReactNode;
};

/**
 * Information source attached to an assistant message.
 */
export declare type F0AiMessageSource = {
    title: string;
    link?: string;
    /** Name of an icon exported by `@factorialco/f0-react/icons/app`. */
    icon?: string;
    targetBlank?: boolean;
};

/**
 * Renders a collapsible group of information sources attached to an
 * assistant message. Sources without a `link` render as plain rows;
 * sources with a `link` render as clickable Actions. Pure presentational
 * — no hooks, no AI coupling.
 */
export declare function F0AiMessageSources({ sources, title: titleProp, }: F0AiMessageSourcesProps): JSX_2.Element | null;

export declare namespace F0AiMessageSources {
    var displayName: string;
}

export declare type F0AiMessageSourcesProps = {
    sources: F0AiMessageSource[];
    /**
     * Override the section title. Defaults to the
     * `ai.resourcesGroupTitle` translation key.
     */
    title?: string;
};

export declare const F0AiPong: ({ onClose }: F0AiPongProps) => JSX_2.Element;

declare interface F0AiPongProps {
    onClose: () => void;
}

/**
 * Wraps a panel/canvas that F0AiChat is regenerating. While `active`, the
 * content blurs and stops receiving pointer events, and a centered pill — the
 * One icon plus an "Applying changes" label — floats over it, so the user gets
 * clear feedback that the surface is being updated and shouldn't be edited.
 *
 * Mirrors the survey form-builder "applying changes" affordance, lifted into
 * the F0AiChat family so any surface paired with the chat can reuse it.
 */
export declare const F0AiProcessingOverlay: NamedExoticComponent<F0AiProcessingOverlayProps>;

export declare interface F0AiProcessingOverlayProps {
    /**
     * When `true`, the wrapped content is blurred and locked
     * (`pointer-events-none`) and the floating status pill is shown over it.
     */
    active: boolean;
    /**
     * Pill label. Defaults to the translated "Applying changes"
     * (`ai.applyingChanges`).
     */
    label?: string;
    /** Extra classes for the wrapper element. */
    className?: string;
    /** The panel/canvas content the assistant is editing. */
    children: ReactNode;
}

export declare function F0AiProposalCard(props: F0AiProposalCardProps): JSX_2.Element;

export declare namespace F0AiProposalCard {
    var displayName: string;
}

export declare interface F0AiProposalCardActions {
    /** Label for the primary action button. */
    primaryActionLabel: string;
    /** Optional icon shown before the primary action label. */
    primaryActionIcon?: IconType;
    /** Whether the action footer is visible. */
    showActions?: true;
    /** Called when the primary action is clicked. */
    onPrimaryAction: () => void;
}

export declare interface F0AiProposalCardBaseProps extends DataAttributes_2 {
    /** Module avatar shown in the card header. */
    module?: ModuleId;
    /** Header label describing the proposal type. */
    heading: string;
    /** Main proposal title. */
    title: string;
    /** Optional secondary metadata line. */
    subtitle?: string;
    /** Proposal details. Line breaks are preserved when expanded. */
    description: string;
    /** Label for the inline expansion control. */
    seeMoreLabel: string;
    /** Maximum number of characters shown before expansion. */
    maxCollapsedDescriptionLength?: number;
}

export declare interface F0AiProposalCardHiddenActions {
    /** Hide the action footer and omit action props. */
    showActions: false;
}

export declare type F0AiProposalCardProps = F0AiProposalCardBaseProps & (F0AiProposalCardActions | F0AiProposalCardHiddenActions);

/**
 * Compact inline table for small datasets shown directly in an AI chat
 * stream. Headers come from `columnLabels` when present, otherwise from
 * the raw column id. Shows a download dropdown (Excel / CSV) — Excel
 * support is loaded lazily via `xlsx`. Pure presentational — no hooks,
 * no AI coupling.
 */
export declare function F0AiTableCard({ dataset, title: titleProp, filename, }: F0AiTableCardProps): JSX_2.Element | null;

export declare namespace F0AiTableCard {
    var displayName: string;
}

export declare type F0AiTableCardProps = {
    /**
     * Tabular data to render. Reuses the same shape used by the
     * `dataDownload` canvas entity so the agent payload travels untouched.
     */
    dataset: DataDownloadDataset;
    /**
     * Title shown above the table. Defaults to the `ai.aiTable.title`
     * translation key (English: "Table").
     */
    title?: string;
    /**
     * Filename used for downloads (without extension). Defaults to the
     * slugified title, or `"table"` when no title is provided.
     */
    filename?: string;
};

declare type F0AssistantMessageExtraProps = {
    /**
     * Returns a React node for the message's tool call, or null when there is
     * nothing to render. The container's connected wrapper closes over the
     * full message list to call CopilotKit's lazy tool renderer; standalone
     * consumers can omit it.
     */
    renderToolCall?: (message: Message) => ReactNode | null;
    /** Called when the user selects text in this message and clicks Reply. */
    onReplyQuote?: (text: string) => void;
    /** Called once the assistant message has finished generating — for analytics. */
    onRendered?: (message: Message) => void;
    /**
     * Renders the assistant text content. The connected wrapper provides a
     * markdown-aware implementation; standalone consumers can omit it and a
     * plain whitespace-preserving fallback is used instead.
     */
    renderMarkdown?: (content: string) => ReactNode;
};

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
    state?: F0IconProps["state"];
} & Partial<Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">>;

/**
 * Optional extras every avatar entry may carry regardless of `type`.
 * `tooltipDescription` is rendered as the tooltip's secondary line via the
 * underlying `Tooltip` `description` slot (use it for emails, roles, etc.).
 */
declare type F0AvatarListExtras = {
    tooltipDescription?: string;
};

declare type F0AvatarListProps = {
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
    /**
     * Controls the scroll behavior of the `+N` overflow popover that lists
     * collapsed avatars (including their `tooltipDescription` entries).
     * - `"vertical"` (default): caps the popover height and scrolls vertically.
     * - `"none"`: lets the popover grow to fit all entries.
     * @default "vertical"
     */
    tooltipScroll?: "vertical" | "none";
} & F0AvatarListPropsAvatars;

declare type F0AvatarListPropsAvatars = {
    type: "person";
    avatars: (Omit<PersonAvatarVariant, "type"> & // Allow to have more properties in the avatar variant
    F0AvatarListExtras & Record<string, unknown>)[];
} | {
    type: "team";
    avatars: (Omit<TeamAvatarVariant, "type"> & F0AvatarListExtras & Record<string, unknown>)[];
} | {
    type: "company";
    avatars: (Omit<CompanyAvatarVariant, "type"> & F0AvatarListExtras & Record<string, unknown>)[];
} | {
    type: "flag";
    avatars: (Omit<FlagAvatarVariant, "type"> & F0AvatarListExtras & Record<string, unknown>)[];
} | {
    type: "file";
    avatars: (Omit<FileAvatarVariant, "type"> & F0AvatarListExtras & Record<string, unknown>)[];
};

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
 * Shared inline card rendered in the AI chat for any canvas entity.
 * Shows an avatar, title, optional description, and a configurable action button.
 *
 * @deprecated Being replaced by `F0CardHorizontal` (`@/experimental/F0CardHorizontal`).
 * The co-creation flow already renders these cards with `F0CardHorizontal` directly
 * (Open/Close → `primaryAction`; superseded → a faded `opacity-50 pointer-events-none`
 * wrapper). Don't add new usages; migrate the remaining one
 * (`F0AiMessagesContainer/FormCard`) once its inline `children` preview has an
 * `F0CardHorizontal`-friendly home.
 * @removeIn 5.0.0
 */
export declare function F0CanvasCard({ avatar, title, description, isActive, action, children, }: F0CanvasCardProps): JSX_2.Element;

export declare namespace F0CanvasCard {
    var displayName: string;
}

/**
 * @deprecated Being replaced by `F0CardHorizontal`. See {@link F0CanvasCard}.
 * @removeIn 5.0.0
 */
export declare type F0CanvasCardProps = {
    /** Avatar to display: a module icon or a file-type badge */
    avatar?: CanvasCardAvatar;
    /** Primary title */
    title: string;
    /** Optional secondary description line */
    description?: string;
    /** Whether this card's content is currently shown in the canvas (only meaningful for action.type === "open") */
    isActive?: boolean;
    /** Action exposed by the card: either an Open/Close toggle or a custom icon button */
    action: CanvasCardAction;
    /** Optional content rendered below the card header (e.g. a data preview) */
    children?: React.ReactNode;
};

/**
 * Entity-agnostic canvas panel that renders content alongside the chat sidebar.
 *
 * Looks up the entity definition from the `entities` prop using
 * `content.type` and delegates rendering of body and header actions to the
 * entity module. The panel shell handles animation, body scroll area, and
 * refreshKey bookkeeping (auto-increments when `content` changes by identity).
 *
 * Headless: no CopilotKit or `useAiChat()` dependency — the host wires
 * `content`, `onClose` and `entities` directly.
 */
export declare function F0CanvasPanel({ content, onClose, entities, side, }: F0CanvasPanelProps): ReactNode;

export declare namespace F0CanvasPanel {
    var displayName: string;
}

export declare type F0CanvasPanelProps = {
    /** Current canvas content to render. When null, the panel collapses. */
    content: CanvasContent | null;
    /** Called when the user closes the canvas. */
    onClose: () => void;
    /** Canvas entity registry keyed by `CanvasContent["type"]`. */
    entities?: Record<string, CanvasEntityDefinition<any>>;
    /**
     * Edge the adjacent chat panel docks to. The canvas hugs the seam on the
     * opposite side, so the rounded corner / open border face the chat.
     * Defaults to "right" (chat on the right -> canvas seam on its right).
     */
    side?: "left" | "right";
};

declare interface F0CardHorizontalProps {
    /**
     * The primary line of text.
     */
    title: string;
    /**
     * Optional secondary line shown beneath the title (wraps across multiple
     * lines when long).
     */
    description?: string;
    /**
     * Optional avatar rendered at a fixed `lg` size on the left (the size is not
     * configurable). Accepts any avatar type in the system: person, company, team,
     * file, flag, icon, emoji, module, alert, date, pulse. Types without a `lg`
     * variant (date, pulse) render at their intrinsic size.
     */
    avatar?: CardAvatarVariant;
    /**
     * The primary action button, shown at the trailing edge of the row.
     */
    primaryAction?: CardPrimaryAction;
    /**
     * Secondary actions (buttons) or a single link, shown before the primary action.
     */
    secondaryActions?: CardSecondaryAction[] | CardSecondaryLink;
    /**
     * Overflow (⋯) menu actions, rendered as the trailing control of the row.
     */
    otherActions?: DropdownItem[];
    /**
     * Confirm/reject variant: renders an icon-only ✗ (reject) + ✓ (confirm) pair
     * instead of the standard actions. Provide either or both.
     */
    confirmAction?: CardHorizontalConfirmAction;
    /**
     * Reject (✗) action of the confirm/reject variant. See {@link confirmAction}.
     */
    rejectAction?: CardHorizontalConfirmAction;
    /**
     * Resolved-state icon shown at the trailing edge in place of any actions — the
     * outcome of a confirm/reject row, e.g.
     * `{ icon: Check, variant: "positive", label: "Accepted" }`.
     * Takes precedence over the action props.
     */
    status?: CardHorizontalStatus;
    /**
     * Strikes through and dims the title/description, marking the row's subject as
     * void or closed (e.g. a rejected request). Purely presentational — pair it
     * with the matching `status` tag at the call site.
     */
    inactive?: boolean;
    /**
     * Container width at which the actions drop to their own line (below it) vs.
     * sit inline (at/above it). `never` keeps them inline at every width.
     * @default "never"
     */
    stackAt?: CardHorizontalStackAt;
    /**
     * Stretch to fill the height of its container.
     */
    fullHeight?: boolean;
    /**
     * Alert banner displayed above the row with a coloured header strip and matching
     * border. Supports info, warning, critical and positive variants.
     * Use `visible` + `onDismiss` for controlled dismiss behaviour.
     */
    alert?: CardAlertProps;
    /**
     * Opt-in: makes the whole row a link to this href. The row only becomes a
     * click target (pointer cursor + hover affordance + overlay link) when `link`
     * or `onClick` is set — otherwise it's a static row whose only interactive
     * parts are its actions.
     */
    link?: string;
    /**
     * Opt-in: called when the row is clicked. Like `link`, it turns the whole row
     * into an explicit click target (pointer cursor + hover affordance). Use it
     * for cards whose entire surface is the action (e.g. entry-point cards with no
     * CTA button); leave it unset for rows that act only through their buttons.
     */
    onClick?: () => void;
    /**
     * Disables the full-row overlay link (used with `link`) so a parent can manage
     * drag-and-drop while still allowing click navigation via `onClick`.
     */
    disableOverlayLink?: boolean;
}

/**
 * Clarifying question panel — content only, no mount animation.
 *
 * The parent slot (F0AiChatTextArea) owns the enter/exit animation so
 * nested height animations don't conflict. Step-to-step transitions are
 * still animated internally via F0ClarifyingPanelContent.
 *
 * When used standalone (e.g. Storybook), wrap in a motion.div with
 * `overflow-hidden` and `height: 0 → "auto"`.
 */
export declare const F0ClarifyingPanel: ({ clarifyingQuestion, isSubmitDisabled, }: F0ClarifyingPanelProps) => JSX_2.Element;

declare interface F0ClarifyingPanelProps {
    clarifyingQuestion: ClarifyingQuestionState;
    /**
     * Disables submitting the final step (confirm button, Enter on the custom
     * answer input, and Skip) — e.g. while the assistant is still streaming a
     * response. Step navigation and option selection stay interactive.
     */
    isSubmitDisabled?: boolean;
}

declare type F0FileAction = {
    icon?: IconType;
    label: string;
    onClick: () => void;
    critical?: boolean;
};

/**
 * @experimental This is an experimental component, use it at your own risk
 */
declare const F0FileItem: WithDataTestIdReturnType<ForwardRefExoticComponent<F0FileItemProps & RefAttributes<HTMLDivElement>>>;

declare interface F0FileItemProps extends HTMLAttributes<HTMLDivElement> {
    file: File | FileDef;
    actions?: F0FileAction[];
    disabled?: boolean;
    size?: F0FileItemSize;
}

declare type F0FileItemSize = (typeof f0FileItemSizes)[number];

declare const f0FileItemSizes: readonly ["md", "lg"];

/**
 * @deprecated Being replaced by `F0CardHorizontal` (`@/experimental/F0CardHorizontal`),
 * which this component already wraps. Use `F0CardHorizontal` directly: `confirmAction` /
 * `rejectAction` for the pending state, `status` for the resolved outcome, and
 * `secondaryActions` for a single CTA. The co-creation flow no longer uses this component —
 * don't add new usages.
 * @removeIn 5.0.0
 */
export declare const F0HILActionConfirmation: ({ text, description, avatar, confirmationText, onConfirm, cancelText, onCancel, stackAt, }: F0HILActionConfirmationProps) => JSX_2.Element;

/**
 * Props for the F0HILActionConfirmation component.
 *
 * Renders an inline approve/reject row built on `F0CardHorizontal`'s confirm/reject
 * variant: the prompt as the row title, with icon-only ✓ (confirm) and ✗
 * (reject) buttons at the trailing edge.
 *
 * @deprecated Being replaced by `F0CardHorizontal`. See {@link F0HILActionConfirmation}.
 * @removeIn 5.0.0
 */
export declare type F0HILActionConfirmationProps = {
    /**
     * The prompt shown as the row title (e.g. the action awaiting confirmation).
     * Required — a confirmation without a prompt has no meaning.
     */
    text: string;
    /**
     * Optional secondary line shown beneath the title (single line, truncated).
     */
    description?: F0CardHorizontalProps["description"];
    /**
     * Optional avatar rendered on the left of the row. Accepts any avatar type in
     * the system (person, company, team, file, icon, emoji, …).
     */
    avatar?: F0CardHorizontalProps["avatar"];
    /**
     * Container width at which the ✓/✗ actions drop onto their own line instead of
     * staying inline. Prevents the buttons from overlapping the prompt in narrow
     * containers. Set to `"never"` to keep them inline at every width.
     * @default "sm"
     */
    stackAt?: F0CardHorizontalProps["stackAt"];
    /**
     * Accessible label and tooltip for the confirm (✓) button.
     */
    confirmationText: string;
    /**
     * Callback fired when the confirm button is clicked.
     */
    onConfirm: () => void;
    /**
     * Accessible label and tooltip for the reject (✗) button.
     */
    cancelText: string;
    /**
     * Callback fired when the reject button is clicked.
     */
    onCancel: () => void;
};

declare interface F0IconProps extends SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {
    icon: IconType;
    size?: "lg" | "md" | "sm" | "xs";
    state?: "normal" | "animate";
    color?: "default" | "currentColor" | `#${string}` | Lowercase<NestedKeyOf<typeof f1Colors.icon>>;
}

declare type F0LinkProps = Omit<ActionLinkProps, "variant" | "href"> & {
    variant?: ActionLinkVariant;
    stopPropagation?: boolean;
    href?: string;
};

export declare type F0Message = {
    id: string;
    role: "user" | "assistant" | "system" | "tool";
    content?: unknown;
    toolCalls?: F0ToolCall[];
    toolCallId?: string;
    createdAt?: string;
    generativeUI?: () => unknown;
    rawData?: unknown;
    /**
     * Reply quote text attached to the message by the composer. Rendered
     * as a block above the user bubble. Adapters (factorial / mock) own
     * the wire encoding; F0 only reads this structured field.
     */
    replyQuote?: string;
    [key: string]: any;
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

declare const F0TagAlert: WithDataTestIdReturnType_2<ForwardRefExoticComponent<Props_3 & RefAttributes<HTMLDivElement>>>;

declare const F0TagBalance: WithDataTestIdReturnType_2<ForwardRefExoticComponent<F0TagBalanceProps_2 & RefAttributes<HTMLDivElement>>>;

declare type F0TagBalanceProps = {
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

declare const F0TagCompany: WithDataTestIdReturnType_2<ForwardRefExoticComponent<F0TagCompanyProps & RefAttributes<HTMLDivElement>>>;

declare type F0TagListProps<T extends TagType_2> = {
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

declare const F0TagPerson: WithDataTestIdReturnType_2<ForwardRefExoticComponent<F0TagPersonProps & RefAttributes<HTMLDivElement>>>;

declare type F0TagRawProps = {
    /**
     * The label to display in the tag or used for accessible text
     */
    text: string;
    /**
     * Additional accessible text to display in the tag
     */
    additionalAccessibleText?: string;
    /**
     * Info text to display an i icon and a tooltip next to the tag
     */
    info?: string;
    /**
     * Extra classes merged onto the tag (e.g. to give it a background).
     */
    className?: string;
} & ({
    icon: IconType;
    onlyIcon: true;
} | {
    icon?: IconType;
    onlyIcon?: boolean;
});

declare interface F0TagStatusProps {
    text: string;
    variant: Variant;
    /**
     * Sometimes you need to clarify the status for screen reader users
     * E.g., when showing a tooltip for sighted user, provide the tootip text to this prop because tooltips aren't accessible
     */
    additionalAccessibleText?: string;
}

declare const F0TagTeam: WithDataTestIdReturnType_2<ForwardRefExoticComponent<F0TagTeamProps & RefAttributes<HTMLDivElement>>>;

/**
 * Loose message shape used inside f0. Mirrors the CopilotKit `Message`
 * shape so adapters (factorial, mock runtime) can map back and forth
 * with no field rename, but is owned by f0 — nothing in `src/` imports
 * from `@copilotkit/*` anymore.
 */
export declare type F0ToolCall = {
    id: string;
    type?: "function";
    function: {
        name: string;
        arguments: string;
    };
};

export declare type FeedbackConfig = {
    threadId: string;
    onThumbsUp: (msg: AIMessage, ctx: {
        threadId: string;
        feedback: string;
    }) => void;
    onThumbsDown: (msg: AIMessage, ctx: {
        threadId: string;
        feedback: string;
    }) => void;
};

declare type FileAvatarVariant = Extract<AvatarVariant, {
    type: "file";
}>;

declare type FileDef = {
    name: string;
    type: string;
};

declare type FlagAvatarVariant = Extract<AvatarVariant, {
    type: "flag";
}>;

declare type FontSize = (typeof fontSizes)[number];

declare const fontSizes: readonly ["sm", "md", "lg"];

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

/**
 * Form canvas content — renders an interactive F0Form in the canvas panel.
 */
export declare type FormCanvasContent = CanvasContentBase & {
    type: "form";
    formName: string;
    formDescription?: string;
    formModule?: ModuleId;
};

export declare interface FormCardValueFormatterEntry<T = unknown> {
    /** Scope to a specific form. Omit to apply to all forms. */
    formName?: string;
    /** Scope to a specific custom field name. Omit to apply to all fields. */
    customFieldName?: string;
    /** Format function. Return `undefined` to fall back to built-in formatting. */
    format: (value: T, meta: {
        key: string;
        fieldType?: string;
        customFieldName?: string;
    }) => DetailsItemContent | DetailsItemContent[] | undefined;
}

export declare function FormCardValueFormatterProvider({ children, }: {
    children: ReactNode;
}): JSX_2.Element;

export declare interface GaugeComputation {
    datasetId: string;
    aggregation: AggregationType;
    column?: string;
    min?: number;
    max?: number;
    name?: string;
}

export declare interface HeatmapComputation {
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

declare const internalAvatarColors: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];

declare type InternalAvatarProps = React_2.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: (typeof internalAvatarSizes)[number];
    type?: (typeof internalAvatarTypes)[number];
    color?: (typeof internalAvatarColors)[number];
};

declare const internalAvatarSizes: readonly ["xsmall", "small", "medium", "large", "xlarge", "xxlarge"];

declare const internalAvatarTypes: readonly ["base", "rounded"];

/**
 * Profile data for a job posting entity (ATS opening), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export declare type JobPostingProfile = {
    id: string | number;
    title: string;
    status?: string;
    location?: string;
};

declare type Join<T extends string[], D extends string> = T extends [] ? never : T extends [infer F] ? F : T extends [infer F, ...infer R] ? F extends string ? `${F}${D}${Join<Extract<R, string[]>, D>}` : never : string;

declare type Level = (typeof levels)[number];

declare const levels: readonly ["info", "warning", "critical", "positive"];

declare type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
    disabled?: boolean;
};

export declare const markdownRenderers: MarkdownTagRenderers;

/**
 * Map of tag name → renderer component, consumed by the markdown rendering
 * layer (factorial / mock runtime pass these through to whatever markdown
 * renderer they pick). Kept as a plain `Record` so f0 stays decoupled from
 * any specific markdown library.
 */
export declare type MarkdownTagRenderers = Record<string, ComponentType<any>>;

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

/**
 * Loose message shape used by the headless container and its
 * subcomponents. Mirrors the CopilotKit `Message`/`AIMessage` shape
 * (which the bridge builds upstream) but is owned by f0 so the
 * headless boundary doesn't import from `@copilotkit/shared`.
 *
 * Most fields are optional / wide on purpose — the headless renders
 * what it finds and ignores the rest.
 */
declare type Message = {
    id?: string;
    role?: string;
    content?: unknown;
    toolCalls?: Array<{
        id: string;
        type?: string;
        function?: {
            name: string;
            arguments: string;
        };
    }>;
    generativeUI?: () => unknown;
    rawData?: unknown;
    /**
     * Reply quote text the composer attached to this (user) message.
     * Rendered as a block above the bubble. The wire protocol that carries
     * this is owned by the adapter (factorial) — F0 only consumes the
     * structured field.
     */
    replyQuote?: string;
    [key: string]: any;
};

declare type MessageSlotComponent = ComponentType<any>;

export declare interface MetricComputation {
    datasetId: string;
    aggregation: AggregationType;
    column?: string;
}

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
    readonly headcount_planning: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
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

declare type NewColor = Extract<BaseColor, (typeof tagDotColors)[number]>;

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

export declare type OneIconSize = (typeof oneIconSizes)[number];

export declare const oneIconSizes: readonly ["xs", "sm", "md", "lg"];

declare type PathsToStringProps<T> = T extends string ? [] : {
    [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
}[Extract<keyof T, string>];

/**
 * Pre-loaded context shown as an empty state in the chat.
 * The `context` string is prepended to the user's first message
 * as `<pending-context>...</pending-context>` so the agent receives it.
 * The conversation is not created until the user actually sends a message.
 */
declare type PendingContext = {
    /** Human-readable label shown in the empty state (e.g. "Expenses dashboard") */
    label: string;
    /** Full context string prepended invisibly to the first user message */
    context: string;
};

/**
 * Quoted fragment the user is replying to. Shown as a chip above the
 * textarea and, on submit, rendered as a markdown blockquote at the top of
 * the resulting user message. The blockquote alone is enough context — the
 * conversation thread tells the agent what it refers to.
 */
declare type PendingQuote = {
    /** Plain-text selection (markdown stripped by the browser's toString()). */
    text: string;
};

declare type PersonAvatarVariant = Extract<AvatarVariant, {
    type: "person";
}>;

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

declare type PersonTagProps = ComponentProps<typeof F0TagPerson>;

export declare interface PieComputation {
    datasetId: string;
    nameColumn: string;
    valueColumn: string;
    aggregation: AggregationType;
    sortBy?: "value" | "name";
    sortOrder?: "asc" | "desc";
    limit?: number;
}

export declare function PongBall({ size, className, style }: PongBallProps): JSX_2.Element;

declare interface PongBallProps {
    size?: number;
    className?: string;
    style?: React.CSSProperties;
}

declare const privateProps: readonly ["className"];

declare type Props<Text extends string = string> = {
    text: Text extends "" ? never : Text;
    level: Level;
    /**
     * Info text to display an i icon and a tooltip next to the tag
     */
    info?: string;
};

declare type Props_2 = {
    text: string;
    /**
     * Info text to display an i icon and a tooltip next to the tag
     */
    info?: string;
} & ({
    color: NewColor;
} | {
    customColor: string;
});

export declare interface RadarComputation {
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
 * A numeric value that can be formatted with an optional formatter and options.
 * This is a relaxed version of NumericWithFormatter that allows the numeric value to be a Numeric.
 */
declare type RelaxedNumericWithFormatter = Omit<NumericWithFormatter, "numericValue"> & {
    numericValue: Numeric;
};

/**
 * Pre-processed turn ready to render. The bridge (F0AiChat/Connected*)
 * assembles these by filtering CopilotKit bookkeeping, expanding AG-UI
 * tool-call messages, and analysing role/stream state. The headless
 * container iterates them as-is — no message-shape inspection.
 *
 * A turn renders as: leading user messages → optional Thinking section →
 * assistant messages → optional inline live-thinking message → optional
 * end-of-turn indicator → optional feedback footer.
 */
export declare type RenderableTurn = {
    /** Messages rendered before the thinking section (typically the user message). */
    userMessages: Message[];
    /**
     * Optional collapsible "thinking" header rendered between user and
     * assistant blocks. Titles are pre-parsed upstream.
     */
    thinking?: {
        titles: string[];
        /**
         * Whether this turn is still streaming. The collapsible stays locked
         * open while true (no chevron, no toggle) and auto-collapses on the
         * transition to false.
         */
        inProgress?: boolean;
        /**
         * Whether the agent already moved from reflecting to writing the
         * response. When true every item renders as `completed`; otherwise
         * the last item is `executing` while the rest are `completed`.
         */
        isWriting?: boolean;
    };
    /** Messages rendered after the thinking section (assistant replies). */
    assistantMessages: Message[];
    /** True while the agent is still producing content for this turn. */
    isInProgress: boolean;
    /**
     * Optional end-of-turn indicator:
     * - `"thinking"`: agent is running but hasn't emitted any assistant output
     *   yet (renders an action item titled "Thinking...").
     * - `"activity"`: agent is streaming with some assistant output already
     *   visible (renders an empty action item).
     */
    endIndicator?: "thinking" | "activity";
    /**
     * Optional feedback footer (thumbs + copy button). When omitted, the
     * turn renders without feedback affordances.
     */
    feedback?: {
        /** Concatenated assistant content for the copy button. */
        content: string;
        /** Reference message attached to feedback submissions. */
        targetMessage: Message;
    };
};

export declare type RequisitionProfile = {
    id: string | number;
    title: string;
    status?: string;
    statusVariant?: StatusVariant;
    reason?: string;
    location?: string;
    lineManager?: {
        firstName: string;
        lastName: string;
        avatarUrl?: string;
    };
};

/**
 * Snapshot of a resolved step's answer — persisted alongside the tool args
 * so the render can restore state without re-invoking the panel.
 */
export declare interface ResolvedStepAnswer {
    /** The question text (matches the source step) */
    question: string;
    /** Selected option IDs at submit time */
    selectedOptionIds: string[];
    /** Custom free-text answer if provided */
    customAnswer?: string;
    /** True when the user explicitly skipped an optional step */
    skipped?: boolean;
    /**
     * True when the user cancelled the flow before reaching this step.
     * The step was therefore neither answered nor intentionally skipped —
     * callers (e.g. the agent) should treat this as "no information".
     */
    cancelled?: boolean;
}

declare type SetFormCardValueFormatter = <T = unknown>(entry: FormCardValueFormatterEntry<T>) => void;

/**
 * A single piece of content hosted in the side panel — the same resizable +
 * fullscreen space the F0.ai chat lives in. Only one is mounted at a time:
 * the `id` keys the content so switching conversations unmounts the previous
 * one and mounts the new. `panelContent === null` falls back to the AI chat.
 */
export declare type SidePanelContent = {
    id: string;
    content: React.ReactNode;
};

export declare type SparklineDataPoint = {
    value: number;
};

declare const statuses: readonly ["neutral", "info", "positive", "warning", "critical"];

declare type StatusVariant = Variant;

declare type TagDataType<T extends string> = Omit<Extract<TagVariant, {
    type: T;
}>, "type" | "description">;

declare const tagDotColors: ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];

declare type TagType_2 = (typeof tagTypes)[number];

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

declare type TagVariant = BaseTag<{
    type: "dot";
} & Props_2> | BaseTag<{
    type: "person";
} & PersonTagProps> | BaseTag<{
    type: "team";
} & TeamTagProps> | BaseTag<{
    type: "company";
} & CompanyTagProps> | BaseTag<{
    type: "alert";
} & AlertTagProps> | BaseTag<{
    type: "status";
} & F0TagStatusProps> | BaseTag<{
    type: "balance";
} & BalanceTagProps> | BaseTag<{
    type: "raw";
} & F0TagRawProps>;

declare type TeamAvatarVariant = Extract<AvatarVariant, {
    type: "team";
}>;

declare type TeamTagProps = ComponentProps<typeof F0TagTeam>;

/** Props for the Thinking collapsible section. */
export declare type ThinkingProps = {
    /** Pre-parsed step titles to show inside the collapsed group. */
    titles: string[];
    /** Section heading (defaults to "Thoughts" from i18n). */
    title?: string;
    /**
     * Whether the turn is still streaming. Locks the collapsible open (no
     * chevron, no user toggle) while true and auto-collapses on the
     * transition to false. After that, the user can toggle freely.
     */
    inProgress?: boolean;
    /**
     * Whether the agent already started writing the response. When true,
     * every item renders as `completed` regardless of `inProgress`.
     */
    isWriting?: boolean;
};

export declare interface ThreadActionHandlers {
    onSelect: (threadId: string, title: string) => void;
    onPin: (id: string) => void;
    onUnpin: (id: string) => void;
    onDelete: (id: string) => void;
}

export declare interface ThreadGroup {
    key: DateGroup;
    threads: ChatThread[];
}

/**
 * Transcribes a recorded audio blob to text (voice dictation). The returned
 * promise resolves with the final transcript; `onPartial` delivers
 * intermediate results for live textarea fill. When omitted from the chat
 * config, the microphone button is not rendered.
 */
declare type TranscribeFn = (audio: Blob, options: TranscribeOptions) => Promise<string>;

declare type TranscribeOptions = {
    /**
     * Primary channel for live dictation: fires with the cumulative transcript
     * as it streams in, so the composer can fill the textarea while the user
     * speaks. Implementations that don't stream may call it once at the end.
     */
    onPartial: (text: string) => void;
    /** Aborted when the user cancels an in-flight transcription. */
    signal?: AbortSignal;
};

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

/**
 * Tracking options for the AI chat
 */
export declare type UploadedFile = {
    url: string;
    filename: string;
    mimetype: string;
};

/**
 * Read the AiChat context. Returns an inert fallback when no provider
 * is mounted — that case is intentional in `ApplicationFrame`, which
 * renders chat-aware components in both the AI-enabled tree and the
 * promotion-chat tree.
 */
export declare function useAiChat(): AiChatProviderReturnValue;

export declare function useAiChatTranslations(): AiChatTranslations;

/**
 * Hook returning the canvas entity definition for `type` from the registry
 * supplied to `F0AiChatProvider.canvasEntities`. Returns `undefined` when no
 * matching entity is configured.
 */
export declare function useCanvasEntity(type: string | undefined): CanvasEntityDefinition<any> | undefined;

/**
 * Headless chat-history state manager. Pure UI logic — the caller injects
 * `fetchThreads` and `deleteThread` callbacks so this hook never embeds
 * URLs, auth headers or fetch wiring. Manages pinned threads in
 * localStorage and the threads list (loading/error/data).
 */
export declare function useChatHistory({ enabled, fetchThreads: fetchThreadsCb, deleteThread: deleteThreadCb, }: UseChatHistoryOptions): UseChatHistoryReturn;

declare type UseChatHistoryOptions = {
    /** When true, fetches threads on mount. Default: `false`. */
    enabled?: boolean;
    /**
     * Async callback that returns the list of threads. The host owns the
     * URL/auth/fetch — this hook only calls the callback and manages state.
     */
    fetchThreads: () => Promise<ChatThread[]>;
    /**
     * Async callback that deletes a thread by id. Should throw or reject on
     * failure; the hook will then re-fetch to restore consistency.
     */
    deleteThread: (id: string) => Promise<void>;
};

declare type UseChatHistoryReturn = {
    threads: ChatThread[];
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
    pinnedIds: Set<string>;
    pinThread: (id: string) => void;
    unpinThread: (id: string) => void;
    deleteThread: (id: string) => Promise<void>;
};

/**
 * Returns a resolved formatter for the given `formName`.
 * Matches registered formatters by specificity:
 *   formName + customFieldName > formName only > customFieldName only > global
 * Returns `null` when no provider is present or no formatters are registered.
 */
export declare function useFormCardValueFormatter(formName: string): ((key: string, value: unknown, meta: {
    fieldType?: string;
    customFieldName?: string;
}) => DetailsItemContent | DetailsItemContent[] | undefined) | null;

export declare function useI18n(): TranslationsType & {
    t: (key: TranslationKey, args?: Record<string, string | number>) => string;
};

export declare type UserBinaryPart = {
    type: "binary";
    url: string;
    filename: string;
    mimeType: string;
};

export declare type UserReaction = "like" | "dislike";

export declare type UserTextPart = {
    type: "text";
    text: string;
};

/**
 * Returns a setter to register value formatters used by FormCard.
 *
 * ```ts
 * const setFormatter = useSetFormCardValueFormatter()
 *
 * // Global formatter (all forms, all fields)
 * setFormatter({ format: (value) => ({ type: "item", text: String(value) }) })
 *
 * // Scoped to a form
 * setFormatter({ formName: "create-task", format: (value) => ... })
 *
 * // Scoped to a custom field name (across all forms)
 * setFormatter({ customFieldName: "assignees_selector", format: (value) => ... })
 *
 * // Scoped to both
 * setFormatter({ formName: "create-task", customFieldName: "assignees_selector", format: (value) => ... })
 * ```
 */
export declare function useSetFormCardValueFormatter(): SetFormCardValueFormatter;

/** Read the tool call ID injected by AssistantMessage. */
export declare const useToolCallId: () => string | undefined;

/**
 * Profile data for a vacancy entity (ATS vacancy/position), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export declare type VacancyProfile = {
    id: string | number;
    name: string;
    status?: string;
    vacancyType?: string;
};

declare type Variant = (typeof statuses)[number];

/**
 * Visualization mode for the AI chat
 */
export declare type VisualizationMode = "sidepanel" | "fullscreen" | "canvas";

declare const Weekdays: ForwardRefExoticComponent<WeekdaysProps & RefAttributes<HTMLDivElement>>;

declare interface WeekdaysProps {
    activatedDays?: number[];
    daysOfTheWeek?: string[];
}

/**
 * A welcome-screen group rendered as an outline button in the welcome row.
 * Clicking the group opens a popover listing its `items`.
 */
export declare type WelcomeScreenSuggestion = {
    icon: IconType;
    label: string;
    items: WelcomeScreenSuggestionItem[];
};

/**
 * A single sub-suggestion shown inside a welcome-screen group's popover.
 * The `title` is the label users see; `prompt` is what gets sent to the AI
 * when they click (falls back to `title` when omitted). They can diverge so
 * you can show a short, scannable title while sending a fully-formed prompt.
 */
export declare type WelcomeScreenSuggestionItem = {
    title: string;
    prompt?: string;
};

/**
 * Payload for `tracking.onWelcomeSuggestionClick`. Carries everything an
 * analytics layer (e.g. Amplitude) needs to attribute the click: the picked
 * sub-item, its parent group, and the resolved prompt that was actually sent.
 */
export declare type WelcomeSuggestionClickEvent = {
    item: WelcomeScreenSuggestionItem;
    group: WelcomeScreenSuggestion;
    /** Prompt actually sent to the AI — `item.prompt` falling back to `item.title`. */
    prompt: string;
};

declare type WithDataTestIdProps = {
    dataTestId?: string;
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
        moodTracker: {
            insertMoodTracker: (data: MoodTrackerData) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        enhanceHighlight: {
            setEnhanceHighlight: (from: number, to: number, options?: {
                placeholder?: string;
            }) => ReturnType;
            clearEnhanceHighlight: () => ReturnType;
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


declare namespace F0GraphNodeWrapperInner {
    var displayName: string;
}


declare namespace F0GraphExpanderWrapperInner {
    var displayName: string;
}


declare namespace F0GraphCollapserWrapperInner {
    var displayName: string;
}
