import { nanoid } from "nanoid"
import { Fragment, useMemo, useState } from "react"

import { F0DialogAction } from "@/components/dialog-alike/F0Dialog"
import { DialogInternal } from "@/components/dialog-alike/F0Dialog/internal/DialogInternal"
import { DialogNotificationInternal } from "@/components/dialog-alike/F0Dialog/internal/DialogNotification"
import { toArray } from "@/lib/toArray"

import { DialogDefinitionProviderItem } from "../internal-types"
import { DialogAction, DialogActionValuePrimitive, DialogId } from "../types"

type DialogsProps = {
  dialogs: DialogDefinitionProviderItem[]
}

const materializeActionValue = async (
  action: DialogAction
): Promise<DialogActionValuePrimitive> => {
  return Promise.resolve(
    typeof action.value === "function" ? await action.value() : action.value
  )
}

export const Dialogs = ({ dialogs }: DialogsProps) => {
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
   * Convert the dialogs to F0Dialog props without blocking the dialog
   */
  const f0Dialogs = useMemo(() => {
    /**
     * Convert the dialogs to F0Dialog props
     */
    const toF0Action = (
      dialog: DialogDefinitionProviderItem,
      action: DialogAction
    ): F0DialogAction => {
      return {
        ...action,
        value: nanoid(),
        onClick: async () => {
          if (!action.nonBlocking) {
            updateDialogBlocks(dialog.id, 1)
          }
          try {
            const value = await materializeActionValue(action)
            dialog.onClickAction(action, value)
          } finally {
            if (!action.nonBlocking) {
              updateDialogBlocks(dialog.id, -1)
            }
          }
          return Promise.resolve()
        },
      }
    }

    return dialogs.map((dialog) => ({
      ...dialog,
      actions: {
        primary: toArray(dialog.actions.primary).map((action) =>
          toF0Action(dialog, action)
        ),
        secondary: toArray(dialog.actions.secondary).map((action) =>
          toF0Action(dialog, action)
        ),
      },
    }))
  }, [dialogs])

  const f0DialogsWithBlocks = useMemo(() => {
    /**
     * Convert the dialog actions to F0Dialog actions with blocking (disabled) the dialog state
     */
    const toF0ActionWithBlocks = (
      dialogId: DialogId,
      action: F0DialogAction
    ): F0DialogAction => {
      return {
        ...action,
        disabled: action.disabled || isBlocked(dialogId),
      }
    }

    return f0Dialogs.map((dialog) => ({
      ...dialog,
      actions: {
        primary: dialog.actions.primary.map((action) =>
          toF0ActionWithBlocks(dialog.id, action)
        ),
        secondary: dialog.actions.secondary.map((action) =>
          toF0ActionWithBlocks(dialog.id, action)
        ),
      },
    }))
  }, [f0Dialogs, blocks])

  return (
    <>
      {f0DialogsWithBlocks.map((dialog) => (
        <Fragment key={dialog.id}>
          {dialog.variant === "notification" ? (
            <DialogNotificationInternal
              title={dialog.title}
              description={dialog.description ?? ""}
              key={dialog.id}
              type={dialog.type}
              isOpen
              onClose={dialog.onCloseDialog}
              primaryAction={dialog.actions.primary[0]}
              secondaryAction={dialog.actions.secondary}
              modal={true}
            />
          ) : (
            <DialogInternal
              disableClose={isBlocked(dialog.id)}
              key={dialog.id}
              isOpen
              size={dialog.size}
              onClose={dialog.onCloseDialog}
              title={dialog.title}
              description={dialog.description}
              primaryAction={dialog.actions.primary}
              secondaryAction={dialog.actions.secondary}
              modal={dialog.modal}
            >
              {dialog.content}
            </DialogInternal>
          )}
        </Fragment>
      ))}
    </>
  )
}
