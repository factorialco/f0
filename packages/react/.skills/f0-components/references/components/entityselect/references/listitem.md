## ListItem

`ListItem` represents a single row within the `EntitySelect` selection list. It manages various visual states including selection, partial selection (for groups), and expansion for hierarchical data.

**Props:**
- `label`: `string` (Required) - Primary text to display.
- `subLabel`: `string` - Secondary descriptive text.
- `avatar`: `string` - URL for the entity image.
- `selected`: `boolean` - Whether the item is currently selected.
- `partial`: `boolean` - Used in group views when only some children are selected.
- `expanded`: `boolean` - Whether the item's children are visible.
- `disabled`: `boolean` - Prevents interaction and applies "deactivated" styling.
- `onClick`: `() => void` - Interaction handler.

```tsx
import { ListItem } from '@components/entity-select/sub-components';

const CustomItem = () => (
  <ListItem
    label="Product Team"
    subLabel="12 members"
    avatar="/groups/product.png"
    selected={false}
    partial={true}
    expanded={true}
    onClick={() => console.log('Clicked')}
  />
);
```

**Edge Cases:**
- **Deactivated State:** When `disabled` is true, the item remains visible but ignores click events and appears dimmed.
- **Partial State:** Only relevant when the item acts as a parent to other entities.