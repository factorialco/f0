import { IconType } from '../../F0Icon';
import { ButtonToggleColor, ButtonToggleSize, ButtonToggleVariant } from '../types';
export type F0ButtonToggleInternalProps = {
    /**
     * The accessible label for the button.
     */
    label: string | [string, string];
    /**
     * Whether the button is disabled.
     */
    disabled?: boolean;
    /**
     * The icon to display in the button. Can be a single icon or an array of two icons the first for the non-selected state and the second for the selected state.
     */
    icon: IconType | [IconType, IconType];
    /**
     * The size of the button.
     * @default "md"
     */
    size?: ButtonToggleSize;
    /**
     * The variant of the button.
     * @default "compact"
     * "compact" - The button will only show the icon.
     * "expanded" - The button will show the icon and the label.
     */
    variant?: ButtonToggleVariant;
    /**
     * Tooltip shown on hover and on keyboard focus. A string is the description
     * on its own; the object form adds a bold first line above it — the same
     * shape `Action` takes.
     *
     * A compact toggle is a glyph with no visible text, so the tooltip is what
     * says out loud what it does. Setting it drops the native `title` (the
     * browser would otherwise draw its own bubble beside this one) and keeps the
     * accessible name.
     *
     * `instant` opens it on 100ms instead of the default 700ms. Reach for it when
     * the tooltip is the ONLY place the toggle's name is written — the default
     * wait is for a label that merely confirms what you can already read, and on
     * a bare glyph it withholds the whole thing.
     */
    tooltip?: string | {
        label?: string;
        description: string;
        instant?: boolean;
    };
    /**
     * Makes the toggle a member of a COLOURED SET: it wears this colour when
     * selected — fill, border and glyph — and stays a muted glyph when it isn't,
     * so one answer out of several is readable at a glance. Without it the toggle
     * uses F0's selected teal, like any other selected control.
     *
     * Only for a set whose members mean different things (a mood scale, a status
     * picker). A lone toggle, or a group where every item is the same kind of
     * thing, should stay on the default.
     */
    color?: ButtonToggleColor;
    /**
     * @private
     * Whether to show a border around the button toggle.
     */
    withBorder?: boolean;
    /**
     * @private
     * Additional CSS class names to apply to the button root.
     */
    className?: string;
} & ({
    selected: boolean;
    onSelectedChange: (selected: boolean) => void;
    defaultSelected?: undefined;
} | {
    defaultSelected?: boolean;
    selected?: undefined;
    onSelectedChange?: undefined;
});
