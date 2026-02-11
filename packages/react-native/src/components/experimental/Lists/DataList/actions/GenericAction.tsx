import { memo, ReactNode } from 'react';
import { Pressable, View } from 'react-native';

import { GenericActionType } from '..';
import { ChevronRight } from '../../../../../icons/app';
import { cn } from '../../../../../lib/utils';
import { F0Icon } from '../../../../primitives/Icon';

export type GenericActionProps = {
  children: ReactNode;
  className?: string;
} & GenericActionType;

export const GenericAction = memo(
  ({ children, className, ...props }: GenericActionProps) => {
    return (
      <Pressable
        onPress={props.handlePress}
        {...props}
        className={cn(
          'text-inherit group flex items-center justify-between gap-1.5 rounded p-1.5 text-f0-foreground',
          'no-underline hover:bg-f0-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f0-border-selected-bold active:bg-f0-background-secondary-hover',
          className,
        )}
      >
        <View className='flex flex-row items-center gap-1.5'>{children}</View>
        <F0Icon
          aria-hidden={true}
          icon={ChevronRight}
          size='md'
          className='text-f0-foreground'
        />
      </Pressable>
    );
  },
);

GenericAction.displayName = 'GenericAction';
