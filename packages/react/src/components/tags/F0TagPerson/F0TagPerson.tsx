import { forwardRef } from "react"
import { F0TagAvatar } from "../internal/TagAvatar"
import type { F0TagPersonProps } from "./types"

export const F0TagPerson = forwardRef<HTMLDivElement, F0TagPersonProps>(
  ({ src, name }, ref) => {
    return (
      <F0TagAvatar
        ref={ref}
        avatar={{
          type: "person",
          firstName: name,
          lastName: "",
          src: src,
        }}
        text={name}
      />
    )
  }
)

F0TagPerson.displayName = "F0TagPerson"
