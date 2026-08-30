/**
 * Debounced state backed by a plain setTimeout, as a safe replacement for
 * usehooks-ts' `useDebounceValue` (lodash.debounce). lodash has two failure
 * modes we keep hitting:
 *
 * - It decides its trailing edge by reading `Date.now()`, so under a frozen
 *   clock (MockDate in Storybook stories, mocked dates in tests) the wait
 *   window never elapses and the debounced update never applies.
 * - usehooks-ts' unmount cleanup cancels a different lodash instance than
 *   the one callers invoke, so pending trailing timers can fire after
 *   unmount (in tests, after the jsdom window is torn down, crashing the
 *   run with "window is not defined").
 *
 * setTimeout keeps ticking regardless of the clock, and the pending timer is
 * reliably cancelled on unmount. Semantics match a trailing debounce: rapid
 * calls coalesce and only the last value is applied.
 */
export declare function useDebouncedState<T>(initialValue: T, delay: number): [T, (value: T) => void];
