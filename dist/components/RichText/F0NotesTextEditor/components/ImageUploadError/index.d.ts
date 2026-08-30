import { ImageUploadErrorType } from '../../../internal/Extensions/Image';
interface ImageUploadErrorProps {
    errorType: ImageUploadErrorType;
    onDismiss: () => void;
}
declare const ImageUploadError: ({ errorType, onDismiss }: ImageUploadErrorProps) => import("react").JSX.Element;
export { ImageUploadError };
export type { ImageUploadErrorProps };
