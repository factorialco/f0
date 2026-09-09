# Integration checkpoint — 2026-09-09

Base: factorialco/f0 PR #4085, `feat/f0compose`, commit 58712d4f99a7e2e2ae14cbc215f6a1923b32bb6e.
Integration branch: `codex/agent-entry-unified`.
Local checkout: `/Users/jonathan.centeno/code/f0-agent-entry-unified`.

## Included

- Navigation: company switcher, right-opening Help and personal menus, exclusive utility selection, imported Hub screens, full-width page canvas and aligned tabs.
- Personal agent: Ask Factorial header entry, contextual right panel, retained draft and conversation, original Home composer, approved icon motion and F0 field border/focus treatment.
- Home + Onboarding was removed from this PR at Jonathan’s request. The exploration remains available in the original local checkouts and is not part of the shared PR scope.

Navigation and Personal agent changed the same canvas CSS. The integrated version retains the flat page geometry and Hub divider, removes the obsolete bottom-entry space and keeps the right-panel geometry. The imported Spending agent event opens the side panel when outside Home.

## Checkpoint workflow

Use this integration branch as the shared starting point for the next round. Keep independent iterations in separate working copies/branches; collect completed changes into the integration branch and verify combined behavior before updating PR #4085. Do not replace original working files wholesale: merge changes relative to the shared checkpoint.

Original explorations remain in `f0-agent-entry` (5176) and `f0-agent-entry-top-right` (5177). The combined preview runs on 5178, with independent browser storage. Existing browser preferences are not copied between ports.

## Verification

- TypeScript passes for the integrated app.
- Prototype checks passed for Home (186 source files).
- Browser: Organization and Training retain edge-to-edge geometry and tabs below the header. Hub divider and imported Training content remain present with the right agent panel open.
- Browser: typed agent draft survives closing/reopening. Marketplace hides the contextual panel and leaves no bottom strip. Original Home retains its widgets and composer.

All product data and agent responses remain mocked.
