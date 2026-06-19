## F0AiCollapsibleMessage

Used to wrap secondary or detailed AI information that should not clutter the main chat flow unless requested by the user. Ideal for "Show Work" or "Search Results" sections.

**Props:**
- `title`: `string` (Required) - The text shown on the toggle trigger.
- `children`: `ReactNode` (Required) - The content to be hidden/shown.
- `icon`: `'search' | 'info' | 'none'` (Default: `'none'`) - Icon to display next to the title.
- `defaultOpen`: `boolean` (Default: `false`) - Whether the section starts expanded.

```tsx
import { F0AiCollapsibleMessage } from '@sds/ai';

const SearchResult = () => (
  <F0AiCollapsibleMessage 
    title="Found 3 relevant documents" 
    icon="search"
  >
    <ul>
      <li>Project_Alpha_Specs.pdf</li>
      <li>Q3_Budget_Draft.xlsx</li>
      <li>Team_Onboarding.docx</li>
    </ul>
  </F0AiCollapsibleMessage>
);
```

**Edge Cases & Gotchas:**
- Avoid putting critical primary answers inside a collapsed message, as users might miss them.