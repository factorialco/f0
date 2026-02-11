import React, { useMemo } from "react";
import type { Svg } from "react-native-svg";
import { withUniwind } from "uniwind";
import type { F0IconProps, IconType } from "./F0Icon.types";
import { iconVariants } from "./F0Icon.styles";

// Keep track of icons that have already had withUniwind applied
const interopAppliedIcons = new WeakSet<IconType>();

/**
 * Applies UniWind interop to an icon component
 * Ensures withUniwind is only applied once per icon type
 * @internal
 */
export function applyIconInterop(icon: IconType): IconType {
  if (!interopAppliedIcons.has(icon)) {
    const wrappedIcon = withUniwind(icon) as IconType;
    interopAppliedIcons.add(wrappedIcon);
    return wrappedIcon;
  }
  return icon;
}

/**
 * F0Icon - Icon component for the F0 Design System
 *
 * Renders SVG icons with consistent sizing from the design system.
 * Icons are automatically wrapped with UniWind for className support.
 *
 * @example
 * import { Archive } from '@/icons/app';
 *
 * <F0Icon icon={Archive} size="lg" />
 */
const F0Icon = React.memo(
  React.forwardRef<Svg, F0IconProps>(
    (
      { size = "md", icon, testID, className: customClassName, ...rest },
      ref,
    ) => {
      // Apply UniWind interop to the icon if not already applied
      // Must be called before any conditional returns (React Hooks rules)
      const IconComponent = useMemo(
        () => (icon ? applyIconInterop(icon) : null),
        [icon],
      );

      // Memoize className generation - merge size variants with custom className
      const className = useMemo(() => {
        const sizeClasses = iconVariants({ size });
        return customClassName
          ? `${sizeClasses} ${customClassName}`
          : sizeClasses;
      }, [size, customClassName]);

      // Early return if no icon provided (after all hooks)
      if (!icon || !IconComponent) return null;

      return (
        <IconComponent
          ref={ref}
          className={className}
          testID={testID}
          {...rest}
        />
      );
    },
  ),
);

F0Icon.displayName = "F0Icon";

export default F0Icon;
