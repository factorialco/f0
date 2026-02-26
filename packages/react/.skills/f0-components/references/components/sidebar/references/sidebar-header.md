## Header

The `Header` component serves as the top-most section of the sidebar, typically used for branding, workspace titles, or high-level navigation context.

**Props:**
- `label`: `string` - The primary text/title of the header.
- `value`: `string` - A secondary value or subtitle.
- `icon`: `IconType` (optional) - An icon component or string identifier to display next to the label.
- `description`: `string` (optional) - Tooltip or subtext providing more context.
- `onClick`: `() => void` (optional) - Click handler for the entire header area.
- `items`: `Array<{ label: string, value: string, icon?: IconType, description?: string, onClick?: () => void }>` (optional) - A list of items if the header acts as a context switcher.

```tsx
import { Header } from './Sidebar/Header';
import { HomeIcon } from './icons';

const SidebarTop = () => (
  <Header 
    label="Workspace"
    value="Engineering Team"
    icon={HomeIcon}
    onClick={() => navigate('/dashboard')}
  />
);
```

**Edge Cases & Gotchas:**
- When `items` are provided, the Header usually behaves like a trigger for a dropdown menu.
- Long labels or values will be truncated with ellipses; ensure critical information is at the start of the string.