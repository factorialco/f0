import { ReactNode } from 'react';
import { L10nContextValue } from './types';
export interface L10nProviderProps {
    children: ReactNode;
    l10n: L10nContextValue;
}
export declare function L10nProvider({ children, l10n, }: L10nProviderProps): JSX.Element;
export declare function useL10n(): L10nContextValue;
