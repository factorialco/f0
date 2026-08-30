import { ValueDisplayRendererContext } from '../../renderers';
import { CurrencyDef } from '../amount';
import { WithPlaceholder } from '../types';
/**
 * Compound value-display renderer.
 *
 * Renders a sequence of heterogeneous segments (text, number, percentage,
 * amount) as a single inline cell, optionally separated by a configurable
 * separator. Each segment can define an optional `tone` from
 * {@link compoundTones}, which controls its visual emphasis within the cell.
 *
 * Segment values use {@link WithPlaceholder} so that missing or undefined
 * values are rendered consistently with other value-display types.
 */
export declare const compoundTones: readonly ["neutral", "secondary", "positive", "critical", "warning", "info", "selected"];
export type CompoundTone = (typeof compoundTones)[number];
type UnitsPosition = "left" | "right";
export interface CompoundTextSegment extends WithPlaceholder {
    type: "text";
    value: string | number | undefined;
    tone?: CompoundTone;
}
export interface CompoundNumberSegment extends WithPlaceholder {
    type: "number";
    value: number | undefined;
    units?: string;
    unitsPosition?: UnitsPosition;
    decimalPlaces?: number;
    tone?: CompoundTone;
}
export interface CompoundPercentageSegment extends WithPlaceholder {
    type: "percentage";
    value: number | undefined;
    decimalPlaces?: number;
    tone?: CompoundTone;
}
export interface CompoundAmountSegment extends WithPlaceholder {
    type: "amount";
    value: number | undefined;
    currency?: CurrencyDef;
    tone?: CompoundTone;
}
export type CompoundSegment = CompoundTextSegment | CompoundNumberSegment | CompoundPercentageSegment | CompoundAmountSegment;
export interface CompoundCellValue {
    segments: CompoundSegment[];
    separator?: string;
}
export declare const CompoundCell: (args: CompoundCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
export {};
