## ChevronToggle

A simple, controlled icon component that displays a chevron and rotates it based on an open/closed state. Use this for accordions, collapsible sidebars, or dropdown triggers.

**Props:**
- `isOpen`: `boolean` (Required) - Controls the rotation state (usually 0deg vs 180deg).
- `size`: `number` - The size of the icon in pixels.
- `className`: `string` - Additional CSS classes for custom styling or transitions.

```tsx
import { useState } from 'react';
import { ChevronToggle } from './chevron-toggle';

export const Collapsible = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <button onClick={() => setOpen(!open)} className="flex items-center">
      <span>Toggle Details</span>
      <ChevronToggle isOpen={open} size={20} />
    </button>
  );
};
```