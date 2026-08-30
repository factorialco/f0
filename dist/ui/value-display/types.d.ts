import { TranslationsType } from '../../lib/providers/i18n/i18n-provider-defaults';
export type ValueDisplayVisualizationType = "table" | "card" | "list" | (string & {});
export type ValueDisplayTableAlignment = "left" | "right";
export type ValueDisplayRendererContext = {
    visualization: ValueDisplayVisualizationType;
    i18n: TranslationsType;
    tableAlign?: ValueDisplayTableAlignment;
};
