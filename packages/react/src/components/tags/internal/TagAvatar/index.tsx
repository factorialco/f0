import { forwardRef } from "react"

import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { useTextFormatEnforcer } from "@/lib/text"

import { BaseTag } from "../BaseTag"

type Props = {
  text: string
  deactivated?: boolean
  avatar: AvatarVariant
  onClick?: () => void
}

export const F0TagAvatar = forwardRef<HTMLDivElement, Props>(
  ({ avatar, text, deactivated }, ref) => {
    useTextFormatEnforcer(
      text,
      { disallowEmpty: true },
      { componentName: "F0TagAvatar" }
    )

    const isPerson = avatar.type === "person"

    return (
      <BaseTag
        ref={ref}
        deactivated={deactivated}
        className={
          isPerson
            ? // Person tag: larger avatar in a 32px pill, using BaseTag's default
              // padding (2px / 4px / 8px). Matches the Figma spec.
              "h-8 border-[1px] border-solid border-f1-border-secondary"
            : "border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]"
        }
        left={<F0Avatar avatar={avatar} size={isPerson ? "sm" : "xs"} />}
        text={text}
        shape={isPerson ? "rounded" : "square"}
      />
    )
  }
)

F0TagAvatar.displayName = "AvatarTag"
