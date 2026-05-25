import React from "react";
import type { F0BlurViewProps } from "./F0BlurView.types";
/**
 * F0BlurView - Internal blur primitive for the F0 React Native system.
 *
 * Thin wrapper around `expo-blur`'s `BlurView` with className support via
 * UniWind. Use for blurred background effects inside F0 components.
 *
 * On Android, `experimentalBlurMethod` defaults to `"none"` (semi-transparent
 * overlay) to avoid graphical artifacts with elevated children. Pass
 * `experimentalBlurMethod="dimezisBlurView"` explicitly to opt in to real blur
 * on Android, only when no elevated children are inside the BlurView.
 *
 * @internal
 *
 * @example
 * // Overlay that fills parent — always use style prop for positioning
 * <F0BlurView intensity={60} tint="default" style={StyleSheet.absoluteFill} />
 */
export declare const F0BlurView: React.NamedExoticComponent<F0BlurViewProps>;
//# sourceMappingURL=F0BlurView.d.ts.map