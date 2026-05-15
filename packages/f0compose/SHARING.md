# Sharing & receiving prototypes

How designers using f0compose hand off a work-in-progress prototype
to another designer (or to themselves on another machine) so the
other person can keep iterating with their own opencode session.

This doc lives at `packages/f0compose/SHARING.md`. The per-prototype
handoff lives at `src/prototypes/<slug>/HANDOFF.md` + `RESUME_PROMPT.md`.

## Who this is for

- **Internal Factorial designers** who already have the f0 monorepo
  cloned, pnpm working, and opencode installed with factorial-skills.
- If you're brand new: pair with a teammate for the first
  onboarding; ask them to run the receive checklist below alongside
  you.

## What "sharing a prototype" means

Three artefacts move from sender → receiver:

1. **The code** — a Git branch with the prototype's files and any
   supporting changes (state hooks, fixtures, AI actions, etc).
2. **The conversation context** — a `HANDOFF.md` snapshot describing
   what's done, what's next, decisions, and gotchas. Plus a
   `RESUME_PROMPT.md` containing the exact text the receiver pastes
   into opencode to resume.
3. **The live deploy** — a Vercel URL pinned to the slug
   (`https://f0-<slug>.vercel.app`) so the receiver can see the latest
   build immediately without running anything locally.

## Sharing (sender's checklist)

Run these steps when you're done with a session and want to hand off
to another designer. opencode can do all of them for you — just say
"share this prototype" and it should drive the whole flow.

1. **Make sure the prototype is green:**
   ```sh
   cd packages/f0compose
   pnpm tsc --noEmit          # (filtered to your prototype's files)
   pnpm check src/prototypes/<slug>
   ```
2. **Redeploy the share:**
   ```sh
   pnpm deploy-share <slug>
   ```
   Confirms the URL `https://f0-<slug>.vercel.app` shows the latest.
3. **Write the handoff docs** inside `src/prototypes/<slug>/`:
   - `HANDOFF.md` — state snapshot. Use
     `expense-policy-settings/HANDOFF.md` as the template.
   - `RESUME_PROMPT.md` — the exact paste-prompt for opencode. Use
     `expense-policy-settings/RESUME_PROMPT.md` as the template.
4. **Commit on a feature branch** named
   `prototype/<slug>-<short-context>`:
   ```sh
   git checkout -b prototype/<slug>-<short-context>
   git add packages/f0compose/src/prototypes/<slug>/
   git add packages/f0compose/src/prototypes/<slug>/HANDOFF.md
   git add packages/f0compose/src/prototypes/<slug>/RESUME_PROMPT.md
   # plus any related fixtures, shell tweaks, etc.
   git commit -m "<slug>: <slice description> — handoff docs"
   git push -u origin prototype/<slug>-<short-context>
   ```
   No PR needed — this is WIP. The branch is the handoff vehicle.
5. **Send the receiver a Slack-ready message:**
   ```
   Picking up the <slug> prototype where I left off?

   • Live: https://f0-<slug>.vercel.app
   • Branch: prototype/<slug>-<short-context>
   • Handoff: packages/f0compose/src/prototypes/<slug>/HANDOFF.md
   • Resume prompt (paste into opencode): packages/f0compose/src/prototypes/<slug>/RESUME_PROMPT.md

   Open opencode at packages/f0compose/, paste the resume prompt
   verbatim, and it'll pick up exactly where I left off.
   ```

### If the prototype depends on factorial-agent

Per `AGENTS.md`, factorial-agent edits are **local-only** — never
committed. If your prototype needs a new Mastra skill or tool,
checkout a verbatim copy of the file into the prototype folder
(e.g. `factorial-agent-skill.ts.txt`) and document the apply steps in
HANDOFF.md "Recreating the Mastra skill". The receiver applies the
diff to their local factorial-agent before running the chat.

## Receiving (receiver's checklist)

Run these steps when a teammate sends you a prototype to continue.

1. **Skim the live deploy first** — `https://f0-<slug>.vercel.app`.
   You'll see what state the UI is in without running anything.
2. **Fetch the branch:**
   ```sh
   cd ~/code/f0   # or wherever your f0 monorepo is
   git fetch origin
   git checkout prototype/<slug>-<short-context>
   pnpm install   # auto-syncs bundled skills
   ```
3. **Read the handoff:**
   ```sh
   cat packages/f0compose/src/prototypes/<slug>/HANDOFF.md
   ```
   (or open it in your editor.)
4. **If the prototype needs factorial-agent edits**, apply them
   per the HANDOFF's "Recreating the Mastra skill" section. Restart
   factorial-agent.
5. **Start the dev server:**
   ```sh
   cd packages/f0compose
   pnpm dev
   ```
6. **Open opencode at `packages/f0compose/`** (NOT the monorepo root).
   The bundled skills (`f0-prototype`, `f0-design`) auto-load.
7. **Paste the resume prompt** from
   `src/prototypes/<slug>/RESUME_PROMPT.md` into opencode. It'll
   read the HANDOFF, do a smoke test, and summarize back.
8. **Verify the smoke test passes** (the resume prompt walks
   opencode through this). If it doesn't, paste the failure into
   opencode and let it debug.
9. **Iterate.** Talk to opencode normally — "tighten spacing", "add
   the Per diem question", "change Q1 options". Hard rules are in
   HANDOFF.md + the skill.

## When NOT to use this flow

- For tiny one-off tweaks that fit in a single opencode session:
  just open it, do the thing, deploy, done. No handoff overhead.
- For shipping to production: this is prototype-only. Production
  changes go through normal factorial-skills `factorial-dev-workflow`.

## Examples

- `src/prototypes/expense-policy-settings/HANDOFF.md` — canonical
  example of a multi-slice handoff with backend dependency, cascade
  tables, and a §8 re-ask loop.

## Troubleshooting

- **opencode doesn't read HANDOFF.md** → check your working directory
  with `pwd` inside opencode; it must be `packages/f0compose/` or a
  subfolder.
- **Chat hangs after typing a message** → factorial-agent isn't
  running, or the Mastra skill isn't applied. See HANDOFF.md
  "Graceful degrade" and "Recreating the Mastra skill".
- **`pnpm check` complains about a prototype that's not yours** →
  pass the slug to scope it: `pnpm check src/prototypes/<your-slug>`.
- **The deployed URL shows a stale build** → re-run
  `pnpm deploy-share <slug>`; check the Vercel project name in
  `.vercel-shares/registry`.
- **`pnpm tsc --noEmit` shows errors in unrelated prototypes** →
  expected, pre-existing. Filter for your prototype's files only.
