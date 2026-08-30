import { FC } from 'react';
import { default as ApprovalStep, ApprovalStepProps } from './ApprovalStep';
type ApprovalStep = ApprovalStepProps;
type OneApprovalHistoryProps = {
    steps: ApprovalStep[];
};
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const OneApprovalHistory: import('../../../lib/data-testid').WithDataTestIdReturnType<FC<OneApprovalHistoryProps>>;
export {};
