## ComboChart

The ComboChart allows for the simultaneous display of bars and lines. This is ideal for showing the relationship between two different types of data, such as volume (bars) and a percentage trend (line).

**Props:**
- `data`: `Array<any>` (Required) - The source data.
- `xAxisKey`: `string` (Required) - Key for the X-axis.
- `barSeries`: `Array<{ dataKey: string; color?: string }>` - Configuration for the bar elements.
- `lineSeries`: `Array<{ dataKey: string; color?: string }>` - Configuration for the line elements.
- `isBiaxial`: `boolean` - Enables a second Y-axis on the right side for different scales.

```tsx
import { ComboChart } from '@components/charts';

const data = [
  { month: 'Jan', volume: 1000, growth: 5 },
  { month: 'Feb', volume: 1200, growth: 8 },
];

export const GrowthChart = () => (
  <ComboChart
    data={data}
    xAxisKey="month"
    isBiaxial={true}
    barSeries={[{ dataKey: 'volume', color: '#cbd5e1' }]}
    lineSeries={[{ dataKey: 'growth', color: '#2563eb' }]}
  />
);
```