# One-centric submission — closed-circuit demo plan

Goal: extend the controlling-step-poc so expense **submission** is One-centric — create/edit
expenses via the mocked One chat, keep the tabs/queues/summary-view-with-agent-recs, drop the form.
For a **roast demo**. Mock One only (no real backend). **Decisions locked:** edit = hybrid
(One + inline-edit plain-text fields); build the **full 6-scenario** closed circuit.

## Hard constraints
- **Extend the existing `copilot/` + `@/chat` pattern** (useChatAction, chatDraftsStore,
  useChatRuntime). Do NOT introduce f0-cocreation — it would fight the existing wiring.
- **Do not break** Manage tabs (Approve/Control/Pending/Export/Archive via `useManageSource`),
  the detail page for fixture rows, folder detail, or the Control bulk editor.
- Match existing code style. Keep typecheck + lint clean.

## How the chat works (recap)
- `useChatRuntime().sendMessage(text)` posts a user message; runtime matches the FIRST registered
  action whose `match(text)` is true, runs `run(text, ctx)` with `ctx.think(...)` + `ctx.reply(md)`.
- First-match-wins → order/specificity matters; keep matchers disjoint.
- `chatDraftsStore` (module store): `addChatDrafts()`, `setChatDraftStatus()`, subscribers via
  `useChatDrafts()` → drives the Submit table live. Drafts appear in Submit ▸ To-Do.
- Chat is **text-only** (no native file attach). Mock receipt "drop" with a prototype affordance.

## The 6 closed-circuit scenarios (To-Dos starts CLEARED; everything born from One)
1. **Bulk receipts (hero):** affordance "drop ~8–10 receipts" → One creates clean drafts in To-Dos →
   notices 3 are one trip → offers to group into a "Lisbon trip" folder → user accepts → folder row appears.
2. **Mileage (no receipt):** "drove from the Barcelona office to a client in Girona and back yesterday"
   → Mileage draft, distance + company rate applied (state the rate; never invent silently in copy).
3. **Per diem (no receipt):** "per diem for my Lisbon trip, Mon–Wed" → Per diem draft.
4. **Fix / out-of-policy (hero):** one receipt draft = €80 team dinner over per-person limit
   (`meal-over-limit` alert) → One flags it, asks "was this a shared meal? who attended?" → user answers
   → One fills Participants → alert clears → in-policy. ALSO one draft missing its description (required-fields
   gate) → One asks "what was this for?" → user answers → description filled, gate clears.
5. **Edit via One (hybrid):** open a draft → Edit pencil triggers One ("what would you like to change?");
   "change the category to Travel and the amount to 42" → summary updates live. PLUS inline click-to-edit
   for plain-text fields (amount, description, vendor, date) directly in the summary. Coded/dropdown fields
   (category, cost center, project) are One-only (no inline dropdowns — that's the form in disguise).
6. **Send:** "send them all for approval" (or the bulk button) → Draft→Pending, rows move to Submitted.

## Integration points (files → change)
1. **Clear Submit for the demo** — `submit/useSubmitExpensesSource.ts > useSubmitExpensesRows()`:
   add `const CLOSED_CIRCUIT_DEMO = true`; when true return ONLY `[...chatFolderRows, ...chatRows]`
   (suppress folders/draftExpenses/changesRequested/realExpenses/demoDrafts). Manage source untouched.
2. **Dropdown wiring** — `submit/SubmitExpensesTab.tsx`: implement `onNewExpense/Mileage/PerDiem/Folder`
   to `sendMessage(<type prompt>)` + `dismissBanner()`. Add the prompts to `copilot/oneEntryPoints.ts`
   (NEW_REGULAR_EXPENSE_PROMPT, NEW_MILEAGE_PROMPT, NEW_PER_DIEM_PROMPT, NEW_FOLDER_PROMPT). Keep
   "Skip the form" = generic. Prompts must match the right action's matcher and NOT collide.
3. **Receipt set** — new `copilot/closedCircuitReceipts.ts`: ~10 `ChatDraftExpense` seeds (varied vendor/
   category/amount/date/description + receipt image data URL via a small SVG builder). Include: the €80
   over-limit dinner (`alerts: ["meal-over-limit"]`, no participants yet), one with NO description
   (missing-field), and 3 tagged as a Lisbon trip (for grouping). Reuse/borrow the detail page's
   `buildReceiptDataUrl()` style for thumbnails.
4. **chatDraftsStore** — extend `ChatDraftExpense` with editable fields needed by detail/edit:
   `vendor?`, `costCenter?`, `project?`, `participants?`, `groupId?`, `tripTag?`. Add helpers:
   `updateChatDraft(id, patch)`, `groupChatDrafts(ids, folderName)` (creates a chat folder + sets groupId).
   Keep reference-replace semantics for `useSyncExternalStore`.
5. **Chat actions** (copilot/, each its own `useXxxAction` hook, registered where the others are):
   - replace/extend `useBulkCreateExpensesAction` → creates the closed-circuit receipt set, summarizes,
     calls out the over-limit + missing-field ones, and offers grouping ("want me to group the Lisbon ones?").
   - `useCreateMileageAction` (match `/mileage|drove|drive|km|kilomet/i`) → Mileage draft.
   - `useCreatePerDiemAction` (match `/per[- ]?diem|dieta/i`) → Per diem draft.
   - `useGroupExpensesAction` (match `/group|folder|trip|together/i`) → `groupChatDrafts(...)`.
   - `useFixExpenseAction` (match the user's answers, e.g. `/shared|attendee|participant|client|lunch|dinner|it was|for /i`)
     → fills participants OR description on the relevant draft via `updateChatDraft`, clears the alert.
   - `useEditExpenseAction` (match `/change|edit|update|set .*to/i`) → `updateChatDraft` the OPEN draft.
   - keep `useSendExpenseToReviewAction` → flips all chat drafts draft→pending.
   - Registration: find where the existing actions are registered (search `useBulkCreateExpensesAction`),
     add the new hooks alongside. Order specific before generic.
6. **Detail page** — `shared/detail/ExpenseDetailPage.tsx`: (a) resolve chat-draft rows' fields from
   `chatDraftsStore` so One-created drafts open with full summary + receipt; (b) change the **Edit** pencil:
   instead of toggling `SubmitterEditForm`, post a One kickoff ("Editing <provider> — what would you like to
   change?") and record which expense is "open for edit" (a store field or module var the edit action reads);
   (c) add **inline click-to-edit** for amount/description/vendor/date in read-mode summary, writing back via
   `updateChatDraft`. Do NOT inline-edit category/cost-center/project.
7. **Receipt-drop affordance** — small "📎 Drop receipts" control (in the promo area or near New-expense)
   that simulates the attach → triggers the closed-circuit bulk create (so the demo shows the upload gesture).
8. **Opening script** (optional polish) — seed a 1-user/1-assistant scripted intro that names the commands.

## Build passes
1. Demo-clear + dropdown wiring + entry prompts + receipt set + closed-circuit bulk create. **Verify in preview.**
2. Mileage + per-diem + folder/grouping actions. Verify.
3. Fix / out-of-policy troubleshoot actions. Verify.
4. Edit-via-One + inline edit on detail page (+ store editable fields). Verify.
5. Opening script + receipt-drop affordance + polish. Verify end-to-end.

Verify each pass in the browser (dev server `controlling`, :5181) before moving on.
