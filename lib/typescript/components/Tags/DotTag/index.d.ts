import { baseColors } from "../../../styles";
export type NewColor = Extract<keyof typeof baseColors, "viridian" | "malibu" | "yellow" | "purple" | "lilac" | "barbie" | "smoke" | "army" | "flubber" | "indigo" | "camel">;
export declare const dotTagColors: NewColor[];
export type DotTagProps = {
    text: string;
} & ({
    color: NewColor;
} | {
    customColor: string;
});
export declare const DotTag: {
    ({ text, ...props }: DotTagProps): import("react").JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=index.d.ts.map