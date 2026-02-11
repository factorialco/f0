import React from "react";
import { View } from "react-native";
import type { F0ButtonProps } from "./F0Button.types";
/**
 * F0Button - Primary button component for the F0 Design System.
 *
 * Uses Props API (not Composition). Element order is fixed: icon → emoji → label.
 * Press feedback uses PressableFeedback component for smooth animations and
 * tracks pressed state for color changes based on variant.
 *
 * Supports auto-loading: when `onPress` returns a Promise, the button
 * auto-disables until the Promise resolves. The host can also control
 * loading externally via the `loading` prop.
 *
 * @example
 * <F0Button label="Submit" onPress={handleSubmit} />
 *
 * @example
 * <F0Button label="Delete" variant="critical" icon={TrashIcon} />
 *
 * @example
 * // Async auto-loading
 * <F0Button label="Save" onPress={async () => await save()} />
 *
 * @example
 * // Custom press feedback
 * <F0Button label="Custom" feedback="scale" />
 */
declare const F0Button: React.MemoExoticComponent<React.ForwardRefExoticComponent<F0ButtonProps & React.RefAttributes<View>>>;
export { F0Button };
//# sourceMappingURL=F0Button.d.ts.map