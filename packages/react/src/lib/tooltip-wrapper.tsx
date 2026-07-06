import { type ReactNode } from "react"

import {
  TooltipContent,
  Tooltip as TooltipPrimitive,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import { stripNativeTitle } from "./strip-native-title"

interface TooltipWrapperProps {
  tooltip?: string
  children: ReactNode
}

export const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
  tooltip,
  children,
}) => {
  if (tooltip) {
    return (
      <TooltipProvider delayDuration={100} disableHoverableContent>
        <TooltipPrimitive>
          <TooltipTrigger asChild className="pointer-events-auto">
            {stripNativeTitle(children)}
          </TooltipTrigger>
          <TooltipContent className="pointer-events-none max-w-xs">
            <p className="font-semibold">{tooltip}</p>
          </TooltipContent>
        </TooltipPrimitive>
      </TooltipProvider>
    )
  }
  return <>{children}</>
}
