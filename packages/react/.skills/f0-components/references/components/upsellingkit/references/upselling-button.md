## UpsellingButton

The `UpsellingButton` is the standard CTA for all upselling interactions. It includes specific styling to differentiate it from standard system buttons.

**Props:**
- `label`: `string` (Required) - The button text.
- `onClick`: `() => void` (Required) - Click handler.
- `variant`: `'primary' | 'outline-promote'` (Optional) - 'outline-promote' is used for secondary upsell actions.
- `size`: `'md' | 'lg'` (Default: `'md'`) - The size of the button.
- `icon`: `IconType` (Optional) - An icon to display alongside the label.
- `loading`: `boolean` (Optional) - Shows a spinner and disables interaction.
- `disabled`: `boolean` (Optional) - Disables the button.

```tsx
import { UpsellingButton } from '@sds/upselling-kit';
import { RocketIcon } from '@sds/icons';

export const Example = () => (
  <UpsellingButton
    label="Upgrade Plan"
    variant="primary"
    icon={RocketIcon}
    onClick={() => console.log('Upgrade')}
  />
);
```

**Gotchas:**
- When `loading` is true, the button width remains fixed to prevent layout jumping.