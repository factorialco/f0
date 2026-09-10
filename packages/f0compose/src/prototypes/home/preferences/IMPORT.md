# Preferences source and adaptation

Source: https://github.com/irene-mallafre/factorial-ai/tree/f7405eb1710db076125321c850f6fc782fe35ecb/factorial-home/src

Imported from the source checkout, then adapted:

- `components/preferences/PreferencesScreen.tsx` → `PreferencesScreen.tsx`.
- `state/preferences.ts` → `state.ts`; only the store import path and formatting changed.
- `lib/store.ts` → `store.ts`; formatting only.

Preserved the original Connections, SaveLocation and Behaviour sections, copy, connector data, default settings, custom connector handling, localStorage key and disconnect fallback. No network connections are made: this remains the source prototype's simulated behavior.

Replaced local UI replicas and native controls with installed F0 exports: F0Button, F0Box, F0Heading, F0Text, F0AvatarCompany, Input, Switch and CardSelectableContainer. The save-location options use F0's vertical radio-card layout. No source custom CSS, UI-control replicas, generated icon bundle or React dependencies were imported. Kept the source's 712px content wrapper as structural layout.

Agent preferences are reached from the Home panel at `?view=preferences`. Existing appearance/profile preview controls remain in the employee menu at `?view=personal-preferences`.

Verified in the integrated browser: connect Google Drive; choose it as the destination; change folder and notification preference; add a custom endpoint; reopen page and confirm persistence; disconnect active destination and confirm fallback and disabled option; remove custom endpoint; open original personal preferences. Test settings restored through the UI. TypeScript and prototype checks pass.

## Destination update

User-requested follow-up: real F0 multiple selection, Factorial Documents always included, optional additional destinations, no Default folder field. State migrates the original single destination to the selection array and drops the obsolete folder setting. Disconnecting a provider removes only its destination. Verified three simultaneous selections and preservation of remaining selections on disconnect.

## Policy text update

Agent policies now use plain F0 text with one Edit button, replacing the original behavior switches and intermediate selection cards. Edit opens the existing personal-agent panel on the right with the current policies. The simulated conversation accepts the complete replacement text, persists it through the imported preferences store and updates the page. Existing boolean preferences seed the initial wording; no external model is called.
