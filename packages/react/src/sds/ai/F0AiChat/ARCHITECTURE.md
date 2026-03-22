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
├── actions/                         # Copilot action system (plugin-based)
│   ├── registry.ts                  # registerCopilotAction / getRegisteredActions
│   ├── useRegisteredActions.ts      # Hook that invokes all registered factories
│   ├── index.ts                     # Barrel with side-effect registrations
│   ├── COPILOT_ACTIONS.md           # Guide for action development
│   ├── core/                        # Built-in actions
│   └── extensions/                  # Decoupled/optional actions
│
├── canvas/                          # Canvas entity system (plugin-based)
│   ├── registry.ts                  # registerCanvasEntity / getCanvasEntity
│   ├── types.ts                     # CanvasEntityDefinition contract
│   ├── index.ts                     # Barrel + entity registrations
│   ├── AutoOpenCanvas.tsx           # Auto-opens canvas on mount
│   ├── CANVAS_ENTITIES.md           # Guide for canvas entities
│   ├── components/                  # Shared canvas UI (CanvasCard, etc.)
│   └── entities/                    # One folder per entity type
│
├── components/
│   ├── markdownRenderers/           # Markdown rendering system
│   │   ├── MarkdownRenderers.tsx    # Renderer map (tag → component)
│   │   ├── index.ts                 # Public exports
│   │   ├── ENTITY_REFS.md          # Guide for entity refs
│   │   ├── components/              # Tag renderers (Block, Table, etc.)
│   │   └── entityRef/               # Entity reference system (plugin-based)
│   │       ├── entityRefRegistry.ts # registerEntityRef / getEntityRefRenderer
│   │       ├── EntityRef.tsx        # Dispatcher (reads registry)
│   │       └── entities/            # One folder per entity type
│   │           └── person/
│   ├── messages/                    # Message rendering
│   ├── feedback/                    # Thumbs up/down + feedback modal
│   ├── history/                     # Thread history (list, search, CRUD)
│   ├── input/                       # Textarea, mentions, tool hints
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

## Three plugin registries

F0AiChat uses three registries, all following the same side-effect pattern:

| Registry        | Location                                           | Registers                           | Lookup used by           |
| --------------- | -------------------------------------------------- | ----------------------------------- | ------------------------ |
| **Actions**     | `actions/registry.ts`                              | Copilot action hooks                | `useRegisteredActions()` |
| **Canvas**      | `canvas/registry.ts`                               | Entity definitions (card + content) | `CanvasPanel`            |
| **Entity refs** | `markdownRenderers/entityRef/entityRefRegistry.ts` | Inline mention renderers            | `EntityRef` dispatcher   |

All three work the same way:

1. A `register*()` function adds to a `Map` at module scope
2. Each plugin calls `register*()` as a side-effect when imported
3. A barrel `index.ts` imports all plugins to trigger registration
4. A consumer reads from the registry at render time

Registries are populated at module load and never mutate after the first render.

## Extending each system

### Adding a copilot action

See `actions/COPILOT_ACTIONS.md`.

1. Create `actions/core/<name>/use<Name>Action.tsx`
2. Call `useCopilotAction()` + `registerCopilotAction()` at module scope
3. Import in `actions/index.ts`

### Adding a canvas entity

See `canvas/CANVAS_ENTITIES.md`.

1. Define content type in `types.ts`
2. Create `canvas/entities/<name>/` with card, content, and header
3. Register via `registerCanvasEntity()` in the entity's `index.tsx`
4. Import in `canvas/index.ts`
5. Create a copilot action that renders the entity card

### Adding an entity ref

See `markdownRenderers/ENTITY_REFS.md`.

1. Define profile type in `types.ts` + add resolver to `EntityResolvers`
2. Create `entityRef/entities/<name>/<Name>EntityRef.tsx`
3. Call `registerEntityRef()` at module scope
4. Import in `entityRef/EntityRef.tsx`

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
- **Side-effect registration** — actions, entities, and entity refs register themselves when imported
- **Tests in `__tests__/`** — co-located within each domain folder
- **Stories in `__stories__/`** — co-located within each domain folder
