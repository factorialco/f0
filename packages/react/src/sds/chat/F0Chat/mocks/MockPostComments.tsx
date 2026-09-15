import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Button } from "@/components/F0Button"
import { useI18n } from "@/lib/providers/i18n"
import { type F0ChatMention, type F0ChatUser } from "../types"
import { MockPostComment } from "./MockPostComment"
import { type MockPostThread } from "./mockPostDetailTypes"
import { splitName } from "./mockPostUtils"

/**
 * The comment thread: a count, a red rule, the box you write in, and the
 * comments themselves — in that order.
 *
 * The BOX IS AT THE TOP and the newest comment is directly under it, which is
 * the product's arrangement. It reads oddly against a chat, where the newest is
 * at the bottom; but a post's thread is something you skim the top of and
 * leave, not something you follow down.
 */
export const MockPostComments = forwardRef<
  HTMLDivElement,
  {
    comments: MockPostThread
    currentUser: F0ChatUser
    autoFocus?: boolean
    onCreateComment?: (
      text: string,
      mentions?: F0ChatMention[]
    ) => void | Promise<void>
    onEditComment?: (id: string, text: string) => void | Promise<void>
    onDeleteComment?: (id: string) => void | Promise<void>
    searchMembers?: (query: string) => Promise<F0ChatUser[]>
  }
>(function MockPostComments(
  {
    comments,
    currentUser,
    autoFocus,
    onCreateComment,
    onEditComment,
    onDeleteComment,
  },
  ref
): ReactNode {
  const i18n = useI18n()
  const [draft, setDraft] = useState("")
  const [saving, setSaving] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const { firstName, lastName } = splitName(currentUser.name)

  // Once, on mount. `preventScroll` then an explicit `scrollIntoView`: focusing
  // a textarea inside a scroll container jumps it to the top of the viewport,
  // which puts the box under the panel's own header.
  useEffect(() => {
    if (!autoFocus) {
      return
    }
    const node = inputRef.current
    if (!node) {
      return
    }
    node.focus({ preventScroll: true })
    node.scrollIntoView({ block: "center" })
  }, [autoFocus])

  const submit = async () => {
    if (!onCreateComment || draft.trim().length === 0) {
      return
    }
    setSaving(true)
    try {
      await onCreateComment(draft.trim())
      setDraft("")
    } finally {
      setSaving(false)
    }
  }

  return (
    <section aria-label={i18n.t("communities.detail.postViews")}>
      <p className="text-lg font-semibold text-f1-foreground">
        {i18n.t(
          comments.totalCount === 1
            ? "communities.detail.comments.one"
            : "communities.detail.comments.other",
          { count: comments.totalCount }
        )}
      </p>
      <div className="my-8 w-[30px] border-0 border-b-2 border-solid border-f1-border-critical-bold" />

      {onCreateComment ? (
        <div ref={ref} className="flex gap-3 pb-6">
          <F0AvatarPerson
            firstName={firstName}
            lastName={lastName}
            src={
              currentUser.avatar && "src" in currentUser.avatar
                ? (currentUser.avatar.src ?? undefined)
                : undefined
            }
          />
          <div className="flex min-w-0 flex-1 flex-col gap-3 rounded-lg bg-f1-background-secondary px-4 py-3">
            <textarea
              ref={inputRef}
              aria-label={i18n.t("communities.detail.commentPlaceholder")}
              placeholder={i18n.t("communities.detail.commentPlaceholder")}
              value={draft}
              disabled={saving}
              onChange={(event) => setDraft(event.target.value)}
              className="min-h-16 w-full resize-none border-0 bg-transparent text-sm text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
            />
            <div className="flex justify-end">
              <F0Button
                variant="outline"
                size="md"
                label={i18n.t("communities.detail.submit")}
                onClick={() => void submit()}
                disabled={saving || draft.trim().length === 0}
              />
            </div>
          </div>
        </div>
      ) : null}

      {/* Newest first — the reordering the product does client-side, made part
          of the contract instead: the host hands them over in whatever order
          its API returns, and this is what the reader sees. */}
      <ul className="m-0 flex list-none flex-col p-0">
        {[...comments.items]
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((comment) => (
            <MockPostComment
              key={comment.id}
              comment={comment}
              onEdit={onEditComment}
              onDelete={onDeleteComment}
            />
          ))}
      </ul>

      {comments.hasMore ? (
        <div className="flex justify-center pt-2">
          <F0Button
            variant="ghost"
            size="md"
            label={i18n.t("actions.seeMore")}
            onClick={comments.loadMore}
            loading={comments.loading}
          />
        </div>
      ) : null}
    </section>
  )
})
