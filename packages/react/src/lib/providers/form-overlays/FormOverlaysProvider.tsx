import {
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react"
import { createPortal } from "react-dom"

import { formOverlaysStore, FormOverlayStoreItem } from "./store"

type FormOverlaysProviderProps = {
  children: React.ReactNode
}

// How long a removed overlay is kept mounted (with isOpen=false) so its close
// animation can play before it is actually unmounted. Slightly longer than the
// dialog/wizard CSS exit animation so it always finishes.
const EXIT_ANIMATION_MS = 200

/*
  Renders the overlays mounted through `forms.open`. The
  open overlays live in `formOverlaysStore` (a module-level store), so they can
  be opened from anywhere — including outside React. This provider subscribes to
  that store and portals the overlays into the document body.

  As with `dialogs-alike`, several providers can be mounted at once (e.g. one per
  story canvas on a Storybook docs page) and they all read the same store, so
  only the elected renderer actually mounts the portal.
*/
export const FormOverlaysProvider = ({
  children,
}: FormOverlaysProviderProps) => {
  const items = useSyncExternalStore(
    formOverlaysStore.subscribe,
    formOverlaysStore.getSnapshot,
    formOverlaysStore.getServerSnapshot
  )

  const [rendererId, setRendererId] = useState<number | null>(null)

  // Register this provider as a candidate renderer; release on unmount.
  useEffect(() => {
    const handle = formOverlaysStore.acquireRenderer()
    setRendererId(handle.id)
    return handle.release
  }, [])

  // Re-render when the elected renderer changes (so we take over if the previous
  // renderer unmounts).
  const activeRendererId = useSyncExternalStore(
    formOverlaysStore.subscribeRenderer,
    formOverlaysStore.getActiveRendererId,
    () => null
  )
  const isRenderer = rendererId !== null && rendererId === activeRendererId

  return (
    <>
      {isRenderer &&
        typeof document !== "undefined" &&
        createPortal(<FormOverlays items={items} />, document.body)}
      {children}
    </>
  )
}

type FormOverlaysProps = {
  items: FormOverlayStoreItem[]
}

const FormOverlays = ({ items }: FormOverlaysProps) => {
  // `items` (from the store) is the source of truth for what should be OPEN.
  // We keep just-removed items in `renderedItems` (rendered with isOpen=false)
  // so their close animation can play before they unmount. Without this the
  // overlay is removed from the tree instantly and the exit animation is
  // skipped.
  const [renderedItems, setRenderedItems] = useState(items)
  const previousItemsRef = useRef(items)
  const exitTimers = useRef(new Map<string, ReturnType<typeof setTimeout>>())

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

    // An item just left the store: schedule its removal once its exit animation
    // has had time to play.
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
      // Live items first (fresh render fns, correct order)...
      const next = [...items]
      // ...then retain previously-rendered items that are no longer live so they
      // can animate out.
      for (const previousItem of previous) {
        if (liveIds.has(previousItem.id)) continue
        if (next.some((item) => item.id === previousItem.id)) continue
        next.push(previousItem)
      }
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

  // Whether a rendered overlay should currently be open (still in the store).
  const openIds = useMemo(() => new Set(items.map((item) => item.id)), [items])

  return (
    <>
      {renderedItems.map((item) => (
        <Fragment key={item.id}>
          {item.render({ isOpen: openIds.has(item.id) })}
        </Fragment>
      ))}
    </>
  )
}
