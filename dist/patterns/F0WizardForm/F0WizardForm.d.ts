import { F0FormSchema, F0PerSectionSchema, F0WizardFormPerSectionProps, F0WizardFormSingleSchemaProps } from './types';
type F0WizardFormProps<T extends F0FormSchema | F0PerSectionSchema> = T extends F0FormSchema ? F0WizardFormSingleSchemaProps<T> : T extends F0PerSectionSchema ? F0WizardFormPerSectionProps<T> : never;
export declare function F0WizardForm<T extends F0FormSchema | F0PerSectionSchema>(props: F0WizardFormProps<T>): import("react").JSX.Element;
export declare namespace F0WizardForm {
    var displayName: string;
}
export {};
