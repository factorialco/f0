# Copilot Actions Guide

This document explains how the copilot action system works and how to create new actions.

## Overview

Copilot actions are the bridge between the AI agent and the frontend UI. When the agent decides to display data, download files, or render a dashboard, it invokes a copilot action. The action's `render` callback produces the inline UI shown in the chat.

```
Agent (backend)
  │  emitFrontendTool("actionName", args)
  ▼
CopilotKit runtime
  │  matches registered action by name
  ▼
useCopilotAction({ render })
  │  calls render(props) with streamed args
  ▼
Inline chat UI (React component)
```

## Architecture

### Declarative registry

Actions are declared in a static array in `registry.ts`. Each entry is a React hook factory. At render time, `useRegisteredActions()` iterates the array and calls every factory.

```
┌─────────────────┐                 ┌────────────┐
│ useMyAction.tsx  │  ── import ──▶  │ registry   │
│ (exports hook)  │                 │ (array)    │
└─────────────────┘                 └────────────┘
                                         │
                                         ▼
                                 useRegisteredActions()
                                 iterates & calls all hooks
```

### Key files

| File                      | Purpose                                       |
| ------------------------- | --------------------------------------------- |
| `registry.ts`             | `copilotActions` array (all action factories) |
| `useRegisteredActions.ts` | Hook that invokes all configured factories    |
| `index.ts`                | Barrel with re-exports                        |

### Factory = hook

Each entry in the array is a React hook (starts with `use`). It calls `useCopilotAction()` from CopilotKit internally. The hook is called unconditionally on every render to satisfy Rules of Hooks.

## Action anatomy

```tsx
import { useCopilotAction } from "@copilotkit/react-core"

export const useMyAction = () => {
  useCopilotAction({
    name: "myAction",
    description: "What the agent sees when deciding to use this action",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "Title to display",
        required: true,
      },
    ],
    available: "frontend",
    render: (props) => {
      // props.args   — streamed arguments (Partial<T> during inProgress)
      // props.status — "inProgress" | "executing" | "complete"
      // props.result — optional return value from the action
      return <MyComponent title={props.args.title} />
    },
  })
}
```

## Step-by-step: create a new action

### 1. Create the action folder

```
actions/core/myAction/
├── useMyAction.tsx        # Hook with useCopilotAction
├── MyComponent.tsx        # Render component (optional, can inline)
├── types.ts               # Action-specific types
└── __stories__/
    └── MyComponent.stories.tsx
```

### 2. Define types

```tsx
// actions/core/myAction/types.ts
export type MyActionProps = {
  title: string
  items: Array<{ id: string; label: string }>
}
```

### 3. Create the render component

```tsx
// actions/core/myAction/MyComponent.tsx
import { MyActionProps } from "./types"

export function MyComponent({ title, items }: MyActionProps) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </div>
  )
}
```

### 4. Implement the hook

```tsx
// actions/core/myAction/useMyAction.tsx
import { useCopilotAction } from "@copilotkit/react-core"
import { MyComponent } from "./MyComponent"
import { MyActionProps } from "./types"

export const useMyAction = () => {
  useCopilotAction({
    name: "myAction",
    description: "...",
    parameters: [...],
    available: "frontend",
    render: (props) => {
      const args = props.args as Partial<MyActionProps>
      if (props.status === "inProgress" || !args.title) {
        return <></> // wait for args to stream in
      }
      return <MyComponent title={args.title} items={args.items ?? []} />
    },
  })
}
```

### 5. Add to the registry

Import your hook in `actions/registry.ts` and add it to the `copilotActions` array:

```ts
import { useMyAction } from "./core/myAction/useMyAction"

export const copilotActions: ActionFactory[] = [
  // ... existing actions
  useMyAction,
]
```

That's it. The action will automatically be invoked by `useRegisteredActions()`.

### 6. Add stories

Create `actions/core/myAction/__stories__/MyComponent.stories.tsx` with title `"AI/F0AiChat/Actions/MyComponent"`. Stories test the render component in isolation (no CopilotKit needed).

## Guidelines for render callbacks

### No hooks inside render

The `render` callback is **not** a React component — it's a function called by CopilotKit. You cannot use hooks (`useState`, `useEffect`, etc.) directly inside it. Extract a component if you need hooks.

### Handle streaming status

During streaming, `props.status === "inProgress"` and args arrive incrementally. Always type args as `Partial<T>`:

```tsx
render: (props) => {
  const args = props.args as Partial<MyActionProps>

  // Guard against incomplete args
  if (props.status === "inProgress" || !args.title) {
    return <></> // or a loading skeleton
  }

  return <MyComponent {...(args as MyActionProps)} />
}
```

### Canvas actions

For actions that open a canvas panel, use the `AutoOpenCanvas` helper:

```tsx
import { AutoOpenCanvas } from "../../../canvas/AutoOpenCanvas"
import { CanvasCard } from "../../../canvas/components/CanvasCard"

render: (props) => {
  // ... validate args ...

  const canvasContent: CanvasContent = {
    type: "myEntity",
    title: args.title,
    // ... entity-specific fields
  }

  return (
    <>
      <AutoOpenCanvas content={canvasContent} />
      <CanvasCard
        module="analytics"
        title={args.title}
        description="..."
        onOpen={() => openCanvas(canvasContent)}
      />
    </>
  )
}
```

`AutoOpenCanvas` auto-opens the canvas once on mount (skipped on small screens). The `CanvasCard` stays in the chat for manual re-opening.

## Testing

- Stories live in `__stories__/` co-located with the action
- Title convention: `"AI/F0AiChat/Actions/ComponentName"`
- Test the render component directly with mock data (no CopilotKit provider needed)
- For canvas actions, test the card component separately

## Reference table

| Pattern                     | Example                | Key file                            |
| --------------------------- | ---------------------- | ----------------------------------- |
| Simple render               | `messageSources`       | `useMessageSourcesAction.tsx`       |
| Render with streaming guard | `dataDownload`         | `useDataDownloadAction.tsx`         |
| Canvas + inline card        | `displayDashboard`     | `useDisplayDashboardAction.tsx`     |
| Non-blocking status         | `orchestratorThinking` | `useOrchestratorThinkingAction.tsx` |
