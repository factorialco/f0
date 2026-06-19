---
name: chip
description: Use to represent user-supplied information, tags, or entities. Ideal for filter criteria, contact chips, or removable tags. Do not use for primary navigation or standalone buttons.
---

## Overview
The Chip component is a compact element used to represent an input, attribute, or action. It typically contains a label and can optionally include an avatar, icon, or a removal button.

## Props
- **avatar** (optional): `ReactNode` - If defined, an avatar will be displayed at the start of the chip.
- **icon** (optional): `enum` - If defined, a specific icon will be displayed in the chip.
- **label** (optional): `string` - The text content of the chip.
- **onClose** (optional): `() => void` - If defined, a close icon is displayed and the chip becomes interactive/removable.
- **variant** (optional): `string` - Defines the visual style variant of the chip.
- **deactivated** (optional): `boolean` - When true, applies a deactivated visual state to the avatar and label.

## Usage Examples

### Basic Chip
```tsx
import { Chip } from '@components/chip';

export const BasicExample = () => (
  <Chip label="Simple Tag" />
);
```

### Removable Chip
Use the `onClose` prop to allow users to dismiss the chip.
```tsx
import { Chip } from '@components/chip';

export const RemovableExample = () => (
  <Chip 
    label="Dismissible" 
    onClose={() => console.log('Chip removed')} 
  />
);
```

### Chip with Avatar
Ideal for representing users or entities with profile images.
```tsx
import { Chip } from '@components/chip';
import { Avatar } from '@components/avatar';

export const AvatarExample = () => (
  <Chip 
    label="John Doe" 
    avatar={<Avatar src="/path/to/image.jpg" />} 
  />
);
```

### Chip with Icon
```tsx
import { Chip } from '@components/chip';

export const IconExample = () => (
  <Chip 
    label="Settings" 
    icon="settings" 
  />
);
```

## Variants and States

### Deactivated State
When a chip needs to appear disabled or inactive, use the `deactivated` prop. This affects the opacity and interaction of both the label and the avatar.

### Removable State
Providing an `onClose` handler automatically renders a "close" icon. This is the standard pattern for multi-select filters or tag inputs.

## Related Skills
- For Avatar components, see the skill in ./references/avatar.md
- For Icon components, see the skill in ./references/icon.md
- For Button components, see the skill in ./references/button.md