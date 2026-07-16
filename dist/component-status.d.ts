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
    hasMdxDocs: boolean;
    docQuality: DocQuality;
    storyFile: string;
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

export declare type DocQuality = "none" | "stub" | "acceptable" | "good" | "gold";

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
 * Minimum doc-quality tier a component must reach to count as documented for
 * the purposes of "stable". "acceptable" = required sections + props table.
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
}

/**
 * The Definition of Done for a stable component. Each requirement inspects a
 * raw entry and reports whether it is met.
 *
 * Scope note: automated a11y verification is intentionally NOT part of this
 * checklist yet — it is not tracked by the generator. Accessibility remains a
 * manual promotion gate (see docs/components-maturity.mdx). Add a requirement
 * here once an a11y signal is emitted into the status data.
 */
export declare const STABLE_REQUIREMENTS: ReadonlyArray<{
    key: string;
    label: string;
    detail: string;
    isMet: (c: ComponentEntry) => boolean;
}>;

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
        moodTracker: {
            insertMoodTracker: (data: MoodTrackerData) => ReturnType;
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
