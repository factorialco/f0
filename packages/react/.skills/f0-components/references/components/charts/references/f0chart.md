## F0Chart

F0Chart is an experimental wrapper around ECharts for React. It provides a highly flexible, low-level interface for complex visualizations that standard chart components might not support. Use this when you need custom ECharts configurations or specific performance optimizations.

**Props:**
- `options`: `EChartsOption` (Required) - The full ECharts configuration object.
- `height`: `number | string` - Height of the chart. Default: `400px`.
- `width`: `number | string` - Width of the chart.
- `onEvents`: `Record<string, Function>` - Event listeners (e.g., `{ 'click': (params) => ... }`).
- `isCompact`: `boolean` - Adjusts internal padding for small containers.

```tsx
import { F0Chart } from '@components/charts';

const options = {
  xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed'] },
  yAxis: { type: 'value' },
  series: [{ data: [120, 200, 150], type: 'line' }]
};

export const CustomVisualization = () => (
  <F0Chart options={options} height={200} isCompact={true} />
);
```

**Edge Cases & Gotchas:**
- Since this is a wrapper, you must follow ECharts' specific schema for the `options` prop.
- Experimental status: API may change in future versions.