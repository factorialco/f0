import type { ProfileId } from "../profileStore"
import type { WindowId } from "../windows/types"

export type SetupStep =
  | "edit"
  | "priorities"
  | "briefing"
  | "scope"
  | "widgets"
  | "routines"
  | "routine-review"
  | "reports"
  | "report-review"
  | "complete"
export type Focus = "team" | "recruitment" | "personal"
export type RoutineDraft = {
  title: string
  cadence: string
  condition: string
  action: string
  saved: boolean
}
export type ReportDraft = {
  title: string
  metric: "recruitment" | "expenses"
  threshold: number
  cadence: string
  saved: boolean
}
export type HomeSetup = {
  profile: ProfileId
  experienceVersion?: number
  step: SetupStep
  focus: Focus
  purpose?: "routine" | "report"
  focuses?: Focus[]
  priority: string
  pendingFocus?: Focus
  paused?: boolean
  routine?: RoutineDraft
  report?: ReportDraft
}
export type HomeArtifact =
  | {
      kind: "briefing"
      focus: Focus
      focuses?: Focus[]
      profile: ProfileId
    }
  | { kind: "routine"; draft: RoutineDraft }
  | { kind: "report"; draft: ReportDraft }
export type SetupTurn = {
  setup: HomeSetup
  content: string
  artifact?: HomeArtifact
  widgets?: WindowId[]
  undo?: boolean
}
export const HOME_EXPERIENCE_VERSION = 2

export const WIDGET_CHOICES: {
  label: string
  id: WindowId
  pattern: RegExp
}[] = [
  { label: "My shifts", id: "shifts", pattern: /shift|rota|turno/ },
  {
    label: "My payslip",
    id: "payslip",
    pattern: /payslip|payroll|salary|nomina/,
  },
  {
    label: "Time off",
    id: "holidays",
    pattern: /time off|holiday|vacation|vacacion/,
  },
  {
    label: "Recruitment",
    id: "recruitment",
    pattern: /candidat|recruit|hiring/,
  },
  { label: "Documents", id: "documents", pattern: /document/ },
  { label: "Clock in", id: "clockin", pattern: /clock|time track|jornada/ },
  {
    label: "Communities",
    id: "communities",
    pattern: /communit|publication|posts/,
  },
  { label: "Agenda", id: "events", pattern: /agenda|event|calendar/ },
]
export const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
export function focusFor(text: string, fallback: Focus): Focus {
  const t = normalize(text)
  if (/hiring|recruit|candidat|contrat/.test(t)) return "recruitment"
  if (/personal|payslip|payroll|time off|holiday|my work/.test(t))
    return "personal"
  if (/team|request|equipo/.test(t)) return "team"
  return fallback
}
export function initialSetup(profile: ProfileId): HomeSetup {
  return {
    profile,
    step: "priorities",
    experienceVersion: HOME_EXPERIENCE_VERSION,
    focus: profile === "admin" ? "team" : "personal",
    priority: "",
  }
}
export function questionFor(setup: HomeSetup): {
  text: string
  options: string[]
  multi?: boolean
} {
  switch (setup.step) {
    case "edit":
      return {
        text: "What would you like to change?",
        options: ["My updates", "My routines", "My reports"],
      }
    case "priorities":
      return {
        text: "What matters most to you at work?",
        multi: true,
        options: ["My team and their requests", "Hiring", "My personal tasks"],
      }
    case "briefing":
      return {
        text: "This is how I could catch you up when you return. Does it work for you?",
        options: [
          "Looks good",
          "Focus on hiring",
          "Focus on my personal tasks",
        ],
      }
    case "scope":
      return {
        text: "Should I use this focus just now or whenever you return?",
        options: ["Just this time", "Every time I return"],
      }
    case "widgets":
      return {
        text: "What would you like to keep in view?",
        multi: true,
        options: WIDGET_CHOICES.filter(
          (w) => !["communities", "clockin"].includes(w.id)
        ).map((w) => w.label),
      }
    case "routines":
      return {
        text: "What would you like me to automate?",
        options: ["Review requests", "Prepare a monthly summary", "Later"],
      }
    case "routine-review":
      return {
        text: "Would you like to save this routine or change its conditions?",
        options: ["Save simulated routine", "Change to weekly", "Later"],
      }
    case "reports":
      return {
        text: "What would you like to monitor for changes?",
        options: ["Recruitment", "Expenses", "Later"],
      }
    case "report-review":
      return {
        text: "How should we adjust this report? You can change its threshold or frequency.",
        options: ["Save simulated report", "Change threshold to 10", "Later"],
      }
    case "complete":
      if (setup.purpose)
        return {
          text: "What would you like to do next?",
          options: [
            "Back to my home",
            setup.purpose === "routine" ? "My routines" : "My reports",
          ],
        }
      return {
        text: "Your home is saved. What would you like to do next?",
        options: ["Back to my home", "My routines", "My reports"],
      }
  }
}
export function advanceSetup(
  current: HomeSetup,
  answer: string,
  openWidgets: WindowId[]
): SetupTurn {
  const t = normalize(answer)
  let setup = { ...current, paused: false }
  const turn = (content: string, artifact?: HomeArtifact): SetupTurn => ({
    setup,
    content,
    artifact,
  })
  const brief = (focus = setup.focus): HomeArtifact => ({
    kind: "briefing",
    focuses: setup.focuses,
    focus,
    profile: setup.profile,
  })
  if (/^(my |edit |adjust |configure )?widgets$/.test(t)) {
    setup.step = "complete"
    return turn(
      "Your fixed widgets keep everyday information handy. Your updates highlight what matters right now."
    )
  }
  if (/^(my |edit |configure )?routines$/.test(t)) {
    setup.step = setup.routine ? "routine-review" : "routines"
    return turn(
      "Let's review what the routine would do.",
      setup.routine ? { kind: "routine", draft: setup.routine } : undefined
    )
  }
  if (/^(my |edit |configure )?reports$/.test(t)) {
    setup.step = setup.report ? "report-review" : "reports"
    return turn(
      "Let's build a report you can review here.",
      setup.report ? { kind: "report", draft: setup.report } : undefined
    )
  }
  switch (setup.step) {
    case "edit":
      if (
        /add|remove|pin|hide|show/.test(t) &&
        WIDGET_CHOICES.some((w) => w.pattern.test(t))
      ) {
        setup.step = "complete"
        return advanceSetup(setup, answer, openWidgets)
      }
      if (/update|priorit|brief/.test(t)) {
        setup.step = "priorities"
        return turn("Let's adjust what I bring you when you return.")
      }
      // Free text describing a focus works from Edit as well as from priorities.
      if (/team|hiring|recruit|personal|payslip|request/.test(t)) {
        setup.step = "priorities"
        return advanceSetup(setup, answer, openWidgets)
      }
      return turn(
        "I can help you change your updates, fixed widgets, routines or reports. Choose one or describe a change to your priorities."
      )
    case "priorities":
      setup = {
        ...setup,
        priority: answer,
        focus: focusFor(answer, setup.focus),
        focuses: (["team", "recruitment", "personal"] as Focus[]).filter((f) =>
          f === "team"
            ? /team|request/.test(t)
            : f === "recruitment"
              ? /hiring|recruit|candidat/.test(t)
              : /personal|my work/.test(t)
        ),
        step: "complete",
      }
      return turn(
        `Your updates now focus on ${answer.toLowerCase()}. You can manage your fixed widgets separately from Edit widgets.`,
        brief()
      )
    case "briefing": {
      if (/looks good|perfect|continue|^yes$|keep it/.test(t)) {
        setup.step = "complete"
        return turn(
          "I'll keep this focus for future visits. You can manage your fixed widgets separately from Edit widgets."
        )
      }
      const focus = focusFor(answer, setup.focus)
      if (focus === setup.focus)
        return turn(
          "I can focus on your team and requests, hiring, or personal tasks. Tell me which you'd like to prioritise."
        )
      if (/always|every time|whenever/.test(t)) {
        setup.focus = focus
        setup.priority = answer
        return turn("I've saved this focus for future visits.", brief())
      }
      if (/just|only|this time|right now/.test(t))
        return turn(
          "Here's a one-off update. Your saved focus is unchanged.",
          brief(focus)
        )
      setup.pendingFocus = focus
      setup.step = "scope"
      return turn("Here's a preview of that focus.", brief(focus))
    }
    case "scope":
      if (!/just|this time|every|always|return/.test(t))
        return turn(
          "Choose whether this is a one-off change or a preference for future visits."
        )
      if (/every|always/.test(t))
        setup.focus = setup.pendingFocus ?? setup.focus
      setup.pendingFocus = undefined
      setup.step = "briefing"
      return turn(
        /just|this time/.test(t)
          ? "Your previous focus is still saved. This is the preview for future visits."
          : "Saved for future visits.",
        brief()
      )
    case "widgets": {
      if (/keep|continue|done|save/.test(t)) {
        setup.step = "complete"
        return turn(
          "Your home is ready. You can finish here, or start a separate conversation to create a routine or report."
        )
      }
      if (/undo/.test(t))
        return {
          ...turn("Restored your previous widget arrangement."),
          undo: true,
        }
      if (!WIDGET_CHOICES.some((w) => w.pattern.test(t)))
        return turn(
          "You can add payslip, time off, candidates, documents, shifts, clock in, communities or agenda. Try “Remove agenda and add payslip”."
        )
      let widgets = [...openWidgets]
      for (const clause of t.split(
        /\s+and\s+(?=add|remove|hide|show|pin)|[,;]/
      )) {
        const remove = /remove|hide|without|unpin/.test(clause)
        if (/only/.test(clause) && !remove) widgets = []
        for (const w of WIDGET_CHOICES.filter((w) => w.pattern.test(clause)))
          widgets = remove
            ? widgets.filter((id) => id !== w.id)
            : [...new Set([...widgets, w.id])]
      }
      setup.step = "complete"
      return {
        ...turn(
          `Now in view: ${
            WIDGET_CHOICES.filter((w) => widgets.includes(w.id))
              .map((w) => w.label)
              .join(", ") || "no widgets"
          }. Your home is ready. You can undo this change or start a separate conversation below.`
        ),
        widgets,
      }
    }
    case "routines": {
      if (/later|skip/.test(t)) {
        setup.step = "reports"
        return turn("We can return to routines later. Let's look at reports.")
      }
      if (!/request|summary|monthly|weekly/.test(t))
        return turn(
          "This prototype can draft a request review or a regular summary. Pick one to see its conditions."
        )
      const summary = /summary/.test(t)
      setup.routine = {
        title: summary ? "Prepare a team summary" : "Review requests",
        cadence: /week/.test(t)
          ? "Every Monday at 09:00"
          : summary
            ? "First day of the month at 09:00"
            : "Every day at 09:00",
        condition: summary
          ? "Only team information available in Factorial"
          : "Pending requests: highlight conflicts and exceptions",
        action:
          "Prepare a draft for your review. Do not approve or send anything automatically.",
        saved: false,
      }
      setup.step = "routine-review"
      return turn(
        "Here's what the routine would do. This is a simulation; nothing will run.",
        { kind: "routine", draft: setup.routine }
      )
    }
    case "routine-review": {
      if (/later|skip/.test(t)) {
        setup.step = "complete"
        return turn("The routine draft is saved for later.")
      }
      if (!setup.routine) {
        setup.step = "routines"
        return turn("Let's prepare a routine draft.")
      }
      if (/save|confirm/.test(t)) {
        setup.routine = { ...setup.routine, saved: true }
        setup.step = "complete"
        return turn(
          "Simulated routine saved. No real actions have been scheduled.",
          { kind: "routine", draft: setup.routine }
        )
      }
      if (/week|monday|month|daily|every day/.test(t))
        setup.routine = {
          ...setup.routine,
          cadence: /week|monday/.test(t)
            ? "Every Monday at 09:00"
            : /month/.test(t)
              ? "First day of the month at 09:00"
              : "Every day at 09:00",
          saved: false,
        }
      else if (/^only |condition/.test(t))
        setup.routine = {
          ...setup.routine,
          condition: answer,
          saved: false,
        }
      else
        return turn(
          "Try a daily, weekly or monthly frequency, or a condition starting with “Only…”. Human review remains required.",
          { kind: "routine", draft: setup.routine }
        )
      return turn("Updated the draft. Review it before saving.", {
        kind: "routine",
        draft: setup.routine,
      })
    }
    case "reports": {
      if (/later|skip/.test(t)) {
        setup.step = "complete"
        return turn("Your home is saved. Reports can be added later from Edit.")
      }
      if (!/recruit|hiring|candidat|expense|spend/.test(t))
        return turn(
          "We can draft a recruitment or expenses report and adjust it here."
        )
      const metric = /expense|spend/.test(t) ? "expenses" : "recruitment"
      setup.report = {
        title:
          metric === "expenses" ? "Expense variance" : "Recruitment progress",
        metric,
        threshold: metric === "expenses" ? 15 : 7,
        cadence: "On each visit",
        saved: false,
      }
      setup.step = "report-review"
      return turn(
        "Here's the sample report and the rule that would flag a change.",
        { kind: "report", draft: setup.report }
      )
    }
    case "report-review": {
      if (/later|skip/.test(t)) {
        setup.step = "complete"
        return turn(
          "Report draft saved for later. Monitoring is not configured."
        )
      }
      if (!setup.report) {
        setup.step = "reports"
        return turn("Choose what you'd like to monitor.")
      }
      if (/save|confirm/.test(t)) {
        setup.report = { ...setup.report, saved: true }
        setup.step = "complete"
        return turn(
          "Simulated report saved. You can keep adjusting your home.",
          { kind: "report", draft: setup.report }
        )
      }
      const threshold = t.match(/\d+/)
      if (threshold || /week|visit|return/.test(t)) {
        const value = threshold ? Number(threshold[0]) : setup.report.threshold
        if (value < 1 || value > 100)
          return turn("Choose a threshold between 1 and 100 for this example.")
        setup.report = {
          ...setup.report,
          threshold: value,
          cadence: /week/.test(t)
            ? "Every week"
            : /visit|return/.test(t)
              ? "On each visit"
              : setup.report.cadence,
          saved: false,
        }
        return turn(
          "The draft now shows your changes. Check the signal before saving.",
          { kind: "report", draft: setup.report }
        )
      }
      return turn(
        "Try a threshold such as “10”, or change the review to weekly.",
        { kind: "report", draft: setup.report }
      )
    }
    case "complete":
      return turn(
        "You can change your updates, widgets, routines or reports from Edit. Everything agreed is saved in this browser."
      )
  }
}
