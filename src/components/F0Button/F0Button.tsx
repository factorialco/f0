import React, { forwardRef, useCallback, useMemo, useState } from "react";
import { View } from "react-native";

import { cn } from "../../lib/utils";
import { PressableFeedback } from "../PressableFeedback";
import { F0Icon } from "../primitives/F0Icon";
import { F0Text } from "../primitives/F0Text";

import type { F0ButtonProps } from "./F0Button.types";
import {
  buttonVariants,
  pressedVariants,
  getIconColor,
  getIconOnlyColor,
  getTextColor,
} from "./F0Button.styles";

/**
 * F0Button - Primary button component for the F0 Design System.
 *
 * Uses Props API (not Composition). Element order is fixed: icon → emoji → label.
 * Press feedback uses PressableFeedback component for smooth animations and
 * tracks pressed state for color changes based on variant.
 *
 * Supports auto-loading: when `onPress` returns a Promise, the button
 * auto-disables until the Promise resolves. The host can also control
 * loading externally via the `loading` prop.
 *
 * @example
 * <F0Button label="Submit" onPress={handleSubmit} />
 *
 * @example
 * <F0Button label="Delete" variant="critical" icon={TrashIcon} />
 *
 * @example
 * // Async auto-loading
 * <F0Button label="Save" onPress={async () => await save()} />
 *
 * @example
 * // Custom press feedback
 * <F0Button label="Custom" feedback="scale" />
 */
const F0Button = React.memo(
  forwardRef<View, F0ButtonProps>(function F0Button(
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
      accessibilityHint,
      showBadge = false,
      fullWidth = false,
      testID,
      feedback = "both",
      ...rest
    },
    ref,
  ) {
    // State for async onPress auto-loading
    const [isLoading, setIsLoading] = useState(false);
    // State for tracking pressed state (for color changes)
    const [isPressed, setIsPressed] = useState(false);

    const isDisabled = disabled || loading || isLoading;
    const isRound = hideLabel && round;

    const handlePress = useCallback(async () => {
      if (!onPress || isDisabled) return;

      const result = onPress();

      if (result instanceof Promise) {
        setIsLoading(true);
        try {
          await result;
        } finally {
          setIsLoading(false);
        }
      }
    }, [onPress, isDisabled]);

    const handlePressIn = useCallback(() => {
      if (!isDisabled) {
        setIsPressed(true);
      }
    }, [isDisabled]);

    const handlePressOut = useCallback(() => {
      setIsPressed(false);
    }, []);

    // Memoize the base className (everything except pressed state)
    const baseClassName = useMemo(
      () =>
        buttonVariants({
          variant,
          size,
          disabled: isDisabled,
          round: isRound,
        }),
      [variant, size, isDisabled, isRound],
    );

    const accessibilityLabel = useMemo(() => {
      const parts = [label];
      if (isDisabled) parts.push("disabled");
      if (loading || isLoading) parts.push("loading");
      return parts.join(", ");
    }, [label, isDisabled, loading, isLoading]);

    const shouldShowPressed = isPressed && !isDisabled;

    const className = shouldShowPressed
      ? cn(baseClassName, pressedVariants({ variant }))
      : baseClassName;

    const iconIsOnly = isRound || (hideLabel && !emoji);
    const iconColor = icon
      ? iconIsOnly
        ? getIconOnlyColor(variant, shouldShowPressed)
        : getIconColor(variant, shouldShowPressed)
      : undefined;
    const textColor = getTextColor(variant, shouldShowPressed);

    return (
      <View className={`flex ${fullWidth ? "flex-1" : "item-start"}`}>
        <PressableFeedback
          ref={ref}
          disabled={isDisabled}
          variant={feedback}
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          accessibilityLabel={accessibilityLabel}
          accessibilityRole="button"
          accessibilityState={{
            disabled: isDisabled,
            busy: loading || isLoading,
          }}
          accessibilityHint={accessibilityHint}
          testID={testID}
          {...rest}
        >
          <View className={className}>
            {icon && (
              <F0Icon
                icon={icon}
                size="lg"
                className={cn(isRound ? undefined : "-ml-0.5", iconColor)}
              />
            )}
            {emoji && (
              <F0Text variant="body-md-medium" color={textColor}>
                {emoji}
              </F0Text>
            )}
            {!hideLabel && (
              <F0Text variant="body-md-medium" color={textColor}>
                {label}
              </F0Text>
            )}
          </View>
        </PressableFeedback>
        {showBadge && variant === "outline" && (
          <View
            accessibilityLabel="Notification Badge"
            className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-f0-icon-accent"
          />
        )}
      </View>
    );
  }),
);

F0Button.displayName = "F0Button";

export { F0Button };
