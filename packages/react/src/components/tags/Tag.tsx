import { ComponentProps, ReactNode } from "react"
import { F0TagAlert } from "./F0TagAlert"
import { F0TagBalance } from "./F0TagBalance"
import { F0TagCompany } from "./F0TagCompany"
import { F0TagDot, type TagDotProps } from "./F0TagDot"
import { F0TagPerson } from "./F0TagPerson"
import { F0TagRaw, type TagRawProps } from "./F0TagRaw"
import { F0TagStatus, type TagStatusProps } from "./F0TagStatus"
import { F0TagTeam } from "./F0TagTeam"

type PersonTagProps = ComponentProps<typeof F0TagPerson>
type TeamTagProps = ComponentProps<typeof F0TagTeam>
type CompanyTagProps = ComponentProps<typeof F0TagCompany>
type AlertTagProps = ComponentProps<typeof F0TagAlert>
type BalanceTagProps = ComponentProps<typeof F0TagBalance>

// Base interface for optional tooltip description
interface WithTooltipDescription {
  /**
   * Optional description to show in the tooltip
   */
  description?: string
}

// Base type for all tag variants
type BaseTag<T extends { type: string }> = T & WithTooltipDescription

export type TagVariant =
  | BaseTag<{ type: "dot" } & TagDotProps>
  | BaseTag<{ type: "person" } & PersonTagProps>
  | BaseTag<{ type: "team" } & TeamTagProps>
  | BaseTag<{ type: "company" } & CompanyTagProps>
  | BaseTag<{ type: "alert" } & AlertTagProps>
  | BaseTag<{ type: "status" } & TagStatusProps>
  | BaseTag<{ type: "balance" } & BalanceTagProps>
  | BaseTag<{ type: "raw" } & TagRawProps>

const tagComponent = (tag: TagVariant): ReactNode | undefined => {
  const { type } = tag

  if (type === "dot") return <F0TagDot {...tag} />
  if (type === "person") return <F0TagPerson {...tag} />
  if (type === "team") return <F0TagTeam {...tag} />
  if (type === "company") return <F0TagCompany {...tag} />
  if (type === "alert") return <F0TagAlert {...tag} />
  if (type === "status") return <F0TagStatus {...tag} />
  if (type === "balance") return <F0TagBalance {...tag} />
  if (type === "raw") return <F0TagRaw {...tag} />

  return undefined
}

export const Tag = ({ tag }: { tag: TagVariant }): ReactNode => {
  const renderTag = tagComponent(tag)

  if (!renderTag) return "Invalid tag type"

  return renderTag
}
