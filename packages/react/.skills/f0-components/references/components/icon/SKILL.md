---
name: icon
description: Displays graphical symbols from the icon library. Use for visual cues, navigation, and status indicators to provide consistent iconography across the interface.
---

## Overview
The `Icon` component is a wrapper used to display icons from the system's icon library. it ensures consistent sizing, alignment, and coloring across the application.

## Props
- **icon** (optional): `object` - The icon object imported from the library to be displayed.
- **size** (optional): `string` - The size of the icon (e.g., 'small', 'medium', 'large').
- **color** (optional): `string` - The color token to apply to the icon.

## Usage Examples

### Basic Usage
Import the specific icon and pass it to the `Icon` component.

```tsx
import { Icon } from '@components/icon';
import { SettingsIcon } from '@icons-library';

const SettingsButton = () => (
  <Icon icon={SettingsIcon} size="md" />
);
```

### Applying Colors
Always prefer using design system tokens for colors.

```tsx
import { Icon } from '@components/icon';
import { AlertIcon } from '@icons-library';

const ErrorMessage = () => (
  <div className="flex items-center">
    <Icon icon={AlertIcon} color="token-color-error" />
    <span>An error occurred</span>
  </div>
);
```

## Best Practices
- **Token Colors**: Use theme-provided color tokens instead of hardcoded hex values to ensure compatibility with dark mode and branding updates.
- **Direct Usage**: While the `Icon` component provides a wrapper for sizing and coloring, icons from the library can also be used directly if specific component logic is not required.
- **Meaningful Icons**: Ensure icons used without accompanying text have an `aria-label` for screen readers.
- **Consistency**: Use the same icon for the same action throughout the application to maintain a predictable user experience.

## Related Skills
- For components that frequently use icons as decorators, see the skill in ./references/button.md
- For status indicators that combine icons and text, see the skill in ./references/badge.md