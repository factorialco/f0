import type { HTMLAttributes } from "react"

import type { FileDef } from "@/components/avatars/F0AvatarFile/types"
import type { IconType } from "@/components/F0Icon"

export type F0FileAction = {
  icon?: IconType
  label: string
  onClick: () => void
  critical?: boolean
}

export const f0FileItemSizes = ["md", "lg"] as const
export type F0FileItemSize = (typeof f0FileItemSizes)[number]

export interface F0FileItemProps extends HTMLAttributes<HTMLDivElement> {
  file: File | FileDef
  actions?: F0FileAction[]
  disabled?: boolean
  size?: F0FileItemSize
}

/** @deprecated Use F0FileAction */
export type FileAction = F0FileAction
/** @deprecated Use F0FileItemProps */
export type FileItemProps = F0FileItemProps
/** @deprecated Use F0FileItemSize */
export type FileItemSize = F0FileItemSize
