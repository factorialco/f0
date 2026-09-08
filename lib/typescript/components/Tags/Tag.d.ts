import { ComponentProps, ReactNode } from "react";
import { AlertTag } from "./AlertTab";
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
export type TagVariant = BaseTag<{
    type: "alert";
} & AlertTagProps>;
export declare const Tag: ({ tag }: {
    tag: TagVariant;
}) => ReactNode;
export {};
//# sourceMappingURL=Tag.d.ts.map