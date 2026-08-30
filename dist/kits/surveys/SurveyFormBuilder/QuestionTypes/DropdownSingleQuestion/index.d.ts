import { DropdownMultiQuestionProps } from '../DropdownMultiQuestion/types';
import { DropdownSingleQuestionProps } from './types';
/**
 * Unified component for both `dropdown-single` and `dropdown-multi` question
 * types. Keeping both types in a single component ensures React reconciles
 * in-place when toggling "Allow multi-selection" in the ActionsMenu, so the
 * menu stays open and no state is lost.
 */
export declare const DropdownSingleQuestion: ({ datasetKey, showSearchBox: showSearchBoxProp, searchBoxPlaceholder, ...props }: DropdownSingleQuestionProps | DropdownMultiQuestionProps) => import("react").JSX.Element;
