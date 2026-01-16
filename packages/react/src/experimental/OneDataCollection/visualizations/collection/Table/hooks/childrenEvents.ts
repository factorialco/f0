export const REFETCH_CHILDREN_EVENT =
  "DATA_COLLECTION_REFETCH_CHILDREN" as const

export type RefetchChildrenPayload<R = unknown> = {
  rowId?: string
  updatedItem?: R
}

export type RefetchChildrenEvent<R = unknown> = CustomEvent<
  RefetchChildrenPayload<R>
>

export const subscribeToReloadChildren = (
  listener: (payload: RefetchChildrenPayload) => void
): (() => void) => {
  const handler = (event: Event) => {
    const customEvent = event as RefetchChildrenEvent
    listener(customEvent.detail ?? {})
  }

  window.addEventListener(REFETCH_CHILDREN_EVENT, handler)

  return () => {
    window.removeEventListener(REFETCH_CHILDREN_EVENT, handler)
  }
}
