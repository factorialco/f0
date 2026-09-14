/* oxlint-disable no-await-in-loop -- A response stream must be read and cancelled sequentially. */

const SELF_CONTAINED_PROTOCOLS = new Set(["blob:", "data:"])
const REMOTE_PROTOCOLS = new Set(["http:", "https:"])
const MAX_BUFFERED_BYTES = 50 * 1024 * 1024

const resolveUrl = (url: string): URL | null => {
  try {
    return new URL(url, window.location.href)
  } catch {
    return null
  }
}

const exceedsDeclaredLimit = (response: Response): boolean => {
  const declared = response.headers.get("content-length")

  return (
    declared !== null &&
    /^\d+$/.test(declared.trim()) &&
    Number(declared) > MAX_BUFFERED_BYTES
  )
}

const readBoundedBlob = async (response: Response): Promise<Blob | null> => {
  if (exceedsDeclaredLimit(response)) {
    return null
  }

  const contentType = response.headers.get("content-type") ?? ""
  if (!response.body) {
    return new Blob([], { type: contentType })
  }

  const reader = response.body.getReader()
  const chunks: ArrayBuffer[] = []
  let receivedBytes = 0

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) {
        break
      }

      receivedBytes += value.byteLength
      if (receivedBytes > MAX_BUFFERED_BYTES) {
        await reader.cancel()
        return null
      }

      const chunk = new Uint8Array(value.byteLength)
      chunk.set(value)
      chunks.push(chunk.buffer)
    }
  } finally {
    reader.releaseLock()
  }

  return new Blob(chunks, { type: contentType })
}

const saveWithAnchor = (
  href: string,
  name: string,
  target: "_blank" | undefined = undefined
) => {
  const a = document.createElement("a")
  a.href = href
  a.download = name
  a.rel = "noreferrer"
  if (target) {
    a.target = target
  }

  document.body.appendChild(a)
  a.click()
  a.remove()
}

const saveBlob = (blob: Blob, name: string) => {
  const url = URL.createObjectURL(blob)
  saveWithAnchor(url, name)
  setTimeout(() => URL.revokeObjectURL(url), 0)
}

/** Programmatically download a remote file under a given name without navigating. */
export const triggerDownload = async (
  url: string,
  name: string
): Promise<void> => {
  const target = resolveUrl(url)
  if (!target) {
    return
  }

  if (SELF_CONTAINED_PROTOCOLS.has(target.protocol)) {
    saveWithAnchor(target.href, name)
    return
  }

  if (!REMOTE_PROTOCOLS.has(target.protocol)) {
    return
  }

  if (target.origin === window.location.origin) {
    saveWithAnchor(target.href, name)
    return
  }

  const transfer = new AbortController()
  let blob: Blob | null = null

  try {
    const response = await fetch(target.href, {
      credentials: "omit",
      signal: transfer.signal,
    })

    if (response.ok) {
      blob = await readBoundedBlob(response)
    }
    if (!blob) {
      transfer.abort()
    }
  } catch {
    blob = null
  }

  if (blob) {
    saveBlob(blob, name)
    return
  }

  saveWithAnchor(target.href, name, "_blank")
}
