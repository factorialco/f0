# Performance metrics

Two scripts read the numbers the Storybook performance panel shows and print them as JSON, so you don't have to open Storybook and read a panel by eye.

| script | what it does |
| --- | --- |
| `perf-metrics.ts` | Measure stories you name. For use while building or changing a component. |
| `perf-changed.ts` | Measure the stories a PR affects, and flag what's unusual. Feeds the CI comment. |

Neither gates anything. There is no pass/fail, no baseline, and no required check — they report, you decide.

## Quick start

Needs a running Storybook (`pnpm dev`).

```bash
pnpm perf-metrics F0Button
```

```bash
pnpm perf-metrics F0Button --snapshot
```

```bash
pnpm perf-metrics F0Button | jq '.stories[0].deterministic'
```

`stdout` is pure JSON and progress goes to `stderr`, so piping into `jq` always works.

You can pass a component name (`F0Button`), a story id (`components-button-button--variants`), or any substring of a story id, title or source path. Component names are matched against the source path, because the F0 name often appears in neither the story id nor its title — `F0Button`'s stories are titled `Components/Button/Button`.

## What you get

Every measurement is split into two groups, and the split is the most important thing on this page.

### `deterministic` — counts of work

Identical on every run and on every machine. These count *work done*, not time taken, so you can compare them between two runs, two branches or two components.

| field | meaning | what a bad value looks like |
| --- | --- | --- |
| `mounts` | Times the story's React tree mounted | Above 1 means it mounted more than once |
| `renders` | Total Profiler renders (mount + every re-render) | — |
| `updates` | Re-renders after mount settled, with no interaction | High means the component keeps re-rendering while idle |
| `cascades` | Renders that scheduled another render | Usually a `setState` in an effect that could be derived during render |
| `slowUpdates` | Updates that took longer than one 16ms frame | Any is worth a look |
| `domElements` | DOM elements the story rendered | A heavy tree for one component |
| `styleWrites` | Inline style / CSS-variable writes during mount | — |
| `forcedReflows` | Layout reads that forced a synchronous reflow | Any is worth a look — reading `offsetWidth` after a style write |

### `timing` — wall-clock samples

These move between runs even when nothing changed, and include work from the whole page rather than just your component. Useful as a rough signal; **never compare them between two runs and conclude anything.**

| field | meaning | why it's untrustworthy |
| --- | --- | --- |
| `mountMs` | Wall-clock ms in the mount render | Machine- and load-dependent |
| `p95UpdateMs` | P95 of post-mount update durations | Same |
| `layoutShifts` | Number of layout shifts observed | Not reproducible — see below |
| `cls` | Cumulative layout shift score | Stable once above ~0.01; noise below that |
| `totalBlockingTime` | Total blocking time, ms | Includes page-wide work |
| `longTasks` | Main-thread tasks over 50ms, from any source | In Storybook these are frequently axe-core, not your component |
| `fps` | Sampled frames per second | Pinned to the display's refresh rate |
| `heapMB` | JS heap in use | Whole page, not your component |

### Why the split matters

Measuring one story five times on an idle machine: every `deterministic` field was identical each time (`mounts` 1, `renders` 4, `cascades` 1, `domElements` 33), while `totalBlockingTime` ranged 42–47ms.

Layout shifts deserve their own warning. Measuring the same five `F0Card` stories three times gave three different answers:

| story | run A | run B | run C |
| --- | --- | --- | --- |
| `card--with-children` | 1 | 1 | 1 |
| `card--compact` | 1 | 0 | 0 |
| `card--with-actions-and-link` | 0 | 1 | 0 |

A shift is only recorded when the browser happens to paint between the two layouts. So a non-zero count is worth investigating, a zero does not prove there is no shift, and a difference between two runs proves nothing. The `cls` *score*, by contrast, is stable once it clears the noise floor — `ApplicationFrame` scored 0.1943 / 0.1932 / 0.1936 across three runs.

## Typical values

Measured across the library's 102 snapshot stories. Snapshot stories render every variant at once, so these are the heavy end; ordinary stories sit well below.

| metric | p50 | p90 | p95 | max |
| --- | --- | --- | --- | --- |
| `cascades` | 3 | 6 | 8 | 18 |
| `updates` | 6 | 10 | 13 | 26 |
| `domElements` | 89 | 678 | 884 | 5250 |

Note `cascades`: **every** story in the library records at least one, because Storybook's own decorators and providers render around the story. A cascade count of 1–3 is normal and not a finding.

`forcedReflows` was 0 across the 40 stories sampled with it, and `slowUpdates` non-zero on 2 of 40 — so any value above zero on either is genuinely unusual.

## `perf-changed.ts` — what a PR gets

```bash
pnpm --filter @factorialco/f0-react exec tsx .scripts/perf-changed.ts \
  --compare-commit origin/main --out /tmp/perf.json
```

That writes byte-for-byte what CI hands the agent, so it's the way to preview your own PR's comment.

### Which stories get measured

1. Diff every source file under `packages/react/src` against the comparison commit.
2. Drop files that can't change what a story renders: `__tests__/`, `__snapshots__/`, `*.test.*`, `*.spec.*`, `*.md`, `*.mdx`.
3. Map each remaining file to stories:
   - a **story file** maps to exactly the stories declared in it;
   - any **other source file** maps to the stories of the component that owns it, found by walking its directory upwards until one has stories beneath it.

The upward walk stops at `src/<zone>/<Name>` depth, so a shared utility can't be attributed to half the library. Deletions are excluded; renames are measured at their new path.

Consequences worth knowing:

- Changing a component measures its stories even if you never opened a story file. Each story records `measuredBecause`: `"story"` if its own file changed, `"source"` if only its component did.
- Detection is file-level, not story-level. A one-line edit to a story file measures every story in that file.
- A test-only or docs-only change measures nothing and posts no comment.

### Highlights

Every measured story appears in the JSON with its full metrics, but only ones crossing an attention threshold get a `highlights` entry — those are what the PR comment talks about.

| rule | threshold | why |
| --- | --- | --- |
| `forcedReflows > 0` | any | Base rate 0 of 40 |
| `slowUpdates > 0` | any | Base rate 2 of 40 |
| `cascades` | > 8 | p95; "any cascade" would fire on 100% of stories |
| `updates` | > 13 | p95 |
| `domElements` | > 900 | p95 |
| `cls` | >= 0.01 | Above the ~0.0001 noise floor, below Core Web Vitals' 0.1 |

Layout shift is deliberately judged by `cls` score and never by shift count, for the reproducibility reason above.

These are attention thresholds, not limits. Nothing fails for crossing one.

## Options

### `perf-metrics.ts`

| flag | default | |
| --- | --- | --- |
| `--snapshot` | off | Only each matched component's snapshot story |
| `--url <url>` | `$STORYBOOK_URL`, else `:6006` / `:6008` | Storybook base URL |
| `--settle <ms>` | 1000 | Collection window before snapshotting |
| `--out <file>` | — | Write JSON to a file as well as stdout |

### `perf-changed.ts`

| flag | default | |
| --- | --- | --- |
| `--compare-commit <ref>` | `origin/main` | What to diff against |
| `--head <ref>` | `HEAD` | Other end of the range — "what would this commit have reported?" |
| `--max-stories <n>` | 40 | Cap; the report sets `truncated: true` when it bites |
| `--url`, `--settle`, `--out` | | As above (`--out` defaults to `perf-report.json`) |

## How it works

The addon collects metrics in the Storybook preview and ships them to the manager panel over the Storybook channel. There is no manager here, so the script plays that part: it answers the addon's `request-panel-visibility` handshake with `true` — which is what actually starts the browser collectors — waits for the story to settle, then asks for a snapshot.

The handshake is installed through a Playwright init script rather than after page load, because forced reflows, style writes and layout shifts all happen *during* mount. Start collecting afterwards and they silently read 0.

The `deterministic` metrics need no settle window at all: the React Profiler records renders as they happen, regardless of when collection started. Only the `timing` metrics are sampled over a period — which is why `--settle 0` leaves `fps` reading in the thousands.

## Troubleshooting

**"No running Storybook found"** — start one with `pnpm dev`, or pass `--url`.

**`--snapshot` says a component has no snapshot story** — snapshot stories are detected by export name (`Snapshot`, or a `…SnapshotMatrix` variant), because Storybook's `index.json` carries no story parameters. It won't silently fall back to measuring everything.

**`perf-changed.ts` reports nothing on a PR that changed plenty** — it diffs against `origin/main`, so make sure that ref is up to date locally.
