---
name: home-layout
description: A layout component designed for dashboard-style home screens. Use it to organize primary page content alongside a collection of data visualization widgets, such as charts and forms.
---

## Overview
`HomeLayout` provides a standardized structure for homepages and dashboards. It separates the main application content from a dedicated widget area, typically used for high-level metrics, charts, and quick-action forms.

## Props
- **children** (optional): `ReactNode` - The primary content to be displayed in the main area of the layout.
- **widgets** (optional): `ReactNode[]` - An array of components (e.g., charts, stats, forms) to be rendered in the layout's widget section.

## Usage Example
```tsx
import { HomeLayout } from './HomeLayout';
import { AreaChart } from './charts/AreaChart';
import { FormWidget } from './forms/FormWidget';

const DashboardPage = () => {
  const dashboardWidgets = [
    <AreaChart key="revenue" title="Revenue 2024" />,
    <FormWidget key="quick-add" title="Add Entry" />,
  ];

  return (
    <HomeLayout widgets={dashboardWidgets}>
      <main>
        <h1>Welcome back, User</h1>
        <p>Here is your daily overview.</p>
      </main>
    </HomeLayout>
  );
};
```

## Layout Variants
The component is responsive and adjusts the placement of the `widgets` collection based on the viewport:
- **Default (Desktop)**: Typically displays widgets in a sidebar or grid alongside the main content.
- **Tablet**: Adjusts spacing and grid columns for medium screens.
- **Mobile**: Stacks widgets and main content vertically for optimal readability on small screens.

## Related Components
For data visualization components commonly used within the `widgets` prop, see the following:
- For AreaChart, see the skill in ./references/area-chart.md
- For LineChart, see the skill in ./references/line-chart.md
- For BarChart, see the skill in ./references/bar-chart.md
- For RadialProgressChart, see the skill in ./references/radial-progress-chart.md
- For Form components, see the skill in ./references/form-widget.md

## Best Practices
- **Key Prop**: Always provide a unique `key` to each element in the `widgets` array to ensure efficient React reconciliation.
- **Widget Density**: Avoid overloading the `widgets` array on mobile views to prevent excessive page length.
- **Content Hierarchy**: Place the most critical summary data in the first few slots of the `widgets` array.