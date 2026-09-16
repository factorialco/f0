/**
 * Copy for the community demo screens — the post composer, the post page, and
 * the shelf's host-supplied action menus.
 *
 * NOT in the shipped dictionary, on purpose. `TranslationsType` is deep-REQUIRED
 * and `I18nProviderProps.translations` is not optional, so every key in
 * `defaultTranslations` is a key every consuming app must hand-write. None of
 * this copy is reachable from a component f0 ships: these screens exist to show
 * what an ApplicationFrame hosting a community channel looks like, and a host
 * builds them from its own product. Charging every consumer ~70 mandatory keys
 * for a Storybook demo is the wrong trade.
 *
 * Read by property rather than by key string, so a typo is a type error instead
 * of a warning and a raw key on screen. Literals are fine here:
 * `.scripts/check-untranslated-copy.ts` excludes `mocks/` for this reason.
 */
export const mockCopy = {
  composer: {
    createPost: "Create post",
    createEvent: "Create event",
    editPost: "Edit post",
    basicInformation: "Basic information",
    postSettings: "Post settings",
    // Cover
    postCover: "Post cover",
    addMediaSubtitle: "any image, video or GIF",
    addMediaSize: "1200x600px",
    // Title + body
    title: "Title",
    titlePlaceholder: "e.g. World Mental Health Day",
    description: "Description",
    descriptionPlaceholder: "Share what's special about it",
    attachmentsSizePerPost: "Up to 150 MB in attachments per post",
    // Event
    isEventLabel: "This is an event",
    isEventDescription:
      "Select this to include a date, time, and location for this event.",
    eventStartDate: "Event start date",
    eventLocation: "Event location",
    eventLocationPlaceholder: "Where will this take place?",
    // Required action
    requireAction: "Require action",
    requireActionDescription:
      "Select how you want to track that users have taken the required action",
    actionType: "Action type",
    actionTypePlaceholder: "Select action type",
    actionTypeAcknowledge: "Acknowledge post",
    actionTypeAcknowledgeDescription: "Employees read and acknowledge the post",
    actionTypeWatchVideo: "Watch video",
    actionTypeWatchVideoDescription: "Employees watch the entire video",
    actionTypeClickedLink: "Clicked a link",
    actionTypeClickedLinkDescription:
      "Employees click the first link in the post",
    actionTypeComingSoon: "Coming soon",
    // Publish / schedule / draft
    continue: "Continue",
    publishTitle: "Publish",
    publishDescription:
      "When publishing the post, it will be visible in the dashboard of each employee.",
    publish: "Publish",
    selectCommunity: "Select community",
    allowCommentsAndReactions: "Allow comments and reactions.",
    sendEmailNotification: "Send email notification",
    schedulePost: "Schedule post",
    scheduleDate: "Date",
    scheduleTime: "Time",
    confirm: "Confirm",
    cancel: "Cancel",
    saveAsDraft: "Save as draft",
    save: "Save",
    scheduledSuccess: "The post has been scheduled",
    draftSuccess: "The post has been saved as draft",
  },
  detail: {
    postActions: "Post actions",
    edit: "Edit post",
    delete: "Delete post",
    deleteDescription:
      "Are you sure you want to delete this post? This action cannot be undone.",
    proceed: "Proceed",
    turnInteractionsOff: "Turn comments and reactions off",
    turnInteractionsOn: "Turn comments and reactions on",
    insights: "Insights",
    // Visits
    visits: {
      one: "Visit",
      other: "Visits",
    },
    postViews: "Post views",
    anonymous: "Anonymous",
    // Comments
    comments: {
      one: "{{count}} comment",
      other: "{{count}} comments",
    },
    commentPlaceholder: "Click here to write a comment...",
    submit: "Submit",
    deleteComment: "Delete comment",
    deleteCommentDescription:
      "Are you sure you want to delete this comment? This action cannot be undone.",
    editComment: "Edit",
    // Acknowledge
    acknowledgeRequired: "Post acknowledgement required",
    acknowledge: "I acknowledge",
    acknowledgeLater: "Acknowledge later",
    acknowledgedOn: "Acknowledged on {{date}}, at {{time}}",
    // The first crumb of an open post — the product's "Inicio".
    home: "Home",
  },
  /**
   * Menus the SHELF renders but the HOST fills: `scheduledActions` and
   * `draftActions` hand f0 a label (`F0ChatShelfAction.label`), so this wording
   * is the demo host's, not f0's. `unpinPost` is the exception and stays in the
   * dictionary — the shelf prints that one itself.
   */
  shelf: {
    pinPost: "Pin post",
    publishNow: "Publish now",
    cancelScheduled: "Cancel",
    publishDraft: "Publish",
    deleteDraft: "Delete draft",
    /** The preview's bar, e.g. "Publishes 4 Jun at 09:00". */
    publishesAt: "Publishes {{when}}",
  },
} as const

/** `{{name}}` substitution — the one thing `i18n.t`'s args did for this copy. */
export const fill = (
  template: string,
  args: Record<string, string | number>
): string =>
  Object.entries(args).reduce(
    (out, [key, value]) => out.replace(`{{${key}}}`, String(value)),
    template
  )
