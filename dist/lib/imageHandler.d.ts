import { ImgHTMLAttributes, ReactNode } from 'react';
export type ImageContextValue = {
    src?: (props: ImageProps) => SrcProps;
};
export declare const ImageProvider: React.FC<{
    children: ReactNode;
} & ImageContextValue>;
export declare const useImageContext: () => {
    src?: (props: ImageProps) => SrcProps;
};
export type ImageProps = ImgHTMLAttributes<HTMLImageElement>;
export type SrcProps = Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes">;
export declare const Image: import('react').ForwardRefExoticComponent<ImageProps & import('react').RefAttributes<HTMLImageElement>>;
