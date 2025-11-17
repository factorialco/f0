import { CoCreationBlockManifest } from "@/co-creation/types"
import z from "zod"

export const TextProps = z.object({
  text: z.string().describe("The text to display"),
})

export const Text = (props: z.infer<typeof TextProps>) => {
  return <div>{props.text}</div>
}

export const TextCCBManifest: CoCreationBlockManifest = {
  id: "text",
  description: "A block that displays a text",
  component: Text,
  propsSchema: TextProps,
  actions: () => [
    {
      label: "Duplicate",
      onClick: () => {
        console.log("duplicate")
      },
    },
    {
      label: "Delete",
      onClick: () => {
        console.log("delete")
      },
    },
  ],
}
