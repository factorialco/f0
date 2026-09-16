# Component File Structure

Applies to `packages/react` and `packages/react-native`.

## Never declare a component inside another component

```tsx
// Wrong — StatusIndicator is a new function on every render of F0StatusCard
export const F0StatusCard = forwardRef<HTMLDivElement, F0StatusCardProps>(
  ({ status, title }, ref) => {
    const StatusIndicator = () =>
      status === "error" ? (
        <F0Icon icon={AlertCircle} className="text-f1-icon-critical" />
      ) : (
        <F0Icon icon={CheckCircle} className="text-f1-icon-positive" />
      )

    return (
      <div ref={ref}>
        <StatusIndicator />
      </div>
    )
  }
)
```

React compares element types by identity, so a new function each render makes it unmount and remount the subtree: state is discarded, effects re-run, a focused input loses focus. Hoist it to module scope and give it props.

This matters more in a design system than in product code: a component that remounts its own subtree does so for every consumer at once.

**A file that already contains one is not a precedent.** Do not add a second to match the existing style — write plain JSX, or hoist.

## Move a component to its own file once it needs a test or a second consumer

Until then, a non-exported helper used once in that file is fine. When it does need its own file, it goes in the component folder's `components/` directory and stays out of `index.tsx`'s exports:

```text
F0StatusCard/
  index.tsx                  <- exports only
  F0StatusCard.tsx
  components/MetricRow.tsx   <- internal, not exported
```

Do not add `export` to an existing in-file component so another module can import it — move it in the same change.

## No statement blocks inside JSX

A JSX expression container holds an expression — a value, a call, a ternary, or `&&`. A `const`, an `if`, or an early `return` means you are writing a component: move the derivation into the child.

```tsx
// Wrong — an anonymous component with no name, props type, test, or memoization boundary
{items.map((item, index) => {
  const label = item.text || t("dropdown.untitled")
  const isDestructive = item.variant === "critical" && !item.disabled
  return <DropdownItem key={item.id} item={item} label={label} isDestructive={isDestructive} />
})}

// Right
{items.map((item, index) => (
  <DropdownListItem key={item.id} item={item} isLast={index === items.length - 1} />
))}
```

Extracting the derivation into a helper that returns a bag of values is not enough — the `if`/`const` must leave the JSX callback, and the thing that replaces it needs a props contract.

## Name the function you pass to `useEffect`

```tsx
useEffect(function scrollActiveTabIntoView() {
  containerRef.current
    ?.querySelector<HTMLElement>(`[data-tab-id="${activeTabId}"]`)
    ?.scrollIntoView({ block: "nearest", inline: "nearest" })
}, [activeTabId, containerRef])
```

Applies to `useEffect` and `useLayoutEffect`. If the name needs an "and", split the effect. If you cannot name the side effect, it is not one: `deriveTotalFromItems` is a computed value, `handleSelectPress` is an event handler. Name the side effect, not the trigger.

`react-hooks/exhaustive-deps` treats a named function expression exactly like an arrow function.

Related: `packages/react/AGENTS.md` already forbids syncing controlled/uncontrolled state through `useEffect` — use `useControllable`.
