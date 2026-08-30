import { primaryActionType, secondaryActionsType } from '../../../utils/types';
interface ActionsMenuProps {
    secondaryAction?: secondaryActionsType;
    primaryAction?: primaryActionType;
    useLittleMode: boolean;
    disableButtons: boolean;
    isFullscreen: boolean;
}
declare const ActionsMenu: ({ secondaryAction, primaryAction, useLittleMode, disableButtons, isFullscreen, }: ActionsMenuProps) => import("react").JSX.Element | null;
export { ActionsMenu };
