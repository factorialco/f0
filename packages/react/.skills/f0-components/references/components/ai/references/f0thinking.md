## F0Thinking

Visualizes the AI's internal "thought process" or multi-step reasoning. This is essential for long-running tasks where the user needs to see progress.

**Props:**
- `thoughts`: `string[]` (Required) - An array of strings representing individual steps or thoughts.
- `currentThoughtIndex`: `number` (Optional) - The index of the currently active thought.
- `isComplete`: `boolean` (Optional) - Marks the entire process as finished.
- `title`: `string` (Default: `'Thinking...'`) - Header text for the thinking block.

```tsx
import { F0Thinking } from '@sds/ai';

const ThinkingProcess = () => (
  <F0Thinking
    title="Gathering relevant information..."
    thoughts={[
      "Reviewing relevant documents...",
      "Cross-referencing data sources...",
      "Validating information accuracy...",
      "Organizing the response structure..."
    ]}
    currentThoughtIndex={2}
  />
);
```

**Edge Cases & Gotchas:**
- Keep thought strings short and action-oriented (e.g., "Searching..." rather than "I am currently searching the database").