import { BreadcrumbItemType, BreadcrumbState } from './types';
/**
 * Calculate the breadcrumb state
 * based on container width and breadcrumb items
 */
export declare function calculateBreadcrumbState(containerWidth: number | null, breadcrumbs: BreadcrumbItemType[], breadcrumbElements?: HTMLElement[]): BreadcrumbState;
