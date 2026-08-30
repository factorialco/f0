import { default as React } from 'react';
import { RecordType } from '../../hooks/datasource';
import { LaneProps } from './types';
export declare function Lane<Record extends RecordType>({ title, items, renderCard, getKey, emptyState, fetchMore, variant, color, loading, hasMore, loadingMore, total, onPrimaryAction, onFooterAction, dropPlaceholderIndex, }: LaneProps<Record>): React.JSX.Element;
