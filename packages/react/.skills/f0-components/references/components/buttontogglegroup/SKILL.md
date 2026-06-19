---
name: button-toggle-group
description: Use for selecting one or multiple options from a set of related buttons. Ideal for view switching, filtering, or mode selection where options are mutually exclusive or additive and require high visibility.

---

# ButtonToggleGroup

A layout component that groups related toggle buttons together. It supports both single and multiple selection modes and can toggle between icon-only (compact) and icon-plus-label (expanded) views.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `F0ButtonToggleGroupItem[]` | - | **Required.** Array of items with `label`, `icon`, and optional `disabled` state. |
| `value` | `string \| string[]` | - | The currently selected value(s). Use `string[]` if `multiple` is true. |
| `onChange` | `Function` | - | Callback fired on selection change. Returns `string` or `string[]`. |
| `multiple` | `boolean` | `false` | Enable multiple selection mode. |
| `required` | `boolean` | `false` | If true, at least one item must be selected. |
| `variant` | `"compact" \| "expanded"` | `"compact"` | `compact`: Icon only. `expanded`: Icon and label. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | The visual size of the buttons. |
| `disabled` | `boolean` | `false` | Disables the entire group. |

### F0ButtonToggleGroupItem Interface
```typescript
interface F0ButtonToggleGroupItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}
```

## Usage Examples

### Single Selection (Default)
Use for mutually exclusive options like view switching.

```tsx
import { ButtonToggleGroup } from '@components/button-toggle-group';

const items = [
  { value: 'list', label: 'List View', icon: <ListIcon /> },
  { value: 'grid', label: 'Grid View', icon: <GridIcon /> },
];

export const ViewSwitcher = () => {
  const [view, setView] = useState('list');
  
  return (
    <ButtonToggleGroup
      items={items}
      value={view}
      onChange={(val: string) => setView(val)}
      required
    />
  );
};
```

### Multiple Selection with Expanded Labels
Use for additive filters or settings.

```tsx
export const FilterGroup = () => {
  const [filters, setFilters] = useState(['bold']);
  
  return (
    <ButtonToggleGroup
      multiple
      variant="expanded"
      items={[
        { value: 'bold', label: 'Bold', icon: <BoldIcon /> },
        { value: 'italic', label: 'Italic', icon: <ItalicIcon /> },
        { value: 'underline', label: 'Underline', icon: <UnderlineIcon /> },
      ]}
      value={filters}
      onChange={(val: string[]) => setFilters(val)}
    />
  );
};
```

## Variants

- **Compact**: Best for toolbars or tight spaces where icons are universally understood.
- **Expanded**: Best when labels are necessary for clarity or when the component is a primary page control.

## Best Practices

- **Consistency**: Do not mix items with icons and items without icons in the same group.
- **Labeling**: Ensure `label` is descriptive even in `compact` mode, as it serves as the `aria-label`.
- **Selection State**: Use the `required` prop if the user must always have one option active (e.g., a "Sort By" control).
- **Alternative Components**: 
    - Use a **Tabs** component for top-level navigation.
    - Use **RadioGroups** or **Checkboxes** for standard form inputs where button styling is not desired.

## Related Skills
- For individual button styling and behavior, see the skill in `./button/SKILL.md`.
- For standard checkbox selection, see the skill in `./checkbox/SKILL.md`.