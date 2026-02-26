## F0OneSwitch

A standard toggle switch used for binary settings within AI configurations or toolbars.

**Props:**
- `checked`: `boolean` (Required) - The current state of the switch.
- `onChange`: `(checked: boolean) => void` (Required) - Callback for state changes.
- `disabled`: `boolean` (Optional) - Prevents user interaction.
- `label`: `string` (Optional) - Text label displayed next to the switch.

```tsx
import { F0OneSwitch } from '@sds/ai';

const Settings = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <F0OneSwitch 
      checked={enabled} 
      onChange={setEnabled} 
      label="Enable Advanced Mode"
    />
  );
};
```