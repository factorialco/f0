import { useCallback, useRef } from "react"

/**
 * Hook for the "host injects a function from outside React" pattern.
 *
 * Returns `[invoke, setFn]`:
 * - `invoke(...args)` calls the currently registered function (no-op if
 *   none has been registered). Stable identity.
 * - `setFn(fn)` registers the function (or clears it with `null`).
 *
 * Used inside `AiChatStateProvider` to bridge functions that originate
 * from CopilotKit (sendMessage, clear, loadThread, appendMessages,
 * replaceMessages, processDroppedFiles) into the f0 state surface
 * without imposing a render dependency.
 *
 * @example
 * const [clear, setClearFunction] = useInjectedFn<[]>()
 * // …elsewhere: setClearFunction(() => doTheClear())
 * // …consumer: clear()
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useInjectedFn<Args extends any[], R = void>(): [
  (...args: Args) => R | undefined,
  (fn: ((...args: Args) => R) | null) => void,
] {
  const ref = useRef<((...args: Args) => R) | null>(null)

  const invoke = useCallback((...args: Args): R | undefined => {
    return ref.current?.(...args)
  }, [])

  const setFn = useCallback((fn: ((...args: Args) => R) | null) => {
    ref.current = fn
  }, [])

  return [invoke, setFn]
}
