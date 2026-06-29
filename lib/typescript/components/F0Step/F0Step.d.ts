import React from "react";
import { type F0StepProps } from "./F0Step.types";
/**
 * F0Step - Segmented progress bar for multi-step flows.
 *
 * Supports both derived progress (`steps`, `currentStep`, `furthestReachedStep`)
 * and fully controlled visual state via `stepStates`. The bar itself is decorative,
 * while the host owns navigation and completion history.
 *
 * @example
 * <F0Step steps={4} currentStep={1} furthestReachedStep={2} />
 */
declare const F0Step: React.NamedExoticComponent<F0StepProps>;
export { F0Step };
//# sourceMappingURL=F0Step.d.ts.map