import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { F0Icon } from "@/components/F0Icon"
import { AlertCircle } from "@/icons/app"
import { cn } from "@/lib/utils"

interface ErrorTooltipProps {
  message: string
  children: React.ReactNode
}

export function ErrorTooltip({ message, children }: ErrorTooltipProps) {
  return (
    <div className="relative h-full w-full">
      <TooltipPrimitive.Provider delayDuration={100} disableHoverableContent>
        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger
            asChild
            className="pointer-events-auto h-full w-full"
          >
            <div className="h-full w-full">{children}</div>
          </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
              side="top"
              sideOffset={4}
              className={cn(
                "z-50 overflow-hidden rounded border border-solid border-f1-border-secondary",
                "bg-f1-background px-2 py-1.5 leading-tight",
                "animate-in fade-in-0 zoom-in-95",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
                "data-[side=top]:slide-in-from-bottom-2",
                "flex items-center gap-1"
              )}
            >
              <F0Icon icon={AlertCircle} color="critical" size="sm" />
              <span className="text-sm font-medium text-f1-foreground-critical">
                {message}
              </span>
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    </div>
  )
}
