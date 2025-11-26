import { forwardRef } from "react"
import { F0TagAvatar } from "../TagAvatar"
import type { Props } from "./types"

export const F0TagTeam = forwardRef<HTMLDivElement, Props>(
  ({ teamName, teamImageUrl, onClick }, ref) => {
    return (
      <F0TagAvatar
        ref={ref}
        avatar={{
          type: "team",
          name: teamName,
          src: teamImageUrl,
        }}
        text={teamName}
        onClick={onClick}
      />
    )
  }
)

F0TagTeam.displayName = "F0TagTeam"
