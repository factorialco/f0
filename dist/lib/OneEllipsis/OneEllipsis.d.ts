import { default as React } from 'react';
import { Tag } from './types';
export { type Tag, tags } from './types';
type OneEllipsisProps = {
    /**
     * The className to apply to the text.
     */
    className?: string;
    /**
     * The number of lines to display.
     */
    lines?: number;
    /**
     * Whether the ellipsis is disabled.
     */
    disabled?: boolean;
    /**
     * The children to display. (only string is supported)
     */
    children: string;
    /**
     * Whether the tooltip is disabled.
     */
    noTooltip?: boolean;
    /**
     * The tag to use for the text.
     */
    tag?: Tag;
    /**
     * Enable markdown parsing for content
     * @default false
     */
    markdown?: boolean;
};
declare const OneEllipsis: React.ForwardRefExoticComponent<OneEllipsisProps & React.RefAttributes<HTMLElement>>;
export { OneEllipsis };
