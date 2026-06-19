---
name: sds-experimental-banner
description: High-visibility banner component for announcements, feature discovery, and promotional content. Use for onboarding, tutorials, or special offers. Do not use for persistent navigation or low-priority system messages.
---
## Overview
The Experimental Banner (BaseBanner) is a versatile component designed to capture user attention for significant updates, feature discovery, or promotional messaging. It supports rich media, primary and secondary actions, and a loading state.

## Props
- **mediaUrl** (required): `string` - The URL for the image or video asset to be displayed.
- **title** (required): `string` - The main headline of the banner.
- **subtitle** (optional): `string` - Supporting text to provide more context below the title.
- **children** (optional): `React.ReactNode` - Additional content or description text.
- **isLoading** (optional): `boolean` - When true, displays a loading state (default: false).
- **onClose** (optional): `() => void` - Callback function triggered when the close button is clicked.
- **primaryAction** (optional): `ActionObject` - Configuration for the main call-to-action button.
- **secondaryAction** (optional): `ActionObject` - Configuration for the secondary action button.
- **variant** (optional): `"default" | string` - Visual style variant (default: "default").

### ActionObject Type
The `primaryAction` and `secondaryAction` props expect an object with the following structure:
- **label**: `string` (required)
- **onClick**: `() => void` (required)
- **variant**: `"default" | "outline" | "ghost"` (optional)
- **icon**: `IconType` (optional)

## Usage Examples

### Basic Banner
```tsx
import { BaseBanner } from '@sds/experimental';

const MyComponent = () => (
  <BaseBanner
    title="Welcome to our platform"
    subtitle="Explore and enjoy your experience!"
    mediaUrl="/assets/welcome-image.png"
    onClose={() => console.log('Closed')}
  />
);
```

### Promotional Banner with Actions
```tsx
const PromoBanner = () => (
  <BaseBanner
    title="Boost your productivity"
    subtitle="Discover new features that will help you work more efficiently"
    mediaUrl="/assets/productivity-video.mp4"
    primaryAction={{
      label: "Get Started",
      onClick: () => handleStart(),
      variant: "default"
    }}
    secondaryAction={{
      label: "Learn More",
      onClick: () => handleLearnMore(),
      variant: "outline"
    }}
  >
    Thousands of teams already trust our tools to plan and control costs.
  </BaseBanner>
);
```

## Variants and States

### Loading State
When `isLoading` is set to `true`, the banner will display a skeleton or loading indicator to prevent layout shift while assets are being fetched.

### Media Support
The `mediaUrl` can point to either static images or video files. The component handles the rendering logic based on the file type or provided URL.

## Best Practices
- **Concise Titles**: Keep titles short and punchy to ensure they are readable at a glance.
- **High-Quality Media**: Use optimized images or videos to maintain performance while providing a premium feel.
- **Clear Actions**: Ensure the `primaryAction` label clearly describes what happens when clicked (e.g., "Upgrade Now" instead of "Click Here").
- **Dismissibility**: Always provide an `onClose` handler if the banner is not a critical system requirement, allowing users to manage their workspace.

## Related Skills
- For Icon components used in actions, see the skill in ./references/icons.md
- For standard button variants and behaviors, see the skill in ./references/button.md

## Sub-components

- **Banners**: See ./references/banners.md