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
      response: DataResponse<R>
    }
  >
}

export const useResponseChunks = <R extends RecordType>(
  paginationType: PaginationType | undefined
) => {
  const localPaginationType = paginationType ?? "no-pagination"
  const [chunksState, setChunksState] = useState<ChunksState<R>>({
    paginationType: localPaginationType,
    chunks: new Map(),
  })

  const resetChunks = () => {
    setChunksState({
      paginationType: localPaginationType,
      chunks: new Map(),
    })
  }

  const setChunk = (key: string, response: DataResponse<R>) => {
    setChunksState((prev) => {
      const newChunks = new Map(prev.chunks)

      const order =
        ("currentPage" in response
          ? prev.chunks.get(key)?.order
          : prev.chunks.size) ?? 0

      newChunks.set(key, { order, updatedAt: Date.now(), response })
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
  }
}
