const pad = (value: number): string => String(value).padStart(2, "0")

/** `mm:ss`, growing to `h:mm:ss` past an hour. */
export const formatDuration = (elapsedMs: number): string => {
  const total = Math.floor(elapsedMs / 1000)
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60

  return hours > 0
    ? `${hours}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(minutes)}:${pad(seconds)}`
}
