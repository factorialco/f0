import { forwardRef } from "react"

import type { F0TagPersonProps } from "./types"

import { F0TagAvatar } from "../internal/TagAvatar"

export const F0TagPerson = forwardRef<HTMLDivElement, F0TagPersonProps>(
  ({ src, name, deactivated, right }, ref) => {
    return (
      <F0TagAvatar
        ref={ref}
        avatar={{
          type: "person",
          firstName: name,
          lastName: "",
          src: src,
          deactivated,
        }}
        text={name}
        deactivated={deactivated}
        right={right}
      />
    )
  }
)

F0TagPerson.displayName = "F0TagPerson"
