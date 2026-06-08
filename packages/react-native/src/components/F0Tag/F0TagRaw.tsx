import React from "react"

import { enforceTextFormat } from "../../lib/text"
import { cn } from "../../lib/utils"
import { F0Icon } from "../primitives/F0Icon"

import type { F0TagRawProps } from "./F0Tag.types"
import { F0TagRoot } from "./F0TagRoot"

/**
 * Neutral tag variant with optional icon.
 */
const F0TagRaw = React.memo(function F0TagRaw({
  text,
  additionalAccessibleText,
  icon,
  noBorder,
  className,
  onlyIcon,
  info,
}: F0TagRawProps) {
  enforceTextFormat(text, { disallowEmpty: true })

  return (
    <F0TagRoot
      className={cn(
        !noBorder && "border border-solid border-f0-border-secondary",
        className
      )}
      left={
        icon ? (
          <F0Icon icon={icon} size="sm" color="default" aria-hidden />
        ) : null
      }
      text={onlyIcon ? undefined : text}
      additionalAccessibleText={
        additionalAccessibleText || (onlyIcon ? text : undefined)
      }
      info={info}
    />
  )
})

F0TagRaw.displayName = "F0Tag.Raw"

export { F0TagRaw }
