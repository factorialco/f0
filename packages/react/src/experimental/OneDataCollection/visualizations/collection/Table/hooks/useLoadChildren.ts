import {
  BaseResponse,
  FiltersDefinition,
  FiltersState,
  RecordType,
} from "@/hooks/datasource"
import { useCallback, useState } from "react"

interface UseLoadChildrenProps<R extends RecordType> {
  item: R
  filters?: FiltersState<FiltersDefinition>
  fetchChildren?: (
    item: R,
    filters?: FiltersState<FiltersDefinition>
  ) => Promise<BaseResponse<R> | R[]> | R[]
}

export const useLoadChildren = <R extends RecordType>({
  item,
  filters,
  fetchChildren,
}: UseLoadChildrenProps<R>) => {
  const [children, setChildren] = useState<R[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const loadChildren = useCallback(async () => {
    if (children.length > 0) return children

    setIsLoading(true)

    const data = await fetchChildren?.(item, filters)
    const loadedChildren = Array.isArray(data) ? data : []

    setChildren(loadedChildren)
    setIsLoading(false)

    return loadedChildren
  }, [children, item, filters, fetchChildren])

  return { children, loadChildren, isLoading }
}
