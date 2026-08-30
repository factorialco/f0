import { IconType } from '../../../../../../../components/F0Icon';
import { TextCellConfig } from '../../types';
/**
 * Resolves the leading icon for a text cell: an explicit `icon` wins, otherwise
 * the shared default derived from `inputType` (url → link, email → envelope) —
 * see {@link getFieldInputIcon}, the same source F0Form's text fields use.
 */
export declare function resolveTextCellIcon(config: TextCellConfig | undefined): IconType | undefined;
