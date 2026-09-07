import { useCallback, useMemo, useRef, useState } from "react"

import { RecordType } from "@/hooks/datasource"
import { SelectionId } from "@/hooks/datasource/types/selection.typings"

export interface SelectionRegistryValue<R extends RecordType = RecordType> {
  register: (id: SelectionId, item: R) => void
  unregister: (id: SelectionId) => void
  ids: SelectionId[]
  getEntries: () => Array<[SelectionId, R]>
}

/**
 * Tracks selectable rows currently rendered (including lazily-loaded nested
 * children) so "select all" reaches rows absent from `data.records`.
 */
export const useCreateSelectionRegistry = <
  R extends RecordType,
>(): SelectionRegistryValue<R> => {
  const entriesRef = useRef<Map<SelectionId, R>>(new Map())

  // A membership counter rather than the id array itself: every rendered row
  // registers, so materializing the array inside each mutation made a render
  // cost one pass over the whole registry per row. The array is built once per
  // render that changed membership instead.
  const [membership, setMembership] = useState(0)

  const register = useCallback((id: SelectionId, item: R) => {
    const isNew = !entriesRef.current.has(id)
    entriesRef.current.set(id, item)
    if (isNew) setMembership((current) => current + 1)
  }, [])

  const unregister = useCallback((id: SelectionId) => {
    if (entriesRef.current.delete(id)) setMembership((current) => current + 1)
  }, [])

  const ids = useMemo(
    // eslint-disable-next-line react-hooks/exhaustive-deps -- the counter is the signal that the map changed
    () => Array.from(entriesRef.current.keys()),
    [membership]
  )

  const getEntries = useCallback(
    () => Array.from(entriesRef.current.entries()),
    []
  )

  return useMemo(
    () => ({ register, unregister, ids, getEntries }),
    [register, unregister, ids, getEntries]
  )
}
