# Angel's review of the unified Home — 2026-09-14

Feedback on `codex/home-unified` (PR 5520), applied on `feat/home-unified-polish`.
Angel's verdict on the direction: right — One is embedded in the experience,
Factorial starts being customizable, and the items that matter to every profile
(Home, Chat, Inbox, Calendar, Tools) are the most reachable. His verdict on the
execution: "le falta muchísimo muchísimo muchísimo polish".

Zone names he used, and this note uses: **first level** (the rail), **second
level** (the contextual panel), **content**.

## The structural problem

> Estamos escondiendo las pantallas dónde se pasa todo el día nuestro core user
> actual, en un segundo nivel de navegación. Este approach de "tools" funciona
> bien en un producto vertical como Slack, en el que el core value está en el
> comms, pero actualmente no es nuestro caso. No nos va bien antagonizar.

He also has playground data: this navigation model tests badly for Employee,
Manager AND Admin against current behaviour.

Two of his three mitigations are implemented; the third (pruning the second
level) is deferred — it needs a per-item decision he wants to make with the
team.

1. **Pinning** — `railPinsStore.ts`. Any Tools row can be pinned to the first
   level from its "⋮", up to three. Seeded with one pin per profile so the
   affordance is discoverable. Unpin from the same menu, in the panel or on the
   rail item.
2. **Auto-promotion** — `planStore.ts`. With four or fewer contracted modules
   the rail shows the modules themselves and "Tools" disappears; pins are
   suppressed there, since there is nothing left to promote. Switchable from
   Preferences › Contracted modules (Full suite / Time only / Time + People).

## First level

- **76px rail, 60x68 targets, 36x36 square chip.** Second pass, after Angel
  saw the first: the target is the whole button, but what LIGHTS UP is a 1:1
  chip around the glyph — "no es necesario que el hover area encompasse label e
  icono". Copied off Slack's rail, which he named as the reference and which
  measures: 70px rail, 8px top padding, 52x68 buttons 12px apart, a 36x36 icon
  chip at radius 8 with a 20px glyph, and an 11/12 bold label 4px below. Ours is
  76 rather than 70 because "Messages" and "Calendar" are longer than "DMs" and
  "Later", and the items sit 8px apart rather than 12 so six sections plus pins
  still fit a laptop viewport. Utilities use the same 36x36 chip.
- **Files** joined the first level; it reuses the imported documents prototype,
  and its panel lists Library / Templates / Trash.
- **Comms → Messages**, **Cal → Calendar**. Section ids are unchanged
  (`comms`, `cal`, `hub`): they are persisted and `agent-entry.css` selects on
  them. The onboarding tour matches rail buttons by `aria-label`, so its target
  and its copy moved with the label.
- **Every rail click now changes the content area**, which it did not before —
  only Home and Calendar owned a `?view=`. New thin screens: Messages (the
  existing `ChatWindow` for the open thread), Inbox (the panel's rows, full
  width), Tools (the catalog as cards). CONSEQUENCE, and it is a real one: a
  rail click now clears the One conversation, the widget stack and the
  composer, because `Home.tsx` hides all three whenever `?view=` is set. That
  is inherent to the request; if it reads wrong in use, the fix is a narrower
  rule in `Home.tsx`, not a retreat on the navigation.
- **Utilities**: Notifications folded into the Inbox, Marketplace moved into
  Tools › More, Help became "Get help" inside the profile menu. What is left is
  Settings and your avatar.
- **Company switcher** at the top of the rail, sharing `entityStore` and its
  rows with the profile menu, which keeps its own copy.

## Second level

- **Collapse only where it makes sense** — Messages and Inbox do not offer it
  (the panel IS the section), and a persisted "closed" is forced open for them.
- **A divider** between the fixed rows and the flexible list, in Home, Messages
  and Files.
- **Home panel**: the Activity button left the header and became a row; "New"
  gained a chevron and a menu (Conversation / Routine / Report); "Files" and
  the visual-only "Reports" became **Artifacts**.
- **Messages panel**: "New chat" → "New message", so it does not collide with
  Home's New conversation.
- **Inbox panel**: preset chips under the search — All / Requests /
  Notifications, with counts. The preset lives in the URL, which is how the
  panel and the canvas list stay in step.

## Artifacts

`?view=artifacts` — a `OneDataCollection` of cards over `artifactsData.ts`,
with the two presets Angel named: **Documents** and **Analytics**. Note the
limit: the card visualization takes no custom renderer, so an analytics
artifact shows properties and a summary, not a chart preview. A real preview
needs an image per artifact or a bespoke grid outside `OneDataCollection`.

Activity did NOT fold in here. `ActivityRecord` is a log of what One did —
"2 expenses need an exception", with statuses and an approval dialog — not
something One produced. Merging it into "Analytics" would have conflated a task
queue with reports.

## Second pass, same day

Four corrections after he saw it running:

- **Icon hover animations are gone**, everywhere — `iconMotion.ts` and
  `icon-motion.css` deleted, every `data-icon-motion` attribute removed. They
  were a per-glyph SVG animation on hover; he wanted them out of the whole
  prototype, not just the rail.
- **The Inbox canvas is a waiting state, not a second list.** The rows belong to
  the second-level panel; the content side says "Select a message from the list
  to review it here" and offers no actions.
- **One ground, not two.** See below.
- **No vertical gap between rail items.** The chips carry their own 8px top and
  bottom; Slack's extra 12px made the column read as six separate things.

## Third pass, same day

- **Rail 68px**, 56px buttons, and the glyph up from f0's 20px to 24 — at 20 the
  drawn mark is barely 12px inside a 36px chip, which is why it read small next
  to Slack's.
- **"Messages" → "DMs"**, his word, Slack's word.
- **Filled glyphs for the active item** (`navigation/filledRailIcons.tsx`). f0
  ships no filled set for these — `icons/app` has seven one-off \*Filled/Solid
  icons and none of them is Home, Inbox, Calendar, Folders or Hub — and the
  prototype allowlist forbids importing another pack, so each one is f0's OWN
  outline redrawn solid: same 24 viewBox, same silhouette, same radii, interior
  details knocked out with `fillRule="evenodd"`. Delete the file if f0 ever
  ships a real filled set.
- **The second-level panel resizes instantly** when you move between sections;
  the width transition is kept only for collapse. A 419px Inbox easing out of a
  240px Home read as one panel stretching rather than as a different panel.
- **Empty states carry no illustration and one line** — "Select an item to read
  it.", "Select a conversation to read it." No actions.
- **Clicking a row replaces the canvas, it does not dock a window.** Inbox rows
  go to `?view=inbox&item=<id>` and render `TicketWindow` inline; chat rows go
  to `?view=messages&chat=<id>` and render `ChatWindow`. The DMs canvas titles
  itself with the open thread.
- **No hairlines between Inbox rows**; they are rounded, hoverable rows now.

## Surfaces — this reverses a previous decision

Angel, explicitly:

> Veo que estás poniendo el background de la página en gris. Esto lo estuve
> explorando yo en su momento, pero no creo que funcione e invierte la relación
> entre background y contenido.

The first pass split sidebars (`--neutral-5`) from the page (`--neutral-3`).
He read the seam as "un cambio de color raro" and settled it: **one ground for
the whole shell, and white for what floats on it.**

| tier                                            | token         | light                               |
| ----------------------------------------------- | ------------- | ----------------------------------- |
| ground (rail, panel, page, One panel)           | `--neutral-5` | ≈ #F5F6F8                           |
| floating (module sheets, windows, cards, menus) | `--neutral-0` | #FFFFFF + secondary border + shadow |

So the old flat chrome (Oskar, 2026-08-29) survives as ONE ground — what
changed is that content now sits on a white sheet above it rather than being
the same surface as the navigation.

Traps this walked into, recorded so the next session does not:

- `--neutral-3` **does not flip in dark** (`base.css` keeps it a navy alpha) —
  which is why the first pass's page tier was a trap, and why the dark ground is
  rebuilt from `--page` / `--neutral-0` rather than reused.
- The panel→content hairline is **gone** (there is no tonal step there to
  reinforce); the rail→panel hairline stays, since it is the only thing
  separating the two nav columns.
- Sticky headers (`.f0c-canvas-surface`, `thead th`) follow the PAGE tier, but
  inside the white module sheet they still need white — the rule now covers
  `[data-hybrid-canvas]` on non-home views as well as `[data-home-window]`.
- White cards on a near-white page lost their edge: static widgets and the One
  suggestions dropdown got the secondary border and the soft shadow back.

## Deferred, deliberately

- **Search.** Angel asked where it was, then: "no lo pongamos aún". The panels
  keep their decorative `SearchBar`.
- **Pruning the second level.** "¿Hay algún item de ahí que nos podemos cargar?
  ¿Tiene sentido que quizás algunos items vivan en otro lugar?" — a per-item
  call for the team, not a sweep to make alone.
- **`NeedsYouItem` / `EmployeeCanvas` tiles** still use
  `bg-f1-background-tertiary`, which under the new ramp is the same value as
  the sidebars. They read as recessed against the page and were left alone;
  promoting them to the floating tier is a design call.
