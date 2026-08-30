import { F0FormPropsWithSingleSchemaDefinition, F0FormSchema } from './types';
export type F0FormRenderer = (props: F0FormPropsWithSingleSchemaDefinition<F0FormSchema>) => React.ReactElement;
export declare const F0FormRendererProvider: import('react').Provider<F0FormRenderer | undefined>;
export declare function useF0FormRenderer(): F0FormRenderer;
