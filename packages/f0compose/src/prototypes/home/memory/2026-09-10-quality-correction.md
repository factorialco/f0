# Quality correction after user rejection — 2026-09-10

This supersedes the acceptance claims in structured-home-revision.md. The prior delivery was not sufficiently verified as a product: Communities appeared twice; a question competed with a visible composer; the original task row spacing was enlarged; browser QA had completed the user's interview and suppressed its entry question.

## Causes and changes

- Defaults reused clock-in/Communities without checking the central briefing. Defaults now payroll/recruitment; shifts are available in the original menu and interview. Central Communities/celebration content follows actual fixed-widget ownership to avoid duplicates. Legacy default migration preserves custom arrangements.
- The previous panel was reconstructed and placed above the composer. Read actual F0/Factorial code; reused the full standalone F0 panel with documented compatibility changes. Active questions replace the visible input in HybridHome's original slot; the mounted composer retains its draft.
- A gap-3 wrapper compounded NeedsYouItem's own 8px bottom padding. Restored the original SectionHeader and gap-free row wrapper. Measured rendered row gap: 8px. NeedsYouItem, approved AgentMotion and stack.ts remain unchanged.
- Versioned entry restores the first question for the superseded demo state without deleting saved conversations. Reload resumes a pending interview; Edit restores saved agreements with a fresh introduction.

## Direct browser verification

QA used localhost:5180, isolated from the user's 127.0.0.1:5180 storage. Verified automatic first question, keyboard selection, custom answer/Enter, temporary preference scope, widget selection and undo, shifts content/maximize/restore, cancel restoring composer, retained typed draft across Edit/Escape, pending-question reload, weekly routine edit/save, expense report threshold change 15 to 20 (18% example changes from alert to within threshold), save and return home. Saved conversations appear in original Recents. Payroll Ask Factorial explains 3400 minus 900 equals 2500 in the original conversation. Manually pinning Communities removes the central post; closing restores it. Main user tab remains at its unanswered initial question with payroll/candidates and the compact original tasks.

These observations cover the simulated supported journey, not every possible free-form request or real integrations. Source reviews and execution remain mocked. No external actions or publication.

## Process applied

Project-local AGENTS.md now makes functional plus product/visual checks mandatory, requires isolated QA storage, and forbids duplicate content/competing answer surfaces. This is an instruction incorporated into this project's future agent context, not merely a promise to remember. The separate agent/runner has not been modified.

Final checks: TypeScript passes; prototype checker passes all 205 files; git diff whitespace check passes. Browser error log in the isolated QA tab returned no errors. Current correction inspected at the existing desktop viewport; other viewport sizes were not rechecked in this pass.
