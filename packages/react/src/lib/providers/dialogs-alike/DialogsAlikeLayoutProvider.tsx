import { useEffect, useState, useSyncExternalStore } from "react"
import { createPortal } from "react-dom"

import { useI18n } from "@/lib/providers/i18n"

import { DialogsAlike } from "./components/DialogsAlike"
import { dialogsAlikeStore } from "./store"

type DialogsAlikeLayoutProviderProps = {
  children: React.ReactNode
}

/*
  Renders the dialogs/drawers opened through the imperative `dialog` / `drawer`
  API. The open items live in `dialogsAlikeStore` (a module-level store), so they
  can be opened from anywhere — including outside React. This provider just
  subscribes to that store and portals the items into the document body.

  Because several providers can be mounted at once (e.g. one per story canvas on
  a Storybook docs page) and they all read the same store, only the elected
  renderer actually mounts the portal — otherwise each dialog/drawer would be
  rendered once per provider (stacked overlays look opaque, stacked modals fight
  over focus).

  It also registers the active i18n labels into the store so `dialog.alert` /
  `dialog.confirm` get localized default action labels (those functions can't
  use hooks themselves).
*/
export const DialogsAlikeLayoutProvider = ({
  children,
}: DialogsAlikeLayoutProviderProps) => {
  const items = useSyncExternalStore(
    dialogsAlikeStore.subscribe,
    dialogsAlikeStore.getSnapshot,
    dialogsAlikeStore.getServerSnapshot
  )

  const i18n = useI18n()
  const [rendererId, setRendererId] = useState<number | null>(null)

  // Register this provider as a candidate renderer; release on unmount.
  useEffect(() => {
    const handle = dialogsAlikeStore.acquireRenderer()
    setRendererId(handle.id)
    return handle.release
  }, [])

  // Re-render when the elected renderer changes (so we take over if the
  // previous renderer unmounts).
  const activeRendererId = useSyncExternalStore(
    dialogsAlikeStore.subscribeRenderer,
    dialogsAlikeStore.getActiveRendererId,
    () => null
  )
  const isRenderer = rendererId !== null && rendererId === activeRendererId

  // Expose localized default labels to the imperative alert/confirm helpers
  useEffect(() => {
    dialogsAlikeStore.setDefaultActionLabels({
      ok: i18n.actions.ok,
      cancel: i18n.actions.cancel,
    })
  }, [i18n])

  return (
    <>
      {isRenderer &&
        typeof document !== "undefined" &&
        createPortal(<DialogsAlike items={items} />, document.body)}
      {children}
    </>
  )
}
