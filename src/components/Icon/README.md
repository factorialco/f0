# Icon Component

The Icon component is used to render SVG icons from the F0 Design System in React Native applications.

## Import Pattern

```tsx
// Import the Icon component
import { Icon } from "@factorialco/f0-react-native";

// Import specific icons from app or modules directories
import { AppIcons, ModuleIcons } from "@factorialco/f0-react-native";

// Use the Icon component with the icon as a prop
<Icon icon={AppIcons.Archive} size="md" />
<Icon icon={ModuleIcons.Home} size="lg" />
```

## Props

| Prop      | Type                         | Default | Description                             |
| --------- | ---------------------------- | ------- | --------------------------------------- |
| icon      | IconType                     |         | The icon component to render            |
| size      | "xs" \| "sm" \| "md" \| "lg" | "md"    | The size of the icon                    |
| className | string                       |         | Additional classes for styling the icon |
| testID    | string                       |         | Test ID for testing                     |
| ...props  | SvgProps                     |         | Additional props for the SVG component  |

## Styling with NativeWind

The Icon component is designed to work with NativeWind, allowing you to style icons using Tailwind CSS classes:

```tsx
// Style using Tailwind CSS classes
<Icon icon={AppIcons.Archive} className="text-f1-icon-secondary" />
```

## Available Icons

The library includes two sets of icons:

1. **App Icons** - General purpose icons used throughout the application
2. **Module Icons** - Icons representing specific modules in the Factorial application

## Examples

```tsx
import { Icon } from "@factorialco/f0-react-native";
import { AppIcons, ModuleIcons } from "@factorialco/f0-react-native";

// Basic usage
<Icon icon={AppIcons.Calendar} />

// With size variant
<Icon icon={AppIcons.ChevronDown} size="xs" />
<Icon icon={AppIcons.Check} size="sm" />
<Icon icon={ModuleIcons.Home} size="md" />
<Icon icon={ModuleIcons.Settings} size="lg" />

// With color styling
<Icon icon={AppIcons.Heart} className="text-red-500" />
<Icon icon={AppIcons.InfoCircle} className="text-blue-500" />
```
