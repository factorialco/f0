import type { ReactNode } from "react"

import { useCallback, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { AlertCircle } from "@/icons/app"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

interface ErrorTooltipProps {
  message: string
  children: ReactNode
}

export function ErrorTooltip({ message, children }: ErrorTooltipProps) {
  const [open, setOpen] = useState(false)

  const handleFocusCapture = useCallback(() => setOpen(true), [])
  const handleBlurCapture = useCallback(() => setOpen(false), [])

  return (
    <div className="relative h-full w-full">
      <TooltipProvider delayDuration={100} disableHoverableContent>
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger asChild className="pointer-events-auto h-full w-full">
            <div
              className="h-full w-full"
              onFocusCapture={handleFocusCapture}
              onBlurCapture={handleBlurCapture}
            >
              {children}
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" className="flex items-center gap-1">
            <F0Icon icon={AlertCircle} color="critical" size="sm" />
            <span className="text-sm font-medium text-f1-foreground-critical">
              {message}
            </span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
