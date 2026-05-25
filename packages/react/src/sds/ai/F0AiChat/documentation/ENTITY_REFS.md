# Entity Refs — Architecture & Extension Guide

Entity refs are inline mentions embedded in AI chat markdown (e.g.
`<entity-ref type="person" id="42">Ana García</entity-ref>`). They render
as interactive hover cards that lazily resolve rich profile data.

## Directory overview

```
markdownRenderers/
├── entityRef/
│   ├── types.ts                           # EntityRefs, EntityResolvers, EntityUrlBuilders
│   ├── components/                        # shared infrastructure
│   │   ├── EntityRef.tsx                  # dispatcher (reads entityRefConfig)
│   │   ├── ResourceRef.tsx                # unified hover-card renderer
│   │   ├── EntityRefHoverCard.tsx         # generic hover card (fetch, cache, F0Card)
│   │   ├── entityRefConfig.ts             # per-type config map (resolverKey, urlKey, mapToCard)
│   │   └── __tests__/
│   └── entities/
│       ├── person/types.ts                # PersonProfile
│       ├── candidate/types.ts             # CandidateProfile
│       ├── expense/types.ts               # ExpenseProfile
│       ├── jobPosting/types.ts            # JobPostingProfile
│       ├── requisition/types.ts           # RequisitionProfile
│       └── vacancy/types.ts               # VacancyProfile
```

Guide location: `documentation/ENTITY_REFS.md` (this file).

## Shared infrastructure

### `components/EntityRefHoverCard.tsx`

**The core reusable hover-card primitive.** Handles:

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

The `trigger` element must forward refs (use `forwardRef`) because
`HoverCardTrigger` with `asChild` needs to attach a ref to it.

### `components/ResourceRef.tsx`

The unified renderer used by every entity type. It reads an entry from
`entityRefConfig`, looks up the matching resolver and URL builder from
`useAiChat().entityRefs`, builds a `mapToCard` closure with the resolved
URL + i18n, and delegates to `EntityRefHoverCard`. The internal
`ResourceRefTrigger` is a `forwardRef`'d button that accepts an optional
`prefix` (e.g. `@` for persons).

Falls back to a plain `<span>{label}</span>` when no resolver is configured
for the given type.

### `components/entityRefConfig.ts`

A static `Record<string, ErasedEntityRefConfig>` keyed by the
`<entity-ref type="...">` attribute (kebab-case, e.g. `"job-posting"`).
Each entry declares:

| Field           | Type                                             | Purpose                                                     |
| --------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| `triggerPrefix` | `string \| undefined`                            | Optional prefix on the trigger label (e.g. `@` for persons) |
| `resolverKey`   | `keyof EntityResolvers`                          | Lookup key into `entityRefs.resolvers`                      |
| `urlKey`        | `keyof EntityUrlBuilders`                        | Lookup key into `entityRefs.urls`                           |
| `mapToCard`     | `(profile, { i18n, url, label }) => F0CardProps` | Converts a resolved profile into F0Card props               |

Per-entity entries are authored with the type-safe `makeConfig<P>()`
helper (where `P` is the profile type) and stored under a string key
in the `entityRefConfig` record as `ErasedEntityRefConfig`.

### `components/EntityRef.tsx`

The dispatcher component mounted by rehype-raw when it encounters an
`<entity-ref>` tag. It extracts the plain-text label from children, looks
up `entityRefConfig[type]`, and renders `<ResourceRef configKey={type}
id={id} label={label} />`. Unknown types fall back to a `<span>`.

### `entityRef/types.ts`

Contains:

- `EntityResolvers` — async resolver functions keyed by entity type.
  Each entry imports its profile type from the corresponding
  `entities/<name>/types.ts`.
- `EntityUrlBuilders` — URL builder functions keyed by entity type.
  Each builder takes an entity ID and returns the URL to navigate to.
  When not provided, the hover card omits the navigation action.
- `EntityRefs` — groups `resolvers` and `urls` into the single
  configuration object passed via the `entityRefs` prop.

## How to add a new entity ref

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

### Step 2 — Add the resolver and URL builder to `entityRef/types.ts`

```ts
import type { TeamProfile } from "./entities/team/types"

export type EntityResolvers = {
  person?: (id: string) => Promise<PersonProfile>
  team?: (id: string) => Promise<TeamProfile>
  // ...
}

export type EntityUrlBuilders = {
  person?: (id: string) => string
  team?: (id: string) => string
  // ...
}
```

### Step 3 — Add a config entry

In `components/entityRefConfig.ts`:

```ts
import type { TeamProfile } from "../entities/team/types"

const teamConfig = makeConfig<TeamProfile>({
  triggerPrefix: "#",
  resolverKey: "team",
  urlKey: "team",
  mapToCard: (profile, { i18n, url }) => ({
    title: profile.name,
    description: `${profile.memberCount} members`,
    ...(url && {
      secondaryActions: { label: i18n.t("ai.view"), href: url },
    }),
  }),
})

export const entityRefConfig: Record<string, ErasedEntityRefConfig> = {
  // ...existing entries
  team: teamConfig,
}
```

That's it — no new component file, no registry edit. `ResourceRef`
picks up the new key automatically and `EntityRef` dispatches to it.

### Step 4 — Write tests

Extend `components/__tests__/ResourceRef.test.tsx` with cases for the
new type covering:

- Renders trigger with correct label (and prefix if set)
- Falls back to plain text when no resolver
- Shows hover card with resolved data on hover
- Caches resolved data (resolver called once per ID)
- Shows skeleton while loading
- Shows fallback card on error
- Renders "View" action when URL builder provided

## Testing in Storybook

To visually test entity refs, use the **ApplicationFrame** story
(`packages/react/src/examples/ApplicationFrame/index.stories.tsx`).
It configures `entityRefs` with mock resolvers and URL builders for all
entity types. Run Storybook and interact with the AI chat to verify
hover cards, navigation links, and @mention autocomplete.

## Key principles

1. **One renderer, many configs** — all entity types share `ResourceRef`
   driven by `entityRefConfig`. Never create per-entity renderer files.
2. **Always use `EntityRefHoverCard`** for hover/fetch/cache logic
   (consumed by `ResourceRef`).
3. **Co-located profile types** — each entity defines its own profile
   type in `entities/<name>/types.ts`. `EntityResolvers` in
   `entityRef/types.ts` imports from each entity to build the resolver map.
4. **Fallback to plain text** — unknown types or missing resolvers
   render children as a `<span>`, so the chat never breaks.
5. **Lazy data fetching** — profile data is fetched on hover, not on mount,
   to keep the initial render fast.
6. **URL builders are optional** — when `entityRefs.urls.<type>` is not
   provided, the hover card simply omits the navigation action. Never
   hardcode URLs inside config entries.
