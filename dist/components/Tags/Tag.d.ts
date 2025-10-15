import { ComponentProps, ReactNode } from 'react';
import { AlertTag } from './AlertTab/index.js';
import 'react/jsx-runtime';

type AlertTagProps = ComponentProps<typeof AlertTag>;
interface WithTooltipDescription {
    /**
     * Optional description to show in the tooltip
     */
    description?: string;
}
type BaseTag<T extends {
    type: string;
}> = T & WithTooltipDescription;
type TagVariant = BaseTag<{
    type: "alert";
} & AlertTagProps>;
declare const Tag: ({ tag }: {
    tag: TagVariant;
}) => ReactNode;

export { Tag, type TagVariant };
