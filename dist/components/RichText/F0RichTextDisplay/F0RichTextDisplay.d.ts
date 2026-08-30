import { HTMLAttributes } from 'react';
export interface F0RichTextDisplayProps extends HTMLAttributes<HTMLDivElement> {
    content: string;
    className?: string;
    format?: "html" | "markdown";
}
export type F0RichTextDisplayHandle = HTMLDivElement;
/** @deprecated Use F0RichTextDisplayProps */
export type RichTextDisplayProps = F0RichTextDisplayProps;
/** @deprecated Use F0RichTextDisplayHandle */
export type RichTextDisplayHandle = F0RichTextDisplayHandle;
/**
 * @experimental This is an experimental component, use it at your own risk
 */
declare const F0RichTextDisplay: import('react').ForwardRefExoticComponent<F0RichTextDisplayProps & import('react').RefAttributes<HTMLDivElement>>;
export { F0RichTextDisplay };
/** @deprecated Use F0RichTextDisplay */
export declare const RichTextDisplay: import('react').ForwardRefExoticComponent<F0RichTextDisplayProps & import('react').RefAttributes<HTMLDivElement>>;
