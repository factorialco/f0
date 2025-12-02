// Re-export Collapsible from @radix-ui/react-collapsible
// Note: This is a peer dependency, so users need to install it
"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleContent, CollapsibleTrigger }
