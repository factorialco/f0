## PieChart

The PieChart visualizes proportions and percentages of a whole. It supports both standard pie and donut variations.

**Props:**
- `data`: `Array<{ name: string; value: number; color?: string }>` (Required) - The data segments.
- `isDonut`: `boolean` - If true, renders a hole in the center.
- `showLabels`: `boolean` - Whether to render labels directly on the segments.
- `innerRadius`: `number | string` - The radius of the inner hole (for donuts).

```tsx
import { PieChart } from '@components/charts';

const data = [
  { name: 'Direct', value: 400, color: '#0088FE' },
  { name: 'Social', value: 300, color: '#00C49F' },
  { name: 'Referral', value: 300, color: '#FFBB28' },
];

export const TrafficSource = () => (
  <PieChart data={data} isDonut={true} showLabels={true} />
);
```