import { type F0ChatMention, type F0ChatUser } from "../types"

/** A community the current user may publish in. */
export type MockCommunityOption = {
  id: string
  title: string
}

/**
 * Everything the form holds, in one object.
 *
 * `cover` is a `File` while it is being chosen and a `string` when it came back
 * from the server on an edit — the two states a cover has, and the reason the
 * field can't just be one or the other. `null` means "the reader deleted it",
 * which an edit has to be able to say and `undefined` cannot.
 */
export type MockPostDraft = {
  title: string
  /** HTML from the editor. */
  description: string
  cover: File | string | null
  attachments: File[]
  mentions: F0ChatMention[]
  communityId: string | null
  isEvent: boolean
  /** ISO. Only meaningful while `isEvent`. */
  eventStartsAt: string
  eventLocation: string
  allowCommentsAndReactions: boolean
  sendNotifications: boolean
  requireAction: boolean
}

/** What the form reports as wrong, keyed by field. */
export type MockPostErrors = Partial<
  Record<"title" | "description" | "communityId" | "cover", string>
>

export type MockPostComposerProps = {
  /** Decides the header's title and whether "Save as draft" is offered. */
  mode?: "create" | "edit"
  /**
   * Which flavour of post. `event` opens with the event block already on and
   * its toggle hidden — you don't turn an event back into an announcement half
   * way through writing it, you start again.
   */
  variant?: "post" | "event"
  initialValues?: Partial<MockPostDraft>
  /** ONLY the communities the user may post in. F0 offers what it is given;
   * filtering by permission is the host's job. */
  communities: MockCommunityOption[]

  /** Publish now. The one handler that is required — a composer that cannot
   * publish is a form with no verb. */
  onPublish: (draft: MockPostDraft) => void | Promise<void>
  /** Publish later. Omit and the "Schedule post" action isn't offered. */
  onSchedule?: (draft: MockPostDraft, at: string) => void | Promise<void>
  /** Keep without publishing. Omit and "Save as draft" isn't offered. */
  onSaveDraft?: (draft: MockPostDraft) => void | Promise<void>
  onCancel?: () => void

  searchMembers?: (query: string) => Promise<F0ChatUser[]>
  /**
   * Whether the "Require action" block is offered at all. It sits behind a
   * feature flag in the product, and a flag is exactly a prop the host owns.
   * @default false
   */
  requiredActionsEnabled?: boolean
}
