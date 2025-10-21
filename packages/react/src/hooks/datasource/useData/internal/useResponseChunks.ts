import { useMemo, useState } from "react"
import { DataResponse, PaginationType, RecordType } from "../../types"
import { getRecordsFromResponse } from "./utils"

type ChunksState<R extends RecordType> = {
  paginationType: PaginationType
  chunks: Map<
    string,
    {
      order: number
      updatedAt: number
      updated: boolean
      firstLoadComplete: boolean
      loading?: boolean
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

  const initChunkIfNeeded = (key: string, loading?: boolean) => {
    if (!chunksState.chunks.has(key)) {
      setChunksState((prev) => {
        const newChunks = new Map(prev.chunks)
        const order = prev.chunks.size ?? 0
        newChunks.set(key, {
          firstLoadComplete: false,
          order,
          response: [],
          updatedAt: Date.now(),
          updated: false,
          loading,
        })
        return {
          ...prev,
          chunks: newChunks,
        }
      })
    }
  }

  const setChunkLoading = (key: string, loading: boolean) => {
    const chunk = chunksState.chunks.get(key)
    if (!chunk) {
      return
    }

    setChunksState((prev) => {
      const newChunks = new Map(prev.chunks)

      newChunks.set(key, {
        ...chunk,
        loading,
      })
      return {
        ...prev,
        chunks: newChunks,
      }
    })
  }

  const chunksLoadingState = useMemo(() => {
    return Object.fromEntries(
      Array.from(chunksState.chunks.entries()).map(([key, chunk]) => [
        key,
        {
          loading: chunk.loading,
          firstLoadComplete: chunk.firstLoadComplete,
        },
      ])
    )
  }, [chunksState])

  const resetChunks = () => {
    setChunksState({
      paginationType: localPaginationType,
      chunks: new Map(),
    })
  }

  const deleteChunk = (key: string) => {
    setChunksState((prev) => {
      const newChunks = new Map(prev.chunks)
      newChunks.delete(key)
      return {
        ...prev,
        chunks: newChunks,
      }
    })
  }

  const setChunkData = (key: string, response: DataResponse<R>) => {
    setChunksState((prev) => {
      const newChunks = new Map(prev.chunks)

      const order =
        ("currentPage" in response
          ? prev.chunks.get(key)?.order
          : prev.chunks.size) ?? 0

      const isUpdated = !prev.chunks.has(key)

      console.log(
        "====================== setPaginationInfo",
        key,
        response,
        "======================="
      )
      const records = getRecordsFromResponse(response)
      console.log("setPaginationInfo records", records)
      if (records.length === 0) {
        // If the chunk has no records, delete it
        newChunks.delete(key)
        console.log("setPaginationInfo records deleted", key)
      } else {
        const chunk = {
          order,
          updatedAt: Date.now(),
          response,
          firstLoadComplete: true,
          loading: false,
          updated: isUpdated,
        }
        newChunks.set(key, chunk)
        console.log("setPaginationInfo set chunk", key, chunk)
      }

      console.log("setPaginationInfo newChunks", {
        ...prev,
        chunks: newChunks,
      })

      console.log(
        "----------------------------------------------------------- setPaginationInfo return -----------------------------------------------------------"
      )
      return {
        ...prev,
        chunks: newChunks,
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
    setChunkData,
    resetChunks,
    initChunkIfNeeded,
    setChunkLoading,
    chunksLoadingState,
    deleteChunk,
  }
}
