import { useTextFormatEnforcer } from "../../../lib/text"
import { cn } from "../../../lib/utils"
import { F0Icon, type IconType } from "../../primitives/Icon"
import { BaseTag } from "../BaseTag"

export type RawTagProps = {
  text?: string
  additionalAccesibleText?: string
  icon?: IconType
  noBorder?: boolean
  className?: string
}

export const RawTag = ({
  text,
  additionalAccesibleText,
  icon,
  noBorder,
  className,
}: RawTagProps) => {
  useTextFormatEnforcer(text, { disallowEmpty: true })

  return (
    <BaseTag
      classNameContainer={cn(
        !noBorder && "border border-solid border-f0-border-secondary",
        className,
      )}
      classNameText="text-f0-foreground"
      left={
        icon ? (
          <F0Icon icon={icon} size="sm" className="text-f0-icon" aria-hidden />
        ) : null
      }
      text={text}
      additionalAccesibleText={additionalAccesibleText}
    />
  )
}

RawTag.displayName = "RawTag"
