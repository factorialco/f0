import { useCallback, useRef } from "react"
import type { ComposerSnapshot } from "@/lib/chat/useChatComposerController"
import type {
  UploadedFile,
  PendingContext,
  PendingQuote,
} from "../F0AiChat/types"
import type { F0AiChatTextAreaProps } from "./types"

/** Markdown syntax characters that would otherwise trigger formatting. */
const MD_SPECIAL = /[\\`*_{}[\]()#+\-.!|~>]/g

/**
 * Neutralize markdown / HTML metacharacters in user-typed text so `*hola*`,
 * `# title`, `> quote`, etc. render literally in the bubble. Preserves the
 * `<entity-ref>` tags that `transformMentions` inserts, so @mentions keep
 * their interactive rendering.
 */
const escapeUserText = (s: string): string =>
  s
    .split(/(<entity-ref\b[^>]*>[\s\S]*?<\/entity-ref>)/g)
    .map((part, i) => {
      // Odd indices are entity-ref tags produced by transformMentions — leave
      // them intact so the markdown renderer can turn them into chips.
      if (i % 2 === 1) {
        return part
      }
      return part
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(MD_SPECIAL, "\\$&")
    })
    .join("")

type SubmissionOptions = Pick<
  F0AiChatTextAreaProps,
  | "onSubmit"
  | "onBeforeSubmit"
  | "inProgress"
  | "onPendingContextChange"
  | "onPendingQuoteChange"
> & {
  pendingContext: PendingContext | null
  pendingQuote: PendingQuote | null
  draftKey: string
  isClarifying: boolean
  transformMentions: (text: string) => string
}

export function useAiComposerSubmission(options: SubmissionOptions) {
  const current = useRef(options)
  current.current = options
  return useCallback(async (snapshot: ComposerSnapshot<UploadedFile>) => {
    const captured = current.current
    const canAccept = () =>
      current.current.draftKey === snapshot.scopeKey &&
      !current.current.isClarifying &&
      !current.current.inProgress
    if (!canAccept() || (!snapshot.text.trim() && !snapshot.files.length)) {
      return false
    }
    const text = escapeUserText(
      captured.transformMentions(snapshot.text.trim())
    )
    const files = snapshot.files.flatMap((file) =>
      file.value ? [file.value] : []
    )
    if (
      captured.onBeforeSubmit &&
      (await captured.onBeforeSubmit()) === false
    ) {
      return false
    }
    if (!canAccept()) {
      return false
    }
    await captured.onSubmit({
      text,
      files,
      context: captured.pendingContext,
      quote: captured.pendingQuote,
    })
    if (current.current.draftKey !== snapshot.scopeKey) {
      return
    }
    if (
      captured.pendingContext &&
      current.current.pendingContext === captured.pendingContext
    ) {
      captured.onPendingContextChange?.(null)
    }
    if (
      captured.pendingQuote &&
      current.current.pendingQuote === captured.pendingQuote
    ) {
      captured.onPendingQuoteChange?.(null)
    }
  }, [])
}
