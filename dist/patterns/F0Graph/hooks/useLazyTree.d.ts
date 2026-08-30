import { GraphNode } from '../types';
interface UseLazyTreeOptions<T> {
    rootNodes: GraphNode<T>[];
    loadChildren: (nodeId: string) => Promise<GraphNode<T>[]>;
}
interface UseLazyTreeResult<T> {
    nodes: GraphNode<T>[];
    loadingNodes: Set<string>;
    errorNodes: Map<string, Error>;
    /**
     * Loads children for `nodeId` if they are not already cached. Returns the
     * freshly fetched children (or the previously cached ones, if any). The
     * returned array lets bulk callers (e.g. `expandAll`) cascade through the
     * tree without waiting for React to commit between awaits.
     */
    expandNode: (nodeId: string) => Promise<GraphNode<T>[]>;
    collapseNode: (nodeId: string) => void;
    retryNode: (nodeId: string) => Promise<GraphNode<T>[]>;
}
export declare function useLazyTree<T>(options: UseLazyTreeOptions<T>): UseLazyTreeResult<T>;
export {};
