import { ReactNode } from 'react';
import { F0CardProps } from '../../../../../../../components/F0Card';
type EntityRefHoverCardProps<T> = {
    id: string;
    trigger: ReactNode;
    resolver: (id: string) => Promise<T>;
    mapToCard: (data: T) => F0CardProps;
    fallbackCard: F0CardProps;
};
/**
 * Generic hover card for entity references.
 *
 * Handles lazy fetching on hover, per-ID caching, loading/error states,
 * and renders an F0Card inside a HoverCard popover.
 *
 * Each entity type provides its own trigger, resolver, and card mapping.
 */
export declare function EntityRefHoverCard<T>({ id, trigger, resolver, mapToCard, fallbackCard, }: EntityRefHoverCardProps<T>): import("react").JSX.Element;
export {};
