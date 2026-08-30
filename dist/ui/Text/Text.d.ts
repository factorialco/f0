import { default as React } from 'react';
import { AsAllowedList } from './types';
import { TextVariant, TextVariants } from './variants';
export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, "className">, React.RefAttributes<HTMLElement> {
    /**
     * Content to be rendered
     */
    content: string;
    /**
     * The text variant to render. Determines styling and default semantic element.
     */
    variant?: TextVariant;
    /**
     * Text alignment
     * @default left
     */
    align?: NonNullable<TextVariants["align"]>;
    /**
     * Additional classes to apply
     * @private
     */
    className?: string;
    /**
     * HTML tag name to use for rendered element.
     * If not provided, uses semantic default based on variant.
     * @default varies by variant
     */
    as?: AsAllowedList;
    /**
     * Enable text ellipsis with optional line configuration
     * - `true`: Single line ellipsis (lines = 1)
     * - `number`: Multi-line ellipsis with specified line count
     * - `undefined`: No ellipsis
     */
    ellipsis?: boolean | number;
    /**
     * Disable tooltip when text is truncated
     * Only applies when ellipsis is enabled
     * @default false
     */
    noEllipsisTooltip?: boolean;
    /**
     * Enable markdown parsing for content
     * @default false
     */
    markdown?: boolean;
    /**
     * Show a required indicator (red asterisk) after the content.
     * Useful when the Text is used as a form label.
     * @default false
     */
    required?: boolean;
}
/**
 * Text component for consistent typography across the application.
 */
export declare const Text: React.ForwardRefExoticComponent<Omit<TextProps, "ref"> & React.RefAttributes<HTMLElement>>;
