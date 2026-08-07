import { useEffect, useState } from "react"

import {
  useChatScrollActivity,
  useChatScrollActivityStore,
} from "./useChatScrollActivity"

/**
 * Mount expensive content once it is eligible and scrolling has settled.
 * Once mounted it stays mounted until its virtual row leaves the DOM, so a new
 * gesture never tears down an existing player, parser or map.
 */
export function useDeferredHeavyMount(
  eligible: boolean,
  defer: boolean
): boolean {
  const store = useChatScrollActivityStore()
  const [mounted, setMounted] = useState(
    () => eligible && !defer && !store?.getSnapshot()
  )
  const scrolling = useChatScrollActivity(mounted)

  useEffect(() => {
    if (mounted || !eligible || defer || scrolling) return
    if (store) return store.enqueueMount(() => setMounted(true))
    setMounted(true)
  }, [defer, eligible, mounted, scrolling, store])

  return mounted
}
