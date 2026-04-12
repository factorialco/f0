import React from "react";
import type { Svg } from "react-native-svg";
import type { F0IconProps, IconType } from "./F0Icon.types";
/**
 * Applies UniWind interop to an icon component
 * Ensures withUniwind is only applied once per icon type
 * @internal
 */
export declare function applyIconInterop(icon: IconType): IconType;
/**
 * F0Icon - Icon component for the F0 Design System
 *
 * Renders SVG icons with consistent sizing and semantic colors.
 * Icons are automatically wrapped with UniWind for className support.
 *
 * @example
 * import { Archive } from '@/icons/app';
 *
 * <F0Icon icon={Archive} size="lg" />
 * <F0Icon icon={Archive} color="critical" />
 * <F0Icon icon={Archive} size="sm" color="positive" />
 */
declare const F0Icon: React.MemoExoticComponent<React.ForwardRefExoticComponent<F0IconProps & React.RefAttributes<Svg>>>;
export default F0Icon;
//# sourceMappingURL=F0Icon.d.ts.map