import type { ReactNode } from "react"
import { useCallback, useEffect, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { AlertCircle } from "@/icons/app"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

interface ErrorTooltipProps {
  message?: string
  children: ReactNode
}

export function ErrorTooltip({ message, children }: ErrorTooltipProps) {
  const [open, setOpen] = useState(false)

  const handleFocusCapture = useCallback(() => {
    if (message) setOpen(true)
  }, [message])

  const handleBlurCapture = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!message) setOpen(false)
  }, [message])

  return (
    <div className="relative h-full w-full">
      <TooltipProvider delayDuration={100} disableHoverableContent>
        <Tooltip open={open && !!message} onOpenChange={setOpen}>
          <TooltipTrigger asChild className="pointer-events-auto h-full w-full">
            <div
              className="flex h-full w-full items-center"
              onFocusCapture={handleFocusCapture}
              onBlurCapture={handleBlurCapture}
            >
              {children}
            </div>
          </TooltipTrigger>
          {message && (
            <TooltipContent
              side="top"
              className="border-black/10 flex items-center gap-1 bg-[#fff] shadow-md"
            >
              <F0Icon icon={AlertCircle} color="critical" size="sm" />
              <span className="text-sm font-medium text-f1-foreground-critical">
                {message}
              </span>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
