## ProgressChart

A simple, linear progress indicator. Use this to show the completion status of a single task or goal.

**Props:**
- `value`: `number` (Required) - Current progress value.
- `max`: `number` - Maximum value. Default: `100`.
- `color`: `string` - The color of the progress fill.
- `height`: `number` - Thickness of the bar.

```tsx
import { ProgressChart } from '@components/charts';

export const TaskProgress = () => (
  <ProgressChart value={60} max={100} color="#f59e0b" />
);
```