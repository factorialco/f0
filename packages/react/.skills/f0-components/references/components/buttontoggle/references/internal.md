## Internal (F0ButtonToggle)

The Internal version of the `F0ButtonToggle` component exposes low-level props for granular control over the component's state and behavior. While the standard `F0ButtonToggle` handles most use cases, the Internal variant is intended for advanced implementations where the developer must manage the toggle state externally or customize the transition logic between states.

It functions as a controlled two-state button, acting similarly to a checkbox but with the visual weight of a primary action button.

**When to use:**
- When the toggle state needs to be synchronized with an external state management library (e.g., Redux, Zustand, or React Hook Form).
- When you need to intercept the toggle event to perform validation or asynchronous operations before updating the UI.
- When building complex composite components that require direct access to the button's internal properties.

**Props:**
- `isActive`: `boolean` (Required) - The current state of the toggle. `true` represents the active/on state.
- `onToggle`: `(newState: boolean) => void` (Required) - Callback function executed when the user clicks the button. It receives the next intended state.
- `variant`: `'single-icon' | 'dual-icon'` (Default: `'single-icon'`) - Determines the visual strategy. `single-icon` uses one icon with style changes; `dual-icon` switches between two distinct icons.
- `size`: `'compact' | 'expanded'` (Default: `'expanded'`) - Controls the padding and scale of the component.
- `icon`: `ReactNode` - The icon used when `variant` is set to `single-icon`.
- `iconActive`: `ReactNode` - The icon displayed when `isActive` is `true` in `dual-icon` mode.
- `iconInactive`: `ReactNode` - The icon displayed when `isActive` is `false` in `dual-icon` mode.
- `disabled`: `boolean` (Default: `false`) - If `true`, the button is non-interactive and visually greyed out.
- `className`: `string` - Optional CSS class for custom styling overrides.
- `ariaLabel`: `string` (Required for a11y) - Provides a text description for screen readers, as the component is primarily icon-based.

**Usage Examples:**

### Dual Icon Implementation (e.g., Microphone Toggle)
```tsx
import { F0ButtonToggleInternal } from './internal';
import { Mic, MicOff } from 'lucide-react';
import { useState } from 'react';

export const AudioControl = () => {
  const [isMuted, setIsMuted] = useState(false);

  const handleToggle = (nextState: boolean) => {
    // Perform side effects here
    console.log(`Microphone is now ${nextState ? 'OFF' : 'ON'}`);
    setIsMuted(nextState);
  };

  return (
    <F0ButtonToggleInternal
      isActive={isMuted}
      onToggle={handleToggle}
      variant="dual-icon"
      iconActive={<MicOff size={18} />}
      iconInactive={<Mic size={18} />}
      size="expanded"
      ariaLabel="Toggle Mute"
    />
  );
};
```

### Compact Single Icon Implementation
```tsx
import { F0ButtonToggleInternal } from './internal';
import { Star } from 'lucide-react';

<F0ButtonToggleInternal
  isActive={true}
  onToggle={(state) => console.log(state)}
  variant="single-icon"
  icon={<Star size={14} />}
  size="compact"
  ariaLabel="Favorite"
/>
```

**Edge Cases & Gotchas:**
- **Controlled Component:** Because this is the internal/low-level version, it does not maintain its own state. If you do not update the `isActive` prop via the `onToggle` callback, the button will appear stuck.
- **Accessibility:** Since this component often lacks a text label, the `ariaLabel` prop is critical. Ensure the label describes the *action* (e.g., "Toggle Mute") rather than just the current state.
- **Icon Sizing:** When using the `compact` variant, ensure the icons passed via props are appropriately sized (typically 14px-16px) to prevent layout overflow.

**Related Skills:**
- For the standard high-level implementation, see the skill in `./f0-button-toggle/SKILL.md`.