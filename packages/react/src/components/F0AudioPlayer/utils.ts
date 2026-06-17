import { DataAttributes } from "@/global.types"

export const getDataAttributes = <T extends object>(props: T): DataAttributes =>
  Object.fromEntries(
    Object.entries(props).filter(([key]) => key.startsWith("data-"))
  ) as DataAttributes

export const formatPlaybackTime = (seconds: number): string => {
  if (!Number.isFinite(seconds) || seconds < 0) {
    seconds = 0
  }

  const total = Math.floor(seconds)
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const secs = total % 60

  const pad = (n: number) => String(n).padStart(2, "0")

  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(secs)}`
  }

  return `${minutes}:${pad(secs)}`
}
