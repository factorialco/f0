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

- **72px rail, 56x56 targets.** The hover/active surface moved from the inner
  32px pill onto the button, so the whole thing — label included — is both the
  target and the lit area. Utilities are 44x44.
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

## Surfaces — this reverses a previous decision

Angel, explicitly:

> Veo que estás poniendo el background de la página en gris. Esto lo estuve
> explorando yo en su momento, pero no creo que funcione e invierte la relación
> entre background y contenido.

So the flat single surface (Oskar, 2026-08-29, "que no tenga color, el mismo
fondo que Needs you") is **replaced by a three-tier ramp**:

| tier                                | token         | light                               |
| ----------------------------------- | ------------- | ----------------------------------- |
| sidebars (rail + panel)             | `--neutral-5` | ≈ #F5F6F8                           |
| page / content                      | `--neutral-3` | ≈ #FAFAFB                           |
| floating (windows, cards, popovers) | `--neutral-0` | #FFFFFF + secondary border + shadow |

Traps this walked into, recorded so the next session does not:

- `--neutral-3` **does not flip in dark** (`base.css` keeps it a navy alpha), so
  the dark ramp is rebuilt from `--page` / `--neutral-0` rather than reused.
- The panel→content hairline is **gone**: with the two on different tiers, a
  `--neutral-10` seam is darker than either side of it. The rail→panel hairline
  stays, because those two share a tier.
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
