---
name: charts
description: A comprehensive suite of data visualization components including Bar, Line, Area, Pie, and Progress charts. Use when presenting quantitative data, trends, or progress metrics in a structured, visual format.
---
# Charts

The Charts collection provides a variety of specialized components for data visualization. These components are designed to handle different data structures and visual requirements, ranging from simple progress bars to complex biaxial combo charts. Many of these components serve as high-level wrappers around ECharts to provide a consistent API.

## Sub-components

This skill covers the following specialized chart types:
- **AreaChart**: For showing trends with filled areas.
- **BarChart / VerticalBarChart**: For categorical comparisons.
- **LineChart**: For temporal data and trends.
- **PieChart**: For proportional data (includes Donut variants).
- **ComboChart**: For mixing bars and lines, including biaxial scales.
- **Progress Components**: `ProgressBarDuo`, `ProgressChart`, `RadialProgressChart`.
- **Specialized**: `RadarChart`, `CategoryBarChart`, `F0Chart` (Experimental ECharts wrapper).

## Props

- **value** (required): `number` - The primary value for progress-based charts.
- **data** (optional): `array` - The dataset to be visualized, typically an array of objects.
- **dataConfig** (optional): `object` - Configuration for mapping data keys to chart series.
- **label** (optional): `string` - Text label for the chart or specific data points.
- **color** (optional): `string` - Primary color for the chart elements.
- **max** (optional): `number` [default: 100] - The maximum value for progress-based charts.
- **legend** (optional): `boolean` - Whether to display the chart legend.
- **showLegend** (optional): `boolean` [default: true] - Toggle visibility of the legend.
- **lineType** (optional): `string` - Determines the type of line curve (e.g., smooth, step).
- **xAxis** (optional): `object` - Configuration for the horizontal axis.
- **yAxis** (optional): `object` - Configuration for the vertical axis.
- **tickFormatter** (optional): `function` - Custom formatter function for axis ticks.
- **options** (optional): `object` [default: {}] - Partial ECharts option overrides for advanced customization.
- **bar** (optional): `object` - Specific configuration for bar elements.
- **blurArea** (optional): `enum` - Configuration for area blurring effects.
- **overview** (optional): `object` - Summary data for radial or progress charts.
- **scatter** (optional): `object` - Configuration for scatter plot elements within a chart.
- **showRatio** (optional): `boolean` - Whether to display percentage/ratio values.

## Usage Examples

### Basic Bar Chart
```tsx
import { BarChart } from '@components/charts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
];

export const MyChart = () => (
  <BarChart 
    data={data} 
    dataConfig={{ xKey: 'name', yKey: 'value' }}
    showLegend={true}
  />
);
```

### Radial Progress Chart
```tsx
import { RadialProgressChart } from '@components/charts';

export const StorageUsage = () => (
  <RadialProgressChart 
    value={75} 
    max={100} 
    label="Storage Used"
    overview={{ title: '75GB', subtitle: 'of 100GB' }}
  />
);
```

### Combo Chart (Bar and Line)
```tsx
import { ComboChart } from '@components/charts';

export const PerformanceChart = () => (
  <ComboChart
    data={performanceData}
    xAxis={{ dataKey: 'month' }}
    yAxis={{ label: 'Revenue' }}
    options={{
      series: [
        { type: 'bar', dataKey: 'revenue' },
        { type: 'line', dataKey: 'target' }
      ]
    }}
  />
);
```

## Variants and States

### Categorical Charts
- **BarChart**: Standard horizontal or vertical bars for comparing values across categories.
- **CategoryBarChart**: Optimized for displaying multiple values within specific categories (e.g., Employee Engagement metrics).
- **RadarChart**: Useful for comparing multiple quantitative variables across different groups.

### Trend Charts
- **LineChart**: Standard line visualization for continuous data.
- **AreaChart**: Similar to LineChart but with the area below the line filled. Supports "Dashed Area" and "Multiple Areas" for stacked or overlapping trends.

### Progress Indicators
- **ProgressBarDuo**: A dual-state progress bar for comparing two related metrics.
- **RadialProgressChart**: A circular progress indicator, often used for dashboards and "overview" stats.

## Best Practices

1. **Choose the Right Chart**: Use `BarChart` for discrete categories and `LineChart` or `AreaChart` for time-series data.
2. **Format Ticks**: Use the `tickFormatter` prop to ensure currency, percentages, or large numbers are readable (e.g., converting `1000` to `$1k`).
3. **Handle Empty States**: Ensure the chart handles empty `data` arrays gracefully to avoid rendering errors.
4. **Accessibility**: Always provide a `label` or `overview` object so screen readers can interpret the chart's purpose and current value.
5. **Performance**: For `F0Chart` or complex `ComboChart` instances, avoid passing new object references for `options` on every render to prevent unnecessary re-renders of the underlying ECharts instance.

## Related Skills
- For individual chart implementations, see the skill in ./references/AreaChart.md
- For individual chart implementations, see the skill in ./references/BarChart.md
- For individual chart implementations, see the skill in ./references/LineChart.md
- For individual chart implementations, see the skill in ./references/PieChart.md
- For progress-specific components, see the skill in ./references/RadialProgressChart.md

## Sub-components

- **AreaChart**: See ./references/areachart.md
- **BarChart**: See ./references/barchart.md
- **CategoryBarChart**: See ./references/categorybarchart.md
- **ComboChart**: See ./references/combochart.md
- **F0Chart**: See ./references/f0chart.md
- **LineChart**: See ./references/linechart.md
- **PieChart**: See ./references/piechart.md
- **ProgressBarDuo**: See ./references/progressbarduo.md
- **ProgressChart**: See ./references/progresschart.md
- **RadarChart**: See ./references/radarchart.md
- **RadialProgressChart**: See ./references/radialprogresschart.md
- **VerticalBarChart**: See ./references/verticalbarchart.md