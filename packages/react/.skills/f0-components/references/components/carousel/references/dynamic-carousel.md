## DynamicCarousel

The DynamicCarousel is an extension of the standard Carousel component designed to handle data-driven content. It is specifically optimized for scenarios where the carousel items are generated from an array of data, such as API responses or dynamic lists. Use this when the content is not static and requires a mapping function to render items.

**Props:**
- `items`: `any[]` (Required) - The array of data objects to be rendered as slides.
- `renderItem`: `(item: any, index: number) => React.ReactNode` (Required) - A function that takes an item from the data array and returns a React element.
- `autoplay`: `boolean` (Optional, Default: `false`) - Inherited from Carousel; enables automatic sliding.
- `sneakPeek`: `boolean` (Optional, Default: `false`) - Inherited from Carousel; shows a preview of adjacent slides.
- `columns`: `Record<string, number>` (Optional) - Defines responsive item counts per view.
- `isLoading`: `boolean` (Optional, Default: `false`) - If true, can be used to show a loading state or skeleton screens within the carousel container.

**Usage Examples:**

*Rendering from an API response:*
```tsx
import { DynamicCarousel } from './DynamicCarousel';

const ProductList = ({ products }) => (
  <DynamicCarousel 
    items={products}
    renderItem={(product) => (
      <ProductCard 
        key={product.id} 
        title={product.name} 
        price={product.price} 
      />
    )}
    columns={{ default: 1, md: 3 }}
  />
);
```

**Edge Cases & Gotchas:**
- **Empty States:** Always handle the case where the `items` array might be empty to avoid rendering an empty container.
- **Key Prop:** Ensure the `renderItem` function returns an element with a unique `key` to maintain React reconciliation performance.
- **Performance:** For very large datasets, ensure the items being rendered are lightweight, as the carousel typically renders all items in the DOM or uses a windowing technique that depends on the underlying implementation.
- **Related Skills:** For the base carousel logic, see the skill in ./carousel/SKILL.md.