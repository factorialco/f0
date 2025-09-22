import { ReactNode, useEffect, useState } from "react"

type AwaitProps<T> = {
  resolve: Promise<T> | T
  fallback: ReactNode
  error?: ReactNode
  className?: string
  children: (value: T) => ReactNode
}

export const Await = <T,>({
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
