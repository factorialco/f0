import { cva } from 'cva';
import { forwardRef, useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cssInterop } from 'nativewind';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/components/Button/index.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var iconVariants = cva({
  base: "shrink-0",
  variants: {
    size: {
      xl: "w-8 h-8 stroke-xl",
      lg: "w-6 h-6 stroke-lg",
      md: "w-5 h-5 stroke-md",
      sm: "w-4 h-4 stroke-sm",
      xs: "w-3 h-3 stroke-xs"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var interopAppliedIcons = /* @__PURE__ */ new WeakSet();
function applyIconInterop(icon) {
  if (!interopAppliedIcons.has(icon)) {
    cssInterop(icon, {
      className: {
        target: "style",
        nativeStyleToProp: {
          color: true,
          opacity: true
        }
      }
    });
    interopAppliedIcons.add(icon);
  }
  return icon;
}
var Icon = forwardRef(function Icon2({ size, icon, className, testID, ...props }, ref) {
  if (!icon) return null;
  const Component = applyIconInterop(icon);
  return /* @__PURE__ */ jsx(
    Component,
    {
      ref,
      ...props,
      className: cn(iconVariants({ size }), className),
      testID
    }
  );
});
var variants = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote"
];
var sizes = ["sm", "md", "lg"];
var buttonVariants = cva({
  base: "flex-row items-center justify-center rounded border-none grow-0",
  variants: {
    variant: {
      default: "bg-f1-background-accent-bold",
      outline: "bg-f1-background-inverse-secondary border border-f1-border",
      neutral: "bg-f1-background-secondary",
      critical: "bg-f1-background-secondary border border-f1-border",
      ghost: "bg-transparent",
      promote: "bg-f1-background-promote border border-f1-border-promote"
    },
    size: {
      sm: "h-6 rounded-sm",
      md: "h-8 rounded",
      lg: "h-10 rounded-md"
    },
    disabled: {
      true: "opacity-50",
      false: ""
    },
    round: {
      true: "aspect-square p-0",
      false: "gap-1 px-2 sm:px-3 lg:px-4"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    disabled: false,
    round: false
  }
});
var pressedVariants = cva({
  base: "",
  variants: {
    variant: {
      default: "bg-f1-background-accent-bold-hover",
      outline: "bg-f1-background-tertiary border-opacity-70",
      neutral: "bg-f1-background-secondary-hover",
      critical: "bg-f1-background-critical-bold border-transparent",
      ghost: "bg-f1-background-secondary-hover",
      promote: "bg-f1-background-promote-hover"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var getIconColor = (variant, isPressed) => {
  switch (variant) {
    case "default":
      return "text-f1-icon-inverse";
    case "critical":
      return isPressed ? "text-f1-icon-inverse" : "text-f1-icon-critical-bold";
    default:
      return "text-f1-icon";
  }
};
var getIconOnlyColor = (variant, isPressed) => {
  switch (variant) {
    case "critical":
      return isPressed ? "text-f1-icon-inverse" : "text-f1-icon-critical-bold";
    case "default":
      return "text-f1-icon-inverse";
    case "outline":
    case "neutral":
    case "ghost":
    case "promote":
    default:
      return "text-f1-icon-bold";
  }
};
var getTextColorClass = (variant, isPressed) => {
  if (isPressed && variant === "critical") {
    return "text-f1-foreground-inverse";
  }
  switch (variant) {
    case "default":
      return "text-f1-foreground-inverse";
    case "critical":
      return "text-f1-foreground-critical";
    default:
      return "text-f1-foreground";
  }
};
var Button = forwardRef(function Button2({
  label,
  onPress,
  disabled = false,
  loading = false,
  icon,
  emoji,
  hideLabel = false,
  variant = "default",
  size = "md",
  round = false,
  className,
  accessibilityHint,
  showBadge = false,
  fullWidth = false
}, ref) {
  const [isLoading, setIsLoading] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = async () => {
    if (!onPress || disabled || loading || isLoading) return;
    const result = onPress();
    if (result instanceof Promise) {
      setIsLoading(true);
      try {
        await result;
      } finally {
        setIsLoading(false);
      }
    }
  };
  const isDisabled = disabled || loading || isLoading;
  const accessibilityLabel = `${label}${isDisabled ? ", disabled" : ""}${loading || isLoading ? ", loading" : ""}`;
  const shouldShowPressed = isPressed && !isDisabled;
  return /* @__PURE__ */ jsxs(View, { className: `flex ${fullWidth ? "flex-1" : "item-start"}`, children: [
    /* @__PURE__ */ jsxs(
      Pressable,
      {
        ref,
        disabled: isDisabled,
        onPressIn: () => setIsPressed(true),
        onPressOut: () => setIsPressed(false),
        onPress: handlePress,
        className: cn(
          buttonVariants({
            variant,
            size,
            disabled: isDisabled,
            round: hideLabel && round
          }),
          shouldShowPressed && pressedVariants({ variant }),
          className
        ),
        accessibilityLabel,
        accessibilityRole: "button",
        accessibilityState: {
          disabled: isDisabled,
          busy: loading || isLoading
        },
        accessibilityHint,
        children: [
          icon && /* @__PURE__ */ jsx(
            Icon,
            {
              icon,
              size: size === "sm" ? "sm" : "md",
              className: cn(
                hideLabel && round ? void 0 : "-ml-0.5",
                hideLabel && round ? getIconOnlyColor(variant, shouldShowPressed) : getIconColor(variant, shouldShowPressed)
              )
            }
          ),
          emoji && /* @__PURE__ */ jsx(
            Text,
            {
              className: cn(
                "text-base font-medium",
                getTextColorClass(variant, shouldShowPressed)
              ),
              children: emoji
            }
          ),
          !hideLabel && /* @__PURE__ */ jsx(
            Text,
            {
              className: cn(
                "text-base font-medium",
                getTextColorClass(variant, shouldShowPressed)
              ),
              children: label
            }
          )
        ]
      }
    ),
    showBadge && variant === "outline" && /* @__PURE__ */ jsx(
      View,
      {
        accessibilityLabel: "Notification Badge",
        className: "absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-f1-icon-accent"
      }
    )
  ] });
});

export { Button, sizes, variants };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map