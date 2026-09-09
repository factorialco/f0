import {
  F0AvatarEmoji,
  F0AvatarPerson,
  F0Button,
  F0Heading,
  F0Icon,
} from "@factorialco/f0-react"
import { Tabs } from "@factorialco/f0-react/dist/experimental"
import {
  Delete,
  Ellipsis,
  Filter,
  Pencil,
  Reaction,
  Search,
  Sliders,
} from "@factorialco/f0-react/icons/app"
import { useRef, useState } from "react"
import { createPortal } from "react-dom"

import { PROFILE_PEOPLE } from "../fixtures"
import { MenuDivider, MenuRow, MenuSurface } from "../MenuRow"
import {
  deleteConversationsForAgent,
  openConversation,
  startAgentConversation,
  startNewAgentConversation,
  useConversations,
} from "../one/conversationStore"
import { OnePromptBar } from "../OnePromptBar"
import { useProfile } from "../profileStore"
import { SectionHeader } from "../SectionHeader"
import {
  AGENT_TEMPLATES,
  templateForPrompt,
  type AgentTemplate,
} from "./agentsData"
import {
  createAgent,
  deleteAgent,
  renameAgent,
  setAgentEmoji,
  useAgents,
  type Agent,
} from "./agentStore"

/**
 * Agents — one screen with two faces, which is the whole idea across the
 * three frames:
 *
 *  - nothing created yet (Figma 2756:475476, which replaced 2739:463194):
 *    the templates above a composer PINNED to the canvas floor, i.e.
 *    "what do you want to delegate?". The earlier frame put that
 *    composer in the middle of the canvas; the new one shares New's
 *    scroller-plus-pinned-bar structure instead (per Oskar), which is
 *    also why the Tabs no longer scroll with the content;
 *  - at least one agent (Figma 2741:465055): the list, with a toolbar and
 *    "New agent".
 *
 * Briefing either one takes you to the full-screen conversation
 * (2741:466470) that configures it — see `startAgentConversation`.
 *
 * Gutters are 14px here, matching the frame throughout (navbar, tabs,
 * toolbar and grid all line up). The People screen had to use 24 because
 * OneDataCollection hardcodes it; this screen's toolbar is four buttons,
 * so there was nothing forcing the compromise.
 */

const TABS = [
  { id: "personal", label: "Personal" },
  { id: "templates", label: "Templates" },
] as const

type TabId = (typeof TABS)[number]["id"]

/**
 * Emoji offered by the card menu's "Change emoji" — the four the
 * templates use, plus a working set. A short curated grid rather than a
 * full picker: f0 has no emoji-picker component, and the point here is
 * that an agent's face is yours to change, not to ship an input method.
 */
const EMOJI_CHOICES = [
  "🧭",
  "🧾",
  "📈",
  "🔍",
  "🤖",
  "📊",
  "🗂️",
  "⚡",
  "🎯",
  "🛠️",
  "📮",
  "🧠",
]

/**
 * A template or a created agent — the card is the same in both frames.
 *
 * The clickable surface is a `button` and the "⋮" is its SIBLING, not a
 * child: a button inside a button is invalid HTML and the inner one's
 * clicks would fire the outer one too.
 */
function AgentCard({
  emoji,
  name,
  description,
  onClick,
  onRename,
  onEmoji,
  onDelete,
}: {
  emoji: string
  name: string
  description: string
  onClick: () => void
  /** Created agents only — a template has nothing to edit or delete. */
  onRename?: (name: string) => void
  onEmoji?: (emoji: string) => void
  onDelete?: () => void
}) {
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const [menuPos, setMenuPos] = useState<{ left: number; top: number } | null>(
    null
  )
  const [picking, setPicking] = useState(false)
  const [renaming, setRenaming] = useState(false)
  const [draft, setDraft] = useState(name)
  const editable = Boolean(onRename && onEmoji && onDelete)

  const closeMenu = () => {
    setMenuPos(null)
    setPicking(false)
  }

  const openMenu = (event: React.MouseEvent) => {
    event.stopPropagation()
    const rect = menuButtonRef.current?.getBoundingClientRect()
    if (!rect) return
    setPicking(false)
    // Right-aligned to the button: the menu hangs from the card's own
    // corner, and a left-aligned one would run off a card at the edge of
    // the grid.
    setMenuPos((pos) =>
      pos ? null : { left: rect.right, top: rect.bottom + 4 }
    )
  }

  const commitRename = () => {
    onRename?.(draft)
    setRenaming(false)
  }

  // Portal events propagate through the REACT tree, not the DOM tree — so
  // without these stops every menu click would also fire the card's own
  // onClick and open the agent behind the menu.
  const menu = menuPos && (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={(event) => {
          event.stopPropagation()
          closeMenu()
        }}
      />
      <div
        onClick={(event) => event.stopPropagation()}
        className="fixed z-50"
        style={{
          left: menuPos.left,
          top: menuPos.top,
          transform: "translateX(-100%)",
          transformOrigin: "top right",
        }}
      >
        {picking ? (
          <MenuSurface className="w-[196px]">
            <div className="px-2 pb-1 pt-1 text-sm font-medium text-f1-foreground-secondary">
              Change emoji
            </div>
            <div className="grid grid-cols-6 gap-0.5">
              {EMOJI_CHOICES.map((choice) => (
                <button
                  key={choice}
                  onClick={() => {
                    onEmoji?.(choice)
                    closeMenu()
                  }}
                  aria-label={`Use ${choice}`}
                  className={`flex size-7 cursor-pointer items-center justify-center rounded-[8px] text-[16px] leading-none hover:bg-f1-background-secondary ${
                    choice === emoji ? "bg-f1-background-secondary" : ""
                  }`}
                >
                  {choice}
                </button>
              ))}
            </div>
          </MenuSurface>
        ) : (
          <MenuSurface>
            <MenuRow
              icon={<F0Icon icon={Pencil} size="md" color="default" />}
              label="Rename"
              onClick={() => {
                closeMenu()
                setDraft(name)
                setRenaming(true)
              }}
            />
            <MenuRow
              icon={<F0Icon icon={Reaction} size="md" color="default" />}
              label="Change emoji"
              onClick={() => setPicking(true)}
            />
            <MenuDivider />
            <MenuRow
              icon={<F0Icon icon={Delete} size="md" color="critical" />}
              label="Delete agent"
              onClick={() => {
                closeMenu()
                onDelete?.()
              }}
            />
          </MenuSurface>
        )}
      </div>
    </>
  )

  return (
    /* TRANSPARENT ground (Oskar): the outline is what makes it a card, so
       the canvas shows through. It applies to the created-agent cards as
       well as the templates — the two faces use this same component, and
       filled on one with outlined on the other would read as a bug. Over
       the #FCFCFC canvas it was only three points of grey anyway. */
    <div className="group relative flex min-w-0 flex-1 overflow-hidden rounded-xl border border-solid border-f1-border-secondary hover:border-f1-border">
      {menu && createPortal(menu, document.body)}
      <button
        onClick={onClick}
        className="f0c-pressable flex min-w-0 flex-1 cursor-pointer flex-col items-start gap-2.5 p-4 text-left"
      >
        <F0AvatarEmoji emoji={emoji} size="lg" />
        <div className="flex w-full min-w-0 flex-col">
          {renaming ? (
            // Inline, like the Recents rows rename — a dialog for one
            // field would be heavier than the edit itself.
            <input
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              onBlur={commitRename}
              onKeyDown={(e) => {
                e.stopPropagation()
                if (e.key === "Enter") commitRename()
                if (e.key === "Escape") setRenaming(false)
              }}
              className="w-full border-0 bg-transparent text-lg font-semibold text-f1-foreground outline-none"
            />
          ) : (
            <span className="w-full truncate text-lg font-semibold text-f1-foreground">
              {name}
            </span>
          )}
          {/* Two lines with an ellipsis, per the frame — the descriptions
              are written to fit, and this keeps a longer one from making
              its card taller than the row. */}
          <span className="line-clamp-2 w-full text-base text-f1-foreground-secondary">
            {description}
          </span>
        </div>
      </button>
      {editable && (
        <button
          ref={menuButtonRef}
          onClick={openMenu}
          aria-label={`Options for ${name}`}
          // Hover-gated to FINE pointers only: on touch there is no
          // hover, so the "⋮" would be permanently invisible and the card
          // would lose rename/emoji/delete entirely. Same rule, and the
          // same darker-not-white hover, as the Recents rows.
          className={`f0c-pressable absolute right-2 top-2 flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[6px] transition-opacity duration-100 hover:bg-f1-background-secondary-hover ${
            menuPos
              ? ""
              : "[@media(hover:hover)_and_(pointer:fine)]:opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100"
          }`}
        >
          <F0Icon icon={Ellipsis} size="sm" color="secondary" />
        </button>
      )}
    </div>
  )
}

/** Nothing created yet: the brief, then the templates to pick from. */
function AgentsEmptyState({
  onBrief,
  onPickTemplate,
}: {
  onBrief: (prompt: string) => void
  onPickTemplate: (template: AgentTemplate) => void
}) {
  const profile = useProfile()
  const person = PROFILE_PEOPLE[profile]
  // Two per row, per the frame — the templates read as a considered set
  // rather than a scrolling catalogue.
  const rows = [AGENT_TEMPLATES.slice(0, 2), AGENT_TEMPLATES.slice(2, 4)]
  return (
    /* Scroller + PINNED composer, which is New's own shape one level
       deeper (Figma 2756:475476, replacing 2739:463194 where the composer
       sat in the middle of the canvas). Home hands this screen an
       unpadded `overflow-hidden` box for `fullWidthView`, and that is
       exactly the room the split needs.
       NO `justify-between` anywhere: the ~80px above the composer is the
       natural leftover of a top-aligned `flex-1` scroller, not
       distributed space. That is also why the layout survives f0's Tabs
       measuring 56px against the frame's 44 — the frame's is a resized
       instance, so every absolute y in it sits 12px low and none of them
       is an implementation target. */
    <div className="flex min-h-0 w-full flex-1 flex-col items-center">
      <div className="home-canvas-scroll flex min-h-0 w-full flex-1 flex-col items-center overflow-y-auto">
        {/* 14px inner gutter — the same 14 the navbar group and the list
            toolbar use — so 712 of column gives 684 of content and the
            cards land on 332. `pt-9` is the column's own 16px top pad
            plus the empty block's 20px. */}
        {/* No top padding (Oskar, 2026-09-04): 36px on top of the empty
            block's own py-8 left the column cramped once the viewport got
            short, and the block already brings its own 32px. */}
        {/* `gap-8` and the greeting row below are Home's, not this
            screen's: Oskar asked for the no-agents face to read like the
            Needs-you canvas, and the frame draws exactly that shape — a
            left-aligned avatar beside the question, then a section
            header, then the content. The centred emoji hero it replaces
            read as an empty state; this reads as a home.
            `px-3.5` stays: 14px of gutter is what turns 712 of column
            into the frame's 684 of content, and it is this screen's own
            measurement. */}
        {/* NEW's column, exactly: 712 wide, `pt-6` of top pad, no inner
            gutter (Oskar, 2026-09-08: "quiero que los elementos coincidan
            con los de New... el avatar y la frase que empiece a la misma
            altura"). The `px-3.5` that used to be here made the frame's
            684-inside-712 content, which put the avatar 13px right of
            New's and the composer 28px narrower — the discrepancy that
            was already flagged as an open question. Matching New settles
            it against the frame's inner gutter, deliberately.
            This screen is `fullWidthView`, so Home hands it an UNPADDED
            box and the 24px of top pad has to be its own. */}
        <div className="flex w-[712px] max-w-full flex-col gap-8 pt-6">
          <div className="flex items-center gap-3">
            {/* The 40px avatar of Home's greeting WITHOUT its wave and its
                "how was your day" badge: those belong to the day
                greeting, not here. Same face, same size, no borrowed
                semantics — which is also why this does not import
                PulseGreetingAvatar. */}
            <F0AvatarPerson
              firstName={person.firstName}
              lastName={person.lastName}
              src={person.avatar}
              size="lg"
            />
            <F0Heading
              content="What do you want to delegate?"
              variant="heading"
              as="h1"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            {/* The same component the "Needs you" header uses, so the two
                labels share their metrics instead of being two 14px
                mediums that drift. */}
            <SectionHeader
              title="Templates"
              action={<F0Button variant="ghost" size="sm" label="View all" />}
            />
            <div className="flex flex-col gap-5">
              {rows.map((row, index) => (
                <div key={index} className="flex items-stretch gap-5">
                  {row.map((template) => (
                    <AgentCard
                      key={template.id}
                      emoji={template.emoji}
                      name={template.name}
                      description={template.description}
                      onClick={() => onPickTemplate(template)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* THE SAME composer as New (per Oskar) — f0's real
          F0AiChatTextArea via OnePromptBar, so the autosize, the focus
          glow and the type-ahead all come with it. Only the placeholder
          and where a submit goes are ours. It stays OURS rather than
          moving to Home's pinned bar: the suggestions bridge listens on
          `document`, so two mounted instances fight for the events, and
          this one has to disappear on the list face.
          `pb-1.5` is the frame's 6px floor, verbatim from New's wrapper. */}
      <div className="w-[712px] max-w-full shrink-0 pb-1.5">
        <OnePromptBar
          placeholder="Describe a task you want to delegate…"
          onSubmit={onBrief}
        />
      </div>
    </div>
  )
}

/** At least one agent: the toolbar and the grid (Figma 2741:465636). */
function AgentsList({
  agents,
  onOpen,
  onNew,
  onDelete,
}: {
  agents: Agent[]
  onOpen: (agent: Agent) => void
  onNew: () => void
  onDelete: (agent: Agent) => void
}) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between px-3.5 pt-5">
        <F0Button
          variant="outline"
          size="md"
          icon={Filter}
          hideLabel
          label="Filter agents"
        />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <F0Button
              variant="outline"
              size="md"
              icon={Search}
              hideLabel
              label="Search agents"
            />
            <F0Button
              variant="outline"
              size="md"
              icon={Sliders}
              hideLabel
              label="Agent list settings"
            />
          </div>
          <span
            aria-hidden
            className="h-4 w-px shrink-0 bg-f1-background-secondary"
          />
          <F0Button
            variant="default"
            size="md"
            label="New agent"
            onClick={onNew}
          />
        </div>
      </div>
      {/* A GRID, not a flex row: the frame lays three across and its cards
          are `flex-1`, which with a single agent would stretch that one
          card across the whole 1152 canvas. Three fixed columns keep a
          lone agent card the same size as it will be once there are
          three, and a fourth simply starts a new row. */}
      <div className="grid w-full grid-cols-1 items-stretch gap-4 px-3.5 py-5 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            emoji={agent.emoji}
            name={agent.name}
            description={agent.description}
            onClick={() => onOpen(agent)}
            onRename={(name) => renameAgent(agent.id, name)}
            onEmoji={(emoji) => setAgentEmoji(agent.id, emoji)}
            onDelete={() => onDelete(agent)}
          />
        ))}
      </div>
    </div>
  )
}

export function AgentsScreen() {
  const agents = useAgents()
  const { conversations } = useConversations()
  const [tab, setTab] = useState<TabId>("personal")

  const brief = (template: AgentTemplate, prompt: string) => {
    const agent = createAgent(template)
    startAgentConversation({
      agentId: agent.id,
      agentName: agent.name,
      templateId: template.id,
      prompt,
    })
  }

  /**
   * Opening an agent REOPENS the conversation you had with it — briefing
   * it is what created the agent, so that thread almost always exists.
   * Starting a fresh one would put a synthetic "Open Expense manager" in
   * the transcript as though you had typed it, which is exactly the kind
   * of fake turn the context cards were introduced to avoid.
   *
   * The fallback only fires for an agent with no thread left (its
   * conversation deleted, or the list seeded by hand).
   */
  /**
   * Deleting an agent takes its CONVERSATIONS with it (per Oskar, so the
   * screen can be brought back to the empty state). Without that the
   * thread would be orphaned and unreachable: Recents filters agent
   * conversations out, and the Agents group only lists live agents.
   */
  const removeAgent = (agent: Agent) => {
    deleteConversationsForAgent(agent.id)
    deleteAgent(agent.id)
  }

  const openAgent = (agent: Agent) => {
    const existing = [...conversations]
      .filter((c) => c.agentId === agent.id)
      .sort((a, b) => b.lastActiveAt - a.lastActiveAt)[0]
    if (existing) {
      openConversation(existing.id)
      return
    }
    startAgentConversation({
      agentId: agent.id,
      agentName: agent.name,
      templateId: agent.templateId,
      prompt: `Pick up where we left off with ${agent.name}`,
    })
  }

  // The Templates tab is the same grid the empty state offers, which is
  // what the tab means — every template, whether or not you have one.
  // "New agent" no longer routes here: it opens a conversation instead.
  const showBrief = tab === "templates" || agents.length === 0

  return (
    /* The Tabs are FIXED under the navbar and only the column below them
       scrolls (the frame pins the Tabs instance at y=60). The scroller
       used to be this root, which meant the Tabs scrolled away with the
       content AND nothing could be pinned inside it — so it had to move
       inward before the composer could sit on the floor.
       f0's `Tabs` exposes no `className`, so `shrink-0` needs a wrapper. */
    <div className="flex min-h-0 w-full flex-1 flex-col">
      {/* NO tabs while you have no agents: the frame draws the bar hidden
          on this face, and it is right — Personal would be empty and
          Templates is already what you are looking at, so the bar offered
          a choice between one thing and nothing. It also costs the 56px
          that stopped this reading like Home. They come back the moment
          there is a list to switch to. */}
      {agents.length > 0 && (
        <div className="w-full shrink-0">
          <Tabs
            tabs={TABS.map((t) => ({ id: t.id, label: t.label }))}
            activeTabId={tab}
            setActiveTabId={(id: string) => {
              // GUARD, not a formality: f0's `Tabs` calls this from an effect
              // whose dependency is the callback's IDENTITY, so an inline
              // arrow makes it fire on EVERY render. Any state set here would
              // be reset continuously — which is how the "New agent" button
              // looked dead when it flipped a flag. (Performance.tsx dodges
              // the same effect by remounting Tabs with a `key`.)
              if (id === tab) return
              setTab(id as TabId)
            }}
          />
        </div>
      )}
      {showBrief ? (
        <AgentsEmptyState
          onBrief={(prompt) => brief(templateForPrompt(prompt), prompt)}
          onPickTemplate={(template) =>
            brief(template, `Set up a ${template.name} agent for me`)
          }
        />
      ) : (
        /* The list keeps its own scroller — `pb-6` stays on the CONTENT
           wrapper, not on the `overflow-y-auto` element, where a bottom
           pad is not honoured at the end of the scroll. */
        <div className="home-canvas-scroll flex min-h-0 w-full flex-1 flex-col overflow-y-auto">
          <div className="flex w-full flex-col pb-6">
            <AgentsList
              agents={agents}
              onOpen={openAgent}
              onNew={startNewAgentConversation}
              onDelete={removeAgent}
            />
          </div>
        </div>
      )}
    </div>
  )
}
