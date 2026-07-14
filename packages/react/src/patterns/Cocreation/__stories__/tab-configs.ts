// Per-tab configuration for the "Walkthrough" co-creation story — the
// resource cards surfaced for the Surveys collection tab. Pure data; the story
// wires it up via TabConfigProvider.

export type TabConfig = {
  cards: [
    { title: string; description: string },
    { title: string; description: string },
  ]
}

export const TAB_CONFIGS: Record<string, TabConfig> = {
  surveys: {
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
}
