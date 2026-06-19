## ProgressBarDuo

ProgressBarDuo displays two related progress values within a single horizontal bar. It is specifically designed for comparative progress tracking, such as "Current vs. Previous" or "Actual vs. Target".

**Props:**
- `value1`: `number` (Required) - The primary progress value.
- `value2`: `number` - The secondary/background progress value.
- `max`: `number` - The maximum possible value. Default: `100`.
- `label`: `string` - Text label to display above the bar.
- `color1`: `string` - Color for the primary value.
- `color2`: `string` - Color for the secondary value.

```tsx
import { ProgressBarDuo } from '@components/charts';

export const ProjectStatus = () => (
  <ProgressBarDuo
    label="Project Completion"
    value1={75}
    value2={90}
    max={100}
    color1="#3b82f6"
    color2="#dbeafe"
  />
);
```