---
name: co-creation-form
description: A high-level form builder and editor interface. Use when users need to dynamically create, edit, or preview structured questionnaires, surveys, or data collection flows with multiple question types.
---
# CoCreationForm

The `CoCreationForm` is a comprehensive component designed for "co-creation" workflows where forms are dynamically generated or edited. It acts as a container for various question types and sections, providing a unified interface for managing form state and structure.

## Props

- **id** (required): `string` - Unique identifier for the form instance.
- **title** (required): `string` - The primary heading displayed at the top of the form.
- **elements** (required): `CoCreationFormElement[]` - The array of question and section objects that define the form structure.
- **onChange** (required): `(elements: CoCreationFormElement[]) => void` - Callback function triggered whenever an element is added, removed, or modified.
- **options** (required): `SelectQuestionOption[]` - Configuration options for selection-based questions within the form.
- **type** (required): `union` - Defines the category or schema type of the form.
- **children** (required): `ReactReactNode` - Additional content or custom elements to render within the form context.
- **description** (optional): `string` - Supporting text displayed below the title.
- **isEditMode** (optional): `boolean` - Toggles between the builder/editor view and the standard form view.
- **applyingChanges** (optional): `boolean` - Displays a loading or processing state when form updates are in progress.
- **locked** (optional): `boolean` - When true, prevents any modifications to the form elements.
- **allowedQuestionTypes** (optional): `QuestionType[]` - A whitelist of question types (e.g., 'text', 'rating') that can be added to this form.
- **disallowOptionalQuestions** (optional): `boolean` - If true, removes the ability to mark questions as optional.
- **questions** (optional): `QuestionElement[]` - An alternative or legacy array of question objects (defaults to empty).
- **required** (optional): `boolean` - Indicates if the form completion is mandatory.
- **value** (optional): `union` - The current data value held by the form.

## Usage Example

```tsx
import { CoCreationForm } from './CoCreationForm';

const FormEditor = () => {
  const [elements, setElements] = useState([
    { id: '1', type: 'text', title: 'User Feedback', required: true },
    { id: '2', type: 'rating', title: 'Satisfaction Score' }
  ]);

  return (
    <CoCreationForm
      id="feedback-form-001"
      title="Product Survey"
      description="Please help us improve by answering these questions."
      elements={elements}
      onChange={(newElements) => setElements(newElements)}
      isEditMode={true}
      type="survey"
      options={[]}
    >
      <p>Form Footer Content</p>
    </CoCreationForm>
  );
};
```

## Supported Question Types

The form supports a variety of specialized input types. For detailed implementation of each, refer to their specific documentation:

- **Text**: For short or long-form text input. For TextQuestion, see the skill in ./references/text-question.md
- **Rating**: For numerical or emoji-based scales. For RatingQuestion, see the skill in ./references/rating-question.md
- **Select**: For single or multi-select dropdowns/lists. For SelectQuestion, see the skill in ./references/select-question.md
- **Link**: For URL and resource linking. For LinkQuestion, see the skill in ./references/link-question.md
- **Date**: For calendar and date selection. For DateQuestion, see the skill in ./references/date-question.md
- **Numeric**: For strictly numerical data entry. For NumericQuestion, see the skill in ./references/numeric-question.md
- **Section**: For grouping related questions together. For Section, see the skill in ./references/section.md

## Best Practices

- **Edit Mode**: Use `isEditMode={true}` when the user is intended to modify the structure (titles, types, requirements) of the form, rather than just filling it out.
- **Loading States**: Always set `applyingChanges={true}` when performing asynchronous operations (like saving to a database) to prevent conflicting user edits.
- **Validation**: Use `allowedQuestionTypes` to restrict the form builder to only those inputs your backend or downstream processes can handle.
- **Base Logic**: For the underlying logic shared across all question types, see the skill in ./references/base-question.md

## Accessibility

- The component manages focus when new questions are added in edit mode.
- Ensure that the `title` and `description` props are descriptive enough to provide context for screen reader users.
- Each sub-question component handles its own internal labeling and ARIA attributes.

## Sub-components

- **BaseQuestion**: See ./references/basequestion.md
- **CoCreationForm**: See ./references/cocreationform.md
- **DateQuestion**: See ./references/datequestion.md
- **DropdownSingleQuestion**: See ./references/dropdownsinglequestion.md
- **LinkQuestion**: See ./references/linkquestion.md
- **NumericQuestion**: See ./references/numericquestion.md
- **RatingQuestion**: See ./references/ratingquestion.md
- **Section**: See ./references/section.md
- **SelectQuestion**: See ./references/selectquestion.md
- **TextQuestion**: See ./references/textquestion.md