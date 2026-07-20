import React from "react";
import type { ScrollViewProps } from "react-native";
/**
 * Props for the scroll container F0Wizard renders around each step's content.
 *
 * A keyboard-aware scroll component (e.g.
 * `react-native-keyboard-controller`'s `KeyboardAwareScrollView`) can be
 * injected via {@link F0WizardProps.ScrollComponent}. F0Wizard passes it a
 * `bottomOffset` equal to the measured footer height so a focused input is
 * scrolled clear of the pinned Back/Next footer. A plain `ScrollView` simply
 * ignores the extra prop.
 */
export type F0WizardScrollComponentProps = ScrollViewProps & {
    /** Height (px) of the pinned footer, so a keyboard-aware scroll component can
     * offset the focused input above it. Ignored by a plain `ScrollView`. */
    bottomOffset?: number;
};
export interface F0WizardStep {
    /** Title displayed above the step content */
    title: string;
    /** Optional subtitle displayed below the title */
    subtitle?: string;
    /** Render function for the step content. Receives the current step index.
     *
     * @important Stabilize this function (e.g. define it outside the render or
     * wrap the returned element in `React.memo`) to avoid unmounting and
     * remounting the content on every parent re-render, which can cause
     * unintended side effects such as inputs losing focus.
     */
    renderContent: (args: {
        stepIndex: number;
    }) => React.ReactNode;
    /** Label for the Next button on this specific step. Overrides the global `nextLabel`. */
    nextLabel?: string;
    /** Label for the Back button on this specific step. Overrides the global `previousLabel`. */
    previousLabel?: string;
    /**
     * When false, the Next button is disabled and the user cannot advance.
     * Useful for simple reactive validation (e.g. all required fields filled).
     * @default true
     */
    canAdvance?: boolean;
    /**
     * Async callback invoked when the user taps Next, before advancing.
     * Return `{ canAdvance: false }` to block navigation and show errors.
     * When omitted, the wizard advances immediately (subject to `canAdvance`).
     */
    onNext?: () => Promise<{
        canAdvance: boolean;
    }> | {
        canAdvance: boolean;
    };
}
export interface F0WizardProps {
    /** Ordered list of steps to display */
    steps: F0WizardStep[];
    /** Zero-based index of the step to show on first render. @default 0 */
    defaultStepIndex?: number;
    /** Label for the Next button. */
    nextLabel: string;
    /** Label for the Back button. */
    previousLabel: string;
    /** Label for the submit button shown on the last step. */
    submitLabel: string;
    /**
     * Optional prefix label for the step counter shown above the title.
     * If omitted, no counter is rendered.
     * Use this to provide translations.
     * @example stepLabel="Step"
     * @example stepLabel="Paso"
     */
    stepLabel?: string;
    /** Called whenever the active step changes, with the new zero-based index. */
    onStepChanged?: (stepIndex: number) => void;
    /** Called when the user confirms the last step. */
    onSubmit?: () => void | Promise<void>;
    /**
     * Scroll container rendered around each step's content. Defaults to React
     * Native's `ScrollView`.
     *
     * Inject a keyboard-aware scroll component (e.g.
     * `react-native-keyboard-controller`'s `KeyboardAwareScrollView`) to scroll a
     * focused input above the keyboard while the footer stays pinned. F0Wizard
     * measures the footer height and passes it as `bottomOffset` so the focused
     * field clears the Back/Next buttons — no magic numbers, adapts to button
     * size and locale. F0Wizard adds no keyboard dependency of its own.
     *
     * @example
     * import { KeyboardAwareScrollView } from "react-native-keyboard-controller"
     * <F0Wizard ScrollComponent={KeyboardAwareScrollView} … />
     */
    ScrollComponent?: React.ComponentType<F0WizardScrollComponentProps>;
    accessibilityLabel?: string;
    testID?: string;
}
//# sourceMappingURL=F0Wizard.types.d.ts.map