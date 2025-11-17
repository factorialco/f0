import { F0Icon } from "@/components/F0Icon"
import { useTextFormatEnforcer } from "@/lib/text"
import { forwardRef } from "react"
import { BaseTag } from "../internal/BaseTag"
import type { F0TagRawProps } from "./types"

export const F0TagRaw = forwardRef<HTMLDivElement, F0TagRawProps>(
  ({ text, additionalAccessibleText, icon, onlyIcon }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    return (
      <BaseTag
        ref={ref}
        className="border-[1px] border-solid border-f1-border-secondary"
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
        hideLabel={onlyIcon}
        text={text}
        additionalAccessibleText={additionalAccessibleText}
      />
    )
  }
)

F0TagRaw.displayName = "F0TagRaw"
