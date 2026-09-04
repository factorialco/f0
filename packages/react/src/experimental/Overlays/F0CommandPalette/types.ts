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

/** An action that applies to a scoped record or selection. */
export type CommandEntityAction = {
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
  run: (
    ref: CommandEntityRef,
    values: CommandParamValues,
    context: CommandRunContext
  ) => void
}

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
  /** Record lookup. Ranking across providers is the palette's job. */
  search: (query: string, limit: number) => CommandEntityRef[]
  /**
   * The actions a ref can run. Omit it while a domain has not adopted the
   * registry: its records stay findable, they are just not yet actionable —
   * a valid state, since the palette still offers navigation.
   */
  actions?: (ref: CommandEntityRef) => CommandEntityAction[]
}

/** A secondary action that lives *on* a row, reached with `Tab` or by pointer. */
export type CommandRowAction = {
  key: string
  /**
   * Accessible name and tooltip. Verb-first and short: the row beside it already
   * names the target, so repeating it makes the tooltip cover the row it
   * describes.
   */
  label: string
  icon?: IconType
  /**
   * Visible text next to the icon. Give it to at most one action per row —
   * otherwise the row turns into a row of buttons.
   */
  text?: string
  run: () => void
}

/** A flat global command: a shortcut, a jump, a thing to create. */
export type CommandAction = {
  id: string
  label: string
  icon?: IconType
  /** Extra terms the ranker should match on. */
  keywords?: string
  /** Second line. Leave it out unless it says something the label cannot. */
  description?: string
  /** Where this command goes, if going somewhere is all it does. */
  href?: string
  /** What this command does. Runs instead of `href` when both are given. */
  run?: (context: CommandRunContext) => void
}

/** An entry in the "Go to" group: somewhere in the product to land. */
export type CommandNavigationItem = {
  id: string
  label: string
  icon?: IconType
  keywords?: string
  href: string
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

export type F0CommandPaletteProviderProps = {
  children: ReactNode
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
