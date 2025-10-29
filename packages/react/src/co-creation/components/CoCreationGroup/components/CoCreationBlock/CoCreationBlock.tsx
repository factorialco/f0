import { CoCreationBlockInstance as CoCreationBlockInstanceWithManifest } from "@/co-creation/types"
import { PageLayout } from "@/components/layouts/page/PageLayout"
import { PageLayoutBlockProps } from "@/components/layouts/page/PageLayout/components/PageLayoutBlock/types"
import { useMemo } from "react"
import { OneButton } from "../../../OneButton/OneButton"

export type CoCreationBlockProps = PageLayoutBlockProps & {
  /**
   * PRopably we can remove this property and handle the click here sending the block info to the cocreationhook
   *
   */
  onClickOneButton: () => void

  /**
   * The block instance
   */
  block: CoCreationBlockInstanceWithManifest
}

export const CoCreationBlock = (props: CoCreationBlockProps) => {
  const block = props.block

  const actions = useMemo(() => {
    if (typeof block.manifest.actions === "function") {
      return block.manifest.actions?.(block.props)
    }
    return block.manifest.actions
  }, [block])
  return (
    <PageLayout.Block
      primaryAction={
        <OneButton size="sm" label="Add" onClick={props.onClickOneButton} />
      }
      {...props}
      actions={actions}
    >
      {props.children}
    </PageLayout.Block>
  )
}
