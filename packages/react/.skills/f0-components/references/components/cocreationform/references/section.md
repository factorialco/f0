## Section

`Section` is a structural component used to group related questions together. It provides a visual break and can include its own title and description.

**Props:**
- `title`: `string` (Required) - The section heading.
- `description`: `string` (Optional) - Contextual information for the group of questions.
- `children`: `React.ReactNode` (Required) - The questions contained within this section.
- `collapsible`: `boolean` (Optional) - Whether the section can be expanded/collapsed.

```tsx
import { Section, TextQuestion, NumericQuestion } from '@sds/co-creation-form';

<Section 
  title="Personal Details" 
  description="We use this to customize your experience."
>
  <TextQuestion label="Full Name" />
  <NumericQuestion label="Age" />
</Section>
```

**Gotchas:**
- Avoid nesting Sections within Sections as it can lead to confusing information hierarchy.