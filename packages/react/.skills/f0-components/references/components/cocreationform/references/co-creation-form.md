## CoCreationForm

`CoCreationForm` is the top-level orchestrator for building interactive, multi-section forms. It manages the overall layout, sectioning, and submission logic for the co-creation experience. Use this when you need to group multiple `Section` components into a single workflow.

**Props:**
- `title`: `string` (Optional) - The main heading for the form.
- `description`: `string` (Optional) - Sub-heading or introductory text for the form.
- `sections`: `SectionProps[]` (Optional) - An array of section configurations if using a data-driven approach.
- `onSubmit`: `(data: any) => void` (Required) - Callback function triggered when the form is submitted.
- `initialValues`: `Record<string, any>` (Optional) - Default values for the form fields.
- `children`: `React.ReactNode` (Optional) - Manual composition of `Section` and question components.

```tsx
import { CoCreationForm, Section, TextQuestion } from '@sds/co-creation-form';

const MyForm = () => {
  const handleSubmit = (data) => console.log(data);

  return (
    <CoCreationForm title="Project Setup" onSubmit={handleSubmit}>
      <Section title="Basic Info">
        <TextQuestion label="Project Name" required />
      </Section>
    </CoCreationForm>
  );
};
```

**Gotchas:**
- If using `initialValues`, ensure the keys match the `name` or `id` props of the child questions.
- For complex validation, see the skill in ./validation-engine/SKILL.md.