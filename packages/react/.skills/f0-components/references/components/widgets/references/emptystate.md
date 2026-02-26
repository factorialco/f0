## EmptyState

Domain-specific placeholder components used when no data is available for specific modules like Performance or Salary.

**Props:**
- `type`: 'performance' | 'salary' (Required) - Determines the illustration and default text.
- `title`: string - Custom title to override the default.
- `description`: string - Custom description explaining why the state is empty or how to populate it.

```tsx
import { EmptyState } from '@components/widgets';

const PerformanceTab = ({ hasData }) => {
  if (!hasData) {
    return (
      <EmptyState 
        type="performance" 
        description="See how Hugo's performance evolved over time" 
      />
    );
  }
  return <PerformanceChart />;
};
```

**Note:** For empty states specifically designed to fit inside a standard Widget, see the WidgetEmptyState skill in ./widgetemptystate/SKILL.md.