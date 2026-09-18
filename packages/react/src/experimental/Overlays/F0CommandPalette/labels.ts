import { useMemo, useRef } from "react"
import type { CommandPaletteLabels } from "./types"

/**
 * The consumer's copy, held at a STABLE IDENTITY.
 *
 * The palette carries no words of its own, so `labels` arrives as a prop and
 * this is the only thing left to do with it — but it is not nothing. Every row
 * memo in the palette depends on these values: the commands, the destinations,
 * the records, the scope's actions and the final composed list. A consumer who
 * writes `labels={{ ... }}` inline hands over a new object on every render, and
 * an unmemoised pass-through would then invalidate all of those memos on every
 * render, re-run the layout effect that measures the row controls on every
 * render, and give any incidental state change a cascade to travel down. That
 * is not hypothetical — it is how this component earned a
 * "Maximum update depth exceeded" once already.
 *
 * So the object goes in a ref and the returned identity is keyed on a SIGNATURE
 * of the plain strings, which is the same trick `useEntitySearch` plays on
 * `providers`. Copy that reads the same is copy that changed nothing.
 *
 * Functions are deliberately NOT part of the signature. They cannot be compared
 * — an inline arrow differs on every render — and a signature including them
 * would never match, defeating the whole exercise. They are read through the
 * ref instead, which means a consumer swapping in a genuinely different
 * interpolation without touching a single plain string will not re-render the
 * rows. That is the right trade: these are static copy, and the alternative is
 * the render loop above.
 */
export const useCommandLabels = (
  labels: CommandPaletteLabels
): CommandPaletteLabels => {
  const latest = useRef(labels)
  latest.current = labels

  const signature = JSON.stringify(labels)

  /* eslint-disable react-hooks/exhaustive-deps -- keyed on the signature, by design */
  return useMemo(() => {
    const current = () => latest.current
    return {
      label: labels.label,
      placeholder: labels.placeholder,
      placeholderPhone: labels.placeholderPhone,
      placeholderScoped: labels.placeholderScoped,
      fieldLabelScoped: (name) => current().fieldLabelScoped(name),
      empty: { ...labels.empty },
      groups: { ...labels.groups },
      footer: { ...labels.footer },
      scope: { remove: (name) => current().scope.remove(name) },
      rowActions: {
        actions: labels.rowActions.actions,
        actionsFor: (label) => current().rowActions.actionsFor(label),
        copyLink: labels.rowActions.copyLink,
        copyLinkTo: (label) => current().rowActions.copyLinkTo(label),
        linkCopied: labels.rowActions.linkCopied,
      },
      announce: {
        scoped: (name, count) => current().announce.scoped(name, count),
        cleared: labels.announce.cleared,
        unavailable: (label, reason) =>
          current().announce.unavailable(label, reason),
        linkCopied: (url) => current().announce.linkCopied(url),
      },
      row: {
        open: (label) => current().row.open(label),
        run: (label) => current().row.run(label),
        ask: (label) => current().row.ask(label),
        verb: { ...labels.row.verb },
        unavailable: labels.row.unavailable,
        searchFailed: labels.row.searchFailed,
      },
      impact: (impact) => current().impact(impact),
    }
  }, [signature])
  /* eslint-enable react-hooks/exhaustive-deps */
}
