import { AvatarBadge } from "@/components/avatars/F0Avatar/types"

export type WithAvatarBadge<T> = T & {
  badge?: AvatarBadge
}

export interface WithPlaceholder {
  placeholder?: string
}
