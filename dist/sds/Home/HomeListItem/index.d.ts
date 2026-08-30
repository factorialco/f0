import { ReactNode } from 'react';
import { AvatarVariant } from '../../../components/avatars/F0Avatar';
import { AvatarSize } from '../../../components/avatars/internal/BaseAvatar';
import { IconType } from '../../../components/F0Icon';
import { DropdownItem } from '../../../experimental/Navigation/Dropdown/internal.tsx';
/**
 * One of a row's hover actions: a button at the row's right that acts on THAT
 * row.
 *
 * ICON-ONLY BY DEFAULT, because a row is a dense line of text and a strip of
 * labelled buttons beside it would outweigh what it is about — `label` is then
 * the accessible name and the tooltip rather than visible text.
 *
 * A row's PRIMARY action can say what it is (`showLabel`), and usually should
 * when the glyph alone would be a guess: "Clock out" is a clock, and so is
 * "Snooze". Keep it to ONE per row, leading, with the rest as glyphs — a strip
 * of labelled buttons is a toolbar, not a row.
 */
export type HomeListItemAction = {
    /** What it DOES, in words: "Clock out", "Dismiss". Never "OK" or "Go". */
    label: string;
    /** Omit for a text-only button — then the label always shows. */
    icon?: IconType;
    /** A destructive one — it draws as the critical button. */
    critical?: boolean;
    /** Show the `label` beside the glyph instead of only in the tooltip. */
    showLabel?: boolean;
} & ({
    onClick: () => void;
    items?: never;
} | {
    /**
     * The action OPENS A MENU instead of doing one thing — "Remind me" over
     * Later today / Tomorrow / Next Monday. Ordinary `DropdownItem`s, so a
     * `{ type: "label", text }` heads the group and `{ type: "separator" }`
     * divides it.
     *
     * The button is the same button either way, glyph or label: what changes
     * is that pressing it opens the menu, and the strip STAYS OPEN while the
     * menu is (the pointer has to leave the row to reach it).
     */
    items: DropdownItem[];
    onClick?: never;
});
/**
 * The BASE row every Home list draws: a LEFT slot, a text stack and a RIGHT
 * slot. A row that goes somewhere says so by being a link — hover state and
 * all — not with a trailing chevron: a column of arrows repeating "clickable"
 * on every row is noise in a widget this dense. `showChevron` opts one in.
 *
 * The left slot is data first — `avatar` takes any of F0Avatar's types (person,
 * team, company, file, flag, emoji, icon), so a slot's params stay serializable —
 * with `left` as the node-level override for glyphs F0Avatar cannot say (a
 * module glyph, an alert).
 *
 * The text stack is three optional voices: `title` leads, `subtitle` murmurs on
 * the same line after a dot, `description` takes the second line.
 *
 * A row can also carry `actions` — what you can DO to it without leaving the
 * widget (snooze it, dismiss it). They stay out of the way until the row is
 * hovered or something inside it is focused.
 *
 * The `list` slot builds these rows from its schema (see `slotRenderers`) —
 * that's where the row's shape and sizing rules live.
 */
export interface HomeListItemProps {
    /** Left slot, as data: any avatar type. */
    avatar?: AvatarVariant;
    /** The data avatar's size — `left` nodes carry their own sizing. */
    avatarSize?: AvatarSize;
    /** Left slot, as a node — wins over `avatar`. For glyphs F0Avatar can't say. */
    left?: ReactNode;
    title: string;
    /** Muted, on the title's line, dot-separated. */
    subtitle?: string;
    /** The second line. */
    description?: string;
    /** Trailing slot: a tag, a counter, people. */
    right?: ReactNode;
    /**
     * What can be DONE to this row, as icon buttons over its right edge. They
     * appear on hover (and whenever anything in the row has focus, so they are
     * reachable by keyboard) behind a fade that covers whatever `right` holds.
     *
     * A row with actions HIGHLIGHTS ON HOVER even when it is inert: something
     * happens there, so it has to look like it does.
     */
    actions?: HomeListItemAction[];
    /** An accent dot on the left slot's corner — unseen/pending. */
    unread?: boolean;
    /**
     * Renders the row as a REAL link — an anchor with this href (role `link`,
     * middle-click, copy address), routed through the app's `LinkProvider`.
     * The row's ONLY click behavior: only an href to ANOTHER HOST opens a new tab
     * (see `isExternalHref`) — a path, a `#fragment` and this host under any
     * scheme all stay in this tab, where the app's router takes them.
     */
    href?: string;
    /** A trailing chevron. Off — the row's link affordance is the row itself. */
    showChevron?: boolean;
}
export declare function HomeListItem({ avatar, avatarSize, left, title, subtitle, description, right, actions, unread, href, showChevron, }: HomeListItemProps): import("react").JSX.Element;
