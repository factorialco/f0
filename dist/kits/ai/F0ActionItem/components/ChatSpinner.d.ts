import { CSSProperties } from 'react';
export interface ChatSpinnerProps {
    size?: number;
    className?: string;
    style?: CSSProperties;
    /**
     * "default" → spins 2 rotations, pauses, repeats.
     * "continuous" → 2 rotations forward, then 2 backward, no pause. Used for
     * "writing"-style activity where the indicator should never rest.
     */
    variant?: "default" | "continuous";
}
export declare const ChatSpinner: import('react').ForwardRefExoticComponent<ChatSpinnerProps & import('react').RefAttributes<HTMLDivElement>>;
