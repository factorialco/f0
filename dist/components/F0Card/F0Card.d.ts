import { CardInternalProps, cardImageAspectRatios, cardImageFits, cardImageSizes, CardImageAspectRatio, CardImageFit, CardImageSize } from './CardInternal';
declare const privateProps: readonly ["forceVerticalMetadata", "disableOverlayLink"];
export type F0CardProps = Omit<CardInternalProps, (typeof privateProps)[number]>;
export { cardImageAspectRatios, cardImageFits, cardImageSizes };
export type { CardImageAspectRatio, CardImageFit, CardImageSize };
export { cardAlertVariants } from './types';
export type { CardAlertAction, CardAlertProps, CardAlertVariant } from './types';
export declare const F0Card: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<F0CardProps & import('react').RefAttributes<HTMLDivElement>> & {
    Skeleton: ({ compact }: {
        compact?: boolean;
    }) => import("react").JSX.Element;
}>;
