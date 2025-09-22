import { forwardRef } from "react"
import { F0TagAvatar } from "../TagAvatar"
import type { Props } from "./types"

export const F0TagPerson = forwardRef<HTMLDivElement, Props>(
  ({ name, avatarUrl, onClick }, ref) => {
    return (
      <F0TagAvatar
        ref={ref}
        avatar={{
          type: "person",
          firstName: name,
          lastName: "",
          src: avatarUrl,
        }}
        text={name}
        onClick={onClick}
      />
    )
  }
)

F0TagPerson.displayName = "F0TagPerson"
