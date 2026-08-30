import { ComponentType } from 'react';
export type EntityRefRendererProps = {
    id: string;
    label: string;
};
export type EntityRefRenderer = ComponentType<EntityRefRendererProps>;
export declare function getEntityRefRenderer(type: string): EntityRefRenderer | undefined;
