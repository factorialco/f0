import { forwardRef } from "react"

import type { F0TagTeamProps } from "./types"

import { F0TagAvatar } from "../internal/TagAvatar"

export const F0TagTeam = forwardRef<HTMLDivElement, F0TagTeamProps>(
  ({ name, src, testId }, ref) => {
    return (
      <F0TagAvatar
        ref={ref}
        avatar={{
          type: "team",
          name: name,
          src: src,
        }}
        text={name}
        testId={testId}
      />
    )
  }
)

F0TagTeam.displayName = "F0TagTeam"
