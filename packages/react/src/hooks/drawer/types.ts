import { ReactNode } from "react"

import {
  DrawerSize,
  F0DrawerPosition,
} from "@/components/dialog-alike/F0Drawer/types"
import {
  DialogActions,
  DialogId,
  DialogModule,
} from "@/lib/providers/dialogs-alike/types"

export type DrawerDefinition = {
  /*
   * The size of the drawer.
   */
  size?: DrawerSize
  /*
   * The id of the drawer.
   */
  id: DialogId
  /*
   * The title of the drawer.
   */
  title: string
  /*
   * The description of the drawer.
   */
  description?: string
  /*
   * The content of the drawer.
   */
  content: ReactNode
  /*
   * The actions of the drawer.
   */
  actions: DialogActions

  /*
   * If true, the drawer will not be closed automatically when an action is clicked.
   * This is useful for drawers that need to be closed manually
   */
  keepOpen?: boolean

  /**
   * The position of the drawer.
   * @default "right"
   */
  position?: F0DrawerPosition

  /**
   * If true, the drawer will be modal.
   */
  modal?: boolean

  /**
   * The module of the drawer.
   */
  module?: DialogModule
}

export type DrawerDefinitionInternal = DrawerDefinition & {
  variant: "drawer"
}
