# Home prototype — working notes / handoff

Prototype: `/p/home` · repo `~/code/f0`, branch `oskar/f0compose` · Figma: "Home - Vision" (fileKey `56V5NAEnQgg5mS11mStiZS`).

## Run

```bash
cd ~/code/f0/packages/f0compose && pnpm dev:vite --port 5174 --strictPort
```

f0-react dist must exist (`packages/react`: `pnpm build`). The full `pnpm dev` also runs the f0-react watch build.

## Architecture (src/prototypes/home/)

- `Home.tsx` — canvas + navbar + FULL_BLEED_CSS (all prototype-scoped CSS lives here: full-bleed chrome, all animations). Conditional canvas: active conversation → `ConversationView`, else greeting + Needs-you. The 1.7px stroke override was REVERTED to f0-native 1.3px (2026-08-03, per Oskar — forcing one width made icons with/without `non-scaling-stroke` render inconsistent weights).
- `HomeSidebar.tsx` — custom sidebar (meta.sidebar override): Work/Chats tabs, Recents (wired to conversation store), user menu (company switcher + dark mode + back to catalog, portalled to body).
- `OnePromptBar.tsx` — gradient-border prompt bar (orbiting conic gradient, 2× speed on focus via WAAPI updatePlaybackRate), suggestions engine, chips, chats/routines modals.
- `one/` — `suggestions.ts` (intent corpus ported from one-notch), `conversationStore.ts` (module store, useSyncExternalStore — sidebar and canvas are sibling React trees; persists to localStorage `f0compose:home:conversations`, activeId intentionally NOT persisted; clarifying questions carry `intentKey` so resolve copy stays in code; answering echoes the answer as a user turn; intents can declare `reasoning: string[]` → steps stream one per beat via `Conversation.pendingReasoning` (transient, stripped on load) and land persisted on the turn's first reply message), `ClarifyPanel.tsx` (**the F0ClarifyingPanel pattern, Figma 1350:179756 / f0 main kits/ai**: when a clarifying question is pending, the prompt-bar input DISAPPEARS and this panel takes its place at the same width — question + ×, radios (RadioIndicator: selected = `bg-f1-background-selected-bold` + white dot), "Other" free text, Cancel/Submit footer, keyboard hints; ↑↓/Enter/Esc handled on window since the input is gone), `ConversationView.tsx` (pending question renders only an "Asking question…" line with a `bg-f1-special-highlight` dot — never an inline card; + ReasoningBlock: F0AiChat "Reasoning" collapsible ported from f0 main's Thinking/F0ActionItem — Lightbulb header, CheckCircleLine steps, connector line, shine-text on the executing step, collapsed once done; + TurnFeedback: copy (LayersFront→Check) + thumbs under the last reply, hidden while a question is pending; assistant copy supports `**bold**`; auto-scrolls to the newest turn), `OnePickerModal.tsx`, `PlayOutline.tsx` (icon gap), `chat-spinner/` (ChatSpinner + globeSpinMath **copied from f0 main** — our branch predates the globe-spin rewrite).
- `windows/` — Claude-Code-style window stack (Communities, Events, Inbox, Insights, Celebrations, Preview). `preview` + `celebrations` hidden from the ⋮ menu (`HIDDEN_FROM_MENU`). Preview opens from the conversation navbar play button; its content matches the updated survey window (Figma 1350:178521) — **Q5/Q6 copy is inferred** (nodes below the frame fold weren't extractable via the Dev Mode MCP), swap when the design settles.
- Windows stack Claude-Code style (per Oskar, 2026-08-03): **max 2 per column**, the third window starts a new column (newest column closest to the canvas; all columns share `columnWidth`, drag on the leftmost edge resizes them together, clamped to MAX_COLUMN_WIDTH). **Maximize takes over the WHOLE canvas** (Figma 1365:12972: `MaximizedWindow` — title + Minimize (restore) + ✕, content in a centered 840px column; navbar/prompt bar give way until restore; keeps the same p-2 gutter + card chrome as the docked stack, per Oskar — it floats, never touches the page edges). Maximize ↔ restore is a real FLIP: the click stashes the outgoing rect in a module-level `flipOrigin` (the two elements live in swapped trees), the incoming element WAAPI-animates from it (240ms, Emil easing, honors reduced-motion, disables the CSS slide-in so transforms don't compose). The SAME language covers open/close (per Oskar, 2026-08-03): opening from the ⋮ menu or the conversation play button FLIP-grows from the trigger's rect (`setWindowFlipOrigin`); closing runs `animateWindowClose` (150ms shrink+fade, timeout fallback guarantees the close). One-triggered auto-opens keep the generic slide-in (no trigger rect). The canvas keeps `min-w-[320px]`; overflow shrinks the window columns instead.
- Canvas layout: only the content scrolls (`.home-canvas-scroll`); the ONE bar + action chips stay pinned below it, and the scroller has a bottom `mask-image` fade so content dissolves as it slides under the bar.
- `ClockInPopup.tsx` — time-tracking popup from the navbar timer button.
- `policies/` — the Policies sub-screen (Figma 1350:190929), URL-driven via `?view=policies` (sidebar Policies row; an open conversation always wins the canvas; the prompt bar stays pinned). Real **OneDataCollection**: presets Published/Draft/Outdated, search, sort by name/last update, selectable rows, Upload documents primary + Start new secondary (ODC folds secondaries into the ⋮), item actions. No pagination (8 bounded rows). Navbar shows the module-screen variant (F0AvatarModule `company_documents` — no "policies" module in f0, icon gap — + title + ⋮/gear).

## Key gotchas (learned the hard way)

- **f0 Tailwind theme**: `text-base` = 14px, `text-sm` = 12px, `rounded-md` = 0.75rem (12px), `rounded-xl` = 1rem. Always check `dist/styles.css` before assuming standard Tailwind values.
- f0compose runs a **utilities-only Tailwind pass** (`tailwind.config.ts`, no preflight) over its own src — arbitrary classes work; before that, any class f0-react didn't use silently emitted nothing.
- f0-react `Page` (experimental) hardcodes the rounded card chrome — Home uses its own flush container instead.
- Sidebar aside + main are sibling stacking contexts → anything overflowing the sidebar must be **portalled to body** (user menu learned this).
- The f0 `SearchBar` ships its own `px-3` wrapper — don't double-pad.
- `F0AvatarPulse` (greeting animation) is not exported from dist — replicated in CSS in Home.tsx.
- `F0Icon` silently DROPS `className` — never pass rotation/transition classes to it; swap the icon component instead (see SidebarGroup's chevron).
- **Centered modals must bake `translate(-50%,-50%)` INTO their animation keyframes** (`f0c-modal-in`) — a plain scale keyframe overrides the translate utilities mid-animation and the dialog flashes off-center before snapping (bug fixed 2026-08-03). Modal scrims use f0's `bg-f1-background-overlay` (same token as F0Dialog) via `.f0c-overlay`.
- **Dark mode**: the full-bleed chrome uses experimental light-only customs (#FCFCFC canvas, #F9F9F9 aside) — their dark pairs are built from f0 dark tokens in FULL_BLEED_CSS (`.dark main#content` = neutral-0 + --page overlay, `.dark aside` = neutral-0, divider = neutral-10). Scrollbars use f0's `--scrollbar-*` vars (theme-aware). Never add a raw light hex to the chrome without its `.dark` override.

## Environment quirks (verification)

- **Figma MCP session breaks** (net::ERR_FAILED) — workaround: `scripts/figma-mcp-bridge.py` talks straight to the local Dev Mode server (port 3845; enable in Figma desktop → Dev Mode → MCP server). Usage: `python3 scripts/figma-mcp-bridge.py get_design_context '{"nodeId":"…","fileKey":"…",…}'`.
- The Claude embedded browser pane renders as a **hidden tab**: CSS/WAAPI animations frozen, rAF doesn't tick, smooth scroll no-ops, focus doesn't persist across tool calls. Verify animation *structure* in DOM; visual motion only in a real browser.
- `~/code/f0-main` is a git worktree of f0 origin/main (built) — used for main-parity checks (e.g. ChatSpinner) and by `~/code/factorial-composer` (Jonathan's repo, branches `nav-doble-menu` / `one-notch`, links point at f0-main, runs on port 5175).

## Icon gaps (no f0 equivalent; approximations in use)

show-sidebar→Menu · upgrade-plan (Discover Factorial)→Sparkles · ArrowFork→Split · cube/Spaces→LayersFront · cake/celebrations→Sparkles · FacePlus→Reaction · stroke Play→local `PlayOutline.tsx` (strokes f0 SolidPlay's exact path).

## Pending / no-ops

- Alicia's avatar: every usage (greeting, sidebar footer, communities composer) reads `aliciaAvatar` from `home/fixtures.ts` — it globs `assets/alicia.{jpg,png,webp}` (the real photo lives there, 180px, added 2026-08-03) with a pravatar fallback if the file disappears. Note for the future: the Figma Dev Mode asset server can't export this image fill (500s), so keep the local file.

- Conversation navbar `⋮` and prompt-bar `Settings`, `+` (context), mic: visual only.
- Prompt-bar action chips (Create/Analyze/Find/Automate) always show, also in conversation. A collapsed single "Ideas" chip is reserved for narrow (responsive) widths where they don't fit — behavior TBD (per Oskar, 2026-08-02).
- Preview window content is hardcoded to the survey scenario.
- Routines modal shows the duplicated row from the Figma mockup (kept for fidelity).
- Recents `Sliders` trailing icon in the group header: visual only.

## Done since last handoff (2026-08-02 pm)

- one-notch follow-up question cards ported: survey / task (only when no audience named, per one-notch's NAMES_AUDIENCE) / analysis / routine intents end in a radio question card; "Other" opens free text; answering locks the card and delivers the intent's `resolve` copy after thinking. Typing in the prompt bar instead marks open cards as skipped.
- Recents: hover `⋮` menu with Rename (inline input, Enter/blur commits, Esc cancels) + Delete (deleting the open conversation goes Home). Menu portalled to body (stacking contexts).
- Conversations persist across reloads (localStorage); a fresh load always lands on the greeting, `thinking` is never rehydrated.
- Sidebar group chevron now swaps ChevronDown/ChevronRight on collapse (F0Icon drops className, so no CSS rotation).
- Survey creation follows the production F0AiChat pattern (per Oskar's screenshot): 3 reasoning steps stream in (newest shimmers), then the reply "Created the company-wide **Employee Engagement Survey**…" lands with the Reasoning block collapsed above it and copy/thumbs feedback below. Only the survey intent has steps so far — add `reasoning: [...]` to any other intent to opt in. Intent retitled "Employee engagement survey".
- Clarifying questions moved from inline conversation cards to the ClarifyPanel-replaces-prompt-bar pattern (per Oskar, 2026-08-02 pm; Figma 1342:168049 + F0ClarifyingPanel storybook). The conversation shows "Asking question…" while pending; Esc / Cancel / × dismisses (skips); the submitted answer echoes as a user turn before the resolve reply.
- Bottom bar pinned + conversation fade + auto-scroll-to-newest added (per Oskar, 2026-08-02 pm).
- Preview window rebuilt to the updated Figma survey (3× rating 1-5, 2× multi-select, 1× open feedback).
- Survey preview auto-opens when the creation reply lands (per Oskar, 2026-08-02): intents can declare `opensWindow: WindowId`; the store fires `onWindowRequest` listeners only on LIVE delivery into the open conversation (reopening a persisted conversation never re-triggers it), and Home subscribes to `windows.open`.
- The preview survey updates LIVE from the clarify answer: `windows/surveyDraft.ts` (module store, persisted at `f0compose:home:survey-draft`) is the source of truth for ALL questions; the survey intent's `onResolve` stages the chosen question(s) in — the window scrolls to the slot, an "Adding a new question…" placeholder shimmers there for ~1.1s (Figma 1356:14761), then the question streams in (time-based reveal, ~85 chars/s). `onReply` resets the draft (a new survey starts at the base 6). Intent hooks fire on live delivery only.
- Question cards replicate f0 main's **SurveyFormBuilder BaseQuestion** (our branch predates `kits/surveys`, so the real kit isn't in dist — REPLACE with the real one on rebase): editable title/description (auto-growing textareas via `field-sizing: content`), hover kebab with Required toggle / Duplicate / Delete (menu portalled to body — the window column clips), interactive rating scale / checkboxes / textarea. All edits persist.
- User menu matches the Figma "View drawer" (1338:171587, updated 2026-08-02): sidebar-anchored width (Oskar preferred it over the Figma's 280px), Factorial row uses `F0AvatarModule module="home"` (red brand squircle), "Discover Factorial" section between dividers (upgrade-plan icon → Sparkles). Menu anchor clamps left ≥12 (a mid-transition aside can measure off-screen).
- Recents is FILTERED by default (per Oskar, 2026-08-02 — the section must never drag the navigation down): conversations carry `lastActiveAt` (bumped on start/send/answer/open), the sidebar sorts by it and "Active only" shows the top `RECENTS_ACTIVE_LIMIT` (4). The header's sliders button (20px icon per Figma 1342:178885) opens a popup: Active only / All conversations (with total count) / Clear recents. Filter persists at `f0compose:home:recents-filter`; opening an old conversation from "All" bumps it back into the active window.
- Dark mode audit (2026-08-02): all custom light values got dark pairs from f0 tokens; brand colors (ONE gradient, ONE red, clarify-panel lavender) stay fixed in both themes by design.
