import React from "react"

import { enforceTextFormat } from "../../lib/text"
import { Avatar } from "../Avatars/Avatar"

import type { F0TagPersonProps } from "./F0Tag.types"
import { F0TagRoot } from "./F0TagRoot"

/**
 * Person semantic tag with avatar integration.
 */
const F0TagPerson = React.memo(function F0TagPerson({
  src,
  name,
  deactivated,
}: F0TagPersonProps) {
  enforceTextFormat(name, { disallowEmpty: true })

  return (
    <F0TagRoot
      className="border border-solid border-f0-border-secondary py-px pl-px"
      left={
        <Avatar
          avatar={{
            type: "person",
            firstName: name,
            lastName: "",
            src,
            deactivated,
          }}
          size="xsmall"
        />
      }
      text={name}
      textColor={deactivated ? "disabled" : "default"}
      shape="rounded"
    />
  )
})

F0TagPerson.displayName = "F0Tag.Person"

export { F0TagPerson }
