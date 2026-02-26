---
name: icon-badge
description: Use to provide compact visual status indicators or alert levels using icons. Ideal for showing the state or nature of an item in a space-constrained UI where text labels are not feasible.
---

# IconBadge

IconBadge is a compact visual indicator designed to provide quick cues about the state or nature of an item. Unlike standard badges that contain text, the IconBadge relies on iconography to communicate status or alert levels.

## Props

- **icon** (required): `React.ReactNode` - The icon element to be rendered inside the badge.
- **type** (optional): `'success' | 'warning' | 'error' | 'info' | 'neutral'` - Defines the semantic color scheme of the badge. Defaults to `neutral`.
- **size** (optional): `'sm' | 'md' | 'lg'` - Controls the padding and icon scale. Defaults to `md`.
- **className** (optional): `string` - Additional CSS classes for custom styling.

## Usage Examples

### Basic Status Indicator
```tsx
import { IconBadge } from './IconBadge';
import { CheckIcon, AlertTriangleIcon } from './icons';

export const StatusExample = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <IconBadge icon={<CheckIcon />} type="success" />
    <IconBadge icon={<AlertTriangleIcon />} type="warning" />
  </div>
);
```

### Different Sizes
```tsx
import { IconBadge } from './IconBadge';
import { InfoIcon } from './icons';

export const SizeVariants = () => (
  <>
    <IconBadge icon={<InfoIcon />} size="sm" type="info" />
    <IconBadge icon={<InfoIcon />} size="md" type="info" />
    <IconBadge icon={<InfoIcon />} size="lg" type="info" />
  </>
);
```

## Variants

The component primarily varies by `type`, which maps to specific semantic meanings:
- **Success**: Typically green, used for completed states or positive confirmations.
- **Warning**: Typically amber/yellow, used for states requiring user attention or caution.
- **Error**: Typically red, used for critical failures or high-priority alerts.
- **Info**: Typically blue, used for neutral information or helpful tips.
- **Neutral**: Typically grey, used for default or inactive states.

## Best Practices

- **Clarity**: Ensure the icon used is universally recognizable for the status it represents.
- **Context**: Use IconBadges near the element they describe (e.g., next to a filename or a list item).
- **Accessibility**: Always ensure the icon has an appropriate `aria-label` or that the surrounding context makes the status clear to screen reader users.
- **Avoid Overuse**: Too many badges in a single view can create visual noise and reduce the effectiveness of the alerts.

## Related Skills

- For standard text-based badges, see the skill in ./references/badge.md
- For general icon usage and available library icons, see the skill in ./references/icons.md