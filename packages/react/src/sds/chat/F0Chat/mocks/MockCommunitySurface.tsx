"use client"

import { format } from "date-fns"
import { useCallback, useMemo, useState, type ReactNode } from "react"

import { F0ActionBar } from "@/components/F0ActionBar"

import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { LinkProvider } from "@/lib/linkHandler"
import { useI18n } from "@/lib/providers/i18n"
import { useDateFnsLocale } from "@/lib/providers/l10n"
import { Page } from "@/patterns/Navigation/Page"
import { F0Toast } from "@/ui/Toast"

import { isPost, type F0ChatCreatePostInput, type F0ChatPost } from "../types"
import { MockPostComposer } from "./MockPostComposer"
import { type MockPostDraft } from "./mockPostComposerTypes"
import { MockPostDetail } from "./MockPostDetail"
import { ME, SEED_BY_ID } from "./mockSeeds"
import { useMockChatApp } from "./useMockChatApp"

/**
 * What the main content shows while a community channel is open: the post you
 * pressed, or — when there is none — whatever the page normally shows.
 *
 * The post is a PAGE. In the product it is the route `/communities/post/:id`,
 * so here it takes over the main area, in the same `Page` chrome every other
 * screen in the mock uses, while the conversation stays open on its edge: you
 * can keep scrolling the feed, open another post, or answer a message with a
 * post open beside it.
 *
 * Writing one is a DIALOG over whichever of those is behind it, so the detour
 * ends where it started — including on Edit, which returns you to the post.
 *
 * It reads the same store the chat panel writes to. That is the whole reason
 * this works: the panel is not a child of this tree — it is stashed as an
 * element in `setPanelContent` and rendered by `HostedPanelWindow` deep inside
 * `ApplicationFrame` — so anything the two have to agree on has to live
 * somewhere they both already reach.
 */
export const MockCommunitySurface = ({
  fallback,
}: {
  /** The page when no post is open. */
  fallback: ReactNode
}): ReactNode => {
  const { openSurface } = useMockChatApp()
  // Scheduling and saving a draft take the post OUT of the feed's reach, so
  // there is nothing on screen to show for them. This is what says they
  // happened — the mock's stand-in for the product's own confirmation.
  const [notice, setNotice] = useState<string | null>(null)

  // Editing keeps the post it edits on view behind the dialog; writing a new
  // one leaves the ordinary page there.
  const behind =
    openSurface?.kind === "post"
      ? { convId: openSurface.convId, postId: openSurface.postId }
      : openSurface?.kind === "composer" && openSurface.postId
        ? { convId: openSurface.convId, postId: openSurface.postId }
        : null

  return (
    <>
      {openSurface?.kind === "scheduled" ? (
        <ScheduledPreviewPage
          convId={openSurface.convId}
          postId={openSurface.postId}
        />
      ) : behind ? (
        <DetailPage
          convId={behind.convId}
          postId={behind.postId}
          focusComment={
            openSurface?.kind === "post" ? openSurface.focusComment : false
          }
        />
      ) : (
        fallback
      )}

      {openSurface?.kind === "composer" && (
        <ComposerPage
          convId={openSurface.convId}
          postId={openSurface.postId}
          onNotice={setNotice}
        />
      )}

      {notice && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <F0Toast
            title={notice}
            variant="success"
            duration={4000}
            onClose={() => setNotice(null)}
          />
        </div>
      )}
    </>
  )
}

/** Members of the open community, for the `@`-mention popover. */
const useSeedMembers = (convId: string) => {
  const seed = SEED_BY_ID.get(convId)
  return useCallback(
    (query: string) => {
      const needle = query.trim().toLowerCase()
      return Promise.resolve(
        [...(seed?.participants ?? []), ME].filter((person) =>
          needle.length === 0
            ? true
            : person.name.toLowerCase().includes(needle)
        )
      )
    },
    [seed]
  )
}

const DetailPage = ({
  convId,
  postId,
  focusComment,
}: {
  convId: string
  postId: string
  focusComment: boolean
}): ReactNode => {
  const app = useMockChatApp()
  const seed = SEED_BY_ID.get(convId)
  const searchMembers = useSeedMembers(convId)
  const post = app.states[convId]?.messages.find(
    (item): item is F0ChatPost => isPost(item) && item.id === postId
  )

  // The post can vanish under us — deleting it from its own menu is a supported
  // thing to do — so close rather than render a page about nothing.
  if (!post || !seed) return null

  const comments = app.postComments[postId] ?? []
  const visits = app.postVisits[postId] ?? []

  return (
    <Page
      header={<PostBreadcrumb title={post.title} onHome={app.closeSurface} />}
    >
      <MockPostDetail
        post={post}
        community={{ id: seed.id, title: seed.title }}
        currentUser={ME}
        focusComment={focusComment}
        comments={{
          items: comments,
          // The mock materialises at most eight; the counter knows the rest
          // exist, which is exactly what `hasMore` describes.
          totalCount: post.commentCount,
          hasMore: post.commentCount > comments.length,
          loadMore: () => {},
        }}
        visits={{ count: post.viewCount ?? 0, items: visits, canSee: true }}
        onReact={(emoji) => app.toggleReaction(convId, postId, emoji)}
        onCreateComment={(text) => app.createComment(convId, postId, text)}
        onEditComment={(id, text) => app.editComment(postId, id, text)}
        onDeleteComment={(id) => app.deleteComment(convId, postId, id)}
        onAcknowledge={() => app.acknowledgePost(convId, postId)}
        onEdit={
          post.isMine
            ? () => app.openComposerSurface(convId, postId)
            : undefined
        }
        onDelete={
          post.isMine
            ? () => {
                app.deletePost(convId, postId)
                app.closeSurface()
              }
            : undefined
        }
        onToggleComments={
          post.isMine
            ? () => app.togglePostInteractions(convId, postId)
            : undefined
        }
        onClose={app.closeSurface}
        searchMembers={searchMembers}
      />
    </Page>
  )
}

/**
 * A scheduled post, as the community will see it — the SAME page a published
 * post gets, minus everything that hasn't happened.
 *
 * No comments, no reactions, no visits: they don't exist yet, and "0 comments"
 * would be a claim about something nobody has been able to read. In their place
 * a bar saying when it goes out, with the three decisions still open.
 *
 * This is the reason opening a scheduled post lands here rather than in the
 * editor: the author sees what the community will see, before it is too late to
 * change it.
 */
const ScheduledPreviewPage = ({
  convId,
  postId,
}: {
  convId: string
  postId: string
}): ReactNode => {
  const app = useMockChatApp()
  const i18n = useI18n()
  const locale = useDateFnsLocale()
  const seed = SEED_BY_ID.get(convId)
  const scheduled = (app.scheduled[convId] ?? []).find(
    (item) => item.id === postId
  )

  // Publishing or cancelling it from here takes it off the list under our feet.
  if (!scheduled || !seed) return null

  const { input } = scheduled
  const preview: F0ChatPost = {
    type: "post",
    id: scheduled.id,
    createdAt: scheduled.at ?? new Date().toISOString(),
    author: ME,
    isMine: true,
    title: input.title,
    description: input.description,
    commentCount: 0,
    ...(input.event
      ? { event: { ...input.event, mediaUrl: scheduled.coverUrl } }
      : { mediaUrl: scheduled.coverUrl }),
    // What turns the detail into a preview: the whole comments-and-reactions
    // block disappears, which is exactly the block that would be lying.
    allowCommentsAndReactions: false,
    canManage: false,
  }

  const when = scheduled.at
    ? `${format(new Date(scheduled.at), "PPP", { locale })}, ${format(
        new Date(scheduled.at),
        "HH:mm"
      )}`
    : ""

  return (
    <Page
      header={<PostBreadcrumb title={input.title} onHome={app.closeSurface} />}
    >
      <div data-testid="community-scheduled-preview">
        <MockPostDetail
          post={preview}
          community={{ id: seed.id, title: seed.title }}
          currentUser={ME}
          comments={{
            items: [],
            totalCount: 0,
            hasMore: false,
            loadMore: () => {},
          }}
          visits={{ count: 0, items: [], canSee: false }}
          onClose={app.closeSurface}
        />
      </div>

      {/* Pinned to the foot, where an acknowledgement bar would be: the same
          slot, because it answers the same kind of question — what is still
          owed on this post. */}
      <F0ActionBar
        isOpen
        label={i18n.t("chat.community.publishesAt", { when })}
        primaryActions={[
          {
            label: i18n.t("chat.community.publishNow"),
            onClick: () => {
              app.publishScheduledNow(convId, postId)
              app.closeSurface()
            },
          },
        ]}
        secondaryActions={[
          {
            label: i18n.t("communities.composer.editPost"),
            onClick: () => app.openComposerSurface(convId, postId),
          },
          {
            label: i18n.t("chat.community.cancelScheduled"),
            onClick: () => {
              app.cancelScheduled(convId, postId)
              app.closeSurface()
            },
          },
        ]}
      />
    </Page>
  )
}

/**
 * The header an open post gets: the module crumb back to Home, then the post's
 * own title — the product's `Inicio > <post>`, and the way OUT of the post.
 *
 * The crumb is a real link, routed through the app's `LinkProvider`. The mock
 * has no router behind it, so it supplies one for this header alone — left to
 * follow its own href, the crumb would navigate Storybook's iframe to `/`.
 */
const PostBreadcrumb = ({
  title,
  onHome,
}: {
  title: string
  onHome: () => void
}): ReactNode => {
  const i18n = useI18n()
  return (
    <LinkProvider
      component={(props, ref) => (
        <a
          {...props}
          ref={ref}
          onClick={(event) => {
            event.preventDefault()
            onHome()
          }}
        />
      )}
    >
      <PageHeader
        module={{
          id: "home",
          name: i18n.t("communities.detail.home"),
          href: "/",
        }}
        breadcrumbs={[{ id: "post", label: title }]}
        hideOneSwitch
      />
    </LinkProvider>
  )
}

/**
 * The form's draft as the runtime's create input. One function for all three
 * ways out, so publishing, scheduling and saving a draft cannot drift into
 * building three different posts.
 */
const toCreateInput = (
  draft: MockPostDraft,
  convId: string
): F0ChatCreatePostInput => ({
  title: draft.title,
  description: draft.description,
  // A string cover is one already uploaded (an edit); only a File is new, and
  // uploading is all `publishPost` can do with it.
  cover: draft.cover instanceof File ? draft.cover : undefined,
  communityId: draft.communityId ?? convId,
  event: draft.isEvent
    ? {
        title: draft.title,
        date: draft.eventStartsAt,
        place: draft.eventLocation || undefined,
      }
    : undefined,
  allowCommentsAndReactions: draft.allowCommentsAndReactions,
  sendNotifications: draft.sendNotifications,
  requiredAction: draft.requireAction ? "acknowledge" : undefined,
})

const ComposerPage = ({
  convId,
  postId,
  onNotice,
}: {
  convId: string
  postId?: string
  /** Says what happened when the result isn't visible on the page. */
  onNotice: (message: string) => void
}): ReactNode => {
  const app = useMockChatApp()
  const i18n = useI18n()
  const searchMembers = useSeedMembers(convId)

  const editing = postId
    ? app.states[convId]?.messages.find(
        (item): item is F0ChatPost => isPost(item) && item.id === postId
      )
    : undefined

  // The THIRD case, and the one that is neither of the other two: something
  // written but not published, so there is no post to edit — only the input it
  // will become. Saving must update the schedule, not publish it.
  const editingScheduled =
    !editing && postId
      ? (app.scheduled[convId] ?? []).find((item) => item.id === postId)
      : undefined

  // Only the communities this user may post in — the same filtering a real host
  // does with its policies.
  const communities = useMemo(
    () =>
      [...SEED_BY_ID.values()]
        .filter((s) => s.type === "community" && s.canPost)
        .map((s) => ({ id: s.id, title: s.title })),
    []
  )

  return (
    <MockPostComposer
      mode={editing || editingScheduled ? "edit" : "create"}
      variant={
        editing?.event || editingScheduled?.input.event ? "event" : "post"
      }
      communities={communities}
      requiredActionsEnabled
      searchMembers={searchMembers}
      initialValues={
        editing
          ? {
              title: editing.title,
              description: editing.description ?? "",
              // An event keeps its cover on the event, not beside the body.
              cover: editing.event?.mediaUrl ?? editing.mediaUrl ?? null,
              communityId: convId,
              isEvent: !!editing.event,
              eventStartsAt: editing.event?.date ?? new Date().toISOString(),
              eventLocation: editing.event?.place ?? "",
              allowCommentsAndReactions:
                editing.allowCommentsAndReactions !== false,
              requireAction: !!editing.requiredAction,
            }
          : editingScheduled
            ? {
                title: editingScheduled.input.title,
                description: editingScheduled.input.description ?? "",
                cover: editingScheduled.coverUrl ?? null,
                communityId: convId,
                isEvent: !!editingScheduled.input.event,
                eventStartsAt:
                  editingScheduled.input.event?.date ??
                  new Date().toISOString(),
                eventLocation: editingScheduled.input.event?.place ?? "",
                allowCommentsAndReactions:
                  editingScheduled.input.allowCommentsAndReactions !== false,
                requireAction: !!editingScheduled.input.requiredAction,
              }
            : { communityId: convId }
      }
      onPublish={async (draft: MockPostDraft) => {
        // Saving a scheduled post keeps it scheduled. "Publish" here means
        // "save what I changed", not "send it out now" — that verb lives in the
        // scheduled list, where the reader can see what they are releasing.
        if (editingScheduled) {
          app.updateScheduled(convId, editingScheduled.id, {
            ...toCreateInput(draft, convId),
            publishedAt: editingScheduled.at,
          })
          app.closeSurface()
          onNotice(i18n.t("communities.composer.scheduledSuccess"))
          return
        }
        if (editing) {
          app.updatePost(convId, editing.id, {
            title: draft.title,
            description: draft.description,
            cover: draft.cover,
            event: draft.isEvent
              ? {
                  title: draft.title,
                  date: draft.eventStartsAt,
                  place: draft.eventLocation || undefined,
                }
              : null,
            allowCommentsAndReactions: draft.allowCommentsAndReactions,
            requiredAction: draft.requireAction ? "acknowledge" : null,
          })
          // Back to the post you were editing, not to the page behind it.
          app.openPostSurface(convId, editing.id, false)
          return
        }
        await app.publishPost(
          draft.communityId ?? convId,
          toCreateInput(draft, convId)
        )
        app.closeSurface()
      }}
      // A scheduled post and a draft are both real posts that are NOT visible
      // yet, which is exactly what `publishedAt` says: an ISO string schedules,
      // `null` keeps it as a draft. Neither joins the feed, so neither shows up
      // in the transcript — only the notice does.
      onSchedule={async (draft, at) => {
        await app.publishPost(draft.communityId ?? convId, {
          ...toCreateInput(draft, convId),
          publishedAt: at,
        })
        app.closeSurface()
        onNotice(i18n.t("communities.composer.scheduledSuccess"))
      }}
      onSaveDraft={async (draft) => {
        await app.publishPost(draft.communityId ?? convId, {
          ...toCreateInput(draft, convId),
          publishedAt: null,
        })
        app.closeSurface()
        onNotice(i18n.t("communities.composer.draftSuccess"))
      }}
      onCancel={app.closeSurface}
    />
  )
}
