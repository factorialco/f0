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
