import { ThreadActionHandlers } from '../types';
import { ChatThread } from '../useChatHistory';
interface ThreadItemProps extends ThreadActionHandlers {
    thread: ChatThread;
    isPinned: boolean;
    /** Keeps the row highlighted while its thread is the one open in the panel. */
    isActive?: boolean;
    /**
     * A pin/unpin/delete request for this thread is in flight. Replaces the
     * actions button with a spinner (kept visible off-hover) so the row reads as
     * "saving" while the backend confirms. Wire it from `useChatHistory`'s
     * `pendingIds`.
     */
    isPending?: boolean;
    /** Override the row classes (e.g. to match the sidebar's chat-row paddings). */
    className?: string;
}
export declare function ThreadItem({ thread, isPinned, isActive, isPending, onSelect, onPin, onUnpin, onDelete, className, }: ThreadItemProps): import("react").JSX.Element;
export {};
