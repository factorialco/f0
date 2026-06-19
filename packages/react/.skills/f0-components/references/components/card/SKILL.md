---
name: card
description: A versatile container for grouping related information. Use for dashboard items, list entries, or content previews. Supports images, avatars, metadata, and interactive actions.
---

# Card

The Card component is a flexible container used to group related content and actions. It is commonly used in grids, lists, or dashboards to provide a summary of an entity.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | - | The primary heading of the card. |
| `description` | `string` | - | Supporting text displayed below the title. |
| `imageFit` | `'fit-width' \| 'cover' \| 'contain'` | `'fit-width'` | How the image should be displayed within its container. |
| `imageSize` | `'sm' \| 'md' \| 'lg'` | `'sm'` | The size of the image container. |
| `avatar` | `object` | - | Configuration for an avatar component. |
| `compact` | `boolean` | `false` | Reduces padding and font sizes for dense layouts. |
| `metadata` | `ReactNode[]` | - | Array of elements (tags, text, icons) displayed as metadata. |
| `otherActions` | `ReactNode[]` | - | Array of action elements (buttons, menus) displayed in the card. |
| `selectable` | `boolean` | `false` | Enables a selected state for the card. |

## Usage Examples

### Basic Card
```tsx
import { Card } from '@factorial/ds';

const MyComponent = () => (
  <Card
    title="Project Alpha"
    description="A comprehensive overview of the upcoming product launch."
    metadata={['Marketing', 'Q4 2023']}
  />
);
```

### Card with Image and Actions
```tsx
import { Card, Button } from '@factorial/ds';

const MyComponent = () => (
  <Card
    title="Design System"
    description="Documentation for the core UI components."
    imageFit="cover"
    imageSize="md"
    otherActions={[
      <Button variant="secondary">Edit</Button>,
      <Button variant="primary">View</Button>
    ]}
  />
);
```

### Compact State
Use the `compact` prop for sidebars or dense lists where vertical space is limited.
```tsx
<Card compact title="Small Item" description="Brief detail" />
```

## Variants

### Skeleton
Use the skeleton variant to indicate a loading state while data is being fetched.
- `Skeleton`: Standard loading state.
- `Skeleton Compact`: Loading state for compact cards.

### Selectable
When `selectable` is true, the card can handle selection states, often used in multi-select lists or configuration panels.

### Progress Bar
Cards can include progress indicators to show completion status of tasks or projects.

## Best Practices

- **Consistency**: Use consistent `imageSize` and `imageFit` when cards are displayed in a grid.
- **Actions**: Limit the number of `otherActions` to 2-3 to avoid cluttering the card interface.
- **Content Length**: Keep descriptions concise. If long text is required, consider linking to a detail page.
- **Accessibility**: Ensure that interactive elements within the card (links, buttons) have descriptive labels.

## Related Skills

- For user profile images within cards, see the skill in `./avatar/SKILL.md`.
- For progress indicators within cards, see the skill in `./progress-bar/SKILL.md`.
- For action buttons, see the skill in `./button/SKILL.md`.