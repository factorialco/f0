## TextQuestion

`TextQuestion` is the most common input type, used for capturing short strings or long-form paragraphs.

**Props:**
- `label`: `string` (Required) - The question text.
- `multiline`: `boolean` (Optional) - If true, renders a textarea instead of a text input.
- `rows`: `number` (Optional) - Number of visible rows for multiline inputs.
- `placeholder`: `string` (Optional) - Hint text.
- `maxLength`: `number` (Optional) - Character limit.
- `value`: `string` (Optional) - Current text value.
- `onChange`: `(value: string) => void` (Required) - Callback for text changes.

```tsx
import { TextQuestion } from '@sds/co-creation-form';

<TextQuestion 
  label="Tell us about your background"
  multiline
  rows={4}
  maxLength={500}
  onChange={(text) => setBio(text)}
/>
```

**Gotchas:**
- For sensitive data like passwords, see the skill in ./password-input/SKILL.md.
- `maxLength` provides a UI hint but should also be validated on the server.