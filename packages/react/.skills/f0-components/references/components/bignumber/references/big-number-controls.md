## BigNumber Controls

The Controls configuration for the BigNumber component manages the visualization of trends and comparison logic. Use this when you need to display a percentage change (delta) between a current value and a historical baseline or target.

**Props:**

| Prop | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `showTrend` | `boolean` | No | Enables the calculation and display of the trend indicator and percentage change. |
| `comparisonValue` | `number` | Yes* | The baseline value used to calculate the percentage difference. *Required if `showTrend` is true. |
| `invertStatus` | `boolean` | No | Reverses the semantic coloring of the trend. By default, an increase is positive (green) and a decrease is negative (red). Set to `true` for metrics where "down is good" (e.g., latency, error rates). |

**Usage Examples:**

### Standard Growth Trend
Displays a positive percentage change in green.
```tsx
import { BigNumber } from '@components/big-number';

export const GrowthMetric = () => (
  <BigNumber
    value={1250}
    label="Monthly Active Users"
    showTrend={true}
    comparisonValue={1000} // Results in +25% trend
  />
);
```

### Inverted Status (Error Rates)
Displays a decrease in red as a "positive" outcome or an increase as "negative" depending on the metric context.
```tsx
import { BigNumber } from '@components/big-number';

export const ErrorRate = () => (
  <BigNumber
    value={45}
    label="System Errors"
    showTrend={true}
    comparisonValue={100}
    invertStatus={true} // A decrease here is considered good/green
  />
);
```

**Edge Cases & Gotchas:**

- **Missing Comparison Value:** If `showTrend` is enabled but `comparisonValue` is undefined or null, the trend indicator will not render.
- **Division by Zero:** If `comparisonValue` is `0`, the component should handle the infinite percentage gracefully (usually by hiding the trend or showing a specific "New" status).
- **Semantic Meaning:** Always use `invertStatus` for cost, latency, or error metrics to ensure the visual color (green/red) matches the business logic of the data.
- **Related Components:** For the main display logic, see the skill in ./big-number/SKILL.md.