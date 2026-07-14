import { nanoid } from "nanoid"
import { Fragment, useEffect, useMemo, useRef, useState } from "react"

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

// How long a removed dialog/drawer is kept mounted (with isOpen=false) so its
// close animation can play before it is actually unmounted. Slightly longer
// than the CSS exit animation so it always finishes.
const EXIT_ANIMATION_MS = 200

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

  // `items` (from the store) is the source of truth for what should be OPEN.
  // We keep just-removed items in `renderedItems` (rendered with isOpen=false)
  // so their close animation can play before they unmount. Without this the
  // item is removed from the tree instantly and the exit animation is skipped.
  const [renderedItems, setRenderedItems] = useState(items)
  const previousItemsRef = useRef(items)
  const exitTimers = useRef(new Map<DialogId, ReturnType<typeof setTimeout>>())

  useEffect(() => {
    const liveIds = new Set(items.map((item) => item.id))
    const previousItems = previousItemsRef.current
    previousItemsRef.current = items

    // An item is live again (e.g. re-opened): cancel any pending exit cleanup.
    for (const id of liveIds) {
      const timer = exitTimers.current.get(id)
      if (timer) {
        clearTimeout(timer)
        exitTimers.current.delete(id)
      }
    }

    // An item just left the store: schedule its removal once its exit
    // animation has had time to play.
    for (const previousItem of previousItems) {
      if (liveIds.has(previousItem.id)) continue
      if (exitTimers.current.has(previousItem.id)) continue
      const timer = setTimeout(() => {
        exitTimers.current.delete(previousItem.id)
        setRenderedItems((current) =>
          current.filter((item) => item.id !== previousItem.id)
        )
      }, EXIT_ANIMATION_MS)
      exitTimers.current.set(previousItem.id, timer)
    }

    setRenderedItems((previous) => {
      // Live items first (fresh content/actions, correct order)...
      const next = [...items]
      // ...then retain previously-rendered items that are no longer live so
      // they can animate out.
      for (const previousItem of previous) {
        if (liveIds.has(previousItem.id)) continue
        if (next.some((item) => item.id === previousItem.id)) continue
        next.push(previousItem)
      }
      // Avoid a needless re-render (which would regenerate action ids) when the
      // rendered list is unchanged.
      const unchanged =
        next.length === previous.length &&
        next.every((item, index) => item === previous[index])
      return unchanged ? previous : next
    })
  }, [items])

  useEffect(() => {
    const timers = exitTimers.current
    return () => {
      for (const timer of timers.values()) clearTimeout(timer)
      timers.clear()
    }
  }, [])

  // Whether a rendered item should currently be open (still in the store).
  const openIds = useMemo(() => new Set(items.map((item) => item.id)), [items])

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

    return renderedItems.map((item) => ({
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
  }, [renderedItems])

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
              isOpen={openIds.has(item.id)}
              onClose={item.onCloseDialog}
              primaryAction={item.actions.primary[0]}
              secondaryAction={item.actions.secondary}
            />
          ) : item.variant === "drawer" ? (
            <DrawerInternal
              disableClose={isBlocked(item.id)}
              key={item.id}
              isOpen={openIds.has(item.id)}
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
              isOpen={openIds.has(item.id)}
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
