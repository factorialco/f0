## Trigger

The `Trigger` is the interactive entry point for the `EntitySelect` component. It displays the current selection state (either as a count or as `ListTag` elements) and toggles the visibility of the selection list.

**Props:**
- `placeholder`: `string` - Text shown when no entities are selected.
- `isOpen`: `boolean` - Current state of the dropdown.
- `selectedCount`: `number` - Number of items currently selected.
- `renderIcon`: `(props: any) => JSX.Element` - Custom icon renderer for the trigger.
- `onClick`: `() => void` - Toggle handler.

```tsx
import { Trigger } from '@components/entity-select/sub-components';

const MyTrigger = () => (
  <Trigger
    placeholder="Select employees..."
    selectedCount={3}
    isOpen={false}
    renderIcon={(props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none">
        <circle cx={12} cy={12} r={8} stroke="currentColor" />
        <path d="M17.5 6.5L6.5 17.5" stroke="currentColor" />
      </svg>
    )}
  />
);
```

**Accessibility:**
- The trigger should manage `aria-expanded` and `aria-haspopup` attributes based on the `isOpen` prop.
- Ensure the `renderIcon` uses `vectorEffect="non-scaling-stroke"` for consistent line weights.