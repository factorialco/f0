import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { useTextFormatEnforcer } from "@/lib/text"
import { forwardRef } from "react"
import { BaseTag } from "../BaseTag"

type Props = {
  text: string
  avatar: AvatarVariant
  onClick?: () => void
}

export const F0TagAvatar = forwardRef<HTMLDivElement, Props>(
  ({ avatar, onClick, text }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    return (
      <BaseTag
        ref={ref}
        className="border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]"
        left={<F0Avatar avatar={avatar} size="xsmall" />}
        text={text}
        onClick={onClick}
      />
    )
  }
)

F0TagAvatar.displayName = "AvatarTag"
