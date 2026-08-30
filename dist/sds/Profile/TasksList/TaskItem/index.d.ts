export type TaskStatus = "done" | "in-progress" | "todo";
export interface Task {
    id: number | string;
    text: string;
    badge?: {
        text: string;
        isPastDue?: boolean;
    };
    counter?: number;
}
export type TaskItemProps = {
    task: Task;
    status: TaskStatus;
    onClick?: (task: Task) => void;
    hideIcon?: boolean;
};
export declare function TaskItem({ task, status, onClick, hideIcon, }: TaskItemProps): import("react").JSX.Element;
