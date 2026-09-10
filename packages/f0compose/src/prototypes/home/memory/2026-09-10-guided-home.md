# Agreed implementation plan — guided home

Keep original home/chat/store/stack. During setup render one live briefing with the latest saved priorities, and show the agent continuation with the F0 follow-up in the existing input slot. Multiple priorities and widgets are confirmed together. Free composer text opens a fresh original conversation. Routine/report entry creates a separate persisted conversation with its own draft. Header sticky, original task spacing intact, shared F0 Ask button matching sidebar entry. Verify isolated browser journey plus technical gates before delivery.

## Verified result

- Browser: selected team + hiring together, both tasks remain in one briefing, then advanced directly to widget selection. Existing fixed widgets are preselected. Selected payroll + shifts in one confirmation; completion offers finish/undo/separate workflows.
- Browser: agent continuation above F0 question, composer hidden while asking, cancel returns it. Writing “Help me plan my week” opened a separate original conversation without briefing content. Shared F0 Ask button opened My shifts with widget context.
- Browser: My routines opened Create a routine, showed request-review draft and saved without chaining into reports. My reports opened Create a report; reopening from Recents retained the pending question. Expense threshold 15→20 changed the 18% example to Within threshold; save and return worked.
- Sticky header measured at y=60 before and after central scrollTop=259 (508px viewport, 767px content), screenshot verified. Compact 1280×720 QA also showed agent continuation after focus; option autofocus now prevents scrolling the introduction away.
- Main URL verified and left at the multiple-priority question, preserving existing selections without submitting them. Test workflow conversations were exercised in localhost:5180 QA tab; deliverable is 127.0.0.1:5180.
- Transition regression script passed; TypeScript passed; prototype checker passed 206 files. No browser errors returned. Original NeedsYouItem and window stack unchanged.

Limitations: supported mocked intents only; no real data retrieval, automation or monitoring. The separate agent runner has not been modified. New project AGENTS instructions capture the revised product rule.
