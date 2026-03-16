import { type ComponentProps } from "react"

import {
  color as avatarColors,
  Avatar as AvatarComponent,
} from "../F0Avatar.primitives"

type AvatarComponentProps = ComponentProps<typeof AvatarComponent>

export function getAvatarInitials(
  name: string | string[],
  size?: AvatarComponentProps["size"],
  isFile?: boolean
): string {
  const nameArray = Array.isArray(name) ? name : [name]
  const isSmall = size === "xsmall" || size === "small"
  const minChar = isFile ? 3 : 2

  if (isSmall) return (nameArray[0][0] ?? "").toUpperCase()
  if (!Array.isArray(name)) return name.slice(0, minChar).toUpperCase()

  return nameArray
    .slice(0, minChar)
    .map((namePart) => namePart[0])
    .join("")
    .toUpperCase()
}

export function getAvatarColorByText(
  text: string
): AvatarComponentProps["color"] {
  let hash = 0

  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }

  const index =
    ((hash % avatarColors.length) + avatarColors.length) % avatarColors.length

  return avatarColors[index]
}
