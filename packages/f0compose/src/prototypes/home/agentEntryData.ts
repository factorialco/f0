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
