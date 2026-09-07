import { z } from "zod"

import { type MentionsConfig } from "@/components/RichText/internal"
import { CheckDouble, Link, Video } from "@/icons/app"
import { type TranslationKey } from "@/lib/providers/i18n/i18n-provider-defaults"
import { f0FormField } from "@/patterns/F0Form"
import { type F0SectionConfig } from "@/patterns/F0Form/types"

import { type MockCommunityOption } from "./mockPostComposerTypes"

const BODY_MAX_CHARACTERS = 10_000
const TITLE_MAX_LENGTH = 140
/** The product's own ceiling, printed under the editor. */
export const ATTACHMENTS_MAX_MB = 150

type Copy = (
  key: TranslationKey,
  args?: Record<string, string | number>
) => string

/**
 * The two headings the product splits the form under: what the post SAYS, then
 * what the post IS. They are declared here rather than inline so the field
 * definitions below can name a section without repeating its title.
 */
export const postSections = (t: Copy): Record<string, F0SectionConfig> => ({
  basic: { title: t("communities.composer.basicInformation") },
  settings: { title: t("communities.composer.postSettings") },
})

/**
 * The post form as an F0 schema — the fields, their copy, their validation and
 * the conditions under which each one exists, in one place.
 *
 * Declared as a schema rather than hand-rolled controls so the form gets what
 * F0Form gives every other form in the product: consistent field chrome, error
 * placement and focus management, `renderIf` instead of ad-hoc `&&`, and zod as
 * the single description of what a valid post is.
 */
export const postFormSchema = ({
  t,
  communities,
  variant,
  requiredActionsEnabled,
  mentionsConfig,
}: {
  t: Copy
  communities: MockCommunityOption[]
  variant: "post" | "event"
  requiredActionsEnabled: boolean
  /** Who `@` can reach. Absent ⇒ the editor offers nobody. */
  mentionsConfig?: MentionsConfig
}) =>
  z.object({
    // ── Basic information ───────────────────────────────────────────────────
    cover: f0FormField.file({
      label: t("communities.composer.postCover"),
      description: `${t("communities.composer.addMediaSubtitle")} · ${t(
        "communities.composer.addMediaSize"
      )}`,
      // Images and video only: a post's cover is a picture, and a PDF cover is
      // a PDF nobody can see.
      accept: ["image", "video"],
      optional: true,
      section: "basic",
    }),
    title: f0FormField.text({
      label: t("communities.composer.title"),
      placeholder: t("communities.composer.titlePlaceholder"),
      // `z.string()` accepts "", so without a minimum an empty title is VALID
      // and the form would happily publish an untitled post.
      minLength: 1,
      maxLength: TITLE_MAX_LENGTH,
      section: "basic",
    }),
    description: f0FormField.richText({
      label: t("communities.composer.description"),
      placeholder: t("communities.composer.descriptionPlaceholder"),
      helpText: t("communities.composer.attachmentsSizePerPost"),
      maxCharacters: BODY_MAX_CHARACTERS,
      height: "md",
      // The body travels as an HTML string, so the editor hands back HTML
      // rather than its own document JSON.
      plainHtmlMode: true,
      // Without it the editor still opens an `@` popover — with nobody in it.
      mentionsConfig,
      section: "basic",
    }),
    communityId: f0FormField.select({
      label: t("communities.composer.selectCommunity"),
      placeholder: t("communities.composer.selectCommunity"),
      options: communities.map((community) => ({
        value: community.id,
        label: community.title,
      })),
      section: "basic",
    }),

    // ── Post settings ───────────────────────────────────────────────────────
    // On the dedicated "new event" route the switch is gone: you came here to
    // write an event, and offering to un-event it sends you to the other form
    // without saying so.
    isEvent: f0FormField.boolean({
      label: t("communities.composer.isEventLabel"),
      helpText: t("communities.composer.isEventDescription"),
      optional: true,
      section: "settings",
      renderIf: () => variant !== "event",
    }),
    eventStartsAt: f0FormField.datetime({
      label: t("communities.composer.eventStartDate"),
      section: "settings",
      optional: true,
      renderIf: ({ values }) => variant === "event" || values.isEvent === true,
    }),
    eventLocation: f0FormField.text({
      label: t("communities.composer.eventLocation"),
      placeholder: t("communities.composer.eventLocationPlaceholder"),
      section: "settings",
      optional: true,
      renderIf: ({ values }) => variant === "event" || values.isEvent === true,
    }),
    // An event already asks something of the reader — turning up. Asking them
    // to acknowledge it as well is two obligations for one post.
    requireAction: f0FormField.boolean({
      label: t("communities.composer.requireAction"),
      helpText: t("communities.composer.requireActionDescription"),
      optional: true,
      section: "settings",
      renderIf: ({ values }) =>
        requiredActionsEnabled &&
        variant !== "event" &&
        values.isEvent !== true,
    }),
    actionType: f0FormField.select({
      label: t("communities.composer.actionType"),
      placeholder: t("communities.composer.actionTypePlaceholder"),
      section: "settings",
      optional: true,
      options: [
        {
          value: "acknowledge",
          label: t("communities.composer.actionTypeAcknowledge"),
          description: t(
            "communities.composer.actionTypeAcknowledgeDescription"
          ),
          icon: CheckDouble,
        },
        // Shown disabled so the shape of what's coming is visible — the
        // product's own choice, kept.
        {
          value: "watch_video",
          label: t("communities.composer.actionTypeWatchVideo"),
          description: t(
            "communities.composer.actionTypeWatchVideoDescription"
          ),
          icon: Video,
          disabled: true,
          tag: t("communities.composer.actionTypeComingSoon"),
        },
        {
          value: "clicked_link",
          label: t("communities.composer.actionTypeClickedLink"),
          description: t(
            "communities.composer.actionTypeClickedLinkDescription"
          ),
          icon: Link,
          disabled: true,
          tag: t("communities.composer.actionTypeComingSoon"),
        },
      ],
      renderIf: ({ values }) =>
        requiredActionsEnabled &&
        variant !== "event" &&
        values.isEvent !== true &&
        values.requireAction === true,
    }),
    // NOTE: the audience decisions — who may comment, and whether everyone gets
    // an email — are deliberately NOT fields here. The publish dialog collects
    // them, which is the product's arrangement and the right one: they are
    // decisions about who hears this, made when you are done writing rather
    // than while you write. A hidden field would also be a lie to F0Form, whose
    // `renderIf` decides whether a field EXISTS, not whether it is visible.
  })

export type PostFormValues = z.infer<ReturnType<typeof postFormSchema>>
