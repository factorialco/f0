import { ChatThread } from '../useChatHistory';
import { ThreadActionHandlers } from '../types';
interface CollapsibleGroupProps extends ThreadActionHandlers {
    label: string;
    threads: ChatThread[];
    pinnedIds: Set<string>;
}
export declare function CollapsibleGroup({ label, threads, pinnedIds, onSelect, onPin, onUnpin, onDelete, }: CollapsibleGroupProps): import("react").JSX.Element;
export {};
