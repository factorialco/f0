# Resume prompt — paste this into opencode

This is the prompt to paste **verbatim** into a fresh opencode
session at `packages/f0compose/` to continue the
`expense-policy-settings` co-creation work where the previous
designer left off.

opencode will read it, load the `f0-prototype` + `f0-design` skills
automatically, pick up the HANDOFF + spec, and be ready to iterate.

---

## ⬇️ Copy everything below this line ⬇️

```
I'm picking up an in-progress prototype: `expense-policy-settings`,
slice 1 of the co-creation flow for the Regular expense form.

Before doing anything else:

1. Read `packages/f0compose/src/prototypes/expense-policy-settings/HANDOFF.md` end-to-end. It contains the live URLs, what's done, the cascade tables, the end-to-end flow, environment notes, and the slice-2 backlog.

2. Make sure my local environment matches what HANDOFF.md describes:
   - I'm on branch `prototype/expense-policy-co-creation-slice-1` (run `git branch --show-current` and switch if needed via `git fetch && git checkout prototype/expense-policy-co-creation-slice-1`).
   - The f0compose dev server is running on port 5174 (start with `pnpm dev` in `packages/f0compose/` if not).
   - factorial-agent is running locally (sibling repo at `~/code/factorial-agent`, `pnpm dev`). If it's not running, the chat will hang on user input — see HANDOFF.md "Graceful degrade".

3. **One-time Mastra skill setup** (skip if you've done this before): the file `packages/f0compose/src/prototypes/expense-policy-settings/factorial-agent-skill.ts.txt` is the canonical source of the `expensePolicySetup` skill. Apply it locally per HANDOFF.md "Recreating the Mastra skill" — copy the file into `~/code/factorial-agent/src/mastra/one/prompts/skills-v3/expensePolicySetup.ts`, add the 2-line registry entry in `index.ts` next to `expenseSettings`, restart factorial-agent. This is local-only — do NOT commit factorial-agent changes.

4. Once the environment is up, open http://localhost:5174/p/expense-policy-settings and verify the welcome bubble + "Start setup" CTA appear. Click Start setup, send any message in the chat, and confirm Q1 (kinds of expenses) appears as a clarifying-question panel. If it doesn't, paste the browser console + Mastra terminal output and let's debug.

5. Then summarize back to me: what you read from HANDOFF.md, what's already working, and what slice 2 priorities are. From there I'll tell you what to design next.

Hard rules (do not violate):
- Only `@/copilot` imports in prototype files; never import `@copilotkit/*` or `F0AiChat` directly.
- Only `f1-*` tokens, no raw colors.
- Only F0 components, no bare HTML.
- factorial-agent edits are local-only — never commit.
- Option ids in `data/cascades.ts` are the wire contract with the Mastra skill. Renaming one means renaming both sides.
- Always run `pnpm tsc --noEmit` (filtered to this prototype) and `pnpm check src/prototypes/expense-policy-settings` before deploying.
- Redeploy with `pnpm deploy-share expense-policy-settings` — URL is `https://f0-expense-policy-settings.vercel.app`.

Default to f0compose's non-technical-user mode: handle setup silently, never make me run a terminal command unless I ask, end every turn with the prototype URL.
```

## ⬆️ Copy everything above this line ⬆️

---

## Notes for the human pasting this

- After you paste, opencode will spend ~30s on initial reads (HANDOFF, spec, existing code) before replying. That's expected.
- If opencode can't find HANDOFF.md, you may not be in the right working directory — open opencode from `packages/f0compose/` not the monorepo root.
- The factorial-agent step is the one most likely to fail. If you see "the chat hangs after I type a message", that's it.
- Once the smoke-test passes, you can ask opencode anything: "design Per diem question now", "tighten spacing on summary card", "change Q1 options", etc.
