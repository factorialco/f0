import {
  TooltipContent,
  Tooltip as TooltipPrimitive,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"
import { type ReactNode } from "react"

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
            {children}
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
