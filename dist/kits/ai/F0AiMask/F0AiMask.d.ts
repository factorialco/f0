/**
 * CSS RGB color string type
 * @example 'rgb(255, 0, 0)' or 'rgb(255,0,0)'
 */
export type CSSRgbString = `rgb(${number}, ${number}, ${number})` | `rgb(${number},${number},${number})`;
export type MaskOptions = {
    /**
     * The width of the Mask element.
     * @default 600
     */
    width?: number;
    /**
     * The height of the Mask element.
     * @default 600
     */
    height?: number;
    /**
     * Device pixel ratio multiplier; can be less than 1.
     */
    ratio?: number;
    /**
     * Color mode. Upon what background color will the element be displayed.
     * - dark: optimize for dark background. (clean and luminous glow. may be invisible on light backgrounds.)
     * - light: optimize for light background. (high saturation glow. not elegant on dark backgrounds.)
     * @default light
     * @note It's not possible to make a style that works well on both light and dark backgrounds.
     * @note If you do not know the background color, start with light.
     */
    mode?: "dark" | "light";
    /**
     * Color list.
     * @default ['rgb(229, 25, 67)', 'rgb(229, 86, 25)', 'rgb(229, 25, 67)', 'rgb(161, 173, 229)']
     * @note The color list must be specified with 4 colors in an array, formatted as rgb color strings.
     */
    colors?: [CSSRgbString, CSSRgbString, CSSRgbString, CSSRgbString];
    /**
     * The width of the border.
     * @default 8
     */
    borderWidth?: number;
    /**
     * The width of the glow effect.
     * @default 200
     *
     */
    glowWidth?: number;
    /**
     * The border radius.
     * @default 8
     */
    borderRadius?: number;
    /**
     * Custom class names for wrapper and canvas elements.
     */
    classNames?: string;
    /**
     * Custom styles for wrapper and canvas elements.
     */
    styles?: Partial<CSSStyleDeclaration>;
};
export declare class F0AiMask {
    readonly element: HTMLElement;
    private canvas;
    private options;
    private running;
    private disposed;
    private startTime;
    private lastTime;
    private rafId;
    private glr;
    private observer?;
    constructor(options?: MaskOptions);
    start(): void;
    pause(): void;
    dispose(): void;
    resize(width: number, height: number, ratio?: number): void;
    /**
     * Automatically resizes the canvas to match the dimensions of the given element.
     * @note using ResizeObserver
     */
    autoResize(sourceElement: HTMLElement): void;
    fadeIn(): Promise<void>;
    fadeOut(): Promise<void>;
    private checkGLError;
    private getGLErrorName;
    private setupGL;
    private render;
}
