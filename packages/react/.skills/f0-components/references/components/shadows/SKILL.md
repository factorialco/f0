---
name: shadows
description: Standardized elevation tokens for creating depth and visual hierarchy. Use to distinguish overlapping elements like cards, menus, and modals from the background. Do not use for flat UI designs where borders are sufficient.
---

# Shadows

Shadows provide visual cues about the depth and relationship between elements on the z-axis. By applying consistent elevation tokens, you can indicate which elements are interactive, floating, or prioritized over the main interface.

## Elevation API

The following tokens define the standard elevation levels available in the design system:

- **xs** (optional): `string` - Subtle shadow for small interactive elements like buttons or low-profile cards.
- **sm** (optional): `string` - Standard shadow for cards and navigation elements to provide a slight lift.
- **md** (optional): `string` - Medium elevation for interactive overlays like tooltips, dropdowns, and popovers.
- **lg** (optional): `string` - High elevation for prominent UI elements like modals and dialogs that require focus.
- **xl** (optional): `string` - Maximum elevation for large floating panels or system-level notifications.
- **none** (optional): `string` - Removes all shadows; used for flat states or nested elements.

## Usage Examples

### Applying Shadow to a Card
```tsx
import { Box } from '@theme/components';

const ElevatedCard = () => (
  <Box shadow="sm" padding="md" borderRadius="lg">
    This card uses a small shadow to indicate elevation.
  </Box>
);
```

### High Elevation for Modals
```tsx
import { Box } from '@theme/components';

const ModalContainer = ({ children }) => (
  <Box shadow="lg" backgroundColor="white" zIndex={100}>
    {children}
  </Box>
);
```

## Best Practices

- **Consistency**: Always use the predefined elevation tokens rather than hardcoding `box-shadow` values to ensure visual harmony.
- **Hierarchy**: Use higher elevation (lg, xl) for elements that appear on top of other layers, such as modals or global alerts.
- **Subtlety**: Use lower elevation (xs, sm) for layout components like cards to avoid visual clutter.
- **Light Source**: The design system assumes a consistent top-down light source; do not manually adjust shadow offsets.
- **Accessibility**: Ensure that the shadow provides enough contrast against the background for users with visual impairments to perceive the depth.

## Related Skills

- For Card components, see the skill in ./references/card.md
- For Modal components, see the skill in ./references/modal.md
- For Popover components, see the skill in ./references/popover.md
- For Tooltip components, see the skill in ./references/tooltip.md