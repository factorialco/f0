# Fix the f0compose "Maximum update depth exceeded" crash

If you can't run f0compose locally and your browser shows:

> Unexpected Application Error!
> Maximum update depth exceeded. This can happen when a component
> repeatedly calls setState inside componentWillUpdate or
> componentDidUpdate.

…this is for you.

## Quick fix: paste this into your opencode tab

Open opencode inside `packages/f0compose/` and paste:

```
Run the script at packages/f0compose/scripts/fix-strict-mode-crash.sh.
After it finishes, tell me to hard-refresh my browser tab. Do not commit
any changes - keep them as a local edit only.
```

That's it. Opencode will execute the script, which:

1. Removes the `<StrictMode>` wrapper from
   `packages/f0compose/src/main.tsx`
2. Adds an explanatory comment so nobody (including future AI sessions)
   re-adds it
3. Adds a "Don't re-add StrictMode" rule to
   `packages/f0compose/AGENTS.md` (only if it isn't already documented)

Then hard-refresh your browser tab (`Cmd+Shift+R` on macOS) and the
crash is gone.

The script is **idempotent** — re-running it on a fixed file just
prints `[OK] StrictMode wrapper already removed` and exits.

## What's actually happening

f0compose pulls in experimental f0-react components (selectors,
OneDataCollection lanes, F0AiChat) that aren't compatible with React's
`StrictMode` double-invocation in dev mode. They loop on `setState`
and the dev runtime gives up after ~25 updates.

Vercel production builds don't double-invoke, so deployed prototypes
work fine. The crash is dev-only.

## Or run it manually

From anywhere inside the f0 repo:

```bash
bash packages/f0compose/scripts/fix-strict-mode-crash.sh
```

Then hard-refresh the browser tab.

## Should I commit the change?

**No** — not yet. The plan is to remove StrictMode globally once
`packages/f0compose/` lands on `main`. Until then, keep it as a
local-only edit. Your `git status` will show
`packages/f0compose/src/main.tsx` as modified — that's expected.

If you want git to stop nagging about the local edit:

```bash
git update-index --skip-worktree packages/f0compose/src/main.tsx
```

Undo with:

```bash
git update-index --no-skip-worktree packages/f0compose/src/main.tsx
```

## Why doesn't Vercel see this crash?

Production React doesn't double-invoke effects or state initialisers.
`StrictMode` is purely a dev-mode helper. Removing it has zero effect
on what your users see — only on your localhost.
