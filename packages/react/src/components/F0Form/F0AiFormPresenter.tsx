import { useMemo } from "react";

import type { F0FormDefinitionSingleSchema } from "@/components/F0WizardForm/types";

import { F0Dialog } from "@/components/F0Dialog";
import { F0WizardForm } from "@/components/F0WizardForm";
import { useF0FormDefinition } from "@/components/F0WizardForm/useF0FormDefinition";

import type {
  F0AiAvailableFormDefinition,
  F0AiPresentedForm,
} from "./F0AiFormRegistry";
import type { F0FormSchema } from "./types";

import { F0Form } from "./F0Form";
import { useF0Form } from "./useF0Form";

// F0Form has complex generic inference that doesn't work well with the
// dynamic F0FormSchema union type. We narrow to single-schema definition
// which is what availableFormDefinitions always produce.
const DynamicF0Form = F0Form as React.FC<{
  formDefinition: F0FormDefinitionSingleSchema<F0FormSchema>;
  formRef: ReturnType<typeof useF0Form>["formRef"];
}>;

function DialogPresenter({
  definition,
  initialValues,
  onClose,
}: {
  definition: F0AiAvailableFormDefinition;
  initialValues: Record<string, unknown>;
  onClose: () => void;
}) {
  const { formRef, submit, isSubmitting, hasErrors } = useF0Form();
  const formDefinition = useF0FormDefinition({
    name: definition.name,
    schema: definition.schema,
    defaultValues: initialValues,
    sections: definition.sections,
    submitConfig: { type: "default", hideSubmitButton: true },
    onSubmit: async ({ data }) => {
      await definition.onSubmit?.(data as Record<string, unknown>);
      onClose();
      return { success: true };
    },
  });

  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      title={definition.title ?? definition.name}
      description={definition.description}
      primaryAction={{
        label: "Submit",
        onClick: submit,
        loading: isSubmitting,
        disabled: hasErrors,
      }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <DynamicF0Form formDefinition={formDefinition} formRef={formRef} />
    </F0Dialog>
  );
}

function WizardPresenter({
  definition,
  initialValues,
  onClose,
}: {
  definition: F0AiAvailableFormDefinition;
  initialValues: Record<string, unknown>;
  onClose: () => void;
}) {
  const formDefinition = useF0FormDefinition({
    name: definition.name,
    schema: definition.schema,
    defaultValues: initialValues,
    sections: definition.sections,
    onSubmit: async ({ data }) => {
      await definition.onSubmit?.(data as Record<string, unknown>);
      return { success: true };
    },
  });

  return (
    <F0WizardForm
      isOpen
      onClose={onClose}
      title={definition.title ?? definition.name}
      formDefinition={formDefinition}
      steps={definition.steps}
      autoCloseOnLastStepSubmit
    />
  );
}

export function F0AiFormPresenter({
  presentedForm,
  onClose,
}: {
  presentedForm: F0AiPresentedForm;
  onClose: () => void;
}) {
  const { mode, definition, initialValues } = presentedForm;

  // Stable key that changes when a different form is presented or the same
  // form is re-presented with different values. This forces react-hook-form
  // to remount with the new defaultValues instead of keeping stale state.
  const formKey = useMemo(
    () => `${presentedForm.name}-${JSON.stringify(initialValues)}`,
    [presentedForm.name, initialValues],
  );

  if (mode === "wizard") {
    return (
      <WizardPresenter
        key={formKey}
        definition={definition}
        initialValues={initialValues}
        onClose={onClose}
      />
    );
  }
  return (
    <DialogPresenter
      key={formKey}
      definition={definition}
      initialValues={initialValues}
      onClose={onClose}
    />
  );
}
