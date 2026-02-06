import { forwardRef, useCallback, useMemo } from "react";
import { Pressable, View, type PressableProps } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type WithTimingConfig,
} from "react-native-reanimated";
import { cn } from "../../lib/utils";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export type PressableFeedbackVariant = "highlight" | "scale" | "both" | "none";

export interface ScaleAnimationConfig {
  /** Scale value when pressed (0-1, default: 0.98) */
  value?: number;
  /** Timing configuration for the animation */
  timingConfig?: WithTimingConfig;
}

export interface HighlightAnimationConfig {
  /** Background color of the highlight overlay */
  backgroundColor?: string;
  /** Opacity when pressed [min, max] (default: [0, 0.1]) */
  opacity?: [number, number];
  /** Timing configuration for the animation */
  timingConfig?: WithTimingConfig;
}

export interface PressableFeedbackProps
  extends Omit<PressableProps, "style" | "children"> {
  /** Visual feedback variant */
  variant?: PressableFeedbackVariant;
  /** Scale animation configuration (only used when variant includes scale) */
  scaleAnimation?: ScaleAnimationConfig;
  /** Highlight animation configuration (only used when variant includes highlight) */
  highlightAnimation?: HighlightAnimationConfig;
  /** Additional className for the pressable container */
  className?: string;
  /** Style for the pressable container */
  style?: PressableProps["style"];
  /** Children to render inside the pressable */
  children?: React.ReactNode;
  /** Whether animations are disabled */
  disableAnimation?: boolean;
}

const DEFAULT_TIMING_CONFIG: WithTimingConfig = {
  duration: 150,
  easing: Easing.out(Easing.ease),
};

export const PressableFeedback = forwardRef<View, PressableFeedbackProps>(
  function PressableFeedback(
    {
      variant = "both",
      scaleAnimation,
      highlightAnimation,
      className,
      style,
      children,
      disableAnimation = false,
      onPressIn,
      onPressOut,
      disabled,
      ...restProps
    },
    ref,
  ) {
    // Animation shared values
    const scale = useSharedValue(1);
    const highlightOpacity = useSharedValue(0);

    // Config values
    const scaleValue = scaleAnimation?.value ?? 0.98;
    const scaleTimingConfig = useMemo(
      () => ({
        ...DEFAULT_TIMING_CONFIG,
        ...scaleAnimation?.timingConfig,
      }),
      [scaleAnimation],
    );

    const highlightOpacityValues = useMemo(
      () => highlightAnimation?.opacity ?? [0, 0.15],
      [highlightAnimation],
    );
    const highlightTimingConfig = useMemo(
      () => ({
        ...DEFAULT_TIMING_CONFIG,
        ...highlightAnimation?.timingConfig,
      }),
      [highlightAnimation],
    );
    const highlightColor =
      highlightAnimation?.backgroundColor ?? "rgba(0, 0, 0, 1)";

    const shouldScale =
      !disableAnimation && (variant === "scale" || variant === "both");
    const shouldHighlight =
      !disableAnimation && (variant === "highlight" || variant === "both");

    const handlePressIn = useCallback(
      (event: Parameters<NonNullable<PressableProps["onPressIn"]>>[0]) => {
        if (shouldScale) {
          scale.value = withTiming(scaleValue, scaleTimingConfig);
        }
        if (shouldHighlight) {
          highlightOpacity.value = withTiming(
            highlightOpacityValues[1],
            highlightTimingConfig,
          );
        }
        onPressIn?.(event);
      },
      [
        shouldScale,
        shouldHighlight,
        scale,
        highlightOpacity,
        scaleValue,
        scaleTimingConfig,
        highlightOpacityValues,
        highlightTimingConfig,
        onPressIn,
      ],
    );

    const handlePressOut = useCallback(
      (event: Parameters<NonNullable<PressableProps["onPressOut"]>>[0]) => {
        if (shouldScale) {
          scale.value = withTiming(1, scaleTimingConfig);
        }
        if (shouldHighlight) {
          highlightOpacity.value = withTiming(
            highlightOpacityValues[0],
            highlightTimingConfig,
          );
        }
        onPressOut?.(event);
      },
      [
        shouldScale,
        shouldHighlight,
        scale,
        highlightOpacity,
        scaleTimingConfig,
        highlightOpacityValues,
        highlightTimingConfig,
        onPressOut,
      ],
    );

    // Scale animation style
    const animatedContainerStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: scale.value }],
      };
    });

    // Highlight overlay animation style
    const animatedHighlightStyle = useAnimatedStyle(() => {
      return {
        opacity: highlightOpacity.value,
      };
    });

    return (
      <AnimatedPressable
        ref={ref}
        disabled={disabled}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        className={cn("overflow-hidden", className)}
        style={[animatedContainerStyle, style]}
        {...restProps}
      >
        {/* Highlight overlay */}
        {shouldHighlight && (
          <Animated.View
            pointerEvents="none"
            className="absolute inset-0"
            style={[
              animatedHighlightStyle,
              { backgroundColor: highlightColor },
            ]}
          />
        )}
        {children}
      </AnimatedPressable>
    );
  },
);

export default PressableFeedback;
