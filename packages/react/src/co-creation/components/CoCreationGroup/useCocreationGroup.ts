import { CoCreationBlockManifest } from "@/co-creation/types"
import { toArray } from "@/lib/toArray"
import { useMemo } from "react"
import { CoCreationGroupMode } from "./CoCreationGroup"

const modeInstructions: Record<CoCreationGroupMode, string[]> = {
  "co-creation": [
    "You are a co-creation agent. You will create and manipulate the block instances and the blocks content. You will use the blocks manifests to choose the different blocks types to create or edit the block instances and the blocks content",
  ],
  "co-editing": [
    "You are a co-editing agent. You will edit the blocks content only. You will use the blocks understand the content and the context to edit the blocks content.",
  ],
  "co-review": [
    "You are a co-review agent. You will answer questions about the blocks content.",
  ],
}

const commonInstructions: string[] = [
  "Block manifests describes the basic information pieces used to build the content. Each manifest desceribes a block type, for what use it and the schema needed to populate it",
  "Block instances are the actual instances of the blocks manifest (block types). They are the basic information pieces used to build the content. Each instance is a block type with the props needed to populate it",
]

const indent = (text: string | string[]) => {
  return toArray(text).map((line) => `    ${line}`)
}
const blockManifestToStrings = (blockManifest: CoCreationBlockManifest) => {
  return [
    `- ${blockManifest.id}:`,
    ...indent([
      "Description / use case:",
      ...indent(blockManifest.description),
    ]),
    ...indent([
      "Props schema:",
      ...indent(blockManifest.propsSchema.toString()),
    ]),
  ]
}
export const useCocreationGroup = (options: {
  blockManifests: CoCreationBlockManifest[]
  agentInstructions: string | string[]
  agentContext?: string | string[]
  mode?: CoCreationGroupMode
}) => {
  const {
    mode = "co-review",
    blockManifests,
    agentInstructions,
    agentContext,
  } = options

  const instructions = useMemo(() => {
    const modeText = toArray(modeInstructions[mode] ?? [])

    return [
      ...modeText,
      ...commonInstructions,
      "---",
      "This is the list of the block types (block manifests) used to build the content:",
      ...blockManifests.flatMap((manifest) => {
        return indent(blockManifestToStrings(manifest))
      }),
      "---",
      "Following are the group instructions:",
      ...indent(agentInstructions),
      "---",
      ...(agentContext
        ? ["Following are the group context:", ...indent(agentContext)]
        : []),
    ]

    console.log(agentContext)
  }, [agentInstructions, agentContext, blockManifests, mode])

  return {
    instructions,
  }
}
