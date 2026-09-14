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
  uploadFiles?: (files: File[]) => Promise<T[]>
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

export function useComposerFiles<T>({
  scopeKey = "default",
  uploadFiles,
  maxFiles,
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

  useEffect(
    () => () => {
      for (const url of previewUrlsRef.current) {
        URL.revokeObjectURL(url)
      }
      previewUrlsRef.current.clear()
    },
    []
  )

  const finishUpload = useCallback(
    async (pending: ComposerFile<T>[], scope: string) => {
      if (!uploadFiles || pending.length === 0) {
        return
      }
      try {
        const uploaded = await uploadFiles(pending.map((item) => item.file))
        if (
          !Array.isArray(uploaded) ||
          uploaded.length !== pending.length ||
          uploaded.some((item) => item === undefined)
        ) {
          throw new Error("Unexpected attachment upload result")
        }
        if (releasePreviewOnReady) {
          for (const item of pending) {
            release(item)
          }
        }
        const byId = new Map(
          pending.map((item, index) => [item.id, uploaded[index]])
        )
        update(
          (current) =>
            current.map((item) => {
              if (!byId.has(item.id)) {
                return item
              }
              return {
                ...item,
                status: "ready",
                value: byId.get(item.id),
                previewUrl: releasePreviewOnReady ? null : item.previewUrl,
                errorMessage: undefined,
              }
            }),
          scope
        )
      } catch (error) {
        const ids = new Set(pending.map((item) => item.id))
        update(
          (current) =>
            current.map((item) =>
              ids.has(item.id)
                ? {
                    ...item,
                    status: "error",
                    errorMessage: uploadErrorMessage,
                  }
                : item
            ),
          scope
        )
        if (scope === scopeRef.current) {
          onError("upload", error)
        }
      }
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
    async (rawFiles: File[]) => {
      if (!uploadFiles || rawFiles.length === 0) {
        return
      }
      const scope = scopeRef.current
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
      const pending = accepted.map((file): ComposerFile<T> => {
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
          status: "uploading",
        }
      })
      for (const item of pending) {
        onAdded?.(item)
      }
      update((current) => [...current, ...pending], scope)
      await finishUpload(pending, scope)
    },
    [
      finishUpload,
      maxFileSizeBytes,
      maxFiles,
      onAdded,
      onError,
      update,
      uploadFiles,
      validateFiles,
    ]
  )

  const removeFile = useCallback(
    (id: string) => {
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
