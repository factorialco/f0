/**
 * Strings the docs tag and the scanner both depend on.
 *
 * Deliberately its own file with no imports: the tag can't import anything
 * from `scripts/product-usage-scan.mjs` at runtime — that module reaches for
 * `node:child_process` and `node:fs`, which would blow up the browser bundle.
 * The scanner keeps its own copy, and a unit test asserts the two match.
 */

/** Reported when a pull refuses to touch a checkout with uncommitted work. */
export const DIRTY_MESSAGE = "Working tree is dirty — pull skipped"
