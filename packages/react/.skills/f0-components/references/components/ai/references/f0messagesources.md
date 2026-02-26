## F0MessageSources

Displays citations or references used by the AI to generate a response. This builds trust by allowing users to verify information.

**Props:**
- `sources`: `Array<{ id: string, title: string, url?: string, type?: string }>` (Required) - List of reference materials.
- `onSourceClick`: `(source: any) => void` (Optional) - Callback when a source is clicked.

```tsx
import { F0MessageSources } from '@sds/ai';

const Sources = () => (
  <F0MessageSources
    sources={[
      { id: '1', title: 'Company Handbook', url: '/docs/handbook' },
      { id: '2', title: 'Q2 Revenue Report', type: 'pdf' },
      { id: '3', title: 'Project Alpha Wiki' }
    ]}
  />
);
```

**Edge Cases & Gotchas:**
- If no `url` is provided, the source will render as a non-clickable label.
- Use `type` to display appropriate icons (e.g., PDF, Doc, Link).