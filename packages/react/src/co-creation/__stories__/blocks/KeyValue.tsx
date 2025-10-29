import { CoCreationBlockManifest } from "@/co-creation/types"
import z from "zod"

export const KeyValueProps = z.object({
  label: z.string().describe("The label to display"),
  value: z.string().describe("The value to display"),
})

export const KeyValue = (props: z.infer<typeof KeyValueProps>) => {
  return (
    <div className="flex flex-col content-between gap-1">
      <p className="text-f1-foreground-secondary">{props.label}</p>
      <p className="text-f1-foreground">{props.value}</p>
    </div>
  )
}

export const KeyValueCCBManifest: CoCreationBlockManifest = {
  id: "keyValue",
  description: "A block that displays a key and a value",
  component: KeyValue,
  propsSchema: KeyValueProps,
}
