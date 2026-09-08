import React from "react";
import { View } from "react-native";
import { type F0ButtonProps } from "./F0Button.types";
/**
 * F0Button - Semantic button primitive for the F0 React Native system.
 *
 * Supports loading, async press handlers, icon or emoji content, and semantic
 * variants and sizes. Controlled accessibility and interaction props always take
 * precedence over forwarded primitive props.
 *
 * @example
 * <F0Button label="Save" onPress={handleSave} />
 * <F0Button label="Delete" variant="destructive" icon={Trash} loading={isDeleting} onPress={handleDelete} />
 * <F0Button label="Add" variant="ghost" icon={Plus} hideLabel size="sm" />
 */
declare const F0Button: React.MemoExoticComponent<React.ForwardRefExoticComponent<F0ButtonProps & React.RefAttributes<View>>>;
export { F0Button };
//# sourceMappingURL=F0Button.d.ts.map