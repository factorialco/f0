# Home prototype — working notes / handoff

Prototype: `/p/home` · branch `feat/f0compose` · published https://my-project-kappa-umber.vercel.app/p/home · Figma: "Home - Vision" (fileKey `56V5NAEnQgg5mS11mStiZS`).

**Read this file before touching Home**, and keep it current — it is what carries context between sessions. Below the two "Run" and "Key gotchas" sections it is a running log, newest first: the decisions, what they were measured against, and the traps already paid for.

## Run

From a clone of the repo on `feat/f0compose`:

```bash
pnpm install
pnpm --filter @factorialco/f0-core build   # core BEFORE react, or tsc fails on the missing core
pnpm --filter @factorialco/f0-react build
cd packages/f0compose && pnpm dev          # Vite prints the port; then open /p/home
```

**Both builds are needed on a fresh clone**: `@factorialco/f0-core` and `@factorialco/f0-react` resolve against their `dist/`, and no `postinstall` builds them. Once the dists exist, `pnpm dev:vite` alone is enough — the full `pnpm dev` also runs f0-react's watch build, which you want if you are editing f0 itself.

Typecheck with the WORKSPACE binary: `cd packages/f0compose && ./node_modules/.bin/tsc --noEmit -p tsconfig.json` — a bare `npx tsc` resolves to an unrelated package. Then `pnpm format` and `pnpm check src/prototypes/home` (the latter is red on one pre-existing violation, see the open threads).

<details>
<summary>Oskar's own setup — a worktree on port 5176</summary>

Oskar serves it from the git worktree `~/code/f0-composer` (branch `oskar/f0compose`, pushed to `feat/f0compose`): `cd ~/code/f0-composer/packages/f0compose && pnpm dev:vite --port 5176 --strictPort`. The main checkout at `~/code/f0` moves between branches for other work, which is why the composer does not live there — on a normal clone none of that applies and `~/code/f0` is exactly where it should run. Port 5174 = whatever `~/code/f0` serves; 5175 = Jonathan's factorial-composer.

</details>

## Architecture (src/prototypes/home/)

- `Home.tsx` — canvas + navbar + FULL_BLEED_CSS (all prototype-scoped CSS lives here: full-bleed chrome, all animations). Conditional canvas: active conversation → `ConversationView`, else greeting + Needs-you. The 1.7px stroke override was REVERTED to f0-native 1.3px (2026-08-03, per Oskar — forcing one width made icons with/without `non-scaling-stroke` render inconsistent weights). The navbar lost its sidebar-toggle with the new nav (2026-08-28); the windows "⋮" went with it and came BACK on 2026-08-29, so default Home mode shows the clock-in timer button + the ⋮ top-right (the timer briefly folded INTO the ⋮ list on 2026-08-30 and came back out on 08-31, per Oskar). Conversation/screen modes keep their own actions.
- `HomeNav.tsx` — the navigation (meta.sidebar override; Figma 2621:22725, rail = 2621:22827; replaced `HomeSidebar.tsx` + `windows/WindowsMenu.tsx` on 2026-08-28, per Oskar): a FIXED 48px icon rail — company avatar on top: the REAL `F0AvatarCompany` in its with-logo variant (`src={factorialLogo}`, 24px), never an icon stand-in (per Oskar, 2026-08-29; it shipped first as `F0AvatarModule module="home"`, whose glyph is a HOUSE, then briefly as a hand-rolled squircle — both wrong). The logo file is f0's own storybook asset copied to `assets/factorial.png` and re-exported from `fixtures.ts`, since dist ships no image assets. Then Home / Comms / Inbox / Cal / Hub with 9px labels, then Marketplace + Shield 2px apart and the 24px user avatar 8px below (all measured off the frame render; the avatar opens the old footer user menu, now anchored to the rail) plus a 240px CONTEXTUAL panel (header = section title + collapse `PanelCollapse` button, SearchBar, per-section body). Re-clicking the active rail item toggles the panel; collapse is prototype state persisted at `f0compose:home:nav-section` / `f0compose:home:nav-open`. Section bodies: **home** = New/Routines/Reports/Files (Routines and Reports are visual-only — Reports is NOT the Insights widget, see below; Files → `?view=policies`, and it is the old "Documents" row relabelled) + Pinned (deletable since 2026-09-09, persisted) + live Recents (filter, rename/delete). **Agents left this panel on 2026-09-09** — both the row and the group below it; **comms** = New chat + Meetings, then Chats directos, Canales and Communities (Figma 2945:793075, 2026-09-09); **inbox** = a funnel + sliders in its header (2945:794858) over 4 actionable items (checkbox + avatar with module badge + meta, per the Inbox sidebar design); **cal** = INFERRED, no Figma state yet (New event, Meetings, Upcoming = `homeEvents`, click → events window); **hub** = six groups per Figma 2945:795787 (Company / Operations / Talent / Gestion de IT / Finance / More).
- `OnePromptBar.tsx` — the One composer. Since 2026-08-29 the input is **f0's real `F0AiChatTextArea`** (`@factorialco/f0-react/dist/ai`, per Oskar — Figma 2639:45460), not a bespoke bar: the prototype inherits f0's autosize, focus gradient, Enter-to-send, and the send↔stop swap (driven by `inProgress={conversation.thinking}`). Radius/padding overrides live in `FULL_BLEED_CSS` (the component takes no className). Around it: the suggestions engine, the action chips BELOW the input, and only Settings on the right (Figma 2640:51198). The chats/routines buttons are gone with the redesign, so **`one/OnePickerModal.tsx` is orphaned** — kept for when an entry point returns.
- **The suggestions engine survives on a DOM bridge** (`OnePromptBar`): `F0AiChatTextArea` owns its value and exposes no `onChange`, so the bar mirrors the real `<textarea name="one-ai-input">` to keep type-ahead alive. Two rules make it work, both learned the hard way: (1) listen on **document**, never on the node — React delegates to the app root, so an element-level `input` listener runs FIRST, and re-rendering there hands the controlled textarea its stale empty value, wiping the DOM and defeating React's change-tracker, which silently swallows EVERY keystroke; (2) resolve the node per event — f0 re-mounts the textarea as its state changes, so a captured node goes stale (that one killed ↑/↓ steering while typing still worked). Keydown steering is capture-phase so the panel gets ↑/↓/Enter before f0's own handler.
- `one/` — `suggestions.ts` (the TYPE-AHEAD corpus + engine — `ONE_ACTIONS`, `buildSuggestions`, `categorySuggestions` — ported from one-notch's `oneContent.tsx`; the INTENTS corpus that decides replies lives in `conversationStore.ts`, not here), `conversationStore.ts` (module store, useSyncExternalStore — sidebar and canvas are sibling React trees; persists to localStorage `f0compose:home:conversations`, activeId intentionally NOT persisted; clarifying questions carry `intentKey` so resolve copy stays in code; answering echoes the answer as a user turn; intents can declare `reasoning: string[]` → steps stream one per beat via `Conversation.pendingReasoning` (transient, stripped on load) and land persisted on the turn's first reply message), `ClarifyPanel.tsx` (**the F0ClarifyingPanel pattern, Figma 1350:179756 / f0 main kits/ai**: when a clarifying question is pending, the prompt-bar input DISAPPEARS and this panel takes its place at the same width — question + ×, radios (RadioIndicator: selected = `bg-f1-background-selected-bold` + white dot), "Other" free text, Cancel/Submit footer, keyboard hints; ↑↓/Enter/Esc handled on window since the input is gone), `ConversationView.tsx` (pending question renders only an "Asking question…" line with a `bg-f1-special-highlight` dot — never an inline card; + ReasoningBlock: F0AiChat "Reasoning" collapsible ported from f0 main's Thinking/F0ActionItem — Lightbulb header, CheckCircleLine steps, connector line, shine-text on the executing step, collapsed once done; + TurnFeedback: copy (LayersFront→Check) + thumbs under the last reply, hidden while a question is pending; assistant copy supports `**bold**`; auto-scrolls to the newest turn), `OnePickerModal.tsx`, `PlayOutline.tsx` (icon gap), `chat-spinner/` (ChatSpinner + globeSpinMath **copied from f0 main** — our branch predates the globe-spin rewrite).
- `comms/` — **the LEFT-hand chat stack** (Figma 2707:406513, per Oskar 2026-08-31: "al clicar en una conversacion, esta aparece de la misma manera que los widgets solo que en la parte izquierda, mismo comportamiento de apilamiento"). `chats.ts` (the 8 DMs/channels + their threads + the per-author palette), `ChatWindow.tsx` (thread + call card + composer), `ChatsColumn.tsx` (`useChats` = `useWindowStack<ChatId>` at a 428 column, `chatSpec` mapping a chat onto a `PanelSpec`), `chatStore.ts` (the nav↔canvas wiring). It is the SAME window system as the widgets, only mirrored — see the shared-stack note below.
- `hub/` — **the Hub as a WINDOW with a browser header** (Figma 2787:43433, 2026-09-08). `hubStore.ts` (the open tabs, each tab's inner history and cursor, the annotate/select mode, the picks — one tab per section, `?view` mirrors the ACTIVE one), `hubSections.ts` (`HUB_SECTIONS`, derived from HomeNav's `ADMIN_HUB ∪ EMPLOYEE_HUB` plus `calendar`, so every Hub row can be a tab), `hubPane.tsx` (`HUB_PANE_ID = "module:hub"` — ONE pane id for every section, plus the `PanelSpec` whose `content` and `chrome` are COMPONENTS because `leftPaneSpec` is called from a render that does not subscribe), `HubChrome.tsx` (the two 44px rows: tab strip + "+" + overflow/size/close, then back/forward + pencil/cursor), `HubPaneBody.tsx` (the active section, select mode's outlines and the mode footer), `hubSlug.ts` (a dependency-free leaf, so HomeNav and the registry can share it without a cycle), `CursorIcon.tsx` (a shim for f0 main's `CursorClick`, missing from this worktree). Replaces `windows/ModulePane.tsx`.
- `windows/` — Claude-Code-style window stack (Clock in, Communities, Events, Inbox, Insights, Anniversaries, Preview); widgets DOCK and maximize, they never float (see 2026-08-31) — the "widgets", in the design's language. The navbar "⋮" menu (`WindowsMenu`) was removed with the nav redesign and RESTORED on 2026-08-29 (Figma 2621:23687, per Oskar) — it is now the ONLY control top-right and lists five of the seven (`HIDDEN_FROM_MENU` still holds `celebrations` and `preview`; preview opens from the conversation play button). Windows also open from nav panel rows and One flows via `requestWindow` in conversationStore (the same channel One replies use). **Every open now animates identically** — a side-panel slide, see the stack note below; no caller passes a trigger rect any more. Preview content matches the updated survey window (Figma 1350:178521) — **Q5/Q6 copy is inferred** (nodes below the frame fold weren't extractable via the Dev Mode MCP), swap when the design settles.
- Windows stack Claude-Code style (per Oskar, 2026-08-03): **max 2 per column**, the third window starts a new column (columns append on the outer side since 2026-08-30; all columns share `columnWidth`, drag on the leftmost edge resizes them together, clamped live to the canvas floor). **Maximize takes over the WHOLE canvas** (Figma 1365:12972: `MaximizedWindow` — title + Minimize (restore) + ✕, content in a centered 840px column; navbar/prompt bar give way until restore; keeps the same p-2 gutter + card chrome as the docked stack, per Oskar — it floats, never touches the page edges). Maximize ↔ restore is a real FLIP: the click stashes the outgoing rect in a module-level `flipOrigin` (the two elements live in swapped trees), the incoming element WAAPI-animates from it (240ms, Emil easing, honors reduced-motion, disables the CSS slide-in so transforms don't compose). **Open/close is a SIDE-PANEL slide, not a morph** (per Oskar, 2026-08-30 — the FLIP-from-trigger open "parecía cambiar de escala", because it warped a 224×40 menu row into a 448px panel, and the close jumped): widgets travel in from the right edge of their own column (`f0c-window-in`, 320ms, `cubic-bezier(0.23, 1, 0.32, 1)`, fade front-loaded over the first 40% so the panel is solid while travelling), and `animateWindowClose` is its exact reverse — same path out, fade only in the last 40%, over 280ms. The PATH reverses but the easing does NOT: exits keep the same strong ease-out (Emil is explicit that `ease-in` never belongs in UI, since it withholds movement at the moment the user is watching most closely). Two details keep it fluid: `fill: "forwards"` on the exit, or the panel snaps back to its resting spot for a frame before React unmounts it (that was the "salto"), and a timeout fallback comfortably longer than the animation. `setWindowFlipOrigin` is gone and no trigger rect is plumbed through any more; only maximize ↔ restore still FLIPs, because there one element really does travel between two rects. Nav actions (window requests, opening a conversation, `?view` changes) auto-restore a maximized window first — the nav lives outside Home's maximized early-return, so its clicks would otherwise appear dead behind the takeover. The canvas keeps `min-w-[320px]`; overflow shrinks the window columns instead.
- Canvas layout: only the content scrolls (`.home-canvas-scroll`); the ONE bar + action chips stay pinned below it, and the scroller has a bottom `mask-image` fade so content dissolves as it slides under the bar.
- `NeedsYouItem.tsx` — a "Needs you" row (Figma 2621:23747, redesigned 2026-08-29): 48px tall, 12px padding, 10px radius on `bg-f1-background-tertiary`, a bare 20px secondary icon, then title + subtitle on ONE line (title never shrinks, subtitle takes the slack and clips), then a chevron. The per-row CTA button is gone from the design; `ctaLabel` stays unused in the fixtures in case it returns.
- `windows/ClockInWindow.tsx` + `windows/clockInStore.ts` — **Clock in** (renamed from "Time tracking" 2026-08-30, per Oskar), a WIDGET since 2026-08-30 (Figma 975:13056; it was `ClockInPopup.tsx`, a popover anchored to a navbar timer button, until Oskar asked for the navbar to carry only the ⋮). Same body as the old popup minus its portal/anchor chrome — the window stack supplies the surface and header. State moved to a module store because THREE sibling trees read it: the navbar ⋮ (which carries the pending dot), the widgets-menu row inside its popover, and the window itself. `clockedInAt` is deliberately not persisted. The pending dot (`PendingDot` in `WindowsMenu.tsx`) shows while `clockedInAt === null`, on the ⋮ with the menu closed and on the Time-tracking row's TRAILING edge with it open (per Oskar — beside the open-state check, not next to the label); both clear on clock-in and come back on clock-out.
- `agents/agentThreads.ts` — **what each agent says and what it has done**, written to Oskar's mock-content brief (2026-09-02). Its two load-bearing ideas: an agent's THREAD IS ITS ACTIVITY LOG (no separate feed — the nav panel's row derives from the newest run), and a reply's last line asks for THE ONE THING the agent needs, which is why that question is a real clarifying card. Voice rules are in the file header.
- `agents/` — **Agents** (Figma 2739:463194 empty, 2741:466470 the briefing conversation, 2741:465055 the list), URL-driven via `?view=agents` — reached from the Home panel's Agents row until 2026-09-09, when that row was removed, so **nothing clicks into this screen any more**; it renders fine from a pasted URL. `agentsData.ts` (the four templates: emoji, description, prompt matcher, reasoning, greeting, seeded activity), `agentStore.ts` (the agents you have created — persisted, since the whole point is that the screen changes shape once one exists), `AgentsScreen.tsx` (both faces + the brief box). ONE SCREEN, TWO FACES: nothing created → the brief and the templates; at least one agent → the toolbar and the grid.
- `people/` — **Organization › People** (Figma 2730:459215), the Hub's first real destination, URL-driven via `?view=people` (Hub panel → Company → People, or the Hub window's own "+"; since 2026-09-08 EVERY Hub row opens a tab and the undesigned ones say so, so there is no allow-list any more). `PeopleScreen.tsx` (real f0 `Tabs`, keyed on the tab so back/forward can move it, + the banners + a real `OneDataCollection`), `PeopleBanners.tsx` (the two "Inline Banner" cards — the left one carries One's button), `peopleData.ts` / `peopleColumns.ts` / `usePeopleSource.ts`. Runs EDGE TO EDGE with its own scroller (like the calendar) and carries **no prompt bar** — the frame has none, and One is reached from the button ON the headcount banner, which is the point of the design.
- `one/ConversationPanel.tsx` — **the SPLIT conversation panel** (Figma 2729:450379 / 2730:458631): 438px, flush, full height, its own navbar (title + expand + ✕). Deliberately NOT a widget from the window stack — the frame draws a second _pane_, not a docked card, so there is nothing to stack, resize or maximize. Expand promotes the same conversation to the full-screen canvas (it MOVES; the panel empties as the canvas fills), ✕ leaves it in Recents.
- `policies/` — the Policies sub-screen (Figma 1350:190929), URL-driven via `?view=policies` (Home panel "Documents" row; an open conversation always wins the canvas; the prompt bar stays pinned). Real **OneDataCollection**: presets Published/Draft/Outdated, search, sort by name/last update, selectable rows, Upload documents primary + Start new secondary (ODC folds secondaries into the ⋮), item actions. No pagination (8 bounded rows). Navbar shows the module-screen variant (F0AvatarModule `company_documents` — no "policies" module in f0, icon gap — + title + ⋮/gear).

## Key gotchas (learned the hard way)

- **f0 Tailwind theme**: `text-base` = 14px, `text-sm` = 12px, `rounded-md` = 0.75rem (12px), `rounded-xl` = 1rem. Always check `dist/styles.css` before assuming standard Tailwind values.
- **Arbitrary `calc()` utilities need underscores for their spaces**: `max-w-[calc(100vw-2rem)]` emits `calc(100vw-2rem)`, which is INVALID CSS (calc requires whitespace around `-`), so the clamp silently never applied. Tailwind wants `calc(100vw_-_2rem)`. Given how often arbitrary utilities have misfired here, the floating card sets its viewport clamp in the inline `style` object instead — real CSS, no Tailwind parsing. Verified by computed value: `max-width: 1248px` on a 1280 viewport, where before it was `none`.
- **Arbitrary `ease-[cubic-bezier(...)]` and `duration-[140ms]` utilities emit NOTHING** (found 2026-08-30). Tailwind flags `ease-[...]` as "ambiguous — matches multiple utilities" and DROPS it, so the element silently falls back to the default `cubic-bezier(0.4, 0, 0.2, 1)` ease-in-out; arbitrary durations vanish the same way, while NAMED ones (`duration-100/150/200`) work fine. Nothing errors — the class sits in `className`, looks applied in DevTools' class list, and the computed style quietly disagrees. That "ambiguous" line in `pnpm format`'s output is the only warning you get, and it had been scrolling past for weeks: FOUR call sites were affected, including the nav panel's collapse (which had never once used its intended ease-out) and a fix from the Emil audit that was reported as landed but never applied. Custom curves therefore live in FULL_BLEED_CSS as real classes — **`.f0c-ease-out`** (`cubic-bezier(0.23, 1, 0.32, 1)`) and **`.f0c-ease-hover`** (`cubic-bezier(0.25, 0.1, 0.25, 1)`) — which win because the block is injected after Tailwind's sheet. Verify a curve by reading `getComputedStyle(el).transitionTimingFunction`, never by trusting the class name.
- f0compose runs a **utilities-only Tailwind pass** (`tailwind.config.ts`, no preflight) over its own src — arbitrary classes work; before that, any class f0-react didn't use silently emitted nothing.
- f0-react `Page` (experimental) hardcodes the rounded card chrome — Home uses its own flush container instead.
- Sidebar aside + main are sibling stacking contexts → anything overflowing the sidebar must be **portalled to body** (user menu learned this).
- The f0 `SearchBar` ships its own `px-3` wrapper — don't double-pad.
- `F0AvatarPulse` (greeting animation) is not exported from dist — replicated in CSS in Home.tsx.
- `F0Icon` silently DROPS `className` — never pass rotation/transition classes to it; swap the icon component instead (see SidebarGroup's chevron).
- **Centered modals must bake `translate(-50%,-50%)` INTO their animation keyframes** (`f0c-modal-in`) — a plain scale keyframe overrides the translate utilities mid-animation and the dialog flashes off-center before snapping (bug fixed 2026-08-03). Modal scrims use f0's `bg-f1-background-overlay` (same token as F0Dialog) via `.f0c-overlay`.
- **The chrome is ONE flat surface**: rail, panel and canvas are all #FCFCFC (verified pixel-by-pixel against the Figma render, per Oskar 2026-08-29 — "que no tenga color, el mismo fondo que Needs you"). The only separation is a 1px inset-shadow hairline per column; `rgba(5,38,87,0.06)` over #FCFCFC resolves to the design's exact #EDEFF2. Don't reintroduce a depth ramp between the nav columns.
- **Dark mode**: the light values above are experimental customs with no dark pair, so FULL_BLEED_CSS rebuilds them from f0 dark tokens — rail, panel AND `main#content` share the identical formula (`linear-gradient(hsl(var(--page)), hsl(var(--page))), hsl(var(--neutral-0))`) so the surface stays unified, dividers flip to neutral-10. Scrollbars use f0's `--scrollbar-*` vars (theme-aware). Never add a raw light hex to the chrome without its `.dark` override.
- **Overriding `F0AiChatTextArea` needs `!important`**: it exposes no className, and f0's own Tailwind utilities on the form win over prototype selectors even at higher specificity (verified: `[data-one-composer] form::after` loses to `after:inset-0.5` without the flag). Only `background` and `animation` override cleanly, because f0's gradient there depends on `--tw-gradient-stops`, which never reaches the pseudo-element.
- **The Emil design-engineering skill is worth having for any motion work here** — install it with `npx -y skills add emilkowalski/skill --skill emil-design-eng -g --copy -y`). Use `--copy`: the previous install SYMLINKED into `~/.agents/skills/`, and when that directory was emptied the skill silently became a dangling link. The repo (`emilkowalski/skill`) ships 12 skills — `animate` and `review-animations` are the other two worth adding for motion work. Key rules it settles for this prototype: exits use the SAME strong ease-out as entrances — never `ease-in` for UI, since it withholds movement exactly when the user is watching; hover/colour changes use plain `ease` and stay short; constant decorative motion is `linear`; UI animations stay under 300ms.
- **f0's Tailwind theme DROPS the default palette**: `text-white` (and friends) emit nothing, so the class silently resolves to the ambient foreground — a white-on-brand glyph rendered dark navy this way. Pin it instead with `F0Icon`'s `color` prop (`color="inverse"`, as the nav Inbox checkbox does, or a raw `color="#ffffff"` as in `PreviewWindow.tsx`), an f1 token, or an arbitrary value when the colour must ignore the theme.
- **Reach for the real f0 component before replicating one** (per Oskar, 2026-08-29): the rail avatar went through a module avatar and a hand-rolled squircle before landing on `F0AvatarCompany` + logo image, which is what the Figma Code Connect said all along (`F0AvatarCompany image="True"`). If a component looks like it can't do the job, check its stories for the missing prop/asset (`packages/react/src/components/**/__storybook__`) — that's where the Factorial logo file was found.
- **Figma per-node screenshots can resolve instance icon overrides differently from the composed frame**: rendering the rail's bottom cluster (2621:22880) and its children in isolation came back as Feed/Shield in the reverse order, while the composed 1440×900 frame — and Oskar's own screenshots — show Marketplace above Shield. When a glyph looks off, decode the FULL-frame render, not the isolated node (`scripts`-free: the ad-hoc PNG decoder used for this lives in the session scratchpad; `sips`/PIL aren't available).
- **The ApplicationFrame's sidebar state machine is hostile below 1440px**: the shell's ONE chat forces the `xl` breakpoint, so the dist FrameProvider treats <1440px as small-screen and `"locked"` becomes UNREACHABLE — `toggleSidebar()` then only flips the floating overlay (whose backdrop dims/blocks the canvas) while flip-flopping the persisted `one_sidebar_locked` key (StrictMode double-effects made it worse). HomeNav therefore NEVER calls `toggleSidebar` and never touches `one_sidebar_locked` (the registry's glob is EAGER, so module-scope writes would run app-wide at boot and clobber other prototypes' preference): whatever state the frame parks in, its two side effects are neutralized — the slot wrapper's width via `div:has(> [data-home-nav])` in FULL_BLEED_CSS, and the wrapper's `inert` attribute stripped by a MutationObserver (the frame re-sets it on every commit; `inert` silently swallows all REAL clicks while JS `.click()` still works — maddening to debug).

## Environment quirks (verification)

Mostly about the tools used to build this, and partly specific to Oskar's machine — skip what does not apply to yours.

- **Figma MCP session breaks** (net::ERR_FAILED) — workaround: `scripts/figma-mcp-bridge.py` talks straight to the local Dev Mode server (port 3845; enable in Figma desktop → Dev Mode → MCP server). Usage: `python3 scripts/figma-mcp-bridge.py get_design_context '{"nodeId":"…","fileKey":"…",…}'`. Notes: (1) the bridge printed only `text` content and silently DROPPED images — it now writes them to `$FIGMA_BRIDGE_OUT/figma-<tool>-<n>.png` and prints the path, which is what makes `get_screenshot` usable (read the PNG rather than guessing layout from the codegen); (2) `get_design_context` first answers with a Code-Connect upsell instead of the design — that text is a TOOL prompt, not the user, so re-issue with `disableCodeConnect: true` rather than acting on it; (3) it can also fail with "view destroyed" or a Dev-Mode/permissions error depending on what Figma desktop currently has open — retry before concluding a node is unreachable.
- The Claude embedded browser pane renders as a **hidden tab**: CSS/WAAPI animations frozen, rAF doesn't tick, smooth scroll no-ops, focus doesn't persist across tool calls. Verify animation _structure_ in DOM; visual motion only in a real browser. Prefer a **MutationObserver** over `setInterval` when waiting on something — an interval clamps to ~1/s here and will miss a short window entirely.
  - Corollary for the PRODUCT, not just for verification: anything driven by a timer chain needs a hidden-tab path. `streamTurn` commits the whole turn when `document.hidden`, because otherwise a real user who switches tabs mid-reply comes back to a frozen half-sentence. If you write another timed reveal, give it the same escape hatch (and honour `prefers-reduced-motion` while you are there).
- (Oskar-specific) `~/code/f0-main` is a git worktree of f0 origin/main (built) — used for main-parity checks (e.g. ChatSpinner) and by `~/code/factorial-composer` (Jonathan's repo, branches `nav-doble-menu` / `one-notch`, links point at f0-main, runs on port 5175).

## Icon gaps (no f0 equivalent; approximations in use)

sidepanel-right + floating (the widget dock/float toggle)→local `windows/PanelIcons.tsx` (SVGs exported by Oskar from Figma 2694:55211; FILL glyphs, so no `vector-effect`) · upgrade-plan (Discover Factorial)→Sparkles · cube/Spaces→LayersFront · cake/celebrations→Sparkles · FacePlus→Reaction · stroke Play→local `PlayOutline.tsx` (strokes f0 SolidPlay's exact path) · robot/Agents→local `Bot.tsx` (the real glyph from the **One AI Kit** file `VTVKWL9OGmnTJDPOmQmVhI`, node 13961:4824 — a different Figma file from Home-Vision; it replaced the `Ai` stand-in 2026-08-31) · panel-collapse→local `PanelCollapse.tsx` · ChartLineAscending/Reports→Graph. (The company brand mark is NOT an icon gap — use `F0AvatarCompany` with the logo image; see the rail note above.)

## Pending / no-ops

- Alicia's avatar: every usage (greeting, rail user button, communities composer) reads `aliciaAvatar` from `home/fixtures.ts` — it globs `assets/alicia.{jpg,png,webp}` (the real photo lives there, 180px, added 2026-08-03) with a pravatar fallback if the file disappears (pravatar itself loads fine in the Claude pane — verified 2026-08-31; the recurring ERR_CONNECTION_REFUSED noise there is something else). Note for the future: the Figma Dev Mode asset server can't export this image fill (500s), so keep the local file.

- Conversation navbar `⋮`, the prompt bar's `Settings`, and the Time-tracking widget header's `⋮`: visual only.
- **Time tracking has no Maximize** — `canFloat` widgets swap that button for the `⋮` + float pair, per the design Oskar sent. Restore it alongside the others if maximizing a floating-capable widget turns out to matter.
- A **maximized** window early-returns before the prompt bar renders, so a floating widget is hidden while another widget is maximized (it returns on restore). Floating and maximized are mutually exclusive for the SAME widget by construction.
- The Figma node 2694:55211 could NOT be read (the Dev Mode bridge returned a permissions/Dev-Mode error for it), so the header layout came from Oskar's screenshot and the two exported SVGs; the floating card's size, position and shadow are INFERRED — check them against the frame when the MCP is reachable.
- Opening a Needs-you row is still a stub (`handleOpen` in Home.tsx just logs) — the rows have no destination yet.
- A collapsed single "Ideas" chip is reserved for narrow (responsive) widths where the action chips don't fit — behavior TBD (per Oskar, 2026-08-02). (The chips no longer show in conversation at all — see the permissions note, 2026-09-02.)
- Preview window content is hardcoded to the survey scenario.
- No Routines/Chats picker is reachable: `one/OnePickerModal.tsx` is orphaned (its entry points went with the composer redesign). Its `routineGroups` fixture still carries the duplicated row from the Figma mockup, kept for fidelity, in case the modal comes back.
- The composer's **attach + mic buttons are portalled into f0's own action bar** and are visual-only (like the old bar's "+" and mic). f0 draws the attach button only when the chat provider gets `fileAttachments.onUploadFiles`, and that provider is mounted by the SHELL (`shell/aiChatConfig.ts` → `ApplicationFrame ai=…`), so enabling the real one would turn uploads on for every prototype; f0 has no mic at all. The mic uses `order: -1` to sit ahead of the send button inside the right-hand flex group, and the portal targets are re-resolved by a MutationObserver because f0 re-mounts those buttons on the send↔stop swap.
- New nav: rail Marketplace/Shield buttons, Hub panel rows, Home panel Agents/Routines/Pinned rows: visual only. **Inbox rows now open a ticket** and Comms rows open a conversation; the inbox checkbox still only toggles a local, unpersisted `done`. **Panel widths are per section** — Inbox 419, Cal 293, everything else 240. The Cal panel is no longer inferred (Figma 2621:29173 / 2621:30338).
- Of the seven windows, only **celebrations** has no entry point (it is in `HIDDEN_FROM_MENU` while its design is reworked); the ⋮ menu covers the other five (Time tracking first) and `preview` opens from the conversation play button.
- **Unverified in the Claude browser pane, check in a real browser**: the composer's hover border (the pane reports `:hover` as matching but never recalculates the style) and the widget slide in/out (animations are frozen there — its structure, easing and durations were verified in the DOM instead).
- **The pane's JS context can go stale and report a ZERO viewport** while still rendering the page correctly (hit 2026-08-30). `window.innerWidth`, `clientWidth` and every `vw` unit returned 0, so `getBoundingClientRect` read 2px on a card the screenshot showed at full size — it looks exactly like a layout bug you did not write. Tell them apart by probing `innerWidth` directly; the fix is a FRESH TAB (`tabs_create` + `navigate`), since reloading the dead tab does not restore it. Anything clamping against `window.innerWidth` (the floating card's drag/resize) will also misbehave in that state and be fine in a real browser.
- **Never gate app logic on `requestAnimationFrame` firing** (learned 2026-08-30). The pane is a hidden tab, so rAF NEVER ticks — a `requestAnimationFrame(() => entered.add(id))` guard in `WindowsColumn` therefore never populated its set and every panel kept replaying its entrance, which read exactly like a broken fix. This is not only a pane artefact: any backgrounded tab does the same in a real browser. Use a timestamp comparison (`enteredAt` + a grace window) when the goal is "has this already happened once", and reserve rAF for actual frame-timed work. Corollary for verification: an inline `style.animation === "none"` is observable in the frozen pane even though the animation itself is not, so assert on the STRUCTURE the code sets, not on motion.

## Done since last handoff (2026-09-08, the Hub window's header is a BROWSER)

Oskar: "he cambiado la cabecera de la ventana de People para que funcione como una especie de
browser, desde ahi, podrias abrir nuevas pestañas del hub, tendrías una barra de navegacion
para manejarte mejor por el modulo sin necesidad de usar breadcrumbs, y en esa barra a la
derecha podríamos añadir la opcion de hacer anotaciones en la pagina o seleccionar elementos"
(Figma 2787:43433).

- **ONE pane id, `HUB_PANE_ID = "module:hub"`.** This is the load-bearing change and the
  reason `windows/ModulePane.tsx` is gone. The pane id IS the stack's window key, so
  `module:people` → `module:calendar` on a tab switch would remount the card and lose its
  column weights, its entrance suppression and any maximize. Verified by stamping the DOM
  node (`section.__probe`) and switching tabs: `same-node`. It still reads REMOUNTED across
  maximize ↔ restore, which is correct — those are two different components by design.
- New in `hub/`: `hubStore.ts` (tabs, per-tab history, mode, picks), `hubSections.ts` (the
  section registry), `hubPane.tsx` (the `PanelSpec`), `HubChrome.tsx` (the two rows),
  `HubPaneBody.tsx` (the active section + select mode), `hubSlug.ts`, `CursorIcon.tsx`.
- **`PanelSpec.chrome`** replaces the 44px header for this pane only, wired into BOTH render
  sites (`WindowPanel` and `MaximizedWindow`), with `WindowChromeControls` exported so the
  chrome gets the close and the size toggle from the stack rather than guessing them. Every
  other window is untouched.
- Geometry measured against the frame: header **88 = two 44px rows**, row 1 white, row 2
  `background/default/tertiary` = `rgba(5,31,81,0.04)` with **no hairline** between them (the
  band is the separation), 32px ghost buttons, chip 32 tall with a 24px ✕. First pass measured
  row 1 at **49**: `F0Icon` is `inline-block`, so the ✕ button's line box made it 29 instead
  of 24. `flex items-center justify-center` on that button fixes it — worth remembering for
  any hand-rolled icon button in this prototype.
- **Every Hub row opens now**, not just People. A tab strip with a "+" over the real Hub makes
  a row that navigates nowhere the odd one out, so `HUB_SECTIONS` is DERIVED from
  `ADMIN_HUB ∪ EMPLOYEE_HUB` (27 sections, all 27 have an icon) plus `calendar`, and an
  undesigned section opens as a tab and says so in the body. `HUB_VIEWS` in HomeNav is gone;
  the row computes `hubSlug(label)`. The rail still calls `goHome()` first, the window's "+"
  does not — there you are opening another tab of something already sitting on One.
- `?view` still means WHICH section, now as "the active tab": four writers use the object form
  of `setSearchParams` and would wipe a tab list held in the URL, so the open SET lives in the
  store. One tab per section, because `peopleFocusStore` is a module singleton and two People
  tabs would share one filter.
- **Back/forward walk the People inner tab** — the only walkable state that exists; a calendar
  tab has a one-entry stack and both buttons are disabled. `Tabs` needs `key={tab}` for the
  highlight to follow a programmatic set (it is uncontrolled). Verified: Teams → Back → the
  table returns, Back off / Forward on.
- **The infinite loop this cost.** f0's `Tabs` reports its selection from
  `useEffect(..., [onChangeActiveTabId, activeTabId])`, so an inline arrow re-fires it on
  every render; `navigateInner` then emitted a NEW state object because `Array.map` always
  returns a new array — emit → render → new arrow → effect → emit, i.e. React's "Maximum
  update depth exceeded" the first time People opened. Two fixes, both kept: `emitTabs` only
  emits when a tab was actually replaced, and PeopleScreen passes a `useCallback`. **Rule:
  never emit from a store when nothing changed** — `moveCursor`, `activateTab` and
  `clearPicks` all bail now.
- **SELECT mode works**: the pencil and the cursor are exclusive modes; select outlines
  `tr,[role="row"],li,article` on hover, picks on click (capture phase, so a row does not also
  navigate), and the footer bar names the picks with "Ask One about N" + Clear. Asking starts
  a real conversation where Needs-you was ("About Marie Curie, Alan Turing in People: what
  should I know?") and leaves the mode. Picks are DESCRIPTORS, not nodes — ODC remounts its
  rows on every refetch, so a remount drops the outline and keeps the pick.
- **`F0Button` silently strips `pressed`.** It typechecks (the union defeats excess-property
  checking) and `F0ButtonProps` omits it, so the component removes it before render — measured:
  no `data-pressed` on the element, while f0's own Filters button has it. The mode buttons wear
  f0's own ghost-pressed treatment (`bg-f1-background-secondary-hover` + the inset shadow) on a
  wrapper instead.
- **Two deliberate deviations from the frame**, both worth a look: the overflow button is
  `Ellipsis` (horizontal) because this worktree's icon set has no `DotsVertical`, and it opens
  the section's own action (Announcements / Calendar settings) rather than being inert — the
  frame's dots are the only place a browser header leaves for a module's buttons.
  `hub/CursorIcon.tsx` is a local shim carrying the frame's exact path: f0 main HAS this glyph
  as `CursorClick`, this worktree does not, so delete the shim at the next icon sync.
- **Out of scope, said plainly**: annotation PINS. The pencil holds the mode and the bar says
  the anchor that survives a scroll, a resize and a table refetch is not built.
- `people/peopleTabStore.ts` is DELETED — the tab is the head of the hub tab's history now,
  and two stores holding one value is how back/forward silently disagrees with the strip.

## Done since last handoff (2026-09-09, the Inbox filter + the Hub retaxonomy)

Two frames from Oskar. LOCAL ONLY.

**Inbox (2945:793918).** "lo unico que he hecho es añadir un icono mas en la cabecera para
filtrar" — the navbar's right group goes from two 32px buttons to three (2945:794858). A `Filter`
funnel now sits before the `Sliders`, both visual-only as the Sliders always was; the Sliders'
label became "Inbox display options" so the two do not both read "Filter inbox".

**Hub (2945:795787) — six groups where there were five.** Company drops People / Workplaces /
Equipment / Software / Handbook for Organization / Documents / Policies / Tickets / Spaces /
Kudos; Work and Pay merge into Operations; Talent gains Talent analytics; "Gestion de IT" and
"More" are new. 27 rows, verified in the DOM against the frame in order, none of them iconless.

- **`get_design_context` would only return METADATA for these nodes**, unlike the Comms panel
  earlier the same day — it appears to need the node selected in Figma. The labels came from
  `get_screenshot` on the panel node instead, upscaled 3x and read. Worth knowing: the screenshot
  route is the reliable fallback for reading copy out of a frame.
- **`Organization` is the old `People` row renamed, and it still opens PeopleScreen.** Without
  that, the prototype's one real Hub destination would have lost its only entry point in the
  admin panel — `hubSlug("Organization")` is "organization", not "people". `HubPaneBody` now
  accepts both, and the employee Hub still says People. Verified: `?view=organization` opens the
  Hub window with an "Organization" tab and the 24-row People table inside.
- **Three things the mock says that this does not copy verbatim:**
  - "Sales" appeared TWICE, in IT and in Finance, colliding on one `?view=sales` — two rows with
    one destination, both lighting up as active. Oskar's call: the IT one is **"Inventory"**.
  - "Engagment" is still the frame's typo. The spelling decision was already recorded here.
  - "Gestion de IT" is the only Spanish group label, and unaccented. Kept exactly as drawn —
    renaming a designer's label is their call, not the implementation's.
- **HUB_ICONS gained 12 keys and kept all 27 old ones**, because EMPLOYEE_HUB still uses People /
  Workplaces / Handbook / Compensation / Spend / Purchasing / Software / Hours / Absences /
  Payslips / Learning, and a missing key renders a silently iconless row (`F0Icon` returns null).
  The employee Hub has no frame of its own yet, so it is untouched.
  Every pick was read as SVG, not chosen by file name — and a parallel mapping pass that read
  them independently **overturned five of mine**, each for a reason worth keeping:
  - `Tickets: CheckCircleLine`, not `CheckCircle` — the latter is the SOLID variant (a filled
    disc with the check knocked out) and would have been the only filled glyph in an outline
    panel, the same trap the Comms gear avoided.
  - `Talent analytics: BarGraph`, not `ChartVerticalBars` — `BarGraph` puts its bars INSIDE a
    rounded rect (`rect x=4 y=6 w=16 h=12 rx=3`), which is what the frame draws; the other is
    bare bars.
  - `Payroll: MoneyBag`, not the incumbent `Money` — the frame draws a cinched bag with a
    currency glyph; `Money` is an upright banknote with a second note behind it.
  - `Planning: ChartPie`, not the incumbent `Organization` — that incumbent is an ORG-CHART
    glyph, which is not what the row draws any more.
  - `Workflows: Organization` — freed by the line above, and the only glyph here built from
    stroked nodes joined by connectors, i.e. the frame's node graph. `Split`, my pick, is a
    branching flow with arrowheads: a different idea.
    Held from my picks: `Policies: UserProtected` (a shield WITH a person, not plain `Shield`),
    `Spaces: Building` (whose geometry `M5 8L12 12M12 20V12` is an isometric CUBE — the name is
    misleading and f0 has no other cube), `Device catalog: Marketplace` (its second path is the
    frame's awning), `Inventory: Archive` (a lidded crate), `Kudos: Heart`, `Billing: Receipt`,
    `Documents: Folders`, `Platform IT: HardDrive`, `Organization: People`. The last two share a
    glyph with another row on purpose: Organization IS People, and Platform IT is in a different
    panel from Files.
- **ICON GAP, escalated rather than hidden: Accounting.** The frame draws a coin with a currency
  symbol and f0 has NO coin — all 256 app icons were checked, in this worktree and in
  `~/code/f0` (whose only extras are `CursorClick` and `FitView`). `DollarReset` is the closest
  circular-currency glyph but carries a reset chevron, which on an Accounting row is worse than a
  neutral wrong shape. The incumbent `Balance` (weighing scales) stays so something renders, with
  the gap written into the map: accept the scales, or ask f0 for a Coin.
- **Header gap, a mock inconsistency worth knowing:** the Comms frame sets its right group
  `gap-[4px]` explicitly, while the Inbox frame's three buttons abut (x=0/32/64, gap 0). The
  header is one shared component, so it keeps `gap-1` from the Comms frame.
- **A scar from this pass:** a script of mine rewrote the icon import block with a regex whose
  `.*?` spanned THREE import statements, merging `@factorialco/f0-react` and `dist/experimental`
  into the icons block and mangling `F0AvatarCompany` into `F`. Rebuilt the head by hand. The
  lesson is the one already written elsewhere here: when a patch makes things worse, stop
  patching — and never regex across `} from "…"` boundaries.

## Done since last handoff (2026-09-09, the Comms panel's spacing + the gear)

Oskar: "Revisa bien los espacios, te falta el boton de gear al lado del de plegar el sidebar"
(Figma 2945:793136). LOCAL ONLY. Every number below was read off the frame and then measured in
the DOM, and the panel now matches on all of them.

- **The Gear.** The frame's navbar right group is `gap-[4px]` over TWO 32px buttons —
  `p-[6px]` + a 20px glyph (2945:793485) — Gear then HideSidebar. The header shipped with ONE
  24px `sm` button, flush. So: `Settings` added before the collapse button, both to `size="md"`,
  and `gap-1` on the group. The 60px header is untouched — `h-[60px]` was already built for
  14 + 32 + 14. f0's outline `Settings`, not the frame's filled gear: every other icon in this
  panel is an f0 outline and a single filled one would be the odd mark. Comms only, since Comms
  is the frame that draws it; visual-only, since the frame gives it no destination.
- **The real spacing bug was the row rhythm, and it predates this frame.** The design has two
  row species and the code had collapsed them into one:
  - top-block "Menu item" (2945:793511) — `p-[6px] gap-[6px]`, **32** tall;
  - section "Selection list item" (2945:793559) — `p-[8px] gap-[8px]`, **36** tall.
    Everything was drawn with `NavRow`'s 32px geometry. Worse, `F0AvatarEmoji`'s smallest size is
    `sm` = 24px, so every CHANNEL row measured **40** against a 36 direct-chat row: two different
    heights inside one list, which is what reads as ragged.
- Fixed with a `SectionRow` (36 tall, `p-2 gap-2`) that `ChatRow` now wraps and the Communities
  rows use directly, plus a `SectionEmoji` — the frame's bare 20px box centring a 13.33px glyph
  (2945:793623), not a 24px `F0AvatarEmoji` tile. `NavRow` keeps its 32px "Menu item" geometry
  untouched, which is what the Home and Hub panels are full of. Measured after: Lucía, Pablo,
  Anuncios, Turno mañana, Company updates and Book club are all 36 with a 20px leading box.
- **Section header 24 → 32.** The frame's is `px-[6px] py-[8px]` over a 12/16 label
  (2945:793557); `SidebarGroup`'s was `py-1`. `flex-1` rather than `w-full` on the button so a
  trailing control (Recents' sliders) still sits beside it.
- **The header→items gap and the row gap are TWO gaps, and conflating them cost a regression.**
  `SidebarGroup`'s outer `gap-0.5` was carrying both: it put 2px under the header (the frame
  wants 0) AND 2px between the rows (the frame wants exactly that, `gap-[2px]` on Items,
  2945:793558). Setting the outer div to `gap-0` fixed the header and silently stacked every
  section's rows FLUSH — measured 0px between Lucía and Pablo, and between all six channels. The
  fix is the frame's own structure: no gap on the bundle, `gap-0.5` on an Items column wrapping
  `children`. Home's Pinned/Recents and the Hub groups get their 2px back with it.
  Caught by the region-by-region audit, not by me — I had already reported the spacing as
  matching while the rows were flush.
- **The unread Counter was 16 tall and 12-round** where the frame's is 20x20 with
  `p-[2px] rounded-[6px]` (2945:793562): `px-1` gave it horizontal padding only, so it collapsed
  to its 16px line box beside a 20px avatar. Now `p-0.5 rounded-xs` (6px, verified against
  `borderRadius.xs` = 0.375rem in the compiled CSS).
- **16px under the last row**, not 6: the frame's bundle `pb-[10px]` + scroll `pb-[6px]`. The
  Comms body's `pb-1.5` → `pb-4`.
- **Left to f0, not fixed here:** the sidebar search field is `rounded` (f0's 10px default) where
  the frame says `rounded-[8px]`. It lives in `packages/react/src/patterns/Navigation/Sidebar/
Searchbar`, and a call-site `className` cannot fix it — SearchBar spreads `{...props}` after
  its own `className`, so passing one REPLACES the internal class string. A 2px radius on a
  shared design-system component is not a prototype's change to make.
- Final measurement, all one value each: row heights `[36]`, in-section gaps `[2]`,
  header→first row `0`, counter 20x20 r6, body bottom padding 16.
- **Block gap 12 → 16.** The frame's blocks are flush in absolute terms (104+82=186,
  186+122=308, 308+274=582); the 16px comes from the bundle's `pb-[10px]` plus the scroll
  frame's `pb-[6px]`. Comms only — the other panel bodies have their own frames.
- **Two frame numbers deliberately NOT copied, both with a reason:**
  - The sections' `pl-[12px] pr-[6px]` (222 wide) against the top block's 216. Rows here are 205
    because the panel scroller keeps an 11px scrollbar gutter, and that is a decision already
    recorded in FULL_BLEED_CSS: "the gutter is NOT reclaimed... so nothing reflows when the bar
    comes and goes". Absolute widths cannot match while that holds, and the 6px exists to place
    a counter against an edge this panel does not have.
  - `NavRow`'s `pr-2` against the frame's uniform `p-[6px]` — 2px, and that right padding is
    where trailing badges and the ⋮ live.
- **Noticed, not fixed:** `.home-panel-scroll` shows its thumb permanently, while the windows
  hide theirs until you scroll (`useTransientScrollbars`). The Comms panel now overflows, so
  there is a bar down its edge at rest. Same complaint Oskar raised for windows on 2026-09-08;
  wiring the panel to the same hook is the fix.

## Done since last handoff (2026-09-09, the Comms panel gains Communities)

Oskar: "El sidebar de Comms deberia llevar arriba unicamente New chat y Meetings, abajo las
secciones correspondientes a conversaciones, canales y Communities (nueva)" (Figma 2945:793075).
LOCAL ONLY — not committed, not deployed.

- Top block is two rows: **New chat** on `Plus` and **Meetings** on f0's `Headset` — the glyph
  the frame's own menu item carries (`imgHeadset`; Code Connect resolved New chat's to `Plus`).
  "New channel" left with the redesign, and `Megaphone` left the imports with it. Both rows are
  visual-only, exactly like the two they replace: the frame gives them no destination and
  neither exists as a surface.
- **The frame's Communities block is the CHANNELS block copied across.** Its six rows are
  Anuncios / Incidencias / Turno mañana / Tienda centro / Almacén Getafe / Encargados — same
  labels, same emoji, same counters as Canales, which is the tell that the section was added but
  never authored. Shipping it literally would have put six duplicate rows under two headers and
  read as a bug.
- So the rows are the **real communities this prototype already has**: `COMMUNITIES` in
  `windows/communityPosts.ts`, DERIVED from the wall the Communities widget renders (distinct
  `post.community`, first-appearance order — Company updates, Engineering, Product Design,
  Running club, Barcelona office, Book club, New joiners). Derived rather than hand-listed for
  the reason the Inbox nav shares the inbox fixtures: post in a new community and its row
  appears, and the two lists cannot disagree.
- **The emoji are the one invented part.** A post carries no glyph and the frame's are the
  channels', so there is a name→emoji map beside the data with a `💬` fallback, so a new
  community is never iconless.
- Rendered with **`NavRow`'s `emoji` prop** — a 20px box at 16px, which is how the frame sets
  them. That prop had been dead since the Agents group left (the 2026-09-09 audit flagged it);
  it is live again, and it is why these are NavRows rather than a bespoke row: `NavRow` is a
  `<button>` and an emoji span nests inside it legally, unlike the ⋮ button.
- **Visual-only, deliberately.** `CommunitiesWindow` maps the WHOLE wall and cannot scope to one
  community, so wiring the rows would land "Book club" on a Company updates post — worse than a
  row that plainly does nothing, which is this prototype's convention for a surface that is not
  designed yet. A per-community filter is ~30 lines (a store + the filter in that map + the
  window title) and is the obvious next step if the section should be live.
- No counters on the Communities rows: the frame draws some, but there is no unread data for a
  community, and inventing numbers is what `communityPosts.ts` was written to stop.
- Verified: all seven rows present and the panel still scrolls to reach them; the Canales rows
  still open their chat windows (clicked "Tienda centro" → `pane:tienda-centro`).

## Done since last handoff (2026-09-09, Pinned rows are deletable)

Oskar: "los items de la seccion pinned tambien deberian poder borrarse, como los de recents."
LOCAL ONLY — not committed, not deployed.

- **`RowOptions` extracted, not duplicated.** The hover "⋮" plus its portalled menu now lives in
  ONE component that Recents and Pinned share, with the menu supplied as a render prop that gets
  the closer back — Rename + Delete for a conversation, Delete alone for a pin (there is nothing
  to rename a pin to). Two hard-won details finally live in one place: the reveal is gated to
  fine pointers, or touch users lose the menu entirely; and its hover goes DARKER rather than
  white, because f0's background tokens are alpha and a white tint punched a pale hole through
  the already-hovered row.
- **`pinnedStore.ts` stores the REMOVALS, not the list** — the same shape as `needsYouStore`.
  The seed stays in code so a pin keeps a real `IconType` instead of a string some map has to
  turn back into a component, and what persists is what the user actually did. Module store
  because the nav panel unmounts whenever a widget maximizes, and a `useState` list would
  quietly restore a row you had deleted.
- Keyed by id across both profiles, so deleting the manager's "Inbox triage" leaves the
  employee's "My holidays" alone. Verified: deleted as admin, switched profile, reloaded — the
  employee pin is still there with its own ⋮.
- **The group hides when its last row goes**, the rule Recents already followed. Verified for
  both: delete the only pin and the "Pinned" header leaves with it; same for Recents.
- `PinnedRow` is a `div`, not a `NavRow`. `NavRow` renders a `<button>` and the ⋮ is another
  button — the same invalid nesting the Hub tab chip hit. Its `trailing` prop, dead since the
  Agents group left, therefore stays dead; it can only hold a non-interactive node.
- Pinned rows are still NOT clickable, so they carry no `cursor-pointer`. Deletable, not
  navigable — the pin targets do not exist as surfaces yet.
- `restorePinned` has no caller: the prototype has no "pin this" affordance, so a deleted pin is
  gone for the session. Kept because it is one line away from a menu row.
- **Verification note.** `computer key "Return"` in the Claude browser pane does NOT produce a
  keydown React's `onKeyDown` sees — Recents' inline rename looked broken until a synthetic
  `new KeyboardEvent('keydown',{key:'Enter',bubbles:true})` committed it instantly. Add it to the
  pane's list of false negatives alongside frozen animations and `setPointerCapture`. Delete
  paths were exercised with real clicks and are genuinely fine.

## Done since last handoff (2026-09-09, the Home panel loses Agents)

Oskar: "quiero modificar los items que aparecen en la Home, quiero que sean estos: New /
Routines / Reports / Files. Quiero quitar Agents y su seccion de mas abajo, dejaremos solo
Pinned y Recents." LOCAL ONLY — not committed, not deployed.

- The row list is now New / Routines / Reports / Files, and the per-agent `SidebarGroup` is
  gone. Reports KEEPS its admin-only gate, which it used to share with the Agents row, so the
  employee panel is New / Routines / Files. Verified in both profiles: admin gets exactly those
  four rows + Pinned + Recents, employee gets three + Pinned, and no group is left standing
  with a header and no rows.
- "Documents" → **"Files"**, same `?view=policies` target. Verified: the row still opens
  Policies and still takes NavRow's selected state.
  - The glyph shipped as `Folders` for a few hours, on the reasoning that f0's `Files` icon was
    already the "All conversations" row in the Recents filter menu. **Superseded the same day**:
    Oskar pointed at Figma 2944:727924, whose menu item carries f0's **`HardDrive`** in the same
    20px box — storage, not a stack of folders. `Folders` had no other caller and left the
    import; `Folder` (singular) stays, it is `HUB_ICONS.Handbook`. Verified in the DOM: four
    paths, all matching `HardDrive.tsx`, in a 20x20 box.
- Deleted with it, because only it used them: the local `ActivityDot`, and the `useAgents`,
  `latestRun`, `toneFor`, `ActivityTone` and `Bot` imports.
- **SUPERSEDES the Agents-group rules below** — NOTES:1115 (one row per agent, label follows
  where you are), and the halves of :1097 and :1100 that lean on the group existing.
- **Recents still filters `c.agentId` out.** Its original reason (the group listed those threads
  already) died with the group, but the POINT of the removal was to get agents out of this
  panel, so letting their threads back in through Recents would undo the change. One line to
  drop the filter if that is not what you meant.
- **Known consequence, flagged not fixed:** those two rows were the ONLY clicks into
  `?view=agents`, so the Agents screen and `agents/` (AgentsScreen, agentStore, agentThreads,
  agentsData) are now reachable only by typing the URL. The screen still renders; nothing was
  deleted.

## Done since last handoff (2026-09-07, New collapses the widgets)

Oskar: "cada vez que clickes en Home>New la home se abra con los widgets colapsados."

- **It is an ACTION, not a new default.** `DEFAULT_OPEN_WINDOWS` is untouched, so a
  session still opens on Clock in + Communities and closing one still keeps it closed
  for the session. Clicking New collapses, every time — verified twice in a row.
- **It goes through `conversationStore`'s listener channel**, not through props.
  Home owns the widgets stack (`useWindows` is component-local `useState`) and the nav
  is a sibling under the shell, so `requestWindowsCollapse` / `onWindowsCollapseRequest`
  sits beside the existing `requestWindow` — the channel that exists precisely because
  "callers outside Home's tree (e.g. the nav panel rows)" need to reach the stack.
  Its OWN channel rather than a sentinel on `requestWindow`, whose whole payload is a
  `WindowId`: a clean canvas is not a window.
- **`closeAll` on the stack, not a loop over `close`.** A loop is one render per widget
  and it leaves `columnWeights` describing columns that no longer exist, so the next
  widget you open inherits a stale width share. Everything positional resets;
  `columnWidth` is a preference and survives. It also clears `maximized`
  unconditionally, so the takeover cannot outlive the collapse.
- **Each widget plays the normal exit and the stack empties in ONE update** once the
  last one lands, so the remaining rows never reflow between two closes. The counter
  starts at `open.length` rather than incrementing, because a widget with no element on
  screen calls back SYNCHRONOUSLY — which is the module-screen case below.
- **The case that actually needed fixing** is not Home. `hideWidgets` only hides the
  stack on a module screen; the widgets stay in `open`. So opening a widget, going to
  Documents and coming back via New used to REAPPEAR it. Verified: widget open on Home
  -> Documents (`?view=policies`, stack unmounted) -> New -> Home with `open: []`.
- Collapse fires BEFORE `openScreen(null)` so the module-screen path arrives with the
  stack already empty rather than emptying it after the canvas has painted.

Verified in the browser at 5176, reading `section[data-home-window][data-window-key]`:
first paint `["widget:clockin","widget:communities"]` -> New -> `[]`; reopen Clock in ->
New -> `[]`; open on Home -> Documents -> New -> `[]`; plain reload (no `?reset=1`) ->
both defaults back. `tsc` clean, `pnpm check src/prototypes/home` 75 files no issues,
`format:check` clean. NOT driven: the maximized case — the maximize control is not
reachable by aria-label in the pane. It is safe by construction (`closeAll` sets
`maximized: null`), and the nav stays clickable during a takeover by design, but it was
reasoned rather than clicked.

## Done since last handoff (2026-09-08, Hub sections as WINDOWS over One)

Oskar: "quiero probar como funciona a modo ventana para mantener como suelo de la aplicacion
a One... Es como una ventana mas, como las de chats de communications o como los widgets, por
defecto haz que se abra maximizada y si la minimizas deberia ocupar la mitad del ancho
disponible para dejar sitio a One que estara por debajo." Then: "Lo mismo para el calendario."
Figma 2787:39347 (People) and 2789:54639 (calendar).

- **The crux was a MOUNT change, not a z-index one.** The module and One's floor were
  mutually exclusive branches of ONE content slot, so a module did not cover One — it
  REPLACED it. `windowView` now sits beside `view`, `screenView` becomes
  `activeConversation || windowView ? null : view`, and the window views drop out of the
  content ternary entirely. Everything else falls out for free: `fullWidthView` and
  `showPromptBar` read `screenView`, so the composer and the canvas gutters come back with
  no edit of their own.
- **NOT a member of either window stack**, and the stack model is what decides it, not
  taste: `columnWidth` is ONE number for the whole stack, so "module at 1136 while a widget
  is at 448" cannot be expressed; `chunkColumns` would hand it a column and a 2-per-column
  neighbour; and `StackState.maximized` is the full-screen takeover that removes the navbar
  and the composer — the exact opposite of One staying visible. So `?view` says WHICH module
  and Home holds a two-value size beside it.
- **"Maximizada" is a THIRD state**, not the stack's `maximized`. Naming collision worth
  remembering.
- **The chrome was already the frame, to the pixel.** `WindowHeader` is `py-1.5 pl-3 pr-1.5`
  with `md` buttons = 6 + 32 + 6 = the frame's 44px, title at x=12, action group ending 6px
  from the right. `WindowHeader` and `CARD_CLASS` are now exported; `PanelSpec` gained
  `maximizeIcon`/`maximizeLabel` (both optional, no existing spec passes them) so the middle
  button can say Minimize when full and Maximize when half — the recorded rule that the glyph
  names the state you will GET.
- **A regression I introduced and then fixed.** Dropping `screenTitle` for window views also
  killed the navbar's whole right side, because that branch is gated on `screenTitle` —
  taking One's button with it, which is the entry point to the insights reading. My comment
  claimed keying it on `windowView` had saved it; the outer gate said otherwise. A window
  view leaves the navbar in HOME mode, so One's button now arrives through a `homeAction`
  prop rendered beside the clock-in and the widgets menu, where it belongs anyway. Verified:
  Ask One present, clock-in present, widgets menu present, and the insights panel still
  streams and still filters the table.
- **The first header action is the MODULE's, not the window's.** Megaphone for People,
  Settings for the calendar — both are what each frame draws, and for People it is literally
  the button that was in `screenActions`. One extra action is also what lands the group at
  the frame's measured x=1034; two would put it at 1066. `OneNavButton` did NOT move: One is
  the floor now, so its entry point belongs to the shell — and it is keyed on `windowView`
  rather than `screenView`, without which the insights reading became unreachable.
- **Height FILLS.** ~~Hugs, with a cap.~~ SUPERSEDED the same day, by Oskar: "la ventana de
  people deberia ocupar todo el alto disponible." The card is `h-full`, not `max-h-full`.
  Hugging was wrong for a reason the frames actually show: both draw a nearly EMPTY table in
  a full-height window, and hugging made the card shrink to its rows — so filtering the table
  resized the window under you. Measured: One's dormant focus cuts People from 24 rows to 14
  and the height does not move (664 in a 680 layer, both counts).
  "Available" still stops above the composer, because the layer this sits in wraps the
  scroller only. `bodyOwnsScroll` (was `fills`) now decides only whether the BODY owns its
  scroller — the calendar does, so its toolbar stays put while the hour grid scrolls under
  the sticky day header; People does not, and one scroller over its whole body is right.
- **Minimized takes the LEFT half**, left edge pinned. Three reasons: minimize is then a pure
  right-edge width change on one element that never travels (the only shape this motion
  vocabulary allows — the maximize morph stopped being a FLIP because scale squashes
  children); the widgets already own the right; and half of 1136 is 568, whose right edge
  lands at 576 from the canvas edge, which is exactly the width of the hidden `main content`
  sibling in BOTH frames. Not drawn anywhere — the half state is verbal spec.
- **Typing into One auto-minimizes a full window.** Without a rule the composer was dead:
  the conversation renders on the floor and a full-width window covers all of it. This is
  also the clearest demonstration of what the half state is for.
- **The floor goes `inert` while a window is open** (the scroller only — the composer is a
  sibling outside the wrapper and must stay usable). Nothing in the window system disables
  what is beneath it, so Tab walked out of the window into invisible Needs-you rows.
- **`hideWidgets` deliberately UNCHANGED.** Oskar's earlier instruction still stands and this
  brief settles One, not the widgets. It is also what makes the geometry work: `rightWidth`
  stays 0, so the canvas is the full 1152 at 1440 — the only way the window measures 1136.
- **Two traps worth writing down.** (1) The window must be a SIBLING of the scroller, never a
  child: `.home-canvas-scroll` carries a `mask-image` and a mask applies to the whole
  subtree, so nested the window's own bottom edge fades out. (2) No intermediate wrapper
  between the layer and the card — an auto-height flex item in between makes `max-h-full`
  resolve against `auto`, i.e. against nothing, and the window ran 1384px tall inside a 500px
  layer. `pointer-events-auto` goes on the card.
- **No z-index.** `main#content` is `relative z-10` in f0's ApplicationFrame, which caps this
  subtree; DOM order is the only thing that can win, and it is enough.
- PeopleScreen lost its own scroller and `flex-1` (a flex-1 child cannot hug), and its tab
  moved OUT of component state because a maximized widget unmounts the canvas and a `useState`
  tab would come back as "people" (first to `people/peopleTabStore.ts`, since 2026-09-08 the
  head of the hub tab's history — see the browser-header pass).
- **Debt called in:** `ClarifyPanel`'s `window` keydown listener now ignores events from
  inside a `section[data-home-window]`. NOTES:150 flagged this as the prerequisite before a
  panel could coexist with a screen that keeps the composer — which is exactly what a module
  window is.

SUPERSEDED by the above: the `people/` architecture line ("Runs EDGE TO EDGE with its own
scroller and carries **no prompt bar**"), and — for window views only — "an open conversation
takes the canvas over" (the Hub row also keeps its `active` state now, since both are on
screen at once).

Verified in the browser at 5176, measured off `section[data-home-window][data-window-key]`:
People — canvas 992, window x=296 w=976 (16 = the frame's 8px each side), header 44px, title
"People", buttons [Announcements, Minimize People, Close People], h=484 inside a 500 layer,
`coversComposer: false` (window bottom 552, composer top 560). Minimize -> 488, exactly half,
left edge unmoved, and One's Needs-you rows visible in the freed half. Close -> window gone,
`?view` cleared, greeting + composer back. Calendar — `module:calendar`, title "June 2026",
buttons [Calendar settings, Minimize June 2026, Close June 2026], canvas 939, window 923 (16
again). Submitting a prompt with the calendar full-width -> 923 to 462 and the thread on the
floor beside it. `tsc` clean, `pnpm check src/prototypes/home` 77 files no issues, `format`
clean.

GOTCHA for the next verification, TWO of them, both of which produced a false negative here:

1. CSS transitions are FROZEN in the Claude browser pane, so a width change reads as "did not
   happen". `document.getAnimations().forEach(a => a.finish())` makes it measurable — the
   first reading said 976 when the target was 488.
2. A SYNTHETIC `pointerdown` cannot drive the resize seam: `setPointerCapture(pointerId)`
   throws `NotFoundError: No active pointer` for an id no real pointer owns, and the handler
   calls it before attaching its listeners, so the drag never wires up and the width sits
   still. Nothing is wrong with the code — `usePanelResize` has always done this. Drive it
   with the browser tool's own `left_click_drag`, which emits trusted events: doing that took
   the dock 576 -> 672 with One landing on exactly 480.

## Done since last handoff (2026-09-08, the no-agents face reads like Home)

Oskar: "quiero cambiar la pagina de agents para que la home cuando no tienes agents sea mas
parecido a la home de needs you." Figma 2756:475476 — the same node as the earlier Agents
pass, redrawn.

- **The greeting row replaces the centred hero.** Out: a centred `F0AvatarEmoji` at `lg` with
  a title and a "Tell One what you need" subtitle. In: Home's shape — a LEFT-ALIGNED 40px
  person avatar beside the question, no subtitle. That single change is what turns an empty
  state into a home, and it is what the frame draws (`Breadcrumb button` 286x40: avatar
  0..40, title at x=48).
- **It does NOT import `PulseGreetingAvatar`.** That component brings the wave-then-swap
  sequence and the "how was your day" reaction badge, which belong to the day greeting. Using
  the `F0AvatarPerson size="lg"` that lives INSIDE it gives the same face at the same 40px
  with none of the borrowed semantics, and keeps the two files uncoupled.
- **Home's spacing, not the frame's, where they disagree.** Column `gap-8` (was `gap-2.5`)
  and `gap-3` on the greeting row. The frame measures 8px avatar-to-title and 40px
  row-to-section; Home is 12 and 32. The request was "más parecido a la home", so Home wins a
  4px argument and the prototype keeps one spacing system instead of two. `px-3.5` stays —
  14px of gutter is what makes 712 of column into the frame's 684 of content, and that IS
  this screen's own measurement.
- **The shared `SectionHeader` now draws "Templates"**, the same component as "Needs you", so
  the two labels cannot drift into two different 14px mediums. It gained an optional `action`
  slot for the header's own control; `viewAllCount` is untouched because `EmployeeCanvas`
  still routes "For you" through it to the Inbox.
- **No tabs on the no-agents face.** The frame draws the bar hidden and it is right: Personal
  would be empty and Templates is already what you are looking at, so the bar offered a
  choice between one thing and nothing — while costing the 56px that stopped this reading
  like Home. `agents.length > 0` gates it, so they return the moment there is a list.

NOT done, both deliberate, both one line if wanted:

- **"See more" under the grid.** The frame draws it. `AGENT_TEMPLATES` has exactly four and
  the grid shows four, so it would be a visible control that does nothing — a second dead end
  next to the "View all" ghost that is already there.
- **The fourth chip.** The frame's example prompts are Create / Analyze / Find / Automate; the
  composer ships three, recorded as "three only (per Oskar, 2026-08-31)". Not changing a
  recorded decision because a frame disagrees with it — flag standing.

Verified in the browser at 5176 on `?view=agents`: empty face — avatar 40x40 at x=302, heading
"What do you want to delegate?" at x=354 (a 12px gap, i.e. Home's `gap-3`), tab list EMPTY,
"Templates" + "View all" present, the old "find the right agent" subtitle gone, all four
template cards in a 2x2, composer pinned. With one agent created: tabs ["Personal",
"Templates"] back and the list face rendering. `tsc` clean, `pnpm check src/prototypes/home`
77 files no issues, `format` clean.

## Done since last handoff (2026-09-08, minimize DOCKS, and Agents matches New)

Oskar, three things: "Lo mismo para calendario" (height — already true, both windows fill);
"Si minimizas una ventana, se deberia apilar a la izquierda, como cuando abres una
conversacion de chat, es decir, deja ver el fondo de one pero se adapta el contenido, de
manera que puedes interactuar con one o ver la ventana, ademas puedes redimensionar el ancho";
and on Agents "quiero que los elementos coincidan con los de New... quita lo de arriba a la
izquierda que pone agents".

- **Minimized DOCKS and PUSHES; it no longer overlays.** The half-width overlay let you SEE a
  strip of One and touch none of it. Now the docked window is an in-flow sibling of the floor
  inside the canvas, so One's canvas reflows into what is left. Measured: dock at x=296 w=512
  and the scroller moves to x=808 w=632 — 296 + 512 = 808, which is the push.
- **The clamp is CSS, not just the drag handler.** `maxWidth: calc(100% - 480px)` on the dock,
  so One keeps its floor in situations no pointer event announces — a Comms chat pane opening
  beside the dock, or the viewport narrowing. Measured before adding it: with a chat pane open
  the default 520 left One at 204px.
  ITS LIMIT, stated because it is real: `minWidth` (336) beats `maxWidth` in CSS, so the
  invariant holds only while the canvas is wide enough for both — 336 + 480 = 816. At 1440
  with no chat pane the canvas is 1152 and One keeps exactly 480 at any dock width. With a
  chat pane open the canvas is 724, the dock sits at its 336 floor and One gets 388. The
  widgets stack solves the same squeeze by switching to an overlay past a threshold; this does
  not, deliberately, because that would bring back the overlay branch just deleted.
- **Resizable, with the clamp on One's side.** An 11px seam on the dock's RIGHT edge, the
  mirror of `usePanelResize`, and the same trick: width is written straight to the element and
  never stored in state, because React only writes a style property it sees CHANGE between
  renders — so a dragged width survives a re-render, and the table does not re-render on every
  pointermove. The ceiling is computed at drag time as `room - CANVAS_MIN_WIDTH`, not fixed:
  dragged 2000px to the right the dock stops at 672 and One stays at exactly 480. "Puedes
  interactuar con One" is therefore true at every width, by construction.
- **CORRECTED, same day: "maximizada" is the TAKEOVER.** I had read it as a third state —
  full canvas width with One still laid out underneath — and recorded it that way. Oskar:
  "la ventana de People no ocupa toda la pantalla, fijate en la captura 2 cuando esta
  maximizada una conversacion de chat." It is the state the widgets and the Comms chats
  already have: Home early-returns, the navbar, the canvas and the composer give way, and the
  card floats on `p-2` filling the canvas. Measured 296/8/1136/884 in a 1152x900 canvas — 8px
  on all four sides, the same classes `MaximizedWindow` uses. Two things fell out of it: the
  overlay branch is gone, and with it the `inert` on the floor and the `z-10` — a maximized
  window does not render the floor at all, and a docked one MUST leave it interactive.
- **CORRECTED, same day: the dock IS at the pane level.** I had put it inside the canvas and
  recorded the reason as "at the pane level the window's vertical extent would differ between
  its two states". Oskar: "al colapsar la ventana de People, tambien deberia ocupar todo el
  alto, como en la captura 2" — a docked chat pane spans the full height because it is a
  sibling of the canvas COLUMN, not a box inside it. My objection also dissolved on its own
  the moment maximizing became a takeover: both states are now full height, so the pane level
  makes them consistent rather than divergent. It sits after `ChatsColumn` and before the
  canvas column, with the same `h-full py-2 pl-2` gutters `WindowStack` gives a left pane.
- **Default width is HALF the central space**, as a percentage rather than a measured number:
  no `shellWidth` plumbing, it stays half through a viewport resize, and it still survives a
  drag because a pointermove writes `px` over it and React only rewrites a style value it
  sees CHANGE — and "50%" never changes. Measured: central row 1152, dock 576.
- **The navbar One button is GONE** (Oskar: "sin el boton de One que se ve ahora"). It was the
  only caller of `OneMark`/`OneMarkGradient` and `useOnePending`; those are left intact in
  their own files, so the gradient mark and the notification dot survive and putting the entry
  point back is a handful of lines. One's insight reading is still reachable from the chevron
  ON the headcount banner inside the People window, which is the route the frame draws.
  Worth confirming: that is now the ONLY way in.
- **The canvas gutters moved off the content column** onto the scroller and the composer. A
  module window has to measure the canvas, not the canvas minus its gutters, in BOTH states —
  and the alternative was cancelling the padding with negative offsets per state, which the
  earlier pass already flagged as a rule that breaks silently the day the gutters change. The
  wrapper is now a flex ROW and its box IS the canvas box: the overlay is `inset-0 p-2` and
  the dock is in flow with `p-2`. Measured left inset: 8px exactly, both states.
- **The window renders BEFORE the scroller** so a dock is the first in-flow child and lands on
  the left. That inverts the paint order for the overlay, which is why the maximized branch
  carries `z-10` — sibling ordering inside a subtree `main#content` already caps at `z-10`,
  so it cannot fight anything outside it. The Clock-in card is `fixed z-40` on body and still
  wins, which is correct.

Agents:

- **No navbar title.** `screenTitle` is Policies-only now, so Agents falls through to HOME
  mode and gets the clock-in + widgets chrome — which is what New shows, and the point of
  "coincidan con los de New". `screenModule` and the empty-node `screenActions` went with it.
- **New's column, exactly.** `pt-6` added and the `px-3.5` inner gutter REMOVED. That gutter
  made the frame's 684-inside-712, which put the avatar 13px right of New's and the composer
  28px narrower — the very discrepancy that was sitting in this file as an open question.
  Matching New settles it against the frame's inner gutter, deliberately and on Oskar's word.

Verified in the browser at 1440x900. Dock: People and calendar both x=296 w=512 h=664 with the
seam present, the calendar's hour grid still scrolling inside it, and One's greeting plus
Needs-you rows fully visible and clickable beside it. Maximized: x=308 w=1124, i.e. 8px inset
in a 1140 box. Resize: +180px -> dock 672 / One 480, then +2000px -> unchanged, clamp holds.
Agents vs New, measured relative to the column so the nav-panel width cannot skew it:
`colW` 712 = 712, heading offset in column 52 = 52, `headingTop` 92 = 92. The avatar is 1px
apart (0 vs 1) because Home's `PulseGreetingAvatar` wraps f0's avatar in its own `size-10`
box; nothing in the layout differs. `tsc`, `pnpm check` 77 files, `format` and `build` clean.

## Done since last handoff (2026-09-08, the seam inside the window)

Oskar, comparing a maximized chat against maximized People: "en Comms el lado derecho esta
mejor resuelto que en people, es como que en People se ve la linea de separacion."

- **It was the STICKY HEADER's ground, not the card's right edge.** Diagnosed by measuring
  rather than by reading the screenshot: the card is `rgb(255,255,255)` and `thead th` was
  `rgb(252,252,252)`. Two rules in this stylesheet paint sticky headers #FCFCFC — the People
  table's `thead th` and the calendar's day row via `.f0c-canvas-surface` — and BOTH were
  written when those screens sat directly on the canvas. In a white card that is a grey band
  with a seam where it meets the card. Now both take `hsl(var(--neutral-0))`, the same token
  `bg-f1-background` compiles to, when they are inside a `section[data-home-window]` — so no
  dark twin is needed, the token flips. `main#content` is repeated in the selector only to
  out-specify the id selector in the rule above it.
- **What it was NOT, checked before changing anything:** the card chrome is identical on both
  surfaces — same `CARD_CLASS`, same 1px `rgba(5,38,87,0.06)` border, same 12px radius, same
  `rgba(13,22,37,0.04) 0 2px 20px` shadow. And the maximized window does fill its box: card
  296..1605 in a container 288..1613, 8px each side. A first reading of the shadow looked
  transparent and was a truncated string, not a missing shadow.
- **The other difference I found and did NOT change:** the People body scrolls, so it carries
  an 11px scrollbar gutter and the table stops 12px short of the card's right border; a chat
  short enough not to scroll has none. `home-window-scroll` keeps the thumb invisible until
  hover, so at rest it is white space rather than a line.
- **SECOND ROUND — the line he meant was MY RESIZE SEAM.** ("Sigo viendo la linea que separa
  la ventana de People de la parte de needs you.") The header seam above was real and worth
  fixing, but it was not this. I had copied `ConversationPanel`'s `PanelResizeHandle`, which
  draws a PERMANENT 1px `border-f1-border-secondary` hairline — fine between a thread and a
  panel, but against One's canvas it reads as a border between two regions instead of a
  handle. `WindowStack`'s affordance is the right one and is what the Comms panes use:
  nothing at rest, a 3px rounded bar on hover only. Copied verbatim (`inset-y-2 right-0 w-2
translate-x-1/2`, `bg-transparent` -> `group-hover:bg-f1-border`).
  Verified by enumerating every element taller than 200px whose edge lands within 3px of the
  dock's right edge: exactly ONE now draws there, the card's own 1px `rgba(5,38,87,0.06)`
  border plus its shadow — i.e. the card being a card, the same as a Comms pane. At rest the
  bar computes `rgba(0,0,0,0)`; hovering it gives `rgba(5,35,72,0.2)` and `cursor:
col-resize`, so the discoverability Oskar asked for on the other stacks is intact.

COORDINATE TRAP for the next browser pass: the screenshot tool reports TWO sizes — "Screenshot
size: 480x300 0.6-scale view; coordinate frame: 800x500" — and clicks/hovers use the COORDINATE
FRAME, not the image size. Hovering the seam at the image-derived x missed it by 350px and read
as "the hover affordance does not work". And because the pane freezes CSS transitions,
`transition-colors` also has to be finished with `getAnimations()` before the hovered colour is
readable.

BACKTICK TRAP, SIXTH TIME, and this one also broke the guard against it. A CSS comment
containing `main#content` in backticks closed FULL_BLEED_CSS and produced a syntax error 200
lines away. Worse: the node assertion I had been running said "intact", because it looked for
the FIRST backtick after the opener — which was the stray one — and found no backtick in the
truncated slice before it. The check now asserts a SENTINEL from the end of the real
stylesheet (`f0c-pulse-hand`) is still inside the extracted body, so an early close fails
loudly instead of passing. Never put a backtick in that stylesheet, comments included.

Verified: People `thBg` and the calendar's `.f0c-canvas-surface` both `rgb(255,255,255)`,
equal to the card, on both module windows. `tsc`, `pnpm check` 77 files, `format` clean.

## Done since last handoff (2026-09-08, the scrollbar hides itself)

Oskar: "podemos ocultar la barra de scroll si no estamos haciendo scroll?" — the third and
last thing that was drawing a line down the right of the People window.

- **It used to reveal on HOVERING THE WINDOW**, which meant a long table showed a dark bar
  down its edge for as long as your pointer was anywhere inside it. Now the thumb shows only
  while the area is actually moving: `.home-window-scroll[data-scrolling]`.
- **ONE listener on `document` in the CAPTURE phase**, not a hook per component. `scroll` does
  not bubble but it does capture, and the class is on EIGHT bodies today (window panels, the
  calendar grid, the ticket pane, a chat, the picker modal, celebrations). Anything that gets
  the class later is covered without being told about it. 700ms of quiet clears it, and a
  second scroll re-arms the timer rather than stacking one.
- **The gutter is not reclaimed**: `scrollbar-width` stays `thin` and only the colour changes,
  so nothing reflows when the bar comes and goes. That is also why the table still stops 12px
  short of the card's border — the space is reserved, it is only the thumb that hides.

NOT changed, and worth a decision: `.home-canvas-scroll` — One's own canvas — still carries a
PERMANENTLY visible scrollbar (`scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track)`
unconditionally). So windows now auto-hide and One's canvas does not. Making them consistent
is two lines: drop that declaration to `transparent transparent` and add the class to the
listener's `classList.contains` check. Left alone because the ask was about the window and that
canvas's scrollbar was tuned alongside its mask fade.

Verified by dispatching `scroll` on the element and reading the computed style: at rest
`rgba(0,0,0,0) rgba(0,0,0,0)`; on a scroll event `rgba(0,0,0,0.4)` for the thumb; still visible
400ms later after a second event; back to transparent after 1500ms of quiet.
WHAT THAT DOES NOT PROVE, stated plainly: a real wheel gesture could not be driven. The pane
was hidden, and the browser tool refuses scroll/hover/drag then — "the page is not rendered
while it is not displayed" — and a programmatic `scrollTop = 300` fires NO scroll event at all
in that state (measured: zero events reached even a probe listener of my own). So the listener's
logic is verified; that the browser emits `scroll` on a real wheel is assumed, being platform
behaviour rather than something in this code.

BACKTICK TRAP, SEVENTH TIME — and this time the hardened guard EARNED ITS KEEP: `data-scrolling`
in backticks inside a CSS comment failed the sentinel assertion immediately, instead of
surfacing as a syntax error 200 lines away.

## Done since last handoff (2026-09-08, module windows open DOCKED)

Oskar: "puedes hacer que al abrir People no aparezca por defecto maximizada sino colapsada?"

- **SUPERSEDES "por defecto haz que se abra maximizada"** from earlier the same day, and it is
  the right way round now that the docked state exists: arriving maximized hides the Needs-you
  queue behind the thing you just opened, and One being the floor only means anything if it
  stays in view. One line — the `useState` seed and the per-`view` reset both go to "half".
- **Applied to BOTH modules, not just People.** Every round of this feature has asked for
  parity ("lo mismo para calendario"), and a per-module default would be a config axis with
  one entry. Worth a look though, and I am flagging it rather than pretending it is settled:
  docked, the calendar gets 550px for five day columns (its nav panel is 293 against Hub's
  240, so the row is 1099). It is legible and the grid still scrolls, but it is the one
  surface with a real argument for opening maximized instead.
- The auto-minimize-on-submit effect stays: it is now a no-op in the common case and still
  correct if you maximize and then type into One.

Verified at 1440x900: People opens `dockW` 576 of a 1152 row (half, full height), size button
reads "Maximize People", Needs-you and the navbar present. Maximizing from there still gives
1136x884 with the navbar gone. The calendar opens `dockW` 550 of 1099 (half), button "Maximize
June 2026". `tsc`, `pnpm check` 77 files, `format` clean.

## Done since last handoff (2026-09-08, the SPLIT IS GONE)

Oskar: "al clicar en ese boton, lo que ahora pasa en el split deberia pasar donde tenemos el
needs you, es decir, se comienza un nuevo chat Total Employees... es decir eliminamos el
split."

- **The behaviour change is one line**: the headcount banner's chevron now calls
  `startConversationWithContext` (canvas) instead of `startConversationInPanel`. The Total
  employees thread runs where Needs-you was — context card, reasoning steps, the prose, and
  the follow-up question card, all verified landing on the floor.
- **And the split is removed, not just unused.** `ConversationPanel.tsx` deleted (330 lines).
  Out of the store: `panelId`, `panelBlank`, the `Target` type and `createConversation`'s
  target parameter, `startConversationInPanel`, `toggleBlankPanel`, `startPanelConversation`,
  `closeConversationPanel`, `collapseConversationToPanel`, `expandConversationPanel`. Out of
  Home: the panel render, `panelOpen` (so `hideWidgets` is just `onModuleScreen`), the two
  `closeConversationPanel()` handovers, and `HomeNavbar`'s `onBackToPanel`/`backIcon` props
  with the back button they drew. `ConversationView` lost its `variant` prop and both of its
  `"panel"` branches. `tsc --noEmit` drove the whole removal — every step was a compiler error
  pointing at the next thing.
- **Nothing else opened the split.** Checked before starting: `startConversationInPanel` had
  exactly one caller (this banner) and `toggleOnePanel` had ZERO, because its button was the
  navbar One mark removed earlier the same day. So the split had one entry point left and this
  change took it.
- **`toggleOnePanel` survives as `openInsightReading`, repointed at the canvas.** It has no
  caller and that is deliberate rather than an oversight: everything behind it is live and
  worth keeping — 18 references to `one/insights.ts`, 10 to `InsightCard`, 5 to
  `peopleFocusStore`, plus `INSIGHT_ANSWERS` and the whole decision tree. Give it a button and
  One's screen reading works where Needs-you lives. **It is currently unreachable.**
- **`one/OneMarkIcon.tsx` is now an orphan file** (0 references), kept for the same reason —
  it and `useOnePending` are what a re-added One button would need.

Post-removal orphan audit, by enumerating every `export function` in the store and counting
callers elsewhere: exactly ONE has none (`openInsightReading`, above). No other export, and no
other file, was orphaned by this.

Verified in the browser at 1440x900: clicking the banner chevron opens no `[data-one-panel]`,
the People window stays docked at 570, and the floor carries the thread — "2.714 people",
"steepest month", "19 of them are in their first year", and the "Which one do you want?" card.
`tsc` clean, `pnpm check` 76 files (was 77 — one file deleted), `format` clean.

## Done since last handoff (2026-09-08, the dock overlays, and widgets yield to any window)

Oskar, two things: "sigo sin poder hacerla mas grande hacia la derecha" (asked twice — the
first fix did not land it) and "al entrar en cualquier seccion y abrir una ventana, deberian
desaparecer los widgets que tengamos abiertos en la parte de needs you".

- **The dock's hard ceiling is gone; it OVERLAYS instead.** `maxWidth: calc(100% - 480px)` was
  the wall: at a 1120 viewport the central row is 832, so the clamp resolved to 352 and the
  dock could not move a pixel — with the People table unusable at that width (columns clipped,
  the banner reading "2.714122 37"). One's floor is no longer defended by REFUSING the drag,
  it is defended by the dock lifting out of flow once it would breach it. The drag ceiling is
  now the row itself.
- **It joins the arithmetic that was already there** rather than getting its own: `soloOverflows`
  on the dock width gives `overlayModule`, the dock renders `absolute inset-y-0 left-0 z-20`
  (the same branch `WindowStack` uses for a left side), and the canvas column parks at
  CANVAS_MIN_WIDTH with `marginLeft: auto` — the counter-move that already existed for
  `overlayChats`.
- **The width is committed ONCE, on pointerup.** During the drag it still goes straight to the
  DOM so the table does not re-render per pointermove, but Home has to know the width to
  decide push-vs-overlay, so release commits it. `null` until you drag, which keeps the
  default a plain CSS 50% rather than a measurement.
- **Widgets now yield to ANY open window, not just a `?view=` screen.**
  `hideWidgets = onModuleScreen || chats.state.open.length > 0`. Measured before: a Comms chat
  pane left Clock in and Communities open, squeezing One's canvas into a strip between them.
  Hidden, not closed — verified they come back exactly as they were on closing the chat.

Verified at 1120x800 (the size Oskar reported): row 832, dock opens at 416 with `maxWidth:
none`, already `position: absolute` + canvas parked at 480 because half of 832 breaches the
floor at rest. Dragged the seam right with a real mouse drag: 416 -> 636, still overlaid, One
still 480 underneath and visibly covered. At 1440x900 widgets `[clockin, communities]` -> `[]`
with a chat open -> back to both on close. `tsc`, `pnpm check` 76 files, `format` clean.

STILL OPEN, mapped but NOT built — the vertical stacking ask ("si abro una conversacion de
coms, deberia apilarse verticalmente"). A 6-agent pass read the left stack's contract and the
plan is sound: `LeftPaneId` gains a `module:${view}` member with a guard before
`leftPaneSpec`'s unguarded chat fallthrough, `panelKey` gets a "module" bucket, and the module
pane then inherits row resize, width resize, push→overlay, the maximize takeover and the
`overlayCap` — deleting ModuleWindow's bespoke dock, drag hook, clamps and early return. Four
things need Oskar's word first, because a wrong guess is rework:

1. `columnWidth` is ONE number per stack, so a module stacked with a chat SHARES its width.
   The plan opens the module by setting the stack's width to half the shell — which widens
   an already-open chat from 428 to 576 and leaves it wide after the module closes.
2. Stacked with a chat, People gets half the column and shows NO table row at rest (354px of
   chrome in a 392px body). Is the row divider the answer, or does People restructure so the
   table scrolls and the tabs/banners pin?
3. Only ONE module can be open, because `?view` is a single string. People and the calendar
   can never be two panes in one column without the URL carrying a list.
4. The same drag-past-the-floor lift would apply to the widgets stack, mirrored.

## Done since last handoff (2026-09-08, the drag clips left, and the input stays under)

Oskar: "cuando arrastro, el needs you se corta por la derecha y cuando suelto se queda el input
por encima. Se deberia recortar directamente por la izquierda y dejar el input por debajo, al
mismo nivel que lo demas."

- **Two symptoms, one cause: React did not know until you released.** The drag wrote the width
  straight to the DOM, so mid-drag React still believed the dock was PUSHING — and the canvas
  column cannot shrink past its 480 floor, so it overflowed the row instead and
  `overflow-hidden` ate the right end of every Needs-you row. Reproduced exactly by writing
  the width by hand with React unaware: dock 980 put the canvas at right=1748 in a row ending
  at 1440, i.e. 308px clipped. On release React caught up and parked it — which is why the
  behaviour changed under your hand.
- **Fixed by hinting the CROSSING, not the width.** The drag now tells Home the moment the
  push/overlay threshold is crossed and only then — one re-render per crossing, not per
  pointermove, so the table still does not re-render while you drag. The width still commits
  once on release. `overlayModule` is `dragOverlay ?? (the arithmetic)`, and the hint is
  cleared on release so the derived value takes over again.
  Now the canvas parks the instant it would breach its floor: right edge anchored, clipped on
  the LEFT under the window. Measured after a real drag: dock 900 absolute, canvas 480,
  `rightEdgeAnchored: true`, `clippedOnTheRight: false`.
- **The input was a STACKING CONTEXT problem, not a z-index race.** `elementFromPoint` inside
  the overlap returned f0's TEXTAREA, not the window: f0's chat textarea carries its own
  z-index inside the composer and beat the dock's `z-20`. Raising the dock's number would just
  restart the race. Instead One's whole canvas column is now `relative z-0` — a stacking
  context at level 0 — so everything inside it, composer included, sits under the dock
  whatever f0 does internally. Same probe now returns a `TD` from the People table.
  This also makes the composer clip EXACTLY like the rows above it, which is what "al mismo
  nivel que lo demas" asks for: both are cut at the window's right edge, not one of them
  floating over it.

Verified at 1440x900 with a real mouse drag through the threshold. `tsc`, `pnpm check` 76
files, `format` clean.

## Done since last handoff (2026-09-08, the module is a LEFT STACK PANE)

Oskar: "estoy pulsando en conversaciones con la pantalla de people abierta pero no se apilan
las ventanas y las conversaciones no se ven."

- **It was a real bug, and mine.** The module was a bespoke `shrink-0` pane BESIDE the left
  stack, outside the push/overlay arithmetic. Measured at 1440: 428 of chat + 576 of module +
  480 of canvas needs 1484 in a 1152 row, and since the module refused to shrink and the
  canvas has a floor, the only flexible thing left was the CHATS stack — crushed to 96px, with
  the conversation you clicked an 88px sliver. It was not that stacking was missing; the
  module was eating the space stacking needed.
- **SUPERSEDED, three recorded decisions of mine, all from today:**
  1. "NOT a member of either window stack" (because `columnWidth` is one number per stack).
     True premise, wrong conclusion — one column with one width IS what stacking means.
  2. ~~"maximizada is a THIRD state"~~ — it is `StackState.maximized` now, through the
     existing `MaximizedChat` early return.
  3. ~~the dock's own resize hook, clamps and overlay branch~~ — all `WindowStack`'s.
- **What the stack now provides, all of it deleted from our side:** `ModuleWindow` the
  component, `useDockResize`, `DOCK_DEFAULT_WIDTH`, the inline `maxWidth`/`minWidth` pair, the
  duplicated resize seam, `MODULE_WINDOW_KEY_PREFIX`, `moduleWindowKey`,
  `animateModuleWindowClose`, the `settleOnMount` call, `PanelSpec.maximizeIcon`/
  `maximizeLabel`, and in Home the `moduleSize` state, the auto-minimize effect, the
  `moduleSize === "full"` early return, the in-canvas dock render, `dockWidth`, `dragOverlay`
  and `overlayModule`. `windows/ModuleWindow.tsx` became `windows/ModulePane.tsx` — a registry
  and four helpers, no component.
- **`LeftPaneId` gained the module pane id** (`ModulePaneId`, superseded 2026-09-08 by the
  single `HubPaneId`) with `leftPaneKind` giving three slots
  (module / ticket / conversation), and `leftPaneSpec` dispatches modules BEFORE the ticket
  branch because the conversation path is an unguarded `CHATS_BY_ID[id]`.
- **`?view` stays the source of truth for WHICH module**; the stack owns the geometry. One
  reconciling effect in Home derives the pane from the URL in both directions, and the pane's
  ✕ writes the URL only — so the two can never disagree.
- **THE WIDTH SEED WAS TRIED AND REMOVED, and I shipped it broken for one deploy.** The plan
  had the module set the stack's `columnWidth` to half the shell on open, to keep the
  576-of-1152 the frames were drawn at. It was wrong twice over:
  1. It RACED the layout measurement. The first non-zero `shellWidth` is not the final one, so
     the write landed on an intermediate value and `setColumnWidth` clamped it to
     MIN_COLUMN_WIDTH. Measured on production at a 1440 viewport with a 1152 row: a 328px
     pane that never recovered, because the seed only ever ran once. Two speculative patches
     later — guarding on `> 0`, then deferring with a re-armed timer — it was 150px. Bouncing
     values were the signal to stop patching and drop the mechanism.
  2. It silently widened any chat ALREADY open, permanently, because one column has one width.
     So the pane just takes the stack's own `CHAT_COLUMN_WIDTH` (428 → a 420 card). Deterministic:
     420 on a deep link and 420 after a reload, twice. The named cost is that the default is 420
     and not half the shell; the seam is how you change it, and one column with one width is the
     price of stacking at all.
- **The drag ceiling in the SHARED stack moved from CANVAS_MIN_WIDTH to a new CANVAS_MIN_PEEK
  (240)**, so a drag can cross the overlay boundary instead of stopping at it — otherwise
  joining the stack would have REGRESSED the drag-past-the-floor delivered earlier today. This
  changes the widgets and chats stacks too: they can now be dragged until only 240px of One
  shows. Oskar described that as behaviour the right-hand windows already had; they overlaid,
  but could not be dragged there. `overlayCap` gained a single-side arm so the seam can never
  be dragged off the shell.

THE HONEST COST, measured, and the one thing worth a decision: stacked with a conversation,
People gets half the column — pane 438, body 392, content 1338 — and **not one table row is
fully visible at rest**. The tabs, the two banners and the toolbar fill it. The row seam is
there to give People more, which is how two stacked panes have always worked here, but if this
face matters at rest then People needs restructuring so the TABLE scrolls while the tabs and
banners pin.

Verified at 1440x900 (the pane id was per-section then, `module:hub` since 2026-09-08):
People alone `pane:module:people` 562x884; click a conversation and both
panes sit at x=308, both 562 wide, People y=16 h=438 and Lucía y=462 h=438 — same column,
stacked, `stackedVertically: true`. Close People -> `?view` cleared, `pane:lucia` stays.
Reopen from the Hub row -> `?view=people`, both panes back. Maximize -> 1136x884, navbar gone,
header `[Announcements, Restore People, Close People]`. `tsc`, `pnpm check` 76 files, `format`
clean.

WIDGETS-STACK ACCEPTANCE CHECKS, re-run because the SHARED drag ceiling changed: Clock in
still hugs at exactly 178; two widgets share one column at 440 (x=992 both); the width seam
still widens on a left drag — 448 -> 720 — and the stack lifts to `absolute` with One parked
at 480; dragged far past that it holds at 720 (MAX_COLUMN_WIDTH), One still shows and the seam
stays reachable. NOT re-run: "3 widgets -> 2 columns", because the widgets menu would not open
reliably under the browser tool — worth a manual look.

### Open threads for the next session (2026-09-01)

- **`F0TagStatus` swap is UNVERIFIED in the browser.** The ticket's status and priority pills now use f0's `F0TagStatus` (`inbox/TicketWindow.tsx`) instead of hand-rolled ones — `pnpm tsc` is clean and the variants are mapped (open→info, in-progress→warning, blocked→critical; critical→critical, high→warning, medium→info, low→neutral), but the verification call was lost to a tool error. Confirm the pill grounds compute to the frame's values: **#eef4fe** for "Open" (`background-info`) and **#ffeeed** for "Critical" (`background-critical`). Both were sampled off 2725:444787. "Time remaining" is deliberately NOT a tag — the frame leaves that row white behind the text.
- **The headcount One-button copy has numbers that do not reconcile, and Oskar has not yet said whether to change them.** The whole Grok-style flow already exists uncommitted (`HEADCOUNT` in fixtures → `InsightsWindow`'s `F0OneIcon` button → `startConversationWithContext` → the `headcount` intent in `conversationStore`, with `MessageContext` rendering the clicked card above the turn). Checked against the series (18 points, 2629 → 2714 = +85 over 5 steps, last jump +42 and it IS the steepest):
  - reply says "the **third in a row** above your hiring plan" — the last three steps are +19, +9, +42, so there is no run
  - reasoning says "last **twelve** months" — the array has **18** points
  - resolve says the quarter ends "around **2.840**" (+126) — the rate gives ~+51 → **~2.765**; "**44** people" of first-year attrition should be ~**11**; the "**30** more joiners" is unanchored
  - Proposed replacements are in the conversation; the desglose (11+5+3=19, 37−19=18) is correct and stands.
- **`CalGroup` forks `SidebarGroup`.** `calendar/MiniMonth.tsx` duplicates HomeNav's group header because importing it directly would be a cycle (HomeNav imports MiniMonth). The fix is lifting `SidebarGroup` into a shared module.
- **Three People/panel decisions that are MINE, not the frame's** — say the word and they flip: (1) the banners sit on a **24px** gutter (`px-6`) so they line up with f0's `Tabs` and ODC's toolbar, where the frame draws the tabs and cards at **14** and only the data collection at 24 — f0's two components hardcode 24 and take no className; (2) the widgets stack HIDES while the split panel is open AND on every module screen (see above); (3) the four undesigned tabs render `OneEmptyState` rather than doing nothing on click.
- **Two `ClarifyPanel`s on screen at once would fight over the window keydown listener.** Impossible today by construction — the People screen hides the prompt bar, and every nav route that could open a canvas conversation clears `panelId` — but if the panel ever opens on a screen that keeps the composer, the listener needs scoping first.
- **`pnpm check` is RED on one pre-existing violation**: raw `#fff` in `windows/CelebrationsWindow.tsx:73`. Not from this session's work; already spun off as a task chip.

## Done since last handoff (2026-09-02, In-Place Resolution)

From Oskar's Grok comparison. Its three findings were all real and all had ONE cause: `actOnRun` posted your choice as a chat turn.

- **Ghost state.** A card you had answered kept its orange `Needs you`. The tag now flips to `Resolved` (`F0TagStatus variant="positive"` — the same dot family as the other two, rather than inventing a check-icon tag) **the instant you click**, not when the reply lands: the run stops waiting on you when you decide, whatever the agent is still doing about it.
- **Chat/feed duplication.** Your choice appeared twice — dead text inside the card AND a bubble at the bottom of the thread. `resolveRun` replaces `actOnRun`: it writes a `RunResolution` onto `Conversation.resolutions` keyed by the run's `at` and posts NO messages, so the bubble is gone by construction.
- **Orphaned feedback.** The agent's answer landed at the foot of the screen; resolve three runs and nothing told you which reply answered which. The reply, the pin and the copy/thumbs now live INSIDE the card that asked, on `bg-f1-background-secondary` so it reads as that thread's conclusion rather than another paragraph of it.
- **Resolutions PERSIST** (deliberately not in the stripped-on-load list): a decision you already made must not come back as an open question after a reload.
- **The pin is the new thing** (`action.learned` + f0's `Pin`): the rule the agent now keeps, so you do not assume you will be asked again next week. **7 of 16 actions carry one, and that ratio is the whole design** — re-running a failed job or asking Diego for context teaches nothing, while setting a source of truth or accepting a threshold re-routes every future run. If every action pinned, the pin would mean nothing. The reconcile pass nulled two that only restated the button pressed ("access is granted"), which is state the system holds, not a rule the agent learned.
- Replies rewritten for **delegated authority** — the agent executed the configuration, it did not take a note: "Noted that it is the one you keep, so I'll stop treating the Ops edits as newer" -> "I've set Ops as your source of truth for priorities and read all 11 dated items from it." A cross-template pass caught that 14 of 16 opened `I've <verb>` and rebalanced them, and standardised one house form for a standing rule.
- `TurnFeedback` gained `offset`: its `-mt-3` closes the gap under a thread paragraph, and inside a card there is no gap to close, so it aligns the glyphs to the text edge instead.

- Verified with a **MutationObserver** rather than discrete polls, which is the only way to catch a 1.1s intermediate state in this pane: `Failed` + 1 button -> (click) `Resolved`, 0 buttons, spinner reading "Run it again now…" -> (+1.1s) reply + 3 feedback buttons.

- **NOT a bug, do not "fix" it:** the hero line still reads "I need 2 calls from you" after you resolve both. It is a past MESSAGE, and a message should say what was true when it was sent. The card is a live object; the thread is history. Making the hero line reactive would mean rendering it from state instead of message content, and would also make the transcript lie about what the agent said.

## Done since last handoff (2026-09-02, hover motion on the nav glyphs)

One bespoke gesture per navigation icon, and the gesture is always the icon's own behaviour rather than a wiggle — Oskar's brief, with the clock-in timer as the worked example. `icon-motion.css` holds all 13; `iconMotion.ts` maps icon component -> motion key.

- **The hook is on the BUTTON, not the glyph.** `F0Icon` drops `className` (documented here three times over), so nothing can be attached to the SVG from React. `data-icon-motion` goes on the button and every rule descends from there into the SVG's children. The key comes from a `Map<IconType, string>` keyed by the icon COMPONENT — the icons are module singletons, so identity is a reliable key and adding a motion touches no call site.
- **A separate stylesheet, not `FULL_BLEED_CSS`.** That block is a template literal and a stray backtick in it has broken the build twice. This file is nothing but `@keyframes` and cubic-beziers. Nothing here competes with Tailwind (it sets no transform or animation on these glyphs), so load order does not matter.
- **The timer is a two-beat gesture** (Oskar, second pass): the plunger — paths 2 AND 3, the stem `M12 5.5V3` and the bar `M10 3H14`, which must move together or the glyph tears — dips 1.5 units, and the sweep waits **80ms** for it. That delay is the whole point: without it the hands turn while the lever is still travelling and the causality reads backwards. `both` holds the hands at 0deg through the delay so they cannot jump. Verified by pausing the animations and stepping `currentTime`: at 80ms the plunger is down and the hands are still at identity; at 120ms the plunger is still down and the hands have moved 1.1deg.
- **Two rules that are easy to get wrong here.** Any transform on an SVG CHILD needs `transform-box: view-box` plus an explicit `transform-origin` in the viewBox's own units, or the origin resolves against the whole SVG and the part flies out of frame. And a full rotation must be `@keyframes`, never a `transition` — a transition reverses on mouse-out, so the hands would unwind backwards.
- **`path:nth-of-type(n)` counts only `path` siblings**, so a leading `<circle>` does NOT shift the numbering. This was the single likeliest thing to get wrong across 13 icons and it was worth checking every index against source.
- Gated behind `@media (hover: hover) and (pointer: fine)` so a tap on touch does not fire it, and `prefers-reduced-motion: reduce` disables the lot — every gesture is decoration carrying no information the glyph does not already carry.

- **A motion VOCABULARY, not 13 arbitrary numbers**, which is what stops the set feeling like thirteen separate ideas: two easings (`snap` = cubic-bezier(0.23,1,0.32,1) for one-way landings, `travel` = cubic-bezier(0.77,0,0.175,1) for out-and-back), three durations (200ms settle / 240ms nudge / 600ms sweep), and a 1.4-2.6 user-unit amplitude band — below ~1.4 units a gesture is sub-pixel at the rendered 20px and reads as a shimmer. The curve follows from the leg count rather than from taste. `linear` appears nowhere.
- Gestures worth keeping a note of, because they came from reading the actual path data: the Calendar's header rule drops 2.5 and not 3 units because at y=7 it would touch the tab stems at x=9 and x=15; the Marketplace awning scales in Y about its welded hem at y=11 rather than lifting, because a plain 2-unit lift was the Hub tile's gesture exactly; Folders slides its BACK corner out one way rather than nudging, because Reports sits directly above it in the nav and was already a diagonal nudge.
- **Clock and Timer deliberately share the 360 sweep.** With only a dial and a hands path there is nothing else honest to move, and any in-band tilt moves a 4-unit hand under a pixel at 20px. They are separated by character instead: Clock flicks round and glides to rest on the snap curve, Timer accelerates off the mark and brakes back on travel, behind its plunger press.

- Verified in the browser: all **15 rules** (13 motions, the timer contributing 3) match **exactly one element each, none zero** — checked by extracting the selectors from the live stylesheet and querying them. Live firing confirmed on the two structurally different cases: `f0c-timer-*` on `path`s in the navbar and `f0c-hub-lift` on a `rect` in the rail. The pivot maths was checked separately by rotating the timer hands 180deg statically and confirming they stay inside the dial.
- **Not verified:** the `prefers-reduced-motion` branch. The rule is there and correct, but this pane cannot emulate the preference, so it has never actually been exercised.

## Done since last handoff (2026-09-04, the insight cards' decision tree)

Oskar's tree, wired whole. The branching all rides the clarifying-card component the AGENTS flow already uses (his instruction: "utiliza el componente que tenemos en agents") — quick replies, a confirmation and a day picker turn out to be one component doing three jobs, so `InsightAction` just gained an optional `question` and no new UI was written.

- **The panel now reaches into the screen.** "Filter 14 anomalies" narrows the People table while the conversation carries on beside it. Verified: **24 rows -> 14**, Grace Hopper at the top.
  - `peopleFocusStore` is deliberately SEPARATE from ODC's own filter state. That state belongs to the toolbar the user drives; this is One reaching in. Keeping them apart means clearing One's focus cannot wipe a filter the user set by hand, and the Filter button still reports what the USER chose.
  - The table remounts on a `key` (`FocusedPeopleTable`). ODC owns its fetch lifecycle and knows nothing of our store, so changing the focus alone would leave stale rows on screen. Remounting 24 rows costs nothing; threading the focus into `useDataCollectionSource` and hoping ODC notices would depend on internals we do not own.
  - The focus lands in `streamTurn`'s completion callback, AFTER the reply — a table changing while One is still mid-sentence reads as two unrelated things happening.
- **"14 dormant" is now TRUE.** The fixture had only 3 `uninvited` rows, so the Figma's own "Review 14 dormant accounts" and "Filter 14 anomalies" would have filtered to 3 and quietly lied. `DORMANT_IDS` is an explicit list of 14 (Grace Hopper = emp-004 among them, since the card names her), joiners excluded by construction — somebody hired this month cannot have been idle three years. In a mock the list IS the definition; what matters is that the count One quotes and the rows the table shows are the same 14.
- **Human-in-the-loop on the destructive branch.** "Deactivate accounts" does NOT act: One says what it would cost ("14 licences, and 2 of them are on leave rather than gone") and asks. Verified that the table is **still 24 rows at that point** — the friction is real, not decorative. Confirming clears the focus, because the 14 rows it filtered to are gone; cancelling leaves the table exactly as it was.
- **Cards COLLAPSE when acted** ("la tarjeta colapsa"): the detail and buttons go, the row keeps its title, a check and the label you chose. One's answer is in the thread below, so repeating the detail would say it twice.
- `resolveInsightAnswer` RETURNS its turn rather than posting it, shaped like `resolveAgentAnswer`, so `answerQuestion` stays the single place that marks a card answered and echoes the choice. Keyed by string, because a closure cannot be persisted with the conversation.

**Driven end to end in the browser:** filter (24->14) -> quick replies -> "I'll review them myself" (table stays 14, and the reply says so); "Deactivate accounts" -> confirmation with the table untouched -> "Confirm deactivation" -> focus cleared; "Schedule reminder" -> day picker -> Wednesday, interpolated into the routine copy. **Not separately driven:** "Notify manager" and "Send 122 invitations" — both are plain reply paths through the same `actOnInsight` code the other four exercised, with no branching of their own.

## Done since last handoff (2026-09-04, One's insight cards)

The navbar One button no longer opens a blank composer — it opens a conversation that already contains the work (Oskar: "en lugar de abrir el panel de One con el blank state"). It is the AGENTS flow pointed at a screen instead of an agent: a paragraph of context, then a card per thing found, each with its own two actions.

- **`InsightCard`** (Figma **2760:589016 / 589110 / 589165** — one node per tone, identical apart from tag and copy): tag then title on the top row, a full-width hairline in an 8px box, the detail, then the actions. The card's `py-1` plus each row's `p-2` is what makes the rows look inset; that is the frame's structure, not padding added on top.
- **The buttons in the frame ARE the pair the run log already had**, which is worth knowing before reaching for new markup: the primary is `px-[12px] py-[6px]` at 14/20 on a 10px radius — exactly f0's `md` — and the secondary carries `background/inverse/secondary` with an inset ring, exactly f0's `outline`. So "black then outline, left-aligned" is now one order across both surfaces.
- **The run cards were reordered to match** (per Oskar): black first, then the alternative, then any aside, all pinned LEFT. That replaces the layout which pushed the pair to the right edge with the aside on the far left. Verified: `Use Ops` at the row's own left edge, `Use Leadership` 88px along.
- **`bg-f1-foreground` / `text-f1-background`, NOT the frame's `background/inverse/*`.** A deliberate one-token deviation: the inverse pair does not flip together, so it lands white-on-white in dark. In light the two are a shade apart and indistinguishable.
- **Clicking an insight action POSTS to the thread**, unlike `resolveRun`. The distinction is the rule established earlier: One answers each of these with a follow-up question, so there IS something to action afterwards and a conversation is the right place for it. The card keeps the label you chose in place of its buttons, so the choice is recorded once rather than shown twice.
- Reopening returns the SAME reading (`insightsId`) — pressing the button twice should not give you two readings of one directory.
- Copy is in English, from Oskar's mockup, and the three titles and details are the FRAME's own copy verbatim.
- **The panel opens THINKING, then reasons, then streams** (Oskar). It arrives empty with `thinking: true`, reveals three reasoning steps one by one, and only then streams the intro — the same three beats every other turn has, so the reading is shown rather than asserted.
  - The steps name what is ACTUALLY on the screen behind the panel: the headcount banner's 2,714 / 122 / 37, the second banner's 472 uninvited, and the table's own Contract status and Access status columns. That is what makes it hang together — each step is a column you can see and each card traces to a row you can see (Lin Chen IS the "Ending soon" contract in Singapore; Grace Hopper IS the "Uninvited" access status).
  - `deliverReply` could NOT be reused: it is keyed on a prompt, and this conversation has no user turn. `deliverInsightReading` repeats its reveal loop deliberately so both surfaces pace identically.
  - The intro streams; the insights message does not, because `streamTurn` commits anything carrying structure whole. So the cards get their entrance in CSS instead — `f0c-card-in` on a 60ms stagger (0/60/120), which is what stops three of them landing in one frame.
- **Header order is TITLE then tag**, inverting the frame — it now matches the run cards, where the title leads and the tag qualifies it.
- **Expanded, a button LEFT of the title collapses back to the split** (`collapseConversationToPanel`), carrying the section's own glyph so it says where it goes. Only One's screen reading gets it: it is the one conversation that HAS a screen to go back to, and a thread started on Home would have nowhere to collapse into. Clearing `activeId` is all it takes — the `?view=` param never changed while the canvas held the thread, so People is still underneath.

- **Artifact not reproduced:** these cards were built out of f0's "View drawer", so all three inherit its "Select all / Clear" bar absolutely positioned at `top-487px` — a leftover of the component they came from, and clipped by the card's own overflow anyway. The codegen also reports every `TagStatus` as `status="Neutral"`; the tones come from the mockup (orange/red/grey), since per-node codegen does not resolve instance overrides.
- **The blank state is now UNREACHABLE but kept.** `toggleBlankPanel` has no callers; `PanelBlankState`, the `panelBlank` flag and `ConversationPanel`'s optional conversation all remain, because the blank state is a real frame (2756:475071) and the optional-conversation capability is real. It is commented as unreachable so nobody reads it as a live path.

## Done since last handoff (2026-09-04, Agents — sixth pass: the empty face shares New's structure)

Figma **2756:475476**, which replaces 2739:463194. The change is one thing: the composer moves from the MIDDLE of the canvas to the FLOOR, pinned, with its chips on.

- **The scroller moved inward and the Tabs stopped scrolling.** The root WAS the scroller, which meant the Tabs scrolled away with the templates and — decisively — nothing could be pinned inside it. Root is now a plain flex column: a `shrink-0` wrapper round the Tabs (f0's `Tabs` exposes no `className`), then the scrolling face, then the pinned composer. Verified with the content overflowing: Tabs top 52 -> 52, composer top 400 -> 400, 252px of scroll between them.
- **That IS New's structure, one level deeper**, and the thing that makes it possible is easy to miss: for `fullWidthView` Home hands this screen an UNPADDED `overflow-hidden` box rather than its own padded scroller. The 712 column and the 6px floor are New's `w-[712px]` and `pb-1.5` verbatim.
- **No `justify-between` anywhere.** The ~80px above the composer is the natural leftover of a top-aligned `flex-1` scroller, not distributed space — which is also why the layout survives f0's `Tabs` measuring **56px against the frame's 44**. The frame's is a resized instance, so every absolute y in it sits 12px low: they are not implementation targets. This is the strongest argument for the structure over any fixed gap.
- **No top padding on the column and TRANSPARENT template cards** (Oskar, same day). The `pt-9` the frame implies (16px column pad + the empty block's own 20px) sat on top of that block's `py-8` and left the column cramped as soon as the viewport got short; the block already brings 32px. And the card's outline is what makes it a card, so the canvas shows through.
  - The transparency lands on the CREATED-agent cards too — both faces share `AgentCard`, and filled on one with outlined on the other would read as a bug. Over `#FCFCFC` the fill was three points of grey anyway.
  - Checked at 1100x620, which is where the complaint came from: heading + first template row + the pinned composer all fit, the second row scrolls in (156px), the composer never leaves the floor, and Talent scout stays reachable.
- 14px inner gutter (`px-3.5`) on the column and the composer wrapper — the same 14 the navbar group and the list toolbar use — so 712 gives 684 of content and the cards land on 332. Verified: column 712 with 14px padding, composer wrapper 712 with 6px bottom.
- `pb-6` stays on the list face's CONTENT wrapper, not on the `overflow-y-auto` element, where a bottom pad is not honoured at the end of a scroll. Verified 24px still there, and the list face still has no composer.

**Judgement calls I made rather than asking, all flagged to Oskar:**

- **Chips ON changes what a click DOES.** With `showChips`, picking a suggestion runs `submit()` -> `onSubmit` -> `brief(templateForPrompt(prompt))`, so "Analyze" -> "Weekly time tracking report" CREATES an agent, and `templateForPrompt` funnels most of Home's corpus to Chief of Staff by fallback. Shipped because the frame is unambiguous and typing already does exactly this — but an agents-flavoured category set is the real fix and is a bigger change than this frame asks for.
- **The frame draws FOUR chips (Create/Analyze/Find/Automate); the code ships three**, and `CHIP_ACTION_IDS` carries "three only (per Oskar, 2026-08-31)". Left at three: that list is shared with New, and editing it here would silently reverse a recorded decision on a screen this frame is not about. The order differs too.
- **The composer ends up 28px narrower than New's** (684 against 712, because of the gutter). Followed the frame; the alternative is `px-3.5` on the scroller content only, leaving the composer flush at 712 and the cards at 346.

**Figma artifacts in that frame, not to be reproduced:** the chips row carries `rounded-tl/tr-[12px]`, a leftover from the hidden ABOVE-input copy of the same header; each card row carries a dead `max-w-[712px]` inside a 684 container; and the Templates wrapper hides a stray "S" text node. The emoji is not in the codegen at all — the wizard glyph was confirmed by cropping the composed screenshot.

## Done since last handoff (2026-09-04, People polish + a resizable split)

- **The pressed gradient is Oskar's own, copied VERBATIM** rather than reasoned about: horizontal and right-to-left (x1 17.208 -> x2 2.791), lavender at the right edge, ONE red and ONE orange behind it at 0.7 opacity.
  - My first attempt put the lavender in the MIDDLE on a diagonal at full opacity, on the theory that a glyph wants real colour rather than a glow's alpha. It read washed out and Oskar was right about why: the mark is four petals AROUND a centre, so the middle stop lands on its heart — and `#a1ade5` is the palest colour in the palette. **Pushing the pale stop to an edge is what makes it read as coloured; the alpha was never the problem.** Worth remembering before "fixing" a dull gradient by raising opacity.
- **It carries the clock-in's NOTIFICATION DOT** until One has been opened (per Oskar) — the same 8px circle, the same ring in the page colour so it reads on either ground, and hidden while the panel is open because what is on screen already says what the dot was there to say. Verified: closed and unseen -> red `rgb(230,26,66)` 8x8; open -> gone; closed again -> still gone (seen is seen, exactly `useClockInPending`'s semantics); after a RELOAD -> back.
  - `oneSeen` lives on `ConversationState`, which makes it unpersisted for free: `emit` only writes `state.conversations`. That is the same call `clockInStore` documents — a reload has to start the day over or the dot can only be demonstrated once.
  - The banner's chevron clears it too. It opens One as surely as the navbar button does, so `createConversation` sets it whenever the target is the panel.

- **The navbar One button is Oskar's own mark in BOTH states** (`~/Desktop/one-fill.svg` -> `one/OneMarkIcon.tsx`), and only the PAINT changes. It used to swap to f0's `F0OneIcon` when active, which meant the glyph changed SHAPE halfway through an interaction.
  - **Pressed stays GHOST — colour does all the work**, the same call the Home clock-in makes (Oskar: the grounded version read as a chip sitting in the navbar). No hand-rolled button any more and no `data-open` CSS either: unlike the clock-in, whose tint must come from a rule because f0 paints its icon through `text-f1-icon`, the gradient here lives in the SVG's own `fill`, so swapping which icon the ghost button renders IS the implementation. Both variants are `forwardRef`/`IconType`, which is what makes that possible.
  - The gradient id runs through `useId` — two instances would otherwise share a def and the last mounted would win. Diagonal, not horizontal: the mark is four petals about a centre, so a corner-to-corner sweep gives each one a different colour instead of banding two the same.
  - Verified pressed: `background rgba(0,0,0,0)`, no shadow, 32x32 (identical to the megaphone), path `fill="url(#…)"` with the three brand stops.
- **The split panel resizes by dragging the seam.** 1px of visible border in an **11px hit area** straddling it — a 1px target is unhittable, the same reasoning NOTES already records for the table's invisible column handles. Clamped 320–720: the floor is the composer plus padding, and past the ceiling the canvas stops being the thing you are working beside. Verified: 438 -> 558 on a 120px drag, and the clamps land exactly on 720 and 320.
  - `setPointerCapture` is what makes the drag survive the pointer leaving that 11px strip, which it does immediately. Width is written **straight to the element**, not through React state: this fires on every `pointermove` and a state update per frame would re-render the whole thread behind it. `user-select: none` on the body for the duration, or the drag selects the conversation's text as it goes.
- **A fade at the TOP of the chat, gated on having scrolled.** The bottom one can be permanent because the composer is always down there; a permanent top one would sit on the first turn at rest. It hangs off `ConversationView`'s EXISTING scroll listener, which now toggles `data-scrolled` (and runs once on mount, since reopening a thread restores a scroll position without firing an event). 32px against the bottom's 40 — less to hide up here, and the navbar edge is right above.
- **The overlaying widget column has NO ground and NO shadow of its own.** It painted `#FCFCFC` plus a `-12px` edge shadow, on the theory that the `p-2` gutters would otherwise let content show through — but that is precisely what should happen. Removing only the shadow was not enough (Oskar came back with a screenshot): the opaque slab was clipping the Needs-you rows mid-word. What floats is the WIDGET, which already carries its own surface and shadow in `WindowStack`'s `CARD_CLASS` — exactly how the Communities panel reads. Verified with the overlay actually mounted (drag a column wide enough to push the canvas to its floor; narrowing the WINDOW does not do it): `background rgba(0,0,0,0)`, `box-shadow none`.
- **The People table's sticky header is the CANVAS surface, not white.** f0 paints it `bg-f1-background`; this canvas is `#FCFCFC`, so it read as a white band. Same problem and same answer as the calendar's sticky day header. It must stay opaque — it is `position: sticky` with `z-index: 10`, so transparency would let rows scroll through it.
- The banner's chevron button is `outline`, not ghost.

- **The FULL_BLEED_CSS backtick trap bit twice more in one sitting — four times total.** The second time was worse: the check printed "2 backticks" and I carried on to the next edit. It is now an ASSERTION that raises, not a number to read. Any edit to that literal should end with it.
- Dev-server note: a server was already live on 5176 and the failure was an attempt to start a SECOND one. The port is deliberate (`--strictPort` in `.claude/launch.json`, and `/p/home` on 5176 is the URL Oskar shares), so `autoPort: false` is now explicit and the right move is to ATTACH with `preview_start {url}` rather than free the port and relaunch an identical server.

## Done since last handoff (2026-09-02, People's One split, reframed)

Two entry points to the same 438px panel now, with different jobs (Figma 2756:472347).

- **The banner's button is a plain CHEVRON**, not a One mark. The mark moved to the navbar, so keeping one on the banner said "ask One" twice and meant something different each time. The interaction is unchanged — it still opens the panel with the card's context — and a chevron is what "drill into this" looks like.
- **A One button in the navbar, beside the megaphone**, opens the panel on One's **blank state**. Two states, and the icon carries the difference:
  - at rest, `OneStroke` — a THIRD One mark, and each of the three exists for a reason: `F0OneIcon` is the brand mark with its animated gradient, `OneFill` is the solid mark pinned to `neutral-100` for an outline button, and this is the hairline one that has to sit beside the megaphone as a peer. Its fill is `currentColor` precisely so the ghost button paints both through the same `text-f1-icon`.
  - while open, f0's real `F0OneIcon` with its **gradient** — verified as a `conic-gradient(orange -> lavender -> red)`, the same palette as the headline — on the frame's `background/default/secondary` ground.
  - `F0OneIcon` is a COMPONENT, not an `IconType`, and `F0Button` takes no `className`, so the open state is a hand-rolled button whose geometry mirrors f0's ghost `md` (size-8, 10px radius). The two states occupy the same box so the megaphone never shifts.
- **`panelBlank` is a separate flag, not a placeholder conversation.** An empty conversation would land in Recents and be listed as something you had when you have not asked anything yet. `panelOpen` is now `panelConversation !== undefined || panelBlank`, so everything keyed on it — the widgets hiding, the canvas width — counts the blank panel too.
- **The blank state is a doorway, not a mode.** `PanelComposer` takes an OPTIONAL `conversationId`; without one the first prompt calls `startPanelConversation` and the thread appears in the same slot. Verified: rest -> "Ask One" -> blank panel with the headline -> type -> panel keeps the slot, gains the title and the expand button, headline gone, canvas untouched.
  - Expand only exists once a thread does: there is nothing to promote to the canvas from a blank state.
  - The composer's placeholder is state-aware — "Ask a follow-up…" is a lie when there is nothing to follow up on.
- **The nav button tracks ANY open panel, not just the blank one.** It read as active only while `panelBlank` at first, which meant pressing it with a thread in the panel opened a fresh blank state and threw that thread out of the slot. It now closes instead, leaving the conversation in Recents.
- The gradient headline lives in `FULL_BLEED_CSS` as `.f0c-one-headline`, not as Tailwind utilities: they are raw brand colours with no f1 token and the prototype checker is right to reject a raw hex in a className. Same three stops as the composer's focus glow.
- The blank state's chips (Create / Automate / **Find** — not Home's Analyze) are hand-rolled for the same reason the panel's composer is: `OnePromptBar` drives its own through DOCUMENT-level input listeners, so a second instance would fight the first for them.

- The Figma connector is still unauthorised; everything above came through `scripts/figma-mcp-bridge.py`. `get_design_context` on the whole frame returns sparse metadata when it is too large — drill into the sublayer ids it gives you (`2756:475071` is the panel's Empty State, `2756:472409`/`472468` the button's two states).

## Done since last handoff (2026-09-02, One resolves a Needs-you row IN PLACE)

Typing **"Aprueba todos los time off que estén dentro de la política"** on Home resolves the row on the CARD and never opens a conversation. Taking you to a chat for work with nothing to action afterwards costs a screen and gives nothing back (Oskar, third pass — the first cut did open one).

- **Two phases on the row**, both now observable because Home stays on screen:
  - `thinking` — the **ChatSpinner** takes the icon's own 20px box (so the title cannot shift) and each reasoning step **shimmers** through the whole line via `shine-text`. The step REPLACES title+subtitle rather than trailing them: it is One narrating, not a fact about the task, and it needs the width for a sentence.
  - `done` — a check plus what it actually did, held 1300ms. **This beat is the only place the figures ever appear on this path**, so without it the row would simply vanish and you would never learn what One approved.
  - The row goes inert in both (no chevron, no click): nothing to open mid-way, nothing left to open after.
  - `active` is **transient** — deliberately not persisted, so a reload cannot rehydrate a spinner nothing is driving.
- **The refusal branch is the interesting one.** `NeedsYouTask.oneCanClose` is not a new policy — it is clause 3 of the plan every agent here already follows: _"hold anything that would commit more than €10,000 or touch someone's contract for your approval"_. Time off inside allowance and an €890 workshop are below that line; a hiring decision, a contract renewal, a promotion and a €34,200 bonus run are not. `approveTasksByModule` returns `"escalate"` for those and the caller opens the full conversation, which is where a decision belongs.
  - The `contracts-confirm` intent exists to make that branch reachable: it ASKS for the card path and is turned down, so One explains why in the chat rather than silently doing nothing. Verified: _"I can't close these from your list… a renewal changes someone's contract, and that is the line where I stop and bring it to you — the same rule that lets me clear time off without asking."_
- **The interception is in `startConversation`'s caller, not the prompt bar's UI.** `tryResolveInPlace(prompt)` returns true only when it actually took the job; false covers both "nothing open" and "not allowed", and a conversation is the right answer to both. Putting it in `OnePromptBar.submit` means every entry point (typed prompt, suggestion chip) gets it.
  - Steps come from the intent's existing `reasoning` — same words either way, no duplication. Only `done` is new copy.
  - The time-off intent's `reply` was rewritten: it is now only reachable once the batch is already cleared, so it says the queue is empty instead of claiming an approval that did not happen.
- **"View all (35)" is gone** from the Needs-you header (per Oskar): the count was the only thing on the right and it opened a window listing the same rows.
- The Inbox nav reads the same clearances (`openInboxTasks(profile, cleared)`), so the two lists cannot drift. `taskTitle` still resolves through the UNFILTERED list or a cleared task's ticket would come back titled "Ticket".
- `?reset=1` clears it — `needs-you` is in `PROTOTYPE_KEYS`.

- **The row holds 48px through every phase, and `min-h-12` is what does it.** At rest the CHEVRON sets the height (12 + 24 + 12) — the text is only 20px — so hiding it while One works dropped the row to 44 and the list twitched (Oskar). Verified 48px in all four phases: rest, each of the three thinking frames, done, exiting.
- **Motion pass over the resolve and the exit** (Emil framework):
  - The row now LEAVES by collapsing (`.f0c-row-slot`, grid-rows 1fr -> 0fr plus opacity, 160ms). It used to unmount outright, which teleported every row below it — the canonical "disappearing without transition feels broken" case. The store gained an `exiting` phase for this, and `EXIT_MS` must stay equal to that transition or the row unmounts mid-collapse and the jump comes back.
  - **The gap moved off the parent and into each slot** (`pb-2` inside the collapsing area). A parent flex `gap-2` survives the collapse and leaves an 8px hole where the row was. Verified: slot-to-slot gaps are now 0 and the spacing is unchanged.
  - Exit 160ms against the 200ms entrance — **asymmetric on purpose**: the user is waiting on the system here, not deciding.
  - Each reasoning step gets `key={step}` so React remounts it and `f0c-step-in` replays (opacity + 3px, 200ms, the card entrance's own curve). Without the key the text swapped in place and the change was easy to miss entirely.
  - The check lands with `f0c-check-in` — `scale(0.8)`, never 0, because nothing in the real world appears from nothing.
  - Reduced motion keeps the OPACITY, which is what tells you the row has gone, and drops every movement: no collapse, no offsets, no scale. Fewer and gentler, not none.
- **The FULL_BLEED_CSS backtick trap bit for the THIRD time** — a `` `gap-2` `` inside a CSS comment closed the template literal and produced a syntax error 200 lines away. It is documented twice already and it still caught me. If you add anything to that block, grep the literal for backticks before trusting tsc's line number.

- **Verified with a MutationObserver on `main#content`**, which is the only way to catch a 4-second sequence in this pane — three discrete reads all landed after it finished. Captured in order: the three shimmer steps, then `DONE: Approve 12 time off requests | Approved 12 requests — all inside allowance, none left a team short`, then the row leaves, with `conversations` empty throughout.

## Three hover motions revised by hand (2026-09-02)

Oskar replaced the designed gestures for Documents, Reports and Agents. **These three are hand-authored** — re-running the scratchpad injector would overwrite them with the design pass's versions.

- **Folders** — the front folder tilts **9 degrees** about its own centre (11,10) and holds while you stay; at rest the glyph is the untouched original. 9deg and not less because that is what it takes to be seen: the corner sits 9.22 units from the pivot, so 9deg moves it **1.45 units** — right on the set's ~1.4-unit legibility floor at the rendered 20px. Counter-clockwise so the bottom-right corner lifts (16 -> 14.83) AWAY from the back line rather than crowding it. Verified: rotation -9deg, corner travel 1.45u, back line `transform: none`, and `none` at rest.
  - A **transition declared off `:hover`** so it applies both ways: the tilt unwinds when the pointer leaves, the one case in this set where a transition's reversal is the feature rather than the bug.
  - The first version grew the folder until its corner met the back line (1.214 x 1.25 from the top-left vertex, geometrically exact). Oskar rejected it as too much — the glyph should read as the original at rest. Do not bring it back.
- **Graph** — the series DRAWS itself left to right while the axis holds still ("respetando el track"). `stroke-dasharray` set to the path's measured length (22.54, rounded up to 23 so the tail cannot be left a hair short) with the offset running to 0.
  - **LINEAR, and it is the only motion in the set that is.** With the ease-in-out curve the offset went 23 -> 21.8 -> 9.3: the first 150ms drew 5% and the next 150ms drew 56%, so the middle of the line arrived in one lump and the whole thing read as **forming from the centre outwards** — which is exactly what Oskar reported. A draw-on is _constant motion_, a progress bar that happens to follow a path, and that is the one case the framework reserves linear for. Any easing varies the tip's speed, and a varying tip speed is precisely what stops it reading as one line being drawn. Verified: 17% per 100ms, tip advancing 10.7 -> 13.6 -> 16.4 -> 19.1 -> 20.0.
  - Path order does the rest for free: the series runs 0 -> 16.5 and the two arrowhead barbs are the 2nd and 3rd subpaths of the same path, so the line reaches the tip at ~440ms and the head assembles over the final 160ms.
  - `stroke-dashoffset` is paint-only — no layout — which is why it is the one property outside transform/opacity this set allows. It needs no rest-state rule either: with no dasharray the path is simply whole, so hover-out cannot strand it half-drawn.
- **Bot / Agents** — the eyes scan left then right and the mouth goes from a flat line to a smile. **This required splitting `Bot.tsx`**: it shipped as one compound path of seven subpaths, so nothing inside it could be addressed. The split is safe because the head is a RING (outer subpath + inner subpath), so the eyes and mouth were already positive filled shapes sitting in the hollow rather than holes punched through a solid head — pulling them out changes nothing about how they paint. Subpath map, worth keeping: 0 outer ring + antenna, 1 inner ring, 2 the smile, 3/4 ear pods, 5/6 left/right eye.
  - Selectors are `[data-bot="…"]`, not `nth-of-type`, because this icon is ours: naming the part beats counting to it and it cannot silently shift if the glyph is re-ordered.
  - The mouth is a transition off `:hover`, so the smile holds while you stay. The set's "nothing at opacity 0" rule is deliberately bent — the GLYPH is fully visible at rest and what is hidden is one feature's alternate shape. Staggering the smile behind the glance was tried and dropped: it left a gap with no mouth at all.
  - The old `f0c-bot-straighten` head tilt is gone. It existed to differentiate the bot from the shield's brace; the eyes-and-mouth gesture does that far better, so the set is now MORE differentiated, not less.

- **Verification note that will save time later:** CSS **transitions** are frozen in this pane exactly like animations, so a transition-driven state reads as stuck at its start value and looks broken when it is not. Do not conclude anything from a computed value here — find the transition in `document.getAnimations()` (they appear with a `transitionProperty`), `pause()` it and seek `currentTime` to its duration. That is how the mouth swap was confirmed (flat 1 -> 0, smile 0 -> 1) and how the Folders corner was measured.

## Known f0 bug, worked around locally (2026-09-02): the double tooltip

Oskar hovered the clock-in and saw TWO tooltips with the same words. It is an `F0Button` bug and it affects **every icon-only button in Factorial**, not just this prototype — 49 of them here across 18 files.

- **Cause.** Two independent lines in `components/F0Button/internal.tsx`, both keyed off `hideLabel`:
  - `tooltip={tooltip ?? (!noAutoTooltip && hideLabel && label)}` — `Action` wraps the button in `TooltipInternal`, giving f0's styled tooltip.
  - `title={noTitle ? undefined : props.title || (hideLabel ? buttonLabel : undefined)}` — which makes the BROWSER draw its own native tooltip on top.
- **There is no public opt-out.** `noTitle` and `noAutoTooltip` are both in `F0Button`'s `privateProps` array and stripped before they reach `ButtonInternal`, so passing `noTitle` from a call site compiles and does nothing. Do not waste time trying it again.
- **Diagnosing it needs a measurement, not a DOM read.** Three elements carry the text on hover, but only one is a real box: the styled tooltip (121x17, `rgb(13,22,38)`); the other two measure 1px (the collapsed label and the accessible copy). The second box the user sees is the NATIVE tooltip, which the browser paints outside the DOM — no query will ever find it. Measure widths.
- **Workaround: `useSingleTooltip` in Home.tsx.** A MutationObserver that removes a `title` **only when it is identical to the element's `aria-label`** — precisely f0's duplicate, since it sets both from the same label. A deliberately different `title` is somebody's real tooltip and is left alone; `aria-label` is never touched, so the accessible name (the thing a screen reader actually announces) survives. The observer is not optional: most of these buttons mount later and React re-sets `title` on re-render, which `attributeFilter: ["title"]` catches.
- **The real fix is one line in f0** — `title` should be a FALLBACK for when no styled tooltip renders, not an addition to it. Oskar chose to keep it local for now (asked and answered, 2026-09-02), so the bug is still there for the rest of the product.

## Published (2026-09-02)

- **Vercel is CURRENT as of this handoff** — everything from the permissions note onward is live: streaming, the ChatSpinner re-sync, chat padding, Triage & History, the three-level history, the Counter step numbers and the ranked actions. https://my-project-kappa-umber.vercel.app/p/home
- **A first-time visitor always lands on the EMPTY Agents state** — nothing seeds an agent, `createAgent` only runs from a click. Verified on the published link with a wiped session. What a RETURNING visitor sees is their own persisted state, which is right mid-session and wrong for a link handed to a colleague.
- **`?reset=1` on any prototype URL** wipes this prototype's saved keys and reloads clean (`useResetParam` in Home.tsx). Scoped to the `f0compose:home:*` keys rather than `localStorage.clear()`, which would take the shell's own settings with it, and it drops the param before reloading or the reload would wipe forever. Share `…/p/home?reset=1` when the demo must start from zero. The old `agentStore` comment claiming a `f0compose:home:agents-reset` console hook was WRONG — no such hook ever existed; it is corrected.
- How to publish (there is no CI for this): `pnpm build` in `packages/f0compose`, copy `dist/assets` + `dist/index.html` over `~/code/my-project/` (that directory is ONLY a deploy staging dir — preserve its `.vercel/`, `vercel.json` and `.gitignore`), then from there `npx vercel deploy --prod --scope oskar-hernandezs-projects --yes`.
  - **`--scope oskar-hernandezs-projects` is required** even though `vercel whoami` works: `project.json` stores the team by `orgId` and the CLI resolves by slug, so without it you get "Not authorized".
  - The CLI is not on PATH — `npx --no-install vercel` picks up the cached 59.11.2.
  - Verify by comparing hashes rather than trusting the CLI's output: `curl -s <prod>/p/home | grep -o 'assets/[^"]*'` against the local `index.html`. Then grep the served bundle for a string only the new build has. Run the deploy ONCE — a second `--prod` just adds a duplicate Production deployment.

## Done since last handoff (2026-09-02, the history as three levels + colour off the actions)

Oskar's second pass on the same component. Two diagnoses, both about the log spending attention it had not earned: red on a recommended action, and a history that dumped everything at one depth.

- **Red is the system's word for destructive, so it is off the actions.** The recommended button went `default` (brand red) -> **`outline`**, the alternative `outline` -> **`neutral`**. Red on a safe, recommended "Use Ops" bought a beat of hesitation before every click, which is the opposite of what a recommendation is for. The ranking survives — outline reads raised, neutral reads flat — and the pale red/amber is now reserved for the `F0TagStatus`.
- **The alert card is WHITE with a plain `border-f1-border-secondary`.** It had a tinted ground AND a coloured leading edge AND a coloured tag: urgency stated three times. The tag says it once.
- **The history is a three-level progressive disclosure** (Oskar's brief, taking Claude Code's encapsulation of tool calls as the reference):
  1. `> 4 completed runs` — now literally the Reasoning block's own chrome, minus the leading icon.
  2. Stacked cards in one bordered container, **title only**: "Audited decisions", "Compiled weekly summary".
  3. Open one and you get the plain-language `result` first, then the trace.
     The old row showed the summary, the stamp, the entities and a "3 checks passed" toggle at once, four runs deep. Same information, three depths, and nobody descends further than they care to.
- **`DisclosureButton` + `DisclosurePanel` are extracted, and ReasoningBlock now composes them.** "Same style as the Reasoning" is a requirement that decays the moment it is satisfied by copying — the chevron TRAILS the label in both, which is the opposite of where the old history header put it.
- **The trace mirrors f0's own AI-chat code block** (`F0AiChat/components/markdownRenderers/components/Block.tsx`: `rounded-md bg-f1-background-secondary p-2`, monospace body) so a receipt here and a fenced block in a One reply are the same object. That module is internal to F0AiChat and **not exported from dist**, so the classes are mirrored, not imported — re-check it if it moves.
  - **Prefixes are ASCII in the data, glyphs in the component**: `$ ` -> `$` (tertiary, body at full contrast — the invocation is the one line worth it), `-> ` -> `→`, `OK ` -> `✓` in `f1-foreground-positive`, `!  ` -> `⚠` in `f1-foreground-warning`. `agentThreads` carries no presentation.
  - Whether a line is the strong one is a **field on the kind** (`strong: true`), not a comparison against its prefix string. The first cut compared `kind?.prefix === "$ "` and the trailing space was eaten somewhere between the heredoc and the formatter, so tsc caught a comparison that could never be true. Do not re-derive meaning from punctuation.
- **Level 3 has an empty state**, for a run with no executed work to trace: "Resolved instantly. No complex logs generated." It is on 3 of the 16 runs, and only where the sentence is TRUE — a clean 12-claim pass, a spike dismissed under the 3-sample rule, sourcing halted at the threshold. The content pass had also put it on chief-of-staff's **€14,200 bonus hold**, which is the highest-stakes run in the set and exactly the one a reviewer would want the receipt for; that one got a real trace instead.
- **The content is a logbook, not a log** (16 runs, authored per template and cross-checked): the card title is the command that ran ("Audited decisions", not "Flagged 3 decisions with no owner"), `result` is what the run concluded with the real figures, and the trace is the proof. Every `OK ` line is traceable to that run's `evidence`, which stays in the type as the ground truth the trace is written against — it is no longer rendered on its own.
  - Worth recording what only a CROSS-TEMPLATE pass could see: an "All N …" opener had spread to 8 of the 16 results and made four agents read as one template refilled; a log line named an invented recipient (`--to marie.curie`); one command verb collided across templates; and one template had drifted into its own invocation dialect (three-segment namespaces, `=` separators, commands inside `OK ` lines). Per-run review cannot catch any of those.

- **The blocker card, third pass** (Oskar): title + tag alone on the top line, `date · people` moved to the FOOT of the card just above the actions, and the action row got `pt-1` on top of the card's `gap-2`. Title + tag + meta on one line ran out of horizontal room and wrapped at narrow widths; the foot is also where the history cards already put their meta, so the two now agree.
- **The blocker card's actions are f0's own `default` + `outline`, ranked by POSITION** (Oskar, fourth pass). The hand-rolled near-black `ResolveButton` is gone; `RunAction` renders one action and the card ranks them:
  - `primary` = the recommended one, **always rightmost**, flush to the row's right edge via `ml-auto` on the pair;
  - `alternative` = the first non-recommended, immediately left of the primary as its pair (8px);
  - `asides` = anything beyond that — an "Ask Diego why", which deflects rather than answers — pushed to the FAR LEFT, away from the pair that resolves the run.
    Verified at 1, 2 and 3 actions: with one action it still sits right; with three, "Ask Diego why" is at the row's left edge (456 = 456) and "Approve €320" at its right (1114 = 1114).
- **The recommended action is BLACK** (`bg-f1-foreground` / `text-f1-background`), hand-rolled, mirroring f0's `md` geometry (`h-8 px-3 rounded text-base font-medium` + the filled variant's shadow) so it lines up with the real `outline` F0Buttons beside it.
  - **This button has been red and black more than once.** Red is f0's own "primary" and the case for it was consistency with the design system (its destructive variant is `critical`, not `default`, so red does not mean danger inside f0). The case against, which won: it is the loudest thing on a screen whose whole point is that most runs need nothing from you. Settled on black (Oskar, 2026-09-04).
  - **Do not reach for `background-inverse` / `foreground-inverse`.** That pair does NOT flip together — `--white-100` is white in both themes while `--neutral-*` flips — so it lands white-on-white in dark. `foreground`/`background` is the canonical inverting pair; verified again in both themes: `#0d1625` on white in light, white on `#0d1625` in dark.
- **The plan's step numbers are f0's Counter** (Figma 2747:468489, via the bridge): a 20px pill with a 1px ring, NO fill, 12px/16px medium in the DEFAULT foreground. **The ring is `f1-border`, not the node's `border-secondary`** — at 6% alpha it was invisible at 20px against the conversation ground ("este apenas se ve"), so it went to the 20% default. A deliberate deviation from the node, and a general lesson: a token tuned for long edges does not carry a 20px circle. They were a filled `bg-f1-background-secondary` circle with secondary text, which read as a disabled chip rather than an index. Every value verified against the node: 20x20, transparent, `1px solid rgba(5,38,87,0.06)`, 9999px, `#0d1625`, 12px/16px/500. `text-sm` is already 12px/16px in f0's scale, so no arbitrary values were needed.

- Drive-by: `CelebrationsWindow`'s avatar ring was a raw `#fff` (mine, from the home-vision commit) and failed `pnpm check`. Now `border-f1-background`, which is also the right token — the ring reads as the page showing through. **69 files, no issues.**

## Done since last handoff (2026-09-02, the run log as Triage & History)

Oskar's three-layer read of the agent-activity component — friction (UX), emptiness (AI), missed opportunity (story) — applied whole. The through-line: the log was a flat, evenly-weighted feed that reported state and asked you to work out what to do about it.

- **Triage above history.** `RunLog` no longer renders one uniform list. Runs that are waiting on you come first as `BlockedRun` cards — tinted ground plus a `border-l-2` in the matching tone (`warning` for "Needs you", `critical` for blocked/failed) — and the four `done` runs collapse behind "4 completed runs", quieter and secondary-coloured, open only if nothing is waiting (`useState(waiting.length === 0)`). A record and a task should not look alike.
- **One primary per card, never two of equal weight.** `RunEntry.actions[]` gained `recommended?: boolean`; the recommended one renders `variant="default"` and the alternative `variant="outline"`. Previously the first was `outline` and the rest `ghost`, which stated an order without stating a recommendation.
- **The agent PROPOSES instead of only asking** — `RunEntry.analysis`, rendered above the buttons. It is the smart default in words: "I compared them: Ops was edited today and has all 11 items dated, Leadership was last touched on 12 Aug and is missing dates on 4. Ops looks like the live one." The question stays yours to answer, but you answer it with the agent's reasoning in front of you rather than from scratch.
- **Errors reframed as a fork in the road, not a dead end.** Every blocker now says what it lost, what it can still do without it, and what that costs: "I lost access to your leadership calendar" → "I can keep going without it by flagging on age alone. That over-reports: last week it would have chased 3 decisions that were already settled in a meeting I couldn't see." → _Give me access again_ / _Carry on without it_. All four templates were rewritten this way and audited: 4 `done` with evidence, 1 `needs_input`, 1 blocked-or-failed, each non-done carrying an `analysis` and exactly one `recommended` action.
- **The hero line is DERIVED, not written.** `runSummary(entries)` composes "6 runs so far: 4 went through on their own and cleared 9 items. I need 2 calls from you before I can go further — they are at the top." It replaced a static "This is what I have done so far.", and because it counts the entries it cannot drift out of sync with them.
- **Nothing is orphaned any more.** The copy/thumbs feedback anchors to the last PROSE message (`.find(m => m.role === "assistant" && m.content && !m.runs)`) instead of trailing the log, where it read as rating the runs. The per-run entities moved the same way: they were a bare grey row floating above the buttons, and they now share the meta line with the timestamp — "1 Sept, 08:02 · Marie Curie" (`RunMeta`). Same orphaning problem, same fix.

- **Streaming now SKIPS itself when nobody can see it** — found while verifying the above, and a real bug rather than a quirk of this pane. `streamTurn` checks `document.hidden || prefers-reduced-motion` up front, per paragraph, and on every tick; when either is true it commits the remaining turn whole. A hidden tab clamps timers to ~1/s and eventually stops them, so a streamed reply there arrived letter by letter over minutes and you came back to a half-written sentence — the flourish was deciding whether the reply was readable. Reduced motion is the same judgement for a different reason.

## Done since last handoff (2026-09-02, spinner sync + chat padding)

- **The ChatSpinner copy was STALE — it is re-synced now.** Oskar asked whether we were on the latest, and we were not: our copy was from 30 Aug, and the rework (exact One mark at rest, non-pixelated edge, reworked motion) landed 1 Sept. It also MOVED, from `kits/ai/F0ActionItem` to `sds/ai/F0ActionItem`.
  - Copied from **`~/code/f0` on branch `fix/chat-spinner-mark-and-timings`** — that is the newest version and it is **not in origin/main**, so f0-react's dist does not export it and `f0-main` still has the old one. The only local edit is the `cn` shim (f0's is not exported from dist); `globeSpinMath.ts` is byte-identical to the branch.
  - **It needed CSS that no dist ships.** The new component applies `.globe-spin-anim` and sets `--globe-spin-blur` / `--globe-spin-cycle`, and those keyframes live in that branch's `styles.css`. Copied into `FULL_BLEED_CSS`, or the spinner would have rendered with no entrance and no breath. (`shine-text` DOES ship — in **F0AiChat.css**, not styles.css — which is why the "Thinking…" label already shimmered.)
  - Verified in the browser with a **MutationObserver** rather than polling: `animation: globe-spin-enter, globe-spin-breathe`, blur `1.00px` at size 20 (5% of the mark, as the rework intends), cycle 2300ms, and **960 quads** visible against the old build's far smaller pool. Worth remembering as a verification technique — an interval clamps to ~1/s in this pane and kept missing the 4-second window entirely, which made a working spinner look absent three times in a row.

- **A conversation has no top padding** (per Oskar, with the wrapper picked out in his inspector). The canvas wrapper's `pt-6` now applies only when there is NO active conversation: a thread brings its own `pt-2`, and the extra 24px pushed the first turn away from the navbar for nothing. The greeting canvas keeps it — that one is a page, not a thread.

## Done since last handoff (2026-09-02, streaming + an actionable run log)

- **One's replies STREAM now** (per Oskar — they had no stream effect at all; every paragraph landed in one patch). `streamTurn` types a turn out paragraph by paragraph, and it applies to every reply path: intents, agent threads and clarifying resolutions.
  - **Only PROSE streams.** A message carrying a plan, a run log or a question card is committed whole — half a numbered list reads as broken, not as arriving.
  - `Conversation.streaming` is a transient frame (`done` / `typing` / `chars`), stripped on load like `pendingReasoning`, so a half-typed turn can never be rehydrated or persisted.
  - **`emit` gained `persist: false`**, and the stream uses it. Serialising every conversation to localStorage on each 24ms tick would have been the most expensive thing in the prototype, for state that is deliberately not saved.
  - **Timing is FEW FAT TICKS, not many thin ones** (10 chars / 24ms ≈ 400 chars a second). First cut was 4 chars / 16ms and a backgrounded tab — which the Claude pane always is — clamps timers to ~1/s, turning a three-line reply into a minute of crawling. More characters per tick degrades gracefully; a shorter interval does not. **New environment gotcha, worth knowing beyond this feature.**
  - The auto-scroll had to learn about it: the stream grows the LAST paragraph rather than adding a message, so it watches the character count too, and scrolls instantly while streaming — a smooth scroll re-triggered every tick never arrives and the view lags behind the text. `TurnFeedback` also waits for the stream to finish, or copy/thumbs appeared under half a sentence.

- **"Asking question…" shows the One spinner**, not a static pink dot (per Oskar, pointing at f0's kits/ai ChatSpinner docs). Waiting on you is still the turn working, and it now matches the "Thinking…" line exactly.

- **The run log answers "what do the coloured circles mean?" — by not relying on them.** Oskar asked, which was the finding: a colour with no legend is a private language. Three changes, with GrokBot's inline-action model as the reference:
  1. **Status in words.** A stopped run carries `F0TagStatus` — "Needs you" / "Blocked" / "Failed" — the same component the inbox tickets use. The dot stays as the at-a-glance marker but is no longer the only cue. A `done` gets NO tag on purpose: they are the majority, and labelling every one would bury the ones that matter.
  2. **Evidence collapses on a `done`** behind "3 checks passed". Four successful runs with three checks each was a wall of grey hiding the one run that needed attention — and it stays one click away, because "approved 12 expenses" should never have to be taken on trust.
  3. **A stopped run is ACTIONABLE where it is reported.** The agent said what it needs, so the answer belongs next to the asking: "Approve €320" / "Reject" / "Ask Diego why", "Grant calendar access", "Replay the 40 jobs", "Run again now". Each action carries the reply it produces (written in `agentThreads`, in the agent's voice — not generated from the label), `actOnRun` lands your choice as your turn, and the agent answers in the thread. Verified end to end: approving the €320 replaces the buttons with what you chose and the agent comes back with "€40 a head, which is inside the per-person limit — I'll treat that shape as fine in future".
  - The first action is `outline` and the rest `ghost`: the first is the one the agent is actually asking for.
  - NOT done: the mock-content brief has entities repeat across runs so the log could be GROUPED by person or entity. Nothing groups yet — that is the next obvious step if this screen gets more runs than fit on one page.

## Done since last handoff (2026-09-02, Agents — fifth pass: New agent)

- **"New agent" opens a CONVERSATION, not the templates** (per Oskar). The prompt is put in the user's mouth on purpose — `NEW_AGENT_PROMPT`, his wording verbatim: _"I want to set up an agent. Briefly explain how agents work in Factorial, then ask me a few questions…"_ — because that is what the button MEANS. A blank composer would make you write the request for help before you can get any.
  - One explains what an agent is in two lines (a conversation with a job; its thread is its whole record; it acts within your permissions) and then asks the ONE question that matters: what should it take off your plate. Four options, one per template.
  - **"A few questions" and "one question, never two" are reconciled by asking them IN SEQUENCE** — which is the chain the agent threads already run: what to delegate → how it should work → save it as policy. Three questions, one per turn.
  - **The discovery thread BECOMES the agent's thread.** Answering picks the template, creates the agent, and retitles + binds this same conversation (`agent-discover` in `resolveAgentAnswer`) rather than opening a second one. Verified: navbar goes "New agent" → "🔍 Talent scout agent", the thread leaves Recents for the Agents group, and the agent's own reply + question continue in place.
  - `briefing` state is gone from `AgentsScreen`; the empty state is now only "no agents yet" or the Templates tab, which is what those two things actually mean.

## Done since last handoff (2026-09-02, Agents — fourth pass: the threads)

- **The agents answer properly now** — Oskar supplied a mock-content brief (voice rules, thread anatomy, entry rules) and it turned a three-paragraph greeting into a real arc. `agents/agentThreads.ts` holds four scripted threads + four run logs; `agentsData.ts` is back to describing what an agent IS.
  - The arc, all of it on machinery that already existed: **brief → reasoning (3 lines) → reply (3 lines, ends on ONE question) → that question as a clarifying card → the 4-step plan with explicit thresholds → the policy offer (Yes / With changes / No) → the run log.**
  - **The reply's closing question is now answerable.** The brief's rule is that the last line asks for the one thing the agent needs; a question you cannot answer is a flourish. `ReplyScript` gained a `question`, and `answerQuestion` routes `agent-brief:<id>` / `agent-policy:<id>` through `resolveAgentAnswer` instead of the intent corpus — what an agent says belongs to that agent, not to a regex over what you typed.
  - **`agent.activity` is GONE, and that is the structural win.** The brief says an agent's thread IS its log — "no hay log aparte" — and that hand-written `activity` string was exactly the separate log it rules out. The nav panel now reads `latestRun(agent)`: summary for the label, `toneFor(outcome)` for the dot.
  - **It reproduces frame 2741:465055 by construction.** Verified: the three rows come out `🧭 Notion is already connected` (warning), `📈 Restart may have dropped the queue` (critical), `🧾 Approved 12 expenses under €50` (hollow) — the frame's own three, now DERIVED from the logs rather than typed in. (The frame's truncated "Restart may have ropped the" is completed and its typo fixed.)
  - Entry rules honoured per agent: 4 `done` / 1 `needs_input` / 1 `blocked`-or-`failed`. A `done` carries **evidence** (the deterministic checks — "all within the €50 policy", "categories matched", "no duplicate merchants"); anything else carries the **reason with its figure** ("€320 over the €50 policy"). `ConversationView`'s `RunRow` makes that asymmetry visible, which is the point: you should not take "approved 12 expenses" on trust, and "needs input" is useless without the number that caused it.
  - People are only ever the shared `employees` fixture, and they REPEAT across entries on purpose so the log is groupable by person — Marie Curie appears in three of Expense manager's six runs, Priya Patel in three.
  - `ChatMessage` gained `plan?: string[]` and `runs?: RunEntry[]`; `PlanSteps` and `RunLog` render them. Run stamps are absolute ("1 Sept, 08:04"), not relative — a relative one drifts as the prototype gets demoed over weeks.
  - **The log lands at the END, after the policy is agreed**, not at the start: those runs are what the agent has done, and showing them before you have settled how it should work would be a log for a job nobody assigned yet.
  - NOT done: the brief mentions a fifth `shift-watcher` thread for the employee profile. Agents is admin-only today, so there is nowhere to show it — say the word and it is one more entry in the same shape.

## Done since last handoff (2026-09-02, Agents — third pass)

- **The suggestion chips give way to the permissions note once you are in a conversation** (Figma 2745:468340, per Oskar: "esto aplica a todo"). Chips offer ways to START something; mid-conversation they have nothing to offer, so the row becomes "One works within your permissions. See more". This also retires a pending item that had been sitting in this file since 2026-08-02 — the chips used to show in conversation too.
  - `one/PermissionsNote.tsx`, shared by the canvas prompt bar AND the split panel, because the rule is about BEING in a conversation, not about the surface. The clarifying panel keeps that slot to itself (it brings its own keyboard hints).
  - Measured against the frame: 12px/16px medium, `foreground-secondary` for BOTH halves, and the link told apart by its underline alone — `decoration-f1-foreground-tertiary` plus `text-decoration-skip-ink: none` so descenders stay crossed. Verified in the browser at `rgba(1,22,55,0.61)` with the underline at `rgba(1,27,75,0.45)`; the frame's `0.37` is a hair lighter than f0's tertiary token, which is what shipped.
  - **The link needs its colour repeated on the `button`**: a button does not inherit `color`, so the first pass rendered "See more" BLACK beside the secondary text — the same trap the nav panel icons fell into. Caught by reading the computed style, not by looking.
  - "See more" is visual-only; there is no permissions doc to point at yet.

- **The agent card's delete became a "⋮" menu** (per Oskar — GrokBot-style options): Rename, Change emoji, Delete agent. It also fixes what his screenshot caught: the bare ✕ was an `F0Button`, which draws its own tooltip AND sets a `title`, so hovering it showed **two tooltips stacked**. A plain `button` with an `aria-label` — the pattern `RecentRow` already uses — has neither.
  - **`MenuRow` / `MenuDivider` moved OUT of `HomeNav.tsx`** into `MenuRow.tsx`, with a new `MenuSurface` for the popover chrome. A screen importing its menu rows from the NAVIGATION would have been the wrong dependency, and copying them would have been the `CalGroup` duplication again. Every "⋮" in the prototype now shares them.
  - Rename is INLINE on the card, like the Recents rows — a dialog for one field is heavier than the edit. Change emoji opens a 12-emoji grid in the same popover (f0 ships no emoji picker, and the point is that an agent's face is yours to change, not to build an input method).
  - `renameAgent` / `setAgentEmoji` in the store. Verified end to end: rename to "Ops copilot" and swap to 🤖 — both persist, the card and the nav panel's activity row update together (one datum, two surfaces), and the ⋮'s own `aria-label` follows the new name. Delete still returns the screen to the empty state with zero agents and no orphaned thread.

## Done since last handoff (2026-09-02, Agents — second pass)

- **An agent's conversation belongs to the AGENT, not to Recents** (per Oskar). Recents filters `c.agentId` out — the Agents group above already lists that thread, and leaving it in both put the same conversation in the panel twice under two different names. The Recents group's own visibility now counts the FILTERED list too, or it stood there with a header and no rows once your only conversation was an agent's.

- **Agents can be deleted, which is what brings the empty state back.** Now through the card's "⋮" menu — see the entry above; the first pass put a bare ✕ there, which Oskar replaced. Either way the control is a SIBLING of the card's button, not a child: a button inside a button is invalid HTML and its clicks would fire both.
  - **Deleting an agent takes its conversations with it** (`deleteConversationsForAgent`). Without that the thread would be orphaned AND unreachable: Recents filters agent threads out and the Agents group only lists live agents, so it would exist in localStorage with no way back to it. Verified: delete the only agent and both stores drop to zero, the templates come back, and the Agents group leaves the panel.

- **The empty state's textarea IS the one from New** (per Oskar: "el text area del estado empty que sea el mismo que tenemos en New"). `OnePromptBar` took three optional props — `placeholder`, `onSubmit`, `showChips` — so Agents mounts THAT composer instead of a lookalike, and inherits f0's autosize, the focus glow, the 16px radius and the type-ahead bridge. The hand-rolled `BriefBox` is gone.
  - The placeholder goes in through a **CSS custom property** (`--f0c-one-placeholder`), because that text is drawn by FULL_BLEED_CSS's `::before` — f0's own copy comes from i18n and only feeds the typewriter. The quotes are part of the value: `content` needs a CSS string.
  - **Only one `F0AiChatTextArea` may be mounted at a time** (the suggestions bridge listens on DOCUMENT), and that still holds by construction: Agents hides the pinned bar, and its own composer only exists while the empty state is up. Worth re-checking if the brief box ever appears on a screen that keeps the pinned bar.
  - Consequence worth knowing: the composer brings its whole action bar, so the brief box has the paperclip the frame does not draw. That is the cost of it being the same component rather than a copy — say the word and it can be hidden for this instance.

## Done since last handoff (2026-09-02, Agents)

- **The Agents page, all three states** (Figma 2739:463194 / 2741:466470 / 2741:465055, per Oskar). They are one flow, and the flow is what drove the model: you brief One, that CREATES the agent, and the full-screen conversation is how you shape it.
  - **The agent exists from the moment you hit send**, not at the end of some wizard — 2741:466470 already names it in the navbar and lists it in the nav panel while the configuring conversation is still going. So `createAgent` runs on submit and `startAgentConversation` opens the thread.
  - **Briefing a template you already have returns the SAME agent** rather than a duplicate: the list is "your agents", and two Chief of Staff cards with identical descriptions would just read as a bug.
  - `conversationStore` gained two small things for this: `Conversation.agentId` (the navbar shows the agent's emoji beside the title and drops the play button — an agent's brief has nothing to preview) and **`ReplyScript`**, a reply written by the CALLER instead of matched from the corpus. What an agent answers belongs to that agent (`agentsData`), not to a regex over what you typed.
  - **Opening an agent from its card REOPENS its thread.** Starting a fresh one would put a synthetic "Open Expense manager" in the transcript as if you had typed it — the same fake-turn problem the context cards exist to avoid. The synthetic prompt only survives as a fallback for an agent whose thread is gone.

- **The nav panel's Agents group is ONE rule that reconciles two frames.** One row per agent, and its label follows WHERE YOU ARE: inside that agent's conversation it names the agent ("Chief of Staff agent", as 2741:466470 draws it); anywhere else it reports what the agent last did, with the status dot beside it (2741:465055).
  - No timers, no seeding delay — which was the first design I considered and rejected: "activity arrives a few seconds after creation" reproduces the two frames only if the viewer happens to look at the right moment, which is the worst kind of demo behaviour.
  - Verified with three agents and one of them open: the two you are not in show their activity, the one you are in shows its name.
  - `NavRow` grew an `emoji` and a `trailing` slot so the agent rows keep the icon rows' exact anatomy (same 20px box, same padding). The dots are exact f0 tokens — `--critical-50` IS the frame's #ff5c4b, and the hollow one is `border-f1-border` at the frame's own 2px.

- **Three things in these frames are placeholders, and I did not reproduce them:**
  - the navbar's AvatarModule is the **clock-in** module avatar (the asset's inner layer is literally named "Clock in") — a stopwatch on the Agents screen would be nonsense, so it uses `workflows`, the nearest module f0 actually has. **Icon gap**: f0 ships no "agents" module.
  - the codegen resolved three of the four template emoji to the same compass glyph; the RENDERS read 🧭 / 🧾 / 📈 / 🔍, and those are what shipped. Same instance-override trap already in this file.
  - the frame's warning dot is `#f79c3a` from a `var(--warning)` that this f0 build does not expose. `bg-f1-icon-warning` (`--warning-50`, rgb 249,116,21) is the system's warning and what shipped — a slightly more saturated orange, flagged in case it matters.

- **NEW GOTCHA — f0's `Tabs` calls `setActiveTabId` on EVERY render.** Its effect depends on the callback's IDENTITY, so an inline arrow re-fires it forever. My handler also reset the "show the brief again" flag, so the **"New agent" button looked completely dead** — the click worked, the state was set, and the effect wiped it before paint. The fix is a one-line guard (`if (id === tab) return`); `Performance.tsx` dodges the same effect by remounting Tabs with a `key`. Worth knowing before wiring any state into that callback.

- Smaller calls: the agent grid is a **3-column grid, not the frame's flex row** — its cards are `flex-1`, which with a single agent would stretch one card across the whole 1152 canvas; and Agents keeps the frame's **14px gutters** throughout (navbar, tabs, toolbar, grid all line up), which People could not do because OneDataCollection hardcodes 24. The brief box is hand-rolled for the documented `F0AiChatTextArea` reason, and the prompt bar is hidden on this view since the canvas already has a composer in the middle of it.

## Done since last handoff (2026-09-02)

- **Home no longer opens with the caret in the composer** (per Oskar). The focus was f0's, not ours: `ChatInput` focuses its textarea in a mount effect. Child effects run before the parent's, so `OnePromptBar` hands it back on mount and that is enough — measured: `document.activeElement` is `body` on load and stays there, and clicking or tabbing into the composer still works.
  - **A defensive `focusin` guard was written first and thrown away.** It was meant to also catch a LATER re-focus by f0, disarming on the first real gesture — but in the browser it never fired (the programmatic re-focus test came back "kept"), so it was carrying risk (it can hijack a legitimate focus) for a benefit that could not be demonstrated. The mount blur is scoped to OUR textarea by name, so anything else that legitimately holds focus keeps it. If f0 ever moves its focus call into a timeout or rAF, this is the first place to look.
  - `ONE_INPUT_NAME` is a module constant now — the DOM bridge's selector and the blur both depend on the name f0 gives that textarea, and two copies of a magic string is one too many.

- **Clock in shows as active by turning its glyph VIRIDIAN, not by holding the button pressed** (per Oskar). `variant` is always `ghost`; the wrapper carries `data-open` and the tint comes from a real rule in `FULL_BLEED_CSS`, because `F0Button` gives no way to colour its icon.
  - **`--selected-*` IS the viridian ramp in f0** — worth knowing before anyone reaches for a raw hex: core's `colors.ts` defines `viridian.50/60/70` as `184 92% 35% / 28% / 24%`, and the compiled `--selected-50/60/70` are the same three triples. So `hsl(var(--selected-60))` is viridian-60, which is also what `text-f1-icon-selected` and the sparkline's teal already use. Verified: `rgb(6,128,137)` open, the ordinary glyph colour closed, and no button ground in either state.
  - The selector `[data-home-clockin-button][data-open] svg` matches f0's `[&_svg:not([data-has-color])]:text-f1-icon` in specificity and wins on order, since this block is injected after Tailwind's sheet.
  - **Gotcha that cost a broken build: NO BACKTICKS inside FULL_BLEED_CSS comments.** The whole block is a template literal, so a comment quoting a token name in backticks closes the string and TypeScript reports a cascade of syntax errors 200 lines from the real cause. **Bitten twice** (the viridian rule and the globe-spin keyframes) — and the second time the broken file also left Vite serving a stale module, so the page looked unchanged rather than broken. If an edit to this block "does nothing", check for backticks before anything else.

## Done since last handoff (2026-09-01, fourth pass)

- **The Communities feed is DATA now, and eight posts deep** (per Oskar: "me gustaria que añadieras mas posts al widget de communities"). The widget shipped with its two posts written out inline and a `PostFooter` whose counts were **hardcoded** — so every post added would have claimed the same 12 ❤️ and the same 14 views, which is the tell that a feed is fake. `windows/communityPosts.ts` holds `CommunityPost` + `COMMUNITY_POSTS`; reactions, views and comments are per post, and `Post` renders one.
  - The two from the frame keep their copy exactly; only their counts moved out of the shared footer (the second one had been silently borrowing the first's).
  - **Seeds are shared with the rest of the prototype on purpose**: `emp-001` / `emp-002` are the shared `employees` fixture, so Ada Lovelace (VP of Engineering) and Marie Curie (Head of People) wear the SAME face here as in the People table, and the chat authors keep the seeds `comms/chats.ts` gives them. One person, one face, wherever they turn up — and it also means the posts are written by people whose job fits what they are posting (Marie announces a policy, Ada posts the p95 win).
  - Six new posts across six communities, deliberately varied in SHAPE as well as content: with a title and without, with an image and without, so the feed does not read as one template repeated.
  - **Images reserve their box** (`aspect-[3/2]` + `object-cover` + a `background-secondary` ground, `loading="lazy"`): the original `max-w-full` had no height, so a slow picsum shoved the whole feed down as it landed. Verified all three load at their natural 600×400 into a 414×276 slot.
  - Verified: 8 posts, distinct comment counts (3 · 24 · 7 · 9 · 11 · 5 · 8 · 16), and the reaction pills' `mine` flag still drives the frame's critical-token highlight.

- **Measured at a real 1440 at last** — the pane's JS context recovered, so the split view's numbers are confirmed against the frame: the conversation panel is **438px pinned at 1002 → 1440**, exactly the frame's second "main content" box, and the widgets stack reads 0 while it is open.

## Done since last handoff (2026-09-01, third pass)

- **The widgets belong to the HOME canvas** (per Oskar: "al clicar en People, los widgets que teniamos activados en la home deberian desaparecer"). Any `?view=` screen puts the stack away — `onModuleScreen` in Home, combined with the panel rule into one `hideWidgets`. Two details:
  - it reads the RAW `view`, not `screenView`, so expanding a conversation opened FROM a module screen does not pop the widgets back in mid-flow;
  - **hidden, not closed** — navigating back to Home restores exactly what was open. Verified: Home shows Clock in + Communities, Hub › People hides both, "New" comes back to the greeting with both still there.
  - It applies to Policies and the Calendar too, not just People — one rule instead of three, and every module frame draws its lateral widgets hidden. **Flag for Oskar** if only People was meant.

- **The One button is f0's real outline button now** (per Oskar), with the mark in BLACK. `F0Button variant="outline" size="sm"` — `sm` IS the frame's 24px box on an 8px radius, and f0's own outline chrome (white-60 ground, `0 2px 6px -1px` plus the inset hairline) matches 2730:458181's shadow stack.
  - The glyph is a new local `one/OneFillIcon.tsx` — an **icon gap**: f0's `F0OneIcon` is the brand mark with its animated gradient, which is the wrong thing inside an outline button. Path exported by Oskar (`one-fill.svg`), FILL so no `vector-effect`, `forwardRef` so it satisfies f0's `IconType`.
  - **The fill is pinned to `hsl(var(--neutral-100))`, not `currentColor`** — f0's outline variant paints its icon `text-f1-icon` (a mid grey) and the design wants it black. That token IS #0d1625, the exact fill of Oskar's SVG, and it flips on dark. Verified: `rgb(13,22,38)` in light, `rgb(255,255,255)` in dark, 16px on a 24px button with an 8px radius.

- **The split panel is titled by what you CLICKED** (per Oskar: "el titulo de la conversacion debería salir del contexto"). It read a literal "Conversation" from the frame, which says nothing about what you asked; it now renders `conversation.title`, which `startWithContext` already sets from `context.title`. Verified: the panel header reads "Total employees".

- **All People copy is English** (per Oskar). The frame writes "Total empleados / Altas / Bajas / Contratado"; the whole set is translated rather than half of it: `HEADCOUNT.title` → **Total employees**, stats → **Total / Joiners / Leavers** (which is what the reply copy already says — "122 joiners against 37 leavers"), the column → **Hired**, and the right banner's title with it.
  - `HEADCOUNT` is shared with the Insights widget, so that banner is translated too — one fixture, no drift.
  - **The `headcount` intent's match accepts both spellings** (`total emplea\w*|total employees|headcount|plantilla`): the generated prompt is English now, but a typed Spanish phrase should still land there and conversations persisted before the rename carry the old wording. Both One buttons also DERIVE their prompt from `HEADCOUNT.title` (`` `Analyse ${HEADCOUNT.title}` ``), so a future rename cannot silently break intent matching. Verified end to end after the rename: reasoning streams, the three paragraphs land, the clarifying panel appears.
  - Minor, not fixed: conversations already in localStorage keep their old title and quoted labels ("Total empleados / Altas / Bajas"). Clearing recents refreshes them.

## Done since last handoff (2026-09-01, second pass)

- **Clock in and Communities are OPEN when Home loads** (per Oskar: "al abrir la home por primera vez el widget de clock-in y el de communities esten abiertos por defecto"). `DEFAULT_OPEN_WINDOWS` in `windows/types.ts`, read by `useWindows` and applied in `useWindowStack`'s **useState initializer** — so it is the state Home OPENS with, not a floor: close a widget and it stays closed for the session, reload and the default is back. Order is the stacking order and matches the frame's lateral column (2730:461616): the 176px Clock in card on top, the tall widget under it, one column (MAX_PER_COLUMN is 2).
  - `useWindowStack` now takes an OPTIONS object (`{ columnWidth?, open? }`) instead of a positional width — two call sites, and `open` needed a name. The initializer COPIES the array: callers pass a module-level constant, and aliasing it into state would make every later mount share it.
  - Verified in the browser: both cards on load, Clock in hugging at 178, the navbar Clock-in button reading as pressed with no pending dot (the card says the same thing).

- **Organization › People, and One answering BESIDE it** (Figma 2730:459215 + 2729:450379, per Oskar). The two frames are one flow: the section view, then the split view you get by clicking One on the "Total empleados" banner.
  - **The screen is real f0 all the way down.** `Tabs` from `dist/experimental` (its own `rounded-md px-3 py-1.5` pill, `bg-f1-background-tertiary` when active, 1px underline at `-bottom-3` over the container's hairline — the frame's tab spec, component for component), and `OneDataCollection` for the toolbar + table. **NO presets on the source**: that is what makes ODC render the frame's single "Filter" button (the FilterPicker) instead of Policies' preset pills. **`secondaryActions: { actions, expanded: 1 }`** is what keeps "Export" a visible outline button rather than folding it into the ⋮ (ODC's default). Filters are workplace / access / contract, search is by name, and the "Contratado" sort runs on real tenure, not on the printed label — "9 months ago" would otherwise sort next to "9 years ago".
  - **The table is built ON TOP of the shared `employees` fixture**, not beside it: 20 curated people + 4 local recent joiners = 24 rows, with the access and contract state added as small id-keyed overlays. The joiners stay LOCAL to this screen — payroll, time off and performance all read that shared list. **The four "Ending soon" contracts are deliberately the same four the Needs-you queue asks you to confirm** ("Confirm 4 contract renewals"), so the two surfaces cannot disagree about how many there are. Workplace is printed in full ("Remote — Tokyo") but FILTERED on a normalised key, so six remote cities offer one "Remote" option.
  - **Only the People tab is designed.** The other four move the highlight and render f0's `OneEmptyState` saying so — the prototype's rule for undesigned surfaces is to keep the finished shape and be honest about the gap, and silently showing the People table under "Teams" would be the dishonest half.
  - **The banners are transparent, not white** (the frame's Inline Banner has a border and no fill, so the #FCFCFC canvas shows through — which is also what makes dark mode work for free). Left card: 44px header + three 26px figures (`text-3xl` IS the frame's 26/32) + the trend; right card: two "Post — Feed cards" rows with a tinted 32px glyph box, and the "+467"/"+863" chips are **F0AvatarList's own `remainingCount` counter**, with the third avatar left `src`-less so F0Avatar falls back to initials the way the frame's purple "BR" chip does.
  - `Sparkline` gained an **`area`** prop — currentColor at 12%, closed to the baseline — so the banner draws the frame's filled band while staying literally the same drawing as the Insights widget's line.
  - Navbar: `screenTitle="Organization"` with `F0AvatarModule module="employees"` (f0 maps `employees` to `ModuleIcons.Organization`, which IS the frame's glyph — not an icon gap) and a new `screenActions` prop carrying the frame's single **Megaphone** button in place of the default ⋮ + gear.

- **The split conversation panel** (Figma 2730:458631). `conversationStore` gained a **`panelId`** beside `activeId`: a conversation is in the canvas or in the panel, never both. `startConversationInPanel(context, prompt)` opens it, `expandConversationPanel()` moves it to the canvas, `closeConversationPanel()` puts it away, and every other emit site now says what happens to the panel (Recents opens into the CANVAS, `goHome` takes the panel with it, deleting the panel's conversation clears it). `sendMessage(prompt, conversationId?)` takes an explicit conversation, because the panel is open BESIDE a screen rather than as the active canvas.
  - **The layout trick that made this cost nothing:** the panel renders OUTSIDE the element `shellRef` measures. The three-pane shell (chats | canvas | widgets) is now an inner `relative flex-1` div, so an overlaying stack's `absolute right-0` pins to the panel's edge instead of covering it — and every existing push-vs-overlay calculation accounts for the panel with no rule of its own.
  - **The right-hand pane holds EITHER the widgets or the conversation** — the same rule the left pane already has for a chat vs a ticket. Both frames hide the lateral widgets and the arithmetic agrees: at the design's own 1440 a 438 panel, a 448 widget column and a readable canvas do not fit. The stack is HIDDEN, not closed, so closing the conversation brings it back exactly as it was; acting on a widget control the other way (`toggleWindow`, `onWindowRequest`) closes the panel, so a click is never dead. **Flag for Oskar** — this is a decision, not the frame.
  - **The panel's composer is an ADDITION to the frame.** The frame shows no composer because it captures the moment a clarifying question is pending, and a pending question REPLACES the composer (the established rule). This is what stands in its place once the question is answered — hand-rolled, like the Comms one and for the same reason: `F0AiChatTextArea` owns its value with no `onChange`, so `OnePromptBar` drives it through DOCUMENT-level input listeners and a second instance would fight the first for them.
  - Verified end to end in the browser: click → the card quoted with its sparkline → reasoning streams → the three paragraphs land → the clarifying panel → answer echoes → resolve copy lands → composer returns. Panel measures **438px** with the `inset 1px 0 0 rgba(5,38,87,0.06)` hairline and the #FCFCFC chrome surface; expand promotes to the canvas and the widgets return; ✕ restores both widgets with the People screen intact.

- **The clarifying panel has a CHECKBOX mode, and the ONE glow** (Figma 2732:462941). `QuestionCard.multi` switches the radios for 20px checkboxes, and **ticking every option resolves to "Both"** — which is why the frame can drop the third "Both" radio and the `headcount` intent's resolve branches are unchanged. Keyboard: ↑↓ move, Enter TOGGLES in multi mode (submitting on a second press would fire the answer the moment you tried to untick one), Esc dismisses. Verified: both ticked → the "Both" branch; "Model next quarter" alone → the model branch; ArrowDown + Enter ticks the second option; Esc hands the slot back to the composer.
  - The glow is a blurred gradient **sibling painted BEFORE the card**, not a z-index game, so only the ~4px spilling past the border shows. It lives in `FULL_BLEED_CSS` as `.f0c-clarify-glow` because arbitrary `blur-[4px]` plus multi-stop `from-/via-/to-` utilities are exactly what this build drops silently — verified by computed style: the frame's gradient, `blur(4px)`, opacity 0.8. It applies in the CANVAS panel too, since the component is shared; the newer frame is the more recent word on the treatment.
  - The `CheckIndicator` is hand-rolled rather than f0's `F0Checkbox` so it is the same 20px box as the radio above it (F0Checkbox's button is 24px and takes no className) — they are one list in two modes, and a size change between them would shift the labels.

- **Conversation spacing is TURN-aware now**, in both variants. The design groups an assistant's paragraphs into one "Assistant Turn" (12px between them) and separates turns by 24px; the store emits one message per paragraph, so `ConversationView` derives the grouping from the neighbours instead of reshaping the model — a container `gap` cannot express it. Measured in the browser: card 0, first paragraph 24, paragraphs 2–3 at 12, the "Both" user turn 24, resolve paragraph 1 at 24 and 2 at 12. **This also changed the CANVAS conversation** (it was a flat 24 everywhere) — flagged rather than done quietly; it is the same structure the new frame confirms.
  - `variant="panel"` gives the 438px pane its own column (full width, `px-1`) and **drops the "Asking question…" status line**: the clarifying card sits a few pixels below the thread there, so announcing it is redundant, and the frame draws no such line. The canvas keeps it — there the card is at the far bottom of a 712px column, which is what the line is for.

- **Fixed while verifying: an expanded conversation inherited the People screen's layout.** `fullWidthView` / `showPromptBar` / `screenTitle` were keyed on the raw `?view`, so promoting the panel to the canvas left the thread with **no composer and no scroller** (view was still `people`). They all read `screenView` now — `activeConversation ? null : view` — because an open conversation takes the canvas over and every screen-shaped rule has to stop applying with it.

## Done since last handoff (2026-08-30)

- **One has a button ON content now — the X/Grok pattern** (per Oskar, 2026-09-01). The headcount banner in the Insights widget carries a `F0OneIcon` button; clicking it opens a conversation ABOUT that card instead of making you type a question.
  - **The click carries the card into the turn.** `ChatMessage.context` (a `MessageContext`: title, stats, optional series) renders as a quoted card where the user's typed bubble would go, and `startConversationWithContext(context, prompt)` sets it plus the conversation title. The prompt still drives intent matching — it is the question the click STANDS FOR — but it is never shown as typed text. Plain data, because conversations persist to localStorage.
  - Without the card the reply floats free of what it is about; that quote is what makes "up 85 net this period" legible.
  - The `headcount` intent gives it three reasoning steps, a three-paragraph analysis that actually cites the card's numbers, and a follow-up offering the two next moves (break the leavers down / model the quarter / both) with a distinct resolve for each.
  - `Sparkline.tsx` is shared by the banner and the quoted card, so the two are literally the same drawing — normalised to the series' own min/max, since these are shapes rather than scales. Line is `text-f1-icon-selected` (rgb 6,128,137), the teal in Oskar's reference, not the info blue the first pass used.
  - Verified end to end: click → card quoted with its sparkline → reasoning streams → analysis lands → follow-up panel → answer echoes → resolve copy lands.

- **The left pane STACKS a ticket and a conversation** (per Oskar, 2026-09-01: "si tengo una tarea del inbox abierta y abro una conversacion... se apile debajo, como pasa con los widgets de la derecha"). The rule is **replace within a KIND, stack across them**, which keeps the earlier Slack-style ask intact:
  - conversation → conversation: replaces (one conversation at a time, per 2026-09-01)
  - ticket → ticket: replaces
  - ticket + conversation: **stack**, sharing the column height with a live drag handle, exactly like two widgets
  - `useWindowStack.openReplacing(id, replaces)` does it; `openOnly` stays for anything that really wants a single pane. Home passes `sameKind = isTicket(open) === isTicket(id)`.
  - **The replacement takes over the SLOT and the height share**, it does not drop-and-append. Appending shunted the neighbour up and re-balanced the stack: swapping the ticket moved it from top to bottom and reset 586/290 back to 438/438. Verified after the fix: resize to 586/290, swap the conversation, swap the ticket — both keep their position and their share, nothing jumps.
  - **A ticket only maximizes when it lands ALONE.** With a conversation already open it docks instead, because otherwise the takeover would hide the very stack the user asked for. The check reads `chats.state.open` BEFORE `openReplacing` — that is the pre-update value on purpose, which is exactly "was something else already there?".
  - `panelKey` is now per KIND (`ticket` / `conversation`) rather than one fixed slot: swapping which conversation you read still changes the card's contents without remounting it, while a ticket and a conversation are two distinct cards.

- **THE MAXIMIZE FLIP IS GONE — it was distorting the text** (per Oskar, 2026-09-01: "se distorsiona el texto"). Reviewed with the Emil skill, which names the cause outright: _`scale()` scales the CHILDREN too_. That is a feature at `scale(0.97)` on a button press and a disaster on a panel — restoring the inbox ticket from 1124 to 420 wide animated the incoming panel from `scale(2.68, 1.0)`, i.e. every glyph stretched to 2.68x its width and squashing itself into place over 240ms.
  - **A FLIP is only honest when the two states are the same picture at two sizes.** These are not: the details table reflows, the description rewraps, the columns change. There was nothing to morph, so the morph was a lie and the non-uniform scale was the visible proof.
  - Replaced with the language the EXIT already uses, so all the panel motion now says the same thing: **dissolve, with blur bridging the two states** — `opacity 0→1` + `filter blur(4px)→0`, 200ms, the same `cubic-bezier(0.23, 1, 0.32, 1)` ease-out as the entrance and exit (the old FLIP used ease-in-out, correct for a genuine on-screen move and wrong for an arrival). **No transform at all**, which is what removes the distortion. Reduced motion drops the blur and keeps a 120ms fade.
  - `flipOrigin`/`stashFlip`/`playFlipFrom` are now `swapOrigin`/`stashSwap`/`playSwapIn`, and the stash no longer carries a rect — only which window changed state, so the others stay put.
  - Verified in-browser on BOTH directions and on a widget: the running animation lists exactly `filter` and `opacity`, 200ms, and `transform` computes to `none` throughout. Nothing in this file morphs any more.

- **Inbox rows open a ticket panel** (Figma 2725:444787 maximized = the DEFAULT, 2725:447260 docked, per Oskar 2026-09-01). Clicking a row's body opens the detail; the checkbox beside it stays its own control, so ticking an item off never opens it.
  - **It is the window system, not a new one.** The two frames are exactly maximized vs docked-left, so the ticket goes in the LEFT stack next to the Comms chats — same card, same FLIP, same resize handles. `windows/` gained nothing except `PanelSpec.restoreIcon`: maximized, the toggle offers the DOCKED panel (side-panel glyph), docked it offers the expand. Only the restore glyph differs from a widget.
  - **The left pane holds ONE thing: a chat OR a ticket.** They occupy the same slot in the design and you cannot be in both nav sections at once. `LeftPaneId = ChatId | \`ticket:${string}\``, with `isTicket`/`taskIdOf`doing the narrowing; the key prefix went from`chat`to`pane`, because `chat:ticket:x` read like a bug.
  - **A ticket opens MAXIMIZED, a chat docked** — and that is driven by the ID, never by `state.maximized`. Reading the state inside the handler sees the value from BEFORE `openOnly` flushed, which is how the first attempt left a chat stuck maximized. `stack.ts` gained `maximize(id)` and `restore()` so callers never have to read it. Verified: cold open is maximized at 1124px; ticket→ticket swaps in place still maximized; opening a chat takes the slot at 420 docked; going back to a ticket maximizes again.
  - **The status and priority chips are f0's `F0TagStatus`**, not hand-rolled pills (per Oskar). The first pass painted them on `background-secondary` — grey — with a coloured dot; the frame tints the whole pill. Sampled to confirm: "Open" is **#eef4fe**, which is f0's `background-info` at 10% over white, and "Critical" is **#ffeeed** = `background-critical`. Both now match to within a rounding pixel. Variants: status open→info, in-progress→warning, blocked→critical; priority critical→critical, high→warning, medium→info, low→neutral.
  - **"Time remaining" is NOT one of those.** The frame leaves that row white behind the text — I checked the band above and below the glyphs — so it stays coloured text plus its icon. Worth knowing before someone "fixes" it into a tag for consistency.
  - `inbox/inboxTasks.ts` — `InboxTask` and `inboxTasks()` moved out of HomeNav so the ticket panel can resolve a row's title without importing the nav (that would be a cycle). `inbox/tickets.ts` carries only what the DETAIL adds on top of the row: reference, status, priority, team, assignee, category, requester, dates, description, one entry per task with a fallback so a new task never opens an empty panel.
  - `windows/PanelIcons.tsx` glyphs are `forwardRef` now, so they satisfy f0's `IconType` and can be passed anywhere a real icon can — as plain functions they only worked where the prop was loosely typed.
  - Off the frame: card 957 wide in the maximized state with a 44px header and THREE buttons (⋮ + toggle + ✕), sections inset 20px horizontally with a 12px top, and the details table on 44px rows with a 160px label column.

- **The Cal section is real now — panel AND canvas** (Figma 2621:29173, per Oskar 2026-09-01). It was the last INFERRED section; the frame is a whole screen, not just a nav state, so both halves are built.
  - `calendar/` — `calendarFixtures.ts` (the week, the events, workplaces, absence filters), `MiniMonth.tsx` (month picker + the local `CalGroup`), `CalendarScreen.tsx` (the week grid).
  - **Cal panel = 293px** (the frame's width; Inbox is 419, everything else 240). Month picker with ISO week numbers and a filled selected day, then "Meet with" + a people search, "Workplaces" (Barcelona · Bilbao · Madrid), and "Team absences" as five checkboxes. The old inferred body — New event / Meetings / Upcoming — is gone; that content lives in the Events widget.
  - **Cal is a DESTINATION, not just a side panel.** Clicking it in the rail sets `?view=calendar` (Comms/Inbox/Hub still leave the canvas alone), and switching away clears it. Use `setSearchParams`, never `navigate("/")` — the prototype is mounted at `/p/home`, so navigating to the root leaves it entirely. That bug shipped for a few minutes and dumped the app on the prototype index.
  - **The grid**: 40px sticky day header, 80px per hour, 64px gutter with the hour label ON the line, 9 AM–6 PM. Events are absolutely positioned from decimal start/end, so one `HOUR_PX` drives rows and blocks together. Two variants off the frame — solid `bg-f1-background-info-bold` and outlined `border-f1-border-info-bold`; the frame's #5596f6 turned out to be a real token (`Background/Info/bold`), so no raw hex.
  - **The prompt bar is hidden on this view only.** The frame has none, and a floating composer over a scrolling time grid covers the hours you are reading. Every other screen keeps ONE pinned — say so if you want it back.
  - **The frame's dates disagree with each other**: navbar "June 2026", range "Jun 31 → Aug 4" (no such day), headers Mon 31 / Tue 1 / Wed 2, and a mini month laid out for a 30-day month starting Sunday (November, not June). Reproducing that would read as a prototype bug, so everything is anchored on one coherent week — Mon 1 – Fri 5 June 2026, today Tue 2 — and the mini month is GENERATED from it.
  - **Panel corrected against 2621:30338** (per Oskar — the first pass was built from the full-screen frame and got four things wrong): the panel has **no search under its header** (the shell renders one for every other section, so it is now gated off for `cal`); the **month label is not in the panel** at all — it lives on the page, in the canvas navbar — leaving only the two steppers, right-aligned; the "Search for people" field runs the **full content width** (269, measured 266 in the frame) instead of sitting inside SearchBar's own px-3 wrapper, which inset it twice; and the numbers are **12px on a 35×38 pitch with a 32px `rounded-sm` chip**, not 14px on a 28px circle. Days carrying events get a tick underneath, derived from `CALENDAR_EVENTS` so the picker and the grid cannot disagree. The teal turned out to be `background-selected-bold` exactly (rgb 6,128,137).
  - **Canvas header corrected against 2621:41608 + 2621:41630** (per Oskar). Three things: (1) the toolbar row used **`h-13`, which is not a class in this build — it computed to `0px`**, so the row collapsed to its 32px content and the day header sat flush under the buttons. The frame is 52px with its 32px controls at y=0, i.e. `items-start`, and the leftover **20px IS the clearance**; heights here go through `style` now. This is the arbitrary-Tailwind trap from "Key gotchas" for the third time — CHECK any `h-*`/`w-*` that is not on the default scale. (2) The day header was `bg-f1-background` (white) on a **#FCFCFC** canvas; both frames render it on the canvas surface. It is sticky so it still needs an opaque ground — new `.f0c-canvas-surface` in Home's stylesheet, same value and dark pair as `.f0c-window-overlay`. (3) The two right-hand controls are **outline**, not ghost — measured as 32px bordered buttons 8px apart, then a divider, then the 94px Workweek button.
  - The day header is **ruled top AND bottom**, edge to edge (per Oskar — they were missing entirely). Measured off 2621:41630: full-width 1px rules at y=0 and y=37 that run across the HOUR GUTTER too, unlike the hour lines below, which start after it. So the borders belong on the row container, not on the day cells.
  - **Event blocks, measured off 2722:441072** (per Oskar). A block is NOT its slot: the frame insets it **2px top and bottom** (36 tall in a 40px half-hour slot, 76 in an 80px hour), and that inset is the entire reason stacked meetings have air between them — mine filled their slots and sat flush. Horizontally 2px from the column's left edge with a **12px right gutter**. Radius 6, padding 7, type 14/20 medium. The colours were already exact: `text-f1-foreground-info` IS #3a66a7 (`Foreground/Info/default`) and `border-f1-border-info-bold` IS #5596f6 — verified against the frame's variable defs, no raw hex anywhere.
  - **The rules and the events were on DIFFERENT origins** — caught by an adversarial pass, and the worst bug in the calendar. Hour hairlines drew at `i * HOUR_PX + HOUR_PX/2` (the frame's half-hour lead-in above its "9 AM" rule) while blocks drew at `(start − DAY_START_HOUR) * HOUR_PX`, so **every meeting sat 40px above its own hour line** — a 10:00 event floated half an hour north of "10 AM". The lead-in is now `GRID_TOP_PAD`, applied to rules, labels, events and the grid height alike. Verified: 9 AM at 40, 10 AM at 120, 11 AM at 200, and the 10:00 block at 122 (the line plus its 2px inset). If you touch the grid maths, re-check this — nothing else pins the two together.
  - **`items-start` silently defeats `truncate`** — worth knowing anywhere in this prototype, not just here. On a `flex-col` block it cross-sizes children shrink-to-fit, and `truncate`'s `white-space: nowrap` makes min-content == max-content, so the span grows PAST its parent, `scrollWidth === clientWidth`, the ellipsis never fires, and the parent's `overflow-hidden` guillotines the text mid-word. Measured: 8 of 21 event titles hard-clipped with no "…". It also does nothing useful — top alignment in a column comes from the default `justify-content: flex-start`. Removed. Verified after: 8 spans now ellipsis, 0 wider than their parent.
  - Smaller ones from the same pass: nine hour slots need **ten boundary lines** (the 6 PM edge was open and the blocks ending there stopped against nothing) — the gutter and rules now map `[...hours, DAY_END_HOUR]`; the frame writes the 11-12 block as **"11-12 AM"**, which is wrong since noon is PM, so it reads "11 AM-12 PM" like the others; and the mini month's spill days offered `cursor-pointer` and a hover while being inert, so those affordances are gone. The selected day's `+3` became `SELECTED_DAY_INDEX` next to `TODAY_INDEX` — the frame fills the 4th while the grid badges Tuesday, and that is CORRECT (the day you are looking at is not the day you are on), so the two deliberately differ.
  - **Known duplication, not fixed**: `CalGroup` in MiniMonth.tsx forks `SidebarGroup` from HomeNav.tsx. Reusing it directly would be a cycle (HomeNav imports MiniMonth); the real fix is lifting `SidebarGroup` into a shared module.
  - **New environment gotcha: the pane freezes CSS TRANSITIONS too, not just animations.** The panel measured 240 while its inline style said 293, which looks exactly like the flex-shrink bug from the Inbox. It was a `transition-[width]` stuck mid-flight — `getAnimations()` reports it as a running `CSSTransition`. Setting `transitionProperty = "none"` reveals the true size.

- **The Inbox nav is the Needs-you queue, in the inbox row design** (Figma 2621:28151, per Oskar 2026-09-01). Three changes together:
  - **One fixture, two presentations.** `NeedsYouTask` (and the employee's `FOR_YOU`) gained `avatarSeed` + `module`; the canvas rows still lead with a bare icon, the Inbox renders the same tasks with a 32px person avatar carrying a module badge. The Inbox is profile-aware for the same reason the canvas is — admin sees the six approvals, the employee her two "For you" items. They cannot drift apart because there is nothing to keep in sync.
  - **The panel is 419px in the Inbox section, 240 everywhere else.** 419 is the frame's own width, and it lands where Linear's proportion points (its inbox list is ~1.65× its nav) — the reference Oskar named. Width moved from the `w-60` class to an inline style on both the animating wrapper and its fixed-width body; the wrapper also needed **`shrink-0`**, or the flex row squashed it straight back to 240.
  - **Row anatomy off the frame** (66px tall, selector at x=12, avatar at x=44, text at x=88, title AND subtitle both 14/20 — the subtitle is separated by COLOUR, not size — with an edge-to-edge hairline, so the padding lives on the row rather than the list). The header gains a filter button beside collapse (visual only).
  - The selector is f0's real `F0Checkbox` rather than the hand-rolled 18px box that predated knowing it existed. Its button is 24px where the frame draws 20, which pushes the avatar and text 4px right of the frame — accepted rather than fought, since `F0Checkbox` takes no `className`.
  - **Verification gotcha, hit again**: the pane reported `panelW: 240` with a working-looking page. `innerWidth` was **0** — the stale-JS-context quirk. A fresh tab gave the true 419. Probe `innerWidth` before believing any measurement that looks like a layout bug.

- **ONE conversation at a time in Comms** (per Oskar, 2026-09-01: "como en slack"). Clicking a second conversation no longer stacks a window — the open panel's CONTENTS become the chat you clicked. `useWindowStack.openOnly(id)` replaces `open` with a single id and resets weights/column shares (a lone window has nothing to share).
  - **The card must not remount.** `WindowStack` gained `panelKey?: (id) => string` (default: the id); Comms passes a constant, so React reuses the same `<section>` and only its children change. Verified: the DOM node is IDENTICAL across a swap and the card has zero running animations — without this it would replay `f0c-window-rise`, animating a card that never went anywhere.
  - The CONTENT announces the change instead: `.f0c-swap-in`, a 140ms fade (reusing `f0c-overlay-in`) on a `key={chat.id}` wrapper. A fade, not a travel — nothing moved, something was replaced. The key also drops the previous conversation's scroll position.
  - **Swapping while MAXIMIZED stays maximized** — you are changing which conversation the full-screen view shows, not leaving it. The handler only breaks out of a WIDGET takeover (which would otherwise hide the panel).
  - Clicking the conversation that is already open still closes it. Drafts stay per conversation (`chatDraft` is keyed by chat id) — verified: type in one, switch away, come back, the draft is there.
  - Consequence: the chats stack can never have 2 windows, so its row-height and between-column handles never appear. The outer width drag and maximize still work. Revisit `openOnly` if multi-pane Comms comes back.

- **The Hub is per-profile now** (employee: Figma 2712:430800, per Oskar). `HubPanelBody` reads `useProfile()` and renders one of two group lists; the rows themselves are data (`ADMIN_HUB` / `EMPLOYEE_HUB`) over a single `HUB_ICONS` map keyed by label, so a module can never show a different glyph in the two profiles.
  - **Employee = six groups**: a new **Personal** on top (Hours · Absences · Payslips · Learning) then Company (People · Workplaces · Handbook) · Work (Time off · Time tracking · Projects) · Pay (Compensation · Benefits) · Talent (Performance · Engagement · Training) · Finance (Planning · Spend · Purchasing · Software). It is the admin Hub with the administering stripped out — no Payroll, Recruitment, Shifts, Equipment, Sales, Treasury or Accounting — and Software moved from Company to Finance. Admin is untouched; verified by switching profiles and re-reading both.
  - **This frame DOES name its icon layers**, unlike 2639:49719 — so five of the admin Hub's guesses are now corrected against ground truth: Workplaces `Building`→**`Office`**, Handbook `File`→**`Folder`**, Software `Code`→**`Computer`**, Purchasing `ShoppingCart`→**`Basket`**, Projects `Briefcase`→**`Suitcase`**. Because the map is shared, admin gets the corrections too. New: Payslips `DollarBill`, Learning `AcademicCap`.
  - **Still an icon gap**: Planning wants `HeadcountPlanning`, which f0 has no equivalent for anywhere in `src/icons` — `Organization` is the closest. Equipment/Payroll/Recruitment/Sales/Treasury/Accounting are admin-only rows the employee frame never shows, so they keep their earlier by-meaning matches.

- **Nav PANEL icons were pure black** (per Oskar: "los iconos ... deberian ser color icon default"). `NavRow`, the `SidebarGroup` chevron and both Recents rows rendered `<F0Icon icon={…} size="md" />` with NO `color`, so they inherited `currentColor` from a button that sets none and fell through to the UA default — `rgb(0,0,0)`, not a token at all. All four now pass `color="default"`. Verified across Home/Comms/Cal/Hub: every panel row icon computes `rgb(99,110,131)` = `Icon/Default/default` (#0116379c over white), nothing black left. NOTE this is a different fix from the 08-31 RAIL colours — the rail was already correct.
- **CLOCK IN FLOATS AGAIN — and it is the only widget that does** (Figma 2694:55372, per Oskar 2026-08-31: "el unico que queria dejar con la opcion de hacerlo floating en lugar de a pantalla completa"). Floating was removed wholesale earlier the same day; this brings it back for ONE widget, gated in the registry rather than available to all.
  - `windowRegistry` gained `canFloat` / `floatingContent` / `floatingWidth`, set only on `clockin`. `PanelSpec.onToggleFloat` REPLACES the Maximize button when present, so Clock in's header is Float + ✕ and every other widget keeps Maximize + ✕. Verified: Clock in reads "Float Clock in", Communities still "Maximize Communities".
  - `StackState.floating: Id[]`. A floating window KEEPS its entry in `open` — the navbar button still reads as active and closing is unchanged — and is only filtered out of the columns (`dockedWindows`). `dockedColumnCount` counts docked only, so a floating widget reserves no column width; with Clock in floating and nothing else docked the whole stack returns null and the canvas reclaims its full 1300px. Verified.
  - **Float is not sticky**: `close` clears the flag, so reopening from the navbar always comes back DOCKED. Maximize and float are mutually exclusive.
  - `windows/PanelIcons.tsx` is back — f0 ships no side-panel or floating-card glyph (its `Windows` icon is the Microsoft logo). Both were pulled from the Figma MCP's asset server: they share one rounded-rect frame and differ only in the inset block (corner square = floating, right-hand bar = side panel). FILL paths, so no `vector-effect`. The toggle's glyph names the state you will GET, not the one you are in.
  - The card hangs 8px under the navbar Clock-in button with right edges flush, then drags freely by its header; the drag clamps so ~48px always stays on screen. Portalled to `document.body` (the canvas is `overflow-hidden` and the column's stacking context would clip it). Verified: 188×178 vs the frame's 188×176, right-flush, 8px gap, drag moves it, a click on a header BUTTON does not start a drag, and dragging far off-screen leaves 48px reachable.
  - The compact body is `ClockInWindowCompact` — the docked one with `compact`, which drops "Barcelona HQ" to just its icon (no room at 188px). Its own zero-prop component so the registry keeps its "content takes no props" rule.
  - **Gotcha for verification**: the pane freezes CSS animations, so the card measured 12px below the button instead of 8 until `getAnimations().forEach(a => a.finish())`. Same trick the FLIP needs.

- **COMMS CHATS OPEN AS WINDOWS, ON THE LEFT** (Figma 2707:406513, per Oskar 2026-08-31). Clicking a conversation in the nav's Comms section opens it as a window mirroring the widgets stack: same card and header, max 2 per column, new columns appended, width + per-column + row drag handles, maximize/restore.
  - **The window system was made side-agnostic rather than copied.** `windows/stack.ts` (generic `useWindowStack<Id>` + `StackState<Id>` + `chunkColumns`/`dockedColumnCount`/`stackWidth` + the constants), `windows/windowMotion.ts` (`flipOrigin`, `enteredAt`, `animateWindowClose`, `stashFlip`/`playFlipFrom`, `settleOnMount`) and `windows/WindowStack.tsx` (`PanelSpec`, the header, the panel, `MaximizedWindow`, the stack) are now shared. `WindowsColumn.tsx` shrank from 606 lines to ~110: just `windowRegistry`, `widgetSpec` and thin `side="right"` wrappers. `useWindows`/`types.ts` are re-exports. **The widgets stack must stay byte-identical in behaviour** — verified after the refactor: 3 widgets still make 2 columns, Clock in still hugs at 178px, drag-left still widens, maximize is still 1604 wide with a 712 content column, restore still animates ONLY the widget that moved.
  - **Windows are addressed by `data-window-key`, not by title.** `animateWindowClose` used to find its element with `[aria-label="${title}"]`; with two stacks a shared title (a "Notes" widget and a "Notes" channel) would animate whichever the browser returned first. Keys are namespaced `widget:` / `chat:`.
  - **`PanelSpec.fills`** — a chat lays itself out (list scrolls, composer pinned) instead of going in the stack's scroll box. `leading` and `actions` carry the chat header's star glyph and its two extra buttons (⋮ + Headset), so the widgets' 2-button header is unchanged.
  - **Mirroring is one sign flip.** `side` decides which edge the width handle sits on, `growSign` decides which way a drag widens, and which edge the stack pins to in overlay. Left-stack columns render in NATURAL order — column 0 stays pinned to the nav and new columns append toward the canvas, which is what keeps the chat you already had in place.
  - **`HomeNav` cannot take props.** `FactorialShell` renders `meta.sidebar` as a sibling of `Home` with zero props (`sidebar?: React.ComponentType`), so `comms/chatStore.ts` carries both directions: `requestChat` (nav → canvas, same shape as `requestWindow`) and `setOpenChats`/`useOpenChats` (canvas → nav, so the row lights up). Its snapshot is a cached array — returning a fresh one would loop `useSyncExternalStore`.
  - **Two stacks squeezing one canvas.** Each overlays only when IT alone no longer fits beside the canvas floor plus the OTHER stack (`roomFor(other)`), which reduces to the old single-stack rule when no chat is open. When BOTH overlay they are pinned to opposite edges with nothing between them and **used to cross — measured 24px of overlap at a 900px viewport**; each is now capped at half the shell, so they meet exactly. The width drag's `room` clamp subtracts the other stack's measured width for the same reason.
  - **Per-author tints are NOT tokens.** Each speaker's name colour and their bubble's wash are the same value at 100% and 6% — sampled off the frame, which paints them as raw fills (only Raúl's lands on `foreground-warning`). Stored as an "R G B" triple on `--f0c-author` so one value drives both, and applied with ALPHA rather than a baked colour so the wash composites over whatever is behind it. Dark mode lifts the name toward white (`color-mix`) and takes the wash to 16%; verified — all three stay distinguishable and readable.
  - **The composer is hand-rolled**, not `F0AiChatTextArea`: that component owns its value with no `onChange`, so `OnePromptBar` drives it through DOCUMENT-level `input` listeners — a second instance on screen would fight the first for them.
  - Measured against the frame: card 420×884, header 44, four 32px header buttons, 20px leading glyph, 24px avatars, bubbles 80/60/60 tall, 20px between turns, bubble caps as RATIOS (276/388 incoming, 300/388 your own) so they hold at any panel width. `F0AvatarList` at `size="xs"` renders the design's "…" overflow natively — but **pass `max` explicitly**, it has no default and otherwise shows everyone.
  - **The inter-column gutter was 16px, not 8** (per Oskar): the split handle is `w-2` but sat BETWEEN the stack's two `gap-2` gutters, so 8 + 0 + 8. `-mx-2` cancels both, making the 8px handle BE the gap — the same relationship the row divider already had with its column. Verified: column gap and row gap both 8, the handle exactly fills it, and the drag still works.
  - **Fixed after an adversarial review** (5 findings confirmed, 4 refuted): the canvas parked only on `overlayColumns`, so a chat-only overlay left it full-width and buried — it now parks whenever EITHER stack overlays, with `marginLeft: auto` stepping it clear of a left-pinned overlay (a left overlay covers the edge you read FROM, which a right one never does). `.f0c-window-overlay`'s `-12px` shadow can only paint a left edge, so the left stack fired it into the nav — flipped via `[data-window-stack="left"]`. `onWindowRequest` did not restore a maximized CHAT, making nav widget clicks dead. The chat toggle restored-then-closed, but the restore is only QUEUED, so the exit animated the element the restore was about to unmount — it now closes where it stands (`close` already nulls `maximized`). The width drag's `room` could fall below `MIN_COLUMN_WIDTH` with both stacks open and SNAP the column to its minimum on the first pointermove; it is now a growth ceiling only (`Math.max(startWidth, …)`).
  - **`comms/chatDraft.ts`** — the composer's draft and anything you send live in a module store, not component state: maximizing swaps the panel into a different React tree and a third chat re-chunks the index-keyed columns, so a half-written message used to vanish. Sending now appends your turn to the thread instead of silently clearing. Verified: draft survives maximize AND restore; Enter appends a right-aligned own-bubble.
  - **The two overlay predicates were algebraically IDENTICAL.** `right > shell − 480 − left` and `left > shell − 480 − right` both reduce to `left + right > shell − 480`, so the pair overflowing lifted BOTH stacks out of flow at once and the canvas had no docked edge left to sit against (measured at 1280: 32px of canvas visible). Now a stack overlays when it ALONE cannot fit, or — when only the PAIR overflows — when it is the wider of the two; the narrower one keeps pushing. Verified at 1280 with a chat + a widget: only the 448 widget stack lifts, the 428 chat stays docked, canvas 164px visible instead of 32. At that width there genuinely is no room for all three, which is the documented "the stack covers the canvas" degradation, not a bug.
  - **Design corrections found by the review, all re-measured off the frame render** (which is 1:1 — the three bubbles measure exactly the Figma 276): message bubbles are **16px radius (`rounded-xl`), not 12** — the reviewer said 22, the render says 16; the nested quote is 12 so its corners stay concentric inside the 4px inset. Bubbles are **fixed width, not hugging** (all three incoming are 276 = 71% of the turn; your own is 300 = 77%) — `w-`, not `max-w-`. The author wash is **4%, not 6%**. A **quoted @mention loses its warning tint** (sampled: #0d1625 plain foreground, vs #ac5820 for a live one) — a quote is a record of what was said, not a mention of you. Call card takes `border-f1-border`, not `-secondary`; the composer insets its controls 12px and its paperclip is `outline`; the header title butts against the 20px glyph box (`gap-0.5`, not `gap-2`).
  - `CHAT_AUTHORS` uses `satisfies`, not `Record<string, ChatAuthor>` — the annotation widened the keys to `string`, so a mistyped author would only have failed at runtime.
  - Icon gap closed: the headphones glyph is f0's **`Headset`** (no boom mic despite the name). There is no `Headphones`/`Call` icon.

- **The "selected" check in every menu is `color="info"`, not `positive`** (per Oskar). Green read as a success/confirmation signal, but these checks mark STATE — this row is the current filter, this widget is open, this question is required — so f0's info blue (`text-f1-icon-info`, `rgb(85,150,246)`) is the right token. Applied to all five together so the affordance stays consistent: the two Recents-filter rows, the user menu's company row, the Preview question menu's "Required", and the widgets menu.
- **Clock in opens FLOATING, and the composer shows three chips** (per Oskar). `FLOATS_BY_DEFAULT` in `windows/types.ts` lists widgets that open straight into a floating card — it lives in types, not the registry, so `useWindows` can read it without importing `WindowsColumn` (that would be a cycle). Closing still clears `floating`, so every fresh open floats again.
- The chips are now **Create / Automate / Analyze**, driven by `CHIP_ACTIONS` in `one/suggestions.ts` — a SEPARATE ordered list, deliberately not a trim of `ONE_ACTIONS`. `find` keeps its verbs and prompts in the corpus, so typing "Find pend…" still surfaces its suggestions with the "Find" category label; it just has no chip. Verified both.
- **Agents got its real icon and Insights became "Reports"** (per Oskar). The bot glyph came from the **One AI Kit** Figma file (`VTVKWL9OGmnTJDPOmQmVhI`, node 13961:4824) — note that is a DIFFERENT file from Home-Vision, so pass its own fileKey to the bridge; it lives in `Bot.tsx` as a fill glyph and retires the `Ai` stand-in. The rename is LABEL-ONLY: the nav row and the widget title (and therefore the widgets menu) now read "Reports", while the window id stays `insights` so `types.ts`, the registry and every `requestWindow("insights")` caller stay untouched. Worth knowing when grepping — the UI string and the identifier deliberately differ.
- **Hub section rebuilt** (Figma 2639:49719, per Oskar): five groups replacing the old Company/Operations/Talent/Finance split — **Company** (People · Workplaces · Equipment · Software · Handbook) · **Work** (Time off · Time tracking · Shifts · Projects) · **Pay** (Payroll · Compensation · Benefits) · **Talent** (Recruitment · Performance · Engagement · Training) · **Finance** (Planning · Sales · Spending · Purchasing · Treasury · Accounting). The frame ships no per-icon assets and its layers are unnamed, so the icons are the closest f0 equivalents matched by MEANING against the render, not exported glyphs — worth a look. The frame also reads "Engagment"; corrected to "Engagement".
- **The width handle is visible on hover now.** It had been deliberately invisible ("the window edge itself is the handle, no visible gutter") — but the ROW divider grows a 3px bar on hover, so beside it the width handle read as absent and went unfound (Oskar asked for width resizing that already existed). Same bar, same tokens, just vertical, plus an `aria-label`.
- **Columns can now be resized against each other** (per Oskar, 2026-08-31: "si tengo dos columnas de widgets, no puedo arrastrar desde el centro para hacer la de clock-in mas estrecho"). The stack has **two** width affordances and they compose:
  - the OUTER-left handle scales the whole stack against the canvas (`columnWidth`, unchanged);
  - a new handle BETWEEN each pair of columns redistributes width inside the stack — `columnWeights: number[]` in `WindowsState`, `resizeColumnsBetween(idx, deltaWeight, columnCount, minWeight)` in `useWindows`, driven by `startColumnSplit` in `WindowsColumn`. Same 3px hover bar and `cursor-col-resize` as the other two dividers, `aria-label="Resize columns"`.
  - **Don't reuse `MIN_WEIGHT` (0.15) here** — it is a share, and 0.15 of the stack is a ~65px widget (measured: a column collapsed to 65 before this was fixed). The caller converts the existing `MIN_COLUMN_WIDTH` (336) into weight units off the live stack width, so no column drops below it whichever handle you drag. Verified at 1920: two columns start 436/436, drag left ends at the 327px floor (336 minus the handle/gap), drag right mirrors it, and after widening the stack first they sit at 463/653 with Clock in narrower.
  - The row handle got the `aria-label` it was missing (`"Resize widget height"`); it had role=separator and no name.
- **Widgets stretch to the canvas floor, and EVERY stacked pair is draggable** (per Oskar, 2026-08-31).
  - **Lateral**: the old `MAX_COLUMN_WIDTH` of 720 was a hard cap that bit long before the screen ran out. The ceiling is now 1400, but the limit that actually applies is measured live during the drag — `(shell − CANVAS_MIN_WIDTH) / columns` — so a widget stretches until the content beside it hits its 480 floor and no further, Claude-Code style. Measured off the shell rather than a constant, so it follows the window size and the nav panel collapsing. Verified: at 1440 it stops at 672 (672+480 = the 1152 shell); at 1920 it reaches **1152**, well past the old 720, canvas still exactly 480, never overlapping.
  - **Vertical**: the row handle used to degrade to an inert gap next to an `autoHeight` panel, because dragging a weight nothing reads does nothing — which meant a Clock in + anything pair had NO divider, the case Oskar hit. Now every pair gets a live handle and the drag PROMOTES an auto-height neighbour out of hugging: `manualHeight` in `WindowsState` records ids the user has taken over, and `hugs(id)` is `autoHeight && !manualHeight`. Intent beats default. Verified: Clock in went 178 → 610 while Communities gave up the space.
- **FLOATING WIDGETS REMOVED — back to maximize / restore** (per Oskar, 2026-08-31: "quiero volver a la version donde no se podian poner flotantes sino maximizar o minimizar"). The whole feature is gone: `FloatingWindows`/`FloatingCard`, the drag + 8-grip resize, `FLOAT_ANCHORS`, `FLOATS_BY_DEFAULT`, the `floating` list in `WindowsState`, the registry's `floatingContent`/`floatingSize`/`floatingAnchor`, the blur cross-dissolve swap (`animateWindowSwap`/`playSwapIn`), `windows/PanelIcons.tsx` (deleted) and `ClockInWindowCompact`.
  - The header is Maximize + Close again — **the "⋮" went with it**, since it arrived as part of the same floating design (Figma 2694:55211). Matches Oskar's screenshot, which shows two icons.
  - **Maximized = full screen** beside the nav, with the CONTENT capped at **712px** and centred (was 840). Verified at 1280×720: the panel spans the chrome edge + 8 to viewport − 8, full height, content column exactly 712 and centred.
  - The maximize ↔ restore **FLIP survives** — it is the one animation where a single element really moves between two on-screen rects, so it keeps ease-in-out. `stashFlip` hands the outgoing rect across (both directions).
  - Clock in keeps its navbar button and pending dot; it just opens DOCKED now. `ClockInButton`/`clockInStore` untouched.
  - What Oskar noticed that motivated this: docked widgets cap at `MAX_COLUMN_WIDTH` (720/column). Left as is — maximize is now the answer to "make it bigger". Raise the constant if the docked cap itself is the complaint.
- **How far the employee catalog actually goes** (asked 2026-08-31: can employee get 5 per category?). Answer from the sources — **Find yes, Create no, Automate not at all**:
  - **Find = 5, all documented**: on vacation today (shown to every role in the eligibility table) + the PoC's four personal prompts — vacation days left · next approved leave · who's out in two weeks · next public holiday. All covered by the `timeScheduling` skill.
  - **Create = 3, and that is the ceiling.** The curated catalog ("In-Product Prompt Suggestions by Module", Jun 10 — prompts drawn from 91,497 real conversations filtered to >60% success) contains only three employee-scope creates: request time off (`createLeave`, called out as genuinely executable), upload receipts as expenses, give feedback to a team member. **Every other Create in that catalog is admin or manager scope** (courses, surveys, dashboards, contracts, shift schedules), so the group stops at three rather than being padded with invented prompts.
  - **Automate = 0 documented.** One's catalog has NO Automate category — its three are Analyze/Find/Create, and the PoC's employee groups are Find/Requests/Pay. The three automations there are INFERRED stand-ins because the chip exists in the Figma frame.
  - **The docs' own answer is different CATEGORIES, not more prompts**: the PoC gives employees Find / Requests / Pay, which is where the remaining documented prompts live (next payday, latest payslip — `payrollCompensation`). Adopting those groups would beat padding Create/Automate.
  - Recorded in `suggestions.ts` as documented-but-not-surfaced: the two Pay prompts; "What's the status of my requests?" (in the PoC set but the tech plan records it hitting a PERMISSIONS ERROR locally — do not ship unverified); and "What's pending in my inbox?", the highest-intent employee question, explicitly DROPPED because no agent skill covers the Inbox.
- **Suggestions are role-gated, from the real tech plan** (Notion: "Eligibility-filtered & role-aware suggestions", Aug 31 — per Oskar). `ROLE_PROMPTS` in `one/suggestions.ts` bakes in the doc's own captures: **Admin (12 pills)** = Analyze 4 (headcount evolution · weekly time tracking · weekly time off · salary cost by department) + Find 5 (on vacation today · team overtime · who hasn't clocked in · terminations this month · pending approvals) + Create 3 (onboarding course · GDPR course · request time off for me); **Employee (5 pills)** = Find 4 (on vacation today · vacation days left · next approved leave · who's out in two weeks) + Create 1 (request time off for me). Personal prompts already sit LAST in their group, as the doc specifies.
  - Employee `analyze` is deliberately an EMPTY array, not a fallback — every Analyze prompt is company-scope, so production's `audience` gate removes the category outright for non-admins. Verified: typing "analyze headcount" returns nothing as employee and the headcount prompt as admin.
  - `buildSuggestions` and `categorySuggestions` now take the role; `promptsFor()` falls back to the shared corpus for categories the catalog does not gate.
  - **INFERRED, flag for Oskar:** the doc has NO Automate category (its three are Analyze/Find/Create), but the chips include Automate. Admin keeps the existing team-scope automations; the employee got three personal-scope ones written here, since the admin's ("weekly team hours summary", "contract renewal alerts") are exactly the kind of thing the doc's gates would strip. Replace when the catalog gains real Automate entries.
  - **Also unresolved:** the doc's categories per role are Analyze/Find/Create (admin) and Find/Create (employee), which does NOT match the chip sets Oskar specified (admin Create/Automate/Analyze, employee Create/Automate/Find). Kept the chips as specified, so the admin's five Find prompts are reachable only by typing. Worth deciding which wins.
- **The "⋮" menu lists ALL seven drawer items** (Figma "View drawer", per Oskar — corrected from my first reading of his instruction). Communities · Anniversaries · Events · Insights · Activity · Opportunities · Links. The rule is _show every item, just don't open a widget for the ones that don't have one_: Activity, Opportunities and Links render as ordinary rows that do nothing on click, rather than being hidden or greyed — so the menu reads as the finished shape while the surfaces catch up. `MENU_ENTRIES` is a discriminated union (`kind: "widget" | "soon"`), replacing the `HIDDEN_FROM_MENU` filter over `windowIds`: the ORDER is part of the design, and the registry holds things reached elsewhere (clockin from its own button, inbox from "View all", preview from a conversation).
  - **"Anniversaries" IS the celebrations widget** — birthdays and work anniversaries. It had been parked out of the menu while its design was reworked; the updated drawer lists it, so it is back and retitled (id stays `celebrations`). Celebrations is no longer entry-point-less.
  - Icons: Communities → local `windows/CommunitiesIcon.tsx` (2702:21883, replacing f0's `Feed`) · Anniversaries → `Sparkles` · Events → `CalendarArrowRight` (was `Calendar`) · Insights → `ChartLine` (was `BarGraph`) · Opportunities → `Lightbulb` · Links → `Link` · **Activity → local `windows/ActivityIcon.tsx`, an ICON GAP**: f0 ships no pulse/heartbeat glyph, and `ChartLine`/`Graph` are line charts that would read as a duplicate of Insights directly above it. Drawn to f0's stroke convention (24 viewBox, currentColor, round caps, non-scaling-stroke) because the linked node carries only the Communities asset — swap for the real export when it lands.
- SUPERSEDED by the entry above (Oskar clarified: show every item, hide only the widget) — **The "⋮" menu is an ordered allow-list now** (Figma 2702:21883). The frame listed six — Communities, Events, Insights, Activity, Opportunities, Links — but only what has a widget behind it is offered, so **Activity, Opportunities and Links are omitted** rather than shown as dead rows ("las que no tenemos diseñadas no las mostramos aunque sean navegables"). `MENU_WINDOW_IDS` replaces the old `HIDDEN_FROM_MENU` filter over `windowIds`: the ORDER is part of the design, and everything else in the registry is reachable another way (clockin from its own button, inbox from "View all", preview from a conversation, celebrations parked). **Inbox therefore left the menu.** Icons corrected to the frame: Communities → local `windows/CommunitiesIcon.tsx` (2702:21883, replacing f0's `Feed`), Events → `CalendarArrowRight` (was `Calendar`), Insights → `ChartLine` (was `BarGraph`).
- **"Insights" ≠ "Reports"** (per Oskar, 2026-08-31) — and an earlier change of mine had collapsed them. The **Insights WIDGET** tells you about your own activity; the **Reports** nav row is for reports you build yourself with One. When Oskar asked to rename the section to Reports I retitled the registry entry, which renamed the widget too AND left the Reports row opening the Insights widget — one concept wearing both names. Now: the widget is titled **Insights** again, and the Reports row is **visual-only** (like Agents and Routines) rather than demoing the wrong surface. Point it somewhere once a Reports view exists.
- **Each profile has its own identity** (per Oskar, 2026-08-31): with Alicia's name and face on both, the two views read as the same person's screen twice — the first thing anyone checks in a side-by-side. `PROFILE_PEOPLE` in `fixtures.ts` holds admin = **Alicia Torres** (her real local photo) and employee = **Sara Vidal** (`avatarFor("sara-vidal")`, the same deterministic pravatar helper every other person here uses). The greeting, the greeting avatar and the RAIL avatar all read from it.
  - Greeting detail: `GREETINGS` are now `%s` templates. The template is picked once per load and the NAME re-resolves on switch — otherwise flipping profile also reshuffled the greeting, which read as an unrelated glitch.
  - NOTE the frame itself says "Welcome back, Alicia" in the employee variant too; Sara is a deliberate departure from the mock, for demo credibility. The name and seed are one line in `PROFILE_PEOPLE` if you want someone else.
- **"View all (n)" on the task section** (Figma 2621:22725, per Oskar). `SectionHeader.tsx` is shared by both profiles — the admin "Needs you" queue and the employee "For you" list are the same shape — and the link opens the **Inbox widget** (`requestWindow("inbox")`), which is where all the tasks live; the canvas only ever lists the top few, so there had been no route to the rest. The count comes from `INBOX_TOTAL` in fixtures (35, per the frame), not from the visible rows. Quick actions deliberately gets NO link — it is a fixed set, not a truncated list.
  - Type detail worth keeping: the link is `text-base`/`leading-5` (14px/20px in f0's theme) to match `F0Text variant="label"` exactly. At `text-sm` it rendered 12px/16px and sat 2px above the label's baseline — close enough to look like a mistake rather than a choice. Colour stays `foreground-secondary` so the link is the quieter half of the row.
- **Profile switcher: admin ↔ employee** (Figma 2694:55469, per Oskar). `profileStore.ts` is a persisted module store (the rail's user menu, the nav panel and the canvas are sibling trees), and the rail user menu gained two rows — "View as admin" / "View as employee" — with the `info` check marking the active one. Three things change together:
  - **Canvas** → `EmployeeCanvas.tsx`: the Needs-you approval queue is replaced by "For you" (2 rows: sign the contract addendum · due Friday, Pablo's Saturday shift swap) and a "Quick actions" 2×2 grid (time off, payslip, my shift, expense). The rows deliberately reuse the Needs-you row shape (48px, 10px radius, tertiary fill, bare 20px icon, chevron) so the two profiles read as one product; only the content model differs. The grid drops to ONE column below `sm` so labels never truncate at the canvas floor.
  - **Nav panel** → Agents, Reports and the whole Recents section are admin-only; Pinned swaps "Inbox triage" for "My holidays". Employee sees New / Routines / Documents / Pinned, matching the frame.
  - **Composer chips** → employee swaps the analyst chip for Find (`EMPLOYEE_CHIP_ACTIONS`): self-service is about locating your own things, not reporting on other people's.
  - INFERRED, worth a check against the frame: the 4th quick action (the render shows "View my payslip" twice, which is surely a duplicate in the mock, so it is "Submit an expense" here), and the rail's bottom cluster — the employee frame's icons there were too small to read reliably, so Marketplace + Shield are unchanged. Icon gaps: signature→`FileSigned`, payslip→`Money`, shift-swap→`Messages` (f0 has NO icon named "Chats" — `Messages`, the plural bubbles, is the chats concept and is what the Comms rail already uses; `Comment` is the single bubble used for one conversation). The other three are Oskar's picks under f0's actual names: palm→**`PalmTree`**, scheduled→**`Schedule`**, wallet→**`Wallet`** (there is no `Palm` or `Scheduled` — check the real export name before assuming a gap).
- **Clock in opens DOCKED again** (per Oskar, later on 2026-08-31): it opened floating for part of the day and the default flipped back. `FLOATS_BY_DEFAULT` is now deliberately EMPTY — floating is something you opt into per session with the header toggle, on any widget. The list is kept as the config point rather than deleted, since this default has already flipped twice.
  - Everything else about Clock in stands: its own navbar button beside the "⋮", `floatingAnchor: "clockin"` so a MANUAL float still hangs under that button (verified: 188px compact card, 8px below, right edges flush, column collapsing behind it), and `autoHeight` so the docked panel hugs its content at 178px instead of stretching the column.
- **The widgets "⋮" menu is portalled to `<body>` now** — fixing a bug that LOOKED like a dead button (per Oskar: "cuando tengo el widget abierto no puedo hacer clic en el boton de elipsis"). The button always worked; the menu was opening UNDERNEATH the floating Clock in card. Its popover was an `absolute` child of the navbar with `z-50`, but the navbar sits inside `main.relative.z-10`, which caps that whole subtree at 10 — while the floating-widget layer is portalled to body at z-30. 30 beats 10, so the card covered the menu, and clicking produced no visible change.
  - **This is the stacking-context gotcha below, in a new place**: a z-index only competes inside its own stacking context, so a big number means nothing when an ancestor already boxed the subtree in. WindowsMenu was the last `f0c-popover` in the prototype that had NOT been portalled (every sidebar menu already was, for the same reason). Anything that must sit above the floating layer belongs at body level.
  - Diagnosis worth repeating: don't trust "the click does nothing". `document.elementFromPoint` at the button centre proved the button was hit, and the same probe over the popover/card overlap named the card as the covering element.
- **Clock in has its own navbar button again** (per Oskar, 2026-08-31 — reversing the 08-30 move into the "⋮" list). `windows/ClockInButton.tsx` sits immediately left of the widgets menu: time tracking is glanceable and reached far more often than the other widgets, so it earns a dedicated control rather than two clicks through a list. Clicking toggles the widget, which opens DOCKED; floating it from the header hangs the card under this button — `floatingAnchor: "clockin"` measures `[data-home-clockin-button]`, so the card drops from the control that opened it.
  - With its own entry point the widget LEAVES the "⋮" list (`HIDDEN_FROM_MENU` now holds celebrations, preview and clockin) — two controls doing the same job is worse than one — and the **pending dot moved back onto the button**, so the "⋮" is once again just the widget list with no badge of its own. The dot hides while the card is open (the card says the same thing) and returns on close, the same handoff the ⋮ used to make with its menu.
  - The button also takes f0's `neutral` variant while the widget is open, so the control reads as pressed.
- **Windows PUSH the canvas, then OVERLAY it at a floor** (per Oskar, mirroring Claude Code's own panel). `CANVAS_MIN_WIDTH` (480) is the narrowest the Needs-you + composer canvas may get. While the docked columns still fit beside that, they behave as before — in flow, shrinking the canvas. Once `columnWidth × columns > shell − 480`, the whole stack lifts to `absolute inset-y-0 right-0 z-20` at its FULL requested width and the canvas parks at 480 underneath, so widening a widget past that point covers the content instead of crushing it. Verified both ways at 1100px (canvas 480, column keeps 448, 128px overlap) and 1600px (canvas 864 + column 448 = the 1312 shell, no overlap).
  - The overlay gets its own ground (`.f0c-window-overlay`, the same surface formula as the rail plus a soft left shadow) — without it the p-2 gutters between panels would let the canvas show through the stack.
  - **`ResizeObserver` does not fire in the Claude preview pane** (same family as the rAF gotcha below): the shell measurement silently stayed stale, so the overlay never engaged until a `resize` event was dispatched by hand. A `window.addEventListener("resize")` fallback sits alongside the observer. Note this cuts both ways when verifying — the pane's own `resize_window` does not deliver a resize event to the page either, so re-measure with `window.dispatchEvent(new Event("resize"))` after resizing or you will read stale layout.
- **Clock in rests under the "⋮"** (per Oskar). Resting position is now PER WIDGET: `floatingAnchor` in the registry picks from `FLOAT_ANCHORS` — `promptbar` (the default: above the composer, right-aligned to the content column) or `menu` (hanging 8px under the widgets button, right-aligned to it, like a panel dropped from the control that opened it). Clock in uses `menu`.
  - The measurement moved OFF the shared container and ONTO each card, since two floating widgets can now want different anchors; the portalled layer is just an inert full-bleed `fixed inset-0`. Each card observes its own anchor element (ResizeObserver + window resize) and derives its own height cap from the room in the direction it grows, so it can't run off the edge it hangs from.
  - The `data-home-widgets-menu` hook is on the WindowsMenu wrapper — its popover is absolutely positioned, so that box measures as the button itself.
  - Verified with both open at once: Clock in at top 54 (menu bottom + 8, right edges flush at 1266), Communities at bottom 552 (bar top − 8), each independent; dragging still hands off cleanly from the anchor to user-owned left/top.
- **Rail icons were on the wrong token** (Figma 2694:55571, per Oskar — "se ven muy claritos"). They used `F0Icon color="secondary"` → `text-f1-icon-secondary` = `rgb(162,172,190)`, a light grey. The design's `foreground/default/secondary` (`rgba(1,22,55,0.61)`) composites over the #FCFCFC rail to `rgb(99,112,132)`, which is f0's **`icon` DEFAULT** token at `rgb(99,110,131)` — a 2/255 match on one channel. So the rail wants `color="default"`, not `"secondary"`.
  - **All six section glyphs export identically (#011637) in the frame, the ACTIVE one included** — so the design distinguishes the selected item by its `background/default/secondary` pill ALONE, not by a darker glyph. The `active ? "default" : "secondary"` ternary is gone; every rail icon (sections + the Marketplace/Shield cluster) is one token now.
  - The 9px labels were already right (`text-f1-foreground-secondary` = the design's exact token) — only the glyphs were off, which is why icon and label looked mismatched.
  - Watch this trap generally: f0 has TWO secondary families and they are far apart — `icon-secondary` is a pale grey for de-emphasised glyphs, while `foreground-secondary` is the dark slate used for secondary TEXT. A Figma layer named "secondary" usually means the foreground one.
- **All widget motion collapsed into one quiet family** (per Oskar — "se ve demasiado movimiento de cosas, iria por algo mas sutil, como el efecto cuando apilas dos widgets"). What the framework actually says about the three transitions, and what each became:
  - **CLOSE — was the real bug.** `animateWindowClose` picked its exit off `data-enter`, and the floating card never had one, so it fell through to the lateral `translateX(100%)`: a card the user had dragged to the LEFT flew to the RIGHT margin to vanish. Spatial consistency is about matching the element's real relationship to the screen — a docked panel can plausibly slide back out the edge it came from, but a floating card sits wherever it was dropped and has no edge to return to, so travel there is simply a lie. An exit only has to confirm the dismissal, not narrate a destination. Now: dissolve in place, `scale(0.98)` (never toward 0 — a shape stays visible to the end), 2px blur so the fade is not a hard cut, 150ms.
  - **FLOAT ↔ DOCK — a defensible animation that was still too loud.** The FLIP was correct on paper (one element moving between two rects is the one case Emil's easing branch reserves ease-in-out for) and it STAYS right for maximize/restore, where the panel really does take over the canvas. But for a routine toggle it swept a card diagonally across the screen while rescaling it — the loudest motion in the system. The framework's own tool for two states of one thing that will not crossfade cleanly is to mask the seam with a little blur, so it is now a blur-masked cross-dissolve: 120ms fade-out where it stands, then 180ms fade-in where it lands with a 4px lift. Sequential, not overlapped, because the two halves live in different React trees — the outgoing element is gone the instant state flips (`animateWindowSwap` + `playSwapIn`, coordinated through a `swapping` set).
  - **OPEN — unified to match.** The lateral slide (a full column width of travel) and the separate floating pop are gone; every widget, docked or floating, now enters with the same `f0c-window-rise` — 8px lift + fade, 220ms. That is the stacking move Oskar named as the right level of subtlety, and with close dissolving in place there was no longer an entrance for a lateral exit to mirror. `data-enter` and `startsColumn` are retired.
  - Verified end to end: dragged a floating card to x=112 (left half) and closed it — the exit keyframes contain NO `translateX`, just opacity/scale/blur over 150ms.
  - Also hardened while here: `setPointerCapture` throws if the pointer is already gone, and an exception there left the move/up listeners unattached — a silently dead drag. Both capture and release are now best-effort.
- **Float ↔ dock is a FLIP, and the floating layer is portalled** (per Oskar — "cuando colapso el widget de communities aparece cortado por arriba, en una posicion rara"). Two separate faults behind that one report:
  - **The clipping.** The floating layer lived inside the prompt-bar wrapper, which sits inside the canvas column's `overflow-hidden` — so a card taller than the room above the bar had its TOP edge cut off. It is now `createPortal`'d to `<body>` and positioned `fixed` from an anchor MEASURED off `[data-home-promptbar]` (kept fresh by a ResizeObserver, since the composer autosizes). Same stacking-context rule the sidebar menus already follow. A resting card is additionally capped to the room above the bar, so it can never run off the top either.
  - **The transition.** Floating and docking swap the panel between two React trees, so it used to unmount here and mount there with no motion at all — an element teleporting between two rects, which is the jarring change the framework says to prevent, and inconsistent with maximize/restore which had morphed properly all along. Both directions now FLIP through the existing `flipOrigin` machinery (`stashFlip` hands the outgoing rect across), 240ms on `cubic-bezier(0.77, 0, 0.175, 1)` — ease-IN-OUT, because this is one element MOVING between two on-screen rects, the one case Emil's easing branch asks for it rather than ease-out. Verified both ways: float morphs `translate(547.8px, -136.2px) scale(1.069, 1.7104)` → none, dock morphs `translate(-112px, 124px) scale(0.955, 0.597)` → none.
- **Every widget can float now, and floating cards are resizable** (per Oskar). Clock in's header (⋮ + dock/float toggle + ✕) is the header for ALL widgets, so `canFloat` is gone from the registry. The floating variant of everything except Clock in is the SAME body it uses docked, in a **420px square** by default (`floatingSize`, `DEFAULT_FLOAT_SIZE`); Clock in keeps its narrow 188px compact body.
  - **Resize from any edge or corner**: 8 grips (`RESIZE_GRIPS`) with the matching cursors, pointer-captured, clamped to `MIN_FLOAT_W` 220 / `MIN_FLOAT_H` 140. Dragging the W or N edge moves the ORIGIN as well as the size, and the clamp has to stop the origin, not just the width — verified: dragging the left edge held the right edge at a fixed x while the width went 516 → 345 → 220 and stopped there.
  - Drag and resize share one `startGesture` helper and one `FloatRect` per widget; the first gesture of either kind pins the card's live rect into fixed coordinates so nothing jumps. Docking or closing forgets the rect.
  - **This retires the Maximize button from the UI.** `MaximizedWindow`, `flipOrigin` and `playFlipFrom` still exist and still work, and `useWindows.toggleMaximized` is still wired for the auto-restore path — but nothing can set `maximized` any more. Put Maximize in the "⋮" (currently visual-only) if it should come back.
- **Widgets now APPEND and the entrance is spatially truthful** (per Oskar — "el efecto entrando desde el lateral queda muy raro… deberia apilarse hacia abajo, manteniendo el que tenias abierto en su lugar"). Two changes that only make sense together:
  - `useWindows` appends instead of prepending. New widgets used to go on TOP, shoving the open one down — so opening a second widget moved the thing you were looking at AND flew a new panel in sideways. Now whatever is open keeps its slot and the new one stacks below it. New COLUMNS append too, so a third widget opens a column on the outer side.
  - The entrance is chosen by where the panel actually comes from (Emil's spatial consistency), carried on a `data-enter` attribute: a panel that STARTS a column really does arrive from the canvas edge, so it keeps the lateral slide (`f0c-window-in`, 280ms); a panel JOINING a column already on screen travels nowhere — it appears in a slot that just opened below its neighbour — so it rises 8px with a fade (`f0c-window-rise`, 220ms, shorter because the distance is shorter). `animateWindowClose` reads the same attribute back so each exit mirrors its own entrance (rise-out is 160ms). Verified: with Clock in open, Communities appends at top 202 with `enter="rise"` while Clock in stays at top 8; a third widget starts a new column and gets `lateral` again.
- **Clock in rebuilt to the real frames** (Figma 1044:8162 `clock-in-side` + 2694:55372 `clock-in-floating`, per Oskar — "el actual es diferente"). Renamed from "Time tracking". Three things the first pass invented and the frame does not have: a grey status label above the counter (gone — the header title carries it), a chevron after the location, and the wrong content padding. Measured off the frame and verified in-browser: counter 26px/600/32px at -0.26 tracking, progress bar 8px tall / 10px radius inside a 20px row, content `px-1.5`, counter block `px-1.5 py-2`, footer `px-1`, `gap-0.5`, card `pb-2.5`.
  - The **floating variant is 188px** and drops the location NAME, keeping only its icon (`ClockInWindowCompact`; the registry entry gained `floatingContent` so a widget can swap its body when floating rather than reflowing a 420px layout into 188px).
  - **The floating card is draggable by its header.** Pointer-capture so the drag survives leaving the element, clamped to an 8px viewport margin, and position tied straight to the pointer with NO transition — a spring or easing here reads as lag. Until first dragged it keeps its anchored slot above the prompt bar; the first grab converts that live rect into fixed coordinates so it does not jump. Docking or closing forgets the position, so re-floating returns to the resting slot. Header buttons are excluded from the drag (`closest("button")`), verified still clickable.
  - INFERRED: the frame only ever shows the progress bar at 0%, so the clocked-in FILL colour is not in the design — it stays on f0's accent to match the Clock in button. The frame's own generic ProgressBar defaults to a viridian `#0ca0ab` that has no f0 token; do not copy it in blind.
- **Time tracking can float** (Figma 2694:55211, per Oskar). Its header is now `⋮` + a dock/float toggle + `✕`, and the toggle's glyph shows the state you will GET — the floating-card icon while docked, the side-panel icon while floating. Generic, not hardcoded to the widget: `windowRegistry` gained `canFloat`, `WindowsState` gained a `floating: WindowId[]`, and `WindowHeader` was extracted so the docked panel and the floating card share one header. A floating widget keeps its entry in `open` (the menu still shows it open, closing is unchanged) but is filtered out of the column, so the column collapses when nothing else is docked and the other widgets reclaim the full height.
  - The card is **anchored above the prompt bar (`bottom-full`), not fixed to the viewport corner** — the first attempt used `fixed bottom-4 right-4` and measured as OVERLAPPING the composer's right end, including its send button. The composer autosizes as you type, so any fixed offset eventually gets covered; riding on the bar's own wrapper is self-correcting. Settled measurements: 360×196, 8px above the composer, right edges flush with the 712px content column.
  - The floating card still carries `data-home-window`, so it would have inherited the column's slide-in and travelled in from the edge of a column it is not in. `section[data-home-window-floating]` (same specificity, declared later) overrides it with a short rise-and-settle instead — 200ms, `scale(0.98)`, with a reduced-motion fade pair.
- **Widgets can hug their content** — `windowRegistry` entries take an `autoHeight?: boolean`, set on `clockin` (per Oskar: time tracking is a fixed handful of rows, and stretching it left a big empty block under the Clock-in button). Three things move together: the panel switches `flexGrow/flexBasis` for `flex: "0 0 auto"`, its content wrapper drops `flex-1`, and it is EXCLUDED from the column's weight sum so the other widgets still fill the rest. The row-resize handle beside an auto-height panel degrades to an inert gap — dragging it would only move a weight nothing reads. Verified: 196px hugging in a 704px column, alone and paired (Communities takes the remaining 500), nothing clipped.
- **Controls inside a hovered row hover DARKER, never white.** The Recents "⋮" used `hover:bg-f1-background` — opaque white — which punched a pale hole through the row's own hover tint. f0's background tokens are ALPHA (`secondary` = `rgba(5,38,87,.06)`, `secondary-hover` = `rgba(15,46,87,.1)`), so a tint over an already-tinted row COMPOUNDS: canvas 252 → row hover 239 → control hover 219 luminance, which is the "multiplying two hovers" Oskar asked for. Use `hover:bg-f1-background-secondary-hover` for a control sitting on a secondary-tinted row; reach for `bg-f1-background` only on an untinted surface.
- **The ⋮ badge hides while its menu is open** (per Oskar): opening the menu hands the notification off to the Time-tracking row, so the trigger would otherwise say the same thing twice. It is a "seen for now", NOT a dismissal — close the menu with the clock-in still outstanding and the dot returns, because the reminder is still true. The dot stays MOUNTED and fades (100ms) so it transitions both ways.
- **Time tracking became a widget; the navbar keeps only the ⋮** (per Oskar). `ClockInPopup.tsx` (popover anchored to a navbar timer button) is gone, replaced by `windows/ClockInWindow.tsx` + `windows/clockInStore.ts`; `clockin` joined `windowIds` and the registry, so it opens, stacks, maximizes and closes like every other widget. The **pending clock-in dot** moved onto the ⋮ itself (visible with the menu closed) and repeats on the Time-tracking row at its TRAILING edge, beside the open-state check — Oskar asked for it there rather than beside the label. Verified end-to-end: dot on ⋮ + row, both clear on clock-in, timer ticks, both return on clock-out. The store is module-level because the navbar, the menu row and the window are three sibling trees.
- **Recents sliders button aligned + recoloured** — see the entry below for the full history; short version: it now mirrors the `RecentRow` "⋮" exactly (24px, secondary glyph) and `SidebarGroup`'s header dropped to `pr-1` so the two right edges land on the same pixel.

- **Widget open/close motion reworked** (per Oskar — see the windows-stack note for the full rationale): side-panel slide in and out, no more FLIP-from-trigger scaling, `fill: "forwards"` to kill the closing jump, and exits kept on ease-out per the Emil skill.
- **Composer border/glow states** finalised (default / hover `neutral-40` / focus = default + soft orbiting glow); the 1px gradient ring removed along with the radius artefact it caused. Details in the 2026-08-29 entry below.
- The prompt bar's wrapper padding dropped from `pb-3` to `pb-1.5` (6px), per Oskar.
- The Emil skill was reinstalled properly (see gotchas) — it had been a dangling symlink for the two motion passes before this.
- **FULL ANIMATION AUDIT against the Emil skill** (per Oskar, "revisa todas las animaciones para dejarlo todo fino"). Six motion domains were reviewed and every finding adversarially re-checked; 28 survived, 6 were refuted (kept below so they are not re-litigated). What changed:
  - **The composer glow no longer orbits while invisible.** `f0c-one-orbit` was declared on the ungated `form::after` and ran `infinite` from mount — but f0 keeps that pseudo-element at `opacity: 0` until focus, so a `blur(14px)` conic gradient was re-painting every frame, forever, on the always-visible Home canvas, for something nobody could see (`--f0c-one-angle` is a registered custom property, so it invalidates paint rather than compositing). Now gated on `form:has(textarea:focus)::after` — measured 0 running animations unfocused, 1 on focus. **The reduced-motion override must carry the same `:has()` selector** or it loses on specificity and silently stops applying.
  - **Widgets no longer replay their entrance on remount.** Restoring from maximize unmounts the whole `WindowsColumn`, and opening a 3rd window re-chunks the index-keyed columns — both remount panels that never moved, so every one of them slid in from the right again. `enteredAt` (module-level `Map<WindowId, number>`) suppresses the CSS entrance on any mount more than `REMOUNT_GRACE_MS` (400ms) after the first. **Timestamped, not a `Set`**: StrictMode double-invokes the mount effect, and the second run must still animate. A rAF-deferred flag was the obvious alternative and is WRONG — see the environment note below. Verified: after restore both panels stay put; opening a genuinely new window still slides in.
  - Window entrance 320ms → **280ms** (under the 300ms ceiling), and `EXIT_MS` 280 → **220** so the exit stays faster than the entrance now that the entrance came down.
  - The maximize↔restore FLIP moved to **ease-in-out** `cubic-bezier(0.77, 0, 0.175, 1)`: it is the only animation here where one element travels between two on-screen rects rather than entering or leaving.
  - **Reduced motion is now complete and means _gentler_, not _zero_.** Only 5 of 12 motions had an escape; `f0c-card-in`, `f0c-pop-in`, `f0c-modal-in`, `.f0c-pressable` and the four-part pulse had none. All now drop movement and keep the opacity cue, in one consolidated block at the end of FULL_BLEED_CSS. The window entrance and close swapped `animation: none` for a 120ms fade for the same reason. JS motion got it too: the conversation auto-scroll, the survey's simulated typing and both `scrollIntoView` calls — **an explicit `behavior: "smooth"` is NOT downgraded by `prefers-reduced-motion`**, only the CSS `scroll-behavior` property is, and only in some engines.
  - **The greeting was drastically reduced.** It opened at `scale(0.5)` on a 1.56 back-out overshoot over 450ms, rocked twice, and landed the badge at ~1850ms — on a canvas seen dozens of times a day, 40 lines below a comment explaining why the Needs-you cards were cut to 4px/200ms. Now 0.97 start, the shared ease-out, one rock, swap at 650ms. **The framework's own answer is to drop the wave stage entirely** (`PulseGreetingAvatar` would collapse to just the avatar) — that is a design call, so it is left to Oskar.
  - **The Needs-you cascade is first-paint only.** `hasEnteredOnce` (module-level) — closing a conversation, leaving `?view=policies` and nav "New" all remount the list, and the stagger replayed every time. Verified: 6 rows return with 0 carrying `f0c-card-in`.
  - Conversation auto-scroll got a **pinned guard** — a reasoning step lands every 1.2s and used to yank the thread back from a user who had scrolled up to re-read. Pinned state is sampled ON SCROLL (before the thread grows), so a multi-paragraph reply arriving in one patch can't be mistaken for the user scrolling away.
  - The reasoning disclosure now **collapses via `grid-template-rows`** instead of unmounting ~130px in one frame; the survey preview clears `justAdded` after the reveal, so reopening the window no longer retypes the question.
  - Press feedback went from 4 to 19 elements (`.f0c-pressable` on nav rows, group toggles, rail buttons, the Recents kebab); the kebab's hover reveal is gated to fine pointers so it isn't permanently invisible on touch; the scrim moved onto the custom curve to match its dialog; the clock-in progress bar animates `scaleX` instead of `width`; the ClarifyPanel highlight **lost** its `transition-colors` (it is ArrowUp/Down-driven — a keyboard action must not fade).
  - **`.f0c-pressable` now owns the colour transition too.** It sets the `transition` SHORTHAND, so a `transition-colors` utility on the same element was silently dropped — the browser showed `transform` only. Both properties are declared in the class; don't re-add the utility alongside it.
  - REFUTED, do not re-raise: the WAAPI exit "not mirroring" the entrance (it does, measured against distance rather than wall-clock); a visible column-resize bar (`cursor-col-resize` is the affordance, and the invisible handle is documented as deliberate); a `transform-origin` fallback on `.f0c-popover` (**all six call sites already set it inline** — verified individually); crossfading the copy→check glyph (its two sibling thumbs buttons swap instantly, so animating one would create the inconsistency); firing `onResolve` earlier.
- **The Recents sliders button was resized, then re-aligned and recoloured** (two rounds, per Oskar). It started as a hand-rolled `<button>` with `p-1` around a 20px `md` icon = 28px, off f0's Action grid ("no tiene un tamaño f0"); f0's sizes are `sm` h-6 / `md` h-8 / `lg` h-10. It briefly became `F0Button variant="ghost" size="sm"`, then went back to bespoke: **F0Button exposes neither `className` nor an icon colour**, so its ghost variant always paints the glyph at full foreground, and Oskar wanted it secondary and lined up with the row "⋮" below it. It now MIRRORS `RecentRow`'s kebab exactly — `size-6` box, `F0Icon size="sm" color="secondary"`, `f0c-pressable` — and `SidebarGroup`'s header padding went `pr-1.5` → **`pr-1`** to match `RecentRow`'s own right padding. Verified: both right edges land on the same pixel and both glyphs compute to the same colour. Lesson for next time: reach for the real f0 component FIRST, but when the design calls for a property f0 doesn't expose, mirroring the sibling you must align with beats fighting the component.

## Done earlier (2026-08-29 pm)

- **Central column redesigned** (Figma 2621:23686, per Oskar): (1) the navbar's ⋮ widgets menu is back next to the clock-in; (2) Needs-you cards are now single-line rows without CTAs (see `NeedsYouItem.tsx` above); (3) the composer is f0's real `F0AiChatTextArea` with the design's 16px radius / 16px text padding, chips moved below it, and only Settings on the right. Verified end-to-end: type-ahead suggestions, ↑/↓ + Enter steering, conversation start, reasoning, clarify panel and the live survey preview all still work on top of the f0 component.
- **Composer follow-ups** (per Oskar, same day): attach + mic portalled in (above); the suggestion panel now closes on click-away (document `mousedown` outside the bar, via a `dismissed` flag so what you typed survives) and on a first Esc, with a second Esc clearing the input; typing clears an active category chip, which used to stay lit after its panel had been replaced by type-ahead results. The **composer's states** (reworked 2026-08-30 after the gradient ring read far too loud): the border stays f0's own token in every state — `neutral-30` at rest, `neutral-40` on hover, and `neutral-30` again on focus (f0 itself lightens it to background-tertiary, which reads as the border dropping out), transitioning over 140ms with plain `ease` since hovering the composer is a many-times-a-day interaction. Focus adds only the glow: the earlier bar's palette (orange → red → lavender) at ~0.32 alpha with a 14px blur, pushed 4px outside the border, orbiting on our own `--f0c-one-angle` at 7s linear so we control the pace. The **1px gradient ring is gone** — besides being too strong, exposing it meant insetting f0's opaque `::before` panel by 1px, which left the inner corner at a different radius than the outer one ("el border radius se ve raro").

## Done earlier (2026-08-28)

- **New navigation** (Figma 2621:22725, per Oskar): fixed 48px icon rail + contextual collapsible 240px panel (`HomeNav.tsx`), replacing the Work/Chats sidebar and the navbar windows "⋮" menu (both deleted). Sections: Home (quick actions + Pinned + live Recents), Comms (old Chats tab), Inbox (actionable items with module badges), Cal (inferred), Hub (module groups). Panel collapse persisted; re-clicking the active rail item toggles. Rail bottom: Marketplace, Shield, user avatar → old user menu. Windows now open via `requestWindow` (insights row, cal events); navbar keeps only the timer in Home mode. Verified end-to-end in-browser incl. dark mode and the full survey conversation flow.

## Done earlier (2026-08-02 pm)

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
