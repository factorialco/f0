import {
  CoCreationBlockInstance,
  CoCreationBlockManifest,
} from "@/co-creation/types"
import { PageLayout } from "@/components/layouts/page/PageLayout"
import { CoCreationBlock } from "./components/CoCreationBlock"

export type CoCreationGroupProps = {
  /**
   * The blocks that are available for the agent to use
   */
  agentAvailableBlockTyoes: CoCreationBlockManifest[]

  /**
   * The instructions for the agent to follow when creating the group
   */
  agentInstructions: string | string[]

  /**
   * The context for the agent to use when creating the group
   */
  agentContext: string | string[]

  /**
   * The blocks that are currently in the group and their props
   */
  blocks: CoCreationBlockInstance[]
}

export const CoCreationGroup = (props: CoCreationGroupProps) => {
  const blockWithDefinitions = props.blocks.map((block) => {
    const manifest = props.agentAvailableBlockTyoes.find(
      (b) => b.id === block.type
    )
    return {
      ...block,
      manifest,
    }
  })

  return (
    <PageLayout.Group>
      {blockWithDefinitions.map((block) => {
        return block.manifest ? (
          <CoCreationBlock
            key={block.id}
            onClickOneButton={() => {
              console.log("onClickOneButton", block)
            }}
            block={block}
          >
            <block.manifest.component key={block.id} {...block.props} />
          </CoCreationBlock>
        ) : (
          "Invalid block"
        )
      })}
    </PageLayout.Group>
  )
}
