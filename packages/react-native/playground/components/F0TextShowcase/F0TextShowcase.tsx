import React from 'react';
import { ScrollView, View } from 'react-native';
import { F0Text } from '../../../src/components/primitives/F0Text';

export function F0TextShowcase() {
  return (
    <ScrollView
      className='p-4'
      contentContainerStyle={{ paddingBottom: 40 }}
      style={{ width: '100%' }}
    >
      {/* Typography Variants */}
      <F0Text variant='heading-lg'>Typography Variants</F0Text>

      <View className='mb-8 gap-4'>
        <F0Text variant='heading-lg'>Heading LG (24px)</F0Text>
        <F0Text variant='heading-md'>Heading MD (20px)</F0Text>
        <F0Text variant='heading-sm'>Heading SM (16px)</F0Text>
        <F0Text variant='body-md-default'>Body MD Default (16px)</F0Text>
        <F0Text variant='body-md-medium'>Body MD Medium (16px)</F0Text>
        <F0Text variant='body-md-semibold'>Body MD Semibold (16px)</F0Text>
        <F0Text variant='body-sm-default'>Body SM Default (14px)</F0Text>
        <F0Text variant='body-sm-medium'>Body SM Medium (14px)</F0Text>
        <F0Text variant='body-sm-semibold'>Body SM Semibold (14px)</F0Text>
        <F0Text variant='body-xs-medium'>Body XS Medium (12px)</F0Text>
      </View>

      {/* Color Variants */}
      <F0Text variant='heading-lg'>Color Variants</F0Text>

      <View className='mb-8 gap-3'>
        <F0Text color='default'>Default foreground color</F0Text>
        <F0Text color='secondary'>Secondary foreground color</F0Text>
        <F0Text color='tertiary'>Tertiary foreground color</F0Text>
        <F0Text color='disabled'>Disabled foreground color</F0Text>
        <F0Text color='accent'>Accent color</F0Text>
        <F0Text color='critical'>Critical color</F0Text>
        <F0Text color='info'>Info color</F0Text>
        <F0Text color='warning'>Warning color</F0Text>
        <F0Text color='positive'>Positive color</F0Text>
        <F0Text color='selected'>Selected color</F0Text>
      </View>

      {/* Text Alignment */}
      <F0Text variant='heading-lg'>Text Alignment</F0Text>

      <View className='bg-f0-background-secondary mb-8 gap-3 rounded p-4'>
        <F0Text align='left'>Left aligned text</F0Text>
        <F0Text align='center'>Center aligned text</F0Text>
        <F0Text align='right'>Right aligned text</F0Text>
        <F0Text align='justify'>
          Justified text that spans multiple lines to demonstrate how text
          justification works when the content is long enough to wrap.
        </F0Text>
      </View>

      {/* Text Decorations */}
      <F0Text variant='heading-lg'>Text Decorations</F0Text>

      <View className='mb-8 gap-3'>
        <F0Text decoration='none'>No decoration</F0Text>
        <F0Text decoration='underline'>Underlined text</F0Text>
        <F0Text decoration='line-through'>Strikethrough text</F0Text>
      </View>

      {/* Text Transforms */}
      <F0Text variant='heading-lg'>Text Transforms</F0Text>

      <View className='mb-8 gap-3'>
        <F0Text transform='none'>Original text case</F0Text>
        <F0Text transform='uppercase'>uppercase transformed</F0Text>
        <F0Text transform='lowercase'>LOWERCASE TRANSFORMED</F0Text>
        <F0Text transform='capitalize'>capitalize each word</F0Text>
      </View>

      {/* Number of Lines Truncation */}
      <F0Text variant='heading-lg'>Text Truncation</F0Text>

      <View className='bg-f0-background-secondary mb-8 gap-3 rounded p-4'>
        <F0Text variant='body-xs-medium' color='secondary'>
          Single line truncation:
        </F0Text>
        <F0Text numberOfLines={1}>
          This is a very long text that will be truncated after one line with an
          ellipsis at the end to show how the component handles overflow content
          when numberOfLines is set to 1.
        </F0Text>

        <F0Text variant='body-xs-medium' color='secondary'>
          Two lines truncation:
        </F0Text>
        <F0Text numberOfLines={2}>
          This is a very long text that will be truncated after two lines with
          an ellipsis at the end to show how the component handles overflow
          content when numberOfLines is set to 2. This should wrap to a second
          line before truncating.
        </F0Text>

        <F0Text variant='body-xs-medium' color='secondary'>
          Three lines truncation:
        </F0Text>
        <F0Text numberOfLines={3}>
          This is a very long text that will be truncated after three lines with
          an ellipsis at the end to show how the component handles overflow
          content when numberOfLines is set to 3. This should wrap to multiple
          lines before truncating at the specified line limit. This demonstrates
          how you can control text overflow in your mobile applications.
        </F0Text>
      </View>

      {/* Nested Text */}
      <F0Text variant='heading-lg'>Nested Text</F0Text>

      <View className='mb-8 gap-3'>
        <F0Text variant='body-sm-default'>
          This is regular text with{' '}
          <F0Text variant='body-sm-semibold' color='accent'>
            bold accent nested text
          </F0Text>{' '}
          and{' '}
          <F0Text variant='body-sm-default' decoration='underline'>
            underlined nested text
          </F0Text>
          .
        </F0Text>
      </View>

      {/* Real-world Examples */}
      <F0Text variant='heading-lg'>Real-world Examples</F0Text>

      <View className='mb-8 gap-6'>
        {/* Card-like example */}
        <View className='bg-f0-background-secondary rounded-lg p-4'>
          <F0Text variant='heading-sm'>Card Title</F0Text>
          <F0Text color='secondary'>
            This is a description of the card content. It uses secondary color
            for less emphasis.
          </F0Text>
          <F0Text variant='body-xs-medium' color='tertiary'>
            Last updated 2 hours ago
          </F0Text>
        </View>

        {/* Alert-like example */}
        <View className='bg-f0-background-critical rounded-lg p-4'>
          <F0Text variant='heading-sm' color='critical'>
            Error occurred
          </F0Text>
          <F0Text color='critical'>
            Something went wrong. Please try again later.
          </F0Text>
        </View>

        {/* Success message */}
        <View className='bg-f0-background-positive rounded-lg p-4'>
          <F0Text variant='heading-sm' color='positive'>
            Success!
          </F0Text>
          <F0Text color='positive'>Your changes have been saved.</F0Text>
        </View>
      </View>
    </ScrollView>
  );
}
