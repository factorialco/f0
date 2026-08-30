import { FiltersDefinition } from '../../../../OneFilterPicker/types';
import { CardImageAspectRatio, CardImageFit, CardImageSize } from '../../../../../components/F0Card';
import { CardAvatarVariant } from '../../../../../components/F0Card/components/CardAvatar';
import { IconType } from '../../../../../components/F0Icon';
import { GroupingDefinition, RecordType } from '../../../../../hooks/datasource';
import { SortingsDefinition } from '../../../../../hooks/datasource/types/sortings.typings';
import { NavigationFiltersDefinition } from '../../../navigationFilters/types';
import { ItemActionsDefinition } from '../../../item-actions';
import { PropertyDefinition } from '../../../property-render';
import { SummariesDefinition } from '../../../summary';
import { CollectionProps } from '../../../types';
export type CardPropertyDefinition<T> = PropertyDefinition<T> & {
    icon?: IconType;
};
export type CardVisualizationOptions<T, _Filters extends FiltersDefinition, _Sortings extends SortingsDefinition> = {
    cardProperties: ReadonlyArray<CardPropertyDefinition<T>>;
    title: (record: T) => string;
    description?: (record: T) => string;
    avatar?: (record: T) => CardAvatarVariant;
    image?: (record: T) => string;
    imageFit?: CardImageFit;
    imageSize?: CardImageSize;
    imageAspectRatio?: CardImageAspectRatio;
    blurredBackground?: boolean;
    compact?: boolean;
};
/**
 * Group Cards: Renders
 */
export type CardCollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>> = CollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, CardVisualizationOptions<Record, Filters, Sortings>>;
export declare const CardCollection: <Record extends RecordType, Filters extends FiltersDefinition, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition, ItemActions extends ItemActionsDefinition<Record>, NavigationFilters extends NavigationFiltersDefinition, Grouping extends GroupingDefinition<Record>>({ cardProperties, title, description, avatar, image, imageFit, imageSize, imageAspectRatio, blurredBackground, compact, source, onSelectItems, onLoadData, onLoadError, tmpFullWidth, }: CollectionProps<Record, Filters, Sortings, Summaries, ItemActions, NavigationFilters, Grouping, CardVisualizationOptions<Record, Filters, Sortings>>) => import("react").JSX.Element;
