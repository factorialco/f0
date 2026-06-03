// Per-tab configuration for the "Creation with AI" co-creation story — the
// unique opening message and the resource cards surfaced for each collection
// tab (tasks, surveys, employees, absences). Pure data; the story wires it up
// via TabConfigProvider.

export type TabConfig = {
  initialMessage: string
  cards: [
    { title: string; description: string },
    { title: string; description: string },
  ]
}

export const TAB_CONFIGS: Record<string, TabConfig> = {
  tasks: {
    initialMessage: "I want to create a new Task.",
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
  },
  surveys: {
    initialMessage: "I want to create a new Survey.",
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
  },
  employees: {
    initialMessage: "I want to create a new Employee record.",
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
  },
  absences: {
    initialMessage: "I want to create a new Absence.",
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
  },
}
