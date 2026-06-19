## BarChart

The BarChart component represents data with rectangular bars with lengths proportional to the values that they represent. Use this for comparing discrete categories or showing financial distributions.

**Props:**
- `data`: `Array<Record<string, any>>` (Required) - The dataset to visualize.
- `xAxisKey`: `string` (Required) - The data key for the horizontal axis.
- `bars`: `Array<{ dataKey: string; color?: string; name?: string }>` (Required) - Configuration for each bar group.
- `isFinancial`: `boolean` - If true, formats axis labels and tooltips as currency.
- `stacked`: `boolean` - Whether to stack bars on top of each other.

```tsx
import { BarChart } from '@components/charts';

const data = [
  { category: 'Q1', revenue: 5000, expenses: 3000 },
  { category: 'Q2', revenue: 7000, expenses: 4500 },
];

export const RevenueChart = () => (
  <BarChart
    data={data}
    xAxisKey="category"
    isFinancial={true}
    bars={[
      { dataKey: 'revenue', color: '#4ade80' },
      { dataKey: 'expenses', color: '#f87171' }
    ]}
  />
);
```

**Edge Cases & Gotchas:**
- If `isFinancial` is enabled, ensure data values are numbers to avoid formatting errors.
- For many categories, consider using `VerticalBarChart` to prevent X-axis label overlapping.