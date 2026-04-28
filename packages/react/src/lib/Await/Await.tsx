import { ReactNode, useEffect, useState } from "react"

import { DataTestIdWrapper } from "@/lib/data-testid"

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
  dataTestId,
}: AwaitProps<T> & { dataTestId?: string }): ReactNode => {
  const [resolvedValue, setResolvedValue] = useState<T | null>(() =>
    resolve instanceof Promise ? null : (resolve as T)
  )
  const [error, setError] = useState<Error | null>(null)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    if (resolve instanceof Promise) {
      setIsPending(true)
      let cancelled = false
      resolve
        .then((value) => {
          if (!cancelled) setResolvedValue(value)
        })
        .catch((error) => {
          if (!cancelled) setError(error)
        })
        .finally(() => {
          if (!cancelled) setIsPending(false)
        })
      return () => {
        cancelled = true
      }
    } else {
      setResolvedValue(resolve)
      setIsPending(false)
    }
  }, [resolve])

  if (isPending) {
    return (
      <DataTestIdWrapper dataTestId={dataTestId}>{fallback}</DataTestIdWrapper>
    )
  }
  if (error) {
    return (
      <DataTestIdWrapper dataTestId={dataTestId}>
        {errorFallback ?? null}
      </DataTestIdWrapper>
    )
  }
  if (resolvedValue !== null) {
    return (
      <DataTestIdWrapper dataTestId={dataTestId}>
        {children(resolvedValue)}
      </DataTestIdWrapper>
    )
  }
  return <DataTestIdWrapper dataTestId={dataTestId}>{null}</DataTestIdWrapper>
}

export const Await = _Await as <T>(
  props: AwaitProps<T> & { dataTestId?: string }
) => ReactNode
