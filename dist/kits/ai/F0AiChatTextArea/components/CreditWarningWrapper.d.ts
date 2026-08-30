import { ReactNode } from 'react';
import { AiChatCreditWarning } from '../../F0AiChat/types';
interface CreditWarningWrapperProps {
    creditWarning?: AiChatCreditWarning;
    children: ReactNode;
}
export declare const CreditWarningWrapper: ({ creditWarning, children, }: CreditWarningWrapperProps) => string | number | boolean | Iterable<ReactNode> | import("react").JSX.Element | null | undefined;
export {};
