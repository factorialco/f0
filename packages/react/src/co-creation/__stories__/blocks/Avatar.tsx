import { CoCreationBlockManifest } from "@/co-creation/types"
import { F0Avatar } from "@/components/avatars/F0Avatar"
import z from "zod"

export const AvatarProps = z.object({
  type: z.enum(["person"]).describe("The type of the avatar"),
  firstName: z.string().describe("The first name of the person"),
  lastName: z.string().describe("The last name of the person"),
})

export const Avatar = (props: z.infer<typeof AvatarProps>) => {
  return (
    <F0Avatar
      avatar={{
        type: "person",
        firstName: props.firstName,
        lastName: props.lastName,
      }}
    />
  )
}

export const AvatarCCBManifest: CoCreationBlockManifest = {
  id: "avatar",
  description: "A block that displays an avatar",
  component: Avatar,
  propsSchema: AvatarProps,
}
