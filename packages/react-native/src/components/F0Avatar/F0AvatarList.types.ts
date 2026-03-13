import {
  type F0AvatarCompanyProps,
  type F0AvatarFileProps,
  type F0AvatarFlagProps,
  type F0AvatarPersonProps,
  type F0AvatarTeamProps,
} from "./F0Avatar.types"

export const AVATAR_LIST_SIZES = ["xs", "sm", "md"] as const
export type AvatarListSize = (typeof AVATAR_LIST_SIZES)[number]

export type F0AvatarListPropsAvatars =
  | {
      type: "person"
      avatars: (Omit<F0AvatarPersonProps, "size"> & Record<string, unknown>)[]
    }
  | {
      type: "team"
      avatars: (Omit<F0AvatarTeamProps, "size"> & Record<string, unknown>)[]
    }
  | {
      type: "company"
      avatars: (Omit<F0AvatarCompanyProps, "size"> & Record<string, unknown>)[]
    }
  | {
      type: "flag"
      avatars: (Omit<F0AvatarFlagProps, "size"> & Record<string, unknown>)[]
    }
  | {
      type: "file"
      avatars: (Omit<F0AvatarFileProps, "size"> & Record<string, unknown>)[]
    }

export type F0AvatarListProps = {
  size?: AvatarListSize
  max?: number
  remainingCount?: number
} & F0AvatarListPropsAvatars
