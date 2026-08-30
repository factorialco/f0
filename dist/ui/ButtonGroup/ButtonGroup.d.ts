import { ButtonSize } from '../../components/F0Button/types';
import { F0ButtonDropdownProps } from '../../components/F0ButtonDropdown';
import { IconType } from '../../components/F0Icon';
import { DropdownItem } from '../../experimental/Navigation/Dropdown';
import { NavTarget } from '../Action';
/** Fields a primary/secondary action button exposes. Variant is fixed by role
 * (primary → solid `default`, secondary → `outline`); `size` is a group prop. */
export interface ButtonGroupButtonBase {
    /**
     * Stable identifier. Required (unlike index-keyed action lists elsewhere)
     * because width-overflow moves a button between the measurement copy, the
     * visible row, and the "⋯" menu — a stable key keeps it from remounting.
     */
    id: string;
    /** Visible label; also the a11y name (pair with `hideLabel` for icon-only). */
    label: string;
    icon?: IconType;
    iconPosition?: "left" | "right";
    disabled?: boolean;
    loading?: boolean;
    hideLabel?: boolean;
    tooltip?: string;
    /**
     * Render as a destructive (red) action. Prefer guarding destructive actions in
     * the "⋯" menu via `otherActions`; reach for an inline critical button only
     * when the resource is cheap to recreate and a one-click delete is warranted.
     */
    critical?: boolean;
}
/** A single clickable (or link) action. `onClick` and `href` are mutually exclusive. */
export type ButtonGroupButton = ButtonGroupButtonBase & ({
    onClick: () => void;
    href?: never;
    target?: never;
} | {
    href: string;
    target?: NavTarget;
    onClick?: never;
});
type DistributiveOmit<T, K extends keyof never> = T extends unknown ? Omit<T, K> : never;
/** A split / dropdown button action, wrapping {@link F0ButtonDropdown}. Its
 * `variant` and `size` are owned by the group, so they're omitted here. */
export type ButtonGroupSplitAction = {
    id: string;
    type: "split";
} & DistributiveOmit<F0ButtonDropdownProps, "size" | "variant">;
/** A hairline divider between two logical groups of secondaries (row layout only). */
export type ButtonGroupInlineSeparator = {
    type: "separator";
};
export type ButtonGroupSecondaryItem = ButtonGroupButton | ButtonGroupSplitAction | ButtonGroupInlineSeparator;
/** A single link rendered in place of secondary buttons (mirrors F0CardHorizontal). */
export interface ButtonGroupSecondaryLink {
    label: string;
    href: string;
    target?: NavTarget;
    disabled?: boolean;
}
/** A constant size, or a responsive pair: `base` while stacked, `md` in the row. */
export type ButtonGroupSize = ButtonSize | {
    base: ButtonSize;
    md: ButtonSize;
};
/**
 * The pinned primary action. A button or split action that also accepts an
 * optional `variant`: `"outline"` renders it as an outline button while keeping
 * it pinned (never shed into the "⋯" menu). @default variant "default"
 */
export type ButtonGroupPrimaryAction = (ButtonGroupButton | ButtonGroupSplitAction) & {
    variant?: "default" | "outline";
};
export interface ButtonGroupProps {
    /**
     * The single primary action. A single object structurally guarantees ≤1 primary.
     * Set `variant: "outline"` to render it as an outline button while keeping it
     * pinned (never shed into the "⋯" menu) — for a lone CTA that shouldn't carry
     * full primary weight. @default variant "default"
     */
    primaryAction?: ButtonGroupPrimaryAction;
    /** Secondary actions (buttons / split buttons / inline separators), or a single link. */
    secondaryActions?: ButtonGroupSecondaryItem[] | ButtonGroupSecondaryLink;
    /** Extra actions, always reachable through the "⋯" menu (supports separators / critical). */
    otherActions?: DropdownItem[];
    /** Button + menu-trigger size. Responsive `{ base, md }` flips with `stack`. @default "md" */
    size?: ButtonGroupSize;
    /** Row alignment. @default "end" */
    align?: "end" | "between";
    /** Stack into a column below the named viewport / container breakpoint. @default "none" */
    stack?: "none" | "sm" | "md" | "container-md";
    /** Stretch every item to full width while stacked. */
    fullWidthOnStack?: boolean;
    /** Reverse the stacked column so the primary lands on top. */
    reverseOnStack?: boolean;
    /**
     * When `false`, secondary buttons never shed into the "⋯" menu — they always
     * render inline (e.g. a confirm/reject pair that must never collapse).
     * `otherActions` still populate the menu when present. @default true
     */
    canOverflow?: boolean;
    className?: string;
}
export declare const BUTTON_GROUP_GAP_PX = 8;
/**
 * A data-driven, responsive action bar. Pass actions as props — `primaryAction`
 * (solid, pinned at the trailing edge), `secondaryActions` (outline buttons that
 * shed into a "⋯" menu when they don't fit), and `otherActions` (always in that
 * menu). Set `stack` to collapse into a full-width column below a breakpoint,
 * where the menu becomes a mobile drawer.
 *
 * Behavior notes:
 * - Split-button secondaries and the primary are pinned (never shed); plain
 *   secondaries shed first under width pressure.
 * - An inline `{ type: "separator" }` renders a hairline between two visible
 *   secondaries; as the last secondary it becomes the divider before the primary.
 *   Separators are hidden while stacked.
 *
 * The row and stacked branches are separate, keyed children: the stable outer
 * element keeps measuring the container width, while the overflow machinery
 * (which needs its DOM present when it initializes) mounts fresh with whichever
 * branch is active.
 */
export declare function ButtonGroup({ primaryAction, secondaryActions, otherActions, size, align, stack, fullWidthOnStack, reverseOnStack, canOverflow, className, }: ButtonGroupProps): import("react").JSX.Element;
/**
 * Vertical hairline that divides logical groups inside a **row-layout**
 * `ButtonGroup`. Rendered for inline `{ type: "separator" }` entries; hidden
 * while the group is stacked into a column.
 */
export declare function ButtonGroupSeparator(): import("react").JSX.Element;
export {};
