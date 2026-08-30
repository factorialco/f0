/**
 * Component Status API
 * ====================
 *
 * A small, dependency-free query layer over the computed component-status
 * dataset. Given a component name it returns the component's current maturity
 * status plus a checklist of what is still missing for it to be considered
 * "stable" (the Definition of Done).
 *
 * This is the single source of truth for the *policy* — what "stable" means.
 * The scan (`scripts/component-status-build.mjs`) only extracts raw facts
 * (tests / stories / docs / tags); the decision of whether those facts clear
 * the bar lives here so it can be reused and tested.
 *
 * Shipped as the `@factorialco/f0-react/dist/component-status` entry point:
 *
 *   import { getComponentStatus } from "@factorialco/f0-react/dist/component-status"
 *   getComponentStatus("Button")          // status + stable checklist
 *   getComponentStatus("F0Alert")?.missing // what's missing to be stable
 *
 * The dataset is computed from the `src/` tree at build/dev time and injected
 * via the `virtual:f0-component-status-data` module (see
 * `scripts/component-status-build.mjs`). There is no committed snapshot — every
 * build and dev-server start recomputes it from source, so it never goes stale.
 *
 * In this repo's Storybook it is also exposed on `window.f0ComponentStatus`
 * (see `.storybook/preview.tsx`).
 */
export type ApiStatus = "stable" | "experimental" | "deprecated" | "internal" | "unknown";
export type DocQuality = "none" | "stub" | "acceptable" | "good" | "gold";
/**
 * A component's accessibility posture, ordered like doc quality. "skipped" =
 * at least one story opts out of axe; "todo" = axe runs but non-blocking;
 * "enforced" = every story runs axe at test:"error" (⇒ axe-clean on a green
 * main). Stable requires "enforced".
 */
export type A11yTier = "skipped" | "todo" | "enforced";
/** Granular MDX signals used to score the doc tier and its per-criterion checks. */
export interface DocSignals {
    /** How many of Anatomy / Guidelines / Accessibility are present (0–3). */
    sectionsCount: number;
    hasProps: boolean;
    hasWhenToUse: boolean;
    hasWhenNotToUse: boolean;
    hasDoDonts: boolean;
    /** Number of `<Canvas>` example blocks. */
    exampleCount: number;
}
/** A raw entry as emitted by the generator. */
export interface ComponentEntry {
    name: string;
    zone: string;
    apiStatus: ApiStatus;
    tags: string[];
    hasStories: boolean;
    hasUnitTests: boolean;
    hasPlayFunction: boolean;
    /** Has a Chromatic visual-regression snapshot story (`withSnapshot(...)`). */
    hasSnapshot: boolean;
    hasMdxDocs: boolean;
    docQuality: DocQuality;
    docSignals: DocSignals;
    /** Accessibility posture: "skipped" | "todo" | "enforced" (see A11yTier). */
    a11yTier: A11yTier;
    storyFile: string;
}
export interface ComponentStatusStats {
    total: number;
    byStatus: Record<ApiStatus, number>;
    byZone: Record<string, number>;
    byDocQuality: Record<DocQuality, number>;
    withUnitTests: number;
    withMdxDocs: number;
}
/** The full generated dataset. */
export interface ComponentStatusData {
    generatedAt: string;
    stats: ComponentStatusStats;
    components: ComponentEntry[];
}
/** A sub-check enumerated under a requirement, with its own pass/fail. */
export interface CriterionResult {
    label: string;
    met: boolean;
}
/** One line item in the stable checklist. */
export interface RequirementResult {
    /** Stable machine key, e.g. "unitTests". */
    key: string;
    /** Human-readable requirement, e.g. "Has unit tests". */
    label: string;
    met: boolean;
    /** What is missing / how to satisfy it when unmet. */
    detail: string;
    /** Concrete sub-criteria (each with its own pass/fail) enumerated under
     * `detail`, when the requirement is made up of several checks. */
    criteria?: CriterionResult[];
}
export interface ComponentStatus extends ComponentEntry {
    /** The full Definition-of-Done checklist with pass/fail per item. */
    requirements: RequirementResult[];
    /** Unmet requirement labels — the "what's missing" answer. */
    missing: string[];
    /** True when every requirement in the checklist is met. */
    meetsBar: boolean;
    /** What the component currently *claims* to be. */
    taggedStable: boolean;
    /** Eligible to be stable (alias of meetsBar). */
    stableReady: boolean;
    /**
     * Mismatch between the tag and the bar:
     *   - "tagged-but-below-bar": marked stable but does not meet the DoD
     *   - "meets-bar-not-tagged": meets the DoD but not yet tagged stable
     *   - null: tag and bar agree
     */
    discrepancy: "tagged-but-below-bar" | "meets-bar-not-tagged" | null;
    /**
     * The maturity level the component *actually* has, per the Definition of Done.
     * A component is only "stable" when it is both tagged stable AND meets the
     * full checklist; anything else (untagged, below the bar, or meeting the bar
     * without the tag) is "experimental". `deprecated`/`internal` pass through.
     * This is what the badge shows — `apiStatus` is the raw declared tag.
     */
    effectiveStatus: ApiStatus;
    /** Human-readable badge label for `effectiveStatus`. */
    label: string;
    /** One-line human summary shown above the checklist. */
    summary: string;
    /** Whether the DoD checklist is meaningful for this maturity level. */
    showChecklist: boolean;
}
/** The full generated dataset (stats + every tracked component). */
export declare const componentStatusData: ComponentStatusData;
/**
 * Minimum doc-quality tier a stable component must reach. Per the Definition of
 * Done, promotion to stable requires the "good" tier (Gold encouraged);
 * "acceptable" is only the experimental Build bar.
 */
export declare const MIN_DOC_QUALITY: DocQuality;
/** Human-readable badge label per maturity level. */
export declare const STATUS_LABELS: Record<ApiStatus, string>;
/** Component naming convention: "F0" followed by an uppercase letter. */
export declare const F0_NAME_PATTERN: RegExp;
/**
 * The component's code name — the leaf of its folder, given its story file
 * path (a story in `__stories__/` maps to the parent folder). Story titles
 * legitimately drop the F0 prefix ("Checkbox" ↔ `F0Checkbox/`), so naming is
 * checked against the folder, which matches the exported symbol.
 */
export declare function componentFolderName(storyFile: string): string;
export declare const A11Y_TIER_ORDER: A11yTier[];
export declare function a11yTierAtLeast(actual: A11yTier, min: A11yTier): boolean;
/**
 * The Definition of Done for a stable component — the mechanically-checkable
 * subset of the lifecycle DoD (Lifecycle/Definition of Done). Each requirement
 * inspects a raw entry and reports whether it is met. `detail` is a neutral
 * description of the requirement (shown for met and unmet points alike).
 *
 * Scope note: some DoD items are not statically verifiable and are NOT gated
 * here — the axe a11y test passing, adoption by ≥3 product teams, no breaking
 * changes for 60 days, and Foundations approval. Those remain manual promotion
 * gates (see Lifecycle/Definition of Done).
 */
export declare const STABLE_REQUIREMENTS: ReadonlyArray<{
    key: string;
    label: string;
    detail: string;
    criteria?: Array<{
        label: string;
        isMet: (c: ComponentEntry) => boolean;
    }>;
    isMet: (c: ComponentEntry) => boolean;
}>;
/**
 * Evaluate a single raw component entry against the stable checklist. Pure —
 * exported so it can be unit-tested and reused over arbitrary datasets.
 */
export declare function evaluateComponentStatus(entry: ComponentEntry): ComponentStatus;
/**
 * Look up a component's status and stable checklist by name.
 *
 * Name matching is forgiving: case-insensitive, an optional `F0` prefix, and
 * punctuation are all ignored, and grouped names ("Avatars/Avatar") match on
 * their leaf ("Avatar"). When several components share a name across zones,
 * the one in the "components" zone wins; otherwise the first match is returned.
 *
 * @param components dataset to search; defaults to the build-time data. Pass an
 *   explicit array to query a custom set (used by tests).
 * @returns the component status, or `null` if no component matches.
 */
export declare function getComponentStatus(name: string, components?: ComponentEntry[]): ComponentStatus | null;
/**
 * Evaluate every tracked component.
 *
 * @param components dataset to evaluate; defaults to the build-time data.
 */
export declare function getAllComponentStatuses(components?: ComponentEntry[]): ComponentStatus[];
/** ISO timestamp of when the underlying status data was generated. */
export declare function getStatusGeneratedAt(): string;
