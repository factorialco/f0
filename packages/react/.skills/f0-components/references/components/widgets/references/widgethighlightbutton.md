## WidgetHighlightButton

A button-like list item used within widgets to highlight a specific action or navigation point.

**Props:**
- `title`: string (Required) - The button text.
- `onClick`: () => void - The action to perform on click.
- `icon`: ReactNode - Leading icon for the button.

```tsx
import { WidgetHighlightButton } from '@components/widgets';

const ActionItem = () => (
  <WidgetHighlightButton 
    title="Create New Report" 
    onClick={() => handleCreate()} 
  />
);
```