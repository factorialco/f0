import { MeetingJoin } from '../types';
/**
 * `href` and `onClick` are mutually exclusive on F0Button, so the navigating and
 * the handling variants are rendered as two distinct buttons rather than one with
 * optional props.
 */
export declare const MeetingJoinButton: ({ join, disabled, }: {
    join: MeetingJoin;
    disabled: boolean;
}) => import("react").JSX.Element;
