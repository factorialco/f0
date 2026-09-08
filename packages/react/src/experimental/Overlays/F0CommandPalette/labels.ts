import { useMemo } from "react"

import { useI18n } from "@/lib/providers/i18n"

import type { CommandImpact, CommandPaletteLabels } from "./types"

/**
 * Every word the palette puts ON SCREEN, resolved once.
 *
 * ## Why these are props and the rest are not
 *
 * The palette's strings fall into two kinds, and only one of them is the
 * product's to write.
 *
 * The words here LABEL CONTENT THE CONSUMER SUPPLIED — the heading over their
 * own commands, the prompt in the field, the empty state, the verbs in the
 * footer legend. A product that calls them something else is not fighting the
 * design system, it is describing its own domain, so `labels` lets it.
 *
 * What stays in i18n is everything the palette says ABOUT ITSELF: the accessible
 * name of a control it generated, the live-region announcement for a state it
 * entered, the tooltip on a button the consumer never declared. Those are not
 * product copy, and making them props would mean every consumer supplying
 * `"Copy link to MacBook Pro 14\""` in forty languages to get what F0 already
 * ships translated.
 *
 * ## Why the fallback is i18n and not a literal
 *
 * Because the palette has to work before anybody configures it. Every field is
 * optional and resolves to F0's own translation, so the zero-config palette is
 * fully localised and an override is an override rather than an obligation.
 */
export type ResolvedCommandLabels = {
  placeholder: string
  placeholderPhone: string
  empty: { title: string; description: string }
  groups: {
    recent: string
    suggestions: string
    actions: string
    goTo: string
    suggested: string
    unavailable: string
  }
  footer: {
    actions: string
    rowActions: string
    ask: string
    choose: string
    leaveScope: string
    goBack: string
  }
  rowActions: { actions: string; copyLink: string; linkCopied: string }
  verbs: { open: string; run: string; ask: string }
  unavailable: string
  searchFailed: string
  impact: (impact: CommandImpact) => string
}

/**
 * Merge a consumer's overrides over F0's translated defaults.
 *
 * Field by field rather than by spreading each group, so passing
 * `labels={{ groups: { actions: "Shortcuts" } }}` overrides that one heading
 * instead of blanking the five beside it — a partial object should be partial
 * all the way down.
 */
export const useCommandLabels = (
  overrides?: CommandPaletteLabels
): ResolvedCommandLabels => {
  const i18n = useI18n()

  /*
    MEMOISED, and it matters more than it looks. This object is a dependency of
    every row memo in the palette — the commands, the destinations, the records,
    the scope's actions and the final composed list — so returning a fresh one
    each render invalidated all of them, every render. That churned `rows` on
    every pass, which re-ran the layout effect that measures the row controls on
    every pass, and turned any incidental state change into a cascade deep enough
    for React to call it an infinite loop.
  */
  return useMemo(() => {
    const base = i18n.commandPalette
    return {
      placeholder: overrides?.placeholder ?? base.placeholder,
      placeholderPhone: overrides?.placeholderPhone ?? base.placeholderPhone,
      empty: {
        title: overrides?.empty?.title ?? base.empty.title,
        description: overrides?.empty?.description ?? base.empty.description,
      },
      groups: {
        recent: overrides?.groups?.recent ?? base.groups.recent,
        suggestions: overrides?.groups?.suggestions ?? base.groups.suggestions,
        actions: overrides?.groups?.actions ?? base.groups.actions,
        goTo: overrides?.groups?.goTo ?? base.groups.goTo,
        suggested: overrides?.groups?.suggested ?? base.groups.suggested,
        unavailable: overrides?.groups?.unavailable ?? base.groups.unavailable,
      },
      footer: {
        actions: overrides?.footer?.actions ?? base.footer.actions,
        rowActions: overrides?.footer?.rowActions ?? base.footer.rowActions,
        ask: overrides?.footer?.ask ?? base.footer.ask,
        choose: overrides?.footer?.choose ?? base.footer.choose,
        leaveScope: overrides?.footer?.leaveScope ?? base.footer.leaveScope,
        goBack: overrides?.footer?.goBack ?? base.footer.goBack,
      },
      rowActions: {
        actions: overrides?.rowActions?.actions ?? base.rowActions.actions,
        copyLink: overrides?.rowActions?.copyLink ?? base.rowActions.copyLink,
        linkCopied:
          overrides?.rowActions?.linkCopied ?? base.rowActions.linkCopied,
      },
      verbs: {
        open: overrides?.verbs?.open ?? base.row.verb.open,
        run: overrides?.verbs?.run ?? base.row.verb.run,
        ask: overrides?.verbs?.ask ?? base.row.verb.ask,
      },
      unavailable: overrides?.unavailable ?? base.row.unavailable,
      searchFailed: overrides?.searchFailed ?? base.row.searchFailed,
      /*
      A FUNCTION, not a template. The impact line carries three values and a
      conditional reason, and `"{{eligible}} of {{total}} · {{reason}}"` asks a
      consumer to know an interpolation dialect and to get the separator right.
      A function hands them the numbers and takes back a string, which is both
      strongly typed and the only form that can put them in another order.
    */
      impact:
        overrides?.impact ??
        ((impact) =>
          impact.skipped > 0 && impact.reason
            ? i18n.t("commandPalette.row.impactWithReason", {
                eligible: impact.eligible,
                total: impact.total,
                reason: impact.reason,
              })
            : i18n.t("commandPalette.row.impact", {
                eligible: impact.eligible,
                total: impact.total,
              })),
    }
  }, [i18n, overrides])
}
