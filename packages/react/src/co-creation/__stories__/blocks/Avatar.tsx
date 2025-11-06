import { CoCreationBlockManifest } from "@/co-creation/types"
import z from "zod"

export const AvatarProps = z.object({
  type: z.enum(["person"]).describe("The type of the avatar"),
  firstName: z.string().describe("The first name of the person"),
  lastName: z.string().describe("The last name of the person"),
})

export const Avatar = (props: z.infer<typeof AvatarProps>) => {
  return (
    <>
      This should be an avatar {props.type} with name {props.firstName}{" "}
      {props.lastName}
    </>
    //<F0AvatarPerson firstName={props.firstName} lastName={props.lastName} />
  )
}

export const AvatarCCBManifest: CoCreationBlockManifest = {
  id: "avatar",
  description: "A block that displays an avatar",
  component: Avatar,
  propsSchema: AvatarProps,
}
