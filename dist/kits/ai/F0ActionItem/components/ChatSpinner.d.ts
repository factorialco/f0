import { CSSProperties } from 'react';
export interface ChatSpinnerProps {
    size?: number;
    className?: string;
    style?: CSSProperties;
    /**
     * "default" → spins 2 rotations, pauses, repeats.
     * "continuous" → rotates forward at a constant rate, never pausing. Used
     * for "writing"-style activity where the indicator should never rest.
     */
    variant?: "default" | "continuous";
    /**
     * When false, the spinner rests at its base orientation (the static One
     * mark). A spin already in progress completes its current cycle before
     * resting, so toggling mid-spin never jumps. Only affects "default".
     */
    playing?: boolean;
}
export declare const ChatSpinner: import('react').ForwardRefExoticComponent<ChatSpinnerProps & import('react').RefAttributes<HTMLDivElement>>;
