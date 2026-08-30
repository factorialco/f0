import { CSSProperties } from 'react';
type Vector4<T = number> = [T, T, T, T];
type Uniform = {
    type: string;
    value: number[] | number;
};
type Uniforms = Record<string, Uniform>;
type TextureParams = {
    url: string;
    wrapS?: number;
    wrapT?: number;
    minFilter?: number;
    magFilter?: number;
    flipY?: number;
};
export interface ReactShaderToyProps {
    /** Fragment shader GLSL code. */
    fs: string;
    /** Vertex shader GLSL code. */
    vs?: string;
    /**
     * Textures to be passed to the shader. Textures need to be squared or will be
     * automatically resized.
     *
     * Options default to:
     *
     * ```js
     * {
     *   minFilter: LinearMipMapLinearFilter,
     *   magFilter: LinearFilter,
     *   wrapS: RepeatWrapping,
     *   wrapT: RepeatWrapping,
     * }
     * ```
     *
     * See [textures in the docs](https://rysana.com/docs/react-shaders#textures)
     * for details.
     */
    textures?: TextureParams[];
    /**
     * Custom uniforms to be passed to the shader.
     *
     * See [custom uniforms in the
     * docs](https://rysana.com/docs/react-shaders#custom-uniforms) for details.
     */
    uniforms?: Uniforms;
    /**
     * Color used when clearing the canvas.
     *
     * See [the WebGL
     * docs](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearColor)
     * for details.
     */
    clearColor?: Vector4;
    /**
     * GLSL precision qualifier. Defaults to `'highp'`. Balance between
     * performance and quality.
     */
    precision?: "highp" | "lowp" | "mediump";
    /** Custom inline style for canvas. */
    style?: CSSProperties;
    /** Customize WebGL context attributes. See [the WebGL docs](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getContextAttributes) for details. */
    contextAttributes?: Record<string, unknown>;
    /** Lerp value for `iMouse` built-in uniform. Must be between 0 and 1. */
    lerp?: number;
    /** Device pixel ratio. */
    devicePixelRatio?: number;
    /**
     * Callback for when the textures are done loading. Useful if you want to do
     * something like e.g. hide the canvas until textures are done loading.
     */
    onDoneLoadingTextures?: () => void;
    /** Custom callback to handle errors. Defaults to `console.error`. */
    onError?: (error: string) => void;
    /** Custom callback to handle warnings. Defaults to `console.warn`. */
    onWarning?: (warning: string) => void;
}
export declare function ReactShaderToy({ fs, vs, textures, uniforms: propUniforms, clearColor, precision, style, contextAttributes, lerp, devicePixelRatio, onDoneLoadingTextures, onError, onWarning, }: ReactShaderToyProps): import("react").JSX.Element;
export {};
