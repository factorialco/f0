import { useState, type ReactNode } from "react"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Button } from "@/components/F0Button"
import { F0RichTextDisplay } from "@/components/RichText/F0RichTextDisplay/F0RichTextDisplay"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { type DropdownItem } from "@/experimental/Navigation/Dropdown/internal"
import { Delete, EllipsisHorizontal, Pencil } from "@/icons/app"
import { getAgo } from "@/lib/date"
import { useI18n } from "@/lib/providers/i18n"
import { useDateFnsLocale } from "@/lib/providers/l10n"
import { type F0ChatPostComment } from "../types"

import { splitName } from "./mockPostUtils"

/**
 * One comment: an avatar beside a grey bubble, with the author's name and the
 * time UNDER the bubble rather than above it — the product's arrangement, and
 * the one that keeps the text the first thing you read.
 *
 * The overflow menu lives INSIDE the bubble, right-aligned, so a thread of
 * comments has one column of text rather than a ragged gutter of controls.
 */
export const MockPostComment = ({
  comment,
  onEdit,
  onDelete,
}: {
  comment: F0ChatPostComment
  onEdit?: (id: string, text: string) => void | Promise<void>
  onDelete?: (id: string) => void | Promise<void>
}): ReactNode => {
  const i18n = useI18n()
  const locale = useDateFnsLocale()
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(comment.text)
  const [confirmingDelete, setConfirmingDelete] = useState(false)
  const [busy, setBusy] = useState(false)

  const { firstName, lastName } = splitName(comment.author.name)
  const canAct = comment.isMine !== false && (!!onEdit || !!onDelete)

  const items: DropdownItem[] = [
    ...(onEdit
      ? [
          {
            label: i18n.t("communities.detail.editComment"),
            icon: Pencil,
            onClick: () => {
              setDraft(comment.text)
              setEditing(true)
            },
          },
        ]
      : []),
    ...(onDelete
      ? [
          {
            label: i18n.t("communities.detail.deleteComment"),
            icon: Delete,
            critical: true,
            onClick: () => setConfirmingDelete(true),
          },
        ]
      : []),
  ]

  const save = async () => {
    if (!onEdit || draft.trim().length === 0) return
    setBusy(true)
    try {
      await onEdit(comment.id, draft)
      setEditing(false)
    } finally {
      setBusy(false)
    }
  }

  return (
    <li className="flex list-none gap-3 py-3">
      <F0AvatarPerson
        firstName={firstName}
        lastName={lastName}
        src={
          comment.author.avatar && "src" in comment.author.avatar
            ? (comment.author.avatar.src ?? undefined)
            : undefined
        }
      />
      <div className="min-w-0 flex-1">
        {editing ? (
          <div className="flex flex-col gap-2 rounded-lg bg-f1-background-secondary px-4 py-3">
            <textarea
              aria-label={i18n.t("communities.detail.editComment")}
              value={draft}
              autoFocus
              disabled={busy}
              onChange={(event) => setDraft(event.target.value)}
              className="min-h-16 w-full resize-none border-0 bg-transparent text-sm text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
            />
            <div className="flex justify-end gap-2">
              <F0Button
                variant="outline"
                size="sm"
                label={i18n.t("communities.composer.cancel")}
                onClick={() => setEditing(false)}
                disabled={busy}
              />
              <F0Button
                variant="default"
                size="sm"
                label={i18n.t("communities.composer.save")}
                onClick={() => void save()}
                disabled={busy || draft.trim().length === 0}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-start justify-between gap-2 rounded-lg bg-f1-background-secondary px-4 py-3">
            <div className="min-w-0 flex-1 whitespace-pre-wrap break-words text-sm text-f1-foreground">
              <F0RichTextDisplay content={comment.text} />
            </div>
            {canAct && items.length > 0 && (
              <Dropdown items={items}>
                <F0Button
                  variant="ghost"
                  size="sm"
                  hideLabel
                  icon={EllipsisHorizontal}
                  label={i18n.t("communities.detail.postActions")}
                />
              </Dropdown>
            )}
          </div>
        )}
        <p className="mt-1.5 text-sm text-f1-foreground-secondary">
          {comment.author.name}
          {", "}
          {getAgo(new Date(comment.createdAt), locale)}
        </p>
      </div>

      {confirmingDelete && onDelete && (
        <div
          role="alertdialog"
          aria-label={i18n.t("communities.detail.deleteComment")}
          className="fixed inset-0 z-40 flex items-center justify-center bg-f1-background-overlay p-6"
        >
          <div className="flex w-full max-w-sm flex-col gap-3 rounded-xl bg-f1-background p-5 shadow-lg">
            <p className="text-lg font-medium text-f1-foreground">
              {i18n.t("communities.detail.deleteComment")}
            </p>
            <p className="text-sm text-f1-foreground-secondary">
              {i18n.t("communities.detail.deleteCommentDescription")}
            </p>
            <div className="flex justify-end gap-2 pt-1">
              <F0Button
                variant="outline"
                size="md"
                label={i18n.t("communities.composer.cancel")}
                onClick={() => setConfirmingDelete(false)}
              />
              <F0Button
                variant="critical"
                size="md"
                label={i18n.t("communities.detail.proceed")}
                onClick={() => {
                  setConfirmingDelete(false)
                  void onDelete(comment.id)
                }}
              />
            </div>
          </div>
        </div>
      )}
    </li>
  )
}
