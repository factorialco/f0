import { CALENDAR_EVENTS, WEEK_DAYS } from "./calendar/calendarFixtures"
import { peopleRows, ACCESS_LABEL } from "./people/peopleData"
import { policies } from "./policies/policiesData"
import { readActivity } from "./activity/state"
import {
  readPreferences,
  BUILT_IN_CONNECTORS,
  policyTextFor,
} from "./preferences/state"

import {
  Calendar,
  Clock,
  PersonMinus,
  PersonPlus,
  SearchPerson,
  CalendarArrowRight,
  File,
  CheckCircle,
  Comment,
  InfoCircle,
  Search,
  List,
} from "@factorialco/f0-react/icons/app"

export type Presentation = "idle" | "expanded" | "side" | "focus"
/** One relevant starting point, using the existing profile and current page. */
export function suggestionFor(
  view: string | null,
  profile: "admin" | "employee"
) {
  if (view === "inbox")
    return {
      label: "Help me resolve this task",
      prompt:
        "Review this task, summarize what needs my attention and suggest the next step for my approval.",
    }
  if (view === "people")
    return {
      label: "Review pending onboarding",
      prompt:
        "Review this page and identify people with pending onboarding or account activation. Suggest the next steps for my approval.",
    }
  if (view === "calendar")
    return {
      label: "Help me plan this week",
      prompt:
        "Review this calendar and help me plan the week, highlighting conflicts and upcoming commitments.",
    }
  if (view === "policies")
    return {
      label: "Review policies needing attention",
      prompt:
        "Review this page and highlight policies that need updating or acknowledgment.",
    }
  if (view)
    return {
      label: "What needs attention here?",
      prompt:
        "Review this page, identify what needs my attention and propose the next steps.",
    }
  return profile === "employee"
    ? {
        label: "Help me plan my day",
        prompt:
          "Help me plan my day around upcoming commitments and pending tasks.",
      }
    : {
        label: "What needs my attention today?",
        prompt:
          "Review pending HR approvals, upcoming onboardings and employee incidents. Prioritize what needs my attention today and prepare next steps for my approval.",
      }
}

/** Starting points describe possibilities, not findings from an analysis. */
export function emptyStateFor(view: string | null) {
  if (view === "calendar") {
    return {
      question: "What would you like to plan?",
      suggestions: [
        { label: "Find time for a meeting", icon: Clock },
        { label: "Review my week", icon: Calendar },
        { label: "Check who’s away", icon: PersonMinus },
      ],
    }
  }
  if (view === "people" || view === "organization") {
    return {
      question: "What would you like to know about your team?",
      suggestions: [
        { label: "Review pending onboarding", icon: PersonPlus },
        { label: "Find people by role", icon: SearchPerson },
        { label: "Check upcoming anniversaries", icon: CalendarArrowRight },
      ],
    }
  }
  if (view === "inbox") {
    return {
      question: "How would you like to approach this task?",
      suggestions: [
        { label: "Summarize this request", icon: File },
        { label: "Explain what needs my approval", icon: CheckCircle },
        { label: "Help me draft a reply", icon: Comment },
      ],
    }
  }
  return {
    question: "What would you like to do here?",
    suggestions: [
      { label: "Help me understand this page", icon: InfoCircle },
      { label: "Find what needs my attention", icon: Search },
      { label: "Help me plan my next steps", icon: List },
    ],
  }
}

/** Uses the same simulated records displayed by each page. */
export function pageReading(view: string, visibleText = "") {
  const title =
    view === "policies"
      ? "Files"
      : view.charAt(0).toUpperCase() + view.slice(1).replaceAll("-", " ")
  let reply: string[]
  if (view === "activity" || view === "inbox") {
    const rows = readActivity()
    const pending = rows.filter((row) => row.status === "needs-you")
    reply = [
      `${pending.length} items need your attention. ${rows.filter((row) => row.status === "in-progress").length} are in progress.`,
      ...pending.slice(0, 4).map((row) => `${row.title}: ${row.detail}`),
    ]
  } else if (view === "preferences") {
    const prefs = readPreferences()
    const connected = [
      ...BUILT_IN_CONNECTORS,
      ...prefs.customConnectors,
    ].filter((c) => prefs.connected.includes(c.id))
    reply = [
      `${connected.length} ${connected.length === 1 ? "tool is" : "tools are"} connected${connected.length ? `: ${connected.map((c) => c.name).join(", ")}` : ". You can connect a tool in Connections"}.`,
      `Your memory: ${policyTextFor(prefs)}`,
      `Files are saved to ${prefs.saveLocations.join(", ")}. You can review these destinations in Settings.`,
    ]
  } else if (view === "calendar") {
    const conflicts = CALENDAR_EVENTS.reduce(
      (count, a, i) =>
        count +
        CALENDAR_EVENTS.filter(
          (b, j) =>
            j > i && a.day === b.day && a.start < b.end && b.start < a.end
        ).length,
      0
    )
    reply = [
      `Your displayed week has ${CALENDAR_EVENTS.length} events and ${conflicts} overlapping event pairs.`,
      ...CALENDAR_EVENTS.slice(0, 5).map(
        (event) => `${WEEK_DAYS[event.day]}: ${event.title}.`
      ),
      "Review the busiest days before adding another meeting.",
    ]
  } else if (view === "people" || view === "organization") {
    const pending = peopleRows.filter((person) => person.access !== "active")
    reply = [
      `${pending.length} of ${peopleRows.length} people have pending account access.`,
      ...pending
        .slice(0, 5)
        .map(
          (person) =>
            `${person.firstName} ${person.lastName}: ${ACCESS_LABEL[person.access]}.`
        ),
      "Start with pending invitations before checking onboarding progress.",
    ]
  } else if (view === "policies") {
    const attention = policies.filter(
      (policy) => policy.status !== "published"
    )
    reply = [
      `${attention.length} of ${policies.length} files need a review before publication.`,
      ...attention.map(
        (policy) =>
          `${policy.name}: ${policy.status}. Last updated ${policy.lastUpdate}.`
      ),
    ]
  } else {
    const lines = [
      ...new Set(
        visibleText
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line.length > 20 && !line.includes("Ask One"))
      ),
    ].slice(0, 6)
    reply = lines.length
      ? [
          `Here are the relevant details currently shown in ${title}:`,
          ...lines,
        ]
      : [`There are no records shown in ${title} to summarize yet.`]
  }
  return {
    title,
    prompt: `Review ${title} and summarize the relevant data, pending items and next steps.`,
    reply,
  }
}
