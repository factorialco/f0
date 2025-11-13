import {
  LayoutBlockActionGroup,
  LayoutBlockActionItem,
} from "@/components/layouts/page/PageLayout"
import { ZodSchema } from "zod"

export type CoCreationBlockTypeId = string

export type CoCreationBlockActions =
  | LayoutBlockActionGroup[]
  | LayoutBlockActionItem[]
  | LayoutBlockActionGroup

export type CoCreationBlockManifest<
  PropsSchema extends ZodSchema = ZodSchema<unknown>,
> = {
  /**
   * The description of the usecase for the block for the agent
   */
  description: string | string[]

  /**
   * The id of the block type
   */
  id: CoCreationBlockTypeId

  /**
   * The component of the block type
   */
  component: React.ComponentType<any>

  /*
   * The variant of the component to display in the chat or preview
   */
  teaserComponent?: React.ComponentType<any>

  /**
   * The props definition of the block type
   */
  propsSchema: PropsSchema

  actions?:
    | CoCreationBlockActions
    | ((props: PropsSchema) => CoCreationBlockActions)
}

export type CoCreationBlockInstance = {
  /**
   * The identifier of the block instance
   */
  id: string
  /**
   * The type of the block
   */
  type: CoCreationBlockTypeId

  /**
   * The props of the block instance
   */
  props: any
}

export type CoCreationBlockInstanceWithManifest = CoCreationBlockInstance & {
  manifest: CoCreationBlockManifest
}
