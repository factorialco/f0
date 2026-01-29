import { forwardRef } from "react"

import type { F0TagCompanyProps } from "./types"

import { F0TagAvatar } from "../internal/TagAvatar"

export const F0TagCompany = forwardRef<HTMLDivElement, F0TagCompanyProps>(
  ({ name, src, testId }, ref) => {
    return (
      <F0TagAvatar
        ref={ref}
        avatar={{
          type: "company",
          name: name,
          src: src,
        }}
        text={name}
        testId={testId}
      />
    )
  }
)

F0TagCompany.displayName = "F0TagCompany"
