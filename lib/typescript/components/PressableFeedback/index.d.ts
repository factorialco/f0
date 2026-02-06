import { View, type PressableProps } from "react-native";
import { type WithTimingConfig } from "react-native-reanimated";
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
export interface PressableFeedbackProps extends Omit<PressableProps, "style" | "children"> {
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
export declare const PressableFeedback: import("react").ForwardRefExoticComponent<PressableFeedbackProps & import("react").RefAttributes<View>>;
export default PressableFeedback;
//# sourceMappingURL=index.d.ts.map