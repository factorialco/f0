export const avatarFileSizes = ["xs", "sm", "md", "lg"] as const
export type AvatarFileSize = (typeof avatarFileSizes)[number]

export type FileDef = {
  name: string
  type: string
}
