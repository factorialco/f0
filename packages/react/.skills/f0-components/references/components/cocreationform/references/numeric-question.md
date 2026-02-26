## NumericQuestion

`NumericQuestion` is an input field restricted to numerical values. Use this for quantities, ages, or any data that requires mathematical properties.

**Props:**
- `label`: `string` (Required) - The question text.
- `min`: `number` (Optional) - Minimum allowed value.
- `max`: `number` (Optional) - Maximum allowed value.
- `step`: `number` (Optional) - The increment/decrement step (default is 1).
- `value`: `number` (Optional) - Current numeric value.
- `onChange`: `(value: number) => void` (Required) - Callback for value changes.

```tsx
import { NumericQuestion } from '@sds/co-creation-form';

<NumericQuestion 
  label="How many seats do you need?"
  min={1}
  max={100}
  step={1}
  onChange={(val) => setSeats(val)}
/>
```

**Gotchas:**
- Be careful with floating point numbers; set the `step` prop (e.g., `0.01`) if decimals are required.