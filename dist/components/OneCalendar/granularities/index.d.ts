import { WeekStartsOn } from '../types';
import { DatePeriodsDefinition } from './periods';
import { GranularityDefinition } from './types';
export * from './consts';
export * from './periods/types';
export * from './types';
export declare const granularityDefinitions: {
    readonly day: GranularityDefinition;
    readonly week: GranularityDefinition;
    readonly month: GranularityDefinition;
    readonly quarter: GranularityDefinition;
    readonly halfyear: GranularityDefinition;
    readonly year: GranularityDefinition;
    readonly range: GranularityDefinition;
};
export type GranularityDefinitionKey = keyof typeof granularityDefinitions;
/**
 * The keys a date navigation can be set to. `periods` is not a member of the
 * static record — it has no definition until a consumer supplies its ranges —
 * so it widens only the types that can actually render it. Keeping it out of
 * `GranularityDefinitionKey` is what stops it leaking into every exhaustive map
 * over that key, in places (form-field presets, compare-to) where it can do
 * nothing.
 */
export type NavigationGranularityKey = GranularityDefinitionKey | "periods";
/**
 * The definition behind a key with no consumer data to build it from. Only
 * `periods` has one: its empty definition renders the "no periods" state, which
 * is what a periods value without periods means.
 */
export declare const resolveGranularityDefinition: (key: NavigationGranularityKey) => GranularityDefinition;
export type GranularityDefinitionsOptions = {
    weekStartsOn?: WeekStartsOn;
    periods?: DatePeriodsDefinition;
};
/**
 * Get granularity definitions with week granularity configured with the specified weekStartsOn.
 * The week granularity is only created when needed (lazy creation).
 *
 * The `periods` granularity is only selectable once the consumer supplies its
 * periods; without them it renders an empty list.
 *
 * Accepts a bare `weekStartsOn` for the original call style, or an options
 * object when more than the week start is configured.
 */
export declare function getGranularityDefinitions(options?: WeekStartsOn | GranularityDefinitionsOptions): Record<string, GranularityDefinition>;
