import { F0Icon } from "@/components/F0Icon"
import { useTextFormatEnforcer } from "@/lib/text"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { BaseTag } from "../BaseTag"
import type { Props } from "./types"

export const F0TagRaw = forwardRef<HTMLDivElement, Props>(
  ({ text, additionalAccesibleText, icon, noBorder, className }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    return (
      <BaseTag
        ref={ref}
        className={cn(
          !noBorder && "border-[1px] border-solid border-f1-border-secondary",
          className
        )}
        left={
          icon ? (
            <F0Icon
              icon={icon}
              size="sm"
              className="text-f1-icon"
              aria-hidden
            />
          ) : null
        }
        text={text}
        additionalAccesibleText={additionalAccesibleText}
      />
    )
  }
)

F0TagRaw.displayName = "F0TagRaw"
