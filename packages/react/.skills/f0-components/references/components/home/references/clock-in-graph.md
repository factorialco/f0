## ClockInGraph

`ClockInGraph` is a visual progress indicator that represents a work day's timeline. It displays work segments, break periods, and overtime progress in a linear, easy-to-read bar format.

**Props:**
- `entries`: `Array<{ type: 'work' | 'break', minutes: number }>` (Required) - An array of time segments to be rendered in the graph.
- `totalMinutes`: `number` (Required) - The total number of minutes scheduled for the shift (used to calculate the 100% width).
- `remainingMinutes`: `number` (Optional) - If provided, shows a countdown or visual indicator of time left.
- `hasOvertime`: `boolean` (Default: `false`) - If true, the graph will extend or change color to indicate work performed beyond `totalMinutes`.
- `isEmpty`: `boolean` (Default: `false`) - Renders a placeholder state when no time has been logged yet.

```tsx
import { ClockInGraph } from '@sds/home';

const MyShiftGraph = () => (
  <ClockInGraph
    totalMinutes={480} // 8 hours
    entries={[
      { type: 'work', minutes: 120 },
      { type: 'break', minutes: 30 },
      { type: 'work', minutes: 60 }
    ]}
    remainingMinutes={270}
    hasOvertime={false}
  />
);
```

**Edge Cases & Gotchas:**
- **Consecutive Breaks**: The component handles multiple back-to-back break entries by rendering them as distinct segments within the bar.
- **Overtime Rendering**: When `hasOvertime` is active, the graph may exceed its standard container width or use a specific "overtime" color (usually orange or red) for segments beyond the `totalMinutes` threshold.
- **Zero Progress**: If `entries` is empty but `isEmpty` is false, the graph may render a background track representing the total expected time.