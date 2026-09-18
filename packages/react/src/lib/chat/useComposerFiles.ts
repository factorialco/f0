import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

export interface ComposerFile<T> {
  id: string
  file: File
  previewUrl: string | null
  status: "uploading" | "ready" | "error"
  value?: T
  errorMessage?: string
}

export interface ComposerFilesOptions<T> {
  scopeKey?: string
  uploadFiles?: (
    files: File[],
    options?: { signal: AbortSignal }
  ) => Promise<T[]>
  maxStoredFiles?: number
  maxStoredBytes?: number
  getFileExpiry?: (value: T) => number | undefined
  maxFiles?: number
  maxFileSizeBytes?: number
  validateFiles?: (files: File[]) => File[]
  onAdded?: (file: ComposerFile<T>) => void
  releasePreviewOnReady?: boolean
  uploadErrorMessage?: string
  onError: (
    reason: "too-many" | "too-large" | "upload",
    error?: unknown
  ) => void
}

function replaceFile<T>(
  target: ComposerFile<T>,
  patch: Partial<ComposerFile<T>>
) {
  return (current: ComposerFile<T>[]) =>
    current.map((item) => (item === target ? { ...item, ...patch } : item))
}

function exceedsStorageLimit<T>(
  stored: ComposerFile<T>[],
  accepted: File[],
  maxFiles?: number,
  maxBytes?: number
) {
  const count = stored.length + accepted.length
  const bytes = [...stored.map((item) => item.file), ...accepted].reduce(
    (total, file) => total + file.size,
    0
  )
  return (
    (maxFiles !== undefined && count > maxFiles) ||
    (maxBytes !== undefined && bytes > maxBytes)
  )
}

export function useComposerFiles<T>({
  scopeKey = "default",
  uploadFiles,
  maxFiles,
  maxStoredFiles,
  maxStoredBytes,
  getFileExpiry,
  maxFileSizeBytes,
  validateFiles,
  onAdded,
  releasePreviewOnReady = false,
  uploadErrorMessage,
  onError,
}: ComposerFilesOptions<T>) {
  const [files, setFiles] = useState<ComposerFile<T>[]>([])
  const filesRef = useRef(files)
  const scopeRef = useRef(scopeKey)
  const filesByScopeRef = useRef(new Map<string, ComposerFile<T>[]>())
  const previewUrlsRef = useRef(new Set<string>())
  const attempts = useRef(new Map<string, AbortController>())
  const queue = useRef<Promise<unknown>[]>([])
  const mounted = useRef(true)

  useLayoutEffect(() => {
    if (scopeRef.current === scopeKey) {
      return
    }
    filesByScopeRef.current.set(scopeRef.current, filesRef.current)
    const next = filesByScopeRef.current.get(scopeKey) ?? []
    scopeRef.current = scopeKey
    filesRef.current = next
    setFiles(next)
  }, [scopeKey])

  const update = useCallback(
    (
      change: (current: ComposerFile<T>[]) => ComposerFile<T>[],
      scope = scopeRef.current
    ) => {
      if (!mounted.current) {
        return
      }
      const current =
        scope === scopeRef.current
          ? filesRef.current
          : (filesByScopeRef.current.get(scope) ?? [])
      const next = change(current)
      filesByScopeRef.current.set(scope, next)
      if (scope !== scopeRef.current) {
        return
      }
      filesRef.current = next
      setFiles(next)
    },
    []
  )

  const release = useCallback((file: ComposerFile<T>) => {
    if (file.previewUrl && previewUrlsRef.current.delete(file.previewUrl)) {
      URL.revokeObjectURL(file.previewUrl)
    }
  }, [])

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
      for (const attempt of attempts.current.values()) {
        attempt.abort()
      }
      for (const url of previewUrlsRef.current) {
        URL.revokeObjectURL(url)
      }
      previewUrlsRef.current.clear()
    }
  }, [])

  useEffect(
    function expirePreparedFiles() {
      if (!getFileExpiry) {
        return
      }
      const expiries = files
        .flatMap((item) =>
          item.status === "ready" && item.value !== undefined
            ? [getFileExpiry(item.value)]
            : []
        )
        .filter(
          (expiry): expiry is number =>
            expiry !== undefined && Number.isFinite(expiry)
        )
      if (!expiries.length) {
        return
      }
      const timer = setTimeout(
        () =>
          update((current) =>
            current.map((item) => {
              const expiry =
                item.value === undefined ? undefined : getFileExpiry(item.value)
              return item.status === "ready" &&
                expiry !== undefined &&
                expiry <= Date.now()
                ? { ...item, status: "error", errorMessage: uploadErrorMessage }
                : item
            })
          ),
        Math.max(0, Math.min(...expiries) - Date.now())
      )
      return () => clearTimeout(timer)
    },
    [files, getFileExpiry, update, uploadErrorMessage]
  )

  const finishUpload = useCallback(
    async (pending: ComposerFile<T>[], scope: string) => {
      if (!uploadFiles || pending.length === 0) {
        return
      }
      await Promise.all(
        pending.map(async (item) => {
          const attempt = new AbortController()
          attempts.current.get(item.id)?.abort()
          attempts.current.set(item.id, attempt)
          const previous =
            queue.current.length >= 2 ? queue.current.shift() : undefined
          const work = (async () => {
            if (previous) {
              await previous.catch(() => undefined)
            }
            if (attempt.signal.aborted) {
              return
            }
            try {
              const uploaded = await uploadFiles([item.file], {
                signal: attempt.signal,
              })
              if (
                !Array.isArray(uploaded) ||
                uploaded.length !== 1 ||
                uploaded[0] === undefined
              ) {
                throw new Error("Unexpected attachment upload result")
              }
              if (attempt.signal.aborted || !mounted.current) {
                return
              }
              if (releasePreviewOnReady) {
                release(item)
              }
              update(
                replaceFile(item, {
                  status: "ready",
                  value: uploaded[0],
                  previewUrl: releasePreviewOnReady ? null : item.previewUrl,
                  errorMessage: undefined,
                }),
                scope
              )
            } catch (error) {
              if (attempt.signal.aborted || !mounted.current) {
                return
              }
              update(
                replaceFile(item, {
                  status: "error",
                  errorMessage: uploadErrorMessage,
                }),
                scope
              )
              if (scope === scopeRef.current) {
                onError("upload", error)
              }
            } finally {
              if (attempts.current.get(item.id) === attempt) {
                attempts.current.delete(item.id)
              }
            }
          })()
          queue.current.push(work)
          await work
        })
      )
    },
    [
      onError,
      release,
      releasePreviewOnReady,
      update,
      uploadErrorMessage,
      uploadFiles,
    ]
  )

  const addFiles = useCallback(
    async (rawFiles: File[], prepared?: T[]) => {
      if (!uploadFiles) {
        return []
      }
      const scope = scopeRef.current
      const existing =
        prepared && findPreparedFiles(rawFiles, filesRef.current, getFileExpiry)
      if (existing) {
        return existing
      }
      const accepted = validateFiles ? validateFiles(rawFiles) : rawFiles
      if (accepted.length === 0) {
        return
      }
      if (
        maxFiles !== undefined &&
        filesRef.current.length + accepted.length > maxFiles
      ) {
        onError("too-many")
        return
      }
      if (
        maxFileSizeBytes !== undefined &&
        accepted.some((file) => file.size > maxFileSizeBytes)
      ) {
        onError("too-large")
        return
      }
      if (prepared && prepared.length !== accepted.length) {
        throw new Error("Invalid prepared attachments")
      }
      const stored = [...filesByScopeRef.current.values()].flat()
      if (
        exceedsStorageLimit(stored, accepted, maxStoredFiles, maxStoredBytes)
      ) {
        onError("too-many")
        return []
      }
      const pending = accepted.map((file, index): ComposerFile<T> => {
        const previewUrl =
          typeof URL.createObjectURL === "function"
            ? URL.createObjectURL(file)
            : null
        if (previewUrl) {
          previewUrlsRef.current.add(previewUrl)
        }
        return {
          id: crypto.randomUUID(),
          file,
          previewUrl,
          status: prepared
            ? (getFileExpiry?.(prepared[index]) ?? Infinity) <= Date.now()
              ? "error"
              : "ready"
            : "uploading",
          errorMessage:
            prepared &&
            (getFileExpiry?.(prepared[index]) ?? Infinity) <= Date.now()
              ? uploadErrorMessage
              : undefined,
          value: prepared?.[index],
        }
      })
      for (const item of pending) {
        onAdded?.(item)
      }
      update((current) => [...current, ...pending], scope)
      if (!prepared) {
        await finishUpload(pending, scope)
      }
      const current =
        scope === scopeRef.current
          ? filesRef.current
          : (filesByScopeRef.current.get(scope) ?? [])
      return pending
        .map((item) => current.find((candidate) => candidate.id === item.id))
        .filter((item): item is ComposerFile<T> => item !== undefined)
    },
    [
      finishUpload,
      getFileExpiry,
      uploadErrorMessage,
      maxFileSizeBytes,
      maxFiles,
      maxStoredFiles,
      maxStoredBytes,
      onAdded,
      onError,
      update,
      uploadFiles,
      validateFiles,
    ]
  )

  const removeFile = useCallback(
    (id: string) => {
      attempts.current.get(id)?.abort()
      const item = filesRef.current.find((file) => file.id === id)
      if (item) {
        release(item)
      }
      update((current) => current.filter((file) => file.id !== id))
    },
    [release, update]
  )

  const clearFiles = useCallback(
    (ids: string[], scope = scopeRef.current) => {
      const sentIds = new Set(ids)
      const current =
        scope === scopeRef.current
          ? filesRef.current
          : (filesByScopeRef.current.get(scope) ?? [])
      for (const item of current) {
        if (sentIds.has(item.id)) {
          attempts.current.get(item.id)?.abort()
          release(item)
        }
      }
      update((items) => items.filter((file) => !sentIds.has(file.id)), scope)
    },
    [release, update]
  )

  const retryFile = useCallback(
    async (id: string) => {
      const item = filesRef.current.find((file) => file.id === id)
      if (!item || item.status !== "error") {
        return
      }
      const pending: ComposerFile<T> = {
        ...item,
        status: "uploading",
        errorMessage: undefined,
      }
      update((current) =>
        current.map((file) => (file.id === id ? pending : file))
      )
      await finishUpload([pending], scopeRef.current)
    },
    [finishUpload, update]
  )

  return { files, addFiles, removeFile, clearFiles, retryFile }
}

function findPreparedFiles<T>(
  rawFiles: File[],
  files: ComposerFile<T>[],
  getFileExpiry?: (value: T) => number | undefined
) {
  const existing = rawFiles.map((file) =>
    files.find(
      (item) =>
        item.file === file &&
        item.status === "ready" &&
        item.value !== undefined &&
        (getFileExpiry?.(item.value) ?? Infinity) > Date.now()
    )
  )
  return existing.every((item): item is ComposerFile<T> => item !== undefined)
    ? existing
    : undefined
}
