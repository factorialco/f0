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
  const [ids, setIds] = useState<SelectionId[]>([])

  const syncIds = useCallback(() => {
    setIds(Array.from(entriesRef.current.keys()))
  }, [])

  const register = useCallback(
    (id: SelectionId, item: R) => {
      const isNew = !entriesRef.current.has(id)
      entriesRef.current.set(id, item)
      if (isNew) syncIds()
    },
    [syncIds]
  )

  const unregister = useCallback(
    (id: SelectionId) => {
      if (entriesRef.current.delete(id)) syncIds()
    },
    [syncIds]
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
