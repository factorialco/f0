import { ReactNode } from 'react';
import { AvatarVariant } from '../../../../components/avatars/F0Avatar';
import { F0GraphNodeTag, F0GraphNodeTagLabels } from './types';
type F0GraphNodeHoverCardProps = {
    /** The node element the card is anchored to and opens on hover. */
    trigger: ReactNode;
    avatar?: AvatarVariant;
    title?: string;
    subtitle?: string;
    /** Non-hidden tags — surfaced as native card metadata rows. */
    tags?: F0GraphNodeTag[];
    tagLabels?: F0GraphNodeTagLabels;
};
/**
 * Hover popover that surfaces a node's full information in an F0Card.
 *
 * Used when the node itself hides part of its data (compact/dot zoom). Mirrors
 * the AI chat entity-ref hover card: same `HoverCard` + `F0Card` composition,
 * but the data is already in hand so there is no async resolver. Tags are mapped
 * to native card metadata rather than rendered as children, so the card looks
 * like any other F0Card. Opens above the node at screen scale even when the
 * graph is zoomed out.
 */
export declare function F0GraphNodeHoverCard({ trigger, avatar, title, subtitle, tags, tagLabels, }: F0GraphNodeHoverCardProps): import("react").JSX.Element;
export {};
