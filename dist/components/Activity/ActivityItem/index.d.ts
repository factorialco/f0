import * as react_jsx_runtime from 'react/jsx-runtime';
import { IconType } from '../../Icon/index.js';
import 'cva';
import 'react';
import 'react-native-svg';

type ActivityItemProps = {
    id: string;
    date: string;
    title: string;
    description?: string;
    icon?: IconType;
    category: string;
    isUnread?: boolean;
    onPress: (id: string) => void;
};
declare const ActivityItem: ({ id, date, title, description, icon, category, isUnread, onPress, }: ActivityItemProps) => react_jsx_runtime.JSX.Element;
declare const ActivityItemSkeleton: () => react_jsx_runtime.JSX.Element;

export { ActivityItem, type ActivityItemProps, ActivityItemSkeleton };
