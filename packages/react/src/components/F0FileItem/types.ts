import type { FileDef } from "@/components/avatars/F0AvatarFile/types"
import type { IconType } from "@/components/F0Icon"

type FileAction = {
  icon?: IconType
  label: string
  onClick: () => void
  critical?: boolean
}

type FileItemSize = "md" | "lg"

interface FileItemProps extends React.HTMLAttributes<HTMLDivElement> {
  file: File | FileDef
  actions?: FileAction[]
  disabled?: boolean
  size?: FileItemSize
}

export type { FileAction, FileItemProps, FileItemSize }
