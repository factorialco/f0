// Source: "[8.8] Close new contribution process" session (2026-06-23).
// The component taxonomy agreed by the team: Core, Kits and Domain specific.
// Patterns are an altitude WITHIN Core, not a separate category.

export type CategoryId = "core" | "kit" | "domain"

export type Category = {
  id: CategoryId
  label: string
  tagline: string
  /** What it is, in plain terms. */
  what: string
  /** When you'd put something here. */
  when: string
  /** Where it lives in the repo today. */
  folder: string
  /** Who owns and maintains it. */
  owner: string
  rules: string[]
  examples: string[]
}

export const categories: Category[] = [
  {
    id: "core",
    label: "Core",
    tagline: "The shared building blocks every product uses.",
    what: "Generic components and patterns — buttons, inputs, modals, forms. Built and owned by Foundations.",
    when: "When the thing you need is generic and useful in two or more product areas.",
    folder: "src/components/, src/patterns/, src/ui/, src/layouts/, src/hooks/",
    owner: "Foundations",
    rules: [
      "Only Foundations can mark a component as stable.",
      "Stable means the API is settled — it won't change for months.",
      "You can add a prop or variant to a stable one without going back to experimental, but it gets reviewed first.",
      "Docs and tests are always required.",
    ],
    examples: [
      "Components: F0Button, F0Checkbox, F0DatePicker, F0Alert, Card",
      "Patterns: F0Form, F0WizardForm, F0Modal, ApplicationFrame",
    ],
  },
  {
    id: "kit",
    label: "Kits",
    tagline: "A ready-made set of pieces for one job.",
    what: "A handful of components that go together for one purpose — like charts or chat — shipped as a single import.",
    when: "When several pieces are always used together, so they're easy to find and the AI knows they belong as a set.",
    folder: "src/kits/<kit>/",
    owner: "Foundations · open to contributions",
    rules: [
      "Shipped as its own import.",
      "A Kit can use Core.",
      "🔴 A Kit can't use another Kit — that's how circular dependencies start.",
    ],
    examples: ["Charts: BarChart, LineChart, PieChart", "Reactions"],
  },
  {
    id: "domain",
    label: "Domain specific",
    tagline: "Components that only make sense in one product area.",
    what: "Pieces tied to a single domain — clocking in, surveys, payroll. The domain's own team builds and maintains them.",
    when: "When the component only matters inside one domain and other areas won't reuse it.",
    folder: "src/sds/<area>/",
    owner: "The domain's team",
    rules: [
      "Shipped as its own import.",
      "The domain team owns and maintains it — not Foundations.",
      "It stays in its domain; no need to push it into Core.",
    ],
    examples: [
      "Time tracking: ClockInControls, ClockInGraph",
      "Surveys: BaseQuestion, SurveyAnsweringForm",
    ],
  },
]

export const patternsNote = {
  title: "Patterns are part of Core",
  body: "A pattern is several Core pieces combined into one reusable whole — like a form or a modal. It's still Core, with the same rules. If teams keep rebuilding the same combination, it can become a Core pattern.",
  examples: "F0Form, F0WizardForm, F0Modal, ApplicationFrame, Header, Menu",
}
