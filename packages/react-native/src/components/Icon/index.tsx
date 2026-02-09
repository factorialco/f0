import { tv, type VariantProps } from "tailwind-variants";
import React, {
    forwardRef,
    ForwardRefExoticComponent,
    RefAttributes,
} from "react";
import { Svg, SvgProps } from "react-native-svg";
import { withUniwind } from "uniwind";
import { cn } from "../../lib/utils";

const iconVariants = tv({
  base: "shrink-0",
  variants: {
    size: {
      xl: "w-8 h-8 stroke-xl",
      lg: "w-6 h-6 stroke-lg",
      md: "w-5 h-5 stroke-md",
      sm: "w-4 h-4 stroke-sm",
      xs: "w-3 h-3 stroke-xs",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface IconProps extends SvgProps, VariantProps<typeof iconVariants> {
  icon: IconType;
  testID?: string;
  className?: string;
  variant?:
    | "default"
    | "critical"
    | "neutral"
    | "ghost"
    | "outline"
    | "promote";
  isPressed?: boolean;
}

export type IconType = ForwardRefExoticComponent<
  SvgProps &
    RefAttributes<Svg> & {
      className?: string;
    }
>;

// Keep track of icons that have already had withUniwind applied
const interopAppliedIcons = new WeakSet();

// Function to apply UniWind interop to an icon component
export function applyIconInterop(icon: IconType) {
  if (!interopAppliedIcons.has(icon)) {
    const wrappedIcon = withUniwind(icon);
    interopAppliedIcons.add(wrappedIcon);
    return wrappedIcon;
  }
  return icon;
}

export const Icon = forwardRef<Svg, IconProps>(function Icon(
  { size = "md", icon, className, testID, ...props },
  ref,
) {
  if (!icon) return null;

  // Apply UniWind interop to the icon if not already applied
  const Component = applyIconInterop(icon);

  return (
    <Component
      ref={ref}
      {...props}
      className={cn(iconVariants({ size }), className)}
      testID={testID}
    />
  );
});
