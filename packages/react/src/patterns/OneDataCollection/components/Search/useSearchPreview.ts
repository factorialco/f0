import { useEffect, useRef, useState } from "react"

import type { RecordType } from "@/hooks/datasource"

import type {
  SearchPreview,
  SearchPreviewPage,
} from "../../hooks/useDataCollectionSource/types"
import type { SearchResultItem } from "./Search"

type UseSearchPreviewReturn = {
  results: SearchResultItem[]
  /** Initial page (page 0) is loading for the current query. */
  loading: boolean
  /** A further page is being appended via infinite scroll. */
  loadingMore: boolean
  /** Whether another page can be pulled for the current query. */
  hasMore: boolean
  /** Request the next page (no-op while already loading or when exhausted). */
  onLoadMore: () => void
  onSelect: (id: string) => void
  /**
   * Increments on every result selection. Consumers derive their own state
   * from `onSelect` (e.g. a graph `revealNodeId`), but re-picking the same
   * result leaves that state unchanged — so this monotonic nonce lets a
   * visualization re-fire its action on a repeat pick (the graph re-centers on
   * the same node, like "Find me").
   */
  selectionNonce: number
}

const normalizePage = <R extends RecordType>(
  found: R[] | SearchPreviewPage<R>
): SearchPreviewPage<R> =>
  Array.isArray(found) ? { records: found, hasMore: false } : found

/**
 * Drives the shared header-search preview from `source.searchPreview`: runs the
 * consumer's `search(query, page)` for the current (debounced) query, maps the
 * records to preview rows, and appends further pages on demand (infinite
 * scroll). Returns the rows, loading flags, `hasMore`/`onLoadMore` for
 * pagination, and an `onSelect` that forwards the picked record.
 */
export function useSearchPreview<R extends RecordType>(
  searchPreview: SearchPreview<R> | undefined,
  query: string | undefined
): UseSearchPreviewReturn {
  const [results, setResults] = useState<SearchResultItem[]>([])
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const [selectionNonce, setSelectionNonce] = useState(0)
  const recordsRef = useRef<R[]>([])
  const pageRef = useRef(0)
  // Bumped on every new query so stale in-flight page responses are dropped.
  const requestIdRef = useRef(0)
  // Synchronous guard against a scroll burst firing loadMore twice in a tick.
  const loadingMoreRef = useRef(false)
  const searchPreviewRef = useRef(searchPreview)
  searchPreviewRef.current = searchPreview

  const trimmed = query?.trim() ?? ""

  const toResultItems = (preview: SearchPreview<R>, records: R[]) =>
    records.map((record) => ({
      id: preview.getId(record),
      ...preview.render(record),
    }))

  // Reset and load page 0 whenever the query changes.
  useEffect(() => {
    const preview = searchPreviewRef.current
    const requestId = ++requestIdRef.current
    pageRef.current = 0
    loadingMoreRef.current = false
    setLoadingMore(false)
    if (!preview || trimmed.length === 0) {
      recordsRef.current = []
      setResults([])
      setLoading(false)
      setHasMore(false)
      return
    }
    setLoading(true)
    void Promise.resolve(preview.search(trimmed, 0)).then((found) => {
      if (requestId !== requestIdRef.current) return
      const page = normalizePage(found)
      recordsRef.current = page.records
      setResults(toResultItems(preview, page.records))
      setHasMore(page.hasMore)
      setLoading(false)
    })
  }, [trimmed])

  const onLoadMore = () => {
    const preview = searchPreviewRef.current
    if (
      !preview ||
      loadingMoreRef.current ||
      loading ||
      !hasMore ||
      trimmed.length === 0
    ) {
      return
    }
    const requestId = requestIdRef.current
    const nextPage = pageRef.current + 1
    loadingMoreRef.current = true
    setLoadingMore(true)
    void Promise.resolve(preview.search(trimmed, nextPage))
      .then((found) => {
        if (requestId !== requestIdRef.current) return
        const page = normalizePage(found)
        pageRef.current = nextPage
        recordsRef.current = [...recordsRef.current, ...page.records]
        setResults((prev) => [...prev, ...toResultItems(preview, page.records)])
        setHasMore(page.hasMore)
        loadingMoreRef.current = false
        setLoadingMore(false)
      })
      .catch(() => {
        if (requestId !== requestIdRef.current) return
        loadingMoreRef.current = false
        setLoadingMore(false)
      })
  }

  const onSelect = (id: string) => {
    const preview = searchPreviewRef.current
    if (!preview) return
    const record = recordsRef.current.find(
      (candidate) => preview.getId(candidate) === id
    )
    if (record) {
      preview.onSelect(record)
      // Bump AFTER forwarding, so the consumer's derived state (e.g. a new
      // `revealNodeId`) and this nonce land in the same React batch — the graph
      // sees the (possibly unchanged) id and a fresh nonce together.
      setSelectionNonce((n) => n + 1)
    }
  }

  return {
    results,
    loading,
    loadingMore,
    hasMore,
    onLoadMore,
    onSelect,
    selectionNonce,
  }
}
