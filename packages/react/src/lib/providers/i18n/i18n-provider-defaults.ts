import { i18nCountries } from "./partials/countries"

export const defaultTranslations = {
  common: {
    selectPlaceholder: "Select",
  },
  countries: i18nCountries,
  approvals: {
    history: "Approval history",
    statuses: {
      waiting: "Waiting",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected",
    },
    requiredNumbers: {
      one: "One approval required",
      other: "{{count}} approvals required",
    },
  },
  navigation: {
    sidebar: {
      label: "Main navigation",
      search: "Search",
      tabs: {
        label: "Sidebar sections",
      },
      companySelector: {
        label: "Select a company",
        placeholder: "Select a company",
      },
    },
    previous: "Previous",
    next: "Next",
  },
  inputs: {
    password: {
      show: "Show password",
      hide: "Hide password",
    },
    private: {
      show: "Show {{label}}",
      hide: "Hide {{label}}",
    },
  },
  link: {
    opensInNewTab: "opens in new tab",
  },
  audioPlayer: {
    label: "Audio player",
    play: "Play",
    pause: "Pause",
    seek: "Seek",
    options: "Recording options",
    playbackSpeed: "Playback speed",
    position: "{{current}} of {{total}}",
    viewDetail: "View detail",
    hideDetail: "Hide detail",
    details: "Recording details",
  },
  actions: {
    add: "Add",
    edit: "Edit",
    save: "Save",
    send: "Send",
    cancel: "Cancel",
    ok: "Ok",
    delete: "Delete",
    copy: "Copy",
    paste: "Paste",
    close: "Close",
    collapse: "Collapse",
    collapseItem: "Collapse {{title}}",
    expand: "Expand",
    expandItem: "Expand {{title}}",
    showAll: "Show all",
    showLess: "Show less",
    seeMore: "See more",
    skipToContent: "Skip to content",
    view: "View",
    unselect: "Unselect",
    search: "Search",
    clear: "Clear",
    more: "More",
    moveUp: "Move up",
    moveDown: "Move down",
    thumbsUp: "Like",
    thumbsDown: "Dislike",
    other: "Other actions",
    toggle: "Toggle",
    toggleDropdownMenu: "Toggle dropdown menu",
    selectAll: "Select all",
    selectAllItems: "Select all {{total}} items",
    apply: "Apply",
    saveAsPreset: "Save view",
    editPreset: "Edit view",
  },
  status: {
    selected: {
      singular: "Selected",
      plural: "Selected",
      all: "All selected",
      allOnPage: "All {{count}} items on this page are selected",
      selectAllItems: "Select all {{total}} items",
      allItemsSelected: "All {{total}} items selected",
    },
    noItemsSelected: "No items selected",
  },
  filters: {
    searchPlaceholder: "Search filters...",
    inFilter: {
      searchPlaceholder: "Search options...",
    },
    activeFilters: "Active filters: {{filters}}",
    filteringBy: "Filtering by {{label}}",
    availableFilters: "Available filters",
    label: "Filters",
    applyFilters: "Apply filters",
    resultsFor: {
      one: "{{count}} result for:",
      other: "{{count}} results for:",
    },
    applySelection: "Apply selection",
    cancel: "Cancel",
    failedToLoadOptions: "Failed to load options",
    retry: "Retry",
    number: {
      value: "Value",
      equal: "Equal to",
      equalTo: "Equal to {{value}}",
      lessOrEqual: "Less or equal to",
      lessThan: "Less than",
      greaterOrEqual: "Greater or equal to",
      greaterThan: "Greater than",
      equalShort: "= {{value}}",
      greaterThanOrEqualShort: ">= {{value}}",
      greaterThanShort: "> {{value}}",
      lessThanOrEqualShort: "<= {{value}}",
      lessThanShort: "< {{value}}",
      rangeTitle: "Use range",
      range: "{{minStrict}} {{min}} and {{maxStrict}} {{max}}",
    },
    search: {
      relaxed: "Relaxed",
      strict: "Strict",
    },
    selectAll: "Select all",
    clear: "Clear",
  },
  toc: {
    search: "Search...",
  },
  collections: {
    sorting: {
      noSorting: "No sorting",
      toggleDirection: "Toggle sorting direction",
      sortBy: "Sort by",
    },
    grouping: {
      noGrouping: "No grouping",
      groupBy: "Group by",
      toggleDirection: "Toggle direction",
    },
    actions: {
      actions: "Actions",
    },
    presets: {
      createTitle: "Save view",
      createDescription:
        "Save the current filters, sorting, grouping and columns as a view.",
      updateTitle: "Update view",
      updateDescription: "Update this view's name and description.",
      nameLabel: "Title",
      namePlaceholder: "View name",
      duplicateName: "A view with this name already exists",
      descriptionLabel: "Description",
      descriptionPlaceholder: "Optional description",
      save: "Save",
      delete: "Remove",
      share: "Share view",
      copiedToClipboard: "Copied to your clipboard",
      cancel: "Cancel",
    },
    visualizations: {
      table: "Table",
      editableTable: "Editable table",
      card: "Card",
      list: "List",
      kanban: "Kanban",
      graph: "Graph",
      pagination: {
        of: "of",
      },
      settings: "{{visualizationName}} settings",
      reset: "Reset to default",
      viewSelectorLabel: "Select view",
    },
    table: {
      settings: {
        showAllColumns: "Show all",
        hideAllColumns: "Hide all",
        addColumn: "Add column",
        removeColumn: "Remove column",
      },
    },
    editableTable: {
      errors: {
        saveFailed: "Save failed",
      },
      addRow: "Add row",
      removeRow: "Remove row",
      editRow: "Edit",
      reorderRow: "Drag to reorder",
    },
    itemsCount: "items",
    emptyStates: {
      noData: {
        title: "No data",
        description: "No data available",
      },
      noResults: {
        title: "No results",
        description: "No results found try another search or clear the filters",
        clearFilters: "Clear filters",
      },
      error: {
        title: "Error",
        description: "An error occurred while loading the data",
        retry: "Retry",
      },
    },
    summaries: {
      types: {
        sum: "sum",
        count: "count",
      },
    },
    export: {
      label: "Export to CSV",
      description: "Download all data as a CSV file",
    },
  },
  shortcut: "Shortcut",
  date: {
    from: "From",
    to: "To",
    none: "None",
    date: "Date",
    custom: "Custom period",
    selectDate: "Select Date",
    compareTo: "Compare to",
    presets: {
      last7Days: "Last 7 days",
      last30Days: "Last 30 days",
      last3Months: "Last 3 months",
      last6Months: "Last 6 months",
      lastYear: "Last year",
      last3Years: "Last 3 years",
      last100Years: "Last 100 years",
    },
    range: "Range",
    selectedBy: "Selected by",
    groups: {
      today: "Today",
      yesterday: "Yesterday",
      lastWeek: "Last week",
      lastMonth: "Last month",
      other: "Other",
    },
    granularities: {
      day: {
        currentDate: "Today",
        label: "Day",
      },
      week: {
        currentDate: "This week",
        label: "Week",
        long: "Week of {{day}} {{month}} {{year}}",
        longSingular: "Week of {{date}}",
        longPlural: "Weeks of {{date}}",
      },
      month: {
        currentDate: "This month",
        label: "Month",
      },
      quarter: {
        currentDate: "This quarter",
        label: "Quarter",
      },
      halfyear: {
        currentDate: "This half year",
        label: "Half year",
      },
      year: {
        currentDate: "This year",
        label: "Year",
      },
      range: {
        currentDate: "Today",
        label: "Range",
      },
    },
    month: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December",
    },
  },
  favorites: {
    favorites: "Favorites",
    remove: "Remove favorite",
  },
  notifications: "Notifications",
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    startNewChat: "Start new chat",
    settings: "Settings",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder:
      "Ask about time, people, or company info and a lot of other things...",
    stopAnswerGeneration: "Stop generating",
    responseStopped: "You stopped this response",
    applyingChanges: "Applying changes",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reasoning",
    resourcesGroupTitle: "Resources",
    thinking: "Thinking...",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        label: "Your feedback helps us make Factorial AI better",
        placeholder: "Share what worked well",
      },
      negative: {
        title: "What could have been better?",
        label: "Your feedback helps us improve future answers",
        placeholder: "Share what didn’t work",
      },
    },
    expandChat: "Expand chat",
    collapseChat: "Collapse chat",
    chatHistory: "Chat history",
    noPreviousChats: "No previous conversations",
    newConversation: "New conversation",
    today: "Today",
    yesterday: "Yesterday",
    thisMonth: "This month",
    older: "Older",
    searchChats: "Search conversations...",
    pinnedChats: "Pinned",
    threadOptions: "Thread options",
    pinChat: "Pin chat",
    unpinChat: "Unpin chat",
    deleteChat: "Delete chat",
    ask: "Ask One",
    view: "View",
    entityRef: {
      candidate: {
        source: "Source",
        applied: "Applied on",
      },
      requisition: {
        lineManager: "Line manager",
        reason: "Reason",
        status: "Status",
      },
    },
    credits: {
      title: "Credits",
      employeeCredits: "Your credits",
      creditsLeft: "{{total}} left",
      monthlyCredits: "Monthly credits",
      creditsError: "Could not load credits",
      upgradePlan: "Upgrade",
      needMoreCredits: "Need more credits?",
    },
    reportCard: {
      tableLabel: "Table",
      openButton: "Open",
    },
    formCard: {
      moreFields: "Open to see all fields",
    },
    aiTable: {
      title: "Table",
      downloadExcel: "Download Excel",
      downloadCsv: "Download CSV",
    },
    dataDownload: {
      title: "Download",
      download: "Download {{format}}",
      exportDashboard: "Export dashboard as {{format}}",
      exporting: "Exporting…",
    },
    dashboardItem: {
      chartType: "Chart type",
      errorTitle: "Error loading data",
      retry: "Retry",
      dataExplanation: "Where does this data come from?",
    },
    pong: {
      title: "Pong",
      youWin: "You win!",
      youLose: "You lose!",
      goal: "Goal",
      controls: "← → to move",
      escToExit: "Esc to exit",
    },
    creditWarning: {
      soft: "You're running low on AI credits.",
      getCredits: "Get credits",
      dismiss: "Dismiss",
    },
    attachFile: "Attach file",
    recordAudio: "Record audio",
    listening: "Listening…",
    stopRecording: "Stop and transcribe",
    cancelRecording: "Cancel recording",
    transcribing: "Transcribing…",
    micPermissionDenied:
      "Microphone access is blocked. Allow it in your browser settings to dictate.",
    micError: "Couldn't access the microphone.",
    transcriptionError: "Couldn't transcribe the audio. Try again.",
    removeFile: "Remove",
    fileUploadError: "Upload failed",
    fileUploadBlockedSubmit:
      "Your message wasn't sent because one of the attachments failed to upload. Remove it or retry.",
    tooManyFilesError: "You can attach up to {{maxFiles}} files at once",
    dropFilesHere: "Drop your files here",
    reply: "Reply",
    removeQuote: "Remove quote",
    clarifyingQuestion: {
      submit: "Submit",
      next: "Next",
      back: "Back",
      skip: "Skip",
      typeYourAnswer: "Type your answer…",
      stepOf: "{{current}} of {{total}}",
      custom: "own answer",
      skipped: "skipped",
      navHint: {
        navigate: "navigate",
        select: "select",
        cancel: "cancel",
      },
    },
    growth: {
      demoCard: {
        title: "See {{moduleName}} in action",
        actionLabel: "Start demo",
      },
      bookAMeetingCard: {
        title: "Talk with an expert",
        schedule: "Mon-Fri · 09:00-21:00 (CEST)",
        actionLabel: "Book a meeting",
      },
      questionCard: {
        actionLabel: "Next",
        skipLabel: "Skip",
        sendLabel: "Send",
      },
      moduleCard: {
        actionLabel: "Learn more",
      },
      faqCard: {
        title: "Questions before getting started",
      },
    },
  },
  chat: {
    placeholder: "Write something here..",
    searchPlaceholder: "Search messages",
    closeSearch: "Close search",
    noResults: "No chats found",
    backToLatest: "Jump to latest",
    muted: "Muted",
    mute: "Mute",
    unmute: "Unmute",
    attachFile: "Attach file",
    addEmoji: "Add emoji",
    recordAudio: "Record audio",
    listening: "Listening…",
    stopRecording: "Stop and transcribe",
    cancelRecording: "Cancel recording",
    dropFilesHere: "Drop your files here",
    removeFile: "Remove",
    // Transient composer errors (flashed in the textarea, mirroring the AI chat).
    tooManyFilesError: "You can attach up to {{maxFiles}} files at once",
    fileUploadError: "Upload failed",
    micPermissionDenied:
      "Microphone access is blocked. Allow it in your browser settings to dictate.",
    micError: "Couldn't access the microphone.",
    transcriptionError: "Couldn't transcribe the audio. Try again.",
    sent: "Sent",
    read: "Read",
    // Plural shape (one/other) so other languages can diverge — selected by the
    // consumer with `i18n.t(count === 1 ? "chat.readBy.one" : "chat.readBy.other")`.
    readBy: {
      one: "Read by {{count}}",
      other: "Read by {{count}}",
    },
    delivered: "Delivered",
    back: "Back",
    writing: "Writing…",
    isTyping: "{{name}} is writing…",
    twoTyping: "{{first}} and {{second}} are writing…",
    severalTyping: "Several people are writing…",
    deletedMessage: "Message deleted",
    // Shared-location attachments (map preview card + reply quote descriptor).
    location: "Location",
    // Voice notes (mic in the composer records + sends audio, no transcript).
    voiceNote: "Voice note",
    sendVoiceNote: "Send voice note",
    sendingVoiceNote: "Sending voice note…",
    // Delivery-state indicators beside your own bubble (icon labels + the
    // failed message's reduced actions menu).
    sending: "Sending…",
    notSent: "Not sent",
    retry: "Retry",
    moreActions: "Message actions",
    // Header overflow menu (the ellipsis dropdown) + its pin/favourite action.
    options: "Options",
    pin: "Pin",
    unpin: "Unpin",
    info: "Info",
    viewProfile: "View profile",
    // Mentions (groups only). `mentionEveryone` is the token inserted after `@`
    // for a group-wide ping (localize the word, e.g. es "aquí").
    mentionEveryone: "here",
    mentionEveryoneDescription: "Notify everyone in this group",
    reply: "Reply",
    react: "Add reaction",
    download: "Download",
    removeQuote: "Remove quote",
    // Editing your own message (within the edit window). `editing` heads the
    // composer chip; `edited` is the muted marker after an edited message body.
    edit: "Edit",
    editing: "Editing",
    edited: "edited",
    cancelEdit: "Cancel edit",
    saveEdit: "Save",
    // Shown as the quoted sender's name when the replied-to message is your own.
    you: "You",
    // In-chat image lightbox.
    openImage: "Open image",
    imagePreview: "Image preview",
    closePreview: "Close",
    previousImage: "Previous image",
    nextImage: "Next image",
    openDocument: "Open document",
    documentPreview: "Document preview",
    // Attachment previews in reply quotes + the composer chip (a lone file shows
    // its real name instead of a count).
    photo: "Photo",
    photoCount: {
      one: "{{count}} photo",
      other: "{{count}} photos",
    },
    fileCount: {
      one: "{{count}} file",
      other: "{{count}} files",
    },
    attachmentCount: {
      one: "{{count}} attachment",
      other: "{{count}} attachments",
    },
    scrollToBottom: "Scroll to bottom",
    newMessages: "New messages",
    // Centered membership system rows. `{{members}}` / `{{names}}` / `{{last}}`
    // are replaced with React nodes (`@name` hover-card chips) by the component
    // via token split — NOT through `t(key, args)`, whose interpolation is
    // string-only. The fragment keys compose the name list ("@Pedro, @Juan and
    // @Raúl" / "…and 5 more") so every language words the conjunction its own
    // way. Plural shape mirrors `readBy`.
    system: {
      memberAdded: {
        one: "{{members}} was added to the group",
        other: "{{members}} were added to the group",
      },
      memberRemoved: {
        one: "{{members}} was removed from the group",
        other: "{{members}} were removed from the group",
      },
      memberLeft: {
        one: "{{members}} left the group",
        other: "{{members}} left the group",
      },
      // Name-list fragments: "Ana, Luis and Carla" / "Ana, Luis, Carla and 5 more".
      membersWithLast: "{{names}} and {{last}}",
      membersWithMore: "{{names}} and {{count}} more",
    },
    unreadCount: {
      one: "{{count}} unread",
      other: "{{count}} unread",
    },
    emptyConversation: "No messages yet",
    emptyConversationDescription: "Send a message to start the conversation.",
    error: "Couldn't load this conversation",
    loadingOlder: "Loading earlier messages…",
  },
  dataChart: {
    heatmapNotSupported: "Heatmap not supported at this size",
    barChartVertical: "Bar (vertical)",
    barChartHorizontal: "Bar (horizontal)",
    lineChart: "Line",
    funnel: "Funnel",
    pieChart: "Pie",
    table: "Table",
    emptyState: {
      title: "No data available",
      description: "Try a different date or fewer filters",
    },
  },
  select: {
    noResults: "No results found",
    loadingMore: "Loading...",
    applySelection: "Apply selection",
    create: "Create",
    createWithValue: 'Create "{{value}}"',
    createEmptyMessage: "Try another search or create a new item",
  },
  numberInput: {
    between: "It should be between {{min}} and {{max}}",
    greaterThan: "It should be greater than {{min}}",
    lessThan: "It should be less than {{max}}",
  },
  imageUpload: {
    uploading: "Uploading...",
    uploadError: "Upload failed",
    insertImage: "Image",
    deleteImage: "Delete",
    errors: {
      fileTooLarge: "The file is too large",
      invalidType: "Invalid file type. Only images are allowed",
      uploadFailed: "Failed to upload image. Please try again",
      dismiss: "Dismiss",
    },
  },
  surveyFormBuilder: {
    actions: {
      actions: "Actions",
      addQuestion: "Add question",
      duplicateQuestion: "Duplicate question",
      deleteQuestion: "Delete question",
      duplicateSection: "Duplicate section",
      deleteSection: "Delete section",
      confirmMoveLastQuestion: "Move question",
      cancelMoveLastQuestion: "Cancel",
    },
    questionTypes: {
      section: "Section",
      rating: "Rating",
      multipleChoice: "Multiple choice",
      singleChoice: "Single choice",
      text: "Text",
      longText: "Long text",
      numeric: "Numeric",
      link: "Link",
      date: "Date",
      dropdownSingle: "Dropdown",
      file: "File upload",
      checkbox: "Checkbox",
    },
    selectQuestion: {
      addOption: "Add option",
      newOption: "New option {{number}}",
      markAsCorrect: "Mark as correct",
      remove: "Remove",
      correct: "Correct",
      optionPlaceholder: "Type anything you want here...",
    },
    fileQuestion: {
      uploadButton: "Upload file",
    },
    checkboxQuestion: {
      placeholder: "Provide a label for the checkbox",
    },
    answer: {
      label: "Answer",
      dropdownPlaceholder: "Pick an option",
      textPlaceholder: "Type your answer",
      numericPlaceholder: "Enter a number",
      linkPlaceholder: "https://example.com",
      invalidUrl: "Enter a valid URL",
    },
    labels: {
      applyingChanges: "Applying changes",
      endOfSection: "End of section",
      title: "Title",
      titlePlaceholder: "Question title",
      description: "Description",
      questionDescriptionPlaceholder: "Describe the question in a few words",
      sectionDescriptionPlaceholder: "Describe the section in a few words",
      required: "Required",
      allowMultiSelection: "Allow multi-selection",
      allowCreate: "Allow creation",
      singleSelection: "Single selection",
      multiSelection: "Multi selection",
      questionType: "Question type",
      questionOptions: "Question options",
      actions: "Actions",
      locked: "Locked",
      lockedSectionNotice:
        "These questions are predefined and can't be edited, moved, or removed.",
      lockedQuestionNotice:
        "This question is predefined and can't be edited or removed.",
      sectionTitlePlaceholder: "Section title",
      lastQuestionDialogTitle: "Remove last question from section",
      lastQuestionDialogDescription:
        "Moving this question will leave the section empty and it will be removed. Do you want to continue?",
    },
  },
  surveyAnsweringForm: {
    actions: {
      submit: "Submit survey",
      cancel: "Cancel",
      next: "Next",
      previous: "Previous",
      expand: "Expand",
      collapse: "Collapse",
    },
    labels: {
      empty: {
        title: "No questions to answer",
        description: "This survey has no questions yet.",
        emoji: "📝",
      },
    },
  },
  richTextEditor: {
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    strike: "Strike",
    highlight: "Highlight",
    heading1: "Heading 1",
    heading2: "Heading 2",
    heading3: "Heading 3",
    left: "Left",
    center: "Center",
    right: "Right",
    justify: "Justify",
    bulletList: "Bullet List",
    orderedList: "Ordered List",
    taskList: "Task List",
    codeBlock: "Code Block",
    horizontalRule: "Horizontal Rule",
    quote: "Quote",
    moreOptions: "More Options",
    code: "Code",
    divider: "Divider",
    bullet: "Bullet",
    ordered: "Ordered",
    task: "Task",
    details: "Dropdown",
    video: "Video",
    videoUrlPrompt: "Enter a YouTube or Vimeo URL",
    videoUrlInvalid: "Please enter a valid YouTube or Vimeo URL",
    link: "Link",
    linkPlaceholder: "Enter a link",
    groups: {
      textStyles: "Text Styles",
      lists: "Lists",
      blocks: "Blocks",
    },
    ai: {
      enhanceButtonLabel: "Generate",
      loadingEnhanceLabel: "Loading...",
      defaultError: "An error occurred while loading",
      closeErrorButtonLabel: "Continue editing",
      acceptChangesButtonLabel: "Accept",
      rejectChangesButtonLabel: "Reject",
      repeatButtonLabel: "Repeat",
      customPromptPlaceholder: "What do you want to do?",
    },
  },
  forms: {
    actionBar: {
      unsavedChanges: "You have changes pending to be saved",
      saving: "Saving...",
      saved: "Your changes have been saved",
      discard: "Discard",
      issues: {
        one: "{{count}} issue",
        other: "{{count}} issues",
      },
    },
    file: {
      dropzone: "Drag and drop a file, or click to select",
      dropzoneActive: "Drop the file here",
      dropzoneMultiple: "Drag and drop files, or click to select",
      acceptedTypes: "Accepted formats: {{types}}",
      remove: "Remove",
      uploading: "Uploading…",
      processing: "Processing…",
      uploadFailed: "Upload failed",
      fileTooLarge: "File exceeds {{maxSize}} MB limit",
      invalidFileType: "File type not accepted. Accepted formats: {{types}}",
      maxFilesReached: "Maximum {{maxFiles}} files",
    },
    entitiesList: {
      add: "Add",
      edit: "Edit",
      remove: "Remove",
      view: "View",
      addBlockedHint:
        "Finish filling out the last item you just added in order to add another one",
      addBlockedErrorHint:
        "Fix the errors in the existing items before adding another one",
      addBlockedMaxHint: "You've reached the maximum number of items",
    },
    moreInformation: "More information",
    validation: {
      required: "This field is required",
      invalidType: "Invalid value",
      string: {
        email: "Enter a valid email address",
        url: "Enter a valid URL",
        min: "Must be at least {{min}} characters",
        max: "Must be at most {{max}} characters",
      },
      number: {
        min: "Must be at least {{min}}",
        max: "Must be at most {{max}}",
        positive: "Must be a positive number",
        negative: "Must be a negative number",
        integer: "Must be a whole number",
      },
      date: {
        min: "Date must be after {{min}}",
        max: "Date must be before {{max}}",
        invalid: "Enter a valid date",
      },
      array: {
        min: "Select at least {{min}} option",
        max: "Select at most {{max}} options",
      },
      checkbox: {
        mustBeChecked: "This option must be selected",
      },
    },
  },
  graph: {
    canvas: "Graph canvas",
    view: "Graph view",
    controls: {
      findMe: "Find me",
      fitToView: "Fit to view",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      navigation: "Graph navigation",
    },
  },
  wizard: {
    previous: "Previous",
    next: "Continue",
    submit: "Submit",
    stepOf: "Step {{current}} of {{total}}",
  },
  pdfViewer: {
    toolbar: "Document toolbar",
    previousPage: "Previous page",
    nextPage: "Next page",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    scaleSelector: "Zoom level",
    pageWidth: "Page width",
    pageFit: "Page fit",
    rotate: "Rotate",
    print: "Print",
    download: "Download",
    loading: "Loading document",
    previewFailed: "Preview isn't available for this file",
    showingFirstRows: {
      one: "Showing the first row",
      other: "Showing the first {{count}} rows",
    },
  },
} as const

type TranslationShape<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends Record<string, string | Record<string, unknown>>
      ? TranslationShape<T[K]>
      : never
}

// Utility type to generate all possible dot-separated paths from nested object
type PathsToStringProps<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>]
    }[Extract<keyof T, string>]

type Join<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
    ? F
    : T extends [infer F, ...infer R]
      ? F extends string
        ? `${F}${D}${Join<Extract<R, string[]>, D>}`
        : never
      : string

export type TranslationKey = Join<
  PathsToStringProps<typeof defaultTranslations>,
  "."
>

export type TranslationsType = TranslationShape<typeof defaultTranslations>
