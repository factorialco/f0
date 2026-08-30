import { CoachmarkTarget } from './types';
/**
 * Resolve a coachmark's target to a live DOM element, and keep it resolved.
 *
 * Returns `null` while nothing matches, which is a normal state rather than an
 * error: a coachmark opened during app start-up regularly names an element that
 * mounts a moment later, and an element can also disappear while the coachmark
 * is still queued behind another one. Both directions are handled by
 * re-resolving on DOM changes, so the panel appears when its target does and
 * hides when it goes away — instead of pointing at nothing.
 *
 * The observer only lives as long as one coachmark is on screen, and it re-runs
 * a single `querySelectorAll` per mutation batch (batches are already coalesced
 * into one microtask by `MutationObserver`).
 */
export declare const useTargetElement: (target: CoachmarkTarget | undefined) => HTMLElement | null;
