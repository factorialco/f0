## RadialProgressChart

RadialProgressChart displays progress in a circular format. It is often used for high-level KPIs or "rings" similar to fitness tracking apps.

**Props:**
- `value`: `number` (Required) - The progress value.
- `max`: `number` - The maximum value. Default: `100`.
- `size`: `number` - The diameter of the circle in pixels.
- `strokeWidth`: `number` - The thickness of the progress ring.
- `children`: `ReactNode` - Optional content to display in the center of the circle.

```tsx
import { RadialProgressChart } from '@components/charts';

export const KPI = () => (
  <RadialProgressChart value={82} size={120} strokeWidth={10}>
    <span className="text-xl font-bold">82%</span>
  </RadialProgressChart>
);
```