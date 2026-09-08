import { useCallback, useMemo } from "react"
import {
  ArrowRight,
  CheckCircleLine,
  ChevronRight,
  Clock,
  Link,
} from "@/icons/app"
import { fuzzyScore } from "@/lib/fuzzyMatch"
import { useI18n } from "@/lib/providers/i18n"
import type { CommandRow, CommandStage } from "./internal-types"
import type { ResolvedCommandLabels } from "./labels"
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
import type { EntitySearchState, ScopeChildrenState } from "./useEntitySearch"

/**
 * A keyword hit is worth slightly less than a label hit, so a command whose
 * TITLE matches always outranks one that only matches on a synonym.
 */
const KEYWORD_PENALTY = 2

/** How many placeholder rows stand in for a provider still answering. */
const SKELETON_ROWS = 3

const score = (
  query: string,
  label: string,
  keywords?: string
): number | null => {
  const onLabel = fuzzyScore(query, label)
  const onKeywords = keywords ? fuzzyScore(query, keywords) : null
  if (onLabel === null && onKeywords === null) {
    return null
  }
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
  labels: ResolvedCommandLabels
  /** Per-provider entity search state: what answered, what is pending, what failed. */
  search: EntitySearchState
  /** The current scope's own records, with their loading. */
  children: ScopeChildrenState
  onEnterScope: (ref: CommandEntityRef) => void
  /** Whether the chain has room for another link — the depth cap. */
  canDrill: boolean
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
  labels,
  search,
  children,
  onEnterScope,
  canDrill,
}: UseCommandRowsOptions): CommandRow[] => {
  const i18n = useI18n()
  const q = query.trim()

  const runAction = useCallback(
    (action: CommandAction) => () => {
      if (action.run) {
        action.run(context)
        return
      }
      if (action.href) {
        context.navigate(action.href)
      }
    },
    [context]
  )

  /** Flat global commands, as rows. */
  const actionRows = useMemo<RankableRow[]>(
    () =>
      actions.map((action) => ({
        id: action.id,
        group: action.group ?? labels.groups.actions,
        label: action.label,
        hint: action.description,
        icon: action.icon ?? ArrowRight,
        keywords: action.keywords,
        run: runAction(action),
      })),
    [actions, labels, runAction]
  )

  /**
   * The "Go to" group shares ONE icon. Varied per-destination glyphs read as
   * noise down a dense list; a single quiet arrow keeps the eye on the labels.
   */
  const navigationRows = useMemo<RankableRow[]>(
    () =>
      navigation.map((item) => ({
        id: item.id,
        group: item.group ?? labels.groups.goTo,
        label: item.label,
        icon: item.icon ?? ArrowRight,
        keywords: item.keywords,
        run: () => context.navigate(item.href),
      })),
    [context, labels, navigation]
  )

  /**
   * Whether a ref is worth drilling into: its own provider has to offer
   * something on the other side. Scoping to a record with neither actions nor
   * children is a dead end, and offering the gesture there teaches the reader
   * that the gesture does nothing.
   *
   * Resolved from the REF's type, not from whoever produced it — a team hands
   * back people, and it is the person provider that says what a person can do.
   */
  const canDrillInto = useCallback(
    (ref: CommandEntityRef) => {
      const owner = providers.find((candidate) => candidate.type === ref.type)
      return Boolean(owner?.actions || owner?.inside)
    },
    [providers]
  )

  /**
   * One record as a row — the same shape whether it came from global search or
   * from inside a scope, because it is the same thing either way: a reference
   * you can open, act on, or narrow into.
   */
  const refToRow = useCallback(
    (ref: CommandEntityRef, group: string, canScope: boolean): CommandRow => {
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

        ...(canScope
          ? [
              {
                key: "actions",
                label: i18n.t("commandPalette.rowActions.actionsFor", {
                  label: ref.label,
                }),
                tip: i18n.commandPalette.rowActions.actions,
                icon: ChevronRight,
                run: () => onEnterScope(ref),
              },
            ]
          : []),
        ...(href
          ? [
              {
                key: "copy",
                label: i18n.t("commandPalette.rowActions.copyLinkTo", {
                  label: ref.label,
                }),
                tip: i18n.commandPalette.rowActions.copyLink,
                icon: Link,
                run: () => onCopyLink(href),
              },
            ]
          : []),
      ]

      return {
        id: `${ref.type}-${ref.kind === "one" ? ref.id : ref.ids.join(",")}`,
        group,
        label: ref.label,
        hint: ref.kind === "one" ? ref.sublabel : undefined,
        icon: ref.icon ?? ArrowRight,
        avatar: ref.kind === "one" ? ref.avatar : undefined,
        scopeRef: canScope ? ref : undefined,
        rowActions,
        run: () => {
          if (href) {
            context.navigate(href)
          }
        },
      }
    },
    [assistant, context, i18n, onCopyLink, onEnterScope]
  )

  /**
   * Record rows from every provider. `Enter` opens the record, `Tab` commits it
   * onto the chain, `→` reaches its own controls — three keys, three jobs, none
   * overloaded.
   */
  const entityRows = useMemo<CommandRow[]>(() => {
    if (!q) {
      return []
    }
    return providers.flatMap((provider) => {
      /*
        A PROVIDER STILL ANSWERING GETS ITS SPACE HELD, not skipped. Skipping it
        makes the list jump as each domain lands, and — worse — a reader who
        looks before the slowest one answers concludes there are no devices
        called that. Skeleton rows say "this is coming" in the place it will
        arrive.
      */
      if (search.pending.includes(provider.type)) {
        return Array.from({ length: SKELETON_ROWS }, (_, index) => ({
          id: `${provider.type}-skeleton-${index}`,
          group: provider.label,
          label: "",
          skeleton: true,
          run: () => undefined,
        }))
      }

      /*
        A PROVIDER THAT FAILED SAYS SO, reusing the blocked-row treatment: it is
        listed, it is not runnable, and its reason is both shown and announced.
        Silence here is the one outcome that misleads, because "we could not
        reach Devices" and "there are no such devices" look identical.
      */
      if (search.failed.includes(provider.type)) {
        return [
          {
            id: `${provider.type}-failed`,
            group: provider.label,
            label: provider.label,
            disabledReason: labels.searchFailed,
            run: () => undefined,
          },
        ]
      }

      return (search.refs[provider.type] ?? []).map((ref) =>
        refToRow(ref, provider.label, canDrillInto(ref))
      )
    })
  }, [canDrillInto, labels, providers, q, refToRow, search])

  /**
   * The records INSIDE the current scope — a team's people, a project's tasks.
   *
   * They are built by the same function as a global search hit, because they are
   * the same thing: a reference you can open, act on, or narrow into again. The
   * only difference is where they were found, which the group heading says.
   */
  const childRows = useMemo<CommandRow[]>(() => {
    if (!scope || !canDrill) {
      return []
    }

    /** Whatever group these records belong to, for a heading or a placeholder. */
    const groupOf = (ref: CommandEntityRef) =>
      providers.find((candidate) => candidate.type === ref.type)?.label ??
      labels.groups.suggestions

    // The same treatment global search gets: hold the space while it loads,
    // and say so rather than nothing when it fails.
    if (children.pending) {
      return Array.from({ length: SKELETON_ROWS }, (_, index) => ({
        id: `inside-skeleton-${index}`,
        group: labels.groups.suggestions,
        label: "",
        skeleton: true,
        run: () => undefined,
      }))
    }
    if (children.failed) {
      return [
        {
          id: "inside-failed",
          group: labels.groups.suggestions,
          label: labels.groups.suggestions,
          disabledReason: labels.searchFailed,
          run: () => undefined,
        },
      ]
    }

    return children.refs.map((ref) =>
      refToRow(ref, groupOf(ref), canDrillInto(ref))
    )
  }, [canDrill, canDrillInto, children, labels, providers, refToRow, scope])

  /**
   * The scoped action list: availability and impact resolved per row, suggested
   * floated to the top on an empty query, blocked sunk to the bottom WITH the
   * reason rather than hidden.
   */
  const scopedRows = useMemo<CommandRow[]>(() => {
    if (!scope) {
      return []
    }
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
        impact && impact.total > 1 ? labels.impact(impact) : undefined

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
        ? (entry.reason ?? labels.unavailable)
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
      if (!order.includes(entry.action.group)) {
        order.push(entry.action.group)
      }
    }
    const grouped = order.flatMap((group) =>
      rest.filter((entry) => entry.action.group === group)
    )

    /*
      Blocked rows collect under ONE trailing heading rather than re-emitting
      every intent group a second time.

      CHILDREN SIT BETWEEN THE ACTIONS AND THE BLOCKED ONES, which is the only
      slot that keeps both rules. Verbs first, because scoping to a thing is
      already the deliberate act of choosing it and what you can DO to it is the
      question that follows; narrowing further is the second move, not the
      first. And blocked stays last whatever else appears, so a row that cannot
      run never sits above one that can.
    */
    return [
      ...suggested.map((entry) => toRow(entry, labels.groups.suggested)),
      ...grouped.map((entry) => toRow(entry, entry.action.group)),
      ...childRows,
      ...blocked.map((entry) => toRow(entry, labels.groups.unavailable)),
    ]
  }, [childRows, i18n, onAdvance, providers, q, scope])

  /** Parameter options as rows — the level is a list, not a dialog. */
  const paramRows = useMemo<CommandRow[]>(() => {
    if (stage.kind !== "param" || !scope) {
      return []
    }
    const step: CommandParamStep | undefined = (stage.action.params ?? [])[
      stage.step
    ]
    if (!step) {
      return []
    }

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
    if (!assistant) {
      return null
    }
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
    if (stage.kind === "param") {
      return paramRows
    }

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
          group: labels.groups.recent,
          icon: Clock,
          hint: undefined,
        }))
      const suggestions = actionRows.map((row) => ({
        ...row,
        group: labels.groups.suggestions,
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
