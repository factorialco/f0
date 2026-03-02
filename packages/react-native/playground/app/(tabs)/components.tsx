import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { useCSSVariable, withUniwind } from 'uniwind';
import { ActivityShowcase } from '../../components/ActivityShowcase';
import { AvatarShowcase } from '../../components/AvatarShowcase';
import { BadgeShowcase } from '../../components/BadgeShowcase';
import { F0ButtonShowcase } from '../../components/F0ButtonShowcase';
import { CounterShowcase } from '../../components/CounterShowcase';
import { DataListShowcase } from '../../components/DataListShowcase';
import { DetailsItemShowcase } from '../../components/DetailsItemShowcase';
import { DetailsItemsListShowcase } from '../../components/DetailsItemsListShowcase';
import { F0TextShowcase } from '../../components/F0TextShowcase/F0TextShowcase';
import { F0IconShowcase } from '../../components/F0IconShowcase';
import { OneChipShowcase } from '../../components/OneChipShowcase';
import { OnePresetShowcase } from '../../components/OnePresetShowcase';
import { PageHeaderShowcase } from '../../components/PageHeaderShowcase';
import { Select } from '../../components/Select';
import { TagShowcase } from '../../components/TagShowcase';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';

const SafeAreaView = withUniwind(RNSafeAreaView);

type ComponentType =
  | 'activity'
  | 'avatar'
  | 'badge'
  | 'f0button'
  | 'counter'
  | 'datalist'
  | 'detailsitem'
  | 'detailsitemslist'
  | 'f0icon'
  | 'f0text'
  | 'onechip'
  | 'onepreset'
  | 'pageheader'
  | 'tag';

const componentOptions = [
  { value: 'activity' as ComponentType, label: 'Activity' },
  { value: 'avatar' as ComponentType, label: 'Avatar' },
  { value: 'badge' as ComponentType, label: 'Badge' },
  { value: 'f0button' as ComponentType, label: 'F0Button' },
  { value: 'counter' as ComponentType, label: 'Counter' },
  { value: 'datalist' as ComponentType, label: 'DataList' },
  { value: 'detailsitem' as ComponentType, label: 'DetailsItem' },
  { value: 'detailsitemslist' as ComponentType, label: 'DetailsItemsList' },
  { value: 'f0icon' as ComponentType, label: 'F0Icon (Primitive)' },
  { value: 'f0text' as ComponentType, label: 'F0Text (Primitive)' },
  { value: 'onechip' as ComponentType, label: 'OneChip' },
  { value: 'onepreset' as ComponentType, label: 'OnePreset' },
  { value: 'pageheader' as ComponentType, label: 'PageHeader' },
  { value: 'tag' as ComponentType, label: 'Tag' },
];

export default function ComponentsShowcase() {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentType>('activity')

  const [f0Background, f0Foreground] = useCSSVariable([
    '--color-f0-background',
    '--color-f0-foreground',
  ]);

  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'activity':
        return <ActivityShowcase />;
      case 'avatar':
        return <AvatarShowcase />;
      case 'badge':
        return <BadgeShowcase />;
      case 'f0button':
        return <F0ButtonShowcase />;
      case 'counter':
        return <CounterShowcase />;
      case 'datalist':
        return <DataListShowcase />;
      case 'detailsitem':
        return <DetailsItemShowcase />;
      case 'detailsitemslist':
        return <DetailsItemsListShowcase />;
      case 'f0icon':
        return <F0IconShowcase />;
      case 'f0text':
        return <F0TextShowcase />;
      case 'onechip':
        return <OneChipShowcase />;
      case 'onepreset':
        return <OnePresetShowcase />;
      case 'pageheader':
        return <PageHeaderShowcase />;
      case 'tag':
        return <TagShowcase />;
      default:
        return <F0ButtonShowcase />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-f0-background" edges={['top', 'bottom']}>
      <View className="flex-1" style={{ backgroundColor: asString(f0Background) }}>
        <View className="px-4 pt-3 pb-2">
          <View className="mb-2">
            <Text className="text-xl font-bold mb-1" style={{ color: asString(f0Foreground) }}>
              Components Showcase
            </Text>
            <ThemeSwitcher />
          </View>

          <View className="mb-2">
            <Text className="text-sm font-semibold mb-1" style={{ color: asString(f0Foreground) }}>
              Select Component
            </Text>
            <Select
              options={componentOptions}
              value={selectedComponent}
              onChange={setSelectedComponent}
            />
          </View>
        </View>

        <View className="flex-1" style={{ minHeight: 0 }}>
          {renderComponent()}
        </View>
      </View>
    </SafeAreaView>
  );
}
