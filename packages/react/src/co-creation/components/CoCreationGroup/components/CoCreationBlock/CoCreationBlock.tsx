import {
  CoCreationBlockInstance,
  CoCreationBlockManifest,
} from "@/co-creation/types"
import { F0Button } from "@/components/F0Button/F0Button"
import { PageLayout } from "@/components/layouts/page/PageLayout"
import { PageLayoutBlockProps } from "@/components/layouts/page/PageLayout/components/PageLayoutBlock/types"
import { Plus } from "@/icons/app"
import { useMemo } from "react"
import { OneButton } from "../../../OneButton/OneButton"
import { CoCreationGroupMode } from "../../CoCreationGroup"

export type CoCreationBlockProps = PageLayoutBlockProps & {
  /**
   * PRopably we can remove this property and handle the click here sending the block info to the cocreationhook
   *
   */
  onClickOneButton: () => void

  /**
   * The block instance
   */
  instance: CoCreationBlockInstance

  /**
   * The manifest of the block
   */
  manifest: CoCreationBlockManifest

  /**
   * The mode of the co-creation block
   */
  mode: CoCreationGroupMode

  /**
   * The function to call when the add block button is clicked
   */
  onClickAddBlock: () => void
}

export const CoCreationBlock = (props: CoCreationBlockProps) => {
  const { instance, manifest, mode } = props

  const actions = useMemo(() => {
    if (typeof manifest.actions === "function") {
      return manifest.actions?.(instance.props)
    }
    return manifest.actions
  }, [manifest, instance])

  const primaryAction = useMemo(() => {
    if (["co-creation", "co-editing"].includes(mode)) {
      return (
        <OneButton
          size="sm"
          label="Edit with One"
          onClick={props.onClickOneButton}
        />
      )
    }

    if (mode === "co-review") {
      return (
        <OneButton size="sm" label="Ask One" onClick={props.onClickOneButton} />
      )
    }
  }, [mode, props.onClickAddBlock, props.onClickOneButton])
  return (
    <PageLayout.Block
      className="group relative"
      primaryAction={primaryAction}
      {...props}
      actions={actions}
    >
      {props.children}
      {mode === "co-creation" && (
        <div className="absolute -bottom-1 left-0 right-0 hidden items-center justify-center align-middle after:absolute after:bottom-3 after:left-0 after:right-0 after:h-1 after:bg-f1-background-secondary after:content-[''] group-hover:flex">
          <F0Button
            label="Insert new block"
            onClick={props.onClickAddBlock}
            hideLabel
            variant="ghost"
            icon={Plus}
            size="sm"
          />
        </div>
      )}
    </PageLayout.Block>
  )
}
