import type { ReactNode } from "react"

export interface F0GraphNodeAvatarProps {
  children?: ReactNode
}

export function F0GraphNodeAvatar({ children }: F0GraphNodeAvatarProps) {
  return <div className="flex shrink-0 items-center">{children}</div>
}

F0GraphNodeAvatar.displayName = "F0GraphNodeAvatar"
