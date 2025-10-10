import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { BadgeProps } from "@/experimental/Information/Badge"
import { DistributiveOmit } from "@/lib/typescript-utils/distributive-omit"
import { F0AvatarCompanyProps } from "../F0AvatarCompany"
import { F0AvatarFileProps } from "../F0AvatarFile"
import { F0AvatarFlagProps } from "../F0AvatarFlag"
import { F0AvatarPersonProps } from "../F0AvatarPerson"
import { F0AvatarTeamProps } from "../F0AvatarTeam"

export type AvatarBadge = (
  | {
      type: "module"
      module: ModuleId
    }
  | {
      type: Exclude<BadgeProps["type"], undefined>
      icon: BadgeProps["icon"]
    }
) & {
  tooltip?: string
}

export const avatarVariants = [
  "person",
  "team",
  "company",
  "file",
  "flag",
] as const

export type AvatarVariants = (typeof avatarVariants)[number]

export type AvatarVariant = DistributiveOmit<
  | ({ type: "person" } & F0AvatarPersonProps)
  | ({ type: "team" } & F0AvatarTeamProps)
  | ({ type: "company" } & F0AvatarCompanyProps)
  | ({ type: "file" } & F0AvatarFileProps)
  | ({ type: "flag" } & F0AvatarFlagProps),
  "size"
>

// Extract specific avatar types from the discriminated union
export type PersonAvatarVariant = Extract<AvatarVariant, { type: "person" }>
export type TeamAvatarVariant = Extract<AvatarVariant, { type: "team" }>
export type CompanyAvatarVariant = Extract<AvatarVariant, { type: "company" }>
export type FileAvatarVariant = Extract<AvatarVariant, { type: "file" }>
export type FlagAvatarVariant = Extract<AvatarVariant, { type: "flag" }>
