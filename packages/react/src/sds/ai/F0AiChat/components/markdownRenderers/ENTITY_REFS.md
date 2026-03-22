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
│   ├── entityRefRegistry.ts               # entityRefRenderers record + getEntityRefRenderer
│   ├── types.ts                           # EntityResolvers (imports from each entity)
│   ├── __tests__/
│   │   ├── EntityRef.test.tsx
│   │   └── entityRefRegistry.test.tsx
│   └── entities/
│       └── person/
│           ├── PersonEntityRef.tsx         # "person" renderer
│           ├── types.ts                   # PersonProfile type
│           └── __tests__/
│               └── PersonEntityRef.test.tsx
```

## Shared infrastructure

### `entityRef/entityRefRegistry.ts`

A static `Record<string, Component>` exposed via one function:

| Function                     | Purpose                                       |
| ---------------------------- | --------------------------------------------- |
| `getEntityRefRenderer(type)` | Used by `EntityRef` to dispatch to a renderer |

To add a new renderer, import the component and add it to the `entityRefRenderers` record.

### `entityRef/types.ts`

Contains `EntityResolvers` — the map of async resolver functions keyed by
entity type. Each resolver entry imports its profile type from the
corresponding entity folder, keeping the type ownership co-located with
the entity that uses it.

### `entityRef/EntityRef.tsx`

The dispatcher component mounted by rehype-raw when it encounters an
`<entity-ref>` tag. It extracts the plain-text label from children, looks up
the renderer in the registry, and renders it — or falls back to a `<span>`.

## How to add a new entity ref

Use `entityRef/entities/person/` as a reference implementation.

### Step 1 — Define the profile type

Create `entityRef/entities/team/types.ts` with the profile type for your
entity. Each entity owns its own types:

```ts
export type TeamProfile = {
  id: string | number
  name: string
  memberCount: number
  avatarUrl?: string
}
```

### Step 2 — Add the resolver to `entityRef/types.ts`

Import your profile type and extend `EntityResolvers`:

```ts
import { TeamProfile } from "./entities/team/types"

export type EntityResolvers = {
  person?: (id: string) => Promise<PersonProfile>
  team?: (id: string) => Promise<TeamProfile>
  // ...
}
```

### Step 3 — Create the renderer

Create `entityRef/entities/team/TeamEntityRef.tsx`:

```tsx
import type { EntityRefRendererProps } from "../../entityRefRegistry"

export function TeamEntityRef({ id, label }: EntityRefRendererProps) {
  // Fetch and render team data — see PersonEntityRef for the full pattern
  // (useAiChat → entityResolvers.team, cache, hover card, etc.)
}
```

The component receives `{ id, label }` and is responsible for its own data
fetching, caching, and presentation.

### Step 4 — Add to the registry

Import the component in `entityRef/entityRefRegistry.ts` and add it to the
`entityRefRenderers` record:

```ts
import { TeamEntityRef } from "./entities/team/TeamEntityRef"

const entityRefRenderers: Record<string, EntityRefRenderer> = {
  person: PersonEntityRef,
  team: TeamEntityRef,
}
```

### Step 5 — Write tests

Create `entityRef/entities/team/__tests__/TeamEntityRef.test.tsx` covering:

- Rendering with and without a resolver
- Hover card content (mocked resolver)
- Profile caching (resolver called once per ID)
- Loading and error states

## Key principles

1. **Declarative configuration** — each renderer is added to the
   `entityRefRenderers` record in `entityRefRegistry.ts`. No side-effects.
2. **Co-located types** — each entity defines its own profile type in
   `entities/<name>/types.ts`. `EntityResolvers` in `entityRef/types.ts`
   imports from each entity to build the resolver map.
3. **Fallback to plain text** — unknown or unregistered types render
   children as a `<span>`, so the chat never breaks.
4. **Lazy data fetching** — profile data is fetched on hover, not on mount,
   to keep the initial render fast.
5. **Use PersonEntityRef as reference** — it demonstrates the full pattern:
   resolver lookup, caching, loading/error states, and hover card UI.
