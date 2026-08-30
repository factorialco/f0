import { F0PdfScale } from './types';
export type FixedScale = Exclude<F0PdfScale, "page-width" | "page-fit">;
export declare const fixedScales: FixedScale[];
export declare const nextScaleUp: (current: number) => number | undefined;
export declare const nextScaleDown: (current: number) => number | undefined;
