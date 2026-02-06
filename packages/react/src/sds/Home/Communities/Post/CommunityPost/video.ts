const videoExt = new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"])

export const isVideo = (path: string | undefined | null): boolean => {
  if (!path) return false

  if (path.indexOf("//s3.") >= 0) {
    return path.indexOf("response-content-type=video") >= 0
  }

  const list = path?.split(".")
  const ext = list.at(-1)
  return !!ext && videoExt.has(ext)
}
