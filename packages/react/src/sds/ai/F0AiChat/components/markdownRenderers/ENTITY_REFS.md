# Entity Refs — Architecture & Extension Guide

Entity refs are inline mentions embedded in AI chat markdown (e.g.
`<entity-ref type="person" id="42">Ana García</entity-ref>`). They render
as interactive hover cards that lazily resolve rich profile data.

## Directory overview

```
markdownRenderers/
├── ENTITY_REFS.md                         # this file
├── entityRef/
│   ├── types.ts                           # EntityResolvers (imports from each entity)
│   ├── components/                        # shared infrastructure
│   │   ├── EntityRef.tsx                  # dispatcher (reads registry)
│   │   ├── EntityRefHoverCard.tsx         # generic hover card (fetch, cache, F0Card)
│   │   ├── entityRefRegistry.ts           # entityRefRenderers record + getEntityRefRenderer
│   │   └── __tests__/
│   │       ├── EntityRef.test.tsx
│   │       ├── EntityRefHoverCard.test.tsx
│   │       └── entityRefRegistry.test.tsx
│   └── entities/
│       └── person/
│           ├── PersonEntityRef.tsx         # "person" renderer (trigger + card mapping)
│           ├── types.ts                   # PersonProfile type
│           └── __tests__/
│               └── PersonEntityRef.test.tsx
```

## Shared infrastructure

### `components/EntityRefHoverCard.tsx`

**The core reusable component.** All entity refs MUST use this. It handles:

- **HoverCard** wrapper with open/close delays
- **Lazy fetching** on hover (not on mount)
- **Per-ID caching** to avoid redundant API calls
- **Loading state** → renders `F0Card.Skeleton`
- **Error state** → renders a fallback `F0Card`
- **Success state** → renders an `F0Card` with mapped props

Props:

| Prop           | Type                         | Description                                |
| -------------- | ---------------------------- | ------------------------------------------ |
| `id`           | `string`                     | Entity ID to resolve                       |
| `trigger`      | `ReactNode`                  | Inline trigger element (must accept `ref`) |
| `resolver`     | `(id: string) => Promise<T>` | Async function to fetch entity data        |
| `mapToCard`    | `(data: T) => F0CardProps`   | Maps resolved data to F0Card props         |
| `fallbackCard` | `F0CardProps`                | F0Card props shown on error                |

**Important:** The `trigger` element must forward refs (use `forwardRef`) because
`HoverCardTrigger` with `asChild` needs to attach a ref to it.

### `components/entityRefRegistry.ts`

A static `Record<string, Component>` exposed via one function:

| Function                     | Purpose                                       |
| ---------------------------- | --------------------------------------------- |
| `getEntityRefRenderer(type)` | Used by `EntityRef` to dispatch to a renderer |

### `components/EntityRef.tsx`

The dispatcher component mounted by rehype-raw when it encounters an
`<entity-ref>` tag. It extracts the plain-text label from children, looks up
the renderer in the registry, and renders it — or falls back to a `<span>`.

### `entityRef/types.ts`

Contains `EntityResolvers` — the map of async resolver functions keyed by
entity type. Each resolver entry imports its profile type from the
corresponding entity folder.

## How to add a new entity ref

Use `entities/person/` as a reference implementation.

### Step 1 — Define the profile type

Create `entities/team/types.ts`:

```ts
export type TeamProfile = {
  id: string | number
  name: string
  memberCount: number
  avatarUrl?: string
}
```

### Step 2 — Add the resolver to `entityRef/types.ts`

```ts
import type { TeamProfile } from "./entities/team/types"

export type EntityResolvers = {
  person?: (id: string) => Promise<PersonProfile>
  team?: (id: string) => Promise<TeamProfile>
}
```

### Step 3 — Create the renderer

Create `entities/team/TeamEntityRef.tsx`. Use `EntityRefHoverCard` — do NOT
reimplement fetching, caching, or hover card logic:

```tsx
import { forwardRef, useMemo } from "react"

import type { F0CardProps } from "@/components/F0Card"
import { cn, focusRing } from "@/lib/utils"

import { useAiChat } from "../../../../../providers/AiChatStateProvider"
import { EntityRefHoverCard } from "../../components/EntityRefHoverCard"
import type { TeamProfile } from "./types"

// Trigger MUST use forwardRef (HoverCardTrigger needs a ref)
const TeamTrigger = forwardRef<HTMLButtonElement, { label: string }>(
  ({ label, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        focusRing()
      )}
      {...props}
    >
      #{label}
    </button>
  )
)

export function TeamEntityRef({ id, label }: { id: string; label: string }) {
  const { entityResolvers } = useAiChat()
  const resolver = entityResolvers?.team

  const mapToCard = useMemo(
    () =>
      (profile: TeamProfile): F0CardProps => ({
        title: profile.name,
        description: `${profile.memberCount} members`,
      }),
    []
  )

  const fallbackCard = useMemo((): F0CardProps => ({ title: label }), [label])

  if (!resolver) return <span>{label}</span>

  return (
    <EntityRefHoverCard
      id={id}
      trigger={<TeamTrigger label={label} />}
      resolver={resolver}
      mapToCard={mapToCard}
      fallbackCard={fallbackCard}
    />
  )
}
```

### Step 4 — Add to the registry

In `components/entityRefRegistry.ts`:

```ts
import { TeamEntityRef } from "../entities/team/TeamEntityRef"

const entityRefRenderers: Record<string, EntityRefRenderer> = {
  person: PersonEntityRef,
  team: TeamEntityRef,
}
```

### Step 5 — Write tests

Create `entities/team/__tests__/TeamEntityRef.test.tsx` covering:

- Renders trigger with correct label
- Falls back to plain text when no resolver
- Shows hover card with resolved data on hover
- Caches resolved data (resolver called once per ID)
- Shows skeleton while loading
- Shows fallback card on error

## Key principles

1. **Always use `EntityRefHoverCard`** — never reimplement fetching, caching,
   or hover card logic in entity renderers. The only custom parts are the
   trigger element and the `F0CardProps` mapping.
2. **Triggers must forward refs** — use `forwardRef` because `HoverCardTrigger`
   with `asChild` needs to attach a ref.
3. **Co-located types** — each entity defines its own profile type in
   `entities/<name>/types.ts`. `EntityResolvers` in `entityRef/types.ts`
   imports from each entity to build the resolver map.
4. **Fallback to plain text** — unknown or unregistered types render
   children as a `<span>`, so the chat never breaks.
5. **Lazy data fetching** — profile data is fetched on hover, not on mount,
   to keep the initial render fast.
