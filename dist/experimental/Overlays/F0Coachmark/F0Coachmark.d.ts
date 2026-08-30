import { F0CoachmarkProps } from './types';
/**
 * @experimental This is an experimental component use it at your own risk
 *
 * Not part of the public API: usage is counted here, where a coachmark actually
 * reaches the screen, because consumers reach coachmarks through
 * `coachmarks.open` rather than by rendering anything.
 */
export declare const F0Coachmark: {
    ({ target, title, description, actionLabel, onAction, onClose, step, arrow, side, align, sideOffset, container, }: F0CoachmarkProps): import("react").JSX.Element;
    displayName: string;
};
