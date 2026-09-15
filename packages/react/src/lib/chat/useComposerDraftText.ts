import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type SetStateAction,
} from "react"

type DraftText = { value: string; cursor: number }

export function useComposerDraftText(scopeKey: string) {
  const [draft, setDraft] = useState<DraftText>({ value: "", cursor: 0 })
  const [renderedScopeKey, setRenderedScopeKey] = useState(scopeKey)
  const currentRef = useRef(draft)
  const scopeRef = useRef(scopeKey)
  const draftsRef = useRef(new Map<string, DraftText>())

  useLayoutEffect(() => {
    if (scopeRef.current === scopeKey) {
      return
    }
    draftsRef.current.set(scopeRef.current, currentRef.current)
    const next = draftsRef.current.get(scopeKey) ?? { value: "", cursor: 0 }
    scopeRef.current = scopeKey
    currentRef.current = next
    setDraft(next)
    setRenderedScopeKey(scopeKey)
  }, [scopeKey])

  const update = useCallback(
    (scope: string, change: (current: DraftText) => DraftText) => {
      const current =
        scope === scopeRef.current
          ? currentRef.current
          : (draftsRef.current.get(scope) ?? { value: "", cursor: 0 })
      const next = change(current)
      draftsRef.current.set(scope, next)
      if (scope !== scopeRef.current) {
        return
      }
      currentRef.current = next
      setDraft(next)
    },
    []
  )

  const setValue = useCallback(
    (action: SetStateAction<string>) => {
      update(scopeRef.current, (current) => ({
        ...current,
        value: typeof action === "function" ? action(current.value) : action,
      }))
    },
    [update]
  )

  const setCursorPosition = useCallback(
    (action: SetStateAction<number>) => {
      update(scopeRef.current, (current) => ({
        ...current,
        cursor: typeof action === "function" ? action(current.cursor) : action,
      }))
    },
    [update]
  )

  const updateValueForScope = useCallback(
    (scope: string, change: (current: string) => string) => {
      update(scope, (current) => ({ ...current, value: change(current.value) }))
    },
    [update]
  )

  return {
    renderedScopeKey,
    value: draft.value,
    cursorPosition: draft.cursor,
    setValue,
    setCursorPosition,
    updateValueForScope,
  }
}
