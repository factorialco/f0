import { default as default_2 } from 'react';

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
export declare type ApiStatus = "stable" | "experimental" | "deprecated" | "internal" | "unknown";

/** A raw entry as emitted by the generator. */
export declare interface ComponentEntry {
    name: string;
    zone: string;
    apiStatus: ApiStatus;
    tags: string[];
    hasStories: boolean;
    hasUnitTests: boolean;
    hasPlayFunction: boolean;
    hasMdxDocs: boolean;
    docQuality: DocQuality;
    docSignals: DocSignals;
    storyFile: string;
}

/**
 * Renders a component's maturity status and Definition-of-Done checklist. All
 * text (badge label, summary, checklist labels and hints) comes from the
 * `component-status` data so Storybook and any consuming app stay identical.
 *
 * Renders nothing when the name doesn't resolve to a tracked component.
 */
export declare function ComponentStability({ componentName, components, className, }: ComponentStabilityProps): default_2.JSX.Element | null;

export declare interface ComponentStabilityProps {
    /** Component name to look up (e.g. "Card", "F0Alert", "Components/Card"). */
    componentName: string;
    /** Optional dataset override; defaults to the build-time data. */
    components?: ComponentEntry[];
    /** Extra classes for the outer container (e.g. spacing). */
    className?: string;
}

export declare interface ComponentStatus extends ComponentEntry {
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

/** The full generated dataset. */
export declare interface ComponentStatusData {
    generatedAt: string;
    stats: ComponentStatusStats;
    components: ComponentEntry[];
}

/** The full generated dataset (stats + every tracked component). */
export declare const componentStatusData: ComponentStatusData;

export declare interface ComponentStatusStats {
    total: number;
    byStatus: Record<ApiStatus, number>;
    byZone: Record<string, number>;
    byDocQuality: Record<DocQuality, number>;
    withUnitTests: number;
    withMdxDocs: number;
}

/** A sub-check enumerated under a requirement, with its own pass/fail. */
export declare interface CriterionResult {
    label: string;
    met: boolean;
}

export declare type DocQuality = "none" | "stub" | "acceptable" | "good" | "gold";

/** Granular MDX signals used to score the doc tier and its per-criterion checks. */
export declare interface DocSignals {
    /** How many of Anatomy / Guidelines / Accessibility are present (0–3). */
    sectionsCount: number;
    hasProps: boolean;
    hasWhenToUse: boolean;
    hasWhenNotToUse: boolean;
    hasDoDonts: boolean;
    /** Number of `<Canvas>` example blocks. */
    exampleCount: number;
}

/**
 * Evaluate a single raw component entry against the stable checklist. Pure —
 * exported so it can be unit-tested and reused over arbitrary datasets.
 */
export declare function evaluateComponentStatus(entry: ComponentEntry): ComponentStatus;

/**
 * Evaluate every tracked component.
 *
 * @param components dataset to evaluate; defaults to the build-time data.
 */
export declare function getAllComponentStatuses(components?: ComponentEntry[]): ComponentStatus[];

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

/** ISO timestamp of when the underlying status data was generated. */
export declare function getStatusGeneratedAt(): string;

/**
 * Minimum doc-quality tier a stable component must reach. Per the Definition of
 * Done, promotion to stable requires the "good" tier (Gold encouraged);
 * "acceptable" is only the experimental Build bar.
 */
export declare const MIN_DOC_QUALITY: DocQuality;

/** One line item in the stable checklist. */
export declare interface RequirementResult {
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

/** Human-readable badge label per maturity level. */
export declare const STATUS_LABELS: Record<ApiStatus, string>;

export { }


declare global {
    interface Window {
        XRay: {
            enable: (filter?: ComponentTypes[]) => void;
            disable: () => void;
        };
    }
}


declare namespace _DaytimePage {
    var displayName: string;
}


declare namespace _Page {
    var displayName: string;
}

declare module "gridstack" {
    interface GridStackWidget {
        id?: string;
        allowedSizes?: Array<{
            w: number;
            h: number;
        }>;
        meta?: Record<string, unknown>;
    }
    interface GridStackNode {
        allowedSizes?: Array<{
            w: number;
            h: number;
        }>;
    }
}


declare namespace Calendar {
    var displayName: string;
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        aiBlock: {
            insertAIBlock: (data: AIBlockData, config: AIBlockConfig) => ReturnType;
            executeAIAction: (actionType: string, config: AIBlockConfig) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        moodTracker: {
            insertMoodTracker: (data: MoodTrackerData) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        enhanceHighlight: {
            setEnhanceHighlight: (from: number, to: number, options?: {
                placeholder?: string;
            }) => ReturnType;
            clearEnhanceHighlight: () => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        transcript: {
            insertTranscript: (data: TranscriptData) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        videoEmbed: {
            setVideoEmbed: (options: {
                src: string;
            }) => ReturnType;
        };
    }
}


declare namespace F0GraphNodeWrapperInner {
    var displayName: string;
}


declare namespace F0GraphExpanderWrapperInner {
    var displayName: string;
}


declare namespace F0GraphCollapserWrapperInner {
    var displayName: string;
}
