import { F0HILActionConfirmationProps } from './types';
/**
 * @deprecated Being replaced by `F0CardHorizontal` (`@/experimental/F0CardHorizontal`),
 * which this component already wraps. Use `F0CardHorizontal` directly: `confirmAction` /
 * `rejectAction` for the pending state, `status` for the resolved outcome, and
 * `secondaryActions` for a single CTA. The AI Cocreation flow no longer uses this component —
 * don't add new usages.
 * @removeIn 5.0.0
 */
export declare const F0HILActionConfirmation: ({ text, description, avatar, confirmationText, onConfirm, cancelText, onCancel, stackAt, }: F0HILActionConfirmationProps) => import("react").JSX.Element;
