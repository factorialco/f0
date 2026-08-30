import { ReactNode } from 'react';
import { BreadcrumbItemType } from './types';
export * from './types';
export interface BreadcrumbsProps {
    /** Array of breadcrumb items to display */
    breadcrumbs: BreadcrumbItemType[];
    append?: ReactNode;
}
/**
 * Responsive breadcrumb navigation component that automatically collapses items when space is limited.
 *
 * Features:
 * - Responsive layout that adjusts to container width
 * - Maintains first and last items visible
 * - Collapses middle items into a dropdown when needed
 * - Supports loading states
 * - Animated transitions
 *
 * @example
 * ```tsx
 * <Breadcrumbs
 *   breadcrumbs={[
 *     { id: "home", label: "Home", href: "/" },
 *     { id: "section", label: "Section", href: "/section" },
 *     { id: "page", label: "Current Page" }
 *   ]}
 * />
 * ```
 */
export declare function Breadcrumbs({ breadcrumbs, append }: BreadcrumbsProps): import("react").JSX.Element;
