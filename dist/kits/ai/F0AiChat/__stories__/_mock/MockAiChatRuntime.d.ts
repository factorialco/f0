import { ReactNode } from 'react';
import { ChatThread } from '../../../F0AiChatHistory';
import { ClarifyingOption, ClarifyingQuestionState, ClarifyingSelectionMode } from '../../../F0ClarifyingPanel';
import { F0Message } from '../../types';
/**
 * Storybook-only runtime adapter. Holds messages in local state and
 * simulates an agent that:
 *   1. accepts a user message
 *   2. emits a "thinking" tool-call message with a few preamble steps
 *   3. streams a random response character-by-character
 *   4. marks the turn complete
 *
 * Also exposes a fake chat-history store (threads + per-thread message
 * snapshots) so stories can demo the history dialog without a backend.
 *
 * Lives next to the stories so f0 never has to depend on CopilotKit at
 * runtime. Factorial's production adapter mirrors this shape but reads
 * messages from CopilotKit instead.
 */
/** A single step within a (possibly multi-step) clarifying flow. */
export type ClarifyingStep = {
    question: string;
    /**
     * The options to offer. Pass a function instead of a list for a step whose
     * choices depend on an earlier answer: it receives the option ids picked in
     * every step BEFORE this one, in order, and is re-read as those change (so
     * going back and picking differently re-derives what follows).
     */
    options: ClarifyingOption[] | ((previousAnswerIdsByStep: string[][]) => ClarifyingOption[]);
    selectionMode?: ClarifyingSelectionMode;
    optional?: boolean;
    allowCustomAnswer?: boolean;
};
/**
 * Config for a clarifying flow rendered in the composer (the
 * `F0ClarifyingPanel` slot). One or more `steps` are walked consecutively in a
 * single panel: picking an answer advances to the next step (the header shows a
 * "X of Y" counter and a back arrow), and the final step submits. The runtime
 * owns the per-step selection state; `onConfirm` receives the picked option
 * labels for every step, in order, once the whole flow resolves.
 *
 * A single-step flow (one entry in `steps`) behaves like the old one-shot
 * question — no counter, no navigation, just a Submit button.
 */
export type ClarifyingConfig = {
    steps: ClarifyingStep[];
    /** Fired with the picked answers for every step, in order. `answersByStep`
     * carries display labels (for echoing back into the transcript);
     * `answerIdsByStep` carries the matching option ids (for routing logic —
     * never match on labels, they're copy). A custom answer has no option id, so
     * its trimmed text appears in both arrays at the same position. */
    onConfirm?: (answersByStep: string[][], answerIdsByStep: string[][]) => void;
    /** Fired when the user dismisses the panel (the ✕/Cancel button). The panel
     * stays mounted while this runs, so a flow can put a "Leave creation?"
     * confirmation on top of it without the composer flashing in behind. Return
     * `false` (or a promise resolving to `false`) to KEEP the panel open — e.g.
     * the user chose "Keep creating"; any other result (void/true) closes it. */
    onCancel?: () => boolean | void | Promise<boolean | void>;
};
export type MockAiChatRuntime = {
    messages: F0Message[];
    inProgress: boolean;
    sendMessage: (text: string, options?: {
        replyQuote?: string;
    }) => void;
    /**
     * Sends a user message and shows thinking steps, but emits no text response.
     * `inProgress` stays true for the thinking beat (so the composer stays
     * disabled), then flips false and the optional `onComplete` fires — the hook
     * a caller uses to post its own scripted follow-up (a message, a clarifying
     * panel, …) once the "thinking" has visibly finished.
     */
    sendMessageWithThinkingOnly: (text: string, onComplete?: () => void) => void;
    /**
     * Plays a "thinking" beat with NO message on either side: `inProgress` goes
     * true (composer disabled), thinking steps stream, then it flips false and
     * `onComplete` fires. Used to space out scripted steps so the user can follow
     * one action at a time (e.g. reply → think → open canvas).
     */
    showThinking: (onComplete?: () => void) => void;
    /**
     * When true, the connected chat input renders nothing. The guided flows set
     * it during their scripted intro (the "Let's create a Survey" + thinking
     * beat) so no composer shows until the first clarifying panel is ready, then
     * clear it. Only affects flows that opt in — default false.
     */
    composerHidden: boolean;
    setComposerHidden: (hidden: boolean) => void;
    appendMessages: (messages: {
        role: "user" | "assistant";
        content: string;
    }[], options?: {
        persist?: boolean;
    }) => void;
    /**
     * Appends an assistant message that renders a custom card/component (via the
     * message's `generativeUI` slot) instead of markdown text.
     */
    appendCard: (render: () => ReactNode) => void;
    /** Swaps the scripted assistant responses and restarts from the first turn. */
    setScript: (script: string[]) => void;
    /**
     * Arms a one-shot handler for the NEXT user message: the user's text is still
     * posted, but instead of streaming a reply the handler runs (e.g. to kick off
     * a scripted flow). Cleared after it fires. Pass `null` to disarm.
     */
    setUserMessageInterceptor: (interceptor: ((text: string) => void) | null) => void;
    /**
     * Registers a guard run BEFORE the chat closes (its ✕, via the connected
     * header). Returning `false` — or a promise resolving to `false` — aborts the
     * close, so no docking animation runs until the user confirms (e.g. a
     * "Leave creation?" dialog). Pass `null` to clear.
     */
    setBeforeClose: (guard: (() => boolean | Promise<boolean>) | null) => void;
    /** Runs the registered `beforeClose` guard (resolves `true` if none is set).
     * The connected header awaits this before closing the chat. */
    runBeforeClose: () => boolean | Promise<boolean>;
    clear: () => void;
    /**
     * The active clarifying question (rendered by the connected chat input as a
     * `F0ClarifyingPanel`), or `null` when none is in progress.
     */
    clarifyingQuestion: ClarifyingQuestionState | null;
    /**
     * Opens a clarifying flow in the composer. Pass one step for a one-shot
     * question, or several to walk them consecutively in a single panel (with a
     * step counter + back arrow) before a final submit.
     */
    startClarifying: (config: ClarifyingConfig) => void;
    currentThreadTitle: string | null;
    /** Id of the thread currently loaded (null on a fresh / new chat). */
    currentThreadId: string | null;
    isLoadingThread: boolean;
    /** Returns the in-memory list of threads (excluding any deleted). */
    fetchThreads: () => Promise<ChatThread[]>;
    /** Removes a thread from the in-memory list. */
    deleteThread: (id: string) => Promise<void>;
    /** Loads a thread's snapshot into `messages` and sets the title. */
    loadThread: (id: string, title: string) => void;
};
/**
 * Default fake threads. Spread across the date buckets f0's history
 * dialog renders (today, yesterday, this month, older) to exercise the
 * group rendering in stories.
 */
export declare const DEFAULT_MOCK_THREADS: ChatThread[];
export type MockAiChatRuntimeProviderProps = {
    children: ReactNode;
    /**
     * Optional pre-seeded message history (e.g. for stories that want to
     * demonstrate reply-to-selection on an already-existing conversation).
     */
    seedMessages?: F0Message[];
    /**
     * Optional override of the threads list shown in the history dialog.
     * Defaults to `DEFAULT_MOCK_THREADS`. Pass `[]` to demo the empty
     * state.
     */
    seedThreads?: ChatThread[];
    /**
     * Optional scripted assistant responses used in order, one per text reply.
     * Falls back to a random phrase when the script is exhausted or absent.
     */
    script?: string[];
};
export declare const MockAiChatRuntimeProvider: ({ children, seedMessages, seedThreads, script, }: MockAiChatRuntimeProviderProps) => import("react").JSX.Element;
export declare const useMockAiChatRuntime: () => MockAiChatRuntime;
