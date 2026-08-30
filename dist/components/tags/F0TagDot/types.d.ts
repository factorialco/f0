import { baseColors } from '@factorialco/f0-core';
type BaseColor = keyof typeof baseColors;
export declare const tagDotColors: ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];
export type NewColor = Extract<BaseColor, (typeof tagDotColors)[number]>;
export type Props = {
    text: string;
    /**
     * Info text to display an i icon and a tooltip next to the tag
     */
    info?: string;
} & ({
    color: NewColor;
} | {
    customColor: string;
});
export {};
