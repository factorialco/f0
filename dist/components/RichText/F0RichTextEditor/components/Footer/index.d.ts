import { Editor } from '@tiptap/react';
import { UseEnhanceReturn } from '../../../internal/Enhance';
import { RecorderStatus } from '../../../../../kits/ai/F0AiChatTextArea/useAudioRecorder';
import { primaryActionType, secondaryActionsType } from '../../utils/types';
interface FooterProps {
    editor: Editor;
    maxCharacters: number | undefined;
    secondaryAction: secondaryActionsType | undefined;
    primaryAction: primaryActionType | undefined;
    fileInputRef: React.RefObject<HTMLInputElement>;
    canUseFiles: boolean;
    enhance: UseEnhanceReturn;
    disableButtons: boolean;
    disabled?: boolean;
    isFullscreen: boolean;
    setIsToolbarOpen: (isToolbarOpen: boolean) => void;
    isToolbarOpen: boolean;
    plainHtmlMode: boolean;
    /** Voice dictation — when canRecord is false the microphone is hidden. */
    canRecord?: boolean;
    recordingStatus?: RecorderStatus;
    recordingStream?: MediaStream | null;
    onStartRecording?: () => void;
    onStopRecording?: () => void;
    onCancelRecording?: () => void;
}
declare const Footer: ({ editor, maxCharacters, secondaryAction, primaryAction, fileInputRef, canUseFiles, enhance, isFullscreen, disableButtons, disabled, setIsToolbarOpen, isToolbarOpen, plainHtmlMode, canRecord, recordingStatus, recordingStream, onStartRecording, onStopRecording, onCancelRecording, }: FooterProps) => import("react").JSX.Element;
export { Footer };
