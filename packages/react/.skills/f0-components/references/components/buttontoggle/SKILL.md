name: f0-button-toggle
description: A two-state toggle button for switching between modes or states. Use for binary actions like mute/unmute, show/hide, or active/inactive states where a prominent visual representation is preferred over a standard checkbox.
```

# F0ButtonToggle

The `F0ButtonToggle` is a two-state component that allows users to switch between two modes. While it functions similarly to a checkbox, it provides a more prominent visual representation suitable for primary actions and toolbars.

## Props

| Prop | Type | Description |
| :--- | :--- | :--- |
| `label` | `string \| [string, string]` | **Required.** Accessible label. Use an array to provide specific labels for the selected and unselected states. |
| `icon` | `IconType \| [IconType, IconType]` | Icon(s) to display. Use an array to switch icons based on state (e.g., `[VolumeHigh, VolumeMute]`). |
| `selected` | `boolean` | Controlled state of the button. |
| `onSelectedChange` | `(selected: boolean) => void` | Callback fired when the toggle state changes. |
| `defaultSelected` | `boolean` | Initial state for uncontrolled usage. |
| `variant` | `'compact' \| 'expanded'` | Visual style. Defaults to `'compact'`. |
| `size` | `'sm'` | The size of the button. |
| `disabled` | `boolean` | Prevents user interaction when true. |

## Usage Examples

### Basic Uncontrolled Toggle
Use `defaultSelected` for simple state management where the parent doesn't need to sync the state constantly.

```tsx
import { F0ButtonToggle } from '@factorial/ui';
import { StarIcon } from '@factorial/icons';

export const FavoriteToggle = () => (
  <F0ButtonToggle
    label="Favorite"
    icon={StarIcon}
    defaultSelected={false}
  />
);
```

### Controlled Toggle with Dual Icons
Use an array for `icon` and `label` to provide distinct visual and accessible feedback for each state.

```tsx
import { useState } from 'react';
import { F0ButtonToggle } from '@factorial/ui';
import { MicIcon, MicOffIcon } from '@factorial/icons';

export const MuteButton = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <F0ButtonToggle
      label={['Mute', 'Unmute']}
      icon={[MicIcon, MicOffIcon]}
      selected={isMuted}
      onSelectedChange={setIsMuted}
      variant="expanded"
    />
  );
};
```

## Variants

### Single vs. Dual Icon
- **Single Icon**: Best for states where the icon represents the object being acted upon (e.g., a "Bookmark" icon that fills/unfills).
- **Dual Icon**: Best for binary opposites where the "off" state has a specific conventional icon (e.g., `Visibility` vs `VisibilityOff`).

### Compact vs. Expanded
- **Compact (Default)**: Minimal footprint, ideal for dense toolbars or sidebars.
- **Expanded**: Larger hit area and visual weight, suitable for primary mode switching in main content areas.

## Best Practices

- **Accessibility**: Always provide a `label`. If the button's meaning changes when active (e.g., "Follow" vs "Following"), use the array format `['Follow', 'Following']` to ensure screen readers announce the correct context.
- **Visual Feedback**: Use the `selected` state to indicate an active mode, not just a momentary action. If the action is momentary, use a standard `Button` instead.
- **Consistency**: Avoid mixing `compact` and `expanded` variants within the same button group or toolbar.

## Related Skills
- For standard button components, see the skill in `./button/SKILL.md`.
- For icon definitions and available types, see the skill in `./icons/SKILL.md`.