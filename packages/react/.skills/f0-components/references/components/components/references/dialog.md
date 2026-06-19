## Dialog

A modal dialog built on Radix UI primitives. It provides a structured way to display content in an overlay, ensuring focus management and accessibility.

**Props:**
- `open`: `boolean` - Controlled open state.
- `onOpenChange`: `(open: boolean) => void` - Callback for state changes.
- `children`: `ReactNode` - Should contain Dialog sub-components.

**Sub-components:**
- `DialogTrigger`: The element that opens the dialog.
- `DialogContent`: The container for the modal content.
- `DialogHeader` / `DialogFooter`: Layout wrappers for top and bottom sections.
- `DialogTitle` / `DialogDescription`: Accessible labels.

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from './dialog';

export const DeleteConfirmation = () => (
  <Dialog>
    <DialogTrigger>Delete Item</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
      </DialogHeader>
      <p>This action cannot be undone. This will permanently delete your account.</p>
      <DialogFooter>
        <DialogClose>Cancel</DialogClose>
        <button onClick={handleDelete}>Confirm Delete</button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
```

**Gotchas:**
- Always include a `DialogTitle` for screen reader accessibility, even if it's visually hidden.
- Use `DialogClose` inside the content to ensure the modal closes correctly and returns focus to the trigger.