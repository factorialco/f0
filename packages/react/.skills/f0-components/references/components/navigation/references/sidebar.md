## Sidebar

The Sidebar is the primary vertical navigation component. It handles application-wide navigation, user profile management, and company/account switching.

**Props:**
- `user`: `{ firstName: string, lastName: string, avatarUrl?: string }` (Required) - Current user details for the footer.
- `options`: `SidebarItem[]` (Required) - The main navigation links and categories.
- `companies`: `Company[]` - List of accounts/companies the user can switch between.
- `selectedCompanyId`: `string` - The ID of the currently active company.
- `showActivityButton`: `boolean` - Whether to show the notification/activity bell.
- `onFooterDropdownClick`: `() => void` - Callback for when the user profile section is clicked.

**Usage Example:**
```tsx
import { Sidebar } from '@f1/navigation';

const AppLayout = ({ children }) => {
  const navItems = [
    { label: 'Dashboard', icon: 'home', href: '/dashboard' },
    { label: 'Reports', icon: 'chart', href: '/reports' }
  ];

  return (
    <div className="flex">
      <Sidebar 
        user={{ firstName: 'Jane', lastName: 'Doe' }} 
        options={navItems} 
      />
      <main>{children}</main>
    </div>
  );
};
```

**Edge Cases & Gotchas:**
- The Sidebar is designed to be a singleton in the application layout.
- It handles its own responsive behavior, collapsing into a mobile menu on smaller screens.