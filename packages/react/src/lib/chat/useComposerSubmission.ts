import { useCallback, useEffect, useRef, useState } from "react"
import type { ComposerFile } from "./useComposerFiles"

export type ComposerSnapshot<T> = {
  scopeKey: string
  text: string
  files: ComposerFile<T>[]
}

type Accept<T> = (
  snapshot: ComposerSnapshot<T>
) => boolean | void | Promise<boolean | void>

export function useComposerSubmission<T>({
  snapshot,
  renderedScopeKey,
  onAccepted,
  onBlocked,
  onError,
}: {
  snapshot: ComposerSnapshot<T>
  renderedScopeKey: string
  onAccepted: (snapshot: ComposerSnapshot<T>, selected: boolean) => void
  onBlocked: () => void
  onError: (error: unknown) => void
}) {
  const activeScope = useRef(snapshot.scopeKey)
  activeScope.current = snapshot.scopeKey
  const submittingRef = useRef(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [queued, setQueued] = useState(new Map<string, Accept<T>>())
  const mounted = useRef(true)
  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  const submit = useCallback(
    (
      accept: Accept<T>,
      selected?: ComposerSnapshot<T>
    ): boolean | Promise<boolean> => {
      if (
        submittingRef.current ||
        activeScope.current !== snapshot.scopeKey ||
        renderedScopeKey !== snapshot.scopeKey
      ) {
        return false
      }
      const submission = selected ?? snapshot
      if (submission.files.some((file) => file.status === "uploading")) {
        if (!selected) {
          setQueued((current) =>
            new Map(current).set(snapshot.scopeKey, accept)
          )
        }
        return false
      }
      if (submission.files.some((file) => file.status === "error")) {
        onBlocked()
        return false
      }
      submittingRef.current = true
      setIsSubmitting(true)
      const complete = (result: boolean | void) => {
        if (result === false) {
          return false
        }
        onAccepted(submission, selected !== undefined)
        return true
      }
      const finish = () => {
        submittingRef.current = false
        if (mounted.current) {
          setIsSubmitting(false)
        }
      }
      try {
        const result = accept(submission)
        if (result instanceof Promise) {
          return result.then(complete).finally(finish)
        }
        const accepted = complete(result)
        finish()
        return accepted
      } catch (error) {
        finish()
        throw error
      }
    },
    [snapshot, renderedScopeKey, onAccepted, onBlocked]
  )

  useEffect(() => {
    const accept = queued.get(snapshot.scopeKey)
    if (
      !accept ||
      isSubmitting ||
      renderedScopeKey !== snapshot.scopeKey ||
      snapshot.files.some((file) => file.status === "uploading")
    ) {
      return
    }
    setQueued((current) => {
      const next = new Map(current)
      next.delete(snapshot.scopeKey)
      return next
    })
    try {
      void Promise.resolve(submit(accept)).catch(onError)
    } catch (error) {
      onError(error)
    }
  }, [queued, snapshot, renderedScopeKey, isSubmitting, submit, onError])

  return { submit, isSubmitting, isQueued: queued.has(snapshot.scopeKey) }
}
