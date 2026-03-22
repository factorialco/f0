# F0AiChat Architecture

This document explains the architecture of the F0AiChat component, how to extend it with new copilot actions, canvas entities, and features.

## Directory structure

```
F0AiChat/
├── F0AiChat.tsx                     # Slim entry: provider composition + exports
├── F0AiFullscreenChat.tsx           # Fullscreen variant (mobile/standalone)
├── index.ts                         # Public API barrel (stable contract)
├── types.ts                         # Public types
├── internal-types.ts                # Internal state types
├── constants.ts                     # Chat width constants
│
├── actions/                         # Copilot action system (plugin-based)
│   ├── index.ts                     # Barrel with side-effect registrations
│   ├── registry.ts                  # registerCopilotAction / getRegisteredActions
│   ├── useRegisteredActions.ts      # Hook that invokes all registered factories
│   ├── COPILOT_ACTIONS.md           # Comprehensive guide for action development
│   ├── core/                        # Built-in actions (always registered)
│   │   ├── orchestratorThinking/
│   │   │   ├── useOrchestratorThinkingAction.tsx
│   │   │   └── types.ts
│   │   ├── messageSources/
│   │   │   ├── useMessageSourcesAction.tsx
│   │   │   ├── MessageSources.tsx
│   │   │   └── types.ts
│   │   ├── dataDownload/
│   │   │   ├── useDataDownloadAction.tsx
│   │   │   ├── DataDownload.tsx
│   │   │   └── types.ts
│   │   └── displayDashboard/
│   │       └── useDisplayDashboardAction.tsx
│   └── extensions/
│       └── upselling.ts            # UpsellingKit actions (decoupled from core)
│
├── canvas/                          # Canvas entity system (plugin-based)
│   ├── registry.ts                  # registerCanvasEntity / getCanvasEntity
│   ├── types.ts                     # CanvasEntityDefinition contract
│   ├── index.ts                     # Barrel + entity registrations
│   ├── AutoOpenCanvas.tsx           # Helper: auto-opens canvas on mount
│   ├── CANVAS_ENTITIES.md           # How to add new canvas entities
│   ├── components/
│   │   └── CanvasCard.tsx           # Shared inline card component
│   └── entities/
│       └── dashboard/               # Dashboard entity (template for new entities)
│
├── components/                        # UI components organized by domain
│   ├── messages/                    # Message rendering (thread, welcome, scroll)
│   │   ├── __tests__/
│   │   ├── __stories__/
│   │   ├── MessagesContainer.tsx
│   │   ├── AssistantMessage.tsx
│   │   ├── UserMessage.tsx
│   │   ├── ScrollShadow.tsx
│   │   ├── WelcomeScreen.tsx
│   │   ├── Thinking.tsx             # Collapsible thinking/reflection steps
│   │   └── types.ts                 # ThinkingProps, shared message types
│   ├── feedback/                    # Feedback system (thumbs up/down + modal)
│   │   ├── FeedbackModal.tsx
│   │   ├── TurnFeedback.tsx
│   │   └── FeedbackProvider.tsx
│   ├── history/                     # Thread history (list, group, pin/delete)
│   │   ├── ChatHistoryDialog.tsx    # Dialog shell: search, grouped list, empty state
│   │   ├── useChatHistory.ts        # Data fetching + CRUD (pin/unpin/delete)
│   │   ├── types.ts                 # DateGroup, ThreadGroup, ThreadActionHandlers
│   │   ├── utils.ts                 # getDateGroup(), groupThreadsByDate()
│   │   └── components/
│   │       ├── ThreadItem.tsx       # Single thread row with dropdown actions
│   │       ├── CollapsibleGroup.tsx  # Collapsible date-group section
│   │       └── ThreadListSkeleton.tsx # Loading skeleton (5 rows)
│   ├── input/                       # Input area
│   │   ├── __stories__/
│   │   ├── ChatInput.tsx            # Full input area (textarea + disclaimer + footer)
│   │   ├── ChatTextarea.tsx         # Context-aware textarea wrapper
│   │   ├── MentionPopover.tsx       # @mention autocomplete popover
│   │   ├── ToolHintSelector.tsx     # Tool hint chip selector
│   │   ├── TypewriterPlaceholder.tsx # Animated rotating placeholder
│   │   ├── useMentions.ts           # Mention detection + entity search
│   │   └── utils.ts                 # Input helper utilities
│   ├── layout/                      # Chat shell
│   │   ├── ChatWindow.tsx           # Sidebar window with resize + animation
│   │   ├── ChatHeader.tsx           # Header with history/expand/close
│   │   ├── CanvasPanel.tsx          # Entity-agnostic canvas shell
│   │   └── ResizeHandle.tsx
│   └── shared/
│       └── CopilotFunctionBridge.tsx # Bridges CopilotKit internals to state
│
├── providers/                       # Global providers
│   ├── AiChatStateProvider.tsx      # Central state (context + refs)
│   └── AiChatTranslationsProvider.tsx
│
├── hooks/                           # Cross-cutting hooks
│   ├── useMessageScroll.ts
│   └── useAutoOpenCanvas.ts         # Auto-open canvas on first content
│
├── utils/
│   ├── __tests__/
│   ├── fetchThreadMessages.ts
│   ├── local-storage.ts
│   └── turnUtils.ts
│
│
└── __stories__/                     # Stories for the composed components
    ├── F0AiChat.stories.tsx
    └── F0AiFullscreenChat.stories.tsx
```

## Two plugin systems

F0AiChat uses two parallel plugin registries, both following the same pattern:

### 1. Action registry (`actions/`)

Registers copilot action **hooks** (factories). Each factory calls `useCopilotAction()` internally.

```
┌─────────────┐   import-time    ┌──────────┐
│ action file  │ ───────────────▶ │ registry │
│ (side-effect)│  registerCopilot │ (Map)    │
└─────────────┘  Action(name, fn) └──────────┘
                                       │
                                       ▼
                               useRegisteredActions()
                               iterates & calls all hooks
```

### 2. Canvas registry (`canvas/`)

Registers canvas entity **definitions** (render functions + wrapper).

```
┌──────────────┐   import-time    ┌──────────┐
│ entity index  │ ───────────────▶ │ registry │
│ (side-effect) │  registerCanvas  │ (Map)    │
└──────────────┘  Entity(def)     └──────────┘
                                       │
                                       ▼
                               CanvasPanel looks up entity
                               by content.type at render time
```

Both registries are populated at module load time (side-effects) and never mutate after the first render. This guarantees Rules of Hooks safety for the action registry.

## How to add a new copilot action

See `actions/COPILOT_ACTIONS.md` for the comprehensive guide. Quick summary:

1. Create `actions/core/myAction/useMyAction.tsx`
2. Call `useCopilotAction()` and `registerCopilotAction()` at module scope
3. Add import to `actions/index.ts`

## How to add a new canvas entity

See `canvas/CANVAS_ENTITIES.md` for the full step-by-step guide.

**AutoOpenCanvas**: Use the `canvas/AutoOpenCanvas.tsx` helper component inside a copilot action's `render` callback to automatically open the canvas panel when content is first received. It skips auto-open on small screens. See `useDisplayDashboardAction` for a reference implementation.

Summary:

1. Define the content type in `types.ts`
2. Create the entity folder in `canvas/entities/`
3. Implement card, content, and actions components
4. Register via `registerCanvasEntity()` in the entity's `index.tsx`
5. Import the entity in `canvas/index.ts`
6. Create a copilot action in `actions/core/` that renders the card

## How to add a new feature

Features live in `components/` organized by domain. Each domain folder contains:

- Components (`.tsx`)
- Tests in `__tests__/`
- Stories in `__stories__/`
- Domain-specific hooks and providers

To add a new domain:

1. Create `components/myDomain/`
2. Add components, co-located tests, and stories
3. Import from `components/myDomain/` wherever needed

## Provider hierarchy

```
F0AiChatProvider (user-facing)
  └── AiChatStateProvider (central state, context + refs)
        └── CopilotKit (CopilotKit runtime)
              └── CopilotFunctionBridge (bridges reset/load/send)
                    └── F0AiChat or F0AiFullscreenChat (UI)
                          └── useRegisteredActions() (all actions)
```

## Public API

The `index.ts` barrel exports a stable API. Internal paths should not be imported directly by consumers. The only exceptions are deep imports for `CanvasPanel` (used by ApplicationFrame) and `AiChatStateProvider` (for the `useAiChat` hook, which is also re-exported from the barrel).

## Key conventions

- **Named exports only** — no default exports
- **Side-effect registration** — actions and entities register themselves when imported
- **Tests in `__tests__/`** — co-located within each domain folder
- **Stories in `__stories__/`** — co-located within each domain folder
- **Root `__stories__/`** — only for composed component stories (F0AiChat, F0AiFullscreenChat)
