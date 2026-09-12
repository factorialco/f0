# Unified publication checkpoint — 2026-09-12

Branch: codex/home-unified. User authorized GitHub publication and a Vercel demo.

Included: original navigation and contextual One; conversational Home and shared composer footer; Activity and Preferences F0 layouts; employee/personal widget editor and custom-widget flow; dnd-kit sorting with fixed personal defaults; revised onboarding with Driver.js tour; Home generation/loading; focus editing; final toolbar centering and removal of the empty loading-status gap.

Compared the previous navigation/widget and onboarding checkouts with this branch. F0Dialog/F0ActionBar adaptations, their stories/docs/tests, original onboarding screens/state, rail menus and clarifying panel are included. Differences in Home, HybridHome, Preferences and conversationStore are the subsequent unified iterations, not missing older replacements. Latest onboarding changes were already in this working tree and are included in this checkpoint.

Validation: app TypeScript and prototype checks pass; homeSetup and widget model regression scripts pass; production Vite build succeeds (existing bundle-size/font warnings). Previous browser checks cover onboarding, tour, widget ordering/defaults, suggestions, fold/unfold centering, and paragraph gap (52px corrected to 16px). Data and One responses remain mocked.
