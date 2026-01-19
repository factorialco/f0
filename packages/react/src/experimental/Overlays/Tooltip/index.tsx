import { experimentalComponent } from "@/lib/experimental"
import {
  TooltipContent,
  Tooltip as TooltipPrimitive,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"
import React, { ComponentProps } from "react"
import { cn } from "../../../lib/utils"
import { Shortcut } from "../../Information/Shortcut"

type TooltipInternalProps = {
  children: React.ReactNode
  shortcut?: ComponentProps<typeof Shortcut>["keys"]
  delay?: number
  instant?: boolean
} & (
  | {
      label: string
      description?: string
    }
  | {
      label?: string
      description: string
    }
)

export function TooltipInternal({
  label,
  description,
  children,
  shortcut,
  instant = false,
  delay = 700,
}: TooltipInternalProps) {
  return (
    <>
      <TooltipProvider
        delayDuration={instant ? 100 : delay}
        disableHoverableContent={instant}
      >
        <TooltipPrimitive>
          <TooltipTrigger asChild className="pointer-events-auto">
            {children}
          </TooltipTrigger>
          <TooltipContent
            className={cn(
              "max-w-xs",
              shortcut && "pr-1.5",
              instant && "pointer-events-none"
            )}
          >
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                {label && <p className="font-semibold">{label}</p>}
                {shortcut && <Shortcut keys={shortcut} variant="inverse" />}
              </div>
              {description && (
                <p className="font-normal">{description.toString()}</p>
              )}
            </div>
          </TooltipContent>
        </TooltipPrimitive>
      </TooltipProvider>
    </>
  )
}

const privateProps = ["delay"] as const

export type TooltipProps = Omit<
  TooltipInternalProps,
  (typeof privateProps)[number]
>

const _Tooltip = (props: TooltipProps) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as TooltipInternalProps)

  return <TooltipInternal {...publicProps} />
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Tooltip = experimentalComponent("Tooltip", _Tooltip)
