## RadarChart

The RadarChart (or Spider Chart) is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.

**Props:**
- `data`: `Array<Record<string, any>>` (Required) - The dataset.
- `keys`: `string[]` (Required) - The keys in the data to represent as different areas.
- `indexBy`: `string` (Required) - The key to use for the axes (categories).
- `maxValue`: `number | 'auto'` - The maximum value for the scale.

```tsx
import { RadarChart } from '@components/charts';

const data = [
  { skill: 'Coding', current: 90, target: 100 },
  { skill: 'Design', current: 70, target: 80 },
  { skill: 'Marketing', current: 50, target: 70 },
];

export const SkillGap = () => (
  <RadarChart
    data={data}
    indexBy="skill"
    keys={['current', 'target']}
  />
);
```