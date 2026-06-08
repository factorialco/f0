import { nanoid } from "nanoid"
import { Fragment, useMemo, useState } from "react"

import { F0DialogAction } from "@/components/dialog-alike/F0Dialog"
import { DialogInternal } from "@/components/dialog-alike/F0Dialog/internal/DialogInternal"
import { DialogNotificationInternal } from "@/components/dialog-alike/F0Dialog/internal/DialogNotification"
import { DrawerInternal } from "@/components/dialog-alike/F0Drawer/internal/DrawerInternal"
import { toArray } from "@/lib/toArray"

import { DialogDefinitionProviderItem } from "../internal-types"
import { DialogAction, DialogActionValuePrimitive, DialogId } from "../types"

type DialogsAlikeProps = {
  items: DialogDefinitionProviderItem[]
}

const materializeActionValue = async (
  action: DialogAction
): Promise<DialogActionValuePrimitive> => {
  return Promise.resolve(
    typeof action.value === "function" ? await action.value() : action.value
  )
}

export const DialogsAlike = ({ items }: DialogsAlikeProps) => {
  // Contabilize the actions are blocking the dialog by dialog id
  const [blocks, setBlocks] = useState<Record<DialogId, number>>({})

  const isBlocked = (dialogId: DialogId) => {
    return blocks[dialogId] > 0
  }

  const updateDialogBlocks = (dialogId: DialogId, amount: -1 | 1) => {
    setBlocks((prev) => ({
      ...prev,
      [dialogId]: (prev[dialogId] || 0) + amount,
    }))
  }

  /**
   * Convert the items to F0Dialog/F0Drawer props without blocking the dialog
   */
  const f0Items = useMemo(() => {
    /**
     * Convert the items to F0Dialog/F0Drawer props
     */
    const toF0Action = (
      item: DialogDefinitionProviderItem,
      action: DialogAction
    ): F0DialogAction => {
      return {
        ...action,
        value: nanoid(),
        onClick: async () => {
          if (!action.nonBlocking) {
            updateDialogBlocks(item.id, 1)
          }
          try {
            const value = await materializeActionValue(action)
            item.onClickAction(action, value)
          } finally {
            if (!action.nonBlocking) {
              updateDialogBlocks(item.id, -1)
            }
          }
          return Promise.resolve()
        },
      }
    }

    return items.map((item) => ({
      ...item,
      actions: {
        primary: toArray(item.actions.primary).map((action) =>
          toF0Action(item, action)
        ),
        secondary: toArray(item.actions.secondary).map((action) =>
          toF0Action(item, action)
        ),
      },
    }))
  }, [items])

  const f0ItemsWithBlocks = useMemo(() => {
    /**
     * Convert the actions to F0Dialog/F0Drawer actions with blocking (disabled) state
     */
    const toF0ActionWithBlocks = (
      itemId: DialogId,
      action: F0DialogAction
    ): F0DialogAction => {
      return {
        ...action,
        disabled: action.disabled || isBlocked(itemId),
      }
    }

    return f0Items.map((item) => ({
      ...item,
      actions: {
        primary: item.actions.primary.map((action) =>
          toF0ActionWithBlocks(item.id, action)
        ),
        secondary: item.actions.secondary.map((action) =>
          toF0ActionWithBlocks(item.id, action)
        ),
      },
    }))
  }, [f0Items, blocks])

  return (
    <>
      {f0ItemsWithBlocks.map((item) => (
        <Fragment key={item.id}>
          {item.variant === "notification" ? (
            <DialogNotificationInternal
              title={item.title}
              description={item.description ?? ""}
              key={item.id}
              type={item.type}
              isOpen
              onClose={item.onCloseDialog}
              primaryAction={item.actions.primary[0]}
              secondaryAction={item.actions.secondary}
            />
          ) : item.variant === "drawer" ? (
            <DrawerInternal
              disableClose={isBlocked(item.id)}
              key={item.id}
              isOpen
              size={item.size}
              onClose={item.onCloseDialog}
              title={item.title}
              description={item.description}
              primaryAction={item.actions.primary}
              secondaryAction={item.actions.secondary}
              modal={item.modal}
              position={item.position}
              module={item.module}
            >
              {item.content}
            </DrawerInternal>
          ) : (
            <DialogInternal
              disableClose={isBlocked(item.id)}
              key={item.id}
              isOpen
              size={item.size}
              onClose={item.onCloseDialog}
              title={item.title}
              description={item.description}
              primaryAction={item.actions.primary}
              secondaryAction={item.actions.secondary}
              modal={item.modal}
              module={item.module}
            >
              {item.content}
            </DialogInternal>
          )}
        </Fragment>
      ))}
    </>
  )
}
