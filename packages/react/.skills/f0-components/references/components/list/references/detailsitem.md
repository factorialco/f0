## DetailsItem

`DetailsItem` is a foundational component used to display a single attribute consisting of a label and a value. It supports various layouts, including horizontal alignment and text truncation for long content.

**When to use:**
- To show a single property (e.g., "Created by: John Doe").
- Within a `DetailsItemsList` to maintain consistent spacing and typography.
- When you need to control line-clamping for long descriptions.

**Props:**
- `label`: `string` (Required) - The description of the data point.
- `value`: `React.ReactNode` (Required) - The actual data content.
- `horizontal`: `boolean` (Default: `false`) - When true, places the label and value on the same line.
- `maxLines`: `number` (Optional) - Limits the number of lines for the value text before truncating.
- `className`: `string` (Optional) - Custom styling classes.

**Usage Example:**
```tsx
import { DetailsItem } from '@components/list';

export const UserDetails = () => (
  <div>
    <DetailsItem 
      label="Description" 
      value="This is a very long text that might need to be truncated if it exceeds the allowed space in the layout." 
      maxLines={2}
    />
    <DetailsItem 
      label="Priority" 
      value="High" 
      horizontal 
    />
  </div>
);
```

**Edge Cases:**
- If `horizontal` is true and the value is very long, ensure the container has enough width to prevent the label from being squeezed.
- For lists of these items, see the `DetailsItemsList` skill in ./details-items-list/SKILL.md.