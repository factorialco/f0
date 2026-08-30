import { ModuleId } from '../../../../components/avatars/F0AvatarModule';
type CustomModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    module?: ModuleId;
    portalContainer?: HTMLElement | null;
};
export declare function CustomModal({ isOpen, onClose, title, children, module, portalContainer, }: CustomModalProps): import("react").JSX.Element;
export {};
