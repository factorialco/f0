# Ask Factorial — top-right exploration (version B)

## Comparison baseline

Version A remains untouched at /Users/jonathan.centeno/code/f0-agent-entry, branch codex/agent-entry-f0compose, commit 58712d4f9, served on port 5176.
Version B starts at the same commit on codex/agent-entry-top-right and uses port 5177. Different ports isolate browser storage. Use the same profile and representative tasks when comparing; histories and widget preferences are independent.

## Approved direction

- Keep Home, its central composer, Needs you, widgets and inline conversations unchanged.
- Outside Home, put the F0Button in the page header on the right: variant outline, label Ask Factorial, and the existing FactorialAgentIcon artwork and animation.
- Clicking opens the existing right conversation panel immediately, including an empty starting state and the composer. Remove the bottom entry and its reserved strip.
- Reuse conversation history, the mounted textarea, drafts, expand and close controls. Closing returns to the same page; reopening resumes the conversation.
- Keep all changes inside this prototype. F0Button API verified in generated/registry.json, component types and Button stories.

## Implementation and verification

Add a small shared entry context/button, wire HybridHome to it, and place the button in HomeNavbar and maximized Inbox headers. Adapt the existing panel geometry without changing the Home geometry.
First exercise Calendar open/close and draft retention, then People and Inbox, plus returning to Home. Run type and prototype checks and inspect the rendered result. Replies remain scripted; attachment/audio limitations are unchanged.

## Verified on version B

- Calendar: outline entry with the existing animated bot, direct panel opening, draft retained after close/reopen, scripted reply, expand and return to side view.
- Organization / People: page remains visible beside the panel; closing and reopening retains the conversation.
- Inbox: maximized ticket header contains the same entry and opens the panel beside the task.
- Home: central composer, Needs you and Clock in / Communities widgets remain present; no duplicate header entry.
- TypeScript passes. Prototype checks pass across 83 files.
- Local development server: http://127.0.0.1:5177/p/home. Version A remains on 5176.

## Contextual starting state (2026-09-09)

Replace the generic greeting with a page-specific question and three quiet suggestions, positioned just above the composer. Calendar and Organization / People use the examples discussed with Jonathan; Inbox and remaining pages use relevant starting prompts. Suggestions fill and focus the existing draft, without sending. No findings are claimed before a conversation starts. The Ask Factorial entry and Home remain unchanged.

## Final design (2026-09-09)

Ask Factorial uses the static F0 Comment icon. Home and the panel share HomeSuggestion (F0Button neutral/sm with Sparkles); panel suggestions populate the editable draft, while Home keeps its existing send behavior. The approved bot appears above the empty-state title, animates once for 1.6 seconds and settles into a neutral face. Reduced-motion users get the resting face immediately.

Reproduced the clipping on a viewport resize: the composer temporarily retained its previous measured x coordinate beyond the new right edge. Side/focus modes now anchor it with the same responsive width and right edge as the panel, removing that dependency on measurement. Home geometry remains untouched. Verified inside the viewport at 1280, 850 and 620 pixels, including expanded mode. Confirmed bot reaches rest and suggestions only fill the draft. TypeScript and all 84 prototype files pass checks.

## Empty-state refinement

The welcome bot now runs its continuous approved animation while the empty state is visible. Panel suggestions use F0Button md, 6px vertical gaps and contextual F0 icons for each action (meeting clock, week calendar, absent person, onboarding person-plus, role search, etc.). The shared Home suggestion keeps its existing defaults.

## Selected suggestion treatment

Outline in both Home and the panel. Panel buttons remain md with contextual icons, spaced 8px apart. Group the question and suggestions with a 12px gap; leave 24px from the last suggestion to the composer, and retain 16px between the bot and question.

## Suggestion interaction

Selecting a panel suggestion sends it immediately and starts the conversation, matching Home. No intermediate draft-edit step.
