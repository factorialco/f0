# F0Image

Image primitive for React Native in F0.

## Overview

`F0Image` is a thin wrapper around `expo-image` with className support and consistent defaults for `contentFit`, `transition`, and `cachePolicy`.

## Usage

<!-- prettier-ignore -->
```tsx
import { F0Image } from "@factorialco/f0-react-native"

<F0Image
  source={{ uri: "https://example.com/avatar.png" }}
  className="h-8 w-8 rounded-full"
  accessibilityLabel="Profile picture"
/>
```

## Props

| Prop          | Type                | Default           | Description                    |
| ------------- | ------------------- | ----------------- | ------------------------------ |
| `source`      | `ImageSource`       | required          | Image source                   |
| `className`   | `string`            | `"h-full w-full"` | Utility classes for layout     |
| `contentFit`  | `ImageContentFit`   | `"cover"`         | Content fit mode               |
| `transition`  | `number \| boolean` | `150`             | Transition duration / behavior |
| `cachePolicy` | `ImageCachePolicy`  | `"memory-disk"`   | Caching policy                 |

All other supported `expo-image` props are forwarded.

## Testing

Main tests:

- `src/components/primitives/F0Image/__tests__/F0Image.spec.tsx`
