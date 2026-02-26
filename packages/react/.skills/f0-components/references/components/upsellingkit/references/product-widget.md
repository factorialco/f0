## ProductWidget

The `ProductWidget` is a compact version of a product promotion, designed to fit into smaller spaces like sidebars, dashboards, or utility panels.

**Props:**
- `title`: `string` (Required) - Short title of the product.
- `subtitle`: `string` (Optional) - Brief context or status.
- `icon`: `IconType` (Optional) - An icon representing the product.
- `onClick`: `() => void` (Optional) - Makes the entire widget clickable.
- `variant`: `'default' | 'compact'` (Optional) - Controls the padding and layout density.

```tsx
import { ProductWidget } from '@sds/upselling-kit';
import { StarIcon } from '@sds/icons';

export const Example = () => (
  <ProductWidget
    title="New: Expenses"
    subtitle="Manage team spend"
    icon={StarIcon}
    onClick={() => navigateToExpenses()}
  />
);
```

**Gotchas:**
- Avoid using long titles in the widget as they will be truncated in narrow containers.