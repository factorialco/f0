# Unified local proposal

## Source snapshots

- Widgets and shared page surfaces: /private/tmp/f0-home-navigation-integrated, including uncommitted work captured at local snapshot 007265af4.
- Conversational Home: /private/tmp/f0-home-conversational-v2 at a2d432e6a.
- Onboarding and navigation tour: /private/tmp/f0-home-onboarding-v2, including uncommitted work captured separately at bc6da05c1.
- Integration: /private/tmp/f0-home-unified, branch codex/home-unified. Original checkouts were read only. No push or remote merge.

Applied onboarding changes relative to its base snapshot 0d127f329 and widget refinements relative to base snapshot 6a4dac7e1, preserving the conversational Home composition. Resolved HybridHome conflicts by retaining the new One input/permissions footer, contextual onboarding report suggestion and latest Ask One label. Allocated 40px extra inline composer space only while the report suggestion is present to avoid clipping its permissions footer. Restored the approved md Edit widgets button when expanded; folded layout retains its compact control.

## Validation

TypeScript, 235-file prototype check, widget catalog/scope regressions, guided Home/workflow regressions and git diff whitespace checks pass.

Isolated localhost:5183 browser journey: welcome -> Hub -> Inbox -> Comms -> Home navigation tour -> multi-select personal/team preferences -> optional connections -> new conversational Home. No duplicate setup questions. Verified report suggestion and permissions/usage footer fit together; Activity/Preferences and Files retain the new navigation positions. Created Pending team requests through three One questions, saw automatic preview scroll, saved and reloaded with the new widget present. Verified Close warning -> Keep editing retains draft; Save returns Home; Discard restores saved widgets and returns Home. Verified original folded rail and calendar with Ask One side panel, shared rounded page surfaces, and footer. Screenshots reviewed at desktop viewport.

## Scope and limitations

This remains a mocked visual prototype: connections and One actions are simulated. Existing onboarding stores all exact preferences including work/free text, while its briefing adapter currently maps personal/team into the supported mock Home categories; arbitrary work/free-text preferences are preserved but do not generate bespoke content. No claim of real personalization or external integration. No additional F0 library changes were introduced during integration. Native built artifacts/dependencies are reused locally from the completed conversational checkout.

## Preview

Review URL http://127.0.0.1:5183/p/home (fresh user storage). Browser QA used localhost:5183, leaving the review origin at welcome. Server config /private/tmp/f0-unified-preview.config.ts; log /private/tmp/f0-home-unified-preview.log. Original previews remain available separately.
