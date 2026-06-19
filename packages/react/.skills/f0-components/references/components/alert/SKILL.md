---
name: alert
description: Use to display brief, important messages, status updates, or calls to action. Trigger when users need contextual feedback regarding workspace limits, system states, or feature discovery without interrupting their primary workflow.
---

# Alert

The `Alert` component provides contextual feedback messages for typical user actions or system states. It is designed to be noticeable but non-intrusive, often including a title, description, and optional actions.

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `title` | `string` | Yes | - | The main heading for the alert. |
| `description` | `string` | Yes | - | Secondary text providing additional information. |
| `variant` | `enum` | No | `neutral` | Visual style of the alert (e.g., `neutral`, `info`, `success`, `warning`, `error`). |
| `action` | `object` | No | - | Button configuration: `{ label: string; disabled?: boolean; onClick: () => void; }`. |
| `link` | `object` | No | - | Link configuration: `{ label: string; href: string; }`. |
| `icon` | `IconType` | No | - | Custom icon to display. |

## Usage Examples

### Standard Informational Alert
Use this pattern for general notifications or feature onboarding.

```tsx
import { Alert } from './Alert';

export const WorkspaceAlert = () => (
  <Alert
    variant="info"
    title="Your workspace includes up to 3 invoices."
    description="Start creating invoices: it's free with your plan!"
    action={{
      label: "Create Invoice",
      onClick: () => console.log("Action clicked"),
    }}
    link={{
      label: "Learn more",
      href: "/billing",
    }}
  />
);
```

### Alert with Disabled Action
Use when a requirement must be met before the action becomes available.

```tsx
<Alert
  title="Storage Limit Reached"
  description="Please upgrade your plan to upload more files."
  variant="warning"
  action={{
    label: "Upload",
    disabled: true,
    onClick: () => {},
  }}
/>
```

## Variants and Layouts

- **Neutral**: The default state for standard information.
- **Info**: Used for helpful tips or non-critical system updates.
- **Narrow**: A compact version for use in sidebars or constrained containers.
- **In Dialog**: Specifically adjusted for placement within modal components to ensure proper padding and alignment.

## Best Practices

- **Conciseness**: Keep the `title` under 5-7 words and the `description` to 1-2 sentences.
- **Single Primary Action**: Use the `action` prop for the most important task. Use the `link` prop for secondary documentation or external resources.
- **Appropriate Variant**: Use `error` or `warning` only for items requiring immediate attention or indicating failure. Use `info` or `neutral` for general guidance.

## Related Skills

- For icon selection and `IconType` definitions, see the skill in `./icon/SKILL.md`.
- For button behavior and styling used in the `action` prop, see the skill in `./button/SKILL.md`.
- For using alerts within modals, see the skill in `./dialog/SKILL.md`.