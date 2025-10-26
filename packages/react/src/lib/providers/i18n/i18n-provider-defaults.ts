export const defaultTranslations = {
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
    sidebar: "Main navigation",
    previous: "Previous",
    next: "Next",
  },
  actions: {
    add: "Add",
    edit: "Edit",
    save: "Save",
    send: "Send",
    cancel: "Cancel",
    copy: "Copy",
    close: "Close",
    showAll: "Show all",
    showLess: "Show less",
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
  },
  status: {
    selected: {
      singular: "Selected",
      plural: "Selected",
    },
  },
  filters: {
    label: "Filters",
    applyFilters: "Apply filters",
    applySelection: "Apply selection",
    cancel: "Cancel",
    failedToLoadOptions: "Failed to load options",
    retry: "Retry",
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
    visualizations: {
      table: "Table view",
      card: "Card view",
      list: "List view",
      kanban: "Kanban view",
      pagination: {
        of: "of",
      },
      settings: "{{visualizationName}} settings",
      reset: "Reset to default",
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
      },
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
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder: "Ask about time, people, or company info…",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        placeholder:
          "What did you like about this response? How could it be even better?",
        description:
          "Your feedback helps Factorial Al improve. The messages from your chat, the search results, and your feedback will be sent to Factorial to help improve Factorial Al.",
      },
      negative: {
        title: "What could have been better in this response?",
        placeholder:
          "What could have been better in this response? How could it be even better?",
        description:
          "Your feedback helps Factorial Al improve. The messages from your chat, the search results, and your feedback will be sent to Factorial to help improve Factorial Al.",
      },
    },
  },
  select: {
    noResults: "No results found",
    loadingMore: "Loading...",
  },
} as const

type TranslationShape<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends Record<string, string | Record<string, unknown>>
      ? TranslationShape<T[K]>
      : never
}

export type TranslationsType = TranslationShape<typeof defaultTranslations>
