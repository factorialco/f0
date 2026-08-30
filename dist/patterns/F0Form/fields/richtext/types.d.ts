import { heightType } from '../../../../components/RichText/F0RichTextEditor';
import { MentionsConfig } from '../../../../components/RichText/internal';
import { F0BaseField, F0BaseFieldRenderIfFunction, CommonRenderIfCondition } from '../types';
/**
 * All valid renderIf conditions for richtext fields
 */
export type RichTextFieldRenderIf = CommonRenderIfCondition | F0BaseFieldRenderIfFunction;
/**
 * Rich text editor result value type
 */
export interface RichTextValue {
    /** HTML content of the editor */
    value: string | null;
    /** IDs of mentioned users */
    mentionIds?: string[];
}
/**
 * F0 config options specific to rich text fields
 */
export interface F0RichTextConfig {
    /** Maximum number of characters allowed */
    maxCharacters?: number;
    /** Configuration for user mentions */
    mentionsConfig?: MentionsConfig;
    /** Height configuration for the editor */
    height?: heightType;
    /** Whether to use plain HTML mode */
    plainHtmlMode?: boolean;
}
/**
 * Rich text field with all properties for rendering
 */
export type F0RichTextField = F0BaseField & F0RichTextConfig & {
    type: "richtext";
    /** Conditional rendering based on another field's value */
    renderIf?: RichTextFieldRenderIf;
};
