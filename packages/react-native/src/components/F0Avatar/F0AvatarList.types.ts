import {
  type F0AvatarCompanyProps,
  type F0AvatarFileProps,
  type F0AvatarFlagProps,
  type F0AvatarPersonProps,
  type F0AvatarTeamProps,
} from "./F0Avatar.types"

export const AVATAR_LIST_SIZES = ["xs", "sm", "md"] as const
export type AvatarListSize = (typeof AVATAR_LIST_SIZES)[number]

export const F0_AVATAR_LIST_TYPES = [
  "person",
  "team",
  "company",
  "flag",
  "file",
] as const
export type F0AvatarListType = (typeof F0_AVATAR_LIST_TYPES)[number]

type F0AvatarListTypeMapping = {
  person: Omit<F0AvatarPersonProps, "size">
  team: Omit<F0AvatarTeamProps, "size">
  company: Omit<F0AvatarCompanyProps, "size">
  flag: Omit<F0AvatarFlagProps, "size">
  file: Omit<F0AvatarFileProps, "size">
}

export type F0AvatarListProps<T extends F0AvatarListType = F0AvatarListType> = {
  type: T
  avatars: Array<F0AvatarListTypeMapping[T]>
  size?: AvatarListSize
  max?: number
  remainingCount?: number
}

export type F0AvatarListAnyProps = {
  [K in F0AvatarListType]: F0AvatarListProps<K>
}[F0AvatarListType]
