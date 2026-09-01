import React from "react";
import type { F0CheckboxProps } from "./F0Checkbox.types";
/**
 * F0Checkbox - Accessible checkbox primitive for the F0 React Native system.
 *
 * Supports checked, indeterminate, and disabled states. Renders an optional
 * visible label alongside the checkbox box, and always exposes an accessible
 * label for screen readers.
 *
 * Can be used in **controlled** mode (pass `checked` + `onValueChange`) or
 * **uncontrolled** mode (omit `checked` — internal state is managed automatically).
 *
 * @example
 * // Controlled
 * <F0Checkbox label="Accept terms" checked={accepted} onValueChange={setAccepted} />
 * // Uncontrolled
 * <F0Checkbox label="Accept terms" onValueChange={(v) => console.log(v)} />
 * <F0Checkbox label="Select all" indeterminate onValueChange={handleSelectAll} />
 */
export declare const F0Checkbox: React.NamedExoticComponent<F0CheckboxProps>;
//# sourceMappingURL=F0Checkbox.d.ts.map