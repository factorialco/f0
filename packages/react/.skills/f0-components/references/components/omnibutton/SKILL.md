---
name: omnibutton
description: A multi-functional action button used for primary navigation or contextual menus. Use when a single entry point needs to provide multiple related actions or indicate system updates.
---

# Omnibutton

The Omnibutton is a versatile UI element designed to serve as a central hub for user actions. It is typically used as a floating action button or a primary header action that expands to reveal a list of related tasks or navigation points.

## Props

- **hasNewUpdate** (optional): `boolean` - When true, displays a visual notification indicator (e.g., a badge or dot) to signal new content or required user attention.
- **label** (optional): `string` - The text label associated with the button, providing immediate context for its primary function.
- **options** (optional): `array` - A collection of action objects that define the menu items appearing when the button is triggered.

## Usage Examples

### Basic Implementation
Use this pattern for standard contextual menus.

```tsx
import { Omnibutton } from './Omnibutton';

const HeaderActions = () => {
  const menuOptions = [
    { label: 'View Profile', onClick: () => console.log('Profile') },
    { label: 'Account Settings', onClick: () => console.log('Settings') },
    { label: 'Logout', onClick: () => console.log('Logout') },
  ];

  return (
    <Omnibutton 
      label="Menu" 
      options={menuOptions} 
    />
  );
};
```

### Indicating Updates
Use the `hasNewUpdate` prop to draw attention to new features or system changes within the menu.

```tsx
<Omnibutton 
  label="Notifications" 
  hasNewUpdate={true}
  options={notificationOptions}
/>
```

## Variants

- **Default**: The standard state of the button with a label and dropdown options.
- **With New Update**: Includes a visual highlight or badge. Use this state specifically when background processes have finished or when new data is available that the user hasn't seen.

## Best Practices

- **Labeling**: Keep labels short (1-2 words). If the icon is sufficiently descriptive, the label may be omitted in compact layouts.
- **Option Grouping**: Ensure that the `options` array contains logically related actions to maintain a predictable user experience.
- **Placement**: Position the Omnibutton in a consistent, easily accessible location, such as the top-right corner of a dashboard or as a floating element in the bottom-right.

## Related Skills

- For menu item styling and behavior, see the skill in ./references/menu-item.md
- For notification badge patterns, see the skill in ./references/notification-badge.md
- For general button design tokens, see the skill in ./references/button-base.md