## ProductCard

The `ProductCard` is a specialized card component used to showcase a product's benefits and features. It is primarily used in marketplaces or "discover" sections to generate upsell requests.

**Props:**
- `title`: `string` (Required) - The name of the product.
- `description`: `string` (Required) - A brief summary of what the product does.
- `benefits`: `string[]` (Optional) - A list of key value points or features.
- `image`: `string | ReactNode` (Optional) - A visual representation of the product.
- `onActionClick`: `() => void` (Optional) - Callback for the primary action button.
- `actionLabel`: `string` (Optional) - The text for the action button.

```tsx
import { ProductCard } from '@sds/upselling-kit';

export const Example = () => (
  <ProductCard
    title="Flexible Compensation"
    description="Improve your team’s salary without impacting your budget."
    benefits={[
      "Tax-free benefits",
      "Easy implementation",
      "Real-time tracking"
    ]}
    onActionClick={() => handleUpsell()}
    actionLabel="Request Access"
  />
);
```

**Gotchas:**
- The card height is usually dynamic; ensure benefit strings are of similar length when displaying cards in a grid to maintain alignment.