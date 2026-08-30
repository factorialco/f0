import { ReactNode } from 'react';
import { AiChatEmployeeCredits } from '../../F0AiChat/types';
type EmployeeCreditsPopoverProps = {
    employeeCredits?: AiChatEmployeeCredits;
    /** Custom popover trigger (asChild). Defaults to the Sliders icon button. */
    trigger?: ReactNode;
};
/**
 * Employee-only credits popover.
 *
 * Rendered when the host passes `employeeCredits` to the AI provider.
 * Mutually exclusive with the classic {@link CreditsPopover}: when both
 * `credits` and `employeeCredits` are provided, this one wins.
 *
 * Headless — takes `employeeCredits` as a prop. The Connected* wrapper
 * (ConnectedChatHeader) reads the value from `useAiChat()` and forwards it.
 *
 * No company-level section, no upgrade CTA — just the logged-in employee's
 * monthly allocation. Hosts opt in by passing `employeeCredits` only for
 * employees who have a per-employee monthly allocation configured.
 */
export declare function EmployeeCreditsPopover({ employeeCredits, trigger, }: EmployeeCreditsPopoverProps): import("react").JSX.Element | null;
export {};
