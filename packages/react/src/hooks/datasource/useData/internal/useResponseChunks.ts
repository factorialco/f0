import { sortBy } from "lodash"
import { useMemo, useState } from "react"
import { DataResponse, PaginationType, RecordType } from "../../types"

type ChunksState<R extends RecordType> = {
  paginationType: PaginationType
  chunks: Map<
    string,
    {
      order: number
      updatedAt: number
      updated: boolean
      response: DataResponse<R>
    }
  >
}

/**
 * Hook for managing the state of the chunks
 * We store the pages responses in a map and the order of the pages to allow us to update the chunck data (records) when a chunk is updated by an observable after the initial load
 * @param paginationType
 * @returns
 */
export const useResponseChunks = <R extends RecordType>(
  paginationType: PaginationType | undefined
) => {
  const localPaginationType = paginationType ?? "no-pagination"
  const [chunksState, setChunksState] = useState<ChunksState<R>>({
    paginationType: localPaginationType,
    chunks: new Map(),
  })

  const [chunksLoadingState, setChunksLoadingState] = useState<
    Map<
      string,
      {
        firstLoad: boolean
        loading: boolean
      }
    >
  >(new Map())

  const setChunkIsFirstLoad = (key: string, firstLoad: boolean) => {
    const chunk = chunksState.chunks.get(key)
    // If the chunk is already loaded, it can not be the first load true, only can disable it
    if (chunk && firstLoad) {
      return
    }
    setChunksLoadingState((prev) => {
      const newChunksLoadingState = new Map(prev)
      newChunksLoadingState.set(key, {
        firstLoad,
        loading: prev.get(key)?.loading ?? false,
      })
      return newChunksLoadingState
    })
  }

  /**
   * REturns if the last chunk on the list is first load
   */
  const lastChunkIsFirstLoad = useMemo(() => {
    return Array.from(chunksLoadingState.values()).pop()?.firstLoad ?? false
  }, [chunksLoadingState])

  const setChunkLoading = (key: string, loading: boolean) => {
    setChunksLoadingState((prev) => {
      const newChunksLoadingState = new Map(prev)
      newChunksLoadingState.set(key, {
        firstLoad: prev.get(key)?.firstLoad ?? false,
        loading,
      })
      return newChunksLoadingState
    })
  }

  const resetChunks = () => {
    setChunksState({
      paginationType: localPaginationType,
      chunks: new Map(),
    })
    setChunksLoadingState(new Map())
  }

  const setChunk = (key: string, response: DataResponse<R>) => {
    setChunksState((prev) => {
      const newChunks = new Map(prev.chunks)

      const order =
        ("currentPage" in response
          ? prev.chunks.get(key)?.order
          : prev.chunks.size) ?? 0

      const isUpdated = !prev.chunks.has(key)

      newChunks.set(key, {
        order,
        updatedAt: Date.now(),
        response,
        updated: isUpdated,
      })
      // Ensure the chunks are in order to simplify the logic in other parts of the code
      return {
        ...prev,
        chunks: new Map(
          sortBy(Array.from(newChunks.entries()), ([, value]) => value.order)
        ),
      }
    })
  }

  const lastChunk = useMemo(() => {
    return Array.from(chunksState.chunks.values()).pop()
  }, [chunksState.chunks])

  const lastUpdatedChunk = useMemo(() => {
    return Array.from(chunksState.chunks.values()).sort(
      (a, b) => b.updatedAt - a.updatedAt
    )[0]
  }, [chunksState.chunks])

  return {
    lastChunk,
    lastUpdatedChunk,
    chunksState,
    setChunk,
    resetChunks,
    chunksLoadingState,
    setChunkIsFirstLoad,
    setChunkLoading,
    lastChunkIsFirstLoad,
  }
}
