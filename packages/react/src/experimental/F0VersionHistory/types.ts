export interface VersionAuthor {
  firstName: string
  lastName: string
  src?: string
}

export interface Version {
  id: string
  author: VersionAuthor
  timestamp: Date
  onClick?: () => void
}

export interface CurrentVersion {
  title: string
  onClick?: () => void
}

export interface F0VersionHistoryProps {
  title: string
  versions: Version[]
  currentVersion?: CurrentVersion
  activeVersionId?: string | "current"
}
