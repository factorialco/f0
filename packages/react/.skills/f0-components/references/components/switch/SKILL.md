---
name: switch-component
description: A toggle switch for binary state selection. Use when users need to turn a setting on or off with immediate effect, typically in settings or preference panels.
---

## Overview
The Switch component provides a visual toggle for binary choices. It is preferred over checkboxes when the action takes effect immediately without requiring a "Save" or "Submit" button.

## Props
- **checked** (optional): `boolean` - The current checked state of the switch.
- **onCheckedChange** (optional): `(checked: boolean) => void` - Callback function triggered when the switch is toggled.
- **disabled** (optional): `boolean` - Whether the switch is non-interactive. Default: `false`.
- **title** (optional): `string` - The label text displayed alongside the switch.
- **id** (optional): `string` - The unique identifier for the switch element.
- **value** (optional): `string` - The value associated with the switch input.
- **data-test** (optional): `string` - Data attribute for testing and automation.

## Usage Examples

### Basic Toggle
```tsx
import { Switch } from './Switch';

export const NotificationToggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      title="Enable Notifications"
      checked={enabled}
      onCheckedChange={setEnabled}
    />
  );
};
```

### Disabled State
```tsx
<Switch
  title="Premium Feature"
  disabled={true}
  checked={false}
/>
```

## Variants

### Default
The standard configuration including a label (via the `title` prop) and an interactive toggle.

### Checked
The switch initialized in the "on" state. Use this for settings that are enabled by default.

### Disabled
The switch is visible but greyed out and unresponsive to user input. Use this when a setting is unavailable due to permissions or dependencies.

### No Label
When the `title` prop is omitted, only the toggle track and thumb are rendered. Use this in tight layouts or table cells where a separate label component is already present.

## Best Practices
- **Immediate Action**: Use switches for settings that apply immediately (e.g., "Dark Mode", "Wi-Fi").
- **Clear Labels**: Ensure the `title` clearly describes what the switch controls. Avoid ambiguous labels like "Status".
- **Accessibility**: The component handles basic keyboard interaction (Space/Enter to toggle). If using without a `title`, ensure the parent container provides context for screen readers.

## Related Skills
- For form layout patterns, see the skill in ./references/form-field.md
- For labeling and typography standards, see the skill in ./references/label.md
- For handling state in complex forms, see the skill in ./references/use-form-state.md