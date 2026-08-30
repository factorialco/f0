import { DeferredNodesPayload, DeferredStatus, GraphEdge, GraphNode } from '../types';
interface UseDeferredMergeOptions<T> {
    initialNodes: GraphNode<T>[];
    initialEdges: GraphEdge[];
    deferredNodes?: Promise<DeferredNodesPayload<T>> | (() => Promise<DeferredNodesPayload<T>>);
}
interface UseDeferredMergeResult<T> {
    mergedNodes: GraphNode<T>[];
    mergedEdges: GraphEdge[];
    deferredStatus: DeferredStatus;
    error: Error | null;
}
/**
 * Merges an initial set of nodes/edges with a deferred (Promise-based)
 * second batch. Dedup by `id`; deferred wins on conflict. Appends new
 * entries. Safe against unmount races and stale closures.
 */
export declare function useDeferredMerge<T>(options: UseDeferredMergeOptions<T>): UseDeferredMergeResult<T>;
export {};
