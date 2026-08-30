import { UniqueIdentifier } from '@dnd-kit/core';
export interface SortableBlockProps {
    id: UniqueIdentifier;
    children: React.ReactNode;
}
export declare const SortableBlock: ({ id, children }: SortableBlockProps) => import("react").JSX.Element;
