import { format } from "date-fns"
import { useMemo, useRef, useState, type ReactNode } from "react"
import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { F0RichTextDisplay } from "@/components/RichText/F0RichTextDisplay/F0RichTextDisplay"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { type DropdownItem } from "@/experimental/Navigation/Dropdown/internal"
import {
  Building,
  Calendar,
  Delete,
  Download,
  EllipsisHorizontal,
  FileFilled,
  Pencil,
  Sparkles,
  CrossedCircle,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { useDateFnsLocale } from "@/lib/providers/l10n"
import { cn } from "@/lib/utils"
import { isVideo } from "@/sds/Home/Communities/Post/CommunityPost/video"
import { Reactions } from "@/sds/social/Reactions"
import { MockPostAcknowledgeBar } from "./MockPostAcknowledgeBar"
import { MockPostComments } from "./MockPostComments"
import { type MockPostDetailProps } from "./mockPostDetailTypes"
import { MockPostVisits } from "./MockPostVisits"

/**
 * A post, opened. The destination rather than a way to one — so unlike the feed
 * card it clamps nothing, hides nothing behind a "See more", and carries its
 * whole comment thread.
 *
 * The layout is the product's, feature for feature: the overflow menu above a
 * full-bleed cover, then a fixed reading column holding the title under its
 * short red rule, the event tags, the body, the attachment chips and — at the
 * BOTTOM, which surprises everyone — the author's signature. Visits, reactions
 * and comments follow, and an acknowledgement bar pins itself to the foot when
 * the post asks for one.
 */
export const MockPostDetail = ({
  post,
  community,
  comments,
  visits,
  currentUser,
  focusComment,
  onReact,
  onLoadReactionUsers,
  onCreateComment,
  onEditComment,
  onDeleteComment,
  onAcknowledge,
  onEdit,
  onDelete,
  onToggleComments,
  onOpenInsights,
  onClose,
  searchMembers,
  onDismissAttempt,
}: MockPostDetailProps): ReactNode => {
  const i18n = useI18n()
  const locale = useDateFnsLocale()
  const commentInputRef = useRef<HTMLDivElement>(null)
  const [confirmingDelete, setConfirmingDelete] = useState(false)

  const interactionsOn = post.allowCommentsAndReactions !== false
  const acknowledgePending =
    !!post.requiredAction && !post.requiredAction.completedAt

  const menuItems = useMemo<DropdownItem[]>(() => {
    const items: DropdownItem[] = []
    if (onEdit) {
      items.push({
        label: i18n.t("communities.detail.edit"),
        icon: Pencil,
        onClick: onEdit,
      })
    }
    if (onToggleComments) {
      items.push({
        label: i18n.t(
          interactionsOn
            ? "communities.detail.turnInteractionsOff"
            : "communities.detail.turnInteractionsOn"
        ),
        icon: CrossedCircle,
        onClick: () => void onToggleComments(),
      })
    }
    if (onOpenInsights) {
      items.push({
        label: i18n.t("communities.detail.insights"),
        icon: Sparkles,
        onClick: onOpenInsights,
      })
    }
    if (onDelete) {
      items.push({
        label: i18n.t("communities.detail.delete"),
        icon: Delete,
        critical: true,
        onClick: () => setConfirmingDelete(true),
      })
    }
    return items
  }, [i18n, interactionsOn, onEdit, onToggleComments, onOpenInsights, onDelete])

  const canManage = post.canManage !== false && menuItems.length > 0
  const hasVideoCover = !!post.mediaUrl && isVideo(post.mediaUrl)

  const requestClose = () => {
    if (!onClose) {
      return
    }
    // F0 reports; the host decides whether leaving is allowed. See
    // `onDismissAttempt` — blocking navigation is the host's router, not ours.
    if (onDismissAttempt && !onDismissAttempt({ acknowledgePending })) {
      return
    }
    onClose()
  }

  return (
    <div
      className="relative flex w-full flex-col"
      data-testid="community-post-detail"
    >
      <div className="flex flex-col items-center gap-6 pb-10">
        {/* The overflow menu sits ABOVE the cover, right-aligned to the reading
            column — not in a header bar. The way OUT is the page header's
            breadcrumb back to Home, as in the product; a close button here read
            as a dialog's, on something that is a page. */}
        {canManage ? (
          <div className="flex w-full max-w-[600px] items-center justify-end gap-1 px-4 pt-4">
            <Dropdown items={menuItems}>
              <F0Button
                variant="outline"
                size="md"
                hideLabel
                icon={EllipsisHorizontal}
                label={i18n.t("communities.detail.postActions")}
              />
            </Dropdown>
          </div>
        ) : null}

        {/* The cover breaks OUT of the reading column — full width, capped at
            300px, `contain` so a portrait photo is letterboxed rather than
            cropped through someone's face. */}
        {post.mediaUrl && !post.event ? (
          <div className="w-full px-4">
            {hasVideoCover ? (
              <video
                controls
                preload="none"
                className="mx-auto w-full max-w-[600px] rounded-lg"
                src={post.mediaUrl}
              />
            ) : (
              <img
                loading="lazy"
                alt=""
                src={post.mediaUrl}
                className="max-h-[300px] w-full rounded-lg object-contain"
              />
            )}
          </div>
        ) : null}

        <div className="w-full max-w-[600px] px-4">
          {/* Title + the 30px red rule under it — the single most recognisable
              thing about this screen. */}
          <p className="whitespace-pre-line break-words text-2xl font-medium text-f1-foreground">
            {post.title}
          </p>
          <div className="my-8 w-[30px] border-0 border-b-2 border-solid border-f1-border-critical-bold" />

          {post.event ? (
            <div className="mb-8 flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 rounded-md bg-f1-background-secondary px-2.5 py-1 text-sm text-f1-foreground-secondary">
                <F0Icon icon={Calendar} size="sm" />
                {format(new Date(post.event.date), "PPPPp", { locale })}
              </span>
              {post.event.place ? (
                <span className="flex items-center gap-1.5 rounded-md bg-f1-background-secondary px-2.5 py-1 text-sm text-f1-foreground-secondary">
                  <F0Icon icon={Building} size="sm" />
                  {post.event.place}
                </span>
              ) : null}
            </div>
          ) : null}

          {post.description ? (
            <F0RichTextDisplay
              content={post.description}
              className="FactorialOneTextEditor break-words"
            />
          ) : null}

          {post.attachments && post.attachments.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-3">
              {post.attachments.map((attachment) => (
                <a
                  key={attachment.id}
                  href={attachment.url}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="flex max-w-[240px] items-center gap-3 rounded-lg border border-solid border-f1-border-secondary px-3 py-2.5 text-sm text-f1-foreground-secondary no-underline transition-colors hover:bg-f1-background-hover"
                >
                  <F0Icon icon={FileFilled} size="sm" />
                  <span className="min-w-0 flex-1 truncate">
                    {attachment.filename}
                  </span>
                  <F0Icon icon={Download} size="sm" />
                </a>
              ))}
            </div>
          ) : null}

          {/* The signature is at the FOOT of the body, not the head. This screen
              has no author header — you arrived because you already knew what
              you were opening. */}
          <p className="pt-12 text-sm text-f1-foreground-secondary">
            {post.author ? `${post.author.name} — ` : ""}
            {format(new Date(post.createdAt), "PPP", { locale })}
            {community.title ? (
              <span className="text-f1-foreground-tertiary">
                {" · "}
                {community.title}
              </span>
            ) : null}
          </p>

          <MockPostVisits visits={visits} />

          {interactionsOn ? (
            <>
              {/* No `action` on the reactions bar: unlike the feed card, the
                  detail has the comment box itself a screen below, so a button
                  that scrolls you to it is a button that says nothing. */}
              <div className="pb-8 pt-2">
                <Reactions
                  items={(post.reactions ?? []).map((reaction) => ({
                    emoji: reaction.emoji,
                    initialCount: reaction.count,
                    hasReacted: reaction.reactedByMe,
                    users: reaction.users?.map((user) => ({ name: user.name })),
                    loadUsers: onLoadReactionUsers
                      ? async () =>
                          (await onLoadReactionUsers(reaction.emoji)).map(
                            (user) => ({ name: user.name })
                          )
                      : undefined,
                  }))}
                  onInteraction={onReact}
                />
              </div>

              <MockPostComments
                ref={commentInputRef}
                comments={comments}
                currentUser={currentUser}
                autoFocus={focusComment}
                onCreateComment={onCreateComment}
                onEditComment={onEditComment}
                onDeleteComment={onDeleteComment}
                searchMembers={searchMembers}
              />
            </>
          ) : null}
        </div>
      </div>

      {post.requiredAction ? (
        <MockPostAcknowledgeBar
          requiredAction={post.requiredAction}
          onAcknowledge={onAcknowledge}
          onLater={onClose ? requestClose : undefined}
        />
      ) : null}

      {confirmingDelete && onDelete ? (
        <DeletePostDialog
          onCancel={() => setConfirmingDelete(false)}
          onConfirm={async () => {
            setConfirmingDelete(false)
            await onDelete()
          }}
        />
      ) : null}
    </div>
  )
}

/** Split out so the detail body doesn't carry the dialog's imports on a screen
 * that only ever shows it after a click. */
const DeletePostDialog = ({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void
  onConfirm: () => void | Promise<void>
}): ReactNode => {
  const i18n = useI18n()
  return (
    <div
      role="alertdialog"
      aria-label={i18n.t("communities.detail.delete")}
      // `fixed`, not `absolute`: the post is as tall as it is, and a
      // confirmation centred in a long article lands off-screen.
      className={cn(
        "fixed inset-0 z-30 flex items-center justify-center bg-f1-background-overlay p-6"
      )}
    >
      <div className="flex w-full max-w-sm flex-col gap-3 rounded-xl bg-f1-background p-5 shadow-lg">
        <p className="text-lg font-medium text-f1-foreground">
          {i18n.t("communities.detail.delete")}
        </p>
        <p className="text-sm text-f1-foreground-secondary">
          {i18n.t("communities.detail.deleteDescription")}
        </p>
        <div className="flex justify-end gap-2 pt-1">
          <F0Button
            variant="outline"
            size="md"
            label={i18n.t("communities.composer.cancel")}
            onClick={onCancel}
          />
          <F0Button
            variant="critical"
            size="md"
            label={i18n.t("communities.detail.proceed")}
            onClick={() => void onConfirm()}
          />
        </div>
      </div>
    </div>
  )
}
