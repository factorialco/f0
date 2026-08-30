import { RowDefinition } from '../types';
interface RowRendererProps {
    row: RowDefinition;
    /** Section ID when row is inside a section (for anchor links) */
    sectionId?: string;
}
/**
 * RowRenderer component that renders fields horizontally in a row layout.
 * Used for organizing related fields side by side with equal width.
 * Uses a container query so the layout responds to the space actually
 * available to the row (e.g. next to the sections sidepanel or inside a
 * panel), not the viewport: below 480px of container width the row stacks
 * vertically and each field takes the full width.
 */
export declare function RowRenderer({ row, sectionId }: RowRendererProps): import("react").JSX.Element;
export {};
