import { ComponentPropsWithRef, ReactNode } from 'react';
import { AvatarVariant } from '../../../../components/avatars/F0Avatar';
import { GraphNodeState, GraphNodeVariant } from './types';
interface F0GraphNodeStackedRowProps {
    /**
     * Role, ARIA, focus and keyboard props owned by [[F0GraphNode]]. A row is a
     * different shape of the same node, not a different kind of thing, so its
     * semantics come from there rather than being re-declared here.
     */
    shellProps: ComponentPropsWithRef<"div">;
    variant: GraphNodeVariant;
    state: GraphNodeState;
    avatar?: AvatarVariant;
    title?: ReactNode;
    trailing?: ReactNode;
    loading?: boolean;
    height?: number;
}
/**
 * One row of a stacked column — what [[F0GraphNode]] renders when the graph
 * passes `stacked`, because this node's parent set `stackNodes`.
 *
 * It mirrors the card's anatomy (leading avatar, same title type scale per zoom,
 * tags underneath) so a column reads as a continuation of the parent above it,
 * but it is a strip: fixed height, indented a little narrower than the card, no
 * subtitle, no expand affordance.
 */
export declare const F0GraphNodeStackedRow: ({ shellProps, variant, state, avatar, title, trailing, loading, height, }: F0GraphNodeStackedRowProps) => import("react").JSX.Element;
export {};
