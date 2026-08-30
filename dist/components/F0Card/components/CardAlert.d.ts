import { CardAlertProps, CardAlertVariant } from '../types';
/**
 * Raw CSS color values for the card's 2px border — intentionally slightly stronger
 * than the alert bg token (0.12 vs 0.10) to give the border enough visibility.
 * These use the same base variable as `background.{variant}.DEFAULT` in colors.ts:
 *   hsl(var(--{variant}-50) / 0.1) — bg token
 *   hsl(var(--{variant}-50) / 0.12) — border (slightly more opaque)
 */
export declare const alertBorderColor: Record<CardAlertVariant, string>;
/**
 * Wraps the card with an alert header sitting on top.
 *
 * Design (Figma 6042:19084):
 *
 *   ┌─────────────────────────────────┐  ← outer div, alert bg color, rounded-xl
 *   │ ⚠ Title                      ✕ │  ← header strip (no bg — inherits outer)
 *   ├─────────────────────────────────┤
 *   │  ┌───────────────────────────┐  │  ← card (white, 2px border matching alert bg,
 *   │  │  card body                │  │    full rounded-xl)
 *   │  └───────────────────────────┘  │
 *   └─────────────────────────────────┘
 *
 * Dismiss is fully controlled: the consumer removes the alert by passing alert={undefined}
 * (or omitting it) in response to the onDismiss callback.
 */
export declare const CardAlertWrapper: import('react').ForwardRefExoticComponent<{
    alert: CardAlertProps;
    fullHeight?: boolean;
    children: React.ReactNode;
} & import('react').RefAttributes<HTMLDivElement>>;
