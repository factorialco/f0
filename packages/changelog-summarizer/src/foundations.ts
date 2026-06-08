/**
 * GitHub logins authorized to promote F0 components to **stable**.
 *
 * Only stabilizations authored by these people are reported under "Now stable".
 * Other teams can still ship NEW (experimental) components — they just can't
 * mark something stable. (Per the F0 lifecycle: only Foundations promotes.)
 *
 * Seeded from the `@factorialco/foundations` GitHub team + the F0 designer/PM.
 * The GitHub teams are not fully maintained (e.g. `f0-designers` is incomplete
 * and the F0 designer isn't in the team yet), so this list is the source of
 * truth — keep it in sync as the team changes.
 */
export const FOUNDATIONS_AUTHORS: readonly string[] = [
  // @factorialco/foundations
  "arnaub",
  "fleveque",
  "rubenmoya",
  "eliseo-juan",
  "sauldom102",
  "dmaza81",
  "albertpmz",
  "developerdanx",
  "siguenzaraul",
  "davidsalgado-fct",
  // F0 design / PM (not in the GH team yet)
  "desiree-np",
];
