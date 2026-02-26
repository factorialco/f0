---
name: big-number
description: Displays high-level metrics or Key Performance Indicators (KPIs) with optional comparison values and trend indicators. Use for dashboard summaries, analytics, and performance tracking.

---

# BigNumber

The `BigNumber` component is designed to highlight a single important metric. it supports displaying a primary value, a descriptive label, a comparison value (e.g., previous period), and an automatically calculated trend percentage.

## Props

| Prop | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `value` | `unknown` | Yes | The primary metric value to display. |
| `comparison` | `unknown` | Yes | The value to compare against the primary value. |
| `label` | `string` | No | Descriptive text for the metric. |
| `trend` | `boolean` | No | If true, calculates and displays the percentage change between `value` and `comparison`. |
| `comparisonHint` | `string` | No | Text displayed next to the comparison value (e.g., "vs last month"). |

## Usage Examples

### Basic Usage
Displaying a simple metric with a comparison value.

```tsx
import { BigNumber } from '@factorial/ds';

const MyComponent = () => (
  <BigNumber 
    label="Total Revenue" 
    value="€45,000" 
    comparison="€40,000" 
    comparisonHint="vs last month"
  />
);
```

### With Trend Calculation
When `trend` is enabled, the component visualizes the delta between the current value and the comparison.

```tsx
import { BigNumber } from '@factorial/ds';

const PerformanceMetric = () => (
  <BigNumber 
    label="Active Users" 
    value={1250} 
    comparison={1000} 
    trend={true}
    comparisonHint="from previous period"
  />
);
```

## Variants and States

### Trend Visualization
The `trend` prop triggers a percentage calculation: `((value - comparison) / comparison) * 100`. 
- **Positive Trend**: Usually indicates growth.
- **Negative Trend**: Indicates a decrease.
- **Invert Status**: If the underlying logic requires inverting the "good/bad" semantic of a trend (e.g., a decrease in "Churn Rate" is positive), ensure the data passed reflects the desired outcome or check for specific implementation flags in the theme.

### Skeleton State
Use the Skeleton variant when data is still loading to prevent layout shift.
For the Skeleton component, see the skill in `./skeleton/SKILL.md`.

## Best Practices

- **Labeling**: Always provide a clear `label` so users understand the context of the number.
- **Comparison Context**: Use `comparisonHint` to clarify the timeframe or segment being compared (e.g., "vs. Goal", "Last Year").
- **Data Types**: While `value` and `comparison` accept `unknown`, passing numbers ensures accurate trend calculations. If passing formatted strings, the `trend` calculation may not function as expected.
- **Placement**: Use `BigNumber` at the top of pages or within dashboard widgets to provide immediate high-level insights. Do not use it for secondary or tertiary information.