"use client"

import { useI18n } from "@/lib/providers/i18n"
import { type AIMessage, type Message, randomId } from "@copilotkit/shared"
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
import { WelcomeScreenSuggestion } from "../components/WelcomeScreen"

const AiChatStateContext = createContext<AiChatProviderReturnValue | null>(null)

export type FileRejectionReason = "size" | "type" | "custom"

export type RejectedFile = {
  file: File
  reason: FileRejectionReason
  message?: string
}

export type FileValidationConfig = {
  /**
   * Maximum file size in bytes. Files exceeding this will be rejected with reason "size"
   */
  maxFileSize?: number
  /**
   * Accepted MIME types (e.g., ["image/png", "application/pdf"])
   */
  acceptedTypes?: string[]
  /**
   * Accepted file extensions (e.g., [".png", ".pdf"])
   */
  acceptedExtensions?: string[]
  /**
   * Custom validation function. Return { valid: true } or { valid: false, message: "reason" }
   */
  validate?: (file: File) => { valid: true } | { valid: false; message: string }
}

/**
 * Result from the onBeforeSend callback
 */
export type BeforeSendResult = {
  /** The message to send (possibly modified) */
  message: string
  /** Optional metadata to attach to the message */
  metadata?: Record<string, unknown>
}

export interface AiChatState {
  greeting?: string
  enabled: boolean
  agent?: string
  initialMessage?: string | string[]
  welcomeScreenSuggestions?: WelcomeScreenSuggestion[]
  placeholders?: string[]
  setPlaceholders?: React.Dispatch<React.SetStateAction<string[]>>
  onThumbsUp?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  onThumbsDown?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  /**
   * Callback when files are rejected during attachment validation
   */
  onFilesRejected?: (rejectedFiles: RejectedFile[]) => void
  /**
   * Configuration for file validation. If not provided, all files are accepted.
   */
  fileValidation?: FileValidationConfig
  /**
   * Callback invoked before sending a message. Allows processing attachments
   * and modifying the message content. The callback receives the original message
   * and current attachments, and should return the (possibly modified) message
   * to send.
   *
   * Use this to upload files, extract content, or enrich messages before sending.
   *
   * @param message - The original message content
   * @param attachments - Array of files attached to the message
   * @returns Promise with the processed message and optional metadata
   */
  onBeforeSend?: (
    message: string,
    attachments: File[]
  ) => Promise<BeforeSendResult>
}

type AiChatProviderReturnValue = {
  enabled: boolean
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  shouldPlayEntranceAnimation: boolean
  setShouldPlayEntranceAnimation: React.Dispatch<React.SetStateAction<boolean>>
  tmp_setAgent: (agent?: string) => void
  placeholders: string[]
  setPlaceholders: React.Dispatch<React.SetStateAction<string[]>>
  /**
   * Whether file uploads are enabled. True when fileValidation is provided.
   * Use this to conditionally show/hide file upload UI.
   */
  fileUploadsEnabled: boolean
  /**
   * Set the amount of minutes after which the chat will be cleared automatically
   * Set `null` to disable auto-clearing
   *
   * @default 15
   */
  setAutoClearMinutes: React.Dispatch<React.SetStateAction<number | null>>
  autoClearMinutes: number | null

  /**
   * The initial message to display in the chat
   */
  initialMessage?: string | string[]
  setInitialMessage: React.Dispatch<
    React.SetStateAction<string | string[] | undefined>
  >
  welcomeScreenSuggestions: WelcomeScreenSuggestion[]
  setWelcomeScreenSuggestions: React.Dispatch<
    React.SetStateAction<WelcomeScreenSuggestion[]>
  >
  onThumbsUp?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  onThumbsDown?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  /**
   * Clear/reset the chat conversation
   */
  clear: () => void
  /**
   * Internal function to set the clear function from CopilotKit
   * @internal
   */
  setClearFunction: (clearFn: (() => void) | null) => void
  /**
   * Send a message to the chat. If onBeforeSend is configured and there are
   * attachments, they will be processed before the message is sent.
   * @param message - The message content as a string, or a full Message object
   */
  sendMessage: (message: string | Message) => Promise<void>
  /**
   * Internal function to set the sendMessage function from CopilotKit
   * @internal
   */
  setSendMessageFunction: (sendFn: ((message: Message) => void) | null) => void
  /**
   * Files attached to the current message (before sending)
   */
  attachments: File[]
  /**
   * Add a single file attachment
   */
  addAttachment: (file: File) => void
  /**
   * Add multiple file attachments
   */
  addAttachments: (files: File[]) => void
  /**
   * Remove an attachment by index
   */
  removeAttachment: (index: number) => void
  /**
   * Clear all attachments
   */
  clearAttachments: () => void
  /**
   * Set a callback to process messages and attachments before sending.
   * Use this from child components to register context-specific processing.
   * @internal
   */
  setOnBeforeSend: (
    callback:
      | ((message: string, attachments: File[]) => Promise<BeforeSendResult>)
      | null
  ) => void
} & Pick<AiChatState, "greeting" | "agent">

const DEFAULT_MINUTES_TO_RESET = 15

export const AiChatStateProvider: FC<PropsWithChildren<AiChatState>> = ({
  children,
  enabled,
  agent: initialAgent,
  initialMessage: initialInitialMessage,
  welcomeScreenSuggestions: initialWelcomeScreenSuggestions = [],
  onThumbsDown,
  onThumbsUp,
  onFilesRejected,
  fileValidation,
  onBeforeSend,
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

  // Store the reset function from CopilotKit
  const clearFunctionRef = useRef<(() => void) | null>(null)
  // Store the sendMessage function from CopilotKit
  const sendMessageFunctionRef = useRef<((message: Message) => void) | null>(
    null
  )
  // Store dynamically-set onBeforeSend callback from child components
  const onBeforeSendRef = useRef<
    ((message: string, attachments: File[]) => Promise<BeforeSendResult>) | null
  >(null)

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

  const setOnBeforeSend = (
    callback:
      | ((message: string, attachments: File[]) => Promise<BeforeSendResult>)
      | null
  ) => {
    // Warn if overwriting an existing callback (helps debug multiple registrations)
    if (
      process.env.NODE_ENV === "development" &&
      callback !== null &&
      onBeforeSendRef.current !== null
    ) {
      console.warn(
        "[AiChat] setOnBeforeSend: Overwriting existing callback. " +
          "If this is unintentional, ensure only one component registers an onBeforeSend callback."
      )
    }
    onBeforeSendRef.current = callback
  }

  const clear = () => {
    if (clearFunctionRef.current) {
      clearFunctionRef.current()
    }
  }

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
    if (!sendMessageFunctionRef.current) {
      return
    }

    // Ensure chat is open when sending a message
    if (!open) {
      setOpen(true)
    }

    // Get the message content for processing (default to empty string if undefined)
    const messageContent =
      typeof message === "string" ? message : (message.content ?? "")

    // Process attachments before sending if callback is provided
    // Use dynamically-set callback (from child component) or prop callback
    const beforeSendCallback = onBeforeSendRef.current ?? onBeforeSend
    let processedContent: string = messageContent

    if (beforeSendCallback && attachments.length > 0) {
      try {
        const result = await beforeSendCallback(messageContent, attachments)
        processedContent = result.message
      } catch (error) {
        console.error("[AiChat] onBeforeSend failed:", error)
        // Continue with original message if processing fails
      }
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
        attachments,
        addAttachment,
        addAttachments,
        removeAttachment,
        clearAttachments,
        setOnBeforeSend,
        fileUploadsEnabled: fileValidation !== undefined,
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
      attachments: [],
      addAttachment: noopFn,
      addAttachments: noopFn,
      removeAttachment: noopFn,
      clearAttachments: noopFn,
      setOnBeforeSend: noopFn,
      fileUploadsEnabled: false,
    }
  }

  return context
}
