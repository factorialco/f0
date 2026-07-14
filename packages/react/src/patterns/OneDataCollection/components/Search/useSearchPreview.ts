import { useEffect, useRef, useState } from "react"

import type { RecordType } from "@/hooks/datasource"

import type { SearchPreview } from "../../hooks/useDataCollectionSource/types"
import type { SearchResultItem } from "./Search"

type UseSearchPreviewReturn = {
  results: SearchResultItem[]
  loading: boolean
  onSelect: (id: string) => void
}

/**
 * Drives the shared header-search preview from `source.searchPreview`: runs the
 * consumer's `search(query)` for the current (debounced) query and maps the
 * records to preview rows. Returns the rows, a loading flag, and an `onSelect`
 * that forwards the picked record to `searchPreview.onSelect`.
 */
export function useSearchPreview<R extends RecordType>(
  searchPreview: SearchPreview<R> | undefined,
  query: string | undefined
): UseSearchPreviewReturn {
  const [results, setResults] = useState<SearchResultItem[]>([])
  const [loading, setLoading] = useState(false)
  const recordsRef = useRef<R[]>([])
  const searchPreviewRef = useRef(searchPreview)
  searchPreviewRef.current = searchPreview

  useEffect(() => {
    const preview = searchPreviewRef.current
    const trimmed = query?.trim() ?? ""
    if (!preview || trimmed.length === 0) {
      recordsRef.current = []
      setResults([])
      setLoading(false)
      return
    }
    let active = true
    setLoading(true)
    void preview.search(trimmed).then((found) => {
      if (!active) return
      recordsRef.current = found
      setResults(
        found.map((record) => ({
          id: preview.getId(record),
          ...preview.render(record),
        }))
      )
      setLoading(false)
    })
    return () => {
      active = false
    }
  }, [query])

  const onSelect = (id: string) => {
    const preview = searchPreviewRef.current
    if (!preview) return
    const record = recordsRef.current.find(
      (candidate) => preview.getId(candidate) === id
    )
    if (record) preview.onSelect(record)
  }

  return { results, loading, onSelect }
}
