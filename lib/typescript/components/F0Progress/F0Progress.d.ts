import React from "react";
import { View } from "react-native";
import type { F0ProgressProps } from "./F0Progress.types";
declare function normalizeValue(value: number, max?: number): number;
declare function getCircularStrokeDashoffset(progress: number, circumference: number, strokeWidth: number): number;
/**
 * F0Progress - Determinate progress indicator with linear and circular presentations.
 *
 * Normalizes input values, exposes progressbar accessibility semantics, and animates
 * transitions between values for both linear and circular variants.
 *
 * @example
 * <F0Progress type="linear" value={60} />
 * <F0Progress type="circular" value={3} max={5} status="positive" />
 * <F0Progress type="linear" value={75} label="75%" status="warning" />
 */
declare const F0Progress: React.MemoExoticComponent<React.ForwardRefExoticComponent<F0ProgressProps & React.RefAttributes<View>>>;
export { F0Progress, getCircularStrokeDashoffset, normalizeValue };
//# sourceMappingURL=F0Progress.d.ts.map