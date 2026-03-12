import React from "react"

import { useTextFormatEnforcer } from "../../lib/text"
import { Avatar } from "../Avatars/Avatar"

import type { F0TagTeamProps } from "./F0Tag.types"
import { F0TagRoot } from "./F0TagRoot"

/**
 * Team semantic tag with square avatar shape.
 */
const F0TagTeam = React.memo(function F0TagTeam({ src, name }: F0TagTeamProps) {
  useTextFormatEnforcer(name, { disallowEmpty: true })

  return (
    <F0TagRoot
      className="border border-solid border-f0-border-secondary py-px pl-px"
      left={
        <Avatar
          avatar={{
            type: "team",
            name,
            src,
          }}
          size="xsmall"
        />
      }
      text={name}
      shape="square"
    />
  )
})

F0TagTeam.displayName = "F0Tag.Team"

export { F0TagTeam }
