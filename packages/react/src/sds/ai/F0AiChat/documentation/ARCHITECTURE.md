# F0AiChat Architecture

## Directory structure

```
F0AiChat/
├── F0AiChat.tsx                     # Entry: provider composition + exports
├── F0AiFullscreenChat.tsx           # Fullscreen variant (mobile/standalone)
├── index.ts                         # Public API barrel
├── types.ts                         # Public types
├── internal-types.ts                # Internal state types
│
├── documentation/                   # All feature & system guides
│   ├── COPILOT_ACTIONS.md           # Guide for action development
│   ├── CANVAS_ENTITIES.md           # Guide for canvas entities
│   ├── ENTITY_REFS.md              # Guide for entity refs
│   └── CLARIFYING_QUESTIONS.md      # Guide for clarifying questions
│
├── actions/                         # Copilot action system (declarative)
│   ├── registry.ts                  # copilotActions array (all action factories)
│   ├── useRegisteredActions.ts      # Hook that invokes all configured factories
│   ├── index.ts                     # Barrel with re-exports
│   └── core/                        # Built-in actions
│       ├── clarifyingQuestion/      # Multi-step structured questions
│       ├── dataDownload/            # Excel/CSV download
│       ├── displayDashboard/        # Dashboard canvas + card
│       ├── forms/                   # Form actions (fill, submit, get state, present)
│       ├── messageCreditsWarning/   # Credit warning card
│       ├── messageSources/          # Source attribution
│       └── orchestratorThinking/    # Thinking visualization
│
├── canvas/                          # Canvas entity system (declarative)
│   ├── registry.ts                  # canvasEntities record (type → definition)
│   ├── types.ts                     # CanvasEntityDefinition contract
│   ├── index.ts                     # Barrel + re-exports
│   ├── components/                  # Shared canvas UI (CanvasCard, etc.)
│   └── entities/                    # One folder per entity type
│       └── dashboard/
│
├── components/
│   ├── markdownRenderers/           # Markdown rendering system
│   │   ├── MarkdownRenderers.tsx    # Renderer map (tag → component)
│   │   ├── index.ts                 # Public exports
│   │   ├── components/              # Tag renderers (Block, Table, etc.)
│   │   └── entityRef/               # Entity reference system (declarative)
│   │       ├── entityRefRegistry.ts # entityRefRenderers record + getEntityRefRenderer
│   │       ├── EntityRef.tsx        # Dispatcher (reads registry)
│   │       └── entities/            # One folder per entity type
│   │           ├── person/
│   │           ├── candidate/
│   │           └── jobPosting/
│   ├── messages/                    # Message rendering
│   ├── feedback/                    # Thumbs up/down + feedback modal
│   ├── history/                     # Thread history (list, search, CRUD)
│   ├── input/                       # Textarea, mentions, tool hints, clarifying questions
│   ├── layout/                      # Chat shell (window, header, canvas, resize)
│   └── shared/                      # Cross-cutting components
│
├── providers/                       # Global providers
│   ├── AiChatStateProvider.tsx      # Central state (context + refs)
│   └── AiChatTranslationsProvider.tsx
│
├── hooks/                           # Cross-cutting hooks
├── utils/                           # Helpers, fetch, storage
│
└── __stories__/                     # Composed component stories
```

## Three declarative registries

F0AiChat uses three registries, all following the same declarative configuration pattern:

| Registry        | Location                                           | Contains                            | Lookup used by           |
| --------------- | -------------------------------------------------- | ----------------------------------- | ------------------------ |
| **Actions**     | `actions/registry.ts`                              | Copilot action hook factories       | `useRegisteredActions()` |
| **Canvas**      | `canvas/registry.ts`                               | Entity definitions (card + content) | `CanvasPanel`            |
| **Entity refs** | `markdownRenderers/entityRef/entityRefRegistry.ts` | Inline mention renderers            | `EntityRef` dispatcher   |

All three work the same way:

1. Each plugin exports its definition (hook, entity definition, or component)
2. The registry file imports all plugins and declares them in a static array/record
3. A consumer reads from the registry at render time

Registries are static configuration — they never mutate at runtime.

## Extending each system

### Adding a copilot action

See `documentation/COPILOT_ACTIONS.md`.

1. Create `actions/core/<name>/use<Name>Action.tsx`
2. Export the hook
3. Add it to the `copilotActions` array in `actions/registry.ts`

### Adding a canvas entity

See `documentation/CANVAS_ENTITIES.md`.

1. Define content type in `types.ts`
2. Create `canvas/entities/<name>/` with card, content, and header
3. Export the `CanvasEntityDefinition` from the entity's `index.tsx`
4. Add it to the `canvasEntities` record in `canvas/registry.ts`
5. Create a copilot action that renders the entity card

### Adding an entity ref

See `documentation/ENTITY_REFS.md`.

1. Define profile type in `types.ts` + add resolver to `EntityResolvers`
2. Create `entityRef/entities/<name>/<Name>EntityRef.tsx`
3. Add it to the `entityRefRenderers` record in `entityRef/entityRefRegistry.ts`

### Using clarifying questions

See `documentation/CLARIFYING_QUESTIONS.md`.

Clarifying questions let the agent ask structured multi-option questions inline in the chat textarea. The user selects options (single or multiple), optionally types a custom answer, and a formatted summary is sent back as a chat message. Supports multi-step flows.

The feature is split between:

- **factorial-agent**: `askClarifyingQuestion` Mastra tool (emits `ClarifyingQuestion` frontend action)
- **f0 frontend**: `useClarifyingQuestionAction` hook + `ClarifyingQuestionPanel` component

### Adding a UI feature

Components live in `components/` organized by domain. Each domain folder contains components, `__tests__/`, `__stories__/`, and domain-specific hooks.

## Provider hierarchy

```
F0AiChatProvider (user-facing)
  └── AiChatStateProvider (central state)
        └── CopilotKit (runtime)
              └── CopilotFunctionBridge (bridges reset/load/send)
                    └── F0AiChat / F0AiFullscreenChat (UI)
                          └── useRegisteredActions() (all actions)
```

## Public API

`index.ts` exports a stable API. Internal paths should not be imported directly by consumers.

## Conventions

- **Named exports only** — no default exports
- **Declarative configuration** — actions, entities, and entity refs are declared in static arrays/records
- **Tests in `__tests__/`** — co-located within each domain folder
- **Stories in `__stories__/`** — co-located within each domain folder
- **Documentation in `documentation/`** — all feature and system guides centralized
