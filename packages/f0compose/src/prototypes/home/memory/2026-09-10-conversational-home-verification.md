# Conversational home: implementation and verification

## Target and preservation
- Actual checkout: `/Users/jonathan.centeno/code/f0-home-first-version`.
- Branch: `codex/home-first-version`; HEAD remains `78067a6dd186e1cbb7ec7f5d3918d8dbf98691f9`.
- URL: http://127.0.0.1:5180/p/home. Server started from this checkout because the supplied URL initially refused connections. Final route check: HTTP 200.
- Preserved all pre-existing uncommitted widget/reference/memory work. No commits, push, merge, publication, dependency changes or modifications to parallel checkouts.
- HybridHome/composer, FactorialAgentIcon and approvedAgentMotion are unchanged. HomeCanvas gains entry/toolbar wiring. ConversationView gains home question/artifact rendering. Existing window stack, geometry, close/restore/maximize and menu remain the implementation.
- HomeNav's only edit exports its existing RecentRow for reuse. Navigation behavior is unchanged. HomeV2 remains separate and untouched.

## Implemented
- One original conversation stores the interview, questions, answers, profile-specific preferences, routine/report drafts and confirmations. No alternative chat/transcript and no actual model invocation.
- Initial personal-agent question appears automatically; original composer and F0 quick replies both work. Answered questions remain visible.
- Briefing examples reuse original NeedsYouItem and Communities content, plus the RecruitmentWindow adaptation and data from PR #48. Personal focus shows the existing payslip UI.
- Ambiguous changed briefing preferences ask once about one-off vs permanent scope. Explicit scope is accepted directly; asking for an already-selected focus does not ask again.
- Fixed windows can be added/removed with text, including mixed clauses and `Solo …`; persisted per profile. Undo swaps the previous arrangement. Original window menu remains available inside a conversation.
- Same interview continues through editable routine and report drafts. Routine: daily/weekly/monthly frequency and `Solo …` condition. Report: recruitment or expenses, editable threshold and cadence; derived alert changes with threshold. Confirmation saves only the simulated configuration.
- Save/exit, reload and resume preserve stage, transcript, widgets and drafts. Completed routine/report cards appear with the next briefing. Pending/borrador/configurado labels retain visibility of unfinished parts.
- Returning home uses a new conversation in the original store, with timestamped title. Bounded source-review animation: `Buscando novedades` → `Al día · Revisado ahora`. Source disclosure explicitly marks external sources disconnected/simulated.
- Compact history disclosure reuses original RecentRow, allowing employee profiles to reach history without changing the approved admin-only Recents sidebar.

## Browser verification (real UI, 1280×720)
1. Captured approved starting layout: original lower composer, rail, Clock in + Communities.
2. Typed `Quiero priorizar la contratación de mi equipo` in the original textarea. Verified original question, user answer, recruitment/task/publication preview and next question.
3. Selected personal preview then `Solo esta vez`; returning briefing retained recruitment. A copy ambiguity was corrected, then the transition's returned persisted preview was checked with assertions.
4. Typed `Solo nómina y vacaciones`: original windows changed. Undo restored Clock in + Communities.
5. Typed `Solo candidatos y documentos`: upstream-derived widgets appeared in original containers.
6. Continued to monthly summary routine; typed `Hazlo semanal`; preview changed to Mondays at 09:00.
7. Save/exit + browser reload: candidates/documents remained. Resume recovered the same transcript and weekly draft. Confirmed simulated routine.
8. Recruitment report: 7-day rule showed an alert for 9 days. Typed `Cambia el umbral a 10 y revísalo semanalmente`: rule and cadence changed, tag became `Dentro del umbral`. Confirmed simulated report.
9. Reloaded completed home: original composer, saved windows, routine and report were present. Observed review start and completion; disclosed Factorial, Google Calendar and Slack with simulation labels.
10. Opened history and recovered `Configurar mi home` with prior free answers and report changes intact.
11. Menu → payslip → Ask Factorial: original conversation explained 3400 gross − 900 deductions = 2500 net. Maximize, restore and close worked. Removed the temporary payroll window to restore tested fixed candidates/documents.
12. Switched through the existing Preferences UI to admin. Final browser shows Alicia's first interview question, original composer and default Clock in + Communities; completed employee journey remains saved.

## Technical verification
- `pnpm tsc`: passes.
- `pnpm check src/prototypes/home`: 195 files, no issues.
- `git diff --check`: passes.
- Temporary assertion script `/tmp/home-flow-check.ts`: passes permanent/one-off preference distinction, combined remove/add widgets, exclusive widget selection, unsupported requests staying at current step, routine frequency/condition edits, report draft/confirmation/resume and invalid thresholds.
- No automated integration test claims: persistence and cross-surface behavior were exercised in the browser.

## Failures, causes and reusable rules
- F0Select passed superficial rendering but crashed when its menu opened (`Maximum update depth exceeded`) in the loaded F0 bundle. Underlying F0 cause not established; no shared dependency was changed. Removed that new dependency from this feature and reused the original RecentRow instead. Rule: read types/stories, but still exercise opening/selecting in the actual loaded version; compilation is insufficient.
- RecentRow inside F0Card rendered but clicking its text/row failed. Reproduced with accessibility click and pointer click. Removing the card wrapper, leaving original rows inside F0Box, restored selection. The containing card interfered with the row's interaction. Rule: reuse complete interaction patterns in a compatible container, not just their appearance.
- A one-off preview originally reappeared next to language about future visits. Stored preference was correct but the UI could imply the wrong agreement. Follow-up now displays the actually retained future-visit preview. Rule: verify displayed agreement matches persisted semantics.
- Employee navigation intentionally lacks Recents in the approved base. Solved with a header disclosure using the existing history rows, not by redesigning the sidebar.

## Explicit limits and next work
This is a bounded, scripted visual prototype with local browser persistence. Free text recognises the documented intents and otherwise explains the supported scope; it is not a language model or a production personal agent. No actual source connections, scheduling, approvals, messages, reports backend or notifications run. Only one routine and one report per profile are modelled. Reload retains widget selection, not resized geometry. Source-review timing and report measurements are simulated; no freshness claims about real systems.

Not ported: PR #48 NeedsYouFocus dialog infrastructure, richer TeamStatus/Expenses flows, full report builder/chart exploration, arbitrary routine schedules/conditions interpreted by a model, full catalogue of additionally authorised widgets. Existing underlying fixture copy remains partly English. These are subsequent extensions, not missing hidden implementations.

## Agent-learning status
These findings are documented in project memory and were applied to this iteration through narrow reuse, profile-scoped agreements and browser verification. The separate agent being built in parallel was NOT edited or updated. Incorporation into that agent remains a separate action.

Skills used/read: f0-prototype, f0-design, F0 component patterns/types/stories, factorial-skills, factorial-f0, factorial-skill-tracking, systematic-debugging. Decision-first-development was consulted; the user's explicit detailed direction authorised proceeding without another definition/approval round. No Jira, Notion or PR mutations require remote skill tracking.
