import { CommandGroup, CommandItem } from './AvailableCommands';
interface CommandListHandle {
    onKeyDown: ({ event }: {
        event: KeyboardEvent;
    }) => boolean;
}
interface CommandListProps {
    items: CommandItem[];
    groups?: CommandGroup[];
    command: (item: CommandItem) => void;
}
declare const CommandList: import('react').ForwardRefExoticComponent<CommandListProps & import('react').RefAttributes<CommandListHandle>>;
export { CommandList };
