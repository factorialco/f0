import { DragConfig } from '../../../ui/Kanban/components/KanbanCard';
import { F0Card } from '../F0Card';
export declare function DraggableF0Card<T = unknown>({ drag, ...props }: {
    drag: DragConfig<T>;
} & React.ComponentProps<typeof F0Card>): import("react").JSX.Element;
