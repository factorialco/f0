import { forwardRef } from "react"
import { F0TagAvatar } from "../internal/TagAvatar"
import type { F0TagTeamProps } from "./types"

export const F0TagTeam = forwardRef<HTMLDivElement, F0TagTeamProps>(
  ({ name, src }, ref) => {
    return (
      <F0TagAvatar
        ref={ref}
        avatar={{
          type: "team",
          name: name,
          src: src,
        }}
        text={name}
      />
    )
  }
)

F0TagTeam.displayName = "F0TagTeam"
