import { default as React } from 'react';
import { CardMetadata as CardMetadataType } from '../types';
export declare const cardPropertyRenderers: {
    readonly text: (args: import('../../../ui/value-display/types/text').TextCellValue, meta: import('../../../ui/value-display').ValueDisplayRendererContext) => React.JSX.Element;
    readonly number: (args: import('../../../ui/value-display/types/number').NumberCellValue, meta: import('../../../ui/value-display').ValueDisplayRendererContext) => React.JSX.Element;
    readonly date: (args: import('../../../ui/value-display/types/date').DateCellValue, meta: import('../../../ui/value-display').ValueDisplayRendererContext) => React.JSX.Element;
    readonly amount: (args: import('../../../ui/value-display/types/amount').AmountCellValue, meta: import('../../../ui/value-display').ValueDisplayRendererContext) => React.JSX.Element;
    readonly person: (args: import('../../../ui/value-display/types/person').PersonCellValue, meta: import('../../../ui/value-display').ValueDisplayRendererContext) => React.JSX.Element;
    readonly company: (args: import('../../../ui/value-display/types/company').CompanyCellValue, meta: import('../../../ui/value-display').ValueDisplayRendererContext) => React.JSX.Element;
    readonly team: (args: import('../../../ui/value-display/types/team').TeamCellValue, meta: import('../../../ui/value-display').ValueDisplayRendererContext) => React.JSX.Element;
    readonly status: (args: import('../../../ui/value-display/types/status').StatusCellValue) => React.JSX.Element;
    readonly tag: (args: import('../../../ui/value-display/types/tag').TagCellValue) => React.JSX.Element;
    readonly avatarList: (args: import('../../../ui/value-display/types/avatarList').AvatarListCellValue, meta: import('../../../ui/value-display').ValueDisplayRendererContext) => React.JSX.Element;
    readonly tagList: (args: import('../../../ui/value-display/types/tagList').TagListCellValue) => React.JSX.Element;
    readonly alertTag: (args: import('../../../ui/value-display/types/alertTag').AlertTagCellValue) => React.JSX.Element;
    readonly dotTag: (args: import('../../../ui/value-display/types/dotTag').DotTagCellValue) => React.JSX.Element;
    readonly file: (args: import('../../../ui/value-display/types/file').FileCellValue) => React.JSX.Element;
    readonly folder: (args: import('../../../ui/value-display/types/folder').FolderCellValue) => React.JSX.Element;
    readonly progressBar: (args: import('../../../ui/value-display/types/progressBar').ProgressBarCellValue, _meta: import('../../../ui/value-display').ValueDisplayRendererContext) => React.JSX.Element | null;
};
export type CardPropertyType = keyof typeof cardPropertyRenderers;
interface CardMetadataProps {
    metadata: CardMetadataType;
}
export declare function CardMetadata({ metadata }: CardMetadataProps): React.JSX.Element;
export {};
