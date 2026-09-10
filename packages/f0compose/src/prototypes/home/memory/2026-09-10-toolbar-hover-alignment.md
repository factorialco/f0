# Toolbar and hover alignment — 2026-09-10

Applied in /private/tmp/f0-home-navigation-integrated, branch codex/home-navigation-integrated, preview 5181. Preserves the original home/chat/window system.

- Edit replaces the Home toolbar three-dot menu. The global widget toggle follows Edit; duplicate rail controls are removed.
- Reused existing panel glyphs (mirrored PanelCollapse for the right side); installed F0 icons have no corresponding collapse glyph. Buttons use F0Button.
- Greeting bot is 48 × 48 with xl spacing to the greeting.
- Hover gap root cause: the fixed-width preview used a row flex container, allowing the inner card to render narrower. Column layout stretches the card to its preview width. Placement measures actual height rather than assuming 400px.
- Short viewport QA found two additional issues: overlays covered toolbar actions, and content-hugging cards refused to shrink. Overlay starts below the toolbar; preview cards may shrink with their existing scrolling body.

Verified in isolated Playwright Chrome: 1440 × 1000 viewport, recruitment anchor x1392/y56/w40, card x936/y56/w448/h374: 8px gap, equal top edge. Pointer can move into card without closing it. Edit opens My updates; Cancel restores home. One global toggle; no Home widgets menu. Bot measured 48 × 48. At 1000 × 360 the card is y8/h344, within viewport; collapse remains clickable. No browser page errors. No user onboarding/storage modified.

This documents a reusable rule in the project; it does not modify an external agent or runner.
