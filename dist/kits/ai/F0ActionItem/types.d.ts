/**
 * Props for the F0ActionItem component
 */
export interface F0ActionItemProps {
    /**
     * The title text displayed next to the status icon
     */
    title?: string;
    /**
     * Current status of the action item
     */
    status?: "inProgress" | "executing" | "writing" | "completed";
    /**
     * Whether the action item is part of a group
     */
    inGroup?: boolean;
}
export declare const actionItemStatuses: readonly ["inProgress", "executing", "writing", "completed"];
export type ActionItemStatus = (typeof actionItemStatuses)[number];
