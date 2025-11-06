import {
  CoCreationBlockInstance,
  CoCreationBlockManifest,
} from "@/co-creation/types"
import { F0Button } from "@/components/F0Button/F0Button"
import { PageLayout } from "@/components/layouts/page/PageLayout"
import { Plus } from "lucide-react"
import { CoCreationBlock } from "./components/CoCreationBlock"

export const cocreationModes = [
  "co-creation",
  "co-editing",
  "co-review",
] as const

export type CoCreationGroupMode = (typeof cocreationModes)[number]

export type CoCreationGroupProps = {
  /**
   * The blocks manifests that are available to use
   */
  blockManifests: CoCreationBlockManifest[]

  /**
   * The block instances that are currently in the group and their props
   */
  blockInstances: CoCreationBlockInstance[]

  /**
   * The mode of the co-creation group
   * - "co-creation": The agent or user will create and manipulate the block instances and the blocks content
   * - "co-editing": The block instances list are fixed and the agent or user will edit the blocks content only
   * - "co-review": The block instances list and the blocks content are fixed and the agent can awswer questions about the content
   * @default "co-review"
   */
  mode: CoCreationGroupMode
}

export const CoCreationGroup = ({
  blockInstances,
  blockManifests,
  mode,
}: CoCreationGroupProps) => {
  return (
    <PageLayout.Group>
      {blockInstances.map((instance) => {
        const manifest = blockManifests.find((b) => b.id === instance.type)
        return manifest ? (
          <CoCreationBlock
            key={instance.id}
            onClickOneButton={() => {
              console.log("onClickOneButton", instance)
            }}
            instance={instance}
            manifest={manifest}
            mode={mode}
            onClickAddBlock={() => {
              console.log("onClickAddBlock")
            }}
          >
            <manifest.component key={instance.id} {...instance.props} />
          </CoCreationBlock>
        ) : (
          "Invalid block instance (type not found)"
        )
      })}

      {mode === "co-creation" && (
        <div className="relative flex w-full items-center justify-center p-1 align-middle after:absolute after:bottom-3 after:left-0 after:right-0 after:h-1 after:bg-f1-background-secondary after:content-['']">
          <F0Button
            label="Insert new block"
            onClick={() => {
              console.log("onClickAddBlock")
            }}
            hideLabel
            variant="ghost"
            icon={Plus}
            size="sm"
          />
        </div>
      )}
    </PageLayout.Group>
  )
}
