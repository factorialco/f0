## RatingQuestion

`RatingQuestion` allows users to provide feedback on a scale. It supports various visual styles including stars, numbers, or emojis.

**Props:**
- `label`: `string` (Required) - The question text.
- `type`: `'stars' | 'emoji' | 'numeric'` (Default: 'stars') - The visual representation.
- `count`: `number` (Default: 5) - The total number of points in the scale.
- `value`: `number` (Optional) - The current rating.
- `onChange`: `(value: number) => void` (Required) - Callback when a rating is selected.

```tsx
import { RatingQuestion } from '@sds/co-creation-form';

<RatingQuestion 
  label="How satisfied are you with the results?"
  type="emoji"
  count={5}
  onChange={(val) => setRating(val)}
/>
```

**Gotchas:**
- When using `emoji` type, ensure the `count` matches the number of available emoji assets in your theme.