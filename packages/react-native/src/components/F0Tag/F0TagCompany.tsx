import React from "react"

import { Avatar } from "../Avatars/Avatar"

import type { F0TagCompanyProps } from "./F0Tag.types"
import { F0TagRoot } from "./F0TagRoot"

/**
 * Company semantic tag with square avatar shape.
 */
const F0TagCompany = React.memo(function F0TagCompany({
  src,
  name,
}: F0TagCompanyProps) {
  return (
    <F0TagRoot
      className="border border-solid border-f0-border-secondary py-px pl-px"
      left={
        <Avatar
          avatar={{
            type: "company",
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

F0TagCompany.displayName = "F0Tag.Company"

export { F0TagCompany }
