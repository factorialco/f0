# F0TableOfContent Footer Actions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an optional `actions?: TOCAction[]` prop to `F0TableOfContent` that renders a pinned footer of full-width buttons below the scrollable item list.

**Architecture:** A new presentational `TOCFooter` component renders one `ButtonInternal` per action. `TOCContent` renders it as a `shrink-0` sibling after the scroll-area in both layout branches, so it stays visible while the list scrolls. `TOCItem` and the entire drag-and-drop / search / reorder pipeline are untouched.

**Tech Stack:** React, TypeScript, Tailwind, Vitest (`zeroRender` from `@/testing/test-utils`), Storybook (`@storybook/react-vite`).

---

## File Structure

- `packages/react/src/experimental/Navigation/F0TableOfContent/types.ts` — add `TOCAction` type and `actions?` prop on `TOCProps`.
- `packages/react/src/experimental/Navigation/F0TableOfContent/TOCFooter/index.tsx` — **new** footer component (one responsibility: render footer action buttons).
- `packages/react/src/experimental/Navigation/F0TableOfContent/index.tsx` — destructure `actions`, render `<TOCFooter>` in both layout branches, re-export `TOCAction`.
- `packages/react/src/experimental/Navigation/F0TableOfContent/TOCFooter/index.test.tsx` — **new** unit tests for the footer.
- `packages/react/src/experimental/Navigation/F0TableOfContent/__stories__/F0TableOfContent.stories.tsx` — add a "WithFooterActions" story.

All paths below are relative to the repo root `/Users/marc.baquefactorial.co/code/f0`.

---

## Task 1: Add `TOCAction` type and `actions` prop

**Files:**
- Modify: `packages/react/src/experimental/Navigation/F0TableOfContent/types.ts`

- [ ] **Step 1: Add the `TOCAction` type and the `actions` prop**

In `types.ts`, add the new exported type after the `TOCItemAction` union (before `IdStructure`):

```ts
/** A button rendered in the footer at the bottom of the table of contents */
export type TOCAction = {
  label: string
  onClick: () => void
  icon?: IconType
  disabled?: boolean
}
```

Then add the `actions` prop to the `TOCProps` interface (place it after `scrollable`):

```ts
  /** Enable vertical scrolling when content overflows (default: true) */
  scrollable?: boolean
  /** Action buttons pinned in a footer at the bottom of the panel */
  actions?: TOCAction[]
```

`IconType` is already imported at the top of `types.ts`, so no new import is needed.

- [ ] **Step 2: Verify the type compiles**

Run: `cd /Users/marc.baquefactorial.co/code/f0/packages/react && pnpm exec tsc --noEmit -p tsconfig.json`
Expected: PASS (no new errors referencing `types.ts`). If the project-wide typecheck is slow or noisy, this step is just to confirm `types.ts` has no syntax/type error.

- [ ] **Step 3: Commit**

```bash
cd /Users/marc.baquefactorial.co/code/f0
git add packages/react/src/experimental/Navigation/F0TableOfContent/types.ts
git commit -m "feat(F0TableOfContent): add TOCAction type and actions prop"
```

---

## Task 2: Create the `TOCFooter` component (TDD)

**Files:**
- Create: `packages/react/src/experimental/Navigation/F0TableOfContent/TOCFooter/index.tsx`
- Test: `packages/react/src/experimental/Navigation/F0TableOfContent/TOCFooter/index.test.tsx`

- [ ] **Step 1: Write the failing tests**

Create `packages/react/src/experimental/Navigation/F0TableOfContent/TOCFooter/index.test.tsx`:

```tsx
import { describe, expect, it, vi } from "vitest"

import { Add } from "@/icons/app"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { TOCAction } from "../types"
import { TOCFooter } from "./index"

describe("TOCFooter", () => {
  it("renders nothing when actions is undefined", () => {
    const { container } = render(<TOCFooter actions={undefined} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("renders nothing when actions is an empty array", () => {
    const { container } = render(<TOCFooter actions={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("renders one button per action", () => {
    const actions: TOCAction[] = [
      { label: "Add section", onClick: vi.fn() },
      { label: "Import", onClick: vi.fn() },
    ]
    render(<TOCFooter actions={actions} />)
    expect(screen.getByRole("button", { name: "Add section" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Import" })).toBeInTheDocument()
  })

  it("calls onClick when a button is clicked", async () => {
    const onClick = vi.fn()
    render(<TOCFooter actions={[{ label: "Add section", onClick }]} />)
    await userEvent.click(screen.getByRole("button", { name: "Add section" }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("does not call onClick when the action is disabled", async () => {
    const onClick = vi.fn()
    render(
      <TOCFooter actions={[{ label: "Add section", onClick, disabled: true }]} />
    )
    const button = screen.getByRole("button", { name: "Add section" })
    expect(button).toBeDisabled()
    await userEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it("renders an icon when provided", () => {
    const actions: TOCAction[] = [
      { label: "Add section", onClick: vi.fn(), icon: Add },
    ]
    const { container } = render(<TOCFooter actions={actions} />)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `cd /Users/marc.baquefactorial.co/code/f0/packages/react && pnpm exec vitest run src/experimental/Navigation/F0TableOfContent/TOCFooter/index.test.tsx`
Expected: FAIL — cannot resolve `./index` (module not found).

- [ ] **Step 3: Implement the `TOCFooter` component**

Create `packages/react/src/experimental/Navigation/F0TableOfContent/TOCFooter/index.tsx`:

```tsx
import { ButtonInternal } from "@/components/F0Button/internal"
import { cn } from "@/lib/utils"

import { TOCAction } from "../types"

interface TOCFooterProps {
  actions?: TOCAction[]
}

export function TOCFooter({ actions }: TOCFooterProps) {
  if (!actions || actions.length === 0) {
    return null
  }

  return (
    <div
      className={cn(
        "flex shrink-0 flex-col gap-0.5 border-0 border-t border-solid border-f1-border-secondary px-3 py-2"
      )}
    >
      {actions.map((action, index) => (
        <ButtonInternal
          key={`toc-footer-action-${index}`}
          variant="ghost"
          size="md"
          label={action.label}
          icon={action.icon}
          disabled={action.disabled}
          onClick={() => action.onClick()}
          block
        />
      ))}
    </div>
  )
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `cd /Users/marc.baquefactorial.co/code/f0/packages/react && pnpm exec vitest run src/experimental/Navigation/F0TableOfContent/TOCFooter/index.test.tsx`
Expected: PASS — all 6 tests pass.

- [ ] **Step 5: Commit**

```bash
cd /Users/marc.baquefactorial.co/code/f0
git add packages/react/src/experimental/Navigation/F0TableOfContent/TOCFooter/
git commit -m "feat(F0TableOfContent): add TOCFooter component"
```

---

## Task 3: Wire `TOCFooter` into `TOCContent`

**Files:**
- Modify: `packages/react/src/experimental/Navigation/F0TableOfContent/index.tsx`

- [ ] **Step 1: Import `TOCFooter` and the `TOCAction` type**

In `index.tsx`, add the component import alongside the existing `Item` / `ItemSectionHeader` imports (after line 24, `import { ItemSectionHeader } from "./ItemSectionHeader"`):

```ts
import { TOCFooter } from "./TOCFooter"
```

Update the types import (currently `import { TOCItem, TOCItemAction, TOCProps } from "./types"`) to also bring in `TOCAction`:

```ts
import { TOCAction, TOCItem, TOCItemAction, TOCProps } from "./types"
```

- [ ] **Step 2: Destructure the `actions` prop in `TOCContent`**

In the `TOCContent` function signature (currently ends with `scrollable = true,` then `}: TOCProps) {`), add `actions` to the destructured props:

```ts
  hideChildrenCounter = false,
  scrollable = true,
  actions,
}: TOCProps) {
```

- [ ] **Step 3: Render `TOCFooter` after the list in both layout branches**

The list is rendered by an IIFE that returns either a `<ScrollArea>` branch or a plain `<div>` branch (the `return scrollable ? (...) : (...)` near the end of `TOCContent`). The footer must render as a sibling *after* that IIFE, still inside the `<nav>`.

Locate the closing of that IIFE — it looks like:

```tsx
        return scrollable ? (
          <ScrollArea className="min-h-0 flex-1">
            <div className="px-3 pb-2">
              <div className="flex flex-col gap-0.5">{listContent}</div>
            </div>
          </ScrollArea>
        ) : (
          <div className="min-h-0 flex-1 overflow-hidden px-2 pb-2">
            <div className="flex flex-col gap-0.5">{listContent}</div>
          </div>
        )
      })()}
    </nav>
  )
```

Add `<TOCFooter actions={actions} />` between the `})()}` and `</nav>`:

```tsx
        return scrollable ? (
          <ScrollArea className="min-h-0 flex-1">
            <div className="px-3 pb-2">
              <div className="flex flex-col gap-0.5">{listContent}</div>
            </div>
          </ScrollArea>
        ) : (
          <div className="min-h-0 flex-1 overflow-hidden px-2 pb-2">
            <div className="flex flex-col gap-0.5">{listContent}</div>
          </div>
        )
      })()}
      <TOCFooter actions={actions} />
    </nav>
  )
```

- [ ] **Step 4: Re-export the `TOCAction` type from the public surface**

At the bottom of `index.tsx` the public type re-export currently reads:

```ts
export type { TOCItem, TOCItemAction, TOCProps }
```

Change it to include `TOCAction`:

```ts
export type { TOCAction, TOCItem, TOCItemAction, TOCProps }
```

- [ ] **Step 5: Typecheck and run the component tests**

Run: `cd /Users/marc.baquefactorial.co/code/f0/packages/react && pnpm exec tsc --noEmit -p tsconfig.json && pnpm exec vitest run src/experimental/Navigation/F0TableOfContent/`
Expected: PASS — typecheck clean for these files; all `TOCFooter` and existing `utils` tests pass.

- [ ] **Step 6: Commit**

```bash
cd /Users/marc.baquefactorial.co/code/f0
git add packages/react/src/experimental/Navigation/F0TableOfContent/index.tsx
git commit -m "feat(F0TableOfContent): render footer actions below the list"
```

---

## Task 4: Add a Storybook story

**Files:**
- Modify: `packages/react/src/experimental/Navigation/F0TableOfContent/__stories__/F0TableOfContent.stories.tsx`

- [ ] **Step 1: Import the `Add` icon and `TOCAction` type**

The stories file currently imports `import { Placeholder } from "@/icons/app"`. Change it to also import `Add`:

```ts
import { Add, Placeholder } from "@/icons/app"
```

The line `import { TOCItem, TOCItemAction } from "../types"` should also import `TOCAction`:

```ts
import { TOCAction, TOCItem, TOCItemAction } from "../types"
```

- [ ] **Step 2: Add a `mockFooterActions` constant**

After the existing `mockOtherActions` constant (ends around line 25 with `]`), add:

```ts
const mockFooterActions: TOCAction[] = [
  {
    label: "Add section",
    onClick: () => console.log("Add section"),
    icon: Add,
  },
]
```

- [ ] **Step 3: Add the `WithFooterActions` story**

After the existing `HideChildrenCounter` story block (before `WithDataTestId`), add:

```tsx
export const WithFooterActions: Story = {
  render: (args) => {
    const [activeItem, setActiveItem] = useState("nested-child-1")

    return (
      <F0TableOfContent
        {...args}
        items={mockTOCData(setActiveItem)}
        activeItem={activeItem}
        className="h-full"
        actions={mockFooterActions}
        onReorder={(order) => {
          console.log("Items reordered:", order)
        }}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows action buttons pinned in a footer at the bottom of the panel. The footer stays visible while the item list scrolls.",
      },
    },
  },
}
```

- [ ] **Step 4: Document the `actions` arg in `argTypes`**

In the `argTypes` object, after the `sortable` entry (before `onReorder`), add:

```ts
    actions: {
      control: false,
      description:
        "Array of action buttons pinned in a footer at the bottom of the panel. Each action has: label, onClick, optional icon, optional disabled.",
    },
```

- [ ] **Step 5: Verify the stories file typechecks**

Run: `cd /Users/marc.baquefactorial.co/code/f0/packages/react && pnpm exec tsc --noEmit -p tsconfig.json`
Expected: PASS — no errors in the stories file.

- [ ] **Step 6: Commit**

```bash
cd /Users/marc.baquefactorial.co/code/f0
git add packages/react/src/experimental/Navigation/F0TableOfContent/__stories__/F0TableOfContent.stories.tsx
git commit -m "docs(F0TableOfContent): add WithFooterActions story"
```

---

## Task 5: Lint and final verification

**Files:** none (verification only)

- [ ] **Step 1: Lint the changed files**

Run: `cd /Users/marc.baquefactorial.co/code/f0/packages/react && pnpm exec eslint src/experimental/Navigation/F0TableOfContent`
Expected: PASS — no lint errors. Fix any reported issues (e.g. import ordering) and re-run until clean.

- [ ] **Step 2: Run the full component test + typecheck once more**

Run: `cd /Users/marc.baquefactorial.co/code/f0/packages/react && pnpm exec tsc --noEmit -p tsconfig.json && pnpm exec vitest run src/experimental/Navigation/F0TableOfContent/`
Expected: PASS.

- [ ] **Step 3: Commit any lint fixes**

```bash
cd /Users/marc.baquefactorial.co/code/f0
git add -A packages/react/src/experimental/Navigation/F0TableOfContent
git commit -m "chore(F0TableOfContent): lint fixes for footer actions" || echo "nothing to commit"
```

---

## Notes for the implementer

- **`ButtonInternal` props** (`@/components/F0Button/internal`): `block` makes the button full-width; `variant="ghost"` matches the subtle in-panel styling; `icon` takes an `IconType`; `label` is required (also serves as the accessible name); `disabled` and `onClick` behave as expected. `onClick` receives a mouse event, so wrap `action.onClick` (`() => action.onClick()`) to keep the public `TOCAction.onClick` signature argument-free.
- **Test utilities** come from `@/testing/test-utils` (`zeroRender as render`, `screen`, `userEvent`), matching the pattern in `experimental/Navigation/Dropdown/__tests__/Dropdown.test.tsx`.
- **Do not** modify `TOCItem`, the DnD code, `utils.ts`, or the search/reorder logic — the footer is fully decoupled from the list.

---

## Self-Review

- **Spec coverage:** `TOCAction` type + `actions` prop (Task 1); `TOCFooter` renders nothing when empty / one button per action / icon / disabled (Task 2); footer rendered as `shrink-0` after the scroll area in both branches and `TOCAction` re-exported (Task 3); story + arg docs (Task 4); accessibility is satisfied via real `ButtonInternal` buttons inside the existing `<nav>` landmark (Tasks 2–3); lint/typecheck/test verification (Task 5). All spec sections covered.
- **Placeholder scan:** No TBD/TODO; every code step shows complete code; every command shows expected output.
- **Type consistency:** `TOCAction` shape (`label`, `onClick`, `icon?`, `disabled?`) is identical across `types.ts`, `TOCFooter`, tests, and the story. `TOCFooterProps.actions` is `TOCAction[] | undefined`, matching `TOCProps.actions?`. Import paths (`@/components/F0Button/internal`, `@/testing/test-utils`, `@/icons/app`) are consistent throughout.
