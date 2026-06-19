---
name: ai-button
description: A specialized button for AI-driven actions. Use to trigger generative tasks, AI suggestions, or automated workflows where a distinct visual treatment for AI is required.
---

# AIButton

The `AIButton` is a specialized button component designed for AI-related interactions. It provides a consistent visual language for AI-powered features, distinguishing them from standard UI actions.

## Props

- **disabled** (optional): `boolean` - The button is inactive and does not respond to interaction.
- **hideLabel** (optional): `boolean` - Hides the label visually (for icon-only buttons), but keeps it accessible for screen readers.
- **icon** (optional): `ReactNode` - Adds an icon to the button.
- **label** (optional): `string` - The visible label for the button.
- **onClick** (optional): `() => void` - Callback fired when the button is clicked.
- **size** (optional): `string` - Sets the button size (e.g., 'small', 'medium', 'large').
- **tooltip** (optional): `string` - The tooltip to show when the button is hovered.

## Usage Examples

### Standard AI Action
Use this for primary AI triggers like "Generate" or "Summarize".

```tsx
import { AIButton } from './AIButton';
import { SparklesIcon } from './icons';

export const MyComponent = () => (
  <AIButton
    label="Generate Summary"
    icon={<SparklesIcon />}
    onClick={() => console.log('AI Action Triggered')}
  />
);
```

### Icon Only
Use for compact layouts or toolbars. Always provide a `tooltip` when `hideLabel` is true.

```tsx
<AIButton
  label="AI Assistant"
  icon={<RobotIcon />}
  hideLabel
  tooltip="Open AI Assistant"
  onClick={handleOpen}
/>
```

## Variants

### Sizes
The component supports multiple sizes to fit different layout contexts. Common values include `small`, `medium`, and `large`.

### Disabled State
When the `disabled` prop is true, the button prevents user interaction and applies a visual disabled style. Use this when an AI process is already running or prerequisites are not met.

## Best Practices

- **Labeling**: Always provide a descriptive `label`. If the label is hidden via `hideLabel`, ensure the `tooltip` prop is used to maintain context for sighted users and accessibility for screen readers.
- **Context**: Only use `AIButton` for features involving artificial intelligence or machine learning. For standard actions (Save, Delete, Cancel), use the standard Button component.
- **Feedback**: Since AI actions can take time, consider managing the `disabled` state or showing a loading indicator (if supported by the icon prop) during the request.

## Related Skills

- For Tooltip implementation details, see the skill in ./references/tooltip.md
- For available icons, see the skill in ./references/icons.md
- For standard button patterns, see the skill in ./references/button.md