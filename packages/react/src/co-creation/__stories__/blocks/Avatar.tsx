import { CoCreationBlockManifest } from "@/co-creation/types"
import { F0Avatar } from "@/components/avatars/F0Avatar"
import z from "zod"

export const AvatarProps = z.object({
  type: z
    .enum(["person", "team", "company", "file", "flag"])
    .describe("The type of the avatar"),
  firstName: z.string().describe("The first name of the person"),
  lastName: z.string().describe("The last name of the person"),
  badge: z
    .object({
      type: z.enum(["module", "icon"]).describe("The type of the badge"),
      module: z.string().describe("The module of the badge"),
      icon: z.string().describe("The icon of the badge"),
    })
    .optional()
    .describe("The badge of the avatar"),
})

export const Avatar = (props: z.infer<typeof AvatarProps>) => {
  return <F0Avatar {...props} />
}

export const AvatarCCBManifest: CoCreationBlockManifest = {
  id: "avatar",
  description: "A block that displays an avatar",
  component: Avatar,
  propsSchema: AvatarProps,
}
