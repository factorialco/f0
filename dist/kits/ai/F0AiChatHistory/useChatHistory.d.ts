import { IconType } from '../../../components/F0Icon';
export type ChatThread = {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    /** Rendered before the title (e.g. a chart icon for Analytics chats). */
    icon?: IconType;
    /**
     * Secondary label at the row's end, revealed on hover/focus like the date
     * (e.g. "Analytics" for mode-bound chats).
     */
    trailingLabel?: string;
};
type UseChatHistoryReturn = {
    threads: ChatThread[];
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
    pinnedIds: Set<string>;
    /**
     * Ids of threads with an in-flight pin/unpin/delete request. Use it to show a
     * per-row loading affordance (e.g. a spinner where the actions sit) while the
     * backend confirms. Only populated for host-backed actions: a synchronous,
     * localStorage-only pin (no `pinThread`/`unpinThread` callback) is never
     * pending.
     */
    pendingIds: Set<string>;
    pinThread: (id: string) => void;
    unpinThread: (id: string) => void;
    deleteThread: (id: string) => Promise<void>;
};
type UseChatHistoryOptions = {
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
    /**
     * Optional async persisters for the pin state (e.g. a Stream-backed mutation
     * in the host app). When provided, pin/unpin become host-backed: the change
     * is applied optimistically (the row moves between groups at once), the id is
     * marked in `pendingIds` while the request is in flight, and the change is
     * rolled back if the callback rejects. When omitted, the pin state is kept
     * locally in localStorage as before — synchronous and never pending.
     */
    pinThread?: (id: string) => Promise<void>;
    unpinThread?: (id: string) => Promise<void>;
};
/**
 * Headless chat-history state manager. Pure UI logic — the caller injects
 * `fetchThreads` and `deleteThread` callbacks so this hook never embeds
 * URLs, auth headers or fetch wiring. Manages pinned threads in
 * localStorage and the threads list (loading/error/data).
 */
export declare function useChatHistory({ enabled, fetchThreads: fetchThreadsCb, deleteThread: deleteThreadCb, pinThread: pinThreadCb, unpinThread: unpinThreadCb, }: UseChatHistoryOptions): UseChatHistoryReturn;
export {};
