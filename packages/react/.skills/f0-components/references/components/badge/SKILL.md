---
name: badge
description: A small visual indicator used for status, counts, or labeling content. Use to highlight a state, categorize items, or display metadata. Do not use for primary navigation or standalone actions.
---

## Overview
The `Badge` component provides a compact way to display status or short labels. It supports different semantic types and optional icon integration to provide visual context.

## Props
- **icon** (optional): `object` - An icon element or configuration to display inside the badge, usually preceding the label.
- **size** (optional): `string` - Determines the scale of the badge (e.g., 'small', 'medium').
- **type** (optional): `string` - Sets the visual style and semantic meaning (e.g., 'success', 'error', 'warning', 'info', 'neutral').

## Usage Examples

### Basic Badge
Standard usage for simple text labels.
```tsx
import { Badge } from './Badge';

const StatusBadge = () => (
  <Badge type="neutral">Draft</Badge>
);
```

### Badge with Icon
Use icons to provide immediate visual recognition of the badge's meaning.
```tsx
import { Badge } from './Badge';
import { CheckIcon } from './icons';

const SuccessBadge = () => (
  <Badge 
    type="success" 
    icon={<CheckIcon />}
  >
    Completed
  </Badge>
);
```

### Semantic Variants
The `type` prop adjusts the color scheme to match the intent.
```tsx
<Badge type="error">Failed</Badge>
<Badge type="warning">Pending</Badge>
<Badge type="info">New</Badge>
```

## Best Practices
- **Keep it short**: Badge text should be concise (1-2 words). For longer descriptions, use a Tooltip or separate text element.
- **Color Meaning**: Use the `type` prop consistently (e.g., green/success for positive states, red/error for critical issues).
- **Accessibility**: Ensure the badge text provides enough context for screen readers, especially if the badge is used as a status indicator.

## Related Skills
- For Icon components used within badges, see the skill in ./references/icon.md
- For interactive labels, see the skill in ./references/tag.md
- For displaying counts on top of other elements, see the skill in ./references/indicator.md