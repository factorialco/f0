import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
declare const PopoverArrow: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverArrowProps & React.RefAttributes<SVGSVGElement>>;
type PopoverContentProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    container?: HTMLElement | null;
};
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    container?: HTMLElement | null;
} & React.RefAttributes<HTMLDivElement>>;
export { Popover, PopoverAnchor, PopoverArrow, PopoverContent, PopoverTrigger };
export type { PopoverContentProps };
