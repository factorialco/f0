## LinkQuestion

`LinkQuestion` is a specialized text input optimized for URLs. It includes built-in validation patterns for web addresses.

**Props:**
- `label`: `string` (Required) - The question text.
- `placeholder`: `string` (Optional) - Example: "https://example.com".
- `value`: `string` (Optional) - The current URL string.
- `onChange`: `(value: string) => void` (Required) - Callback for input changes.
- `validate`: `boolean` (Optional) - Whether to perform real-time URL validation.

```tsx
import { LinkQuestion } from '@sds/co-creation-form';

<LinkQuestion 
  label="Portfolio Link"
  placeholder="https://behance.net/user"
  onChange={(url) => setUrl(url)}
/>
```

**Gotchas:**
- By default, it may not prepend `https://`. Ensure your submission logic handles protocol-less strings if necessary.