const videoExt = new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"])

export const isVideo = (path: string | undefined | null): boolean => {
  if (!path) {
    return false
  }

  if (path.includes("//s3.")) {
    return path.includes("response-content-type=video")
  }

  const list = path?.split(".")
  const ext = list.at(-1)
  return !!ext && videoExt.has(ext)
}
