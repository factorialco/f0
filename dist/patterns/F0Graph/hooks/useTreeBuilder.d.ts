import { GraphNode, TreeNode } from '../types';
interface TreeBuilderResult<T> {
    roots: TreeNode<T>[];
    nodeMap: Map<string, TreeNode<T>>;
    orphans: string[];
    cycles: string[];
}
export declare function useTreeBuilder<T>(nodes: GraphNode<T>[]): TreeBuilderResult<T>;
export {};
