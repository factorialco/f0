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
  const [isMounted, setIsMounted] = useState(false)

  // Track if component is mounted (client-side) to avoid SSR portal issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Expose localized default labels to the imperative alert/confirm helpers
  useEffect(() => {
    dialogsAlikeStore.setDefaultActionLabels({
      ok: i18n.actions.ok,
      cancel: i18n.actions.cancel,
    })
  }, [i18n])

  // Register provider presence (powers a dev warning when the imperative API
  // is used with nothing rendering the dialogs)
  useEffect(() => dialogsAlikeStore.registerProvider(), [])

  return (
    <>
      {isMounted &&
        typeof document !== "undefined" &&
        createPortal(<DialogsAlike items={items} />, document.body)}
      {children}
    </>
  )
}
