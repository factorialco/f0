# Context and State Patterns

## Context Initialization

### Required Context (most common)

Use `createContext<T | null>(null)` with a hook that throws if used outside the provider:

```tsx
// src/components/F0Form/context.ts
import { createContext, useContext } from "react"

interface F0FormContextValue {
  formName: string
}

export const F0FormContext = createContext<F0FormContextValue | null>(null)

export function useF0FormContext() {
  const context = useContext(F0FormContext)
  if (!context) {
    throw new Error("useF0FormContext must be used within a F0Form")
  }
  return context
}
```

### Optional Context with Fallback

Use when the component should work both with and without a provider, returning default/noop values:

```tsx
// src/lib/providers/events/event-catcher-provider.tsx
const EventCatcherContext = createContext<ContextType | null>(null)

export function useF0EventCatcher() {
  const context = useContext(EventCatcherContext)
  return context ?? { onEvent: () => Promise.resolve(false) }
}
```

### Optional with Default Object

For larger APIs where many defaults are needed:

```tsx
// src/sds/ai/F0AiChat/providers/AiChatStateProvider.tsx
const AiChatStateContext = createContext<AiChatProviderReturnValue | null>(null)

export function useAiChat(): AiChatProviderReturnValue {
  const context = useContext(AiChatStateContext)
  if (context === null) {
    return {
      enabled: false,
      setEnabled: noopFn,
      open: false,
      setOpen: noopFn,
      // ... all other properties with noop/default values
    }
  }
  return context
}
```

### Dual Hooks Pattern

Provide both `useX()` (throws) and `useXOptional()` (returns null) when consumers may or may not have a provider:

```tsx
// src/lib/dnd/context.tsx
const Ctx = createContext<DndContextValue | null>(null)

// Required — throws if no provider
export function useDndContext(): DndContextValue {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("useDndContext must be used within DndProvider")
  return ctx
}

// Optional — returns null if no provider
export function useDndContextOptional(): DndContextValue | null {
  return useContext(Ctx)
}
```

Usage of the optional variant — hooks gracefully no-op when context is null:

```tsx
// src/lib/dnd/hooks.ts
export function useDraggable<T = unknown>(args: { ... }) {
  const ctx = useDndContextOptional()
  useEffect(() => {
    if (!ref.current) return
    if (!ctx || disabled) return  // graceful no-op
    return ctx.driver.registerDraggable(ref.current, { ... })
  }, [ctx, ref, payloadKey, disabled, handleRef, payload])
}
```

## Controlled vs. Uncontrolled Components

### Use useControllable hook

Use https://www.npmjs.com/package/use-controllable (check the readme for futher details)

```tsx
/// ❌ Anti-pattern: Always using internal state
function BadComponent({ value, onChange }) {
  const [internalValue, setInternalValue] = useState(value)

  // Need to sync internal state with prop changes
  useEffect(() => {
    setInternalValue(value) // Extra re-render!
  }, [value])

  // ... causes multiple onChange calls and state conflicts
}
```

```tsx
// ✅ Optimal: Direct value usage when controlled
function GoodComponent({ value, onChange }) {
  const [currentValue, setValue] = useControllable({ value, onChange })
  // When controlled: currentValue === value (no internal state)
  // When uncontrolled: currentValue is managed internally
}
```

## Async onClick with Auto-Loading

F0Button automatically detects when `onClick` returns a Promise and shows loading state:

```tsx
// src/components/F0Button/internal.tsx
const [loading, setLoading] = useState(false)

const handleClick = async (
  event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
) => {
  const result = onClick?.(event)

  if (result instanceof Promise) {
    setLoading(true)
    try {
      await result
    } finally {
      setLoading(false)  // always clears, even on error
    }
  }
}

const isLoading = forceLoading || loading

// Passed to Action — button is disabled while loading
<Action
  disabled={disabled || isLoading}
  onClick={handleClick}
  loading={isLoading}
/>
```

## Event Naming Convention

- **Props (public API)**: always `on` prefix — `onClick`, `onChange`, `onClose`
- **Internal handlers**: always `handle` prefix — `handleClick`, `handleClose`
- **Callback invocation**: always use optional chaining — `props.onClick?.(event)`

### Example: F0Link

```tsx
// src/components/F0Link/F0Link.tsx
const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  if (stopPropagation) {
    event.stopPropagation()
  }
  props.onClick?.(event) // optional chaining invocation
}

;<Action {...props} onClick={handleClick} />
```

### Example: Multiple Handlers in InputField

```tsx
// src/ui/InputField/InputField.tsx
const handleChange = (
  value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  let v = (typeof value === "string" ? value : value.target.value) ?? emptyValue
  setLocalValue(v)
  props.onChange?.(v) // optional chaining
}

const handleClear = () => {
  handleChange(emptyValue)
  props.onClear?.() // optional chaining
}

const handleClickContent = () => {
  if (!disabled) {
    onClickContent?.() // optional chaining
  }
}
```
