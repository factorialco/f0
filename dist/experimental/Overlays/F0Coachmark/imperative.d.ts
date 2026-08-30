import { CoachmarkId, CoachmarkOptions, CoachmarkStep } from './types';
/**
 * Flatten the two public shapes into the one the store holds: a list of steps,
 * each carrying its own target and placement.
 *
 * A single coachmark is a one-step sequence, so the provider has a single code
 * path. Steps inherit `targetElement` and placement from the options they were
 * passed with, per key rather than by spreading, so a step that explicitly says
 * `side: undefined` still gets the shared default instead of clobbering it.
 *
 * A step with no target anywhere in that chain cannot be positioned, so it is
 * dropped with a warning rather than silently rendering somewhere arbitrary.
 */
export declare const resolveSteps: (options: CoachmarkOptions) => CoachmarkStep[];
/**
 * Imperative API for coachmarks: a panel anchored to an element, pointing out a
 * feature the user has not discovered yet. Can be called from anywhere — no hook
 * required — as long as `<F0Provider>` (which mounts `CoachmarkProvider`) is in
 * the tree.
 *
 * There is no `open` prop and no component to render: the coachmark closes
 * itself when the user acknowledges it, and only one is ever on screen — a
 * second `open` waits its turn.
 *
 * @example
 * import { coachmarks } from "@factorialco/f0-react/experimental"
 *
 * coachmarks.open({
 *   id: "smart-filters",
 *   targetElement: "#filters-button",
 *   title: "Filters got smarter",
 *   description: "Stack filters, then save the combination as a view.",
 *   action: { label: "Learn more", onClick: () => openDocs() },
 * })
 *
 * @example A walkthrough, one step at a time
 * coachmarks.open({
 *   steps: [
 *     { targetElement: "#filters-button", title: "Start with a filter" },
 *     { targetElement: "#save-view", title: "Then save it as a view" },
 *   ],
 *   onComplete: () => track("tour-finished"),
 * })
 */
export declare const coachmarks: {
    /**
     * Show a coachmark, or queue it behind the one already on screen.
     * @param options One coachmark, or a sequence of `steps`
     * @returns The id of the coachmark (pass it to `coachmarks.close`)
     */
    open: (options: CoachmarkOptions) => CoachmarkId;
    /**
     * Remove a coachmark by id, whether it is on screen or still queued. For
     * closing it programmatically — the user does not need this.
     * @param id The id returned by `coachmarks.open`
     */
    close: (id: CoachmarkId) => void;
    /** Remove every coachmark, on screen and queued. */
    closeAll: () => void;
};
