## VerticalBarChart

VerticalBarChart is a bar chart where categories are listed on the Y-axis and values on the X-axis. This is particularly useful when category labels are long or when comparing ratios.

**Props:**
- `data`: `Array<any>` (Required) - The dataset.
- `yAxisKey`: `string` (Required) - The key for the vertical axis (labels).
- `bars`: `Array<{ dataKey: string; color?: string }>` (Required) - Bar configurations.
- `showRatios`: `boolean` - If true, displays the value as a ratio/percentage of the total.

```tsx
import { VerticalBarChart } from '@components/charts';

const data = [
  { department: 'Engineering and Product', count: 45 },
  { department: 'Sales and Marketing', count: 32 },
];

export const DeptSize = () => (
  <VerticalBarChart
    data={data}
    yAxisKey="department"
    bars={[{ dataKey: 'count', color: '#8b5cf6' }]}
  />
);
```