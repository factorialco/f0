import { useMemo, useRef, useState, type ReactNode } from "react"

import { Calendar, FileFilled } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"
import { F0Form, useF0Form } from "@/patterns/F0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"

import { PublishDialog } from "./MockPublishDialog"
import {
  postFormSchema,
  postSections,
  type PostFormValues,
} from "./mockPostSchema"
import { ScheduleDialog } from "./MockScheduleDialog"
import {
  type MockPostComposerProps,
  type MockPostDraft,
} from "./mockPostComposerTypes"

/**
 * The rich text field's value: the HTML plus the ids it mentions. The two
 * travel together because a mention is only a mention if the id behind the
 * chip survives — the host needs both to notify anyone.
 */
type RichTextValue = { value: string; mentionIds?: string[] }

/** The form's own shape, before the publish step fills in the rest. */
const emptyValues = (variant: "post" | "event"): PostFormValues =>
  ({
    cover: undefined,
    title: "",
    description: { value: "", mentionIds: [] },
    communityId: undefined,
    isEvent: variant === "event",
    eventStartsAt: undefined,
    eventLocation: "",
    requireAction: false,
    actionType: undefined,
  }) as unknown as PostFormValues

/** A `Date`, an ISO string or a timestamp as ISO — `undefined` if it is none of
 * those, or a date that doesn't exist. */
const toIsoDate = (value: unknown): string | undefined => {
  if (value === null || value === undefined || value === "") return undefined
  const date =
    value instanceof Date
      ? value
      : typeof value === "string" || typeof value === "number"
        ? new Date(value)
        : undefined
  return date && !Number.isNaN(date.getTime()) ? date.toISOString() : undefined
}

const toDraft = (values: PostFormValues): MockPostDraft => {
  const body = values.description as RichTextValue | undefined
  return {
    title: values.title ?? "",
    description: body?.value ?? "",
    cover: (values.cover as File | string | null | undefined) ?? null,
    attachments: [],
    // Only the ids survive the editor; the host resolves them back to people.
    mentions: (body?.mentionIds ?? []).map((id) => ({ id, name: "" })),
    communityId: values.communityId ?? null,
    isEvent: !!values.isEvent,
    // The picker hands back a Date; a form rehydrated from `initialValues` can
    // still be holding the ISO string it was given. Falling straight through to
    // `now` on anything that isn't a Date silently loses the date the user
    // picked, and an event dated "now" looks like it worked.
    eventStartsAt: toIsoDate(values.eventStartsAt) ?? new Date().toISOString(),
    eventLocation: values.eventLocation ?? "",
    requireAction: !!values.requireAction,
    // The audience decisions belong to the publish dialog, not the form — the
    // caller merges them over these defaults.
    allowCommentsAndReactions: true,
    sendNotifications: false,
  }
}

/**
 * Writing a post — the product's `/dashboard/post/new`, as a component.
 *
 * An {@link F0Dialog} over the page you were reading, rather than a route of
 * its own: writing a post is a detour from a community, and coming back to
 * exactly where you left is worth more here than a URL is.
 *
 * The fields are an {@link F0Form}, so they get what every other form in the
 * product gets — consistent field chrome, error placement and focus management,
 * `renderIf` instead of ad-hoc conditionals, and zod as the single description
 * of what a valid post is.
 *
 * The dialog's footer owns the three ways out, because they are not "submit":
 * they are three different decisions about WHEN this goes out. So the form's
 * own submit button is hidden and the footer drives it through `useF0Form`'s
 * ref — which also means an invalid form surfaces its own errors instead of
 * opening the publish step over a half-written post.
 */
export const MockPostComposer = ({
  mode = "create",
  variant = "post",
  initialValues,
  communities,
  onPublish,
  onSchedule,
  onSaveDraft,
  onCancel,
  searchMembers,
  requiredActionsEnabled = false,
}: MockPostComposerProps): ReactNode => {
  const i18n = useI18n()
  const { formRef, submit } = useF0Form()
  const [publishOpen, setPublishOpen] = useState(false)
  const [scheduleOpen, setScheduleOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  /** Where the header's choice is parked while the form validates. Read only
   * inside `onSubmit`, which is the only place that knows the values are good. */
  const intent = useRef<"publish" | "schedule" | "draft">("publish")
  const scheduledFor = useRef<string | null>(null)
  const publishOpenRef = useRef(false)
  /** Mirrors the audience decisions the publish dialog collects, so the dialog
   * can render them without re-rendering the page behind it. */
  const [audience, setAudience] = useState({
    communityId:
      initialValues?.communityId ??
      (communities.length === 1 ? communities[0].id : null),
    allowCommentsAndReactions:
      initialValues?.allowCommentsAndReactions !== false,
    sendNotifications: !!initialValues?.sendNotifications,
  })

  // The `@` popover's people. `users` seeds it before a query is typed; the
  // callback answers each one after.
  const mentionsConfig = useMemo(
    () =>
      searchMembers
        ? {
            users: [],
            onMentionQueryStringChanged: async (query: string) =>
              (await searchMembers(query)).map((person) => ({
                id: person.id,
                label: person.name,
                // Only a photo avatar has a src; a generated one is drawn from
                // the name, which the popover does itself.
                image_url:
                  person.avatar?.type === "person"
                    ? person.avatar.src
                    : undefined,
              })),
          }
        : undefined,
    [searchMembers]
  )

  const schema = useMemo(
    () =>
      postFormSchema({
        t: i18n.t,
        communities,
        variant,
        requiredActionsEnabled,
        mentionsConfig,
      }),
    [i18n, communities, variant, requiredActionsEnabled, mentionsConfig]
  )

  const defaultValues = useMemo<PostFormValues>(() => {
    const empty = emptyValues(variant)
    return {
      ...empty,
      ...(initialValues
        ? {
            title: initialValues.title ?? empty.title,
            description: {
              value: initialValues.description ?? "",
              mentionIds: [],
            },
            cover: initialValues.cover ?? undefined,
            // `?? empty.x`, not a bare read: opening the composer inside a
            // community passes ONLY `communityId`, and a spread of the rest
            // would write `undefined` over these two — which the schema
            // rejects, on fields `renderIf` keeps off screen, so the form
            // refuses to submit with nowhere to show why.
            isEvent: initialValues.isEvent ?? empty.isEvent,
            eventStartsAt: initialValues.eventStartsAt
              ? new Date(initialValues.eventStartsAt)
              : undefined,
            eventLocation: initialValues.eventLocation ?? empty.eventLocation,
            requireAction: initialValues.requireAction ?? empty.requireAction,
            actionType: initialValues.requireAction ? "acknowledge" : undefined,
          }
        : {}),
      // One community to choose from is not a choice.
      communityId:
        initialValues?.communityId ??
        (communities.length === 1 ? communities[0].id : undefined),
    } as unknown as PostFormValues
  }, [variant, initialValues, communities])

  const formDefinition = useF0FormDefinition({
    name: "community-post",
    schema,
    sections: postSections(i18n.t),
    defaultValues,
    // Reached only once the schema is satisfied, which is what lets the header
    // open the publish step on a form it already knows is valid.
    onSubmit: async ({ data }) => {
      const draft = { ...toDraft(data as PostFormValues), ...audience }

      if (intent.current === "publish") {
        // First pass: the audience still has to be collected. Opening the
        // publish step is what "Continue" means.
        if (!publishOpenRef.current) {
          publishOpenRef.current = true
          setPublishOpen(true)
          return { success: true }
        }
        setSubmitting(true)
        try {
          await onPublish(draft)
          publishOpenRef.current = false
          setPublishOpen(false)
        } finally {
          setSubmitting(false)
        }
        return { success: true }
      }

      if (intent.current === "schedule" && onSchedule && scheduledFor.current) {
        setSubmitting(true)
        try {
          await onSchedule(draft, scheduledFor.current)
          setScheduleOpen(false)
        } finally {
          setSubmitting(false)
        }
        return { success: true }
      }

      if (intent.current === "draft" && onSaveDraft) {
        setSubmitting(true)
        try {
          await onSaveDraft(draft)
        } finally {
          setSubmitting(false)
        }
      }
      return { success: true }
    },
    submitConfig: {
      // The header owns the actions — see the component docblock.
      hideSubmitButton: true,
      hideActionBar: true,
    },
  })

  /** Runs the schema, then does the thing. A rejection means validation failed
   * and F0Form has already focused and marked the offending field. */
  const runWithValidation = (next: "publish" | "schedule" | "draft") => {
    intent.current = next
    void submit().catch(() => {})
  }

  // The two ways of NOT publishing yet, both in the footer beside Continue.
  // Given both, `F0Dialog` renders a split button — "Schedule post" with the
  // draft behind its chevron — which keeps a labelled verb on screen instead of
  // an anonymous "⋯". Saving a draft used to live in the dialog's header, where
  // it read as chrome rather than as one of the ways out.
  //
  // An already-published post has nothing to go back to being a draft of.
  const canDraft = onSaveDraft && mode === "create"
  const scheduleItem = onSchedule
    ? {
        value: "schedule",
        label: i18n.t("communities.composer.schedulePost"),
        icon: Calendar,
        onClick: () => setScheduleOpen(true),
      }
    : undefined
  const draftItem = canDraft
    ? {
        value: "draft",
        label: i18n.t("communities.composer.saveAsDraft"),
        icon: FileFilled,
        onClick: () => runWithValidation("draft"),
      }
    : undefined
  const secondaryItems = [scheduleItem, draftItem].filter(
    (item) => item !== undefined
  )
  const secondaryAction =
    secondaryItems.length === 0
      ? undefined
      : secondaryItems.length === 1
        ? // One of them alone is a plain button, which can carry `disabled` —
          // the split button's items cannot (see `F0DialogActionItem`).
          { ...secondaryItems[0], disabled: submitting }
        : secondaryItems

  const closePublish = () => {
    publishOpenRef.current = false
    setPublishOpen(false)
  }

  return (
    <F0Dialog
      isOpen
      onClose={() => onCancel?.()}
      position="center"
      width="lg"
      // A stray click beside the dialog must not bin a half-written post. The
      // close button and Escape still work.
      dismissOnInteractOutside={false}
      title={i18n.t(
        mode === "edit"
          ? "communities.composer.editPost"
          : variant === "event"
            ? "communities.composer.createEvent"
            : "communities.composer.createPost"
      )}
      primaryAction={{
        label: i18n.t("communities.composer.continue"),
        onClick: () => runWithValidation("publish"),
        disabled: submitting,
      }}
      secondaryAction={secondaryAction}
    >
      <div
        className="mx-auto w-full max-w-[600px]"
        data-testid="community-post-composer"
      >
        <F0Form formDefinition={formDefinition} formRef={formRef} />
      </div>

      {publishOpen && (
        <PublishDialog
          communities={communities}
          communityId={audience.communityId}
          allowCommentsAndReactions={audience.allowCommentsAndReactions}
          sendNotifications={audience.sendNotifications}
          submitting={submitting}
          onCommunityChange={(communityId) =>
            setAudience((current) => ({ ...current, communityId }))
          }
          onAllowInteractionsChange={(allowCommentsAndReactions) =>
            setAudience((current) => ({
              ...current,
              allowCommentsAndReactions,
            }))
          }
          onSendNotificationsChange={(sendNotifications) =>
            setAudience((current) => ({ ...current, sendNotifications }))
          }
          onPublish={() => runWithValidation("publish")}
          onClose={closePublish}
        />
      )}

      {scheduleOpen && onSchedule && (
        <ScheduleDialog
          communities={communities}
          communityId={audience.communityId}
          submitting={submitting}
          onCommunityChange={(communityId) =>
            setAudience((current) => ({ ...current, communityId }))
          }
          onConfirm={(at) => {
            scheduledFor.current = at
            runWithValidation("schedule")
          }}
          onClose={() => setScheduleOpen(false)}
        />
      )}
    </F0Dialog>
  )
}
