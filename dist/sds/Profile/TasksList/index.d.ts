import { Task } from './TaskItem';
interface TasksList {
    done?: (Task | string)[];
    inProgress?: (Task | string)[];
    todo?: (Task | string)[];
}
export interface TasksListProps {
    tasks: TasksList;
    maxTasksToShow?: number;
    onClickTask?: (task: Task) => void;
    emptyMessage?: string;
    hideIcons?: boolean;
}
export declare function TasksList({ tasks, onClickTask, hideIcons, maxTasksToShow, emptyMessage, }: TasksListProps): import("react").JSX.Element;
export {};
