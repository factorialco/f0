---
name: standard-layout
description: A foundational layout component providing consistent page structure and spacing. Use for standard application pages requiring a centered content area with optional width constraints (Default or Narrow).
---

# StandardLayout

The `StandardLayout` component serves as the primary structural wrapper for application pages. It ensures consistent horizontal alignment, padding, and max-width constraints across different views.

## Props

- **children** (optional): `React.ReactNode` - The content to be rendered within the layout container.

## Usage

### Default Layout
The default variant is used for standard application pages, providing a responsive container that adapts to the screen size.

```tsx
import { StandardLayout } from './StandardLayout';

const Page = () => {
  return (
    <StandardLayout>
      <h1>Main Content</h1>
      <p>This content is wrapped in the standard page constraints.</p>
    </StandardLayout>
  );
};
```

### Narrow Layout
The narrow variant constrains the content to a smaller maximum width. This is ideal for focused tasks, such as:
- Settings pages
- Form-heavy interfaces
- Article or blog content
- Login/Authentication flows

```tsx
import { StandardLayout } from './StandardLayout';

const NarrowPage = () => {
  return (
    <StandardLayout variant="narrow">
      <h2>Focused Content</h2>
      <p>This layout is narrower to improve readability and focus.</p>
    </StandardLayout>
  );
};
```

## Variants

- **Default**: The standard responsive width for general purpose pages.
- **Narrow**: A constrained width variant that indicates specific screen borders for focused content.

## Best Practices

- **Consistency**: Use `StandardLayout` across all standard pages to maintain visual alignment throughout the application.
- **Nesting**: Avoid nesting multiple `StandardLayout` components. It should typically be used near the top of the component tree for a specific route.
- **Content Alignment**: While the layout handles the outer container, internal grid systems or flexbox should be used within `children` to organize specific page elements.

For related layout patterns or navigation components, see the skill in ./references/app-shell.md.