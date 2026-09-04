import { useCallback, useMemo } from "react"

import {
  ArrowRight,
  CheckCircleLine,
  Clock,
  ExternalLink,
  Link,
} from "@/icons/app"
import { fuzzyScore } from "@/lib/fuzzyMatch"
import { useI18n } from "@/lib/providers/i18n"

import type { CommandRow, CommandStage } from "./internal-types"
import type {
  CommandAction,
  CommandAssistant,
  CommandEntityAction,
  CommandEntityProvider,
  CommandEntityRef,
  CommandNavigationItem,
  CommandParamOption,
  CommandParamStep,
  CommandParamValues,
  CommandRowAction,
  CommandRunContext,
} from "./types"

/**
 * A keyword hit is worth slightly less than a label hit, so a command whose
 * TITLE matches always outranks one that only matches on a synonym.
 */
const KEYWORD_PENALTY = 2

const score = (
  query: string,
  label: string,
  keywords?: string
): number | null => {
  const onLabel = fuzzyScore(query, label)
  const onKeywords = keywords ? fuzzyScore(query, keywords) : null
  if (onLabel === null && onKeywords === null) return null
  return Math.max(
    onLabel ?? -Infinity,
    (onKeywords ?? -Infinity) - KEYWORD_PENALTY
  )
}

type RankableRow = CommandRow & { keywords?: string }

const rankRows = (rows: RankableRow[], query: string): CommandRow[] =>
  rows
    .map((row) => ({ row, s: score(query, row.label, row.keywords) }))
    .filter(
      (entry): entry is { row: RankableRow; s: number } => entry.s !== null
    )
    .sort((a, b) => b.s - a.s)
    .map(({ row }) => row)

type UseCommandRowsOptions = {
  query: string
  scope: CommandEntityRef | null
  stage: CommandStage
  providers: CommandEntityProvider[]
  actions: CommandAction[]
  navigation: CommandNavigationItem[]
  recent: string[]
  assistant?: CommandAssistant
  context: CommandRunContext
  /** Push an action to its next level: its parameters, then the run. */
  onAdvance: (
    action: CommandEntityAction,
    values: CommandParamValues,
    fromStep: number
  ) => void
  onCopyLink: (href: string) => void
}

/**
 * Everything the list shows, for every mode, in one ordered array.
 *
 * The palette renders whatever this returns and never re-sorts it, so the
 * ordering rules live here in one place: what you can do sits at the top, what
 * you cannot still explains itself at the bottom, and the assistant closes the
 * list rather than heading it.
 */
export const useCommandRows = ({
  query,
  scope,
  stage,
  providers,
  actions,
  navigation,
  recent,
  assistant,
  context,
  onAdvance,
  onCopyLink,
}: UseCommandRowsOptions): CommandRow[] => {
  const i18n = useI18n()
  const q = query.trim()

  const runAction = useCallback(
    (action: CommandAction) => () => {
      if (action.run) {
        action.run(context)
        return
      }
      if (action.href) context.navigate(action.href)
    },
    [context]
  )

  /** Flat global commands, as rows. */
  const actionRows = useMemo<RankableRow[]>(
    () =>
      actions.map((action) => ({
        id: action.id,
        group: i18n.commandPalette.groups.actions,
        label: action.label,
        hint: action.description,
        icon: action.icon ?? ArrowRight,
        keywords: action.keywords,
        run: runAction(action),
      })),
    [actions, i18n, runAction]
  )

  /**
   * The "Go to" group shares ONE icon. Varied per-destination glyphs read as
   * noise down a dense list; a single quiet arrow keeps the eye on the labels.
   */
  const navigationRows = useMemo<RankableRow[]>(
    () =>
      navigation.map((item) => ({
        id: item.id,
        group: i18n.commandPalette.groups.goTo,
        label: item.label,
        icon: item.icon ?? ArrowRight,
        keywords: item.keywords,
        run: () => context.navigate(item.href),
      })),
    [context, i18n, navigation]
  )

  /**
   * Record rows from every provider. `Enter` opens the record, `/` scopes to it,
   * `Tab` reaches its own actions — three keys, three jobs, none overloaded.
   */
  const entityRows = useMemo<CommandRow[]>(() => {
    if (!q) return []

    return providers.flatMap((provider) =>
      provider.search(q, 5).map((ref): CommandRow => {
        const href = ref.kind === "one" ? ref.href : undefined

        const rowActions: CommandRowAction[] = [
          ...(assistant
            ? [
                {
                  key: "ask",
                  label: `${assistant.label}: ${ref.label}`,
                  icon: assistant.icon,
                  text: assistant.label,
                  run: () => assistant.onAsk(ref.label, ref),
                },
              ]
            : []),
          ...(href
            ? [
                {
                  key: "new-tab",
                  label: i18n.commandPalette.rowActions.openInNewTab,
                  icon: ExternalLink,
                  run: () => window.open(href, "_blank", "noopener,noreferrer"),
                },
                {
                  key: "copy",
                  label: i18n.commandPalette.rowActions.copyLink,
                  icon: Link,
                  run: () => onCopyLink(href),
                },
              ]
            : []),
        ]

        return {
          id: `${ref.type}-${ref.kind === "one" ? ref.id : ref.ids.join(",")}`,
          group: provider.label,
          label: ref.label,
          hint: ref.kind === "one" ? ref.sublabel : undefined,
          icon: ref.icon ?? ArrowRight,
          avatar: ref.kind === "one" ? ref.avatar : undefined,
          // Only offer the gesture when there is something on the other side of
          // it: scoping to a domain that ships no actions is a dead end.
          scopeRef: provider.actions ? ref : undefined,
          rowActions,
          run: () => {
            if (href) context.navigate(href)
          },
        }
      })
    )
  }, [assistant, context, i18n, onCopyLink, providers, q])

  /**
   * The scoped action list: availability and impact resolved per row, suggested
   * floated to the top on an empty query, blocked sunk to the bottom WITH the
   * reason rather than hidden.
   */
  const scopedRows = useMemo<CommandRow[]>(() => {
    if (!scope) return []
    const provider = providers.find(
      (candidate) => candidate.type === scope.type
    )
    const available = provider?.actions?.(scope) ?? []

    const resolved = available.map((action) => {
      const availability = action.availability?.(scope) ?? { disabled: false }
      const impact = action.impact?.(scope)
      // The blast radius, stated on the row the reader is about to press Enter
      // on — with the reason for the gap, since "3 of 4" and no why is as
      // unsettling as no number at all.
      const impactHint =
        impact && impact.total > 1
          ? impact.skipped > 0 && impact.reason
            ? i18n.t("commandPalette.row.impactWithReason", {
                eligible: impact.eligible,
                total: impact.total,
                reason: impact.reason,
              })
            : i18n.t("commandPalette.row.impact", {
                eligible: impact.eligible,
                total: impact.total,
              })
          : undefined

      return {
        action,
        disabled: availability.disabled,
        reason: availability.reason,
        impactHint,
        suggested: !q && (action.suggested?.(scope) ?? false),
      }
    })

    const matches = (action: CommandEntityAction) =>
      !q || score(q, action.label, action.keywords) !== null

    const filtered = resolved.filter((entry) => matches(entry.action))
    const enabled = filtered.filter((entry) => !entry.disabled)
    const suggested = enabled.filter((entry) => entry.suggested)
    const rest = enabled.filter((entry) => !entry.suggested)
    const blocked = filtered.filter((entry) => entry.disabled)

    const toRow = (
      entry: (typeof resolved)[number],
      group: string
    ): CommandRow => ({
      id: `action-${entry.action.key}`,
      group,
      label: entry.action.label,
      hint: entry.disabled
        ? entry.reason
        : (entry.impactHint ?? entry.action.description),
      icon: entry.action.icon,
      badge: entry.action.badge,
      disabledReason: entry.disabled
        ? (entry.reason ?? i18n.commandPalette.row.unavailable)
        : undefined,
      danger: entry.action.risk === "danger",
      run: () => onAdvance(entry.action, {}, 0),
    })

    /**
     * Rows of the same intent must be CONTIGUOUS whatever order the provider
     * returned them in — otherwise a late straggler re-emits a heading that has
     * already appeared, which reads as a rendering bug. Group order is first
     * appearance, so the provider still decides which intent leads.
     */
    const order: string[] = []
    for (const entry of rest) {
      if (!order.includes(entry.action.group)) order.push(entry.action.group)
    }
    const grouped = order.flatMap((group) =>
      rest.filter((entry) => entry.action.group === group)
    )

    // Blocked rows collect under ONE trailing heading rather than re-emitting
    // every intent group a second time.
    return [
      ...suggested.map((entry) =>
        toRow(entry, i18n.commandPalette.groups.suggested)
      ),
      ...grouped.map((entry) => toRow(entry, entry.action.group)),
      ...blocked.map((entry) =>
        toRow(entry, i18n.commandPalette.groups.unavailable)
      ),
    ]
  }, [i18n, onAdvance, providers, q, scope])

  /** Parameter options as rows — the level is a list, not a dialog. */
  const paramRows = useMemo<CommandRow[]>(() => {
    if (stage.kind !== "param" || !scope) return []
    const step: CommandParamStep | undefined = (stage.action.params ?? [])[
      stage.step
    ]
    if (!step) return []

    const chosen = new Set(stage.values[step.key] ?? [])
    const options = step.options(scope)
    const ranked = q
      ? options.filter((option) => fuzzyScore(q, option.label) !== null)
      : options

    return ranked.map(
      (option: CommandParamOption): CommandRow => ({
        id: `option-${step.key}-${option.value}`,
        group: step.label,
        label: option.label,
        hint: option.sublabel,
        icon:
          option.icon ??
          (chosen.has(option.value) ? CheckCircleLine : undefined),
        avatar: option.avatar,
        run: () => {
          const next: CommandParamValues = {
            ...stage.values,
            [step.key]: step.multiple
              ? [...(stage.values[step.key] ?? []), option.value]
              : [option.value],
          }
          onAdvance(stage.action, next, stage.step + 1)
        },
      })
    )
  }, [onAdvance, q, scope, stage])

  /**
   * The way out of the list. It closes the list rather than heading it: inside a
   * scope the actions are the point, and in global mode the eye arrives here
   * when nothing above it fit.
   */
  const assistantRow = useMemo<CommandRow | null>(() => {
    if (!assistant) return null
    const prompt = query.trim()
    return {
      id: "assistant",
      group: assistant.label,
      label: scope
        ? `${assistant.label}: ${scope.label}`
        : `${assistant.label}: ${prompt}`,
      icon: assistant.icon,
      assistant: true,
      run: () => assistant.onAsk(prompt, scope ?? undefined),
    }
  }, [assistant, query, scope])

  return useMemo<CommandRow[]>(() => {
    if (stage.kind === "param") return paramRows

    if (scope) {
      return [...scopedRows, ...(assistantRow ? [assistantRow] : [])]
    }

    // The opening state: what you were just doing, then what you might do.
    // No assistant row — an offer nobody asked for is an advert, and the bar
    // button already carries that affordance without taking a result's slot.
    if (!q) {
      const byId = new Map<string, CommandRow>([
        ...actionRows.map((row): [string, CommandRow] => [row.id, row]),
        ...navigationRows.map((row): [string, CommandRow] => [row.id, row]),
      ])
      const recentRows = recent
        .map((id) => byId.get(id))
        .filter((row): row is CommandRow => Boolean(row))
        .map((row) => ({
          ...row,
          id: `recent-${row.id}`,
          group: i18n.commandPalette.groups.recent,
          icon: Clock,
          hint: undefined,
        }))
      const suggestions = actionRows.map((row) => ({
        ...row,
        group: i18n.commandPalette.groups.suggestions,
      }))
      return [...recentRows, ...suggestions]
    }

    return [
      ...rankRows(actionRows, q),
      ...entityRows,
      ...rankRows(navigationRows, q),
      ...(assistantRow ? [assistantRow] : []),
    ]
  }, [
    actionRows,
    assistantRow,
    entityRows,
    i18n,
    navigationRows,
    paramRows,
    q,
    recent,
    scope,
    scopedRows,
    stage,
  ])
}
