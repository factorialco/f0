import { FiltersDefinition, FiltersState, RecordType } from "@/hooks/datasource"
import {
  ChildrenResponse,
  NestedResponseWithType,
  NestedVariant,
} from "@/hooks/datasource/types/nested.typings"
import { useCallback, useState } from "react"

interface UseLoadChildrenProps<R extends RecordType> {
  item: R
  filters?: FiltersState<FiltersDefinition>
  fetchChildren?: (
    item: R,
    filters?: FiltersState<FiltersDefinition>
  ) => Promise<ChildrenResponse<R>>
}

const isDetailed = <R extends RecordType>(
  data?: ChildrenResponse<R>
): data is NestedResponseWithType<R> => {
  if (!data) return false

  return typeof data === "object" && "type" in data && data.type === "detailed"
}

export const useLoadChildren = <R extends RecordType>({
  item,
  filters,
  fetchChildren,
}: UseLoadChildrenProps<R>) => {
  const [children, setChildren] = useState<R[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [childrenType, setChildrenType] = useState<NestedVariant>("basic")

  const loadChildren = useCallback(async () => {
    if (children.length > 0) return children

    setIsLoading(true)

    const data = await fetchChildren?.(item, filters)
    const loadedChildren = Array.isArray(data) ? data : (data?.records ?? [])

    setChildren(loadedChildren)

    if (isDetailed(data)) {
      setChildrenType(data.type ?? "basic")
    }

    setIsLoading(false)

    return loadedChildren
  }, [children, item, filters, fetchChildren])

  return { children, loadChildren, isLoading, childrenType }
}
