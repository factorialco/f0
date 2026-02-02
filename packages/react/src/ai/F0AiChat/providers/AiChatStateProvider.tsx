"use client"

import { type Message, randomId } from "@copilotkit/shared"
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

import { useI18n } from "@/lib/providers/i18n"

import {
  AiChatProviderReturnValue,
  AiChatState,
  FailedFileUpload,
  RejectedFile,
  UploadingFile,
} from "../internal-types"
import { WelcomeScreenSuggestion } from "../types"

const AiChatStateContext = createContext<AiChatProviderReturnValue | null>(null)

const DEFAULT_MINUTES_TO_RESET = 15

export const AiChatStateProvider: FC<PropsWithChildren<AiChatState>> = ({
  children,
  enabled,
  agent: initialAgent,
  initialMessage: initialInitialMessage,
  welcomeScreenSuggestions: initialWelcomeScreenSuggestions = [],
  onThumbsDown,
  onThumbsUp,
  fileValidation,
  onFilesRejected,
  onUploadFailed,
  onUploadFile,
  ...rest
}) => {
  const [enabledInternal, setEnabledInternal] = useState(enabled)
  const [open, setOpen] = useState(false)
  const [shouldPlayEntranceAnimation, setShouldPlayEntranceAnimation] =
    useState(true)
  const [agent, setAgent] = useState<string | undefined>(initialAgent)
  const [welcomeScreenSuggestions, setWelcomeScreenSuggestions] = useState<
    WelcomeScreenSuggestion[]
  >(initialWelcomeScreenSuggestions)
  const i18n = useI18n()
  const [placeholders, setPlaceholders] = useState<string[]>([
    i18n.t("ai.inputPlaceholder"),
  ])

  const [autoClearMinutes, setAutoClearMinutes] = useState<number | null>(
    DEFAULT_MINUTES_TO_RESET
  )
  const [initialMessage, setInitialMessage] = useState<
    string | string[] | undefined
  >(initialInitialMessage)

  // Attachment state
  const [attachments, setAttachments] = useState<File[]>([])
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([])

  // Store the reset function from CopilotKit
  const clearFunctionRef = useRef<(() => void) | null>(null)
  // Store the sendMessage function from CopilotKit
  const sendMessageFunctionRef = useRef<((message: Message) => void) | null>(
    null
  )
  const isSendingMessageRef = useRef(false)
  // Store the file input ref from ChatTextarea
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const tmp_setAgent = (newAgent?: string) => {
    setAgent(newAgent)
  }

  const setClearFunction = (clearFn: (() => void) | null) => {
    clearFunctionRef.current = clearFn
  }

  const setSendMessageFunction = (
    sendFn: ((message: Message) => void) | null
  ) => {
    sendMessageFunctionRef.current = sendFn
  }

  const clear = () => {
    if (clearFunctionRef.current) {
      clearFunctionRef.current()
    }
  }

  const setFileInputRef = useCallback((ref: HTMLInputElement | null) => {
    fileInputRef.current = ref
  }, [])

  const triggerFileInput = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }, [])

  // Validate a single file against the validation config
  const validateFile = useCallback(
    (
      file: File
    ): { valid: true } | { valid: false; rejection: RejectedFile } => {
      // If no validation config, accept all files
      if (!fileValidation) {
        return { valid: true }
      }

      const { maxFileSize, acceptedTypes, acceptedExtensions, validate } =
        fileValidation

      // Check file size
      if (maxFileSize && file.size > maxFileSize) {
        return {
          valid: false,
          rejection: { file, reason: "size" },
        }
      }

      // Check MIME type
      if (acceptedTypes && acceptedTypes.length > 0) {
        if (!acceptedTypes.includes(file.type)) {
          return {
            valid: false,
            rejection: { file, reason: "type" },
          }
        }
      }

      // Check file extension
      if (acceptedExtensions && acceptedExtensions.length > 0) {
        const ext = `.${file.name.split(".").pop()?.toLowerCase()}`
        if (!acceptedExtensions.includes(ext)) {
          return {
            valid: false,
            rejection: { file, reason: "type" },
          }
        }
      }

      // Run custom validation
      if (validate) {
        const result = validate(file)
        if (!result.valid) {
          return {
            valid: false,
            rejection: { file, reason: "custom", message: result.message },
          }
        }
      }

      return { valid: true }
    },
    [fileValidation]
  )

  const addAttachment = useCallback(
    (file: File) => {
      const result = validateFile(file)
      if (result.valid) {
        setAttachments((prev) => [...prev, file])
      } else if (onFilesRejected) {
        onFilesRejected([result.rejection])
      }
    },
    [validateFile, onFilesRejected]
  )

  const addAttachments = useCallback(
    (files: File[]) => {
      const accepted: File[] = []
      const rejected: RejectedFile[] = []

      for (const file of files) {
        const result = validateFile(file)
        if (result.valid) {
          accepted.push(file)
        } else {
          rejected.push(result.rejection)
        }
      }

      if (accepted.length > 0) {
        setAttachments((prev) => [...prev, ...accepted])
      }

      if (rejected.length > 0 && onFilesRejected) {
        onFilesRejected(rejected)
      }
    },
    [validateFile, onFilesRejected]
  )

  const removeAttachment = useCallback((index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const clearAttachments = useCallback(() => {
    setAttachments([])
  }, [])

  const sendMessage = async (message: string | Message) => {
    if (!sendMessageFunctionRef.current || isSendingMessageRef.current) {
      return
    }

    isSendingMessageRef.current = true

    try {
      // Ensure chat is open when sending a message
      if (!open) {
        setOpen(true)
      }

      // Get the message content for processing
      const messageContent =
        typeof message === "string" ? message : (message.content ?? "")

      let processedContent: string = messageContent

      // Upload attachments if onUploadFile is provided
      if (attachments.length > 0 && onUploadFile) {
        // Initialize uploading files state
        setUploadingFiles(
          attachments.map((f) => ({ file: f, progress: 0, status: "pending" }))
        )

        const updateUploadingFile = (
          index: number,
          updates: Partial<UploadingFile>
        ) => {
          setUploadingFiles((prev) =>
            prev.map((item, i) =>
              i === index ? { ...item, ...updates } : item
            )
          )
        }

        const results = await Promise.all(
          attachments.map(async (file, index) => {
            try {
              updateUploadingFile(index, { status: "uploading" })
              const result = await onUploadFile(file, (progress) => {
                updateUploadingFile(index, { progress })
              })
              updateUploadingFile(index, { status: "success", result })
              return { file, result, success: true as const }
            } catch (error) {
              const errorMessage =
                error instanceof Error ? error.message : String(error)
              updateUploadingFile(index, {
                status: "error",
                error: errorMessage,
              })
              return { file, error: errorMessage, success: false as const }
            }
          })
        )

        const successful = results.filter((r) => r.success)
        const failed = results.filter((r) => !r.success)

        if (failed.length > 0 && onUploadFailed) {
          const failedUploads: FailedFileUpload[] = failed.map((upload) => ({
            file: upload.file,
            error: upload.error,
          }))
          onUploadFailed(failedUploads)
        }

        if (successful.length > 0 || failed.length > 0) {
          const attachmentsJson = JSON.stringify({
            files: successful.map((upload) => ({
              name: upload.file.name,
              url: upload.result.url,
              type: upload.file.type,
              size: upload.file.size,
            })),
            failed_uploads: failed.map((upload) => ({
              name: upload.file.name,
              type: upload.file.type,
              size: upload.file.size,
              error: upload.error,
            })),
          })

          const attachmentsBlock = `[ATTACHMENTS]\n${attachmentsJson}\n[/ATTACHMENTS]`
          processedContent = messageContent
            ? `${messageContent}\n\n${attachmentsBlock}`
            : attachmentsBlock
        }
      } else if (attachments.length > 0) {
        // Fallback: add [Attachment: filename] markers if no upload callback
        const fileMarkers = attachments
          .map((file) => `[Attachment: ${file.name}]`)
          .join("\n")
        processedContent = messageContent
          ? `${messageContent}\n\n${fileMarkers}`
          : fileMarkers
      }

      // Construct the message
      const messageToSend: Message =
        typeof message === "string"
          ? {
              id: randomId(),
              role: "user",
              content: processedContent,
            }
          : {
              ...message,
              content: processedContent,
            }

      sendMessageFunctionRef.current(messageToSend)

      // Clear attachments after sending
      clearAttachments()
    } finally {
      isSendingMessageRef.current = false
      setUploadingFiles([])
    }
  }

  useEffect(() => {
    setEnabledInternal(enabled)
  }, [enabled])

  useEffect(() => {
    if (!open) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      setShouldPlayEntranceAnimation(!prefersReducedMotion)
    }
  }, [open])

  return (
    <AiChatStateContext.Provider
      value={{
        ...rest,
        enabled: enabledInternal,
        setEnabled: setEnabledInternal,
        open,
        setOpen,
        shouldPlayEntranceAnimation,
        setShouldPlayEntranceAnimation,
        agent,
        tmp_setAgent,
        setAutoClearMinutes,
        autoClearMinutes: enabledInternal ? autoClearMinutes : null,
        initialMessage,
        setInitialMessage,
        welcomeScreenSuggestions,
        setWelcomeScreenSuggestions,
        onThumbsUp,
        onThumbsDown,
        clear,
        setClearFunction,
        placeholders,
        setPlaceholders,
        sendMessage,
        setSendMessageFunction,
        fileUploadsEnabled: fileValidation !== undefined,
        attachments,
        addAttachment,
        addAttachments,
        removeAttachment,
        clearAttachments,
        uploadingFiles,
        isUploading: uploadingFiles.some((f) => f.status === "uploading"),
        triggerFileInput,
        setFileInputRef,
      }}
    >
      {children}
    </AiChatStateContext.Provider>
  )
}

const noopFn = () => {}
const noopAsyncFn = async () => {}

export function useAiChat(): AiChatProviderReturnValue {
  const context = useContext(AiChatStateContext)

  if (context === null) {
    return {
      enabled: false,
      setEnabled: noopFn,
      open: false,
      setOpen: noopFn,
      shouldPlayEntranceAnimation: true,
      setShouldPlayEntranceAnimation: noopFn,
      agent: undefined,
      tmp_setAgent: noopFn,
      setAutoClearMinutes: noopFn,
      clear: noopFn,
      setClearFunction: noopFn,
      autoClearMinutes: null,
      initialMessage: undefined,
      setInitialMessage: noopFn,
      placeholders: [],
      setPlaceholders: noopFn,
      welcomeScreenSuggestions: [],
      setWelcomeScreenSuggestions: noopFn,
      onThumbsUp: noopFn,
      onThumbsDown: noopFn,
      sendMessage: noopAsyncFn,
      setSendMessageFunction: noopFn,
      fileUploadsEnabled: false,
      attachments: [],
      addAttachment: noopFn,
      addAttachments: noopFn,
      removeAttachment: noopFn,
      clearAttachments: noopFn,
      uploadingFiles: [],
      isUploading: false,
      triggerFileInput: noopFn,
      setFileInputRef: noopFn,
    }
  }

  return context
}
