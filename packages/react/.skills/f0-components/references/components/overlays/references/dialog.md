## Dialog

The Dialog component provides a modal window that sits on top of the application's main content. It is used to capture user input, provide critical feedback, or show detailed information without navigating away from the current page.

### Props

| Prop | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | Yes | Controls the visibility of the dialog. |
| `onClose` | `() => void` | Yes | Callback function triggered when the dialog requests to close (e.g., clicking backdrop or ESC). |
| `title` | `ReactNode` | Yes | The primary heading of the dialog. |
| `description` | `ReactNode` | No | Secondary text providing additional context below the title. |
| `variant` | `'info' \| 'warning' \| 'critical'` | No | Defines the visual style and intent. Defaults to `'info'`. |
| `children` | `ReactNode` | No | The main content body of the dialog. |
| `footer` | `ReactNode` | No | Content rendered at the bottom, typically containing action buttons. |
| `trigger` | `ReactNode` | No | An element that opens the dialog when clicked (used in self-managed state patterns). |

### Usage Examples

#### Basic Dialog
```tsx
import { Dialog, Button } from '@ui/components';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Update Settings"
        footer={
          <Button onClick={() => setIsOpen(false)}>Save Changes</Button>
        }
      >
        <p>Configure your preferences for this project.</p>
      </Dialog>
    </>
  );
};
```

#### With Trigger Pattern
Use the `trigger` prop to simplify state management for simple toggle interactions.
```tsx
<Dialog
  trigger={<Button>Delete Item</Button>}
  variant="critical"
  title="Confirm Deletion"
  onClose={() => {}}
  footer={<Button variant="danger">Delete</Button>}
>
  Are you sure? This action cannot be undone.
</Dialog>
```

### Variants

- **Info**: The default state. Used for standard tasks, forms, or neutral information.
- **Warning**: Used when an action has potential side effects that the user should be aware of before proceeding.
- **Critical**: Used for destructive actions (like deletion) or high-priority errors. Usually features red accents or icons.

### Best Practices

- **Focus Management**: Ensure focus is trapped within the dialog while open. The first focusable element should be targeted automatically.
- **Dismissal**: Always provide a clear way to close the dialog, such as a "Cancel" button, a close icon (X), and support for the `Esc` key.
- **Content Length**: Keep dialog content concise. If the content requires significant scrolling, consider using a separate page or a slide-over panel.
- **Triggering**: Do not open dialogs automatically on page load; they should always be the result of a user action.

### Accessibility

- The component implements `role="dialog"` or `role="alertdialog"`.
- `aria-labelledby` is automatically linked to the title ID.
- `aria-describedby` is linked to the description ID.
- Focus is restored to the trigger element after the dialog closes.

For related overlay components, see the skill in ./popover/SKILL.md or ./drawer/SKILL.md.