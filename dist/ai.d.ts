import { AIMessage } from '@copilotkit/shared';
import { CopilotKitProps } from '@copilotkit/react-core';
import { ForwardRefExoticComponent } from 'react';
import { JSX as JSX_2 } from 'react';
import { RefAttributes } from 'react';
import { SVGProps } from 'react';

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

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const AiFullscreenChat: () => JSX_2.Element | null;

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
    animate?: "normal" | "animate";
}>;

declare type WelcomeScreenSuggestion = {
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
