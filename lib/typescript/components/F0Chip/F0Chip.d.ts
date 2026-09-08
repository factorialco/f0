import React from "react";
import type { F0ChipProps } from "./F0Chip.types";
/**
 * F0Chip - Compact semantic chip with optional leading visual and close action.
 *
 * Supports selectable states, avatar or icon leading content, and an optional
 * removable affordance. The component only becomes interactive when `onPress`
 * or `onClose` is provided.
 *
 * @example
 * <F0Chip label="Vacation" variant="selected" />
 * <F0Chip label="Design" icon={{ icon: Tag }} onClose={() => remove("Design")} />
 * <F0Chip label="Dan Petre" avatar={{ type: "person", firstName: "Dan", lastName: "Petre" }} />
 */
declare const F0Chip: React.NamedExoticComponent<F0ChipProps>;
export { F0Chip };
//# sourceMappingURL=F0Chip.d.ts.map