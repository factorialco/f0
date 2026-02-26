## CategoryBarChart

The CategoryBarChart is a specialized visualization designed for HR and performance metrics. It displays specific categories (like Training, Performance, or Time Off) with progress-style bars. Use this for dashboard summaries rather than complex time-series data.

**Props:**
- `items`: `Array<{ label: string; value: number; maxValue: number; color?: string }>` (Required) - The list of categories to display.
- `showPercentage`: `boolean` - Whether to display the percentage next to the bar.
- `compact`: `boolean` - Reduces padding for use in tight UI spaces.

```tsx
import { CategoryBarChart } from '@components/charts';

const metrics = [
  { label: 'Employee Engagement', value: 85, maxValue: 100, color: '#3b82f6' },
  { label: 'Training Sessions', value: 12, maxValue: 20, color: '#10b981' },
  { label: 'Performance Reviews', value: 95, maxValue: 100 }
];

export const HRDashboard = () => (
  <CategoryBarChart items={metrics} showPercentage={true} />
);
```