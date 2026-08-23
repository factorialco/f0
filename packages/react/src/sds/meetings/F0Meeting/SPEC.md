# F0Meeting — design spec

Working notes for the headless meeting surface: what it is, why it is shaped this way, how it
maps onto LiveKit, and what is still open. The Storybook page
(`__stories__/F0Meeting.mdx`) documents **how to use it**; this documents **why it is like that**
and **what is missing**, which is what you need to pick the concept back up months later.

Status: designed and built in F0, verified against `livekit-client` 2.17.0 and the factorial
backend **by reading the source**. Never run against a live LiveKit server.

---

## 1. What it is, and what it is not

A video room that owns layout, chrome and window behaviour, and owns **nothing** about
transport. The host provides participants, tracks, connection state and the actions that change
them; F0 renders.

**F0 never imports a transport SDK — not even for types.** A unit test
(`__tests__/F0Meeting.contract.test.ts`) fails if one appears. The coupling comes back the moment
somebody needs a LiveKit type "just for a second", and by then every consumer has inherited it.

This is the same split as `F0Chat`/`aiChat`: a runtime object of plain data plus callbacks,
injected by the host.

---

## 2. The contract

`F0MeetingRuntime` (see `types.ts`) carries two conventions that do most of the design work.

**Optional callbacks are capability detection.** Omit `setScreenShareEnabled` and the
screen-share button does not exist. Omit `startRecording` and there is no recording. A host says
what it supports by not passing what it lacks.

**`capabilities` is a different thing — permissions.** Omitting `startRecording` means "this
deployment has no recording". `canRecord: false` means "recording exists, but not for you", and
that renders as a **disabled control with a reason**, never as a control that quietly vanishes.
A disabled button with an explanation is a worse day; a missing button is a bug report.

### Why bindings and not `MediaStreamTrack`

```ts
type F0MeetingBinding = (element: HTMLMediaElement) => () => void
```

The obvious contract — hand F0 a `MediaStreamTrack` and let it assign `srcObject` — breaks
adaptive streaming. LiveKit's `track.attach(element)` **registers the element**: it observes its
size and visibility to pick the simulcast layer and to pause off-screen video. Assigning
`srcObject` skips all of that, and the room silently downloads full-resolution video for
thumbnails.

So F0 asks for an imperative binding and calls it in a layout effect. `bindingKey` decides when
to re-attach: F0 re-runs attach **only** when that string changes, never on `binding`'s identity,
which hosts rebuild on every transport event.

### High-frequency state is not in the contract's object graph

`signals` is an external store read through `useSyncExternalStore`, not a field on the runtime.
With a dozen participants LiveKit emits audio levels at 10–20 Hz; routing that through context
would re-render the whole tree a hundred times a second. `createMeetingSignalStore()` is exported
so hosts never implement subscribe/getSnapshot themselves.

---

## 3. The four invariants

Everything else is negotiable. These are not.

1. **A `<video>` element is never unmounted while its track exists.** Remounting shows a black
   frame and forces a simulcast renegotiation. This is why mode changes only move a rect, why the
   window lives in a portal and never reparents, and why `inline` mode "teleports by
   measurement" instead of moving the node.
2. **Audio lives outside the grid**, one `<audio>` per remote track, in
   `components/audio/MeetingAudioRenderer.tsx`. A muted participant's tile can never double up
   the audio, and layout changes can never interrupt it.
3. **High-frequency signals bypass context** (see above). The leaves subscribe:
   `SpeakingIndicator` and `ConnectionQualityBars` each read the store on their own, so an audio
   burst repaints five `<div>`s instead of the tile, the grid and the control bar.
4. **Layout is absolute rects computed in JS, not CSS grid.** That is what lets tiles animate
   `x/y/width/height`. A FLIP would animate `scale`, and scaling a `<video>` visibly warps it.

---

## 4. Layout

### The grid solver (`layout/grid-solver.ts`)

For each `rows × cols` split, the tile takes **the shape of its own cell**, clamped to
`[TILE_ASPECT_MIN, TILE_ASPECT_MAX]` = `[0.6, 16/9]`. Inside the range the tile _is_ the cell, so
the block covers the container completely instead of letterboxing a fixed 16:9 box inside every
cell and centring the leftovers.

Cameras render with `object-cover`, so a squarer tile **crops the sides** — which costs
shoulders. The maximum stops at the source ratio because going wider would crop top and bottom,
which costs the top of the head. This is what Google Meet's Dynamic layouts (March 2025) do:
_"a more flexible tile aspect ratio"_, _"portrait tiles"_, _"optimized tile placement logic to
enable much more efficient layouts that minimize unused space"_.

**Selection is by area alone.** An earlier version needed an orientation tie-break
(`AREA_TOLERANCE` + `preferWide`) because a fixed ratio made area a poor signal — two people in a
wide window solved to a marginally taller stack. With adaptive shapes, filling the container well
_is_ the conventional layout, so 2→1×2, 4→2×2, 6→2×3, 9→3×3 and 12→3×4 all fall out of area.
Tests lock those. A shape tie-break survives only for genuine ties (~1%), by log-distance to
16:9, so the result is deterministic across a pixel of resize.

### The escape hatch

`F0MeetingParticipant.preventCrop` letterboxes that person instead of filling. Cropping the sides
is safe for a centred face and **not** safe for someone signing — it takes their hands with it.
Meet ships the same opt-out as _"Show my full video to others"_. Without it, adaptive shapes
would introduce an accessibility regression that a fixed 16:9 did not have.

### Spotlight (`layout/spotlight-solver.ts`)

A camera spotlight takes the shape of its box (clamped). A **screen share takes the whole box**
and letterboxes inside its own tile on `bg-f1-background-inverse`, so the black is exactly the
part of the picture that is missing — the room around it stays light. Cropping a presentation
hides content, which is a worse failure than a band.

Spotlight is forced, with nobody pinned, when the container is narrower than
`SPOTLIGHT_ASPECT` (0.85) — a side panel is a column, and stacking faces down it makes every one
of them tiny.

### Never "+1"

A chip standing for **one** person costs the same slot as that person's tile and tells you less.
Where the strip has a slot, the arithmetic guarantees "+2" or more (the chip takes a thumbnail's
place). Where it has none, there is nothing to give back, so the room drops out of spotlight into
a plain two-up grid.

`SPOTLIGHT_ONLY_WIDTH` is deliberately low (200px) and `STRIP_HEIGHT_MIN` small (48px): a strip
that gives up early is what left a 1:1 call in a floating window showing one huge portrait tile
next to a "+1" standing for the only other person in the call.

### Capacity

`minTileWidthFor` is **container-relative** (`clamp(width/5, 88, 320)`), not a fixed floor. A
fixed floor either fills a fullscreen room with unreadable thumbnails or leaves a small window
able to show two people. This lands on ~16 faces across desktop sizes and 9 in a floating window.

> Calibration note: Meet's picture-in-picture shows **4** tiles. We show 9 in the floating
> window. Deliberate, but it is the next density question to revisit.

---

## 5. The surface

### Three modes, one button each

`panel` (left side panel) · `floating` · `fullscreen`, in the window header
(`components/chrome/MeetingModeSwitch.tsx`, built on `F0ButtonToggleGroup`, so the options are
`role="radio"` with `aria-checked`).

`minimized` still exists but has **no button**: it is derived automatically below the `md`
breakpoint, where the switch collapses to a single pill ⇄ fullscreen toggle.

An earlier round implemented OS-style edge snapping instead (pointer zones, dwell, drag preview).
It worked, and it was wrong: it turned a state change into an exercise in aim. Dragging and
resizing survive, but only _within_ floating mode — they are no longer the way into the other
modes.

### Living next to the chat

The call's side panel and the chat's compete for the same slot and may never share it. One
effect in `patterns/ApplicationFrame/index.tsx` owns the whole rule, and **who yields is decided
by who just arrived** — the user's most recent explicit act:

- The chat just opened → the call steps aside to `floating`.
- Otherwise (including the steady state and a restored mode) → the call keeps the slot and the
  chat's panel content is cleared.

Two effects cannot express this: they fire on the same state combination and undo each other,
so opening a chat would trip the branch that closes it.

### Panel geometry

The panel is a card inset by `PANEL_GAP` (4px, matching the chat's `p-1`) inside the slot the
frame reserves. Crucially it is positioned against the **frame's content area**, not the
viewport, so it lands between the navigation and the content. `ApplicationFrame` publishes that
rect with a `ResizeObserver`; padding lives inside the measured box, so animating it cannot feed
back.

Resizing is live and incremental, like the chat's `ResizeHandle` — deltas committed on every
`mousemove`, not a rect painted to the DOM and committed on release. That needs a flag separate
from `isDragging`, which means "a gesture owns the DOM"; here the rect still comes from React.

### Theme

The surface is light, on `bg-f1-special-page` — the same token as the chat panel it sits flush
against. **The exception is anything painted on top of video**: the name chip stays dark and
translucent, because it fights arbitrary imagery rather than the theme. When the camera is off
there is no imagery to fight and the chip follows the surface instead; the connection bars use
`bg-current` for the same reason.

---

## 6. Mapping onto LiveKit

Verified against `livekit-client` 2.17.0 and `factorial/frontend/src/modules/meetings`.

The core pattern is already in production: `VideoTrack/index.tsx:65-77` does
`track.attach(el)` / `track.detach(el)`, which is `F0MeetingBinding` exactly.

| F0                             | LiveKit                                                | Note                   |
| ------------------------------ | ------------------------------------------------------ | ---------------------- |
| `F0MeetingBinding`             | `track.attach()` / `detach()`                          | already in use         |
| `bindingKey`                   | `` `${publication.trackSid}:${track.mediaStreamID}` `` | both exist             |
| `muted` / `live`               | `publication.isMuted` / `isSubscribed`                 |                        |
| `width` / `height`             | `publication.dimensions`                               |                        |
| `participant.id`               | `Participant.identity`                                 | **is the employee id** |
| `name` / `avatar`              | resolved by the adapter from the meeting's attendees   | see below              |
| `isAgent`                      | `Participant.kind === ParticipantKind.AGENT`           |                        |
| `signals`                      | `audioLevel`, `isSpeaking`, `ConnectionQuality`        |                        |
| `status` / `disconnectReason`  | `Room.state`, `DisconnectReason`                       |                        |
| `audioBlocked` / `unlockAudio` | `room.canPlaybackAudio` / `room.startAudio()`          |                        |
| mic / camera / screen          | `localParticipant.set*Enabled()`                       | already in use         |
| devices                        | `Room.getLocalDevices()`                               | already in use         |
| reactions / raise hand         | data channel — `canPublishData` grant is already there |                        |
| room audio                     | `RoomAudioRenderer` ≙ `MeetingAudioRenderer`           |                        |

**`Participant.name` is useless.** The backend sets `token.name = identity`
(`LivekitService#create_token`), so it is the employee id. Names and avatars come from the
meeting's attendees, which is what the current tile already does.

**Adaptive stream gets better, not worse.** The room already runs `adaptiveStream: true,
dynacast: true`. Because F0 renders **no `<video>` at all** for anyone in the "+N" chip, those
tracks have no attached element and LiveKit pauses them by itself. The manual
`IntersectionObserver` subscription management in `VideoTrack/index.tsx:94-114` should **not** be
ported — it would fight a layout that already knows who is visible.

**Animating tile size does not thrash the encoder.** `RemoteVideoTrack` observes the element with
a `ResizeObserver` debounced at 100ms (`REACTION_DELAY`). Tile transitions run 220–300ms, so a
relayout costs one or two layer re-evaluations, not one per frame.

### What the adapter still needs from the backend

| #   | Gap                         | Impact                                                                                         | Fix                                                                                                                                                                                                               |
| --- | --------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Token TTL is 10 minutes** | **High** — a reconnect later in a call fails, because LiveKit needs a valid token to reconnect | Raise the TTL to the meeting duration, or have `reconnect()` refetch `getOrCreateMeetingsRoom`                                                                                                                    |
| 2   | `muteParticipant`           | Medium                                                                                         | `LivekitService#mute_microphone` **already exists**; expose it over GraphQL. The client token has no `roomAdmin`, and should not get one                                                                          |
| 3   | `preventCrop`               | Medium                                                                                         | Participant attributes is the natural home, but `setAttributes()` needs the `canUpdateOwnMetadata` grant, which the token lacks. Alternative with no backend work: an employee preference resolved by the adapter |
| 4   | `removeParticipant`         | Low                                                                                            | No backend method. Optional in the contract — omit it and the action disappears                                                                                                                                   |
| 5   | Recording                   | Low                                                                                            | No Egress at all. Optional in the contract — omit it and the button does not exist                                                                                                                                |

Only #1 blocks production. #4 and #5 are precisely the case the "optional callback = capability"
rule exists for.

---

## 7. Huddles: the call as a fact of the conversation

Scope so far: **1:1 in DMs**. A call is one item in the chat transcript
(`F0ChatCallMessage`) that MUTATES through `ringing → live → ended`, or lands on `missed`. One
call, one line in the history — not a live card plus a log line afterwards.

The chat renders it as a compact `F0MeetingCard`, natively rather than through a host render-prop:
the transcript is virtualized and a node of unknown height injected by the host is exactly what
throws off Virtuoso's measurements.

Starting a call needs **nothing** from the chat contract. The header action is host-provided and
`F0ChatHeaderAction.channelTypes` already restricts it to `["dm"]`, so F0Chat still knows nothing
about meetings.

### The two transports, and who owns what

GetStream carries the _fact_ that a call exists and its state, because it already fans messages
out to both sides over its websocket. LiveKit carries the call itself and, crucially, **dictates
the state**.

```
you press call
  │
  ├─→ startHuddle(channelId)
  │     backend: 1. LiveKit room `huddle_<channelId>` + token
  │              2. Stream message upsert, f0_call_state: ringing
  │              3. returns { serverUrl, token, roomName, messageId }
  │
  ├─→ the frontend mounts F0Meeting with the LiveKit adapter
  │
  └─→ Stream's websocket delivers the message to BOTH sides
        → the mapper turns it into F0ChatCallMessage → card with Join
        → they press Join → same (idempotent) mutation → token → they enter

LiveKit webhooks → backend → PATCH the same Stream message:
  participant_joined → state: live, participants
  participant_left   → participants
  room_finished      → state: ended (or missed) + duration
```

**The state comes from LiveKit's webhooks, not from the caller's browser.** If that tab dies,
`room_finished` still arrives and the card settles on `ended`. The other way round, cards stay
stuck on "in progress" forever — the classic failure of this pattern.

### What already fits

- **`upsert_system_message`** (`providers/base.rb:152`), implemented with
  `update_message_partial` (`stream/provider.rb:235`). The _upsert_ already exists to rewrite an
  existing message — it is how membership bursts coalesce — which is exactly the path a card
  mutating in place needs.
- **The `f0_*` convention**: custom fields ride untyped on the Stream message and the mapper
  reads them (`streamChatMappers/index.ts:409`). A call adds `f0_call_state`,
  `f0_call_started_at`, `f0_call_participants`.
- **`Providers::SystemEvent`** is provider-agnostic (`system_event.rb`): it gains `CallStarted`
  and `CallUpdated`, and no Stream-specific name leaves the provider.
- **Participant domain events already exist** (`meetings/events/participants/{joined,left}.rb`).
  Communications can consume them the way it already consumes membership events, so Meetings never
  has to know Communications exists.

### What is still missing

| #   | Gap                                      | Why                                                                                                                                                                                                        |
| --- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6   | **A room without a `Meetings::Meeting`** | `Rooms#get_or_create` requires a `meeting_id` **and** an `Attendee` (`repositories/rooms.rb:12-25`). A DM huddle has neither: it needs a `huddle_<channelId>` path authorized by Stream channel membership |
| 7   | Somewhere to put the call state          | `SystemMessage` is a `T::Struct` with `members`/`remaining_count` and nothing else. Either it gains optional fields, or a sibling `CallMessage` appears                                                    |
| 8   | The webhook consumer                     | The DTO exists (`dtos/webhooks/livekit.rb`) but nothing translates `room_finished` into a patch of the Stream message. This is the piece the paragraph above rests on                                      |
| 9   | Idempotency of `startHuddle`             | Two people pressing at once must not create two messages or two rooms. Natural key: a message id derived from the channel plus the room                                                                    |

**Gap #1 (the 10-minute token TTL) escalates from "worth fixing" to blocking here**: the receiver
asks for their token minutes after the caller did, so joining a call that has been running for a
while fails outright.

### What the mock does, and what it deliberately does not

`patterns/ApplicationFrame/mocks/useMockHuddle.ts` drives both directions. It lives in the frame
rather than in either mock package because the frame is what a real host is: the only thing that
sees both worlds. The chat mock knows nothing about rooms and the meeting mock knows nothing about
conversations — the same separation the production adapters will have.

Two details worth keeping if this is ever rewritten:

- The other side enters through `drivers.join(...)`, **not** by growing the seed. The mock reads
  its roster only when the room id changes, so a growing seed updates the card and leaves the room
  empty. Going through the driver is also the path a real `participant_joined` takes.
- `startedBy` is derived from the call's DIRECTION, never from its phase. Reading the phase made
  an incoming call claim you had started it the moment you answered.

There is **no ringing UI**: no sound, no timeout, no accept/decline surface. The receiving side is
the card in the conversation and nothing else, which is what Slack does. The WhatsApp model would
be a surface of its own.

---

## 8. Open decisions

- **Fullscreen and the banner.** Undecided whether fullscreen should cover the app banner or sit
  below it. The frame's content rect is already wired, so it is a one-line change once decided.
- **Density vs Meet.** They show 4 tiles in PiP; we show 9 in the floating window.
- **`PanelLeft` icon.** The generated icon set has no side-panel glyph, so the panel mode uses
  `Kanban` (two columns) as the closest shape. Icons come from `@factorialco/f0-core/assets` and
  `generate-icons` wipes the directory, so this needs a design request, not a local file.
- **Performance spike, still open.** The cost of animating `width`/`height` with ~25 live
  `<video>` elements has not been measured. Adaptive shapes make it slightly more relevant, since
  tiles now change proportion as well as size.
- **Recording consent.** Who owns the legal copy, and whether F0 should block the room until it
  is acknowledged. `F0MeetingRecording.consentNotice` exists but nothing enforces it.
- **One call at a time.** The surface assumes a single active meeting. Nothing enforces it, and
  per-DM huddles make it easy to trigger: calling from a second DM should ask before dropping the
  first.
- **Document Picture-in-Picture.** A real OS-level PiP window would replace the floating mode on
  supported browsers. Not started.
- **Huddles in groups.** The contract does not prevent it (`participants` is an array), but "who
  is in the call" in a group of twenty is a different design problem.
- **A crossed ownership boundary.** `F0Chat` (platform-ai-building-blocks) renders
  `F0MeetingCard` (experimental). The alternative — a host render-prop — avoids the crossing at
  the cost of an unknown-height row inside a virtualized transcript. Worth a decision from both
  owners rather than leaving it implicit.
