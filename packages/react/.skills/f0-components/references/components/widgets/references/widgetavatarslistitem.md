## WidgetAvatarsListItem

A specialized list item for widgets that displays an avatar alongside text, often used for employee lists or mentions.

**Props:**
- `title`: string (Required) - The primary text for the item.
- `avatarSrc`: string - URL for the avatar image.
- `hasAlert`: boolean - Displays an alert indicator on the avatar.
- `onClick`: () => void - Click handler for the item.

```tsx
import { WidgetAvatarsListItem } from '@components/widgets';

const UserItem = () => (
  <WidgetAvatarsListItem 
    title="Kyriakos Papadopoulos" 
    avatarSrc="/path/to/avatar.png"
    hasAlert={true}
    onClick={() => console.log('Clicked user')}
  />
);
```