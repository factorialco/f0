/**
 * Calls a consumer callback that is meant to return a promise but may throw
 * before its first await (no API key, `google.maps` not loaded yet). The throw
 * becomes a rejection, so the caller's `catch` covers both and the call still
 * happens synchronously.
 */
export const invokeAsync = <T>(run: () => Promise<T>): Promise<T> => {
  try {
    return run()
  } catch (error) {
    return Promise.reject(
      error instanceof Error ? error : new Error(String(error))
    )
  }
}
