# Canvas Entities

The canvas system renders content alongside the AI chat sidebar. Each **entity type** (dashboard, survey, goal, job-posting…) is a self-contained module inside `canvas/entities/`. The shared canvas infrastructure knows nothing about specific entities.

## Architecture

```
canvas/
├── types.ts                    # CanvasEntityDefinition contract
├── registry.ts                 # register/get entity definitions
├── index.ts                    # Barrel + triggers entity registrations
├── CANVAS_ENTITIES.md          # This file
├── components/
│   └── CanvasCard.tsx          # Shared inline card (module avatar + title + description + Open)
└── entities/
    └── dashboard/              # Example entity
        ├── index.tsx           # Entity definition + registration (side-effect)
        ├── DashboardCard.tsx   # Uses CanvasCard + dashboard-specific store logic
        ├── DashboardContent.tsx# Canvas body renderer
        ├── DashboardActions.tsx# Canvas header actions (Edit/Save/Discard)
        ├── DashboardContext.tsx# Shared state between actions & content
        ├── configStore.ts      # External store for saved configs
        └── types.ts            # DashboardCanvasContent type
```

The `CanvasPanel.tsx` lives in `F0AiChat/components/layout/` and is the generic shell (animation, title, close button). It delegates to the entity definition looked up from the registry.

## Shared components

### `CanvasCard`

All entity cards share the same visual structure: a module avatar, a title, a description, and an "Open" button. Use the `CanvasCard` component from `canvas/components/CanvasCard.tsx`:

```tsx
import { CanvasCard } from "../../components/CanvasCard"

export function SurveyCard({ title, onOpen }: SurveyCardProps) {
  return (
    <CanvasCard
      module="surveys" // ModuleId — determines the avatar
      title={title}
      description="Survey"
      onOpen={onOpen}
    />
  )
}
```

Props: `module` (ModuleId), `title` (string), `description` (string), `onOpen` (() => void).

If an entity needs extra logic (e.g. dashboard subscribes to a config store for live edits), wrap `CanvasCard` in an entity-specific card component. See `DashboardCard.tsx` for an example.

## How to add a new entity

### 1. Define the content type

In `F0AiChat/types.ts`, add your content type to the discriminated union:

```ts
// types.ts
export type SurveyCanvasContent = CanvasContentBase & {
  type: "survey"
  questions: SurveyQuestion[]
  // ... entity-specific fields
}

// Add to the union
export type CanvasContent = DashboardCanvasContent | SurveyCanvasContent
```

### 2. Create the entity folder

```
canvas/entities/survey/
├── index.tsx            # Entity definition + registration
├── SurveyCard.tsx       # Inline chat card (uses CanvasCard)
├── SurveyContent.tsx    # Canvas body
├── SurveyActions.tsx    # Canvas header actions (optional — return null if none)
├── SurveyContext.tsx    # (optional) Shared state via context
└── types.ts             # Re-export from main types
```

### 3. Implement the card

The card renders **inline in the chat** when the copilot action completes. Use `CanvasCard` for the standard layout:

```tsx
// SurveyCard.tsx
import { CanvasCard } from "../../components/CanvasCard"

export function SurveyCard({
  title,
  onOpen,
}: {
  title: string
  onOpen: () => void
}) {
  return (
    <CanvasCard
      module="surveys"
      title={title}
      description="Survey"
      onOpen={onOpen}
    />
  )
}
```

### 4. Implement the canvas content

Renders inside the canvas body area.

```tsx
// SurveyContent.tsx
export function SurveyContent({
  content,
  refreshKey,
}: {
  content: SurveyCanvasContent
  refreshKey: number
}) {
  return <SurveyBuilder questions={content.questions} />
}
```

### 5. Implement header actions

Renders in the header bar, **before** the close button (which is always present). Return `null` if no actions are needed.

```tsx
// SurveyActions.tsx
export function SurveyActions() {
  return <F0Button label="Publish" onClick={handlePublish} />
}
```

### 6. (Optional) Shared context

If your header actions and content need to communicate (e.g. edit mode state), create a context provider and register it as the entity's `wrapper`.

### 7. Register the entity

```tsx
// index.tsx
import { registerCanvasEntity } from "../../registry"
import type { CanvasEntityDefinition } from "../../types"
import { SurveyContent } from "./SurveyContent"
import { SurveyActions } from "./SurveyActions"
import type { SurveyCanvasContent } from "./types"

export const surveyCanvasEntity: CanvasEntityDefinition<SurveyCanvasContent> = {
  type: "survey",
  renderContent: ({ content, refreshKey }) => (
    <SurveyContent content={content} refreshKey={refreshKey} />
  ),
  renderHeaderActions: () => <SurveyActions />,
  // wrapper: ({ content, children }) => <SurveyProvider ...>{children}</SurveyProvider>,
}

registerCanvasEntity(surveyCanvasEntity)

export { SurveyCard } from "./SurveyCard"
export type { SurveyCanvasContent } from "./types"
```

### 8. Trigger registration

Add the import in `canvas/index.ts`:

```ts
import "./entities/survey"
```

### 9. Create the copilot action

In `actions/core/`, create `displaySurvey/useDisplaySurveyAction.tsx` that:

- Registers the copilot action via `useCopilotAction`
- Renders `SurveyCard` + `AutoOpenCanvas` in the `render` callback
- Imports the entity module to ensure registration
- Self-registers via `registerCopilotAction()` at module scope

### 10. Trigger action registration

Import your action module in `actions/index.ts`:

```ts
import "./core/displaySurvey/useDisplaySurveyAction"
```

## Key principles

1. **Card + Canvas = one module.** The inline card and the canvas content always go together. Both live in the same entity folder.
2. **Use `CanvasCard` for cards.** All entity cards share the same visual structure. Only wrap it if you need extra logic (e.g. store subscriptions).
3. **Entity modules are self-contained.** Each handles its own rendering, state, and persistence. The shared canvas is a thin shell.
4. **Registration via side-effect.** Importing the entity module registers it. No switch statements, no config objects.
5. **New entity = new folder.** Zero changes to `CanvasPanel.tsx` or the shared canvas infrastructure.
6. **Auto-open on receive.** Use the `AutoOpenCanvas` component in your copilot action's render to open the canvas immediately when the agent produces content.
