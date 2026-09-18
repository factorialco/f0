/**
 * The mocks are a Storybook demo before they are test fixtures. They hold a
 * community's feed back so its skeleton is worth drawing, take a beat to
 * publish so the composer visibly works, and fail one send in four so the
 * "Not sent" state is reachable by hand.
 *
 * Under test that theatre is dead time and coin flips: jsdom has no skeleton
 * to look at, and a suite that renders the stories paid the waits out of its
 * own 5s budget — which is how CI came to time out a different handful of
 * community tests on every run. The delays collapse to zero and the chances
 * never fire, so the same story is deterministic and fast.
 *
 * `MODE` is "test" only under Vitest; Storybook keeps the whole show.
 */
const DEMO_THEATRE = import.meta.env.MODE !== "test"

/** A demo-only pause, in ms. Zero under test. */
export const demoDelay = (ms: number): number => (DEMO_THEATRE ? ms : 0)

/** A demo-only coin flip. Never true under test, so runs repeat. */
export const demoChance = (probability: number): boolean =>
  DEMO_THEATRE && Math.random() < probability
