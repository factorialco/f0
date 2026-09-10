# Composer alignment regression

Observed on integrated preview 5181 after widget collapse: the 712px destination moved from x464 to x660, while the mounted original composer remained at x464. ResizeObserver watched the fixed-width destination and outer shell, neither of which resized. The intervening content pane did resize.

Fix: observe the destination ancestor chain inside the original HybridHome work area. Preserve the mounted composer and its animation/state; do not introduce another chat.

Isolated Chrome check at 1800 × 1100: initial question, collapsed question, expanded question, Cancel to original composer, collapsed composer and expanded composer all have zero horizontal center difference from their destination after the fix. Before fix, the collapsed question failed with -196px. Inspected the resulting screenshot. User storage was untouched.

Retained regression: composer-alignment.browser.cjs. Run with Node and PLAYWRIGHT_MODULE pointing to an installed Playwright module, optionally HOME_QA_URL. Uses isolated headless Chrome and verifies actual bounds.

Previous toolbar QA covered the rail card but missed the chat after the width change. Acceptance must include the dependent central composer, not just the changed control. This updates project guidance only, not a separate agent runner.
