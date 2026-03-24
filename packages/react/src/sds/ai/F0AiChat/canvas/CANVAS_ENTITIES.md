# Canvas Entities

The canvas system renders content alongside the AI chat sidebar. Each **entity type** (dashboard, survey, goal, job-posting…) is a self-contained module inside `canvas/entities/`. The shared canvas infrastructure knows nothing about specific entities.

## Architecture

```
canvas/
├── types.ts                    # CanvasEntityDefinition contract
├── registry.ts                 # canvasEntities record (type → definition)
├── index.ts                    # Barrel + re-exports
├── CANVAS_ENTITIES.md          # This file
├── components/
│   ├── CanvasCard.tsx          # Shared inline card (module avatar + title + description + Open/Close toggle)
│   └── CloseCanvasButton.tsx   # Shared close button for canvas headers
└── entities/
    └── dashboard/              # Example entity
        ├── index.tsx           # Entity definition (exported)
        ├── DashboardCard.tsx   # Uses CanvasCard + dashboard-specific store logic
        ├── DashboardContent.tsx# Canvas body renderer
        ├── DashboardHeader.tsx # Full header (title + edit actions + close button)
        ├── DashboardContext.tsx# Shared state between header & content
        ├── configStore.ts      # External store for saved configs
        └── types.ts            # DashboardCanvasContent type
```

The `CanvasPanel.tsx` lives in `F0AiChat/components/layout/` and is the generic shell (animation + body scroll area). It delegates both **header** and **content** rendering entirely to the entity definition looked up from the registry.

## Shared components

### `CanvasCard`

All entity cards share the same visual structure: a module avatar, a title, a description, and a toggle button. The card automatically switches between "Open" and "Close" and shows a focus ring when active. Use the `CanvasCard` component from `canvas/components/CanvasCard.tsx`:

```tsx
import { CanvasCard } from "../../components/CanvasCard"

export function SurveyCard({
  title,
  onOpen,
  onClose,
  isActive,
}: SurveyCardProps) {
  return (
    <CanvasCard
      module="surveys"
      title={title}
      description="Survey"
      onOpen={onOpen}
      onClose={onClose}
      isActive={isActive}
    />
  )
}
```

Props: `module` (ModuleId), `title` (string), `description` (string), `onOpen` (() => void), `onClose` (() => void), `isActive` (boolean).

If an entity needs extra logic (e.g. dashboard subscribes to a config store for live edits), wrap `CanvasCard` in an entity-specific card component. See `DashboardCard.tsx` for an example.

### `CloseCanvasButton`

Shared close button used by all entity headers. Import from `canvas/components/CloseCanvasButton.tsx`:

```tsx
import { CloseCanvasButton } from "../../components/CloseCanvasButton"
;<CloseCanvasButton onClick={onClose} />
```

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
├── index.tsx            # Entity definition (exported)
├── SurveyCard.tsx       # Inline chat card (uses CanvasCard)
├── SurveyContent.tsx    # Canvas body
├── SurveyHeader.tsx     # Full header (title + actions + close)
├── SurveyContext.tsx    # (optional) Shared state via context
└── types.ts             # Re-export from main types
```

### 3. Implement the card

The card renders **inline in the chat** when the copilot action completes. Use `CanvasCard` for the standard layout:

```tsx
// SurveyCard.tsx
import { CanvasCard } from "../../components/CanvasCard"
import { useAiChat } from "../../../providers/AiChatStateProvider"

export function SurveyCard({
  title,
  onOpen,
  toolCallId,
}: {
  title: string
  onOpen: () => void
  toolCallId?: string
}) {
  const { canvasContent, closeCanvas } = useAiChat()

  const isActive =
    canvasContent?.type === "survey" &&
    canvasContent.toolCallId != null &&
    canvasContent.toolCallId === toolCallId

  return (
    <CanvasCard
      module="surveys"
      title={title}
      description="Survey"
      onOpen={onOpen}
      onClose={() => closeCanvas()}
      isActive={isActive}
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

### 5. Implement the header

The entity controls the full header — title, actions, and close button. Use `CloseCanvasButton` for the close button:

```tsx
// SurveyHeader.tsx
import { OneEllipsis } from "@/components/OneEllipsis"
import { CloseCanvasButton } from "../../components/CloseCanvasButton"

export function SurveyHeader({
  title,
  onClose,
}: {
  title: string
  onClose: () => void
}) {
  return (
    <div className="flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary px-7 py-5">
      <OneEllipsis
        tag="h2"
        className="min-w-0 flex-1 text-2xl font-semibold text-f1-foreground"
      >
        {title}
      </OneEllipsis>
      {/* entity-specific actions go here */}
      <CloseCanvasButton onClick={onClose} />
    </div>
  )
}
```

### 6. (Optional) Shared context

If your header and content need to communicate (e.g. edit mode state), create a context provider and register it as the entity's `wrapper`.

### 7. Export the entity definition

```tsx
// index.tsx
import type { CanvasEntityDefinition } from "../../types"
import { SurveyContent } from "./SurveyContent"
import { SurveyHeader } from "./SurveyHeader"
import type { SurveyCanvasContent } from "./types"

export const surveyCanvasEntity: CanvasEntityDefinition<SurveyCanvasContent> = {
  type: "survey",
  renderContent: ({ content, refreshKey }) => (
    <SurveyContent content={content} refreshKey={refreshKey} />
  ),
  renderHeader: ({ content, onClose }) => (
    <SurveyHeader title={content.title} onClose={onClose} />
  ),
  // wrapper: ({ content, children }) => <SurveyProvider ...>{children}</SurveyProvider>,
}

export { SurveyCard } from "./SurveyCard"
export type { SurveyCanvasContent } from "./types"
```

### 8. Add to the registry

Import the entity definition in `canvas/registry.ts` and add it to the record:

```ts
import { surveyCanvasEntity } from "./entities/survey"

const canvasEntities: Record<string, CanvasEntityDefinition<any>> = {
  dashboard: dashboardCanvasEntity,
  survey: surveyCanvasEntity,
}
```

### 9. Create the copilot action

In `actions/core/`, create `displaySurvey/useDisplaySurveyAction.tsx` that:

- Calls `useCopilotAction` with the action definition
- Renders `SurveyCard` + `AutoOpenCanvas` in the `render` callback

Then add the hook to the `copilotActions` array in `actions/registry.ts`.

### 10. Write tests

Create a `__tests__/` folder inside the entity directory with tests for each component:

```
canvas/entities/survey/
├── __tests__/
│   ├── SurveyCard.test.tsx
│   ├── SurveyHeader.test.tsx
│   └── SurveyContent.test.tsx
```

Use vitest + testing-library. Test rendering, user interactions (open/close toggle, active state), and integration with canvas context. See `canvas/entities/dashboard/__tests__/` for reference.

## Key principles

1. **Card + Canvas = one module.** The inline card and the canvas content always go together. Both live in the same entity folder.
2. **Use `CanvasCard` for cards.** All entity cards share the same visual structure. Only wrap it if you need extra logic (e.g. store subscriptions).
3. **Entity controls header and content.** Each entity renders its own complete header (title, actions, close button) and content. The shared canvas is a thin shell that only handles animation and scroll area.
4. **Use `CloseCanvasButton` for close.** Every header should use the shared `CloseCanvasButton` component for a consistent close affordance.
5. **Declarative configuration.** Export the entity definition and add it to the record in `registry.ts`. No switch statements, no side-effects.
6. **New entity = new folder.** Zero changes to `CanvasPanel.tsx` or the shared canvas infrastructure.
7. **Auto-open on receive.** Use the `AutoOpenCanvas` component in your copilot action's render to open the canvas immediately when the agent produces content.
8. **Write tests for every entity.** Each entity should have tests in a `__tests__/` subfolder covering rendering and interactions.
