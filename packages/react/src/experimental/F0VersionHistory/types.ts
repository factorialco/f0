import { IconType } from "@/components/F0Icon"

export interface VersionAuthor {
  firstName: string
  lastName: string
  src?: string
}

export interface Version {
  id: string
  author: VersionAuthor
  date: string
  time: string
  onClick?: () => void
  isActive?: boolean
}

export interface CurrentVersion {
  title: string
  onClick?: () => void
  isActive?: boolean
}

export interface F0VersionHistoryProps {
  title: string
  versions: Version[]
  currentVersion?: CurrentVersion
  action?: {
    label: string
    onClick: () => void
    icon: IconType
  }
}
