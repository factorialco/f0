## Callout

The `Callout` component is used to provide asynchronous feedback, status updates, or contextual information to the user. It supports multiple semantic variants to convey the nature of the message (e.g., success, error, warning).

**When to use:**
- To notify users of the outcome of an action (Success/Error).
- To warn users about potential issues before they take an action.
- To provide helpful, non-blocking information related to the current view.

**Props:**
- `variant`: `'info' | 'positive' | 'warning' | 'critical' | 'ai'` (Required) - Determines the color scheme and default icon.
- `title`: `string` (Optional) - The bold heading for the callout.
- `children`: `React.ReactNode` (Required) - The detailed message body. Supports rich text.
- `icon`: `React.ReactNode` (Optional) - Overrides the default variant icon.
- `onClose`: `() => void` (Optional) - If provided, a close button is rendered.
- `actions`: `Array<{ label: string; onClick: () => void }>` (Optional) - Action buttons rendered at the bottom of the callout.
- `isLoading`: `boolean` (Optional) - Displays a skeleton loading state.
- `isCompact`: `boolean` (Optional) - Reduces padding and font size for dense UIs.

**Usage Examples:**

```tsx
import { Callout } from '@sds/banners';
import { CheckDoubleIcon } from '@sds/icons';

// Positive Callout with Actions
export const SuccessMessage = () => (
  <Callout
    variant="positive"
    title="Changes Saved"
    icon={<CheckDoubleIcon />}
    actions={[
      { label: 'Undo', onClick: () => handleUndo() },
      { label: 'View Logs', onClick: () => navigate('/logs') }
    ]}
  >
    Your profile settings have been updated successfully.
  </Callout>
);

// Critical Dismissible Callout
export const ErrorAlert = () => (
  <Callout
    variant="critical"
    title="Connection Failed"
    onClose={() => setVisible(false)}
  >
    We were unable to connect to the server. Please check your internet connection and try again.
  </Callout>
);
```

**Variants Detail:**
- **AI (Gradient):** Used for AI-driven insights (similar to AiBanner but in a callout format).
- **Critical:** Red styling for errors or dangerous actions.
- **Positive:** Green styling for success or completion.
- **Warning:** Amber styling for cautionary information.
- **Info:** Blue styling for neutral, helpful information.

**Edge Cases & Gotchas:**
- **Dismissal:** If a callout is critical, consider whether it should be dismissible or if the user must resolve the issue first.
- **Rich Text:** While `children` supports rich text, avoid placing complex interactive elements (like inputs) inside a Callout; use the `actions` prop for buttons.
- **Related Components:** For full-page interruptions, use a Modal. For AI-specific summaries, see the skill in ./ai-banner/SKILL.md.