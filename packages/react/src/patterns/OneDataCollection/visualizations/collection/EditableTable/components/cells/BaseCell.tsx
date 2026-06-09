import { ReactNode } from "react"

import { F0Icon, type IconType, type F0IconProps } from "@/components/F0Icon"
import { F0Box } from "@/lib/F0Box"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import { ErrorTooltip } from "./ErrorTooltip"

const cursorClass = {
  text: "cursor-text",
  pointer: "cursor-pointer",
  default: "cursor-default",
  "not-allowed": "cursor-not-allowed",
} as const

export function BaseCell({
  readonly = false,
  disabled = false,
  showRightBorder = true,
  cursor = "text",
  isActive = false,
  borderOnHover = true,
  error,
  hint,
  children,
}: {
  readonly?: boolean
  disabled?: boolean
  showRightBorder?: boolean
  cursor?: "text" | "pointer" | "default" | "not-allowed"
  isActive?: boolean
  error?: string
  hint?: {
    icon: IconType
    message: string
    iconColor?: F0IconProps["color"]
    position?: "left" | "right"
  }
  borderOnHover?: boolean
  children: ReactNode
}) {
  const hintIcon = hint && !error && (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <F0Box
            role="img"
            aria-label={hint.message}
            display="flex"
            alignItems="center"
            shrink={false}
            paddingX="xs"
          >
            <F0Icon icon={hint.icon} size="md" color={hint.iconColor} />
          </F0Box>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="border-black/10 max-w-64 cursor-default text-f1-foreground shadow-md"
        >
          <span className="text-sm font-medium text-f1-foreground">
            {hint.message}
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

  return (
    <div
      className={cn(
        "flex w-full h-full min-w-0 min-h-12 border-solid",
        "border-0 border-r-[1px] border-f1-border-secondary",
        !showRightBorder && "border-r-0",
        cursorClass[cursor],
        error
          ? "relative z-[1] border-r-0 bg-f1-background-critical/10 shadow-[inset_0_0_0_1px_hsl(var(--critical-50))]"
          : isActive
            ? "relative z-[1] border-r-0 bg-f1-background shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]"
            : borderOnHover
              ? "shadow-none [&:not(:focus-within)]:hover:shadow-[inset_0_0_0_1px_hsl(var(--neutral-30))] focus-within:relative focus-within:z-[1] focus-within:border-r-0 focus-within:bg-f1-background focus-within:shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]"
              : "shadow-none",
        readonly && "bg-f1-background-secondary",
        disabled && "bg-f1-background-disabled"
      )}
    >
      <ErrorTooltip message={error}>
        {hint?.position !== "right" && hintIcon}
        <div className="min-w-0 flex-1">{children}</div>
        {hint?.position === "right" && hintIcon}
      </ErrorTooltip>
    </div>
  )
}
