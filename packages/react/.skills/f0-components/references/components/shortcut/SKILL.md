---
name: shortcut
description: Displays keyboard shortcuts or key combinations. Use to provide visual hints for keyboard interactions in menus, tooltips, or command palettes to improve user efficiency.
---

## Shortcut

The `Shortcut` component is a visual utility used to represent keyboard keys or combinations. It helps users discover and learn keyboard shortcuts associated with specific actions within the interface.

## Props

- **keys** (optional): `string[]` - An array of strings representing the sequence of keys to be displayed (e.g., `['Ctrl', 'Shift', 'P']`).

## Usage Examples

### Single Key
Used for simple triggers like the Enter or Escape keys.

```tsx
import { Shortcut } from './Shortcut';

export const Example = () => (
  <Shortcut keys={['Enter']} />
);
```

### Key Combinations
Used for complex shortcuts involving modifiers.

```tsx
import { Shortcut } from './Shortcut';

export const CommandPaletteShortcut = () => (
  <Shortcut keys={['Cmd', 'K']} />
);
```

## Variants

### Default
The standard presentation of the shortcut, suitable for most light-themed UI contexts such as dropdown menus or buttons.

### Multiple Keys
When the `keys` array contains multiple items, the component renders them in sequence, typically providing visual separation between each key.

### Inverse Variant
A high-contrast version of the component designed for use on dark backgrounds or within components that have dark surfaces, such as tooltips or dark-themed overlays.

## Best Practices

- **Consistency**: Use consistent naming for modifier keys (e.g., always use "Cmd" or "Ctrl" based on the target platform guidelines).
- **Context**: Place shortcuts near the action they trigger, such as to the right of a menu item label.
- **Platform Awareness**: Consider displaying different keys based on the user's operating system (e.g., "Cmd" for macOS and "Ctrl" for Windows).

## Related Skills

- For displaying shortcuts within tooltips, see the skill in ./references/tooltip.md
- For using shortcuts within menu structures, see the skill in ./references/menu.md
- For handling the actual keyboard events triggered by these shortcuts, see the skill in ./references/use-keyboard-shortcut.md