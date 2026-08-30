import { FC } from 'react';
type Status = "waiting" | "pending" | "approved" | "rejected";
type Approver = {
    firstName: string;
    lastName: string;
    avatar?: string;
    status: Status;
};
export type ApprovalStepProps = {
    title: string;
    approvalsRequired?: number;
    status: Status;
    approvers: Approver[];
    approvalDate?: Date;
};
declare const ApprovalStep: FC<ApprovalStepProps>;
export default ApprovalStep;
export type { Status };
