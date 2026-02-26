import React from "react"

import { withDataTestId } from "@/lib/data-testid"

import type {
  F0FormSchema,
  F0PerSectionSchema,
  F0WizardFormPerSectionProps,
  F0WizardFormSingleSchemaProps,
} from "./types"

import { F0WizardForm as F0WizardFormComponent } from "./F0WizardForm"

export { useF0FormDefinition } from "./useF0FormDefinition"

export type {
  F0FormDefinition,
  F0FormDefinitionSingleSchema,
  F0FormDefinitionPerSection,
  F0WizardFormStep,
  F0WizardFormSingleSchemaProps,
  F0WizardFormPerSectionProps,
  F0WizardFormSingleSubmitArg,
  F0WizardFormPerSectionSubmitArg,
} from "./types"

/**
 * @experimental This is an experimental component use it at your own risk
 */
const F0WizardForm = withDataTestId(F0WizardFormComponent) as {
  <TSchema extends F0FormSchema>(
    props: F0WizardFormSingleSchemaProps<TSchema>
  ): React.ReactElement
  <T extends F0PerSectionSchema>(
    props: F0WizardFormPerSectionProps<T>
  ): React.ReactElement
}

export { F0WizardForm }
