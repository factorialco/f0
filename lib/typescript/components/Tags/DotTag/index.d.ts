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
export declare function DotTag({ text, ...props }: DotTagProps): import("node_modules/@types/react").JSX.Element | null;
export declare namespace DotTag {
    var displayName: string;
}
//# sourceMappingURL=index.d.ts.map