import { ReactNode, useEffect, useState } from "react"

import type { WithDataTestIdProps } from "@/lib/data-testid"

import { withDataTestId } from "@/lib/data-testid"

export type AwaitProps<T> = {
  resolve: Promise<T> | T
  fallback: ReactNode
  error?: ReactNode
  className?: string
  children: (value: T) => ReactNode
}

const _Await = <T,>({
  resolve,
  fallback,
  error: errorFallback,
  children,
}: AwaitProps<T>): ReactNode => {
  const [resolvedValue, setResolvedValue] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    if (resolve instanceof Promise) {
      setIsPending(true)
      resolve
        .then((value) => {
          setResolvedValue(value)
        })
        .catch((error) => {
          setError(error)
        })
        .finally(() => {
          setIsPending(false)
        })
    } else {
      setResolvedValue(resolve)
      setIsPending(false)
    }
  }, [resolve])

  if (isPending) {
    return fallback
  }
  if (error) {
    return errorFallback ?? null
  }
  if (resolvedValue !== null) {
    return children(resolvedValue)
  }
  return null
}

/**
 * Generic component type so <Await resolve={value}> correctly types children as (value: T) => ReactNode.
 */
type AwaitGeneric = <T>(props: AwaitProps<T> & WithDataTestIdProps) => ReactNode

const AwaitWrapped = withDataTestId(_Await)
export const Await = AwaitWrapped as unknown as AwaitGeneric
