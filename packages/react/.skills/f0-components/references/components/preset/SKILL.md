---
name: preset
description: Use for predefined options, filters, or configurations where a label and optional count need to be displayed as a selectable button. Ideal for filtering lists or selecting common settings.
---

# Preset

The `Preset` component is a selectable button used to represent predefined options or filters. It typically displays a text label and an optional numeric counter (e.g., for showing the number of results associated with a filter).

## Props

- **label** (optional): `string` - The text label displayed on the preset button.
- **number** (optional): `number` - An optional counter displayed alongside the label.
- **onClick** (optional): `() => void` - Function called when the preset is clicked. If omitted, the component becomes non-interactive.
- **selected** (optional): `boolean` - Indicates if the preset is currently active or selected.

## Usage Examples

### Basic Selection
Use for simple filter toggles.

```tsx
import { Preset } from './Preset';

export const FilterExample = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Preset
      label="Drafts"
      number={12}
      selected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    />
  );
};
```

### Non-interactive Display
Use when you need to show a status or category without allowing user interaction.

```tsx
<Preset label="Static Category" number={5} />
```

### No Counter
Use when the count is irrelevant or unknown.

```tsx
<Preset 
  label="All Items" 
  selected={true} 
  onClick={() => console.log('Clicked')} 
/>
```

## Variants and States

### Selected State
When `selected` is true, the component visually indicates its active status. This is typically used in single-select or multi-select filter groups.

### Counter (Number)
The `number` prop adds a badge-like counter to the button. If the `number` prop is not provided, the counter element is not rendered.

### Interaction
- **Interactive**: When `onClick` is provided, the component behaves like a button with hover and active states.
- **Non-interactive**: When `onClick` is absent, the component renders as a static element, maintaining its visual style but removing pointer interactions.

## Best Practices

- **Label Clarity**: Keep labels short and descriptive.
- **Contextual Use**: Use Presets for high-level filtering or quick-selection tasks. For complex forms, consider standard checkboxes or radio buttons.
- **Counter Accuracy**: Ensure the `number` prop accurately reflects the count of items the preset represents to avoid user confusion.