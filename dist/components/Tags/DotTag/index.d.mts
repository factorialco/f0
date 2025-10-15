import * as react_jsx_runtime from 'react/jsx-runtime';
import { baseColors } from '@factorialco/f0-core';

type NewColor = Extract<keyof typeof baseColors, "viridian" | "malibu" | "yellow" | "purple" | "lilac" | "barbie" | "smoke" | "army" | "flubber" | "indigo" | "camel">;
declare const dotTagColors: NewColor[];
type DotTagProps = {
    text: string;
} & ({
    color: NewColor;
} | {
    customColor: string;
});
declare const DotTag: {
    ({ text, ...props }: DotTagProps): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};

export { DotTag, type DotTagProps, type NewColor, dotTagColors };
