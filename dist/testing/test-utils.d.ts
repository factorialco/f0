import { queries } from '@testing-library/dom';
import { Queries, RenderHookOptions, RenderHookResult, RenderOptions, RenderResult, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { default as React, ReactElement } from 'react';
import * as ReactDOMClient from "react-dom/client";
export * from '@testing-library/react';
declare const TestProviders: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
declare const zeroRender: (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => RenderResult;
type RendererableContainer = ReactDOMClient.Container;
type HydrateableContainer = Parameters<(typeof ReactDOMClient)["hydrateRoot"]>[0];
declare const zeroRenderHook: <Result, Props, Q extends Queries = typeof queries, Container extends RendererableContainer | HydrateableContainer = HTMLElement, BaseElement extends RendererableContainer | HydrateableContainer = Container>(render: (initialProps: Props) => Result, options?: RenderHookOptions<Props, Q, Container, BaseElement> | undefined) => RenderHookResult<Result, Props>;
export { screen, TestProviders, userEvent, within, zeroRender, zeroRenderHook };
