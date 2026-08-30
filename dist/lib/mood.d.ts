import { F0IconProps, IconType } from '../components/F0Icon';
export declare const pulses: readonly ["superNegative", "negative", "neutral", "positive", "superPositive"];
export type Pulse = (typeof pulses)[number];
export declare const pulseIcon: Record<Pulse, IconType>;
export declare const pulseIconColor: Record<Pulse, F0IconProps["color"]>;
