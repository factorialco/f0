import { View } from "react-native";
import type { PressableFeedbackProps } from "./PressableFeedback.types";
/**
 * PressableFeedback - Internal pressable primitive with animated feedback
 *
 * Wraps React Native's Pressable with Reanimated scale and highlight
 * animations. Used internally by F0 components.
 *
 * @internal
 *
 * @example
 * <PressableFeedback variant="both" onPress={handlePress}>
 *   <View><F0Text>Press me</F0Text></View>
 * </PressableFeedback>
 */
export declare const PressableFeedback: import("react").ForwardRefExoticComponent<PressableFeedbackProps & import("react").RefAttributes<View>>;
export default PressableFeedback;
//# sourceMappingURL=PressableFeedback.d.ts.map