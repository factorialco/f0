import { AIMessage } from '@copilotkit/shared';
import { AssistantMessageProps } from '@copilotkit/react-ui';
import { Context } from 'react';
import { CopilotKitProps } from '@copilotkit/react-core';
import { ForwardRefExoticComponent } from 'react';
import { JSX as JSX_2 } from 'react';
import { Message } from '@copilotkit/shared';
import { MessagesProps } from '@copilotkit/react-ui';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { SVGProps } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export declare function A({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX_2.Element;

export declare type ActionItemStatus = (typeof actionItemStatuses)[number];

export declare const actionItemStatuses: readonly ["inProgress", "executing", "completed"];

/**
 * Props for the AiChatProvider component
 */
export declare type AiChatProviderProps = {
    enabled?: boolean;
    greeting?: string;
    initialMessage?: string | string[];
    welcomeScreenSuggestions?: WelcomeScreenSuggestion[];
    onThumbsUp?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    onThumbsDown?: (message: AIMessage, { threadId, feedback }: {
        threadId: string;
        feedback: string;
    }) => void;
    /**
     * Configuration for file validation. When provided, enables file uploads in the chat.
     */
    fileValidation?: FileValidationConfig;
    /**
     * Callback when files are rejected during attachment validation
     */
    onFilesRejected?: (rejectedFiles: RejectedFile[]) => void;
    /**
     * Callback to upload a file to storage (e.g., S3).
     * Called for each file attachment when a message is sent.
     */
    onUploadFile?: (file: File, onProgress?: (progress: number) => void) => Promise<FileUploadResult>;
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
     * Set the amount of minutes after which the chat will be cleared automatically
     * Set `null` to disable auto-clearing
     *
     * @default 15
     */
    setAutoClearMinutes: React.Dispatch<React.SetStateAction<number | null>>;
    autoClearMinutes: number | null;
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
    /**
     * Clear/reset the chat conversation
     */
    clear: () => void;
    /* Excluded from this release type: setClearFunction */
    /**
     * Send a message to the chat. If onUploadFile is configured and there are
     * attachments, they will be uploaded before the message is sent.
     * @param message - The message content as a string, or a full Message object
     */
    sendMessage: (message: string | Message) => Promise<void>;
    /* Excluded from this release type: setSendMessageFunction */
    /**
     * Whether file uploads are enabled. True when fileValidation is provided.
     * Use this to conditionally show/hide file upload UI.
     */
    fileUploadsEnabled: boolean;
    /**
     * Files attached to the current message (before sending)
     */
    attachments: File[];
    /**
     * Add a single file attachment
     */
    addAttachment: (file: File) => void;
    /**
     * Add multiple file attachments
     */
    addAttachments: (files: File[]) => void;
    /**
     * Remove an attachment by index
     */
    removeAttachment: (index: number) => void;
    /**
     * Clear all attachments
     */
    clearAttachments: () => void;
    /**
     * Files currently being uploaded
     */
    uploadingFiles: UploadingFile[];
    /**
     * Whether files are currently being uploaded
     */
    isUploading: boolean;
    /**
     * Trigger the file input to open the file picker dialog.
     * Use this to programmatically open the file picker (e.g., from a suggestion button).
     */
    triggerFileInput: () => void;
    /* Excluded from this release type: setFileInputRef */
} & Pick<AiChatState, "greeting" | "agent">;

/**
 * Internal state for the AiChat provider
 */
declare interface AiChatState {
    greeting?: string;
    enabled: boolean;
    agent?: string;
    initialMessage?: string | string[];
    welcomeScreenSuggestions?: WelcomeScreenSuggestion[];
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
    /**
     * Configuration for file validation. When provided, enables file uploads in the chat.
     */
    fileValidation?: FileValidationConfig;
    /**
     * Callback when files are rejected during attachment validation
     */
    onFilesRejected?: (rejectedFiles: RejectedFile[]) => void;
    /**
     * Callback to upload a file to storage (e.g., S3).
     * Called for each file attachment when a message is sent.
     */
    onUploadFile?: (file: File, onProgress?: (progress: number) => void) => Promise<FileUploadResult>;
}

/**
 * AI Chat translations type
 */
export declare type AiChatTranslations = TranslationShape<typeof aiTranslations>;

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
        sendMessage: string;
        thoughtsGroupTitle: string;
        resourcesGroupTitle: string;
        thinking: string;
        exportTable: string;
        generatedTableFilename: string;
        removeFile: string;
        attachFiles: string;
        dropZoneTitle: string;
        dropZoneDescription: string;
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
        ask: string;
    };
};

export declare function Blockquote({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>): JSX_2.Element;

export declare const ChatSpinner: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;

export declare function downloadTableAsExcel(table: HTMLTableElement, filename?: string): void;

export declare function Em({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>): JSX_2.Element;

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
export declare const F0AiChatProvider: ({ enabled, greeting, initialMessage, welcomeScreenSuggestions, onThumbsUp, onThumbsDown, fileValidation, onFilesRejected, onUploadFile, children, agent, ...copilotKitProps }: AiChatProviderProps) => JSX_2.Element;

export declare const F0AiChatTextArea: ({ submitLabel, inProgress, onSend, onStop, placeholders, defaultPlaceholder, autoFocus, fileUploadsEnabled, attachments, onAddFiles, onRemoveAttachment, onFileInputRef, onSendWithAttachments, }: F0AiChatTextAreaProps) => JSX_2.Element;

/**
 * Props for the F0AiChatTextArea component
 */
export declare interface F0AiChatTextAreaProps {
    /**
     * Whether the chat is currently processing a message
     */
    inProgress: boolean;
    /**
     * Callback when the user sends a message.
     * When file uploads are enabled, use `onSendWithAttachments` instead.
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
     * Whether file uploads are enabled. Shows paperclip button and allows file selection.
     */
    fileUploadsEnabled?: boolean;
    /**
     * Current file attachments to display
     */
    attachments?: File[];
    /**
     * Callback to add files as attachments
     */
    onAddFiles?: (files: File[]) => void;
    /**
     * Callback to remove an attachment by index
     */
    onRemoveAttachment?: (index: number) => void;
    /**
     * Callback to register the file input ref for external triggers
     */
    onFileInputRef?: (ref: HTMLInputElement | null) => void;
    /**
     * Async send handler that processes attachments before sending.
     * When provided, this is used instead of `onSend`.
     */
    onSendWithAttachments?: (message: string) => Promise<void>;
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

export declare const f0MarkdownRenderers: NonNullable<AssistantMessageProps["markdownTagRenderers"]>;

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

export declare const F0OneSwitch: ({ className, disabled }: F0OneSwitchProps) => JSX_2.Element | null;

/**
 * Props for the F0OneSwitch component
 */
export declare type F0OneSwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>;

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

/**
 * Reason for file rejection during validation
 */
export declare type FileRejectionReason = "size" | "type" | "custom";

/**
 * Result of a successful file upload
 */
export declare type FileUploadResult = {
    url: string;
    signedId?: string;
    contentType?: string;
    filename?: string;
};

/**
 * Configuration for file validation
 */
export declare type FileValidationConfig = {
    /**
     * Maximum file size in bytes. Files exceeding this will be rejected with reason "size"
     */
    maxFileSize?: number;
    /**
     * Accepted MIME types (e.g., ["image/png", "application/pdf"])
     */
    acceptedTypes?: string[];
    /**
     * Accepted file extensions (e.g., [".png", ".pdf"])
     */
    acceptedExtensions?: string[];
    /**
     * Custom validation function. Return { valid: true } or { valid: false, message: "reason" }
     */
    validate?: (file: File) => {
        valid: true;
    } | {
        valid: false;
        message: string;
    };
};

export declare const FullscreenChatContext: Context<FullscreenChatContextType>;

/**
 * Context type for fullscreen chat state
 */
declare type FullscreenChatContextType = {
    inProgress: boolean;
    setInProgress: (value: boolean) => void;
};

export declare function H1({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>): JSX_2.Element;

export declare function H2({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>): JSX_2.Element;

export declare function H3({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>): JSX_2.Element;

export declare function Hr({ ...props }: React.HTMLAttributes<HTMLHRElement>): JSX_2.Element;

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
    animate?: "normal" | "animate";
}>;

declare function Image_2({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>): JSX_2.Element;
export { Image_2 as Image }

export declare function Li({ children, ...props }: React.HTMLAttributes<HTMLLIElement>): JSX_2.Element;

export declare function Ol({ children, ...props }: React.HTMLAttributes<HTMLOListElement>): JSX_2.Element;

export declare type OneIconSize = (typeof oneIconSizes)[number];

export declare const oneIconSizes: readonly ["xs", "sm", "md", "lg"];

export declare function P({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>): JSX_2.Element;

export declare function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>): JSX_2.Element;

/**
 * A file that was rejected during validation
 */
export declare type RejectedFile = {
    file: File;
    reason: FileRejectionReason;
    message?: string;
};

export declare function Strong({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>): JSX_2.Element;

export declare function Table({ children, ...props }: React.HTMLAttributes<HTMLTableElement>): JSX_2.Element;

export declare function Td({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>): JSX_2.Element;

export declare function Th({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>): JSX_2.Element;

/**
 * Translation shape helper type
 */
declare type TranslationShape<T> = {
    [K in keyof T]: T[K] extends string ? string : T[K] extends Record<string, string | Record<string, unknown>> ? TranslationShape<T[K]> : never;
};

export declare function Ul({ children, ...props }: React.HTMLAttributes<HTMLUListElement>): JSX_2.Element;

/**
 * Tracks the state of a file being uploaded
 */
export declare type UploadingFile = {
    file: File;
    progress: number;
    status: "pending" | "uploading" | "success" | "error";
    result?: FileUploadResult;
    error?: string;
};

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
 * Welcome screen suggestion item
 */
export declare type WelcomeScreenSuggestion = {
    icon: IconType;
    message: string;
    prompt?: string;
    onClick?: () => void;
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


declare namespace Calendar {
    var displayName: string;
}
