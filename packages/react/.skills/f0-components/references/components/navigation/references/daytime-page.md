## DaytimePage

DaytimePage is a high-level layout component specifically designed for "Daytime" home or dashboard views. It provides a structured grid for charts, widgets, and personalized greetings.

**Props:**
- `title`: `string` (Required) - The main heading of the page (usually a greeting).
- `description`: `string` - Subtext appearing below the title.
- `mood`: `'happy' | 'neutral' | 'sad' | 'none'` - An optional mood indicator that can influence the visual theme.
- `children`: `ReactNode` - The main content, typically a collection of widgets or charts.

**Usage Example:**
```tsx
import { DaytimePage } from '@f1/navigation';
import { AreaChart, Widget } from '@f1/charts';

const Dashboard = () => {
  return (
    <DaytimePage 
      title="Good morning, Alex" 
      description="Here is what's happening today."
      mood="happy"
    >
      <div className="grid grid-cols-2 gap-4">
        <AreaChart data={data} title="Revenue 2024" />
        <Widget title="Quick Actions" />
      </div>
    </DaytimePage>
  );
};
```

**Edge Cases & Gotchas:**
- This component is highly opinionated regarding layout. For more flexible page structures, see the skill in ./page/SKILL.md.