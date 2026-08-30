import { DropdownItem } from '../Navigation/Dropdown';
import { CardPrimaryAction, CardSecondaryAction, CardSecondaryLink } from '../../components/F0Card/components/CardActions';
import { CardAvatarVariant } from '../../components/F0Card/components/CardAvatar';
import { CardAlertProps } from '../../components/F0Card/types';
import { CardHorizontalConfirmAction, CardHorizontalStackAt, CardHorizontalStatus } from './components/CardHorizontalActions';
export interface F0CardHorizontalProps {
    /**
     * The primary line of text.
     */
    title: string;
    /**
     * Optional secondary line shown beneath the title (wraps across multiple
     * lines when long).
     */
    description?: string;
    /**
     * Optional avatar rendered at a fixed `lg` size on the left (the size is not
     * configurable). Accepts any avatar type in the system: person, company, team,
     * file, flag, icon, emoji, module, alert, date, pulse. Types without a `lg`
     * variant (date, pulse) render at their intrinsic size.
     */
    avatar?: CardAvatarVariant;
    /**
     * The primary action button, shown at the trailing edge of the row.
     */
    primaryAction?: CardPrimaryAction;
    /**
     * Secondary actions (buttons) or a single link, shown before the primary action.
     */
    secondaryActions?: CardSecondaryAction[] | CardSecondaryLink;
    /**
     * Overflow (⋯) menu actions, rendered as the trailing control of the row.
     */
    otherActions?: DropdownItem[];
    /**
     * Confirm/reject variant: renders an icon-only ✗ (reject) + ✓ (confirm) pair
     * instead of the standard actions. Provide either or both.
     */
    confirmAction?: CardHorizontalConfirmAction;
    /**
     * Reject (✗) action of the confirm/reject variant. See {@link confirmAction}.
     */
    rejectAction?: CardHorizontalConfirmAction;
    /**
     * Resolved-state icon shown at the trailing edge in place of any actions — the
     * outcome of a confirm/reject row, e.g.
     * `{ icon: Check, variant: "positive", label: "Accepted" }`.
     * Takes precedence over the action props.
     */
    status?: CardHorizontalStatus;
    /**
     * Strikes through and dims the title/description, marking the row's subject as
     * void or closed (e.g. a rejected request). Purely presentational — pair it
     * with the matching `status` tag at the call site.
     */
    inactive?: boolean;
    /**
     * Container width at which the actions drop to their own line (below it) vs.
     * sit inline (at/above it). `never` keeps them inline at every width.
     * @default "never"
     */
    stackAt?: CardHorizontalStackAt;
    /**
     * Stretch to fill the height of its container.
     */
    fullHeight?: boolean;
    /**
     * Alert banner displayed above the row with a coloured header strip and matching
     * border. Supports info, warning, critical and positive variants.
     * Use `visible` + `onDismiss` for controlled dismiss behaviour.
     */
    alert?: CardAlertProps;
    /**
     * Opt-in: makes the whole row a link to this href. The row only becomes a
     * click target (pointer cursor + hover affordance + overlay link) when `link`
     * or `onClick` is set — otherwise it's a static row whose only interactive
     * parts are its actions.
     */
    link?: string;
    /**
     * Opt-in: called when the row is clicked. Like `link`, it turns the whole row
     * into an explicit click target (pointer cursor + hover affordance). Use it
     * for cards whose entire surface is the action (e.g. entry-point cards with no
     * CTA button); leave it unset for rows that act only through their buttons.
     */
    onClick?: () => void;
    /**
     * Disables the full-row overlay link (used with `link`) so a parent can manage
     * drag-and-drop while still allowing click navigation via `onClick`.
     */
    disableOverlayLink?: boolean;
    /**
     * Dims the whole card and disables interaction (including its actions and any
     * row-level link/click). Purely a visual + interaction affordance.
     */
    disabled?: boolean;
    /**
     * Renders the description on a single line, truncating overflow with an
     * ellipsis (and a tooltip with the full text) instead of wrapping. Has no
     * effect when there's no `description`.
     */
    descriptionAsSingleLine?: boolean;
}
/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export declare const F0CardHorizontal: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<F0CardHorizontalProps & import('react').RefAttributes<HTMLDivElement>> & {
    Skeleton: () => import("react").JSX.Element;
}>;
