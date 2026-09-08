import type { ReactNode } from "react"

import type { IconType } from "@/components/F0Icon"

/**
 * The public surface of `F0CommandPalette` (SPEC-006 / SPEC-039).
 *
 * The palette has ONE grammar — `[scope] › [action] › [params]` — and every type
 * here is a piece of it. Read them in that order: an `CommandEntityRef` is the
 * scope, a `CommandEntityAction` is the verb, a `CommandParamStep` is a value the
 * verb still needs.
 */

/** A person rendered as a real avatar instead of an icon. */
export type CommandEntityAvatar = {
  firstName: string
  lastName: string
  src?: string
}

/**
 * What the palette is scoped to: one record, or a selection of them.
 *
 * `kind: "many"` carries an id SNAPSHOT rather than a live selection, taken when
 * the palette opened — it is the authoritative target list for the run, so a
 * selection changing behind the overlay cannot redirect an action mid-flight.
 */
export type CommandEntityRef =
  | {
      type: string
      kind: "one"
      id: string
      /** Scope label and row title, e.g. `MacBook Pro 14"`. */
      label: string
      /** Tells duplicates apart while choosing, e.g. an owner or a model. */
      sublabel?: string
      icon?: IconType
      avatar?: CommandEntityAvatar
      /** Where `Enter` goes in global mode. Scoping uses `/` instead. */
      href?: string
    }
  | {
      type: string
      kind: "many"
      ids: string[]
      /** Scope label, e.g. `12 devices`. */
      label: string
      icon?: IconType
    }

/**
 * Friction tier of an action.
 *
 * It is a claim about CONSEQUENCE, not a confirmation step — the palette never
 * asks. `danger` keeps a row out of the default selection and stops a bare
 * `Enter` from reaching it, so the reader has to arrive on it deliberately; the
 * confirmation itself belongs to the dialog the consumer already owns.
 */
export const commandActionRisks = ["none", "confirm", "danger"] as const
export type CommandActionRisk = (typeof commandActionRisks)[number]

/**
 * Whether an action can run on the current scope, and why not.
 *
 * A gated action is never hidden: it stays listed, sinks below the runnable
 * ones, and shows its reason. Policy changes an action's behaviour, never its
 * presence — a row that vanishes teaches the reader nothing.
 */
export type CommandAvailability = { disabled: boolean; reason?: string }

/** How a run lands on a selection — stated on the row, before the commit. */
export type CommandImpact = {
  eligible: number
  total: number
  skipped: number
  reason?: string
}

/** One choice inside a parameter step. */
export type CommandParamOption = {
  value: string
  label: string
  sublabel?: string
  icon?: IconType
  avatar?: CommandEntityAvatar
}

/**
 * A value the action still needs, rendered as the next level of the palette
 * rather than as a separate dialog.
 *
 * Covers the `select` and `multiple` shapes. An action needing free-form or
 * multi-field input should collect nothing here and hand off to its own dialog
 * from `run` instead.
 */
export type CommandParamStep = {
  key: string
  /** Level heading and input placeholder, e.g. "Choose a version". */
  label: string
  options: (ref: CommandEntityRef) => CommandParamOption[]
  multiple?: boolean
}

/** Values collected across the parameter levels, keyed by `CommandParamStep.key`. */
export type CommandParamValues = Record<string, string[]>

/**
 * What the palette lends an action at run time, so a provider stays free of the
 * router and of any assistant runtime. An action that has to reach a screen
 * calls `navigate` rather than importing a router itself.
 */
export type CommandRunContext = {
  navigate: (href: string) => void
  /** Hands a prompt to the assistant. A no-op when no `assistant` is configured. */
  ask: (prompt: string) => void
}

/**
 * A row has to DO something, and there are exactly two things it can be: a
 * DESTINATION or a BEHAVIOUR. `href` for the first, `run` for the second, and
 * the union is what makes "one of them, never neither" a type error rather than
 * a row that silently does nothing when pressed.
 *
 * Most rows are destinations, so most rows want a plain string and no callback:
 * writing `run: () => navigate("/x")` to express "go to /x" buries a link inside
 * a function, and the palette then cannot know it IS a link — which is what
 * lets a destination row offer `Copy link` and open in a new tab.
 *
 * `TRun` is the callback's own shape, because a global command is handed the
 * context while an entity action is handed its target as well.
 */
type CommandDoes<TRun, THref = string> =
  | { href: THref; run?: never }
  | { run: TRun; href?: never }

/** An action that applies to a scoped record or selection. */
type CommandEntityActionBase = {
  /** Unique within its provider. */
  key: string
  /** Verb-first, so scanning and search both work: "Lock screen". */
  label: string
  description?: string
  icon: IconType
  /** Intent heading, e.g. Security · Maintenance · Lifecycle. */
  group: string
  /** Origin as metadata, never as navigation: "Script", "Query". */
  badge?: string
  risk: CommandActionRisk
  /** Extra terms the ranker should match on. */
  keywords?: string
  availability?: (ref: CommandEntityRef) => CommandAvailability
  impact?: (ref: CommandEntityRef) => CommandImpact | undefined
  /** Floats the action into "Suggested" while the query is empty. */
  suggested?: (ref: CommandEntityRef) => boolean
  params?: CommandParamStep[]
}

/**
 * An action that applies to a scoped record or selection.
 *
 * Either a destination or a behaviour, never neither. The destination may be a
 * plain string when it is the same wherever you came from, or a function of the
 * target when it is not — `(ref) => \`/devices/${ref.id}/history\`` — and it
 * receives the collected parameters too, so a step's answer can end up in the
 * URL.
 */
export type CommandEntityAction = CommandEntityActionBase &
  CommandDoes<
    (
      ref: CommandEntityRef,
      values: CommandParamValues,
      context: CommandRunContext
    ) => void,
    string | ((ref: CommandEntityRef, values: CommandParamValues) => string)
  >

/** Resolve an action's destination, whichever form it was declared in. */
export const commandActionHref = (
  action: CommandEntityAction,
  ref: CommandEntityRef,
  values: CommandParamValues
): string | undefined =>
  typeof action.href === "function"
    ? action.href(ref, values)
    : (action.href ?? undefined)

/**
 * One domain's contribution to the palette: how to find its records, and what
 * can be done to one.
 *
 * Declaring an action here once is what keeps a row menu, a bulk bar and the
 * palette projections of a single list instead of N×M surfaces.
 */
export type CommandEntityProvider = {
  /** Stable discriminator, and the value of `CommandEntityRef.type`. */
  type: string
  /** Group heading in the global list, e.g. "Devices". */
  label: string
  /**
   * Record lookup. Ranking across providers is the palette's job.
   *
   * MAY BE ASYNC, because real entity search is remote. Return an array when the
   * records are already in hand and a promise when they are not — the palette
   * renders skeleton rows in this provider's group while one is outstanding, and
   * a reason row if it rejects.
   *
   * The palette calls this on every query change and applies only the NEWEST
   * response, so a slow answer to `mac` can never overwrite a fast one to
   * `macbook`. It does not debounce: a provider that wants fewer round trips
   * should debounce inside its own `search`, since only it knows what a
   * round trip costs.
   */
  search: (
    query: string,
    limit: number
  ) => CommandEntityRef[] | Promise<CommandEntityRef[]>
  /**
   * The actions a ref can run. Omit it while a domain has not adopted the
   * registry: its records stay findable, they are just not yet actionable —
   * a valid state, since the palette still offers navigation.
   */
  actions?: (ref: CommandEntityRef) => CommandEntityAction[]
  /**
   * The records that live INSIDE a ref, so the palette can narrow before it
   * acts: a team's people, a project's tasks, a folder's documents.
   *
   * Named `inside` and not `children` on purpose: this returns REFS, and a prop
   * called `children` on anything React-shaped reads as a `ReactNode` slot.
   * Props here are data, strongly typed — never rendered nodes handed in.
   *
   * Return refs of any `type`. The palette resolves each one's actions from the
   * provider matching that type, so a team provider hands back `person` refs and
   * the person provider supplies what can be done to them — nothing has to know
   * about both.
   *
   * `query` is what has been typed inside the scope, and `limit` caps the rows:
   * a team of forty is a list to filter, not a list to print.
   */
  inside?: (
    ref: CommandEntityRef,
    query: string,
    limit: number
  ) => CommandEntityRef[] | Promise<CommandEntityRef[]>
}

export type CommandRowAction = {
  key: string
  /**
   * The accessible name, and it always carries the target: `Copy link to
   * MacBook Pro 14"`. The tooltip may be shorter — see `tip`.
   */
  label: string
  icon?: IconType
  /**
   * Visible text next to the icon. Give it to at most one action per row —
   * otherwise the row turns into a row of buttons.
   */
  text?: string

  tip?: string
  run: () => void
}

/** A flat global command: a shortcut, a jump, a thing to create. */
type CommandActionBase = {
  id: string
  label: string
  icon?: IconType
  /** Extra terms the ranker should match on. */
  keywords?: string
  /** Second line. Leave it out unless it says something the label cannot. */
  description?: string
  /**
   * The heading these commands collect under. Defaults to "Actions".
   *
   * A scoped action has always named its own group, and a global one could not
   * — so its heading was the one word on screen a product could not choose.
   * Same field, same meaning, both ends.
   */
  group?: string
}

/** A flat global command: a shortcut, a jump, a thing to create. */
export type CommandAction = CommandActionBase &
  CommandDoes<(context: CommandRunContext) => void>

/** An entry in the "Go to" group: somewhere in the product to land. */
export type CommandNavigationItem = {
  id: string
  label: string
  icon?: IconType
  keywords?: string
  href: string
  /** The heading these destinations collect under. Defaults to "Go to". */
  group?: string
}

/**
 * The assistant escape hatch — the way out of the list when nothing in it fit.
 *
 * Optional by design: with no `assistant`, the bar button, the trailing row and
 * the `mod+Enter` binding all disappear rather than degrading into dead
 * affordances. The palette does not know or care WHICH assistant this is; it
 * hands over a prompt and the scope it was built from.
 */
export type CommandAssistant = {
  /** The bar button's label, e.g. "Ask One". */
  label: string
  /** The assistant's own mark. Rendered as given — not tinted to a control glyph. */
  icon?: IconType
  /**
   * Receives the prompt the reader built. `ref` is the scope it was asked
   * inside, when there was one.
   */
  onAsk: (prompt: string, ref?: CommandEntityRef) => void
}

/**
 * Every word the palette puts ON SCREEN, for a product that words it
 * differently. All optional: each one falls back to F0's own translation, so
 * the palette is fully localised before anybody configures it.
 *
 * What is NOT here is deliberate. Accessible names, live-region announcements
 * and the tooltips on controls the palette generated itself stay in i18n —
 * they describe the component's own mechanics rather than the product's domain,
 * and moving them here would mean supplying `"Copy link to MacBook Pro 14\""`
 * in every language to get what F0 already ships translated.
 */
export type CommandPaletteLabels = {
  /** The prompt in the field while nothing is typed and nothing is scoped. */
  placeholder?: string
  /** The short form, for a field sharing its row with the assistant on a phone. */
  placeholderPhone?: string
  empty?: { title?: string; description?: string }
  /**
   * Headings over the palette's own buckets. A provider names its records'
   * group with `label`, and a command or destination names its own with
   * `group` — these are the ones the palette computes.
   */
  groups?: {
    recent?: string
    suggestions?: string
    actions?: string
    goTo?: string
    suggested?: string
    unavailable?: string
  }
  /** The key legend's labels. The keys themselves are glyphs, not copy. */
  footer?: {
    actions?: string
    rowActions?: string
    ask?: string
    choose?: string
    leaveScope?: string
    goBack?: string
  }
  /** Visible text and tooltips on the controls a row carries. */
  rowActions?: { actions?: string; copyLink?: string; linkCopied?: string }
  /** One word each, on the tooltip of a row's own `↵`. */
  verbs?: { open?: string; run?: string; ask?: string }
  /** Shown on a gated row that supplied no reason of its own. */
  unavailable?: string
  /** Shown in a provider's group when its search could not be reached. */
  searchFailed?: string
  /**
   * The blast radius, as a sentence. A function rather than a template: the
   * line carries three values and a conditional reason, and this is the only
   * form that can reorder them or drop the separator.
   */
  impact?: (impact: CommandImpact) => string
}

export type F0CommandPaletteProviderProps = {
  children: ReactNode
  /** Overrides for the copy the palette puts on screen. */
  labels?: CommandPaletteLabels
  /** The domains whose records are findable, in the order their groups appear. */
  providers?: CommandEntityProvider[]
  /** Flat global commands. Shown under "Suggestions" while the query is empty. */
  actions?: CommandAction[]
  /** The "Go to" group. */
  navigation?: CommandNavigationItem[]
  /**
   * Ids of `actions` or `navigation` entries to lead the empty state with, most
   * recent first.
   *
   * Consumer-owned on purpose: what counts as recent is a fact about the app's
   * history, not about this overlay, and the palette must not be the thing that
   * decides to write to storage.
   */
  recent?: string[]
  assistant?: CommandAssistant
  /**
   * How an `href` is followed. Defaults to a full page load, which is right for
   * an app without a client router and wrong for one with it — pass the router's
   * own navigate.
   */
  onNavigate?: (href: string) => void
  /**
   * Bind `mod+K` to open the palette.
   * @default true
   */
  shortcut?: boolean
  /** Controlled open state. Leave it out to let the palette own it. */
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/** What `useCommandPalette()` hands back. */
export type F0CommandPaletteApi = {
  open: () => void
  /**
   * Open already scoped to a record or a selection — the shortcut for any
   * surface that already knows its target (a row menu, a bulk bar, a detail
   * header), so the only thing left to do is name the verb.
   */
  openScoped: (ref: CommandEntityRef) => void
  close: () => void
  isOpen: boolean
}
