## LineChart

The LineChart displays information as a series of data points connected by straight line segments. It is the standard choice for visualizing continuous data trends over time.

**Props:**
- `data`: `Array<any>` (Required) - The dataset.
- `xAxisKey`: `string` (Required) - The key for the X-axis.
- `series`: `Array<{ dataKey: string; color?: string; name?: string; dot?: boolean }>` (Required) - Line configurations.
- `smooth`: `boolean` - Whether to use curved lines instead of straight segments.

```tsx
import { LineChart } from '@components/charts';

const data = [
  { day: 'Mon', users: 100 },
  { day: 'Tue', users: 150 },
  { day: 'Wed', users: 130 },
];

export const UserTrend = () => (
  <LineChart
    data={data}
    xAxisKey="day"
    series={[{ dataKey: 'users', color: '#6366f1', dot: true }]}
  />
);
```