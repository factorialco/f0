import { AIMessage } from '@copilotkit/shared';
import { CopilotKitProps } from '@copilotkit/react-core';
import { IconType } from '@factorialco/f0-react';
import { JSX as JSX_2 } from 'react';
import { ReactNode } from 'react';

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

export declare const buildTranslations: (translations: TranslationsType) => TranslationsType;

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
        readonly number: {
            readonly value: "Value";
            readonly equal: "Equal to";
            readonly equalTo: "Equal to {{value}}";
            readonly lessOrEqual: "Less or equal to";
            readonly greaterOrEqual: "Greater or equal to";
            readonly equalShort: "= {{value}}";
            readonly greaterThanOrEqualShort: ">= {{value}}";
            readonly lessThanOrEqualShort: "<= {{value}}";
            readonly rangeTitle: "Use range";
            readonly range: "Between {{min}} and {{max}}";
        };
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
        readonly inputPlaceholder: "Ask about time, people, or company info…";
        readonly stopAnswerGeneration: "Stop generating";
        readonly sendMessage: "Send message";
        readonly thoughtsGroupTitle: "Reflection";
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
};

export declare type I18nContextType = TranslationsType & {
    t: (key: TranslationKey, args?: Record<string, string | number>) => string;
};

export declare function I18nProvider({ children, translations, }: I18nProviderProps): JSX.Element;

export declare interface I18nProviderProps {
    children: ReactNode;
    translations: TranslationsType;
}

export declare type I18nStrings = TranslationsType;

declare type Join<T extends string[], D extends string> = T extends [] ? never : T extends [infer F] ? F : T extends [infer F, ...infer R] ? F extends string ? `${F}${D}${Join<Extract<R, string[]>, D>}` : never : string;

declare type PathsToStringProps<T> = T extends string ? [] : {
    [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
}[Extract<keyof T, string>];

export declare type TranslationKey = Join<PathsToStringProps<typeof defaultTranslations>, ".">;

declare type TranslationShape<T> = {
    [K in keyof T]: T[K] extends string ? string : T[K] extends Record<string, string | Record<string, unknown>> ? TranslationShape<T[K]> : never;
};

export declare type TranslationsType = TranslationShape<typeof defaultTranslations>;

export declare function useAiChat(): AiChatProviderReturnValue;

export declare function useI18n(): TranslationsType & {
    t: (key: TranslationKey, args?: Record<string, string | number>) => string;
};

declare type WelcomeScreenSuggestion = {
    icon: IconType;
    message: string;
    prompt?: string;
};

export { }
