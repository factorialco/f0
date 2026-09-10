# Widget rail adapted from PR #48

Verified head: `a195443436423c374df591ed4c1e64f6624a8760` in factorialco/factorial-composer PR #48.

Read upstream `src/projects/home/custom-home/v3/hooks/useWidgetRail.tsx`, `railMode.ts`, `components/WidgetBoard.tsx`, `EditableWidgetShell.tsx` and `OneWorkingWidget.tsx` through GitHub.

- `railGeometry.ts` copies `railPanelTop` and its clamp helper from that exact head. Only the unrelated framework/token imports and other rail calculations are omitted.
- `WidgetRail.tsx` adapts useWidgetRail's expanded vertical list and collapsed icon strip, with the same widget renderer for the panel outside the scrolling strip. The old Composer has no HoverStrip/useHoverIntent framework; the small local hover bridge and original WindowPanel supply that boundary. Click and keyboard activation restore a widget; this deliberately adds an explicit accessible restore action to the upstream hover-only behavior.
- The user also requested individual folding. It is persisted separately from the original open-widget preferences; collapse all and expand all are available. Closing still removes a widget.
- WindowStack has an opt-in vertical-scroll layout. Left Comms retains its original chunked layout and resize behavior. Original window headers, maximize, restore and close remain reused. Vertical mode uses natural card heights and one column instead of the old two-per-column expansion.
- Ask Factorial uses the original F0 header-actions slot, with Comment, ghost, medium, hideLabel. Existing mock widget context is in `home-widgets/askWidget.ts`; no second conversation implementation.
- Loading reuses the installed F0 CommunityPostSkeleton body without another outer card, and the original One working-state composition with the approved bot artwork replacing its mark. Timers are finite; agreements persist before the visual transition.

Reference source copies used for inspection are in `/tmp/pr48-*`; those are evidence, not dependencies of the prototype.
