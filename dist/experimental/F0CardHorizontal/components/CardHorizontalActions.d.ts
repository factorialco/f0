import { IconType } from '../../../components/F0Icon';
import { StatusVariant } from '../../../components/tags/F0TagStatus';
import { DropdownItem } from '../../Navigation/Dropdown';
import { CardPrimaryAction, CardSecondaryAction, CardSecondaryLink } from '../../../components/F0Card/components/CardActions';
/**
 * Container breakpoint at which the horizontal card switches between its inline and its
 * stacked (actions-on-their-own-line) layout. `never` keeps it inline at every
 * width.
 */
export type CardHorizontalStackAt = "sm" | "md" | "lg" | "never";
/**
 * Outer row layout: a stacked column that becomes an inline row at the chosen
 * container breakpoint. Exported so the card root and the actions share one source
 * of truth (the breakpoint must match for the layout to stay coherent).
 * Each value is a full static string so Tailwind's JIT can see the classes.
 *
 * Breakpoint mapping (ascending): the `"sm"` option uses Tailwind's `@xs`
 * (24rem / 384px). f0-core overrides `@sm` to 40rem (640px) — larger than
 * `@md` (28rem / 448px) — so using `@sm` here would (wrongly) stack *before*
 * `md`. `@xs < @md < @lg` keeps sm < md < lg as expected.
 */
export declare const cardHorizontalClassName: Record<CardHorizontalStackAt, string>;
/**
 * Cross-axis alignment of the leading (avatar + text) group within the inline
 * row. The row pins its items to the top (`items-start` above) so the avatar and
 * actions stay level with the title's first line as the row grows. A leading
 * group that's *shorter* than the trailing controls — e.g. a single line of text
 * next to a taller button — should instead sit vertically centred against them.
 * `self-center` does exactly that: it only takes visible effect while the group
 * is shorter than the row, so a tall wrapped group still fills from the top.
 * Scoped to the inline breakpoint so the stacked column keeps its default stretch.
 */
export declare const cardHorizontalLeadingAlignClassName: Record<CardHorizontalStackAt, string>;
export interface CardHorizontalConfirmAction {
    onClick: () => void;
    /** Accessible label and tooltip. Defaults to "Confirm" / "Reject". */
    label?: string;
    disabled?: boolean;
}
/**
 * Resolved state shown at the trailing edge in place of the actions: a coloured
 * icon (e.g. `Check` for accepted, `Cross` for rejected) carrying the outcome.
 */
export interface CardHorizontalStatus {
    /** The icon to render (e.g. `Check` for accepted, `Cross` for rejected). */
    icon: IconType;
    /** Colour family. */
    variant: StatusVariant;
    /** Accessible label; the icon carries meaning, so this is required. */
    label: string;
}
interface CardHorizontalActionsProps {
    primaryAction?: CardPrimaryAction;
    secondaryActions?: CardSecondaryAction[] | CardSecondaryLink;
    /** Overflow (⋯) menu actions — always live in the left "more" menu. */
    otherActions?: DropdownItem[];
    /** Confirm (✓) icon-only action — enables the confirm/reject variant. */
    confirmAction?: CardHorizontalConfirmAction;
    /** Reject (✗) icon-only action — enables the confirm/reject variant. */
    rejectAction?: CardHorizontalConfirmAction;
    /**
     * Resolved-state icon shown at the trailing edge in place of any actions
     * (e.g. the "Accepted" / "Rejected" outcome of a confirm/reject row).
     * Takes precedence over every action prop.
     */
    status?: CardHorizontalStatus;
    /** Container breakpoint at which the actions drop to their own line. */
    stackAt?: CardHorizontalStackAt;
    /**
     * Whether the row has a leading avatar. When true the trailing controls are
     * nudged down to sit on the avatar's centre line (see
     * {@link actionsAvatarOffsetClassName}).
     */
    hasAvatar?: boolean;
}
/**
 * Trailing actions for the horizontal card — a thin adapter over {@link ButtonGroup}.
 * The data-driven `primaryAction` / `secondaryActions` / `otherActions` triplet
 * maps straight through; `ButtonGroup` owns the row layout, the width-driven
 * overflow into the "⋯" menu, and pinning the primary at the trailing edge.
 *
 * On top, `stackAt` drops the cluster onto its own full-width line (with a footer
 * hairline) below a container breakpoint; the breakpoint mapping is shared with
 * the row root via {@link cardHorizontalClassName}.
 *
 * Pass `confirmAction` / `rejectAction` for the confirm/reject variant — reject
 * (✗, outline) then confirm (✓, solid primary), which replaces the standard
 * actions. Icon-only while inline; the buttons reveal their labels once the row
 * stacks onto its own line.
 */
export declare function CardHorizontalActions({ primaryAction, secondaryActions, otherActions, confirmAction, rejectAction, status, stackAt, hasAvatar, }: CardHorizontalActionsProps): import("react").JSX.Element | null;
export {};
