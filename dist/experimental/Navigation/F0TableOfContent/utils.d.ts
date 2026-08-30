import { IdStructure, TOCItem } from './types';
export declare function findExpandedPath(items: TOCItem[], activeItemId?: string): Set<string>;
/**
 * Search in tree and return the items that match the search query
 */
export declare function filterTree(items: TOCItem[], searchQuery: string): TOCItem[];
/**
 * Find an item in the tree by ID and return its path
 */
export declare function findItemInTree(items: TOCItem[], itemId: string): {
    item: TOCItem;
    parentPath: string[];
} | null;
/**
 * Remove an item from the tree by ID
 */
export declare function removeItemFromTree(items: TOCItem[], itemId: string): TOCItem[];
/**
 * Insert an item into the tree at a specific location
 */
export declare function insertItemInTree(items: TOCItem[], item: TOCItem, targetParentId: string | null, targetIndex: number): TOCItem[];
/**
 * Check if moving an item to a target location would create a cycle
 * (e.g., moving a parent into its own child)
 */
export declare function wouldCreateCycle(items: TOCItem[], itemId: string, targetParentId: string | null): boolean;
/**
 * Convert TOCItem tree to IdStructure tree (only IDs, no data)
 */
export declare function convertToIds(items: TOCItem[]): IdStructure[];
/**
 * Update an item in the tree by ID
 */
export declare function updateItemInTree(items: TOCItem[], itemId: string, updatedItem: TOCItem): TOCItem[];
/**
 * Calculate the adjusted target index when moving an item within the same parent
 * This accounts for the fact that removing an item shifts indices
 */
export declare function calculateAdjustedIndex(items: TOCItem[], itemId: string, targetParentId: string | null, targetIndex: number): number;
