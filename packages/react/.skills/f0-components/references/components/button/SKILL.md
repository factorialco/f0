---
name: button
description: A versatile interactive component for triggers, form submissions, and navigation. Use when a user needs to perform an action or navigate to a new page. Supports loading states, icons, and multiple visual variants.
---

# Button

The `Button` component is the primary tool for user interaction. It supports various visual styles, sizes, and functional states like loading and disabled.

## Props/API

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `'Click me'` | The text displayed inside the button. |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'default'` | The visual style of the button. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The vertical and horizontal padding/font-size. |
| `href` | `string` | - | If provided, renders the button as an `<a>` tag. |
| `disabled` | `boolean` | `false` | Prevents user interaction and applies disabled styling. |
| `loading` | `boolean` | `false` | Shows a loading spinner and disables interaction. |
| `icon` | `ReactNode` | - | An icon to display alongside the label. |
| `onClick` | `() => void \| Promise<void>` | - | Function called when the button is clicked. |
| `data-test` | `string` | - | Test identifier for automation. |

## Usage Examples

### Basic Button
```tsx
import { Button } from './components/Button';

const MyComponent = () => (
  <Button 
    label="Save Changes" 
    variant="primary" 
    onClick={() => console.log('Saved')} 
  />
);
```

### Async Loading State
Use the `loading` prop for asynchronous actions to provide visual feedback and prevent double-submissions.
```tsx
import { Button } from './components/Button';

const SubmitButton = ({ isSubmitting }) => (
  <Button 
    label="Submit" 
    loading={isSubmitting} 
    variant="default" 
  />
);
```

### Button as a Link
When an `href` is provided, the component behaves like a standard anchor tag while maintaining button styling.
```tsx
<Button label="Go to Dashboard" href="/dashboard" />
```

## Variants

- **Sizes**: Available in `sm`, `md`, and `lg`. Use `sm` for dense UIs and `lg` for call-to-actions.
- **Icon Variants**: Buttons can include icons or emojis. For groups of icon-only buttons, see the `icon-button-group` skill.
- **Ellipsis**: If the label is too long for the container, the button supports text truncation with an ellipsis.

## Best Practices

- **Labeling**: Always provide a clear, action-oriented label (e.g., "Send Email" instead of "Submit").
- **Loading States**: Always use the `loading` prop for API calls to prevent multiple clicks.
- **Disabled vs. Loading**: Use `disabled` for actions that are currently unavailable due to form validation. Use `loading` for actions currently in progress.
- **Accessibility**: If using an icon-only button, ensure an `aria-label` is provided for screen readers.

## Related Skills
- For grouping multiple icon buttons, see the skill in `./icon-button-group/SKILL.md`.
- For standard text links without button styling, see the skill in `./link/SKILL.md`.