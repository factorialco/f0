// Per-tab configuration for the "Creation with AI" co-creation story — the
// unique opening message, scripted AI replies, generated F0Cards, and
// clarifying questions for each collection tab (tasks, surveys, employees,
// absences). Pure data; the story wires it up via TabConfigProvider.

export type ClarifyingStep = {
  question: string
  options: { id: string; label: string }[]
  selectionMode: "single"
}

export type TabConfig = {
  initialMessage: string
  script: string[]
  cards: [
    { title: string; description: string },
    { title: string; description: string },
  ]
  /** Clarifying questions shown after the first AI reply (creation) and after
   *  the post-split refinement reply. Both are tab-specific. */
  clarifying: {
    creation: ClarifyingStep[]
    refinement: ClarifyingStep[]
  }
}

export const TAB_CONFIGS: Record<string, TabConfig> = {
  tasks: {
    initialMessage: "I want to create a new Task.",
    script: [
      "Done — I've drafted **Complete onboarding checklist**, a step-by-step task covering a new hire's first 30 days. Review it on the right.",
      "Added **Schedule Q3 planning session** too — it coordinates team availability and sets the agenda.",
    ],
    cards: [
      {
        title: "Complete onboarding checklist",
        description:
          "A step-by-step task list for new hires covering their first 30 days.",
      },
      {
        title: "Schedule Q3 planning session",
        description:
          "Coordinate availability across the team and set the agenda.",
      },
    ],
    clarifying: {
      creation: [
        {
          question: "What kind of task would you like to create?",
          options: [
            { id: "onboarding", label: "Onboarding checklist" },
            { id: "planning", label: "Planning session" },
            { id: "review", label: "Review reminder" },
            { id: "followup", label: "Follow-up" },
          ],
          selectionMode: "single",
        },
      ],
      refinement: [
        {
          question: "What would you like to adjust on this task?",
          options: [
            { id: "due-date", label: "Adjust the due date" },
            { id: "subtasks", label: "Add subtasks" },
            { id: "owner", label: "Reassign the owner" },
            { id: "description", label: "Add a description" },
          ],
          selectionMode: "single",
        },
      ],
    },
  },
  surveys: {
    initialMessage: "I want to create a new Survey.",
    script: [
      "Here's an **Employee engagement survey** — a 10-question pulse check on motivation, clarity, and team dynamics. Take a look on the right.",
      "I've added a **Post-onboarding feedback survey** to capture new-hire impressions after their first 30 days.",
    ],
    cards: [
      {
        title: "Employee engagement survey",
        description:
          "A 10-question pulse check covering motivation, clarity, and team dynamics.",
      },
      {
        title: "Post-onboarding feedback survey",
        description: "Captures new hire impressions after their first 30 days.",
      },
    ],
    clarifying: {
      creation: [
        {
          question: "What would you like the survey to measure?",
          options: [
            { id: "engagement", label: "Employee engagement" },
            { id: "onboarding", label: "Onboarding feedback" },
            { id: "pulse", label: "Quick pulse check" },
            { id: "enps", label: "eNPS" },
          ],
          selectionMode: "single",
        },
      ],
      refinement: [
        {
          question: "What would you like to refine on this survey?",
          options: [
            { id: "questions", label: "Add questions" },
            { id: "audience", label: "Adjust the audience" },
            { id: "tone", label: "Change the tone" },
            { id: "deadline", label: "Set a deadline" },
          ],
          selectionMode: "single",
        },
      ],
    },
  },
  employees: {
    initialMessage: "I want to create a new Employee record.",
    script: [
      "I've created a profile for **Jordan Lee**, a Senior Frontend Engineer joining the platform team on July 1st. Review it on the right.",
      "Set up **Sam Rivera** as well — a Product Designer joining the growth team on July 15th.",
    ],
    cards: [
      {
        title: "Jordan Lee — Engineering",
        description:
          "Senior Frontend Engineer joining the platform team on July 1st.",
      },
      {
        title: "Sam Rivera — Design",
        description: "Product Designer joining the growth team on July 15th.",
      },
    ],
    clarifying: {
      creation: [
        {
          question: "What role are you adding?",
          options: [
            { id: "engineer", label: "Engineer" },
            { id: "designer", label: "Designer" },
            { id: "pm", label: "Product Manager" },
            { id: "other", label: "Other role" },
          ],
          selectionMode: "single",
        },
      ],
      refinement: [
        {
          question: "What would you like to set up for them?",
          options: [
            { id: "manager", label: "Assign a manager" },
            { id: "start-date", label: "Set the start date" },
            { id: "team", label: "Add to a team" },
            { id: "equipment", label: "Prepare equipment" },
          ],
          selectionMode: "single",
        },
      ],
    },
  },
  absences: {
    initialMessage: "I want to create a new Absence.",
    script: [
      "I've drafted a **vacation** request for **Alicia Keys**, July 14–25, ready for manager approval. Take a look on the right.",
      "Added a **sick leave** for **Dani Moreno**, July 8–10, with documentation attached.",
    ],
    cards: [
      {
        title: "Alicia Keys — Vacation",
        description: "Annual leave from July 14–25, approved by manager.",
      },
      {
        title: "Dani Moreno — Sick leave",
        description: "Medical leave from July 8–10, documentation submitted.",
      },
    ],
    clarifying: {
      creation: [
        {
          question: "What type of absence is this?",
          options: [
            { id: "vacation", label: "Vacation" },
            { id: "sick", label: "Sick leave" },
            { id: "personal", label: "Personal day" },
            { id: "parental", label: "Parental leave" },
          ],
          selectionMode: "single",
        },
      ],
      refinement: [
        {
          question: "What would you like to adjust on this absence?",
          options: [
            { id: "dates", label: "Change the dates" },
            { id: "type", label: "Switch the type" },
            { id: "note", label: "Add a note" },
            { id: "approver", label: "Set an approver" },
          ],
          selectionMode: "single",
        },
      ],
    },
  },
}
