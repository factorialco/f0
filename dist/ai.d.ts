import { AIMessage } from '@copilotkit/shared';
import { CopilotKitProps } from '@copilotkit/react-core';
import { ForwardRefExoticComponent } from 'react';
import { JSX as JSX_2 } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { SVGProps } from 'react';

export declare const ActionItem: ({ title, status, inGroup }: ActionItemProps) => JSX_2.Element;

export declare interface ActionItemProps {
    title: string;
    status?: "inProgress" | "executing" | "completed";
    inGroup?: boolean;
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const AiChat: () => JSX_2.Element | null;

export declare const AiChatProvider: ({ enabled, greeting, initialMessage, welcomeScreenSuggestions, onThumbsUp, onThumbsDown, children, agent, ...copilotKitProps }: AiChatProviderProps) => JSX_2.Element;

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
} & Pick<CopilotKitProps, "agent" | "credentials" | "children" | "runtimeUrl" | "showDevConsole" | "threadId" | "headers">;

declare type AiChatProviderReturnValue = {
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    shouldPlayEntranceAnimation: boolean;
    setShouldPlayEntranceAnimation: React.Dispatch<React.SetStateAction<boolean>>;
    tmp_setAgent: (agent?: string) => void;
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
} & Pick<AiChatState, "greeting" | "agent">;

declare interface AiChatState {
    greeting?: string;
    enabled: boolean;
    agent?: string;
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
}

export declare type AiChatTranslations = TranslationShape<typeof aiTranslations>;

export declare function AiChatTranslationsProvider({ children, translations, }: AiChatTranslationsProviderProps): JSX.Element;

export declare interface AiChatTranslationsProviderProps {
    children: ReactNode;
    translations: AiChatTranslations;
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const AiFullscreenChat: () => JSX_2.Element | null;

export declare const aiTranslations: {
    ai: {
        openChat: string;
        closeChat: string;
        scrollToBottom: string;
        welcome: string;
        defaultInitialMessage: string;
        inputPlaceholder: string;
        stopAnswerGeneration: string;
        sendMessage: string;
        thoughtsGroupTitle: string;
        thumbsUp: string;
        thumbsDown: string;
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
    };
};

export declare const HILActionConfirmation: ({ text, confirmationText, onConfirm, cancelText, onCancel, }: HILActionConfirmationProps) => JSX_2.Element;

export declare type HILActionConfirmationProps = {
    text?: string;
    confirmationText: string;
    onConfirm: () => void;
    cancelText: string;
    onCancel: () => void;
};

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
    animate?: "normal" | "animate";
}>;

declare type TranslationShape<T> = {
    [K in keyof T]: T[K] extends string ? string : T[K] extends Record<string, string | Record<string, unknown>> ? TranslationShape<T[K]> : never;
};

export declare function useAiChat(): AiChatProviderReturnValue;

export declare function useAiChatTranslations(): AiChatTranslations;

export declare type WelcomeScreenSuggestion = {
    icon: IconType;
    message: string;
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
