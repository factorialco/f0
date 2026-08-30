import { ReactNode } from 'react';
/**
 * Storybook-only Connected wrapper. Reads messages from the mock runtime,
 * converts them to `RenderableTurn[]`, and feeds them to the headless
 * `F0AiMessagesContainer`. Mirrors the shape factorial's production
 * Connected wrapper will have.
 */
export declare const MockConnectedMessagesContainer: ({ noShadows, children, }: {
    noShadows?: boolean;
    children?: ReactNode;
}) => import("react").JSX.Element;
