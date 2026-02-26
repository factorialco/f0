## Widgets

A collection of specialized cards used as "Copilot Actions" to provide interactive UI elements within a chat response.

### F0FAQCard
Displays an accordion of questions and answers.
- `questions`: `Array<{ q: string, a: string }>`
- `allowMultiple`: `boolean` - Allow multiple items to be expanded.

### F0QuestionCard
A multi-step form for gathering user input.
- `steps`: `Array<{ question: string, options: Array<{ id, label }> }>`
- `onComplete`: `(selections: any) => void`

### F0ModuleCard / F0DemoCard
Promotional or informational cards for specific features.
- `title`: `string`
- `description`: `string`
- `link`: `{ label: string, url: string }`

```tsx
import { F0FAQCard, F0QuestionCard } from '@sds/ai/widgets';

const FaqExample = () => (
  <F0FAQCard
    questions={[
      { q: "Is it free?", a: "Yes, for the first 14 days." },
      { q: "Can I migrate?", a: "Yes, we support CSV imports." }
    ]}
  />
);

const Survey = () => (
  <F0QuestionCard
    steps={[
      { 
        question: "What is your role?", 
        options: [{ id: '1', label: 'Dev' }, { id: '2', label: 'PM' }] 
      }
    ]}
    onComplete={(data) => console.log(data)}
  />
);
```

**Edge Cases & Gotchas:**
- Widgets are typically triggered by the AI backend via tool calls. Ensure the `name` used in the tool call matches the widget's registered name (e.g., `faqCard`, `questionCard`).