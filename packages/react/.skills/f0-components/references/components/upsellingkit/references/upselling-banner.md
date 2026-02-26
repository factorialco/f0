## UpsellingBanner

`UpsellingBanner` is a high-visibility component used to promote new features or plan upgrades at the top of a page or section.

**Props:**
- `title`: `string` (Required) - The headline of the promotion.
- `description`: `string` (Required) - The body text explaining the benefit.
- `variant`: `'default' | 'promote'` (Optional) - 'promote' uses a more vibrant color scheme to draw attention.
- `primaryAction`: `{ label: string; onClick: () => void }` (Optional) - The main button on the banner.
- `isLoading`: `boolean` (Optional) - If true, shows a skeleton state.

```tsx
import { UpsellingBanner } from '@sds/upselling-kit';

export const Example = () => (
  <UpsellingBanner
    title="Complete your financial picture"
    description="Add expenses to gain clarity and make better decisions."
    variant="promote"
    primaryAction={{
      label: "Add Expenses",
      onClick: () => handleAction()
    }}
  />
);
```

**Gotchas:**
- Use the `isLoading` prop to prevent layout shift while checking user permissions or feature flags.