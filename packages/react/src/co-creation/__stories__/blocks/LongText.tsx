import { CoCreationBlockManifest } from "@/co-creation/types"
import z from "zod"

export const LongTextProps = z.object({
  text: z
    .union([z.string(), z.array(z.string())])
    .describe("The text to display. Can be a string or an array of strings"),
  title: z.string().optional().describe("The title to display"),
  description: z.string().optional().describe("The description to display"),
})

export const LongText = (props: z.infer<typeof LongTextProps>) => {
  return (
    <section>
      {props.title && <h2>{props.title}</h2>}
      {props.description && <h6>{props.description}</h6>}
      {props.text && <p>{props.text}</p>}
    </section>
  )
}

export const LongTextCCBManifest: CoCreationBlockManifest = {
  id: "longText",
  description: "A block that displays a title and a description",
  component: LongText,
  propsSchema: LongTextProps,
}
