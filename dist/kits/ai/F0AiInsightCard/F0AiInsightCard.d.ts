import { CardInternalProps } from './internal';
declare const privateProps: readonly ["className"];
export type F0AiInsightCardPublicProps = Omit<CardInternalProps, (typeof privateProps)[number]>;
export declare const F0AiInsightCard: import('../../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<F0AiInsightCardPublicProps & import('react').RefAttributes<HTMLDivElement>> & {
    Skeleton: () => import("react").JSX.Element;
}>;
export {};
