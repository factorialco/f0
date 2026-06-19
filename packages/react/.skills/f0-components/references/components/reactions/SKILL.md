---
name: reactions
description: Interactive reaction component for displaying and selecting emoji-based responses. Use when users need to express sentiment or interact with content via predefined reaction sets, such as on posts, comments, or messages.
---

# Reactions

The Reactions component provides a standardized interface for users to view and toggle emoji-based responses. It handles the display of reaction counts and indicates which reactions the current user has already selected.

## Props

- **items** (optional): `ReactionItem[]` - An array of reaction objects containing identifiers, symbols, counts, and active states.
- **onInteraction** (optional): `(id: string) => void` - Callback function triggered when a user clicks a reaction item to add or remove it.

## Usage Examples

### Standard Implementation
```tsx
import { Reactions } from './Reactions';

const demoItems = [
  { id: 'like', emoji: '👍', count: 12, active: true },
  { id: 'rocket', emoji: '🚀', count: 3, active: false },
  { id: 'eyes', emoji: '👀', count: 7, active: false }
];

const handleReaction = (id: string) => {
  // Logic to update reaction state or API call
  console.log(`Toggled reaction: ${id}`);
};

export const PostFooter = () => (
  <Reactions 
    items={demoItems} 
    onInteraction={handleReaction} 
  />
);
```

## Variants

### Default
The standard state where the component renders a horizontal list of reaction chips based on the `items` array. Each chip displays the emoji and the current count.

### Empty
When no `items` are provided or the array is empty, the component renders in its empty state. Use this when content has not yet received any interactions but is eligible for them.

## Best Practices

- **Optimistic Updates**: Trigger visual changes immediately upon `onInteraction` before waiting for server confirmation to ensure a responsive feel.
- **Clarity**: Use standard emojis that have universally understood meanings to avoid user confusion.
- **Placement**: Position reactions consistently (usually at the bottom of a content block) so users can easily find them.

## Related Skills

- For the icons used within reaction items, see the skill in ./references/icon.md
- For displaying the list of users who reacted, see the skill in ./references/tooltip.md
- For the button patterns used in reaction chips, see the skill in ./references/button.md