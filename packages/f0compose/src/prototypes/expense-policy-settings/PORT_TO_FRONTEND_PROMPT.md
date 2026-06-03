# Kickoff Prompt — Port Expense Policy Settings into the Real Factorial Frontend

> **What this file is.** A self-contained instruction set for a fresh OpenCode
> session running in `~/code/factorial/frontend/`. Open that folder in a new
> OpenCode window and paste the "PROMPT" block below as your first message.
> Everything the new agent needs to know is in that prompt — it does NOT need
> read access to the f0compose copy at runtime (it will read the f0compose
> files directly from disk since both repos live on the same machine).

---

## Background (so you understand what you're pasting)

- The prototype lives at
  `~/f0/packages/f0compose/src/prototypes/expense-policy-settings/` and is
  staying there as a design reference. **DO NOT DELETE OR MODIFY IT.**
- The real Factorial frontend lives at `~/code/factorial/frontend/`.
- f0compose has a custom `@/copilot` wrapper that fakes the CopilotKit /
  Mastra / One AI plumbing. That wrapper is the reason co-creation never
  worked end-to-end in f0compose.
- The real frontend already has the full plumbing. Pages call the canonical
  `useOne(requiredSkills, coCreationData)` hook from
  `modules/ai/lib/useOne.tsx` and the AI side panel "just works".
- Reference pattern: `modules/engagement_surveys/pages/SurveysListPage/index.tsx`
  (the "surveys" co-creation example the designer mentioned). The simpler
  reference is `modules/playground/pages/one/index.tsx` (the playground
  sandbox under the `/playground/one` route — that's where the port lands).
- The Mastra skill `expensePolicySetup.ts` already exists locally at
  `~/code/factorial-agent/src/mastra/one/prompts/skills-v3/expensePolicySetup.ts`
  and is registered in `skills-v3/index.ts`. **No backend changes needed
  unless something is broken there.** A verbatim copy is checked into the
  prototype as `factorial-agent-skill.ts.txt` for recovery.

---

## PROMPT (paste this into the new OpenCode window)

```
I want to port a prototype from the f0compose sandbox into this real
Factorial frontend so that the AI co-creation actually works (it doesn't
work in f0compose because the @/copilot wrapper there is faked).

Read this file FIRST, top to bottom:
/Users/amadeu.thomson/f0/packages/f0compose/src/prototypes/expense-policy-settings/PORT_TO_FRONTEND_PROMPT.md

Then load the factorial-skills skill, then do the work below.

GOAL
Land the expense-policy-settings prototype as a new sub-page under the
playground module so I can iterate on it with real One/Mastra co-creation.
Route should be /playground/expense-policy-settings (or the nearest
idiomatic playground sub-route — use buildNavigation conventions).

CONSTRAINTS
- Do NOT touch ~/f0/packages/f0compose/ — it stays as the design reference.
- Do NOT modify ~/code/factorial-agent/ unless the agent is broken. The
  expensePolicySetup.ts skill is already registered there.
- TypeScript strict, no `any`. Two-space indent, no semicolons, double
  quotes (this repo uses oxfmt — see /Users/amadeu.thomson/f0/AGENTS.md).
- Use F0 components from @factorialco/f0-react. Do NOT use bare HTML.
- Branch name: prototype/expense-policy-co-creation (created from current
  branch). Do not open a PR — this is a local-only iteration.

CANONICAL CO-CREATION RECIPE (this is the pattern that works here)
1. Page component calls:
     useOne<MyCoCreationShape>(
       ['expense_policy_setup'],   // requiredSkills — must match the
                                   // Mastra skill name registered in
                                   // factorial-agent
       initialCoCreationData,
       { autoOpenChat: true }      // opens side panel on mount
     )
   useOne is imported from 'modules/ai/lib/useOne'.

2. The page mounts under FactorialOneLayout. The /playground/* routes
   already do this — confirm by tracing modules/playground/routes/index.tsx
   up to the layout. If they don't, mount the page inside
   FactorialOneLayout explicitly.

3. For each AI action, register a useCopilotAction hook (from
   '@copilotkit/react-core') that mutates coCreationData via the
   setCoCreationData returned by useOne. This is the equivalent of every
   `useCopilotAction` hook currently in the f0compose `copilot/` folder.

4. The Mastra skill (expensePolicySetup) reads the readables exposed by
   useOne (coCreationData + currentPage + requiredSkills) and calls the
   tools registered via useCopilotAction.

PORTING CHECKLIST (file-by-file map from f0compose → real frontend)

Source root: /Users/amadeu.thomson/f0/packages/f0compose/src/prototypes/expense-policy-settings/
Dest root:   ~/code/factorial/frontend/src/modules/playground/pages/expense-policy-settings/

| f0compose path                              | Action                                                                       |
|---                                          |---                                                                           |
| ExpensePolicySettings.tsx                   | Port as `index.tsx`. Strip FactorialShell. Replace `@/copilot` imports with `useOne` + `@copilotkit/react-core`. Wrap body in `ResponsivePage.Body` like `playground/pages/one/index.tsx` does. |
| views/                                      | Copy verbatim. Update relative imports.                                      |
| header/                                     | Copy verbatim.                                                               |
| nav/                                        | Copy verbatim.                                                               |
| forms/                                      | Copy verbatim.                                                               |
| wizard/                                     | Copy verbatim.                                                               |
| policy-rules/                               | Copy verbatim.                                                               |
| data/cascades.ts                            | Copy verbatim — pure functions.                                              |
| data/usePolicyData.ts                       | Copy verbatim.                                                               |
| copilot/useExpensePolicySetup.ts            | Copy verbatim. Pure state hook, no copilot imports.                          |
| copilot/useExpensePolicySetupActions.ts     | Copy. Replace `@/copilot` `useCopilotAction` import with `@copilotkit/react-core`. |
| copilot/useRenderRegularSummaryAction.tsx   | Same — swap import.                                                          |
| copilot/useExposeContext.ts                 | Replace `useCopilotReadable` import source with `@copilotkit/react-core`. Drop, if redundant — useOne already exposes coCreationData. Keep only the extra readables that aren't in coCreationData. |
| copilot/useCoCreationOpenerAction.ts        | Drop. The real chat panel opens via `useOne({ autoOpenChat: true })`. The welcome bubble can be a static `setInitialMessage` call (see useOne API). |
| copilot/useStartSetupAction.tsx             | Replace import. The "Start setup" red CTA navigates to forms-detail?type=regular — keep the action, just import from CopilotKit. |
| copilot/useApprovalFlowActions.ts           | Replace import.                                                              |
| copilot/useChatTitle.ts                     | Likely drop — the real chat panel has its own title.                         |
| copilot/useExpenseTypesActions.ts           | Replace import.                                                              |
| copilot/useHideChatComposer.ts              | Drop unless the real chat exposes the same hook.                             |
| copilot/useNavigateToViewAction.ts          | Replace import.                                                              |
| factorial-agent-skill.ts.txt                | Reference only. Do NOT copy — the live skill already lives at ~/code/factorial-agent/src/mastra/one/prompts/skills-v3/expensePolicySetup.ts |
| HANDOFF.md, RESUME_PROMPT.md, SETTINGS.md   | Do NOT copy. They stay in f0compose.                                         |
| certified-documents/                        | Copy if referenced by views.                                                 |

FIXTURES
f0compose uses `@/fixtures`. The real frontend doesn't have this alias.
Two options:
  (a) Copy the fixture files into `pages/expense-policy-settings/fixtures/`
      and update imports to relative paths.
  (b) Replace fixture calls with the real GraphQL queries IF you find that
      this prototype is supposed to read live data.
Default to (a) for prototype fidelity. Note the choice in a comment.

ROUTE WIRING
1. Add a route under modules/playground/routes/index.tsx using
   buildModuleRoute + buildNavigation (look at the existing `playground.one`
   entry as the template).
2. The navigation key needs to exist — search for `playground.one` in
   the navigation builder (modules/core/lib/react-router or wherever
   `buildNavigation` defines paths). Add a sibling key
   `expensePolicySettings` with path 'expense-policy-settings'.
3. Add a subNavigation entry so it shows in the playground sub-nav.

FEATURE FLAGS
The Mastra agent is gated by `dev_ai_agent` and (for co-creation)
`dev_forms_ai_cocreation` per FormEditor.tsx. Make sure both flags are
enabled in your local seed user (or hardcode-bypass them for the
playground route if that's how playground/one does it — check
useAiAgentFeature). If unsure: check whether /playground/one currently
shows the AI side panel with your current user; if yes, the flags are
already on.

VERIFICATION
1. Run `pnpm start` in ~/code/factorial/frontend/. Confirm Vite serves on
   the expected port (check vite.config.ts).
2. The backend (Puma) is already running on :13085. If it isn't, ask me
   and we'll start it via the factorial-local-dev-infra skill.
3. Navigate to https://app.local.factorial.dev/playground/expense-policy-settings
   (or the equivalent local URL).
4. Open the AI side panel. Confirm:
   - The expense_policy_setup skill is selected (check Mastra logs).
   - Sending "go" makes the agent call askClarifyingQuestion with Q1.
   - Selecting an answer in the chat applies the cascade to the form on
     the page (cell-level updates — categories/subcategories appear).
   - Q1 → Q2 → Q3 → inline summary card → "Looks good" → done.
5. If anything 404s, missing-flags, or context errors out, fix and retry.

WHEN DONE
Reply to me with:
  - The local URL of the working prototype
  - The branch name
  - A short summary of what you changed in factorial-agent (should be
    "nothing")
  - Any flags I need to flip in my local user
```

---

## How to open the second OpenCode window

In a new terminal:

```
cd ~/code/factorial/frontend
opencode .
```

(Or use your usual "new window" shortcut and select that folder.)

Once the window opens, paste the PROMPT block above as your first message.

## Frontend dev server quick reference

- Command: `pnpm start` (from `~/code/factorial/frontend/`)
- This runs `run-p copy-assets vite` (asset copy + Vite dev server)
- The backend Puma is already running on `:13085`
- Login URL: `https://app.local.factorial.dev` (depends on your local
  Traefik / hosts setup — `factorial-local-dev-infra` skill handles it)

## If the new-window agent gets stuck

Common issues and shortcuts:

- **"useOne must be used within OneProvider"** → the route isn't inside
  `FactorialOneLayout`. Trace `playground/routes/index.tsx` upward.
- **AI panel doesn't open** → `dev_ai_agent` feature flag is off for your
  user. Toggle it in your seed.
- **AI panel opens but skill is wrong** → the `requiredSkills` array in
  `useOne(...)` doesn't match the registered Mastra skill name. Check
  `~/code/factorial-agent/src/mastra/one/prompts/skills-v3/index.ts` for
  the canonical name.
- **Form doesn't react to AI** → the `useCopilotAction` handler isn't
  calling `setCoCreationData` (or the equivalent local setter). Compare
  to `useExpensePolicySetupActions.ts` in f0compose.
