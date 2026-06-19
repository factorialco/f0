---
name: sidebar
description: Use to provide primary navigation, company switching, and user profile access in a web application. Ideal for complex layouts requiring hierarchical menus, global search, and multi-tenant company selection.
---
## Overview
The Sidebar component serves as the primary navigation hub for the application. It integrates company selection, search functionality, hierarchical menus, and user profile management into a single collapsible container.

## Props
- **companies** (required): `Company[]` - Array of company objects for the selector.
- **isExpanded** (required): `boolean` - Controls the expanded or collapsed state of the sidebar.
- **onChange** (required): `(value: string) => void` - Callback triggered when the selection changes.
- **options** (required): `DropdownItem[]` - Configuration for the dropdown menu items.
- **placeholder** (required): `string` - Placeholder text for the search input.
- **tree** (required): `MenuCategory[]` - The hierarchical data structure representing the navigation menu.
- **user** (required): `{ firstName: string; lastName: string; avatarUrl?: string; }` - Current user profile data.
- **activityButtonShortcut** (optional): `string[]` - Keyboard shortcut keys to trigger the activity button.
- **additionalOptions** (optional): `DropdownItem[]` - Extra menu items for the dropdown.
- **favorites** (optional): `FavoriteMenuItem[]` - List of items marked as favorites by the user.
- **hasActivityUpdates** (optional): `boolean` - Indicates if the activity button should show an update badge.
- **isLoading** (optional): `boolean` - Displays a loading state for the company selector.
- **onActivityButtonClick** (optional): `() => void` - Handler for activity button interactions.
- **onClick** (optional): `() => void` - General click handler for the sidebar container.
- **onCollapse** (optional): `(category: MenuCategory, isOpen: boolean) => void` - Triggered when a menu category is expanded or collapsed.
- **onDropdownClick** (optional): `() => void` - Handler for dropdown menu interactions.
- **onFavoritesChange** (optional): `(favorites: FavoriteMenuItem[]) => void` - Callback when the user modifies their favorites.
- **onSort** (optional): `(categories: MenuCategory[]) => void` - Callback triggered when menu categories are reordered.
- **selected** (optional): `string` - The ID of the currently active navigation item.
- **shortcut** (optional): `string[]` - Keyboard shortcut for focusing the search bar (defaults to `['cmd', 'k']`).
- **showActivityButton** (optional): `boolean` - Whether to render the activity action button.
- **withNotification** (optional): `boolean` - Shows a notification dot on the sidebar header.

## Usage Example
```tsx
import { Sidebar } from './components/Sidebar';

const MyLayout = () => {
  const handleNavigation = (value: string) => {
    console.log('Navigating to:', value);
  };

  return (
    <Sidebar
      isExpanded={true}
      user={{ firstName: 'Jane', lastName: 'Doe' }}
      companies={[{ id: '1', name: 'Acme Corp' }]}
      placeholder="Search navigation..."
      onChange={handleNavigation}
      tree={[
        {
          id: 'dashboard',
          label: 'Dashboard',
          items: [{ id: 'overview', label: 'Overview' }]
        }
      ]}
      options={[{ label: 'Settings', value: 'settings' }]}
    />
  );
};
```

## Sub-components
The Sidebar is composed of several specialized components. For detailed implementation of these parts, refer to their respective skills:
- For the company switching logic, see the skill in `./references/company-selector.md`
- For the top branding area, see the skill in `./references/header.md`
- For navigation item rendering, see the skill in `./references/menu.md`
- For the search interface, see the skill in `./references/search-bar.md`
- For the user profile and footer actions, see the skill in `./references/sidebar-footer.md`
- For iconography, see the skill in `./references/icon.md`

## Variants
- **Default**: Full-featured sidebar with search, company selector, and menu.
- **Single Entry**: Optimized view when the user only has access to one company (hides the selector).
- **Loading**: Skeleton or spinner state used while fetching company or menu data.

## Best Practices
- **State Management**: Ensure `isExpanded` is synced with the parent layout to adjust main content margins accordingly.
- **Keyboard Navigation**: Always provide a `shortcut` prop to allow power users to quickly access the search functionality.
- **Hierarchy**: Keep the `tree` structure shallow (2-3 levels) to maintain readability in the collapsed state.

## Accessibility
- The sidebar supports keyboard shortcuts (default `Cmd+K`) for search activation.
- Ensure all icons used within the `tree` or `options` have appropriate aria-labels if they convey meaning.
- The collapsed state should use appropriate ARIA attributes to indicate that labels are hidden but accessible to screen readers.

## Sub-components

- **CompanySelector**: See ./references/companyselector.md
- **Header**: See ./references/header.md
- **Icon**: See ./references/icon.md
- **Menu**: See ./references/menu.md
- **SearchBar**: See ./references/searchbar.md
- **SidebarFooter**: See ./references/sidebarfooter.md