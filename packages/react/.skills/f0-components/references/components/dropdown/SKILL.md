---
name: dropdown
description: A toggleable menu for displaying lists of actions, links, or navigation options. Use when grouping secondary actions or when screen real estate is limited.
---

# Dropdown

The Dropdown component provides a contextual menu that appears when a user interacts with a trigger element. It is highly versatile, supporting plain text, links, icons, and avatars within its menu items.

## Props

- **items** (optional): `Array<{ label: string, onClick?: () => void, href?: string, icon?: ReactNode, avatar?: string }>` - An array of objects defining the content and behavior of each menu item.
- **label** (optional): `string` - The text displayed on the default trigger button when no custom trigger is provided.

## Usage Examples

### Basic Action Menu
Use this pattern for a standard list of functional actions.

```tsx
import { Dropdown } from './Dropdown';

const actions = [
  { label: 'Edit', onClick: () => handleEdit() },
  { label: 'Duplicate', onClick: () => handleDuplicate() },
  { label: 'Delete', onClick: () => handleDelete() },
];

<Dropdown label="Options" items={actions} />
```

### Navigation Dropdown
Use the `href` property for items that should act as navigation links.

```tsx
const navItems = [
  { label: 'Documentation', href: '/docs' },
  { label: 'API Reference', href: '/api' },
  { label: 'Support', href: '/support' },
];

<Dropdown label="Resources" items={navItems} />
```

## Variants

- **Default**: A standard button trigger with a text label.
- **With Custom Trigger**: Replaces the default button with a custom element, such as an icon or a profile picture.
- **With Avatars**: Displays user avatars next to the text labels in the menu list.
- **With Labels**: Includes additional descriptive text or categories for menu items.
- **Mobile Dropdown**: A variant optimized for touch targets and mobile viewport constraints.

## Best Practices

- **Trigger Clarity**: Ensure the trigger label or icon clearly indicates that a menu will appear (e.g., using a chevron icon).
- **Grouping**: Group related actions together to help users scan the list quickly.
- **Action vs. Navigation**: Use `onClick` for state changes or functional logic and `href` for URL changes.
- **Accessibility**: Ensure the dropdown can be toggled and navigated via keyboard (Space/Enter to open, Arrow keys to navigate).

## Related Skills

- For Avatar components used within dropdown items, see the skill in ./references/avatar.md
- For Link components and routing patterns, see the skill in ./references/link.md
- For Mobile-specific layout patterns, see the skill in ./references/mobile-ui.md