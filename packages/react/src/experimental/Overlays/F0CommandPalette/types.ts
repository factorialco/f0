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
  actions?: (ref: CommandEntityRef) => CommandEntityActionGroup[]
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
   * NO `group` field, deliberately. A global command takes its heading from the
   * `CommandGroup` that holds it, because a heading is a fact about the group
   * rather than about one row inside it — five items each naming the same
   * string is five chances for them to disagree.
   *
   * A scoped action keeps its own `group`: that list is assembled by the
   * palette from a provider's `actions`, so there is no consumer-declared group
   * for it to inherit one from.
   */
}

/** A flat global command: a shortcut, a jump, a thing to create. */
export type CommandAction = CommandActionBase &
  CommandDoes<(context: CommandRunContext) => void>

/**
 * ONE HEADING AND WHAT SITS UNDER IT.
 *
 * Either items the consumer wrote, or a provider that fetches records — one
 * ordered list holds both, and the order it is written in is the order the
 * groups appear on screen.
 *
 * There is no separate `navigation` prop and no built-in "Go to". A destination
 * is a command whose `CommandDoes` picked `href`, so a group of destinations is
 * a group like any other and the product names it. The palette used to assign
 * those headings itself, which made "Actions" and "Go to" the only two words on
 * screen a product could not choose — and put copy about the consumer's own
 * content into a labels table, where it did not belong.
 *
 * Exactly one of `items` or `provider`, enforced by `never` on the other, so a
 * group carrying both is a type error rather than a silent precedence rule.
 *
 * Give it a STABLE identity — module scope, or memoised. It keys the row memos.
 */
/** A heading and the things under it — the shape every group here has. */
export type Grouped<TItem> = { label: string; items: TItem[] }

export type CommandGroup =
  | (Grouped<CommandAction> & { provider?: never })
  | { provider: CommandEntityProvider; label?: never; items?: never }

/**
 * A named set of actions on one record: "Security", "Maintenance", "Lifecycle".
 *
 * The heading sits HERE rather than on each action, for the same reason it sits
 * on `CommandGroup` rather than on each command. Three maintenance actions used
 * to write `group: "Maintenance"` three times — three chances to disagree — and
 * because the heading was per-row the palette then had to re-sort the list so
 * that rows of one intent came out contiguous, or a straggler re-emitted a
 * heading that had already appeared. A group cannot be non-contiguous.
 */
export type CommandEntityActionGroup = Grouped<CommandEntityAction>

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
 * EVERY WORD THE PALETTE PUTS ON SCREEN — all of it, and all of it required.
 *
 * The palette ships no copy of its own. It renders the consumer's records,
 * their commands and their destinations, so the words wrapped around that
 * content belong to the same product and arrive the same way: as props, rather
 * than half here and half in a shared translation table this component would
 * have to grow a key in every time a row learned a new state.
 *
 * REQUIRED, not optional with a fallback, because a fallback is exactly where
 * an untranslated string hides. An English default renders perfectly inside a
 * Spanish app and nothing fails — nothing is even detectably wrong until a
 * reader sees it. A required field is a compile error instead.
 *
 * ANYTHING THAT INTERPOLATES IS A FUNCTION, never a template carrying
 * `{{name}}`. A function is typed, so a missing value is a compile error rather
 * than a literal `{{name}}` on screen; it cannot be handed the wrong
 * interpolation dialect; and it is the only form that can reorder its parts or
 * choose a plural, which a template cannot do in any language that inflects.
 *
 * Define it at MODULE SCOPE and hand over the same object every render. It is
 * static copy, so there is nothing to recompute — and the palette keys its row
 * memos off these values.
 */
export type CommandPaletteLabels = {
  /** Accessible name of the overlay, for a screen reader announcing it. */
  label: string
  /** The prompt in the field while nothing is typed and nothing is scoped. */
  placeholder: string
  /** The short form, for a field sharing its row with the assistant on a phone. */
  placeholderPhone: string
  /** The prompt once the palette is scoped and only actions remain. */
  placeholderScoped: string
  /** The same, once the palette is scoped to a record. */
  fieldLabelScoped: (name: string) => string
  empty: { title: string; description: string }
  /**
   * Headings over the buckets the palette COMPUTES, and only those.
   *
   * Every other heading arrives with its content: a `CommandGroup` names itself
   * with `label`, and a provider names its records' group the same way. What is
   * left here is the three rearrangements the palette performs on that content
   * — what you did lately, what it floats first, what it had to gate. Those are
   * facts about this component's own behaviour, so they are generic copy;
   * "Actions" and "Go to" never were, and used to sit here by mistake.
   */
  groups: {
    recent: string
    suggested: string
    unavailable: string
  }
  /** The key legend's labels. The keys themselves are glyphs, not copy. */
  footer: {
    actions: string
    rowActions: string
    ask: string
    choose: string
    leaveScope: string
    goBack: string
  }
  /** The chip in the field, which is a control and needs a name. */
  scope: { remove: (name: string) => string }
  /** Visible text and tooltips on the controls a row carries. */
  rowActions: {
    actions: string
    actionsFor: (label: string) => string
    copyLink: string
    copyLinkTo: (label: string) => string
    linkCopied: string
  }
  /**
   * What the live region says when the palette changes under the reader.
   *
   * `scoped` is handed the count so it can pick its own plural — including the
   * zero case, which is why there is no separate "no actions" string.
   */
  announce: {
    scoped: (name: string, count: number) => string
    cleared: string
    unavailable: (label: string, reason: string) => string
    linkCopied: (url: string) => string
  }
  /** What one row says, and what pressing it will do. */
  row: {
    open: (label: string) => string
    run: (label: string) => string
    ask: (label: string) => string
    /** One word each, on the tooltip of a row's own `↵`. */
    verb: { open: string; run: string; ask: string }
    /** Shown on a gated row that supplied no reason of its own. */
    unavailable: string
    /** Shown in a provider's group when its search could not be reached. */
    searchFailed: string
  }
  /**
   * The blast radius, as a sentence. Three values and a conditional reason,
   * which is more than a template can put in a sensible order.
   */
  impact: (impact: CommandImpact) => string
}

export type F0CommandPaletteProviderProps = {
  children: ReactNode
  /** Every word the palette puts on screen. Required: it ships none itself. */
  labels: CommandPaletteLabels
  /**
   * Everything findable, as an ordered list of groups.
   *
   * One prop rather than three, because `actions`, `navigation` and `providers`
   * were the same idea three times — a heading and the rows under it. Order
   * here is order on screen, so where records sit relative to commands is the
   * product's call and no longer a rule buried in this component.
   */
  groups: CommandGroup[]
  /**
   * Ids of items in `groups` to lead the empty state with, most recent first.
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
