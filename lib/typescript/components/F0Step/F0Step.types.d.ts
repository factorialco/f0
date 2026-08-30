export declare const F0_STEP_STATES: readonly ["active", "completed", "pending"];
export type F0StepState = (typeof F0_STEP_STATES)[number];
export interface F0StepSegmentProps {
    /**
     * Visual state for the segment.
     */
    state: F0StepState;
    /**
     * Test identifier for the segment root.
     */
    testID?: string;
}
interface F0StepBaseProps {
    /**
     * Optional screen reader label for the full segmented progress bar.
     */
    accessibilityLabel?: string;
    /**
     * Test identifier for the container root.
     */
    testID?: string;
}
interface F0StepDerivedProps extends F0StepBaseProps {
    /**
     * Total amount of segments to render.
     * Invalid values are normalized to `1`.
     */
    steps: number;
    /**
     * Zero-based index for the current segment.
     * Invalid values are normalized into the available range.
     */
    currentStep: number;
    /**
     * Optional zero-based highest reached segment.
     * Use this to preserve completed segments when the current step moves back.
     */
    furthestReachedStep?: number;
    /**
     * Explicit segment states cannot be combined with derived mode.
     */
    stepStates?: never;
}
interface F0StepExplicitProps extends F0StepBaseProps {
    /**
     * Explicit visual state for each segment.
     */
    stepStates: readonly F0StepState[];
    /**
     * Derived mode props cannot be combined with explicit state mode.
     */
    steps?: never;
    currentStep?: never;
    furthestReachedStep?: never;
}
export type F0StepProps = F0StepDerivedProps | F0StepExplicitProps;
export {};
//# sourceMappingURL=F0Step.types.d.ts.map