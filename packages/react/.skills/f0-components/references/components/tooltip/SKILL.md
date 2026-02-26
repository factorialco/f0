---
name: tooltip
description: Provides brief, supplementary information or keyboard shortcuts when hovering over or focusing on an element. Use for icon-only buttons, clarifying UI actions, or displaying associated hotkeys.
---

## Overview
The `Tooltip` component is a wrapper used to provide additional context to a UI element. It appears on hover or focus and is essential for accessibility when using icon-only triggers.

## Props
- **children** (required): `React.ReactNode` - The trigger element that the tooltip attaches to.
- **label** (optional): `string` - The primary text content of the tooltip.
- **description** (optional): `string` - Secondary text displayed below the label for more detailed information.
- **shortcut** (optional): `ComponentProps["keys"]` - An array of keys representing a keyboard shortcut associated with the trigger action.
- **delay** (optional): `number` [default: 700] - The duration in milliseconds to wait before showing the tooltip.
- **instant** (optional): `boolean` [default: false] - When true, the tooltip appears immediately without the default delay.

## Usage Examples

### Basic Tooltip
Use a simple label to describe an icon-only button.
```tsx
import { Tooltip, Button } from './components';

const SaveButton = () => (
  <Tooltip label="Save Changes">
    <Button icon="save" />
  </Tooltip>
);
```

### With Shortcut and Description
Use for complex actions where the user benefits from knowing the hotkey and a brief explanation.
```tsx
<Tooltip 
  label="Print" 
  description="Send this document to the default printer."
  shortcut={["mod", "p"]}
>
  <Button icon="print" />
</Tooltip>
```

### Instant Trigger
Use `instant` for high-frequency UI elements where immediate feedback is preferred.
```tsx
<Tooltip label="Close" instant>
  <IconButton icon="close" />
</Tooltip>
```

## Best Practices
- **Keep it brief**: Tooltips should contain short sentences or fragments. If you need more than two lines, consider a Popover or Modal.
- **Don't repeat text**: If a button already has a visible text label, a tooltip repeating that same text is redundant unless it adds a shortcut or description.
- **Accessibility**: Ensure the child element is focusable (like a button or link) so keyboard users can trigger the tooltip.
- **Critical Info**: Never put information essential to the completion of a task solely inside a tooltip, as they are transient and hidden by default.

## Related Skills
- For keyboard shortcut formatting and key definitions, see the skill in ./references/shortcut.md
- For button components often used as triggers, see the skill in ./references/button.md