import React from "react";
import type { F0WizardProps } from "./F0Wizard.types";
/**
 * F0Wizard - Multi-step flow container for React Native.
 *
 * Manages step navigation, progress display, and per-step validation.
 * Step content is fully consumer-controlled via `renderContent` — no form
 * primitives are required; pass any React Native components as children.
 *
 * Tapping Next runs the optional per-step `onNext` callback before advancing.
 * The Next button is disabled when `canAdvance` is explicitly `false`.
 *
 * F0Wizard is a standalone `View`-based container with no built-in modal or
 * sheet behavior. The consumer is responsible for embedding it inside a
 * `Modal`, bottom sheet, or full-screen layout as appropriate.
 *
 * The Back/Next footer is pinned to the bottom of the container. Step content
 * scrolls inside a `ScrollView` by default; to keep a focused input visible
 * above the keyboard while the footer stays pinned, inject a keyboard-aware
 * scroll component via `ScrollComponent` (F0Wizard forwards the measured footer
 * height as `bottomOffset`, so the focused field clears the buttons — no magic
 * numbers). F0Wizard adds no keyboard dependency of its own.
 *
 * @example
 * <!-- prettier-ignore -->
 * <F0Wizard
 *   steps={[
 *     {
 *       title: "Personal info",
 *       renderContent: () => <TextInput placeholder="Name" />,
 *       canAdvance: name.length > 0,
 *     },
 *     {
 *       title: "Confirm",
 *       renderContent: () => <ConfirmationView />,
 *     },
 *   ]}
 *   nextLabel="Next"
 *   previousLabel="Back"
 *   submitLabel="Submit"
 *   onSubmit={handleSubmit}
 * />
 */
declare const F0Wizard: React.NamedExoticComponent<F0WizardProps>;
export { F0Wizard };
//# sourceMappingURL=F0Wizard.d.ts.map