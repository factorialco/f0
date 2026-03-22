# Entity Refs — Architecture & Extension Guide

Entity refs are inline mentions embedded in AI chat markdown (e.g.
`<entity-ref type="person" id="42">Ana García</entity-ref>`). They render
as interactive hover cards that lazily resolve rich profile data.

## Directory overview

```
markdownRenderers/
├── ENTITY_REFS.md                         # this file
├── entityRef/
│   ├── EntityRef.tsx                      # dispatcher (reads registry)
│   ├── entityRefRegistry.ts               # register / lookup renderers
│   ├── __tests__/
│   │   ├── EntityRef.test.tsx
│   │   └── entityRefRegistry.test.tsx
│   └── entities/
│       └── person/
│           ├── PersonEntityRef.tsx         # "person" renderer (self-registers)
│           └── __tests__/
│               └── PersonEntityRef.test.tsx
```

## Shared infrastructure

### `entityRef/entityRefRegistry.ts`

A simple `Map<string, Component>` exposed via two functions:

| Function                            | Purpose                                 |
| ----------------------------------- | --------------------------------------- |
| `registerEntityRef(type, Renderer)` | Called at module scope by each renderer |
| `getEntityRefRenderer(type)`        | Used by `EntityRef` to dispatch         |

### `entityRef/EntityRef.tsx`

The dispatcher component mounted by rehype-raw when it encounters an
`<entity-ref>` tag. It extracts the plain-text label from children, looks up
the renderer in the registry, and renders it — or falls back to a `<span>`.

Side-effect imports at the top of this file ensure all entity modules are
loaded and registered before the first render.

## How to add a new entity ref

Use `entityRef/entities/person/` as a reference implementation.

### Step 1 — Define the profile type

In `F0AiChat/types.ts`, add a profile type for your entity:

```ts
export type TeamProfile = {
  id: string | number
  name: string
  memberCount: number
  avatarUrl?: string
}
```

### Step 2 — Add the resolver

Extend `EntityResolvers` in `F0AiChat/types.ts`:

```ts
export type EntityResolvers = {
  person?: (id: string) => Promise<PersonProfile>
  team?: (id: string) => Promise<TeamProfile>
  // ...
}
```

### Step 3 — Create the entity folder and renderer

Create `entityRef/entities/team/TeamEntityRef.tsx`:

```tsx
import { registerEntityRef } from "../../entityRefRegistry"
import type { EntityRefRendererProps } from "../../entityRefRegistry"

export function TeamEntityRef({ id, label }: EntityRefRendererProps) {
  // Fetch and render team data — see PersonEntityRef for the full pattern
  // (useAiChat → entityResolvers.team, cache, hover card, etc.)
}

registerEntityRef("team", TeamEntityRef)
```

The component receives `{ id, label }` and is responsible for its own data
fetching, caching, and presentation.

### Step 4 — Self-register

The `registerEntityRef("team", TeamEntityRef)` call at module scope (see
above) is all you need. No switch statements to update.

### Step 5 — Trigger registration

Add a side-effect import in `entityRef/EntityRef.tsx`:

```ts
import "./entities/team/TeamEntityRef"
```

This import ensures the module executes and the renderer is registered
before the first render. Both `AssistantMessage` and `UserMessage` render
entity refs through the shared `<Markdown>` component with
`markdownRenderers`, so a single registration point in `EntityRef.tsx`
is sufficient.

### Step 6 — Write tests

Create `entityRef/entities/team/__tests__/TeamEntityRef.test.tsx` covering:

- Rendering with and without a resolver
- Hover card content (mocked resolver)
- Profile caching (resolver called once per ID)
- Loading and error states

## Key principles

1. **Side-effect registration** — each renderer registers itself at module
   scope. The dispatcher never needs to know about specific types.
2. **Fallback to plain text** — unknown or unregistered types render
   children as a `<span>`, so the chat never breaks.
3. **Lazy data fetching** — profile data is fetched on hover, not on mount,
   to keep the initial render fast.
4. **Use PersonEntityRef as reference** — it demonstrates the full pattern:
   resolver lookup, caching, loading/error states, and hover card UI.
