## F0VersionHistory

`F0VersionHistory` displays a vertical timeline of document or entity versions. Use this component to provide users with an audit trail, showing who made changes and when they occurred.

**Props:**
- `versions`: `Array<{ id: string; label: string; author: string; timestamp: string; description?: string }>` (Required) - The list of versions to display.
- `currentVersion`: `{ id: string; label?: string }` (Optional) - Configuration to highlight the active version in the timeline.
- `title`: `string` (Optional) - Custom title for the component. Defaults to "Version history".
- `onVersionClick`: `(versionId: string) => void` (Optional) - Callback triggered when a version entry is clicked.

**Usage Example:**
```tsx
import { F0VersionHistory } from '@/components/experimental/F0VersionHistory';

const versions = [
  { id: '1', label: 'v1.2.0', author: 'Jane Doe', timestamp: '2023-10-24 10:00' },
  { id: '2', label: 'v1.1.0', author: 'John Smith', timestamp: '2023-10-23 14:30' },
];

export const HistorySidebar = () => (
  <F0VersionHistory 
    versions={versions} 
    currentVersion={{ id: '1' }}
    onVersionClick={(id) => console.log(`Loading version ${id}`)}
  />
);
```

**Best Practices:**
- Ensure timestamps are formatted consistently (e.g., using a relative time helper or a standard ISO format).
- If `currentVersion` is not provided, the timeline will not show a "current" indicator.