## Blocks

The Blocks component is a foundational layout primitive used to organize content into responsive grids, split views, and flexible arrangements. It abstracts complex CSS Flexbox and Grid logic into a declarative API, ensuring consistent spacing and alignment across the application.

Use Blocks when you need to:
- Create responsive galleries or card lists (AutoGrid).
- Divide a section into two distinct parts (Split).
- Manage wrapping behavior for dynamic content like tags or buttons.
- Align items vertically within a row.

**Props:**

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `variant` | `'auto-grid' \| 'split' \| 'inline'` | No | `'inline'` | The layout engine to use. |
| `gap` | `'small' \| 'medium' \| 'large'` | No | `'medium'` | The spacing between child elements. |
| `columns` | `number` | No | `3` | Used with `auto-grid` to define the number of columns. |
| `wrap` | `boolean` | No | `false` | If true, items will wrap to the next line when space is insufficient. |
| `grow` | `boolean` | No | `false` | If true, child elements will expand to fill the available horizontal space. |
| `verticalAlign` | `'start' \| 'center' \| 'end' \| 'stretch'` | No | `'start'` | Controls the cross-axis alignment of children. |
| `inline` | `boolean` | No | `false` | Sets the display to inline-flex/inline-grid. |

### Usage Examples

#### AutoGrid Layout
Use `auto-grid` for responsive collections where items should maintain a consistent column count.

```tsx
import { Blocks } from './layout';

const Gallery = () => (
  <Blocks variant="auto-grid" columns={3} gap="large">
    <Card title="Item 1" />
    <Card title="Item 2" />
    <Card title="Item 3" />
    <Card title="Item 4" />
  </Blocks>
);
```

#### Split Layout
Use `split` to create a two-column layout, typically for a sidebar and main content area.

```tsx
import { Blocks } from './layout';

const PageLayout = () => (
  <Blocks variant="split" gap="medium" verticalAlign="stretch">
    <aside>Sidebar Navigation</aside>
    <main>Main Content Area</main>
  </Blocks>
);
```

#### Flexible Wrapping with Grow
Use `wrap` and `grow` together for dynamic lists where items should fill the row.

```tsx
import { Blocks } from './layout';

const TagCloud = ({ tags }) => (
  <Blocks wrap grow gap="small">
    {tags.map(tag => (
      <Tag key={tag.id}>{tag.label}</Tag>
    ))}
  </Blocks>
);
```

### Best Practices & Gotchas

- **Child Constraints**: When using `grow`, ensure that child components do not have a fixed `width` or `flex-basis` that prevents them from expanding.
- **Split Variant**: The `split` variant is optimized for two children. Adding more than two children may result in unpredictable layout behavior depending on the CSS implementation.
- **Nesting**: Blocks can be nested to create complex layouts (e.g., an `auto-grid` inside a `split` main area).
- **Vertical Alignment**: Use `verticalAlign="stretch"` if you want all children in a row to have the same height, which is particularly useful for cards in a grid.
- **Accessibility**: Blocks is a structural component and does not provide semantic meaning. Always use appropriate HTML tags (like `<nav>`, `<aside>`, or `<section>`) for the children of Blocks to maintain a proper document outline.