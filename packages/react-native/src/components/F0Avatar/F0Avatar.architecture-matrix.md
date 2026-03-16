# F0Avatar Architecture Matrix

Comparative matrix to align `F0Avatar` with the strongest patterns from:

- Current `F0Avatar` implementation in `react-native`
- `F0Tag` in `react-native` (reference namespaced pattern)
- Recent `F0*` components in `react-native` (`F0Button`, `F0Badge`, `F0Counter`, `F0Preset`)
- HeroUI Native `Avatar` architecture

Use this document as an implementation guide for future refactors and new multi-variant F0 components.

## Scope

This matrix focuses on architecture, type safety, composition, and maintainability patterns. It does not prescribe visual design decisions.

## Comparison Matrix

| Dimension                  | Current `F0Avatar` (RN)                                          | `F0Tag` (RN)                                  | Recent `F0*` (RN)                                      | HeroUI Avatar                                                          | Recommended F0 RN Standard                                                        |
| -------------------------- | ---------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Public API shape           | Namespaced (`F0Avatar.*`) plus root dispatcher                   | Namespaced (`F0Tag.*`) plus root primitive    | Mostly single component API                            | Compound component (`Avatar.Image`, `Avatar.Fallback`)                 | Keep namespaced API for semantic variants, with optional root dispatcher          |
| Shared primitive layer     | `F0AvatarBase` exists, but logic still duplicated in variants    | Clear `F0TagRoot` shared primitive            | Varies by component                                    | Clear root + subparts with context                                     | One explicit shared root/base for common layout, a11y, and behavior               |
| Internal file split        | `types`, `styles`, `primitives`, `utils`, `modules`, `fileUtils` | `types`, `styles`, root, variants, list types | Usually clean `tsx + types + styles + md`              | Very explicit (`types`, `styles`, `constants`, `context`, `animation`) | Use intent-based split: `types`, `styles`, `constants`, `internal/*` domain files |
| Generic utils usage        | High (`F0Avatar.utils.ts` mixed concerns)                        | Low (more semantic file ownership)            | Low to medium                                          | Low (purpose-specific files)                                           | Avoid catch-all utils files, prefer purpose-specific names                        |
| Type safety in list API    | Weak in list rendering (`Record<string, unknown>`, casts)        | Strong generic mapping (`type -> props`)      | Usually strict                                         | Strong                                                                 | Use discriminated mapping pattern like `F0TagList`                                |
| Size mapping strategy      | Repeated maps across files                                       | Centralized enough for tags                   | Usually centralized in types/styles                    | Centralized by variants + types                                        | Centralize all size/variant maps in `constants` or one internal module            |
| Badge/overlay composition  | Duplicated render logic across variants                          | Not applicable in same way                    | Patterns vary                                          | Slot/subcomponent composition                                          | Centralize badge rendering in one internal helper                                 |
| Runtime prop guards        | Partial                                                          | Minimal but controlled API                    | Strong in `F0Button` (`blocked/banned` + runtime omit) | Strong ownership per subpart                                           | Apply `blocked props + runtime filtering` where component is semantic-first       |
| Context usage              | None                                                             | None                                          | Rare                                                   | Heavy use where status is shared                                       | Use context only when shared runtime state is needed                              |
| Deterministic rendering    | Some nondeterminism (`Math.random` in module gradient id)        | Deterministic                                 | Deterministic in newer components                      | Deterministic                                                          | Avoid randomness in render path                                                   |
| Primitive-first compliance | Good (`F0Text`, `F0Image`, `F0Icon`)                             | Good                                          | Good                                                   | Uses internal primitives                                               | Keep primitive-first consistently                                                 |
| Test style                 | Snapshot-heavy                                                   | Snapshot-heavy + contract checks              | Snapshot-heavy currently                               | Behavioral and composition oriented                                    | Add more behavior/contract tests on top of snapshots                              |
| Docs quality               | Good overview, but architecture not yet codified as decisions    | Good architecture narrative                   | Good per component docs                                | Very detailed API docs                                                 | Add explicit architecture decisions and migration notes                           |

## Pattern Decision Matrix

| Pattern                                                          | Source                   | Keep / Adapt / Avoid | Decision Notes                                               |
| ---------------------------------------------------------------- | ------------------------ | -------------------- | ------------------------------------------------------------ |
| Namespaced semantic API (`Component.*`)                          | `F0Tag`, `F0Avatar`      | Keep                 | Primary API for product usage                                |
| Root dispatcher (`avatar.type`)                                  | `F0Avatar`               | Keep                 | Useful for data-driven rendering                             |
| Thin semantic variants                                           | `F0Tag`                  | Keep                 | Variants should only map semantic props to root/base         |
| Purpose-specific internals (`constants`, `context`, `animation`) | HeroUI                   | Adapt                | Use only what is required by active use cases                |
| Catch-all `*.utils.ts`                                           | Current `F0Avatar`       | Avoid                | Replace with domain-named internal modules                   |
| Runtime blocked-props filtering                                  | `F0Button`               | Keep                 | Needed when component contract must own style/a11y semantics |
| Generic list mapping (`type -> props`)                           | `F0TagList`              | Keep                 | Required to remove casts from `F0AvatarList`                 |
| Random id generation in render                                   | Current `F0AvatarModule` | Avoid                | Replace with deterministic IDs (`useId` or derived key)      |
| Context by default                                               | HeroUI style             | Avoid                | Add only if multiple subparts require shared runtime state   |

## Proposed Target for `F0Avatar`

```text
F0Avatar/
  F0Avatar.tsx
  F0AvatarRoot.tsx                # optional, if dispatcher grows
  F0Avatar.types.ts
  F0Avatar.internal-types.ts      # optional
  F0Avatar.constants.ts
  F0Avatar.styles.ts
  F0AvatarPerson.tsx
  F0AvatarTeam.tsx
  F0AvatarCompany.tsx
  F0AvatarFile.tsx
  F0AvatarEmoji.tsx
  F0AvatarIcon.tsx
  F0AvatarFlag.tsx
  F0AvatarAlert.tsx
  F0AvatarDate.tsx
  F0AvatarModule.tsx
  F0AvatarList.tsx
  F0AvatarList.types.ts
  F0AvatarList.clips.ts
  internal/
    badge.tsx
    file-type.ts
    module-icons.ts
    name.ts
  __tests__/
  F0Avatar.md
  F0Avatar.architecture-matrix.md
  index.ts
```

## Refactor Priorities (Suggested Order)

1. **Type safety first**: refactor `F0AvatarList` to a strict `type -> props` mapping and remove casts.
2. **Deduplicate logic**: centralize size maps and badge rendering in `internal`.
3. **Split mixed utilities**: replace `F0Avatar.utils.ts` with domain-specific modules.
4. **Determinism**: remove `Math.random` usage from render path.
5. **Documentation alignment**: update `F0Avatar.md` with architectural decisions and migration notes.

## Review Checklist for New F0 RN Components

- Public API is semantic and minimal (`F0X` or `F0X.*`)
- Shared primitive/root exists when variants share behavior
- No catch-all `utils` file for unrelated concerns
- `types`, `styles`, and `constants` responsibilities are clearly separated
- Runtime-protected props are filtered when contract requires it
- List APIs use discriminated mappings without unsafe casts
- Render path is deterministic
- Docs include architecture notes and rationale

## F0Avatar DoD Matrix (Before / Now / Target)

Use this table as a Definition of Done tracker while refining `F0Avatar`.

Legend:

- `DONE` — aligned with target
- `PARTIAL` — improved but not fully aligned
- `TODO` — still pending

| Area                                            | Before                                                              | Now                                                                                                                                                      | Target                                                               | Status  |
| ----------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------- |
| Namespaced API (`F0Avatar.*`)                   | Present                                                             | Present                                                                                                                                                  | Keep as primary API                                                  | DONE    |
| Root dispatcher (`avatar.type`)                 | Present                                                             | Present                                                                                                                                                  | Keep for data-driven rendering                                       | DONE    |
| Shared base primitive                           | Present (`F0AvatarBase`)                                            | Present                                                                                                                                                  | Keep root/base as single shared behavior layer                       | DONE    |
| Size map centralization                         | Duplicated maps in multiple files                                   | Centralized in `F0Avatar.constants.ts`                                                                                                                   | Single source of truth for all size mappings                         | DONE    |
| Badge render centralization                     | Duplicated in Base/File/Flag                                        | Centralized in `internal/badge.tsx`                                                                                                                      | One badge renderer for all variants                                  | DONE    |
| Name/initials/color helpers                     | Mixed in generic utils file                                         | Centralized in `internal/name.ts`                                                                                                                        | Domain-focused helper modules                                        | DONE    |
| List type safety                                | Unsafe casts and `Record<string, unknown>`                          | Typed `type -> avatars` mapping in `F0AvatarList.types.ts`                                                                                               | Strict discriminated list API with no unsafe casts                   | DONE    |
| Deterministic IDs in module avatar              | Random IDs from `Math.random`                                       | Deterministic IDs via `useId`                                                                                                                            | No randomness in render path                                         | DONE    |
| Internal naming consistency                     | Legacy names (`F0Avatar.fileUtils.ts`, `F0Avatar.modules.ts`)       | Moved to `internal/file-type.ts` and `internal/module-icons.ts`                                                                                          | Intent-based internal naming                                         | DONE    |
| List complexity split                           | Single large `F0AvatarList.tsx` file with multiple responsibilities | Split into `internal/list-avatar.tsx`, `internal/list-svg.tsx`, `internal/list-counter.tsx`, `internal/list-types.ts`                                    | Focused internal units per concern                                   | DONE    |
| Primitive-first compliance in avatar primitives | Uses raw RN `Text`/`Image` in primitives                            | `F0Avatar.primitives.tsx` now uses `F0Image`; fallback text still uses RN `Text` to preserve existing typography behavior                                | Align with F0 primitive-first rule where applicable                  | PARTIAL |
| Runtime style guard pattern                     | Not applied as semantic contract                                    | `F0_AVATAR_BANNED_PROPS` blocks visual override props (`className`, `style`) in public API types; runtime contract tests assert ignored unsafe overrides | Decide and enforce blocked props strategy (if semantic-only surface) | DONE    |
| Test depth                                      | Snapshot-heavy                                                      | Added behavior/contract tests for list clipping determinism, badge path contract, and root dispatcher coverage for all variants                          | Add behavior/contract tests beyond snapshots                         | DONE    |
| Architecture docs                               | Basic usage docs                                                    | Added architecture decisions and migration notes                                                                                                         | Keep docs synced with implementation decisions                       | DONE    |

## Recommended Next Milestone

To close the remaining gaps with minimal risk:

1. Decide whether to fully migrate fallback initials from RN `Text` to `F0Text` while preserving current visual tokens.
2. If fallback migration is approved, add a small `F0Avatar`-specific typography preset to avoid behavioral regressions.
3. Keep architecture docs synchronized with future internal moves and test strategy updates.
