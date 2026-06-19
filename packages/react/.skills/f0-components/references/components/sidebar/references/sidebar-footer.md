## SidebarFooter

The `SidebarFooter` is positioned at the bottom of the sidebar. It typically contains user profile information, settings links, or help/support triggers.

**Props:**
- `children`: `ReactNode` - Content to be rendered inside the footer.
- `activityButtonShortcut`: `string` (optional) - Keyboard shortcut hint (e.g., "⌘K") displayed on the primary footer action.
- `showUserConfig`: `boolean` (optional) - Whether to display the user profile/settings toggle.

```tsx
import { SidebarFooter } from './Sidebar/SidebarFooter';

const MyFooter = () => (
  <SidebarFooter activityButtonShortcut="Ctrl+G">
    <div className="user-info">
      <span>John Doe</span>
    </div>
  </SidebarFooter>
);
```

**Edge Cases & Gotchas:**
- The footer is often sticky; ensure it doesn't overlap with long menu lists by using proper container scrolling.
- If the sidebar is collapsed, the footer usually transitions to showing only the user avatar or a single icon.