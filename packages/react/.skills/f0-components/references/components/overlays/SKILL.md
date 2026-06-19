---
name: overlays
description: Use for modal windows, dialogs, and interruptive UI elements that require user attention or action. Ideal for critical alerts, warnings, or informational popups.
---
# Overlays

Overlays provide a way to present content on top of the main application interface. They are used to capture user attention, provide critical information, or request specific actions without navigating away from the current context.

## Props

- **actions** (optional): `object` - Configuration for action buttons, typically including labels and callback functions for primary and secondary actions.
- **header** (optional): `object` - Configuration for the overlay header, including title text and optional icons.
- **open** (optional): `boolean` - Controls the visibility state of the overlay.

## Variants

### Critical
Use the Critical variant for high-severity errors or destructive actions (e.g., deleting data). These usually feature high-contrast visual cues like red icons or headers to signal urgency.

### Warning
Use the Warning variant for non-blocking alerts that caution the user about potential issues or side effects of an action that is not necessarily destructive.

### Info
Use the Info variant for providing additional context, helpful tips, or non-critical status updates that do not require immediate corrective action.

### With Trigger
This pattern demonstrates the implementation of a trigger element (like a Button) that toggles the `open` state of the overlay.

## Sub-components

### Dialog
The Dialog is a specialized overlay used for structured interactions and task-specific workflows. 

For Dialog, see the skill in ./references/dialog.md.

## Best Practices

- **Focus Management**: Ensure that focus is trapped within the overlay when open and restored to the trigger element when closed.
- **Dismissal**: Always provide a clear way to close the overlay, such as a "Cancel" button or an "X" in the header.
- **Content Length**: Keep overlay content concise. If the content is too long, consider using a separate page or a side panel instead.
- **Triggering**: Only open overlays in response to a user action to avoid jarring experiences.

## Sub-components

- **Dialog**: See ./references/dialog.md