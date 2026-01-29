import { forwardRef } from "react"

import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import type { TestableProps } from "@/global.types"
import { useTextFormatEnforcer } from "@/lib/text"

import { BaseTag } from "../BaseTag"

type Props = TestableProps & {
  text: string
  avatar: AvatarVariant
  onClick?: () => void
}

export const F0TagAvatar = forwardRef<HTMLDivElement, Props>(
  ({ avatar, text, testId }, ref) => {
    useTextFormatEnforcer(
      text,
      { disallowEmpty: true },
      { componentName: "F0TagAvatar" }
    )

    return (
      <BaseTag
        ref={ref}
        className="border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]"
        left={<F0Avatar avatar={avatar} size="xs" />}
        text={text}
        shape={avatar.type === "person" ? "rounded" : "square"}
        testId={testId}
      />
    )
  }
)

F0TagAvatar.displayName = "AvatarTag"
