import { nanoid } from "nanoid"
import { useRef } from "react"

import { useDialogsAlikeLayoutContext } from "@/lib/providers/dialogs-alike/DialogsAlikeLayoutProvider"
import {
  DialogAction,
  DialogActionValue,
  DialogActionValuePrimitive,
  DialogId,
} from "@/lib/providers/dialogs-alike/types"
import { Optional } from "@/lib/typescript-utils/optional"

import { DrawerDefinition, DrawerDefinitionInternal } from "./types"

export type UseDrawerReturn = {
  openDrawer: (
    definition: Optional<DrawerDefinition, "id">
  ) => Promise<DialogActionValue>
  closeDrawer: (id: DialogId) => void
}

export const useDrawer = (): UseDrawerReturn => {
  const { addDrawer, removeDrawer } = useDialogsAlikeLayoutContext()
  // Store drawer callbacks so we can invoke them when closeDrawer is called programmatically
  const drawerCallbacksRef = useRef<Map<DialogId, () => void>>(new Map())

  const openDrawer = (
    definition: Optional<DrawerDefinition, "id">
  ): Promise<DialogActionValue> => {
    return _openDrawerInternal({ ...definition, variant: "drawer" })
  }

  const _openDrawerInternal = (
    definition: Optional<DrawerDefinitionInternal, "id">
  ): Promise<DialogActionValue> => {
    return new Promise((resolve) => {
      const drawerId = definition.id || nanoid()

      const handleDrawerAction = async (
        action: DialogAction | undefined,
        value: DialogActionValuePrimitive | undefined
      ) => {
        resolve(value ?? undefined)

        if (action?.keepOpen) {
          return
        }
        // Clean up the callback reference
        drawerCallbacksRef.current.delete(drawerId)
        // Remove the drawer from the list after the action is resolved
        removeDrawer(drawerId)
      }

      const onCloseDrawer = () => {
        handleDrawerAction(undefined, undefined)
      }

      const newDrawer = {
        ...definition,
        id: drawerId,
        onCloseDialog: onCloseDrawer,
        onClickAction: (
          action: DialogAction,
          value: DialogActionValuePrimitive
        ) => {
          handleDrawerAction(action, value)
        },
      }

      // Store the callback so it can be invoked when closeDrawer is called programmatically
      drawerCallbacksRef.current.set(drawerId, onCloseDrawer)

      addDrawer(newDrawer)
    })
  }

  const closeDrawer = (id: DialogId) => {
    // Get the callback for this drawer
    const onCloseDrawer = drawerCallbacksRef.current.get(id)

    if (onCloseDrawer) {
      // Call the callback to resolve the promise
      // This will also clean up the callback reference and remove the drawer
      onCloseDrawer()
    } else {
      // If callback doesn't exist (shouldn't happen normally, but handle gracefully),
      // still remove the drawer from the list
      removeDrawer(id)
    }
  }

  return {
    openDrawer,
    closeDrawer,
  }
}
