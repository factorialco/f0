import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import * as React from "react";
declare const HoverCard: React.FC<HoverCardPrimitive.HoverCardProps>;
declare const HoverCardTrigger: React.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>>;
declare const HoverCardContent: React.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    container?: HTMLElement | null;
} & React.RefAttributes<HTMLDivElement>>;
export { HoverCard, HoverCardContent, HoverCardTrigger };
