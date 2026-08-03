import { type ReactNode, useCallback, useEffect, useRef, useState } from "react"

import { F0Card } from "@/components/F0Card"
import type { F0CardProps } from "@/components/F0Card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"

type EntityRefHoverCardProps<T> = {
  id: string
  trigger: ReactNode
  resolver: (id: string) => Promise<T>
  mapToCard: (data: T) => F0CardProps
  fallbackCard: F0CardProps
}

/**
 * Generic hover card for entity references.
 *
 * Handles lazy fetching on hover, per-ID caching, loading/error states,
 * and renders an F0Card inside a HoverCard popover.
 *
 * Each entity type provides its own trigger, resolver, and card mapping.
 */
export function EntityRefHoverCard<T>({
  id,
  trigger,
  resolver,
  mapToCard,
  fallbackCard,
}: EntityRefHoverCardProps<T>) {
  const cacheRef = useRef<Map<string, T>>(new Map())
  const [data, setData] = useState<T | null>(
    () => cacheRef.current.get(id) ?? null
  )
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const mountedRef = useRef(true)
  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const fetchData = useCallback(() => {
    if (data || isLoading) return

    const cached = cacheRef.current.get(id)
    if (cached) {
      setData(cached)
      return
    }

    setIsLoading(true)
    setHasError(false)
    resolver(id)
      .then((result: T) => {
        cacheRef.current.set(id, result)
        if (mountedRef.current) setData(result)
      })
      .catch(() => {
        if (mountedRef.current) setHasError(true)
      })
      .finally(() => {
        if (mountedRef.current) setIsLoading(false)
      })
  }, [resolver, id, data, isLoading])

  const cardProps = hasError || !data ? fallbackCard : mapToCard(data)

  return (
    <HoverCard
      openDelay={300}
      closeDelay={100}
      onOpenChange={(open) => {
        if (open) fetchData()
      }}
    >
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardContent
        side="top"
        align="start"
        className="w-64 rounded-2xl border-none p-0 shadow-md"
      >
        {isLoading ? <F0Card.Skeleton /> : <F0Card {...cardProps} />}
      </HoverCardContent>
    </HoverCard>
  )
}
