const e = {
  ad: "Andorra",
  ae: "United Arab Emirates",
  af: "Afghanistan",
  ag: "Antigua and Barbuda",
  ai: "Anguilla",
  al: "Albania",
  am: "Armenia",
  ao: "Angola",
  ar: "Argentina",
  as: "American Samoa",
  at: "Austria",
  au: "Australia",
  aw: "Aruba",
  ax: "Åland Islands",
  az: "Azerbaijan",
  ba: "Bosnia and Herzegovina",
  bb: "Barbados",
  bd: "Bangladesh",
  be: "Belgium",
  bf: "Burkina Faso",
  bg: "Bulgaria",
  bh: "Bahrain",
  bi: "Burundi",
  bj: "Benin",
  bm: "Bermuda",
  bo: "Bolivia",
  br: "Brazil",
  bt: "Bhutan",
  bw: "Botswana",
  by: "Belarus",
  bz: "Belize",
  ca: "Canada",
  cd: "Democratic Republic of the Congo",
  cf: "Central African Republic",
  cg: "Republic of the Congo",
  ch: "Switzerland",
  ci: "Côte d'Ivoire",
  ck: "Cook Islands",
  cl: "Chile",
  cm: "Cameroon",
  cn: "China",
  co: "Colombia",
  cr: "Costa Rica",
  cu: "Cuba",
  cv: "Cape Verde",
  cw: "Curaçao",
  cy: "Cyprus",
  cz: "Czech Republic",
  de: "Germany",
  dj: "Djibouti",
  dk: "Denmark",
  dm: "Dominica",
  do: "Dominican Republic",
  dz: "Algeria",
  ec: "Ecuador",
  ee: "Estonia",
  eg: "Egypt",
  er: "Eritrea",
  es: "Spain",
  et: "Ethiopia",
  fi: "Finland",
  fj: "Fiji",
  fk: "Falkland Islands",
  fm: "Micronesia",
  fo: "Faroe Islands",
  fr: "France",
  ga: "Gabon",
  gb: "United Kingdom",
  gd: "Grenada",
  ge: "Georgia",
  gg: "Guernsey",
  gh: "Ghana",
  gi: "Gibraltar",
  gl: "Greenland",
  gm: "Gambia",
  gn: "Guinea",
  gq: "Equatorial Guinea",
  gr: "Greece",
  gt: "Guatemala",
  gu: "Guam",
  gw: "Guinea-Bissau",
  hk: "Hong Kong",
  hn: "Honduras",
  hr: "Croatia",
  ht: "Haiti",
  hu: "Hungary",
  id: "Indonesia",
  ie: "Ireland",
  il: "Israel",
  im: "Isle of Man",
  in: "India",
  io: "British Indian Ocean Territory",
  iq: "Iraq",
  ir: "Iran",
  is: "Iceland",
  it: "Italy",
  je: "Jersey",
  jm: "Jamaica",
  jo: "Jordan",
  jp: "Japan",
  ke: "Kenya"
}, a = {
  countries: e,
  approvals: {
    history: "Approval history",
    statuses: {
      waiting: "Waiting",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected"
    },
    requiredNumbers: {
      one: "One approval required",
      other: "{{count}} approvals required"
    }
  },
  navigation: {
    sidebar: {
      label: "Main navigation",
      companySelector: {
        label: "Select a company",
        placeholder: "Select a company"
      }
    },
    previous: "Previous",
    next: "Next"
  },
  inputs: {
    password: {
      show: "Show password",
      hide: "Hide password"
    }
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
    selectAll: "Select all"
  },
  status: {
    selected: {
      singular: "Selected",
      plural: "Selected",
      all: "All selected"
    }
  },
  syncStatus: {
    synced: "Sync completed successfully.",
    syncing: "Sync in progress.",
    pending: "Not yet started.",
    partiallySynced: "All aggregated data was synced but at least 1 failed.",
    outdated: "Data might need to be synced again.",
    failed: "Sync failed."
  },
  filters: {
    searchPlaceholder: "Search filters...",
    inFilter: {
      searchPlaceholder: "Search options..."
    },
    activeFilters: "Active filters: {{filters}}",
    filteringBy: "Filtering by {{label}}",
    availableFilters: "Available filters",
    label: "Filters",
    applyFilters: "Apply filters",
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
      range: "{{minStrict}} {{min}} and {{maxStrict}} {{max}}"
    },
    search: {
      relaxed: "Relaxed",
      strict: "Strict"
    },
    selectAll: "Select all",
    clear: "Clear"
  },
  toc: {
    search: "Search..."
  },
  collections: {
    sorting: {
      noSorting: "No sorting",
      toggleDirection: "Toggle sorting direction",
      sortBy: "Sort by"
    },
    grouping: {
      noGrouping: "No grouping",
      groupBy: "Group by",
      toggleDirection: "Toggle direction"
    },
    actions: {
      actions: "Actions"
    },
    visualizations: {
      table: "Table view",
      card: "Card view",
      list: "List view",
      kanban: "Kanban view",
      pagination: {
        of: "of"
      },
      settings: "{{visualizationName}} settings",
      reset: "Reset to default"
    },
    table: {
      settings: {
        showAllColumns: "Show all",
        hideAllColumns: "Hide all"
      }
    },
    itemsCount: "items",
    emptyStates: {
      noData: {
        title: "No data",
        description: "No data available"
      },
      noResults: {
        title: "No results",
        description: "No results found try another search or clear the filters",
        clearFilters: "Clear filters"
      },
      error: {
        title: "Error",
        description: "An error occurred while loading the data",
        retry: "Retry"
      }
    },
    summaries: {
      types: {
        sum: "sum"
      }
    }
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
      last100Years: "Last 100 years"
    },
    range: "Range",
    selectedBy: "Selected by",
    groups: {
      today: "Today",
      yesterday: "Yesterday",
      lastWeek: "Last week",
      lastMonth: "Last month",
      other: "Other"
    },
    granularities: {
      day: {
        currentDate: "Today",
        label: "Day"
      },
      week: {
        currentDate: "This week",
        label: "Week",
        long: "Week of {{day}} {{month}} {{year}}",
        longSingular: "Week of {{date}}",
        longPlural: "Weeks of {{date}}"
      },
      month: {
        currentDate: "This month",
        label: "Month"
      },
      quarter: {
        currentDate: "This quarter",
        label: "Quarter"
      },
      halfyear: {
        currentDate: "This half year",
        label: "Half year"
      },
      year: {
        currentDate: "This year",
        label: "Year"
      },
      range: {
        currentDate: "Today",
        label: "Range"
      }
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
      december: "December"
    }
  },
  favorites: {
    favorites: "Favorites",
    remove: "Remove favorite"
  },
  notifications: "Notifications",
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    startNewChat: "Start new chat",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder: "Ask about time, people, or company info…",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    resourcesGroupTitle: "Resources",
    thinking: "Thinking...",
    exportTable: "Download table",
    generatedTableFilename: "OneGeneratedTable",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        label: "Your feedback helps us make Factorial AI better",
        placeholder: "Share what worked well"
      },
      negative: {
        title: "What could have been better?",
        label: "Your feedback helps us improve future answers",
        placeholder: "Share what didn’t work"
      }
    },
    ask: "Ask One"
  },
  select: {
    noResults: "No results found",
    loadingMore: "Loading..."
  },
  numberInput: {
    between: "It should be between {{min}} and {{max}}",
    greaterThan: "It should be greater than {{min}}",
    lessThan: "It should be less than {{max}}"
  },
  coCreationForm: {
    actions: {
      actions: "Actions",
      duplicateQuestion: "Duplicate question",
      deleteQuestion: "Delete question",
      duplicateSection: "Duplicate section",
      deleteSection: "Delete section"
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
      date: "Date"
    },
    selectQuestion: {
      addOption: "Add option",
      newOption: "New option {{number}}",
      markAsCorrect: "Mark as correct",
      remove: "Remove",
      correct: "Correct",
      optionPlaceholder: "Type anything you want here..."
    },
    answer: {
      label: "Answer",
      placeholder: "Respondent's answer"
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
      questionType: "Question type",
      questionOptions: "Question options",
      actions: "Actions",
      sectionTitlePlaceholder: "Section title"
    }
  }
};
export {
  a as defaultTranslations
};
