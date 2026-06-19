## ListTag

`ListTag` is a compact visual representation of a selected entity. It is typically used within the `Trigger` or in a summary list to show which items have been picked without taking up the space of a full `ListItem`.

**Props:**
- `label`: `string` (Required) - The name of the entity.
- `subAvatar`: `string` - URL for the small avatar image.
- `onRemove`: `() => void` - Callback to deselect the item.
- `closable`: `boolean` (Default: `true`) - Whether to show the remove/close icon.

```tsx
import { ListTag } from '@components/entity-select/sub-components';

const SelectedItems = () => (
  <div style={{ display: 'flex', gap: '4px' }}>
    <ListTag 
      label="Jane Doe" 
      subAvatar="https://ds.factorial.dev/assets/avatar-DU6DdjJT.jpeg" 
      onRemove={() => {}}
    />
  </div>
);
```

**Usage:**
- Use this component when you need to display multiple selections in a constrained horizontal space.
- For the container that holds these tags, see the skill in ./trigger/SKILL.md.