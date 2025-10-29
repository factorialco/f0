import { cva, type VariantProps } from "cva";
import React, {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import { SvgProps, Svg } from "react-native-svg";
import { cn } from "../../lib/utils";
import { cssInterop } from "nativewind";

const iconVariants = cva({
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

// Keep track of icons that have already had cssInterop applied
const interopAppliedIcons = new WeakSet();

// Function to apply NativeWind interop to an icon component
export function applyIconInterop(icon: IconType) {
  if (!interopAppliedIcons.has(icon)) {
    cssInterop(icon, {
      className: {
        target: "style",
        nativeStyleToProp: {
          color: true,
          opacity: true,
        },
      },
    });
    interopAppliedIcons.add(icon);
  }
  return icon;
}

export const Icon = forwardRef<Svg, IconProps>(function Icon(
  { size, icon, className, testID, ...props },
  ref,
) {
  if (!icon) return null;

  // Apply NativeWind interop to the icon if not already applied
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
