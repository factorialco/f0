import React from "react";
import { View } from "react-native";
import { type F0LinkProps } from "./F0Link.types";
/**
 * F0Link - Semantic inline link with optional navigation handling.
 *
 * Supports text-style and plain variants, optional external-link affordance,
 * and safe handling of either `href` navigation or custom `onPress` callbacks.
 *
 * @example
 * <F0Link href="https://example.com">Visit site</F0Link>
 * <F0Link href="https://example.com" external>Open externally</F0Link>
 * <F0Link onPress={handlePress} variant="plain">Custom action</F0Link>
 */
declare const F0Link: React.MemoExoticComponent<React.ForwardRefExoticComponent<F0LinkProps & React.RefAttributes<View>>>;
export { F0Link };
//# sourceMappingURL=F0Link.d.ts.map