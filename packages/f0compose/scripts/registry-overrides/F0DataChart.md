## Description

Generic chart wrapper supporting line, bar, area, pie. Pass series + labels; f0 handles legend, tooltip, axis, theme.

## Example

```tsx
<F0DataChart
  type="line"
  data={{
    labels: ["Jan", "Feb", "Mar"],
    series: [{ name: "Headcount", values: [120, 124, 130] }],
  }}
/>
```
