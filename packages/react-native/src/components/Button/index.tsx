import { cva, type VariantProps } from "cva";
import React, { forwardRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { cn } from "../../lib/utils";
import { Icon, type IconType } from "../Icon";

export const variants = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote",
] as const;
export type ButtonVariant = (typeof variants)[number];

export const sizes = ["sm", "md", "lg"] as const;
export type ButtonSize = (typeof sizes)[number];

const buttonVariants = cva({
  base: "flex-row items-center justify-center rounded border-0",
  variants: {
    variant: {
      default: "bg-f1-background-accent-bold",
      outline: "bg-f1-background-inverse-secondary border border-f1-border",
      neutral: "bg-f1-background-secondary",
      critical: "bg-f1-background-secondary border border-f1-border",
      ghost: "bg-transparent",
      promote: "bg-f1-background-promote border border-f1-border-promote",
    },
    size: {
      sm: "h-6 rounded-sm",
      md: "h-8 rounded",
      lg: "h-10 rounded-md",
    },
    disabled: {
      true: "opacity-50",
      false: "",
    },
    round: {
      true: "aspect-square p-0",
      false: "gap-1 px-2 sm:px-3 lg:px-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    disabled: false,
    round: false,
  },
});

const pressedVariants = cva({
  base: "",
  variants: {
    variant: {
      default: "bg-f1-background-accent-bold-hover",
      outline: "bg-f1-background-tertiary border-opacity-70",
      neutral: "bg-f1-background-secondary-hover",
      critical: "bg-f1-background-critical-bold border-transparent",
      ghost: "bg-f1-background-secondary-hover",
      promote: "bg-f1-background-promote-hover",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const getIconColor = (variant: ButtonVariant, isPressed: boolean) => {
  switch (variant) {
    case "default":
      return "text-f1-icon-inverse";
    case "critical":
      return isPressed ? "text-f1-icon-inverse" : "text-f1-icon-critical-bold";
    default:
      return "text-f1-icon";
  }
};

const getIconOnlyColor = (variant: ButtonVariant, isPressed: boolean) => {
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

const getTextColorClass = (variant: ButtonVariant, isPressed: boolean) => {
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

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  label: string;
  onPress?: () => void | Promise<unknown>;
  disabled?: boolean;
  loading?: boolean;
  icon?: IconType | null;
  emoji?: string;
  hideLabel?: boolean;
  className?: string;
  accessibilityHint?: string;
  showBadge?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<View, ButtonProps>(function Button(
  {
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
    fullWidth = false,
  },
  ref,
) {
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

  return (
    <View className={fullWidth ? "flex-1" : "self-start"} style={{ position: "relative" }}>
      <Pressable
        ref={ref}
        disabled={isDisabled}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={handlePress}
        className={cn(
          buttonVariants({
            variant,
            size,
            disabled: isDisabled,
            round: hideLabel && round,
          }),
          shouldShowPressed && pressedVariants({ variant }),
          className,
        )}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        accessibilityState={{
          disabled: isDisabled,
          busy: loading || isLoading,
        }}
        accessibilityHint={accessibilityHint}
      >
        {icon && (
          <Icon
            icon={icon}
            size={size === "sm" ? "sm" : "md"}
            className={cn(
              hideLabel && round ? undefined : "-ml-0.5",
              hideLabel && round
                ? getIconOnlyColor(variant || "default", shouldShowPressed)
                : getIconColor(variant || "default", shouldShowPressed),
            )}
          />
        )}
        {emoji && (
          <Text
            className={cn(
              "text-base font-medium",
              getTextColorClass(variant || "default", shouldShowPressed),
            )}
          >
            {emoji}
          </Text>
        )}
        {!hideLabel && (
          <Text
            numberOfLines={1}
            className={cn(
              "text-base font-medium",
              getTextColorClass(variant || "default", shouldShowPressed),
            )}
          >
            {label}
          </Text>
        )}
      </Pressable>
      {showBadge && variant === "outline" && (
        <View
          accessibilityLabel="Notification Badge"
          className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-f1-icon-accent"
        />
      )}
    </View>
  );
});
