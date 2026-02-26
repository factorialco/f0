## Content

A collection of internal layout components used to structure data inside a Widget's body. These include specialized lists and event displays.

**Sub-components:**
- **CalendarEvent**: Displays scheduled items with dates and tags.
- **IndicatorsList**: A horizontal or vertical list of key-value pairs or metrics.
- **TwoColumnsList**: A list layout with two distinct columns, often used for labels and progress bars.

**Props (CalendarEvent):**
- `title`: string (Required) - Name of the event.
- `duration`: string - Time span (e.g., "2 days").
- `month`: string - Short month name (e.g., "JUL").
- `hasBackground`: boolean - Whether to show a background fill.
- `leftTags`: ReactNode - Tags displayed on the left side.

**Props (IndicatorsList):**
- `items`: Array<{ label: string, value: string }> - Data points to display.

**Props (TwoColumnsList):**
- `items`: Array<{ title: string, value?: string, progress?: number, tooltip?: string }> - Rows for the list.

```tsx
import { Widget, TwoColumnsList } from '@components/widgets';

const MyWidget = () => (
  <Widget title="Project Status">
    <TwoColumnsList 
      items={[
        { title: 'Design', progress: 100, value: 'Done' },
        { title: 'Development', progress: 45, value: 'In Progress', tooltip: 'Delayed by API' }
      ]} 
    />
  </Widget>
);
```