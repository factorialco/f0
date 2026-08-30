import { ReactNode } from 'react';
import { F0WizardContextValue } from '../internal-types';
export declare const F0WizardContext: import('react').Context<F0WizardContextValue | null>;
export declare function useF0Wizard(): F0WizardContextValue;
interface WizardProviderProps extends F0WizardContextValue {
    children: ReactNode;
}
export declare function WizardProvider({ children, ...value }: WizardProviderProps): import("react").JSX.Element;
export {};
