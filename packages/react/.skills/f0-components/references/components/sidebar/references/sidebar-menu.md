## Menu

The `Menu` component is the primary navigation container within the sidebar. It organizes links, buttons, and sub-menus into a vertical list.

**Props:**
- `items`: `Array<MenuItem>` - Configuration for navigation links (label, icon, path, active state).
- `variant`: `'primary' | 'secondary'` - Visual style of the menu items.
- `activeKey`: `string` - The key of the currently active/highlighted menu item.
- `onItemClick`: `(item: MenuItem) => void` - Global click handler for menu items.

```tsx
import { Menu } from './Sidebar/Menu';

const navItems = [
  { key: 'home', label: 'Home', icon: 'home', path: '/' },
  { key: 'settings', label: 'Settings', icon: 'settings', path: '/settings' }
];

const SidebarNav = () => (
  <Menu 
    items={navItems} 
    activeKey="home"
    onItemClick={(item) => console.log('Navigating to:', item.path)}
  />
);
```

**Edge Cases & Gotchas:**
- Nested menus (sub-menus) require the `items` array within an item object.
- Ensure `activeKey` logic matches your router's state to prevent visual mismatches.