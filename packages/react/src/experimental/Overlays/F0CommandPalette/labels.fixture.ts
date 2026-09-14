import type { CommandPaletteLabels } from "./types"

/**
 * English copy for the stories and the tests.
 *
 * A FIXTURE, not a default — hence `.fixture.ts`, which is also what keeps it
 * out of the untranslated-copy gate: these strings are sample data, not shipped
 * copy that owes anybody a translation.
 *
 * The palette ships no copy at all: `labels` is required, and the point of that
 * is that nothing renders a word the consumer did not write. This file is what
 * a consumer's own constant would look like, kept here so the stories and the
 * tests share one and stay in step, and deliberately not exported from the
 * package — the moment it is, it becomes the default it was meant to replace.
 *
 * Module scope, defined once, so every story hands the palette the same object.
 */
export const englishLabels: CommandPaletteLabels = {
  label: "Command palette",
  placeholder: "Search, or type a name then Tab to use it",
  placeholderPhone: "Search or ask",
  placeholderScoped: "Run an action",
  fieldLabelScoped: (name) => `Search or run an action on ${name}`,
  empty: { title: "No results", description: "Try a different search." },
  groups: {
    recent: "Recent",
    suggested: "Suggested",
    unavailable: "Not available here",
  },
  footer: {
    actions: "Actions",
    rowActions: "Row actions",
    ask: "Ask",
    choose: "Choose",
    leaveScope: "Leave scope",
    goBack: "Go back",
  },
  scope: { remove: (name) => `${name}, remove this scope` },
  rowActions: {
    actions: "Actions",
    actionsFor: (label) => `Actions for ${label}`,
    copyLink: "Copy link",
    copyLinkTo: (label) => `Copy link to ${label}`,
    linkCopied: "Link copied",
  },
  announce: {
    // The zero and the plural in one place, which is the reason this is a
    // function and not three template strings.
    scoped: (name, count) =>
      count === 0
        ? `Scoped to ${name}. No actions available.`
        : `Scoped to ${name}. ${count} ${count === 1 ? "action" : "actions"}.`,
    cleared: "Scope cleared.",
    unavailable: (label, reason) => `${label} is not available. ${reason}`,
    linkCopied: (url) => `Link copied. ${url}`,
  },
  row: {
    open: (label) => `Open ${label}`,
    run: (label) => `Run ${label}`,
    ask: (label) => `Ask about ${label}`,
    verb: { open: "Open", run: "Run", ask: "Ask" },
    unavailable: "Not available here",
    searchFailed: "Could not load these results",
  },
  impact: (impact) =>
    impact.skipped > 0 && impact.reason
      ? `${impact.eligible} of ${impact.total} · ${impact.reason}`
      : `${impact.eligible} of ${impact.total}`,
}
