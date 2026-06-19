---
name: empty-state
description: Use to provide feedback and guidance when a container, list, or page has no data to display. Ideal for onboarding, empty search results, or encouraging feature adoption.
---

# EmptyState

The `EmptyState` component is a layout utility used to communicate that a view is currently empty. It prevents "blank screen" syndrome by providing context, visual interest (via emojis), and clear calls to action to help users get started.

## Props

- **actions** (optional): `ReactNode[]` - An array of action elements, typically buttons, displayed below the description.
- **description** (optional): `string` - Supporting text that explains why the view is empty or how to populate it.
- **emoji** (optional): `string` - A single emoji character used as a visual icon at the top of the component.
- **title** (optional): `string` - The primary heading that summarizes the state.
- **variant** (optional): `string` - Determines the visual style. Options typically include "default", "alert", and "upsell". Default is "default".

## Usage Examples

### Basic Empty State
Use this for standard "no data" scenarios like a new account or an empty folder.

```tsx
import { EmptyState } from './EmptyState';

const MyComponent = () => (
  <EmptyState
    title="No items yet"
    description="Start by adding your first item to the list."
    emoji="📦"
  />
);
```

### With Actions
Use this to provide a clear path forward for the user.

```tsx
import { EmptyState } from './EmptyState';
import { Button } from './Button';

const MyComponent = () => (
  <EmptyState
    title="No projects found"
    description="You haven't created any projects yet. Create one to get started."
    emoji="🚀"
    actions={[
      <Button key="create" variant="primary">Create Project</Button>
    ]}
  />
);
```

### Upsell Variant
Use this to promote features that are not yet active or require an upgrade.

```tsx
import { EmptyState } from './EmptyState';

const MyComponent = () => (
  <EmptyState
    variant="upsell"
    title="Take your team’s skills to the next level"
    description="Activate Trainings to create engaging sessions and track real progress!"
    emoji="🎓"
  />
);
```

## Best Practices

- **Be Helpful**: Always provide a description that explains *why* the state is empty and *how* to fix it.
- **Clear Actions**: If the user can resolve the empty state (e.g., by creating an item), provide a primary action button.
- **Tone**: Keep the copy encouraging and concise.
- **Context**: Use the `upsell` variant specifically for marketing or feature-discovery contexts, and the `alert` variant if the empty state is due to a system issue or error.

## Related Skills

- For Button components used in the `actions` prop, see the skill in ./references/button.md
- For layout and container patterns, see the skill in ./references/layout.md